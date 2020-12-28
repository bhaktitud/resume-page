import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content';
import ProjectsAndExperiments from './components/ProjectsAndExperiments/ProjectsAndExperiments';
import Educations from './components/Educations/Educations';
import Experiences from './components/Experiences/Experiences';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <ProjectsAndExperiments />
      <Educations />
    </div>
  );
}

export default App;
