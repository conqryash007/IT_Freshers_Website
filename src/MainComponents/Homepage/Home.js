import React from "react";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Particle from "../../Shared/Components/Particle/Particle";
import logo from "./../../Assets/gifs/logo.gif";
import Fade from "react-reveal/Fade";
// import LightSpeed from "react-reveal/LightSpeed";
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
                  <img src={logo} style={{ width: "40vw" }} alt="unity" />
                  <Fade right>
                    <h1 className={classes.title}>
                      {" "}
                      <span className={classes.boom}>
                        {" "}
                        Welcome{" "}
                        <span className={classes.colourTitle}>
                          Warriors{" "}
                        </span>{" "}
                        of IIIT Bssr
                      </span>{" "}
                    </h1>
                  </Fade>
                </div>
              </div>
            </Collapse>
          </div>

          <Fade left>
            <div className={classes.memetext}>
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
            <div className={classes.memetext}>
              <h1 style={{ marginBottom: "50px" }}>Bienvenido a ella rama</h1>
            </div>
          </Fade>
        </Box>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default Home;
