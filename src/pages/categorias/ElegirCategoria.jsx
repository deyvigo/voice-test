import { Container, Grid, Typography, Paper, ButtonBase, Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ElegirCategoria = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [
        'Tecnología',
        'Arte y Cultura',
        'Emprendimiento',
        'Ayuda Social',
        'Otros'
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category)
                : [...prevSelected, category]
        );
    };

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography variant="h4" component="h1" gutterBottom mb={2}>
                    Elije categorías que desees que te recomendemos
                </Typography>
                <Grid container spacing={2}>
                    {
                        categories.map((category) => (
                            <Grid item xs={12} sm={6} key={category}>
                                <ButtonBase
                                    style={{ width: '100%' }}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            padding: 2,
                                            width: '100%',
                                            backgroundColor: selectedCategories.includes(category) ? 'lightblue' : 'white'
                                        }}
                                    >
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            {category}
                                        </Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                        ))
                    }
                </Grid>
                <Button component={Link} to="/register" variant="contained" sx={{ mt: 5, width: '50%', height: '50px', mb: 5 }}>
                    Continuar
                </Button>
            </Box>
        </Container>
    )
}