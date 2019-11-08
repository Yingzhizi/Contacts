import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const style = theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
    height: '42px',

  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
	color: theme.palette.text.primary
  }
});

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper
              className={clsx(classes.root, this.props.className)}
              style={this.props.style}
            >
              <SearchIcon className={classes.icon} />
              <Input
                className={classes.input}
                type="text"
                placeholder="Search User"
                disableUnderline
                value={this.props.filterText}
                onChange={this.handleFilterTextInputChange}
              />
            </Paper>
        );
    }
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(SearchInput);
