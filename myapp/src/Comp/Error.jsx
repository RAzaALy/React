import React from "react";
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button";
const Error = () => {
  const history = useHistory();
  return (
    <>
      <h1>OOP's! 404 Page Not found!!!</h1>
      <p>Sorry, this page does not exits!</p>
      <Button onClick={() => history.push("/")}>Go Back</Button>
    </>
  );
};
export default Error;
