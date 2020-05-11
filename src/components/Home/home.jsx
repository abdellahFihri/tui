
import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./home.module.scss";
const MainPage = () => {
  return (
    <div className={styles.home}>
      <Typography className={styles.p} paragraph>
        Hello.<br/>
        This is a web app to visualize the signed up users via email authentification or Google authentification, this web app was made with React js, redux, firebase for signin-in and signin-up, and Material-UI.
        <br />A bit of an improved version
      </Typography>
      <ul className={styles.ul}>
        {/* <li>No API key or App ID or any other keys in the source code.</li>
        <li>No React hooks anymore</li> */}
        {/* <li>
          No admin id to compare, but now admin has a unique field in the
          database with a boolean
        </li> */}
        <li>Form validation</li>
        <li>Signin-up with e-mail</li>
        <li>Google auth</li>
        <li>Use of redux to globalize the state</li>
        <li>Use of Sass modules</li>
        <li>Only the logged in users are able to access the users table</li>
        <li>Only one user has administrator right to access users table with CRUD operations</li>
        <li>
          Using memoized selectors with the redux store for extra performance and
          to avoid unnecessary re-rendering
        </li>
        <li>Wrote some tests using jest and enzyme 'npm test' </li>

        <li>
          Code snippets{" "}
          <a
            href="https://github.com/abdellahFihri/tui"
            rel="noopener norefferer"
            target="_blank"
          >
            GitHub.
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};
export default MainPage;
