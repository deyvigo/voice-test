import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { API_URL } from '../constants/api';
import { useFetch } from '../hooks/useFetch';
import { v4 as uuidv4 } from 'uuid';

export const PersonalInfo = ({ name, lastName, username, createdDate, linkedin, description, imgUser }) => {
  const token = localStorage.getItem('token')
  const [saved, setSaved] = useState(false)
  const [mLinkedin, setMLinkedin] = useState(false)
  const [avatar, setAvatar] = useState('https://cdn-icons-png.flaticon.com/512/149/149071.png')
  const [bio, setBio] = useState(description ? description : '')
  const [linked, setLinked] = useState(linkedin ? linkedin : '')
  const [imgProfile, setImgProfile] = useState(null)

  const [apiChangeBio, setApiChangeBio] = useState(null)
  const [apiChangeLinked, setApiChangeLinked] = useState(null)
  const [apiChangeImg, setApiChangeImg] = useState(null)

  const { data: dataBio } = useFetch(apiChangeBio, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      biography: bio
    })
  })

  const { data: dataLinked } = useFetch(apiChangeLinked, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      linkedin: linked
    })
  })

  const { data: dataImg } = useFetch(apiChangeImg?.url, apiChangeImg?.options)

  const saveChanges = () => {
    setSaved(!saved)
    setApiChangeBio(null)
  }

  const updateLink = () => {
    setMLinkedin(!mLinkedin)
    setApiChangeLinked(null)
  }

  const handleSubmitLinked = () => {
    setMLinkedin(!mLinkedin)
    setApiChangeLinked(API_URL + '/user/update/profile/linkedin')
  }

  const handleSubmitBio = () => {
    setSaved(!saved)
    setApiChangeBio(API_URL + '/user/update/profile/bio')
  }

  const handleChangeLinked = (e) => {
    setLinked(e.target.value)
  }

  const handleChangeBio = (e) => {
    setBio(e.target.value)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formatData = new FormData();
    formatData.append('image', file, `${uuidv4()}.png`);
    setApiChangeImg({
      url: API_URL + '/user/update/profile/image',
      options: {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formatData
      }
    })
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    if (imgUser) {
      setAvatar(`${API_URL}/img/profile/${imgUser}`)
      console.log(imgUser)
    }
  }, [imgUser])
 
  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" gutterBottom sx={{ textAlign: 'center' }}>Información personal</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={4} >
          <Box>
            <Typography variant="body1" component="p"><strong>NOMBRE: </strong></Typography>
            <Typography variant="body2" component="p">{name}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="p"><strong>APELLIDOS: </strong></Typography>
            <Typography variant="body2" component="p">{lastName}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="p"><strong>USERNAME: </strong></Typography>
            <Typography variant="body2" component="p">{username}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="p" sx={{ pr: { xs: 2, sm: 0 } }}><strong>FECHA DE REGISTRO: </strong></Typography>
            <Typography variant="body2" component="p">{formatDate(createdDate)}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" component="p"><strong>LINKEDIN: </strong></Typography>
            {
              mLinkedin
                ? <TextField onChange={handleChangeLinked} value={linked} sx={{ width: '80%' }} />
                : <Box><a href={linkedin ? linkedin : '#'}>
                  <LinkedInIcon sx={{ width: 50, height: 50, color: '#0e76a8' }} />
                </a></Box>
            }
            {
              mLinkedin
                ? <Button variant="contained" sx={{ mt: 1 }}
                    onClick={handleSubmitLinked}>
                    Guardar
                  </Button>
                : <Button variant="contained" sx={{ mt: 1 }}
                    onClick={ updateLink }>
                    Actualizar
                  </Button>
            }
            {/* <Button variant="contained" sx={{ mt: 1 }}
              onClick={() => setMLinkedin(!mLinkedin)}>
              {mLinkedin ? 'Guardar' : 'Actualizar'}
            </Button> */}
          </Box>
        </Grid>
        <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'}>
          <Avatar sx={{ width: 150, height: 150, alignSelf: 'center' }} src={avatar} />
          <Button
                variant="contained"
                component="label"
                sx={{ width: '100%', mt: 1 }}
            >
                Subir Imagen
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageUpload}
                />
          </Button>
          <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 2 }}>Descripción:</Typography>
          <TextField sx={{ width: '100%' }} multiline rows={3} disabled={!saved} value={bio} onChange={ handleChangeBio }/>
          {
            saved ? (
              <Button variant="contained" sx={{ width: '100%', mt: 2 }}
              onClick={ handleSubmitBio }>
              Guardar
              </Button>
            ) : (
              <Button variant="contained" sx={{ width: '100%', mt: 2 }}
              onClick={saveChanges}>
              Actualizar
              </Button>
            )
          }
          {/* <Button variant="contained" sx={{ width: '100%', mt: 2 }}
            onClick={saveChanges}>
            {saved ? 'Guardar' : 'Actualizar'}
          </Button> */}
        </Grid>
      </Grid>
    </Paper>
  )
}