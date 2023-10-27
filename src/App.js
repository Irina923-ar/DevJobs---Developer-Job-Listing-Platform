import React from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import HomePage from "./components/HomePage";
import { Routes, Route } from 'react-router-dom';
import IndividualPage from "./components/IndividualPage";


const App = () => {
  return (
    <div>
      <BackgroundImage></BackgroundImage>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/individual-page/:id' element={<IndividualPage></IndividualPage>}/>
      </Routes>
    </div>
  );
};

export default App;