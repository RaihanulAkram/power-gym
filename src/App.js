import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import AuthProvider from "./context/AuthProvider";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Register/Register";
import Services from "./Services/Services";
import SingleService from "./SingleService/SingleService";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/services/:id">
              <SingleService></SingleService>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
