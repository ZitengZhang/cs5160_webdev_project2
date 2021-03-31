import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import "nes.css/css/nes.min.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Hard_Game_page from './Hard_Game_page.js'
import Easy_Game_page from './Easy_Game_page.js'
import Medium_Game_page from './Medium_Game_page.js'
import Rules_page from "./Rules_page.js"

ReactDOM.render(

    <BrowserRouter>
        <Switch>
        <Route exact path ={"/"} component={App}/>
        <Route exact path ={"/easy_game"} component={Easy_Game_page}/>
        <Route exact path ={"/medium_game"} component={Medium_Game_page}/>
        <Route exact path ={"/hard_game"} component={Hard_Game_page}/>
        <Route exact path ={"/rules"} component={Rules_page}/>
        <Route render = {()=> <div>Page Not Found</div>}/>
        </Switch>
    </BrowserRouter>
    




,document.getElementById('root')


);