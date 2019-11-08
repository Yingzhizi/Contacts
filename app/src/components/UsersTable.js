import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import SearchInput from './SearchInput';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  CardContent,
  Card,
  CardActions,
} from '@material-ui/core';

const style = theme => ({
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
 },
  body: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },

  root: {
    marginTop: theme.spacing(7),
    padding: theme.spacing(5)

  },

});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(232, 166, 116, 0.4)",
    width: "25%"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ContactRow extends React.Component {
    render() {
        return (
            <TableRow
              hover
              key={this.props.user.id}
            >
              <TableCell>{this.props.user.name}</TableCell>
              <TableCell>{this.props.user.email}</TableCell>
              <TableCell>
                {this.props.user.address.suite}, {this.props.user.address.street}, {this.props.user.address.city}
              </TableCell>
              <TableCell>{this.props.user.phone}</TableCell>
            </TableRow>
        );
    }
}

class ContactTable extends React.Component {
    render() {
        var rows = [];
        this.props.users.forEach((user) => {
            if (user.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                return;
            }
            rows.push(<ContactRow key={user.id} user={user} />);
        });

        return (
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
        );
    }
}

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            users : this.props.users,
        };
        this.page = 0;
        this.rowsPerPage = 10;
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleRowsPerPageChange = this.handleRowsPerPageChange.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    /* handle page change here */
    handlePageChange(e, page) {
        this.page = page;
        console.log(page)
    }

    /* choose how many row for each */
    handleRowsPerPageChange(e) {
        this.rowsPerPage = e.target.value
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <SearchInput
                        filterText={this.state.filterText}
                        onFilterTextInput={this.handleFilterTextInput}
                    />
                </div>
                <Card>
                    <CardContent className={classes.content}>
                        <div className={classes.inner}>
                            <div className={classes.body}>
                                <ContactTable
                                    users={this.props.users.slice(this.page*this.rowsPerPage, (this.page + 1)*this.rowsPerPage)}
                                    filterText={this.state.filterText}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <TablePagination
                             component="div"
                             className={classes.actions}
                             count={this.props.users.length}
                             onChangePage={this.handlePageChange}
                             onChangeRowsPerPage={this.handleRowsPerPageChange}
                             page={this.page}
                             rowsPerPage={this.rowsPerPage}
                             rowsPerPageOptions={[5, 10]}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

UserTable.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array.isRequired
};

export default withStyles(style)(UserTable);
