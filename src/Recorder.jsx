import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import Fab from '@mui/material/Fab'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MicOffIcon from '@mui/icons-material/MicOff';

export const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const audioChunksRef = useRef([])
  const mediaRecorderRef = useRef(null)
  const [transcription, setTranscription] = useState()
  const navigate = useNavigate()

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true})
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstart = () => {
      }

      mediaRecorder.onstop = async () => {
        await handleUpload(audioChunksRef.current) // Subir los chunks después de detener la grabación
        audioChunksRef.current = []; // Resetear los chunks de audio
        await getTranscription()
      }
      
      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("No se pudo grabar", error)
    }
  }

  const handleUpload = async (audioChunks) => {
    try {
      if (audioChunks.length === 0) {
        throw new Error('No hay audio para subir')
      }
      const formData = new FormData()
      const blob = new Blob(audioChunks, { type: 'audio/wav'})
      formData.append('audio', blob, 'grabacion.wav')

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })

      const responseData = await response.json()
      console.log('respuesta del servidor', responseData)
    } catch (error) {
      console.error('Error al subir el archivo catch', error)
    }
  }

  const getTranscription = async () => {
    const API_URL = 'http://localhost:5000/transcribe'
    const response = await fetch(API_URL, {
      method: 'GET'
    })

    if (!response.ok) return

    const responseData = await response.json()
    setTranscription(responseData)
    if (responseData.transcription === 'no se pudo entender el audio') {
      alert("No se entendió el audio")
      return
    }
    navigate('/main/' + responseData.transcription)
  }

  return (
    <>
      {/* <div>Tiempo transcurrido { formatTime(recordingTime) }</div> */}
      <div>
        {
          isRecording ? (
            <Fab onClick={ handleStopRecording } color="primary">
              <KeyboardVoiceIcon/>
            </Fab>
          ) : (
            <Fab onClick={ handleStartRecording } color="error">
              <MicOffIcon/>
            </Fab>
          )
        }
        {
          transcription?.transcription && <h3>Transcripción: <span>{ transcription.transcription }</span></h3>
        }
      </div>
    </>
  )
}