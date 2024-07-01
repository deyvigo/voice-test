import { Container, Grid, Typography, Paper, ButtonBase, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const ElegirCategoria = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const API_URL = 'http://127.0.0.1:5000/get/all/category'
  const [categories, setCategories] = useState(null)
  const { data: dataCategories, loading, error } = useFetch(API_URL)
  const navigate = useNavigate()

  useEffect(() => {
    if (dataCategories) {
      setCategories(dataCategories.data)
    }
  }, [dataCategories])

  const handleCategoryClick = (newCategory) => {
    setSelectedCategories((prevCategories) => {
      const isSelected = prevCategories.some((cat) => cat.id_category === newCategory.id_category)
      if (isSelected) {
        return prevCategories.filter((cat) => cat.id_category !== newCategory.id_category)
      } else {
        return [...prevCategories, newCategory]
      }
    })
  }

  const handleSendCategories = () => {
    const token = localStorage.getItem('token')
    const API = 'http://127.0.0.1:5000/user/add/category'
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ categories: selectedCategories })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error')
      }
      return response.json()
    })
    .then(data => {
      navigate("/main/inicio")
    })
    .catch(err => {
      console.error('Error', err)
    })
  }

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4" component="h1" gutterBottom mb={2}>
          Elije categorías que desees que te recomendemos
        </Typography>
        <Grid container spacing={2}>
          {
            categories?.map(({ id_category, name }) => (
              <Grid item xs={12} sm={6} key={id_category}>
                <ButtonBase
                  style={{ width: '100%' }}
                  onClick={() => handleCategoryClick({ id_category, name })}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 2,
                      width: '100%',
                      backgroundColor: selectedCategories.some((prev) => prev.id_category === id_category) ? 'lightblue' : 'white'
                    }}
                  >
                    <Typography variant="h6" component="h2" gutterBottom>
                      {name}
                    </Typography>
                  </Paper>
                </ButtonBase>
              </Grid>
            ))
          }
        </Grid>
        <Button
          onClick={ handleSendCategories }
          variant="contained"
          sx={{ mt: 5, width: '50%', height: '50px', mb: 5 }}
        >
          Continuar
        </Button>
      </Box>
    </Container>
  )
}