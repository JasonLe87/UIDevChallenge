import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Graph from '../Graph/Main';
import MovieOrder from '../MovieOrderCard/Main';

const GraphCard = ({MovieData, progressBarColor}) => {

  const theme = useTheme();
  const useStyle = createUseStyles({
    container: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateRows: "repeat(5, minmax(0, 1fr))",
      gap: "0.75rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      "@media (max-width: 599px)": {
        paddingLeft: ".25rem",
        paddingRight: ".25rem",
      }
    },
      header: {
        gridRow: "span 1 / span 1",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "1.25rem",
        "@media (max-width: 599px)": {
          flexDirection: "column"
        }
      },
        headerMain: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 599px)": {
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "1rem"
          }
        },
          headerTop: {
            display: "flex",
            flexDirection: "column",
          },
            headerTopTitle : {
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              color: ({theme}) => theme.Mocha80,
              fontWeight: 600,
              marginBottom: "0.5rem"
            },
            headerTopComparison: {
              color: ({theme}) => theme.Mocha50,
            },
          headerBottom: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            '@media (max-width: 1269px)': {
              alignItems: "flex-start"
            }
          },
            headerBottomCountry: {
              display: "flex",
              flexDirection: "row",
              color: ({theme}) => theme.Mocha50,
              '@media (max-width: 1269px)': {
                flexDirection: "column"
              }
            },

              bottomCountryData: {
                fontWeight: 600,
                marginLeft: ".5rem"
              },

            headerBottomSales: {
              display: "flex",
              flexDirection: "row",
              color: ({theme}) => theme.Mocha50,

            },
              bottomSalesData: {
                marginLeft: ".5rem"
              },

      body: {
        gridRow: "span 3 / span 3",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        gap: "0.75rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        "@media (max-width: 599px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }
      },
        graphContainer: {
          gridColumn: "span 4 / span 4",
          width: "75%",
          "@media (max-width: 599px)": {
            width: "98%"
          },
          "@media (max-width: 1279px)": {
            width: "100%"
          }

        },
        movieOrderList: {
          gridColumn: "span 2 / span 2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          //space-y-2
        },

      footer: {
        gridRow: "span 1 / span 1",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color : ({theme}) => theme.Mocha60,
        "@media (max-width: 599px)": {
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "1rem",
          paddingRight: "1rem"
        }

      },
        footerAnalysis: {
          width: "75%",
          '@media (max-width: 1279px)': {
            width: "60%"
          },
          "@media (max-width: 599px)": {
            width: "100%"
          }
        },
          footerTitle: {
            fontWeight: 600
          },
        footerSVGDate: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: ({theme}) => theme.Mocha40
          //space-x-2
        },
          footerSVG: {
            height: "1rem",
            width: "1rem",
            color: ({theme}) => theme.Mocha60,
            marginRight: ".5rem"
          }
  });

  const classes = useStyle({theme})

  return (
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerMain} >
            <div className={classes.headerTop}>
              <div className={classes.headerTopTitle}>
                Total Movie Sales
              </div>
              <div className={classes.headerTopComparison}>
                Comparison: {MovieData[0].title} and {MovieData[1].title}
              </div>
            </div>
            <div className={classes.headerBottom}>
              <div className={classes.headerBottomCountry}>
                <div>
                  Average value of sales in the past month in:
                </div>
                <div className={classes.bottomCountryData}>
                  United States
                </div>
              </div>
              <div className={classes.headerBottomSales}>
                <div>
                  All sales:
                </div>
                <div className={classes.bottomSalesData}>
                  162,862
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className={classes.body}>

            <div className={classes.graphContainer}>
              <Graph MovieData={MovieData} />
            </div>


            <div className={classes.movieOrderList}>
              {MovieData.map((data, index) => {
                return (
                  <MovieOrder data={data} progressBarColor={progressBarColor[index]} />
                )
              })}
            </div>

          </div>

        <div className={classes.footer}>
          <div  className={classes.footerAnalysis}>
            <div className={classes.footerTitle}>
              Analysis of Sales:
            </div>
            <div>
              The value has been changed over time, and last month reached a level over $50,000
            </div>
          </div>
          <div className={classes.footerSVGDate}>
            <svg xmlns="http://www.w3.org/2000/svg" className={classes.footerSVG} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              Update on {new Date().toISOString().replace('-', '.').split('T')[0].replace('-', '.')}
            </div>
          </div>
        </div>
      </div>
  );
};

export default GraphCard;