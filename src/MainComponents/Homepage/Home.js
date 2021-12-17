import React from "react";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Particle from "../../Shared/Components/Particle/Particle";
import logo from "./../../Assets/gifs/logo.gif";
import Zoom from "react-reveal/Zoom";
import drg2 from "./../../Assets/gifs/drg2.gif";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    backgroundColor: "transparent",
  },

  navbar: {
    marginBottom: "0",
    border: "0",
    backgroundColor: "transparent",
    background: "none",
  },
  root: {
    background: "#000000",
  },

  title: {
    color: "#ffffff",
    marginTop: "100px",
    marginLeft: "40px",
  },

  boom: {
    color: "#FFFFFF",
  },
  colourTitle: {
    color: "#FF0099",
  },

  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "150px",
    height: "78vh",
  },

  subtitle: {
    color: "#FF0099",
    textTransform: "uppercase",
  },

  memetext: {
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sty = {};
  if (isMobile) {
    sty.flexDirection = "column";
  } else {
    sty.flexDirection = "row";
  }

  return (
    <>
      <React.Fragment>
        <Particle />
        <Box component="header" className={classes.root}>
          <Navbar />
          <div className={classes.main}>
            <Collapse in={true}>
              <div>
                <div>
                  <img src={logo} alt="unity" />
                  <Zoom bottom>
                    <h1 className={classes.title}>
                      Welcome
                      <span className={classes.colourTitle}>Warriors </span> of
                      IIIT Bssr
                    </h1>
                  </Zoom>
                </div>
              </div>
            </Collapse>
          </div>
          <Zoom bottom>
            <div className={classes.memetext} style={sty}>
              <h2>Get Started</h2>
              <div className={classes.img}>
                <img
                  src={drg2}
                  alt="meme"
                  style={{ width: "590px", height: "400px" }}
                />
              </div>
              <div>
                <h2>
                  by <span className={classes.colourTitle}>loging in </span>.
                </h2>
              </div>
            </div>
          </Zoom>
          <Zoom bottom>
            <div className={classes.memetext}>
              <h1 style={{ marginBottom: "200px" }}>Bienvenido a ella rama</h1>
            </div>
          </Zoom>
        </Box>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default Home;
