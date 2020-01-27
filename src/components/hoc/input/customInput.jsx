import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomInput = ({ id, ...props }) => {
  return (
    <div>
      {/* a simple text input that gets fully customized with props */}
      <TextField id={id} {...props} onChange={props.onChange} />
    </div>
  );
};
export default CustomInput;
