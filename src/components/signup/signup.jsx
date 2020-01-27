import React, { Component } from "react";
import InputContainer from "../hoc/input-container/input-container";
import CustomButton from "../hoc/custom-button/custom-button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { userToAdd } from "../../redux/actions/index";
import styles from "./signup.module.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        userid: this.props.users.users.length, // giving a matching id for each new user
        fullname: "",
        username: "",
        email: "",
        password: "",
        confPassword: "",
        gender: ""
      },
      error: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {
      userid,
      fullname,
      username,
      email,
      gender,
      password,
      confPassword
    } = this.state.newUser;

    let usersList = this.props.users.users;

    if (password !== confPassword) {
      alert("passwords don't match");
      return;
    }
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    try {
      //Creates a new user to lign based on email and password
      await createUserProfileDocument(user, { username });
    } catch (error) {
      this.setState({ error: true });
      alert(error);
    }
    //Pushes the new user to our array of users
    usersList.push({ userid, fullname, username, email, gender, password });
    //Action here gets its payload
    this.props.userToAdd(usersList);

    this.setState({
      //clearing the state after
      newUser: {
        userid: this.props.users.users.length,
        fullname: "",
        username: "",
        email: "",
        password: "",
        confPassword: "",
        gender: ""
      }
    });
  };

  handleChange = e => {
    const { newUser } = { ...this.state };
    const currentState = newUser;
    const { name, value } = e.target;
    currentState[name] = value;
    this.setState({ newUser: currentState, error: false });
  };

  render() {
    //Some distructuring here
    const {
      fullname,
      username,
      email,
      password,
      confPassword,
      gender
    } = this.state.newUser;
    const { error } = this.state;
    
    return (
      <div className={styles.formcontainer}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <InputContainer header="SIGN UP">
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              name="fullname"
              label="Full Name"
              type="text"
              error={error ? true : false}
              value={fullname}
              variant="outlined"
              required={true}
            />
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              name="username"
              label="User Name"
              type="text"
              error={error ? true : false}
              value={username}
              variant="outlined"
              required
            />
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              name="email"
              label="Email"
              type="email"
              error={error ? true : false}
              value={email}
              variant="outlined"
              required
            />
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              name="password"
              label="Password"
              type="password"
              error={error ? true : false}
              value={password}
              variant="outlined"
              required
            />
            <TextField
              onChange={this.handleChange}
              fullWidth={true}
              name="confPassword"
              label="Confirm Password"
              type="password"
              error={error ? true : false}
              value={confPassword}
              variant="outlined"
              required
            />

            <FormControl
              variant="outlined"
              fullWidth={true}
              className={styles.formcontrol}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.newUser.gender}
                fullWidth={true}
                name="gender"
                onChange={this.handleChange}
                required
              >
                <MenuItem value={gender}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <CustomButton
              className={styles.button}
              type="submit"
              btntext="Sign Up"
            />
          </InputContainer>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps, { userToAdd })(SignUp);
