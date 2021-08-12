import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Messaglist, Chatlist } from "./components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Chatlist />
        </Grid>
        <Grid item xs={6}>
          <Messaglist />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
