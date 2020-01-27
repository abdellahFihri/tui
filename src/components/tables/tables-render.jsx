import React from "react";
import { connect } from "react-redux";
import UsersTable from "../users/users";
import AdminUserInterface from "../admin-ui/admin-ui";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/current-user-selector";
import { getAdminAccess } from "../../redux/selectors/admin-access-selector";
import styles from "./tables-renderer.module.scss";

const Tables = props => {
const {admin,currentUser}=props
  if (admin) {
    return (//Conditional rendering depending on the user rights
      <div className={styles.tableContainer}>
        <AdminUserInterface />
      </div>
    );
  } else if (currentUser)
    return (
      <div className={styles.tableContainer}>
        {" "}
        <UsersTable />
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
  admin: getAdminAccess,

  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(Tables);
