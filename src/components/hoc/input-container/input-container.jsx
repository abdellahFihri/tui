import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import styles from "./input-container.module.scss";

const InputContainer = ({ children, header }) => {
  return (
    <div className={styles.wrapper}>
      <Paper elevation={3} className={styles.container}>
        <h1>{header}</h1>
        <Divider />
        {children}{" "}
        {/* allowing all children to be wrapped inside the input container */}
      </Paper>
    </div>
  );
};
export default InputContainer;
