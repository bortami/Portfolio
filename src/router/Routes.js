import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          {/* <Route exact path="/" component={Preview} /> */}
          <Route path="/" component={HomeLight} />
          {/* <Route path="/" component={HomeLightAnimation} /> */}
          {/* <Route path="/dark" component={HomeDark} />
          <Route path="/dark" component={HomeDarkAnimation} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
