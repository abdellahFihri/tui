import React, { Component } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { auth } from "../../firebase/firebase.utils";
import styles from "./navbar.module.scss";

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      theme: "",
    
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Abdellah Fihri: TUI Assessement
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={this.state.open}>
          <div>
            <IconButton onClick={this.handleDrawerClose}>
              {this.state.theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          {this.props.currentUser ? (
            <span>
              <h4>Logged As</h4>
              <h5>
                {this.props.currentUser.displayName || //Displays either displayName or a username if currentUser:nothing
                  this.props.currentUser.username}
              </h5>
            </span>
          ) : null}
          <Divider />
          <List>
            <Link to="/">
              <ListItem>
                <ListItemText primary="Home Page" />
              </ListItem>
            </Link>
            {this.props.currentUser ? (//Conditional rendering.. sign in if no currentUser:sign out
              <Link to="/">
                <ListItem onClick={() => auth.signOut()}>
                  <ListItemText className={styles.signout} primary="Sign Out" />
                </ListItem>
              </Link>
            ) : (
              <Link to="/login">
                <ListItem>
                  <ListItemText primary="Sign In" />
                </ListItem>
              </Link>
            )}
            {["SignUp", "Users"].map(text => (//Since link text matches the path,then why not a map
              <Link key={text} to={`/${text}`}>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={styles.content}>
          <div />

          {this.props.children}
        </main>
      </div>
    );
  }
}
export default NavDrawer;
