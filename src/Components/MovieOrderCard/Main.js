import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ProgressBar from '../ProgressBar/Main';

const MovieOrderCard = ({ data, progressBarColor }) => {

  const theme = useTheme();
  const useStyle = createUseStyles({
    container : {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      "@media (max-width: 599px)": {
        paddingLeft: "1rem",
        paddingRight: "1rem"
      },
      "@media (max-width: 1279px)": {
        paddingLeft: "1rem",
        paddingRight: "1rem"
      }
      //space-y-2
    },
      total: {
        color: ({theme}) => theme.Mocha80,
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: "2rem",
        marginBottom: ".5rem",
        "@media (max-width: 599px)": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        }
      },
      title: {
        color: ({theme}) => theme.Mocha50,
        fontSize: ".875rem",
        lineHeight: "1.25rem",
        marginBottom: ".5rem",
        "@media (max-width: 1279px)": {
          fontSize: "0.75rem",
          lineHeight: "1rem",
        }
      },
      progressBar: {
        width: "100%",
        marginBottom: ".5rem"
      }
  });
  const classes = useStyle({theme})

  return (
    <div className={classes.container}>
      <div className={classes.total}>
        {data.total.toLocaleString()}
      </div>
      <div className={classes.title}>
        Total Orders - {data.title}
      </div>
      <div className={classes.progressBar}>
        <ProgressBar progressBarColor={progressBarColor} total={data.total} maximum={data.maximum}/>
      </div>
    </div>
  );
};

export default MovieOrderCard;