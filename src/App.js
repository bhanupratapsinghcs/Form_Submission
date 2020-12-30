import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Toolbar, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Form from "./Components/Form"
// import Test from './Components/test'

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
}))

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" >
            Form
        </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h5" color="inherit" style={{ textAlign: "center" }} >
          Enter Details
        </Typography>
        <Form />
      </Container>
    </div>
  );
}

export default App;
