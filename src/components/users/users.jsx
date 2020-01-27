import React,{Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectUsersList} from '../../redux/selectors/users-selector';
import {selectUsersCols} from '../../redux/selectors/users-cols-selector';


class  UsersTable extends Component {
constructor(props){
  super(props)
  this.state={
classes: makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
}),
page:0,
rowsPerPage:10,


  }
}



   handleChangePage = (event, newPage) => {
    this.setState({page:newPage});
  };

   handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage:+event.target.value});
    this.setState({page:0});
  };
render(){
 const {classes,page,rowsPerPage}=this.state;
let rows=this.props.users;
let columns=this.props.columns
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={i} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    </Paper>
  );
            }
};
const mapStateToProps =createStructuredSelector(
  {
    users:selectUsersList,
    columns:selectUsersCols
    
  }
)
  
export default connect(mapStateToProps)(UsersTable);
