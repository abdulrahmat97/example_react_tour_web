import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

import {
  List,
  ListItem,
  Tooltip,
  Button,
} from "@material-ui/core"

const styles = theme => ({
  listItem: {
    marginLeft: '1rem',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  list: {
    display: 'flex',
    fontSize: "14px",
    margin: 0,
    paddingLeft: "",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  }
})

class HeaderLink extends Component {
  render () {
    const { classes, ...props } = this.props
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="View About this Website"
            placement={window.innerWidth > 959 ? "top" : "left"}
          >
            <Button
              href="https://www.creative-tim.com/product/material-kit-react"
              color="secondary"
              target="_blank"
            >
              About
            </Button>
          </Tooltip>
        </ListItem>
         <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="View My Blog"
            placement={window.innerWidth > 959 ? "top" : "left"}
          >
            <Button
              href="https://www.creative-tim.com/product/material-kit-react"
              color="secondary"
              target="_blank"
            >
              Blog
            </Button>
          </Tooltip>
        </ListItem>
         <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Login to this website"
            placement={window.innerWidth > 959 ? "top" : "left"}
          >
          <Button
            variant="outlined"
            size="large"
            color="primary"
            aria-label="Add"
            onClick={() => {
              props.history.push('/login')
            }}
          >
            Login
          </Button>
          </Tooltip>
        </ListItem>
      </List>
    )
  }
}

export default withRouter((withStyles(styles)(HeaderLink)))
