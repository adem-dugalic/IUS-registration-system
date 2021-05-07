import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    overflowY: "auto",
  },
  root2: {
    position: "relative",
    margin: "2%",
    padding: 8,
    backgroundColor: "#fff",
  },
  innerRoot: {
    backgroundColor: "#292626",
    padding: 5,
    height: "100%",
  },
  innerInnerRoot: {
    padding: 5,
    backgroundColor: "#fff",
    height: "100%",
  },
  innerInnerInnerRoot: {
    padding: 5,
    backgroundColor: "#292626",
    height: "100%",
  },
  innerInnerInnerInnerRoot: {
    padding: 5,
    backgroundColor: "#fff",
    backgroundImage: "url(/IUSlogo2.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100%",
  },
});

function TranscriptLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.root2}>
        <div className={classes.innerRoot}>
          <div className={classes.innerInnerRoot}>
            <div className={classes.innerInnerInnerRoot}>
              <div className={classes.innerInnerInnerInnerRoot}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranscriptLayout;
