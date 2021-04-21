import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from './routes';
import { Header } from './components/Header/Header';
import './App.css';

const App = () => {
  return (
      <Router>
        <Header />
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
      </Router>
  );
};

export default App;
