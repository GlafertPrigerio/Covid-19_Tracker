import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Global from './pages/Global'
import Indonesia from './pages/Indonesia'
import Provinsi from './pages/Provinsi'


const App = () =>{
    return (
        <header className="warna2">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Indonesia">
                    <Indonesia />
                </Route>
                <Route path="/provinsi">
                    <Provinsi />
                </Route>
                <Route path="/Global">
                    <Global />
                </Route>
            </Switch>
        </Router>
        </header>
    )
}

export default App;
