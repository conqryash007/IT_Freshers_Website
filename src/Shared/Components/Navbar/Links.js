import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { AuthContext } from "./../../Context/Auth-context";

export default function Links() {
  const auth = useContext(AuthContext);
  let links;
  if (!auth.token) {
    links = (
      <>
        <Button color="info" href="/">
          Home
        </Button>
        <Button color="info" href="/login">
          Login
        </Button>
      </>
    );
  } else {
    links = (
      <>
        <Button color="info" href="/">
          Home
        </Button>
        <Button color="info" href={`/${auth.uid}`}>
          Dashoard
        </Button>
        <Button color="info" href={`/${auth.uid}/resource`}>
          Resource
        </Button>
        <Button color="info" onClick={auth.logout}>
          Logout
        </Button>
      </>
    );
  }
  return <>{links}</>;
}
