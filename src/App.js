import './App.css';
import Header from './components/Header/Header';
import Crickter from './components/Crickter/Crickter';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/crickter">
                    <Crickter />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;