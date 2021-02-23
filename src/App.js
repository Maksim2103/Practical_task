import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import TitlePage from './Pages/TitlePage/TitlePage';
import ArticlesPage from './Pages/ArticlesPage/ArticlesPage';
import UsersPage from './Pages/UsersPage/UsersPage';
import PhotosPage from './Pages/PhotosPage/PhotosPage';
import store from './Redux/store';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route exact path="/home" component={ArticlesPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/photos" component={PhotosPage} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
