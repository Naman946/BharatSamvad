import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Link, Box, Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const strTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`; // Fixed the string interpolation here
            setCurrentTime(strTime);
        };

        updateTime(); // Initial call to set the current time immediately
        const intervalId = setInterval(updateTime, 1000); // Update the time every second

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);
    
    return (
        <Box sx={{ backgroundColor: 'blue', color: 'white', py: 4 }}>
            <Container>
                <Grid container spacing={4}>
                <Grid item xs={12} sm={8}>
    <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
            mb: 2, 
            fontWeight: 'bold', 
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
        }}
    >
        Founder
    </Typography>
    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item>
            <Avatar
                alt="Owner Name"
                src="\founder_avatar.jpeg" // Ensure this path is correct or update accordingly
                sx={{ width: 100, height: 100, boxShadow: 3 }}
            />
        </Grid>
        <Grid item xs sx={{ pl: 2 }}> {/* Added padding-left here */}
            <Typography 
                variant="body1" 
                sx={{ 
                    color: 'white', 
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
                    fontSize: '1rem' 
                }}
            >
                भारत संवाद एक प्रमुख समाचार चैनल है जो देश और दुनिया की ताज़ा ख़बरों को सटीकता और विश्वसनीयता के साथ पेश करता है। हमारा मानना है कि एक सूचित नागरिक समाज की नींव है, और इस विश्वास के साथ, हम हर खबर की गहराई में जाकर उसकी सही तस्वीर आपके सामने लाते हैं। भारत संवाद में, हम सत्यता, निष्पक्षता और निर्भीकता के साथ पत्रकारिता के उच्च मानकों को बनाए रखते हैं। हम आपके विश्वास को बनाए रखने के लिए निरंतर प्रयासरत हैं और आपके हर सवाल और सुझाव का स्वागत करते हैं।
            </Typography>
        </Grid>
    </Grid>
    <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
            fontWeight: 'bold', 
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
        }}
    >
        Mayank Maheshwari
    </Typography>
</Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
                        <Typography variant="h4" gutterBottom sx={{ mb: 2, fontWeight: 'bold', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                            Contact Us
                        </Typography>
                        <Grid container spacing={2} direction="column" alignItems="flex-end">
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'center', boxShadow: 3, p: 1, borderRadius: 1 }}>
                                    <WhatsAppIcon sx={{ mr: 1, color: '#25D366' }} />
                                    <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                        +91 9009317218
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'center', boxShadow: 3, p: 1, borderRadius: 1 }}>
                                    <EmailIcon sx={{ mr: 1, color: '#D44638' }} />
                                    <Typography variant="body1" sx={{ color: 'white', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                                    bharatsamvadlive@gmail.com
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" sx={{ mt: 2 }}>
                    <Link
                        href="https://www.facebook.com/Bharatsamvad"
                        sx={{ mx: 1, color: 'white', '&:hover': { color: '#3b5998' } }}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon />
                    </Link>
                    <Link
                        href="https://www.instagram.com/bharatsamvadtv"
                        sx={{ mx: 1, color: 'white', '&:hover': { color: '#D10C4E' } }}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@bharatsamvadtv"
                        sx={{ mx: 1, color: 'white', '&:hover': { color: 'red' } }}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <YouTubeIcon />
                    </Link>
                    <Link
                        href="https://twitter.com/Bharatsamvadtv"
                        sx={{ mx: 1, color: 'white', '&:hover': { color: '#1DA1F2' } }}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon />
                    </Link>
                    <Typography
                        variant="body1"
                        sx={{
                            position: 'fixed',
                            bottom: 0,
                            right: 0,
                            backgroundColor: 'red',
                            color: 'white',
                            p: 1,
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            margin: '20px'
                        }}
                    >
                        {currentTime}
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
