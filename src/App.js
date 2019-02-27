import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import Background from "./components/Background";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";

import ProposalList from "./pages/ProposalList";
import MemberList from "./pages/MemberList";
import ProjectProposalSubmission from "./pages/ProjectProposalSubmission";
import MembershipProposalSubmission from "./pages/MembershipProposalSubmission";
import GuildBank from "./pages/GuildBank";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { store } from "./store";

const App = () => (
  <Router>
    <Provider store={store}>
      <Background />
      <Header />
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <Home {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/proposals"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <ProposalList {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/members"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <MemberList {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/projectproposalsubmission"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <ProjectProposalSubmission {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/membershipproposalsubmission"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <MembershipProposalSubmission {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/guildbank"
            render={props =>
              localStorage.getItem("loggedUser") ? (
                <GuildBank {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </Provider>
  </Router>
);

export default App;
