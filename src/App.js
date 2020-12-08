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
            <div className="background">
                <center>
                    <b>
                <nav>
                    <ul>
                        Covid-19 Tracker
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
                                Provinsi di Indonesia
                            </Link>
                        </li>
  
                    </ul>
                </nav>
                </b>
                </center>
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
