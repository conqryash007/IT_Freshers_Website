import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "./../../../Shared/Context/Auth-context";
import { useHttp } from "../../../Shared/Hooks/http-hook";
import Loader from "./../../../Shared/Components/MUIModal/Loader";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "80px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
}));

export default function Papers(props) {
  const nav = useNavigate();
  const { loading, sendRequest, clearError } = useHttp();
  const { fakeName, qid, riddle } = props;
  const [error, setError] = React.useState("");
  const auth = React.useContext(AuthContext);
  const [ans, setAns] = React.useState("");

  const onSubmitHandler = async () => {
    setError("");
    clearError();
    if (!ans && ans.length > 7) {
      setError("You should reconsider your submission");
    } else {
      let sendAns = JSON.stringify({ answer: ans });
      console.log(sendAns);
      try {
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/tasks/check/${auth.uid}/0/${qid}`,
          "POST",
          sendAns,
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          }
        );
        nav(`/${auth.uid}`);
      } catch (err) {
        setError(err);
      }
    }

    setAns("");
  };

  const inputHandler = (e) => {
    setAns(e.target.value.trim().toLowerCase());
  };

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Loader open={loading} message="Submitting your answer..." />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 900,
              height: 250,
            },
          }}
        >
          <Paper elevation={3} style={{ textAlign: "center" }}>
            <h1> {fakeName} </h1>
            <p>{riddle}</p>
            <TextField
              className={classes.TextField}
              id={qid}
              label="ID of the senior"
              multiline
              fullWidth
              value={ans}
              variant="filled"
              width="900"
              onChange={inputHandler}
            />
            <div className={classes.buttons}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onSubmitHandler}
              >
                SUBMIT
              </Button>
            </div>
            <div>
              <h3 style={{ color: "red" }}>{error}</h3>
            </div>
          </Paper>
        </Box>
      )}
    </>
  );
}
