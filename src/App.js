import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Features from './components/features';
import Projects from './components/projects/Project';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
  <Navbar/>
  <div className="max-w-screen-xl mx-auto">
  <Banner/>
  <Features/>
  <Projects/>
  <Resume/>
  <Testimonial/>
  <Contact/>
  <Footer/>

  </div>
 
 </div>
  );
}

export default App;
