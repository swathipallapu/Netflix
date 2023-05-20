import React from 'react'
import './App.css';
import ROW from './ROW';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner></Banner>
      <ROW title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <ROW title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <ROW title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <ROW title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <ROW title="Comedy NOW" fetchUrl={requests.fetchComedyMovies}/>
      <ROW title="Horror NOW" fetchUrl={requests.fetchHorrorMovies}/>
      <ROW title="Romance NOW" fetchUrl={requests.fetchRomanceMovies}/>
      <ROW title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

   
    </div>
  );
}

export default App;
