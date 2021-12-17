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
    mergin: "auto",
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
    textAlign: "center",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const sty = {};
  let log = {};
  let drgimg = { width: "590px", height: "400px" };
  if (isMobile) {
    sty.flexDirection = "column";
    drgimg = { width: "100%", height: "300px" };
    log = {
      width: "90%",
    };
  } else {
    sty.flexDirection = "row";
  }

  return (
    <>
      <React.Fragment>
        <div style={{ width: "80vw" }}>
          <Particle />
        </div>
        <Box component="header" className={classes.root}>
          <Navbar />
          <div className={classes.main}>
            <Collapse in={true}>
              <div style={{ textAlign: "center" }}>
                <div>
                  <img src={logo} style={log} alt="unity" />
                  <Zoom bottom>
                    <h1 className={classes.title}>
                      Welcome
                      <span className={classes.colourTitle}>Warriors </span> of
                      IIIT Bbsr
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
                <img src={drg2} alt="meme" style={drgimg} />
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
              <h1 style={{ marginBottom: "50px" }}>Bienvenido a ella rama</h1>
            </div>
          </Zoom>
        </Box>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default Home;
