import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Navbar from "./components/Navbar";
import Library from "./components/Library";

import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe((state) => {
  console.log(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="mt-4">
          <Switch>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/student">student</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
