import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../hoc/custom-button/custom-button";
import InputContainer from "../hoc/input-container/input-container";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import styles from "./login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      // waiting for the auth before clearing the state
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      this.setState({ error: true }); //triggers error in state to highlight the inputs in red
      alert(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value, error: false }); //also disables error highlight if value
  };

  render() {
    //some distructuring
    const { email, password, error } = this.state;

    return (
      <div className={styles.formcontainer}>
        <form className={styles.form} noValidate autoComplete="off">
          <InputContainer className={styles.container} header="LOGIN">
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              value={email}
              error={error ? true : false}
              id="outlined-required"
              name="email"
              label="Email"
              type="text"
              variant="outlined"
              required
            />
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              error={error ? true : false}
              value={password}
              id="outlined-password-input"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              required
            />
            <CustomButton
              type="submit"
              onClick={this.handleSubmit}
              btntext="Log In"
            />
            <CustomButton
              onClick={signInWithGoogle}
              btntext="Sign In With Google"
            />
          </InputContainer>
        </form>
      </div>
    );
  }
}
export default Login;
