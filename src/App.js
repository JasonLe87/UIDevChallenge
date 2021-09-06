import React from 'react';
import { createUseStyles, ThemeProvider } from "react-jss";

import MovieCard from './Components/MovieCard/Main';
import GraphCard from './Components/GraphCard/Main';

const App = () => {


  const MovieData = [
    {
      title: "Movie 1",
      release_date: "04 Jan 2015",
      showtimes: ["May 3, 2015", "May 4, 2015"],
      orders: {
        January: 48,
        February: 48,
        March: 60,
        April: 38,
        May: 55,
        June: 36,
        July: 30,
      },
      total: 2346,
      maximum: 5000
    },
    {
      title: "Movie 2",
      release_date: "04 Jan 2015",
      showtimes: ["May 3, 2015", "May 4, 2015"],
      orders: {
        January: 63,
        February: 60,
        March: 50,
        April: 61,
        May: 46,
        June: 34,
        July: 49,
      },
      total : 4422,
      maximum: 7000
    },
  ];

  const theme = {
    White : "#FFFFFF",
    Mocha5 : "#F7F6F6",
    Mocha10 : "#EEECEC",
    Mocha20 : "#DFDEDE",
    Mocha30 : "#BFBEBC",
    Mocha40 : "#9F9D9B",
    Mocha50 : "#7F7D79",
    Mocha60 : "#5F5C58",
    Mocha70 : "#474542",
    Mocha80 : "#302E2C",
    Ultrablue5 : "#E8F2F4",
    Ultrablue10 : "#CEE3E8",
    Ultrablue20 : "#9DC7D2",
    Ultrablue30 : "#6BAABB",
    Ultrablue40 : "#3A8EA5",
    Ultrablue50 : "#09728E",
    Ultrablue60 : "#077566B",
    Ultrablue70 : "#04485B",
    Ultrablue80 : "#053947",
    acknowledgeColor: "#4FA806",
    hiAlertColor: "#E42508",
    alertColor: "#E4A206",
    colorGold: "#F7E0AA"
  };

  const progressBarColor = [
    '#7F7D79',
    '#4FA806'
  ];

  const useStyle = createUseStyles({
    App: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gridTemplateRows: "repeat(3, minmax(0, 1fr))",
      gap: ".75rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
      paddingTop: "2.5rem",
      paddingBottom: "2.5rem",
      backgroundColor: theme.Mocha10,
      "@media (max-width: 599px)": {
          height: "auto",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
        }
    },
      graphCard: {
        gridRow: "span 2 / span 2",
        gridColumn: "span 4 / span 4",
        borderRadius: ".25rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        "@media (max-width: 599px)": {
            height: "100vh",
          }
      },
      movieCard: {
        gridRow: "span 1 / span 1",
        gridColumn: "span 2 / span 2",
        borderRadius: ".25rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        "@media (max-width: 599px)": {
            height: "25vh",
          }
      }
  });
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <div className={classes.graphCard}>
          <GraphCard MovieData={MovieData} progressBarColor={progressBarColor} />
        </div>

        {MovieData.map((data, index) => {
          return (
            <div key={index} className={classes.movieCard}>
              <MovieCard data={data}/>
            </div>
          )
        })}
      </div>
    </ThemeProvider>
  );
};

export default App;
