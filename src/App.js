import React from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from "react-router-dom"
import './App.scss';
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import MovieDetails from "./components/MovieDetails/MovieDetails"
function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetails/>} />
          <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
