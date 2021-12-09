import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const theme = {
  mobile: "789px",
};
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
