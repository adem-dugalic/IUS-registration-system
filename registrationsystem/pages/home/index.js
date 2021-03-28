import React, { useState } from "react";
import Bar from "../../Components/Bar";
import Drawer from "../../Components/Drawer";
import Welcome from "../../Components/Welcome";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

//import "../css/App.css";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      position: "relative",
      backgroundImage: "url(/banner1.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    pannelDiv: {
      position: "relative",
      top: "10%",
      left: "10%",
      width: "85%",
      height: "85%",
      display: "flex",
      backgroundColor: "rgb(95, 91, 91, 0.8)",
    },
  })
);

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 800) {
      return true;
    } else return false;
  }
}

const Home = (props) => {
  const classes = useStyles();
  const [isMobile, setisMobile] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setisMobile(getWindowDimensions);
    });
  }

  return (
    <div className={classes.root}>
      <div className={classes.pannelDiv}>
        <Drawer
          mobileOpenFunction={props.setMobileOpen}
          mobileOpen={props.mobileOpen}
        />
        <main className={classes.main}>
          <div className={classes.homeDiv}>
            {isMobile ? (
              <Bar
                setMobileOpen={props.setMobileOpen}
                mobileOpen={props.mobileOpen}
              />
            ) : (
              ""
            )}
            <Welcome />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Home;
