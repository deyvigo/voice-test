import { useRef, useState } from "react"

export const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const audioChunksRef = useRef([])
  const mediaRecorderRef = useRef(null)
  const timerRef = useRef(null)
  const [transcription, setTranscription] = useState()

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setRecordingTime((prevtime) => prevtime + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setRecordingTime(0)
  }

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
        startTimer()
      }

      mediaRecorder.onstop = async () => {
        stopTimer()
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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
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
  }

  return (
    <>
      <div>
        <h2>Transcribir Audio</h2>
      </div>
      {/* <div>Tiempo transcurrido { formatTime(recordingTime) }</div> */}
      <div>
        {
          isRecording ? (
            <button
              onClick={ handleStopRecording }
            >
              Detener
            </button>
          ) : (
            <button
              onClick={ handleStartRecording }
            >
              Hablar
            </button>
          )
        }
        {
          transcription?.transcription && <h3>Transcripción: <span>{ transcription.transcription }</span></h3>
        }
      </div>
    </>
  )
}