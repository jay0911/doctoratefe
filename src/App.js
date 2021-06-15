import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import {createStore,applyMiddleware} from "redux"
import reducers from './reducers'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Home from './components/pages/Home'
import Questions from './components/pages/Questions'
import Result from './components/pages/Result'
import UploadQuestion from './components/pages/UploadQuestion'

const store = createStore(reducers, {},applyMiddleware(ReduxThunk));

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Component {...props} />
    )} />
  )

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/questions' component={Questions} />
            <Route path='/result' component={Result} /> 
            <Route path='/upload' component={UploadQuestion} /> 
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
