import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {createStore,applyMiddleware} from "redux"
import reducers from './reducers'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Home from './components/pages/Home'
import Questions from './components/pages/Questions'
import Result from './components/pages/Result'

const store = createStore(reducers, {},applyMiddleware(ReduxThunk));

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/questions' component={Questions} />
            <Route path='/result' component={Result} /> 
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
