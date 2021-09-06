import React, { useState, useRef }  from 'react';
import { createUseStyles, useTheme } from "react-jss";

const PrimaryButton = ({children}) => {

  const theme = useTheme()
  const useStyles = createUseStyles({
    myButton : {
      backgroundColor : ({theme}) => theme.Ultrablue40,
      userSelect: "none",
      color: "white",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      paddingTop: ".5rem",
      paddingBottom: ".5rem",
      borderRadius: ".25rem",
      "&:hover": {
        backgroundColor: ({theme}) => theme.Ultrablue30
      },
      "&:focus": {
        outline: "none",
        border: "1px solid black",
      },
      "&:active": {
        backgroundColor: ({theme}) => theme.Ultrablue50,
        color: ({theme}) => theme.Ultrablue30
      },
      "@media (max-width: 599px)": {
        fontSize: ".875rem",
        lineHeight: "1.25rem",
        paddingLeft: ".625rem",
        paddingRight: ".625rem",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
      }
    },

  })
  const classes = useStyles({theme})
  const buttonRef = useRef(null)

  return (
    <button ref={buttonRef} onClick={() => buttonRef.current.focus()} className={classes.myButton}  >
      {children}
    </button>
  );
};

export default PrimaryButton