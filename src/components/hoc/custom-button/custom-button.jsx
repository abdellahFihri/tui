import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ ...props }) => {
  //gets all props
  return (
    <Button {...props} variant="contained" color="primary" disableElevation>
      {props.btntext} {/*  text to be given as prop */}
    </Button>
  );
};
export default CustomButton;
