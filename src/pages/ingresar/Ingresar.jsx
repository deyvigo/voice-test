import { TextField, Button, Container, Box, Typography} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export const Ingresar = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleLogin = handleSubmit((data) => {
    console.log(data);
    //primero la logica de comprobación del login
    navigate('/home');
  });

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