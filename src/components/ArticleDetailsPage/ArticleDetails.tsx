import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';

const ArticleDetails = () => {
    const location = useLocation();
    const article = location.state?.article;

    if (!article) {
        return <Typography variant="h6">Article not found</Typography>;
    }

    return (
        <Box sx={{ p: 2 }}>
            
            <Typography variant="h5" sx={{ mt: 2 ,
                fontWeight: 'bold', 
                color: 'red' 
            }}>
                {article.title}
            </Typography>
            <br></br>
            <CardMedia
    component="img"
    height="300"
    image={`data:image/jpeg;base64,${article.image}`}
    alt={article.title}
    sx={{
        objectFit: 'cover',  // Adjusts how the image fits in the container
        width: '100%',       // Ensures the image takes the full width of its container
        height: 'auto',      // Adjusts height to maintain aspect ratio
    }}
/>

            <br></br>
            <Typography variant="body1" sx={{ mt: 2 }}>
                {article.content}
            </Typography>
        </Box>
    );
};

export default ArticleDetails;
