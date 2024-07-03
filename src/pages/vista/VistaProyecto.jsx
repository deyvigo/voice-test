import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { GenericInfo } from '../../components/GenericInfo';
import { SpecificInfo } from '../../components/SpecificInfo/SpecificInfo';
import { Likes } from '../../components/Likes';
import { Comments } from '../../components/Comments/Comments';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/api';
import { useFetch } from '../../hooks/useFetch';

export const VistaProyecto = () => {
  const { idProject } = useParams()
  const [token, setToken] = useState(null)
  const API_PROJECT = `${API_URL}/get/project/id/${idProject}`
  const { data: dataProject, } = useFetch(token ? API_PROJECT : null, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  useEffect(() => {
    const tok = localStorage.getItem('token')
    setToken(tok)
  }, [])
  
  const { id_project, category, creator, description, facebook, instagram, goal, title, current_money, is_liked, comments, img_project } = dataProject?.data || {};

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Grid container>
        <GenericInfo
          imgProject={img_project}
          title={title}
          description={description}
          goal={goal}
          facebook={facebook}
          instagram={instagram}
          category={category}
        />
        <SpecificInfo
          goal={goal}
          current={current_money}
          imgProfile={creator?.img_user}
          firstName={creator?.first_name}
          lastName={creator?.last_name}
          bio={creator?.biography}
          linkedin={creator?.linkedin}
          idProject={id_project}
        />
      </Grid>
      <Likes
        isLiked={is_liked}
        idProject={id_project}
      />
      <Comments
        img={creator?.img_user}
        comments={comments ? comments : []}
        idProject={id_project}
      />
    </Container>
  )
}