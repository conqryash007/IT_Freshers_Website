import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import { makeStyles } from "@material-ui/core/styles";
import logo1 from "./../../../Assets/gifs/logo.gif";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    backgroundColor: "black",
  },

  title: {
    color: "#ffffff",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.appbar}>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ListIcon />
          </IconButton>
          <img src={logo1} alt="logo" width="80" />
          <Typography
            variant="h6"
            color="default"
            component="div"
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            UNITY
          </Typography>
          <Button color="info" href="/">
            Home
          </Button>
          <Button color="info" href="/123">
            Dashoard
          </Button>
          <Button color="info" href="/123/0">
            TaskPage
          </Button>
          <Button color="info" href="/123/resource">
            Resource
          </Button>
          <Button color="info" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
