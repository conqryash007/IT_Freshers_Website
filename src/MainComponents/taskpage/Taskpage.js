import React, { useEffect, useState } from "react";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Particle from "./../../Shared/Components/Particle/Particle";
import Box from "@mui/material/Box";
import Papers from "./components/Papers";
import { useHttp } from "./../../Shared/Hooks/http-hook";
import CircularProgress from "@mui/material/CircularProgress";

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
  },
}));

const Taskpage = () => {
  const { loading, sendRequest, clearError } = useHttp();

  const [data, setData] = useState(null);

  const getComponent = () => {
    let comp;
    if (!data) {
      comp = (
        <div>
          <h1 style={{ color: "tan" }}>TRYING TO FETCH TASKS</h1>
        </div>
      );
    } else {
      comp = data.user.data.map((curr) => {
        return (
          <Papers
            key={curr.id}
            fakeName={curr.fakename}
            qid={curr.id}
            riddle={curr.riddle}
          />
        );
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
          {loading ? <CircularProgress /> : null}
        </div>
      </Box>
    </div>
  );
};

export default Taskpage;
