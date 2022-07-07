import "./App.css";
import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner"; 
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/*nav bar*/}
      {/*banner*/}
      <Nav/>
      <Banner />
      <Row
        title="NETFLLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Treinding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
//npm i movie-trailer or npm i react-youtube