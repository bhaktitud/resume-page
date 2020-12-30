import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import ProjectsAndExperiments from './components/ProjectsAndExperiments/ProjectsAndExperiments';
import Educations from './components/Educations/Educations';
import ScrollToTop from "react-scroll-to-top";
import CommentSection from './components/CommentSection/CommentSection';

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop smooth color="#6f00ff" />
      <Content />
      <ProjectsAndExperiments />
      <Educations />
      <CommentSection />
    </div>
  );
}

export default App;
