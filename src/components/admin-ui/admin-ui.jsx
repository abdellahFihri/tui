import React, { Component } from "react";
import MaterialTable from "material-table";
import { userToAdd } from "../../redux/actions/index";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAdminUiCols } from "../../redux/selectors/admin-ui-cols-selector";
import { selectUsersList } from "../../redux/selectors/users-selector";

class AdminUserInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.users// data gets users array from the store
    };
  }

  onRowAdd = newData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          //pushing the new data to the local storage
          data.push(newData);
          //action gets it's payload
          this.props.userToAdd(data);
          //adding new state to the previous state(A reducer alike)
          return { ...prevState, data };
        });
      }, 600);
    });
  //Updates the existing users and replaces the old state with a new one
  onRowUpdate = (newData, oldData) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.setState(prevState => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            //action is getting the data to deliver it to the matching reducer
            this.props.userToAdd(data);
            return { ...prevState, data };
          });
        }
      }, 600);
    });
  //deletes a raw from the data in state
  onRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.splice(data.indexOf(oldData), 1);
          //action is getting the data to deliver it to the matching reducer
          this.props.userToAdd(data);
          return { ...prevState, data };
        });
      }, 600);
    });

  render() {
    //distructuring
    const { data } = this.state; // both data and columns are coming from memoized selectors
    const { columns } = this.props.columns;
    
    return (
      <MaterialTable
        title="Administrator Interface"
        columns={columns}
        data={data}
        options={{
          search: true
        }}
        editable={{
          onRowAdd: this.onRowAdd,
          onRowUpdate: this.onRowUpdate,
          onRowDelete: this.onRowDelete
        }}
      />
    );
  }
}
const mapStateToProps = createStructuredSelector({
  //using selectors prevents component from rerendering if the data is unchanged

  columns: selectAdminUiCols,
  users: selectUsersList
});
export default connect(mapStateToProps, { userToAdd })(AdminUserInterface);
