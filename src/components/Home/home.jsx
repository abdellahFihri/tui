/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./home.module.scss";
const MainPage = () => {
  return (
    <div className={styles.home}>
      <Typography className={styles.p} paragraph>
        Hello.
        <br />A bit of an improved version
      </Typography>
      <ul className={styles.ul}>
        <li>No API key or App ID or any other keys in the source code.</li>
        <li>No React hooks anymore</li>
        <li>
          No admin id to compare, but now admin has a unique field in the
          database with a boolean
        </li>
        <li>
          Using memoized selectors for the redux store for extra performance and
          to avoid unnecessary re-rendering
        </li>
        <li>cleaned up the css mess</li>
        <li>wrote some tests using jest and enzyme 'npm test' </li>

        <li>
          Code snippets{" "}
          <a
            href="https://github.com/abdellahFihri/fihri-tui-assessement"
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
