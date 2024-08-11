import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface Article {
    title: string;
    content: string;
    image: string; // base64 image string
}

// interface Advertisement {
//     title: string;
//     image: string; // base64 image string
// }

const MediaGrid = () => {
    const location = useLocation();
    const [mediaItems, setMediaItems] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const searchParams = new URLSearchParams(location.search);
            const categoryId = searchParams.get('categoryId') || '';

            //let url = 'http://localhost:8080/api/v1/articles';
            let url = 'https://newswebsite-fza6.onrender.com/api/v1/articles/by-category?categoryId=rajneeti';

            if (categoryId) {
                url = `https://newswebsite.onrender.com/api/v1/articles/by-category?categoryId=${categoryId}`;
                
                //url = `http://localhost:8080/api/v1/articles/by-category?categoryId=rajneeti`;

            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Article[] = await response.json();
                setMediaItems(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [location.search]);

    // const [advertisements] = useState<Advertisement[]>([
    //     { title: 'Ad 1', image: 'base64adstring2' },
    //     { title: 'Ad 2', image: 'base64adstring2' },
    //     { title: 'Ad 3', image: 'base64adstring3' },
    //     { title: 'Ad 4', image: 'base64adstring4' }
    // ]);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'red', fontWeight: 'bold' }}>
                बड़ी खबरें
            </Typography>
            <Grid container spacing={2}>
                {mediaItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Link
                            to="/article"
                            state={{ article: item }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`data:image/jpeg;base64,${item.image}`}
                                    alt={item.title}
                                />
                                <Typography variant="body2" color="textSecondary" component="p" sx={{ p: 2 }}>
                                    {item.title}
                                </Typography>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MediaGrid;
