import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-ui/core';
import Navbar from './Components/Navbar';
import MyCard from './Components/MyCard';
import { getMatches } from './API/Api';

const App = () => {

  const [matches, setMatches] = useState([]);

  useEffect(
    () => {
      getMatches().then(
        (data) => {
          setMatches(data.matches);
        }
      ).catch(
        (error) => {
          // alert('Could not Load Data ' , error);
        }
      );
    }, []
  );

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>VJ's Cricket LiveScore Web App</h1>

      {
        matches.map(
          (match) => {
            return (
              (match.type === "Twenty20") ? <MyCard key={match.unique_id} match={match}></MyCard> : ' '
            );
          }
        )
      }




    </div>
  );
}

export default App;