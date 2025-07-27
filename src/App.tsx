import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import Hero from './components/Hero';
import ResourceCards from './components/ResourceCards'; // This component likely contains the clickable resource items
import TopicsCarousel from './components/TopicsCarousel';
import BlogPosts from './components/BlogPosts';
import NewsletterArchive from './components/NewsletterArchive';
import FinalCTA from './components/FinalCTA';
import ResourceCardExpand from './components/ResourceCardExpand'; 
import Footer from './components/Footer';// Import your resource expansion component
import MovingTagsSlider from './components/MovingTags';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white" id=''>
        <Header /> {/* Header might be common across pages, so placed outside Routes */}
        <Routes>
          {/* Route for the main page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <TopicsCarousel /> */}
                <BlogPosts />
                <MovingTagsSlider />
                <ResourceCards /> {/* Your list of clickable resources */}
                
                {/* <NewsletterArchive /> */}
                {/* <FinalCTA /> */}
                
                <Footer />
              </>
            }
          />
          {/* Route for displaying individual resource details */}
          {/* The ':id' is a URL parameter that will be passed to ResourceCardExpand */}
          <Route path="/resource/:id" element={<ResourceCardExpand />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;