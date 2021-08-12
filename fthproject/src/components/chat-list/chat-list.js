import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Chatlist = () => {
  const classes = useStyles();
  const [rooms, setRoom] = useState([
    { name: "room1" },
    { name: "room2" },
    { name: "room3" },
  ]);
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {rooms.map((item, id) => (
          <ListItem key={id} button>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};
