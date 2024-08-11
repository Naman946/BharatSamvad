import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Container, CssBaseline } from '@mui/material';
import MediaGrid from './components/mediaGrid';
import ArticleDetails from './components/ArticleDetailsPage/ArticleDetails'; // Ensure correct import path
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<MediaGrid />} />
                <Route path="/rajasthan" element={<MediaGrid />} />
                <Route path="/uttar-pradesh" element={<MediaGrid />} />
                <Route path="/madhyapradesh" element={<MediaGrid />} />
                <Route path="/manoranjan" element={<MediaGrid />} />
                <Route path="/rajneeti" element={<MediaGrid />} />
                <Route path="/epaper" element={<MediaGrid />} />
            <Route path="/article" element={<ArticleDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
