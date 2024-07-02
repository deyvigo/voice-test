import { TextField, Button, Container, Box, Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Ingresar = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginData, setLoginData] = useState(null)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      const token = localStorage.getItem('token')
      const API = 'http://127.0.0.1:5000/user/first/login'
      fetch(API, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(responseData => {
        if (responseData.data && responseData.data.length === 0) {
          navigate("/elegir-categoria")
        } else {
          navigate("/main/inicio")
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
    }
  }, [isLogin])

  const handleLogin = handleSubmit((formData) => {
    const API_LOGIN = 'http://127.0.0.1:5000/login'
    fetch(API_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.status === 401) {
        alert('Usuario o contraseña incorrectos')
        throw new Error('Usuario o contraseña incorrectos')
      }
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(responseData => {
      localStorage.setItem('token', responseData.token)
      setIsLogin(true)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    })
  })

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          LOGIN
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            error={!!errors.username}
            helperText={errors.username ? 'Username is required' : ''}
            {...register('username', { required: true })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password ? 'Password is required' : ''}
            {...register('password', { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Don't have an account? "}
          <Link to="/registro">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
}