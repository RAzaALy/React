import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

// const Services = ({ match }) => {
//   return <h1>Thanks for {match.params.service} Service</h1>;
// };

//By using Parmas:
const Services = () => {
  const { service, id } = useParams();
  const location = useLocation();
  //   console.log(location);
  const history = useHistory();
    console.log(history);
  return (
    <>
      <h1>
        Thanks for landing at {service} Service and ID is {id}
      </h1>
      <p>The Current Location is {location.pathname}</p>
      {location.pathname === "/services/React/5" ? (
        <Button onClick={() => history.goBack()}>
          Go Back
        </Button>
      ) : null}
    </>
  );
};
export default Services;
