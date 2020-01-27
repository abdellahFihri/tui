import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './spinner.module.scss'

 const CircularUnderLoad=()=> {
  return <div className={styles.spinner}>
      <h5>You must log in or register to access the tables</h5>
      <CircularProgress  disableShrink />
      </div> 
}
export default CircularUnderLoad