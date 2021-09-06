import React, { useState, useEffect } from 'react';
import { createUseStyles, useTheme } from "react-jss";

const ProgressBar = ({progressBarColor, total, maximum}) => {

  const [barProgress, setBarProgress] = useState(0)

  const theme = useTheme()
  const useStyle = createUseStyles({
    container : {
      position: "relative",
      paddingTop: ".25rem"
    },
      main : {
        overflow: "hidden",
        height: ".5rem",
        marginBottom: "1rem",
        fontSize: "0.75rem",
        lineHeight: "1rem",
        display: "flex",
        borderRadius: ".25rem",
        backgroundColor: ({theme}) => theme.Mocha10
      },
        bar: {
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "nowrap",
          color: "white",
          justifyContent: "center",
          backgroundColor: progressBarColor
        }
  })
  const classes = useStyle({theme})

  useEffect(() => {
    const percent = (total / maximum) * 100
    setBarProgress(percent)
  }, [])

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.main}>
          <div style={{ width: `${barProgress}%` }} className={classes.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;