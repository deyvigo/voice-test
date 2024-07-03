import { CreateComment } from "./CreateComment"
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

const comments = [
  {
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' +
      'Tempora, similique facilis praesentium laboriosam maiores ' +
      'officia sunt blanditiis deserunt sed eveniet neque, eius ' +
      'voluptate molestiae fugiat ipsa rerum, id quos ea.',
  },
  {
    avatar: 'https://mui.com/static/images/avatar/2.jpg',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' +
      'Tempora, similique facilis praesentium laboriosam maiores ' +
      'officia sunt blanditiis deserunt sed eveniet neque, eius ' +
      'voluptate molestiae fugiat ipsa rerum, id quos ea.',
  },
  {
    avatar: 'https://mui.com/static/images/avatar/3.jpg',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' +
      'Tempora, similique facilis praesentium laboriosam maiores ' +
      'officia sunt blanditiis deserunt sed eveniet neque, eius ' +
      'voluptate molestiae fugiat ipsa rerum, id quos ea.',
  },
  {
    avatar: 'https://mui.com/static/images/avatar/4.jpg',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' +
      'Tempora, similique facilis praesentium laboriosam maiores ' +
      'officia sunt blanditiis deserunt sed eveniet neque, eius ' +
      'voluptate molestiae fugiat ipsa rerum, id quos ea.',
  }
]

export const Comments = ({ comments, idProject }) => {
  const [commentsArray, setCommentsArray] = useState(comments ? comments : [])

  const handleComment = (comment) => {
    setCommentsArray(prev => [...prev, comment])
  }

  useEffect(() => {
    setCommentsArray(comments)
  }, [comments])

  return (
    <Stack
      direction="column"
      spacing={2}
      mt={3}
    >
      <CreateComment
        idProject={idProject}
        onComment={handleComment}
      />
      {
        commentsArray.map((comment, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={'https://mui.com/static/images/avatar/3.jpg'} sx={{ width: 50, height: 50 }} />
            <Paper sx={{ p: 3 }}>
              <Typography variant="body1">nombre</Typography>
              <Typography variant="body2">{comment.comment}</Typography>
            </Paper>
          </Box>
        ))
      }
    </Stack>
  )
}