import Link from "next/link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  linkStyle: {
    textDecorationStyle: "none",
    textDecoration: "none",
    color: "rgba(1, 169, 250, 0.9251050762101716)",
    fontSize: "0.9rem",
    cursor: "pointer",
    paddingLeft: 5,
    paddingRight: 5,
    "&:hover": {
      color: "#fff",
    },
  },
}));

function CLink(props) {
  const classes = useStyles();
  return (
    <Link href={props.path}>
      <span className={classes.linkStyle}>{props.children}</span>
    </Link>
  );
}

export default CLink;
