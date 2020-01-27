import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import MainPage from "./components/Home/home";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Tables from "./components/tables/tables-render";
import Spinner from "./components/hoc/spinner/spinner";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { GetAdmin } from "./redux/actions/index";
import { IsUser } from "./redux/actions/index";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          this.props.GetAdmin(this.state.currentUser.admin);
          this.props.IsUser(this.state.currentUser);
          console.log("state if admin", this.state.currentUser.admin);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log("id from redux in app", this.props.currn);

    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            path="/users"
            render={() =>
              !this.state.currentUser ? (
                <Redirect to="/notallowed" />
              ) : (
                <Tables />
              )
            }
          />

          <Route
            exact
            path="/signup"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <Login />
            }
          />
          <Route exact path="/notallowed" component={Spinner} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};
export default connect(mapStateToProps, { GetAdmin, IsUser })(App);
