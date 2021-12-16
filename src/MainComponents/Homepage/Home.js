import React from "react";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cards from "./components/Cards";
import Particle from "../../Shared/Components/Particle/Particle";

import logo from "./../../Assets/gifs/logo.gif";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import meme from "./../../Assets/gifs/meme.gif";

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
    height: "400vh",
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
  typedContainer: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: 1,
  },

  meme: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
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
                  <img src={logo} alt="unity" />
                  <Fade right>
                    <h1 className={classes.title}>
                      {" "}
                      <span className={classes.boom}>
                        {" "}
                        Welcome to <br /> the coolest Branch{" "}
                      </span>{" "}
                      <span className={classes.colourTitle}> IT </span>{" "}
                    </h1>
                  </Fade>
                </div>
              </div>
            </Collapse>
          </div>

          <Box className={classes.typedContainer}>
            <LightSpeed right>
              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={["ABHI TOH PARTY", "SHURU HUI HAI"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </Typography>
            </LightSpeed>
          </Box>
          <Fade left>
            <div className={classes.meme}>
              <img src={meme} alt="meme" />
            </div>
          </Fade>
          <Fade right>
            <div className={classes.memetext}>
              <h2>Phele login toh karo !!!</h2>
              <Button color="info" href="/signup">
                Login
              </Button>
            </div>
          </Fade>
          <Fade left>
            <Cards />
          </Fade>
        </Box>
      </React.Fragment>
    </>
  );
}

export default Home;
