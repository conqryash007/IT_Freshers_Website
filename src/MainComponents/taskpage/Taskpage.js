import React, { useEffect, useState, useContext } from "react";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Particle from "./../../Shared/Components/Particle/Particle";
import Box from "@mui/material/Box";
import Papers from "./components/Papers";
import { useHttp } from "./../../Shared/Hooks/http-hook";
import Loader from "./../../Shared/Components/MUIModal/Loader";
import { AuthContext } from "./../../Shared/Context/Auth-context";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000000",
    minHeight: "100vh",
  },
  title: {
    color: "#ffffff",
    justifyContent: "center",
    display: "flex",
  },

  paper: {
    justifyContent: "center",
    display: "flex",
    marginLeft: "100px",
    flexDirection: "column",
  },
}));

const Taskpage = () => {
  const auth = useContext(AuthContext);
  const { loading, sendRequest, clearError } = useHttp();
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(null);

  // to get student data

  useEffect(() => {
    clearError();
    const apiCall = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/freshers/${auth.uid}`
        );
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (auth.uid) apiCall();
  }, [sendRequest, clearError, auth.uid]);
  // to get student data

  const getComponent = () => {
    let comp;
    if (!data || !userData) {
      comp = (
        <div>
          <h1 style={{ color: "tan" }}>NO TASKS</h1>
        </div>
      );
    } else {
      comp = data.user.data.map((curr) => {
        if (
          !userData.user.task0[curr.indx] &&
          userData.user.task0[curr.indx] !== 0
        ) {
          return (
            <Papers
              key={curr.id}
              fakeName={curr.fakename}
              qid={curr.id}
              riddle={curr.riddle}
            />
          );
        } else {
          return (
            <Paper
              key={curr.id}
              elevation={3}
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <h3> SOMETIMES YOU DON'T GET A SECOND CHANCE </h3>
              <p>Already Answered.</p>
            </Paper>
          );
        }
      });
    }
    return comp;
  };

  useEffect(() => {
    clearError();
    const req = async () => {
      try {
        const resData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/tasks/gettask/61a737b9c6dec8675b9769e7`
        );
        setData(resData);
      } catch (err) {}
    };
    req();
  }, [sendRequest, clearError]);

  const classes = useStyles();
  return (
    <div>
      <Particle />
      <Box component="header" className={classes.root}>
        <Navbar />
        <div className={classes.title}>
          <h1> 📝 Challenges 📝 </h1>
        </div>
        <div className={classes.paper}>
          {getComponent()}
          {loading ? <Loader message="PROCESSING..." open={loading} /> : null}
        </div>
      </Box>
    </div>
  );
};

export default Taskpage;
