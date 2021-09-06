import React from 'react';
import { createUseStyles, useTheme } from "react-jss";

import Button from '../Button/Main';

const MovieCard = ({ data }) => {

  const theme = useTheme()
  const useStyle = createUseStyles({
    container: {
      width: "100%",
      height: "100%",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingTop: "2.5rem",
      backgroundColor: "white",
      "@media (max-width: 599px)": {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: ".75rem",
        paddingBottom: ".75rem"
      }
    },
      wrapper: {
        height: "100%",
        display: "grid",
        gridTemplateRows: "repeat(3, minmax(0, 1fr))",
      },
        innerTitle: {
          gridRow: "span 1 / span 1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          "@media (max-width: 599px)": {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }

        },
          title: {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            color: ({theme}) => theme.Mocha80,
            fontWeight: 600,
            "@media (max-width: 599px)": {
              fontSize: "1rem",
              lineHeight: "1.5rem"
            }
          },
          releaseDateWrapper: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            "@media (max-width: 599px)": {
              fontSize: ".875rem",
              lineHeight: "1.25rem"
            }
          },
            releaseDateTitle: {
              color: ({theme}) => theme.Mocha80,
              fontWeight: 600
            },
            svgClock: {
              color: ({theme}) => theme.Mocha60,
              height: "1rem",
              width: "1rem",
              marginLeft: "5px",
              marginRight: "5px"
            },
            releaseDate: {
              color: ({theme}) => theme.Mocha60,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              "@media (max-width: 599px)": {
                fontSize: ".75rem",
                lineHeight: "1rem"
              }
            },
        innerCard: {
          gridRow: "span 2 / span 2",
          display: "grid",
          gridTemplateRows: "repeat(2, minmax(0, 1fr))",
          "& div": {
            borderWidth: "0 0 1px 0",
          },
          "& div:last-child": {
            borderWidth: "0 0 0 0",
          }
        },
          innerCardFlex: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor:  ({theme}) => theme.Mocha10
          },
            innerCardDate: {
              color: ({theme}) => theme.Mocha60,
              borderColor: "white",
              "@media (max-width: 599px)": {
                fontSize: ".875rem",
                lineHeight: "1.25rem"
              }
            }
  })

  const classes = useStyle({theme})

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.innerTitle}>
          <div className={classes.title}>
            {data.title}
          </div>
          <div className={classes.releaseDateWrapper}>
            <div className={classes.releaseDateTitle}>
              Release Date
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={classes.svgClock} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className={classes.releaseDate}>
              {data.release_date}
            </div>
          </div>
        </div>
        <div className={classes.innerCard}>
          {data.showtimes.map((res, index) => {
            return (
                <div className={classes.innerCardFlex}>
                  <div className={classes.innerCardDate}>
                    {res}
                  </div>
                  <div>
                    <Button >Buy Tickets</Button>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;