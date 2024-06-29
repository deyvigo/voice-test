import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, Controller } from 'react-hook-form';

export const Registro = () => {
  
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const handleRegister = handleSubmit((data) => {
      console.log(data);
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
                  Register
              </Typography>
              <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                  <TextField
                      margin="normal"
                      name='name'
                      fullWidth
                      label="Name"
                      autoComplete="name"
                      required
                      error={!!errors.name}
                      helperText={errors.name ? 'Name is required' : ''}
                      {...register('name', { required: true })}
                  />
                  <TextField
                      name='lastName'
                      margin="normal"
                      fullWidth
                      label="Last Name"
                      autoComplete="lastName"
                      required
                      error={!!errors.lastName}
                      helperText={errors.lastName ? 'Last Name is required' : ''}
                      {...register('lastName', { required: true })}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Controller
                          name="birthdate"
                          control={control}
                          defaultValue={null}
                          rules={{ required: true }}
                          render={({ field }) => (
                              <DatePicker
                                  label="Birthdate"
                                  format="DD/MM/YYYY"
                                  {...field}
                                  onChange={(date) => field.onChange(date)}
                                  slotProps={{ 
                                      textField: { 
                                          fullWidth: true, 
                                          margin: 'normal', 
                                          helperText: errors.birthdate ? 'Birthdate is required' : '',
                                          required: true,
                                          error: !!errors.birthdate
                                      } 
                                  }}
                              />
                          )}
                      />
                  </LocalizationProvider>
                  <TextField
                      margin="normal"
                      fullWidth
                      label="Username"
                      name="username"
                      autoComplete="username" 
                      required
                      error={!!errors.username}
                      helperText={errors.username ? 'Username is required' : ''}
                      {...register('username', { required: true })}
                  />
                  <TextField
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      required
                      autoComplete="current-password"
                      error={!!errors.password}
                      helperText={errors.password ? 'Password is required' : ''}
                      {...register('password', { required: true })}
                  />
                  <TextField
                      margin="normal"
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      required
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword ? 'Confirm Password is required' : ''}
                      {...register('confirmPassword', { required: true })}
                  />
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Register
                  </Button>
              </Box>
          </Box>
      </Container>
  )
}