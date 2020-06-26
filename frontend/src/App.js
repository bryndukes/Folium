import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./fonts.css";
import { Header } from "./components/App/Header/Header";
import { Footer } from "./components/App/Footer/Footer";
import { MyPlantsPage } from "./components/App/MyPlants/MyPlantsPage";
import { ExplorePage } from "./components/App/ExplorePage";
import { NotFoundPage } from "./components/App/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect exact from="/home" to="/myplants" />
        <Redirect exact from="/" to="/myplants" />
        <Route path="/myplants" component={MyPlantsPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
