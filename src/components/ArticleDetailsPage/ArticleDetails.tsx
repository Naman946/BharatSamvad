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
            
            <Typography variant="h5" sx={{ mt: 2 }}>
                {article.title}
            </Typography>
            <br></br>
            <CardMedia
                component="img"
                height="300"
                image={`data:image/jpeg;base64,${article.image}`}
                alt={article.title}
            />
            <br></br>
            <Typography variant="body1" sx={{ mt: 2 }}>
                {article.content}
            </Typography>
        </Box>
    );
};

export default ArticleDetails;
