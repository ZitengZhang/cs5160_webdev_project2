import React from 'react';
import './index.css';
import "nes.css/css/nes.min.css";
import {Link} from "react-router-dom"


export default class Home_page extends React.Component{


    render(){

        
        return(

            

            <body>
            <div className = "grid-container" >
                <div className="box5" >
                    <span class="nes-text is-error"><h1>S</h1></span>
                    <span class="nes-text is-success"><h1>E</h1></span>
                    <span class="nes-text is-primary"><h1>T</h1></span>
                </div>
                <div className="box2" >
                    <div><h2>Select the Difficulties</h2></div>
                    
                </div>

                <div className ="box1" >
                    <Link exact to={"/easy_game"}><a class="nes-btn" href="#"><h2>&nbsp;easy&nbsp;</h2></a></Link>
                    <Link exact to={"/medium_game"}><a class="nes-btn" href="#"><h2>Medium</h2></a></Link>
                    <Link exact to={"/hard_game"}><a class="nes-btn" href="#"><h2>&nbsp;Hard&nbsp;</h2></a></Link>
                </div>
                
                <div className ="box3">
                    <span><h1>&nbsp;</h1></span>
                    <span>
                    <section class="icon-list">
                    {/* <!-- Copyright Nintendo --> */}
                    <i class="snes-jp-logo"></i>
                    </section>
                    </span>
                        
                    <span><h1>&nbsp;WELCOME TO THE&nbsp;</h1></span>
                   
                    
                    <span class="nes-text is-error"><h1>S</h1></span>
                    <span class="nes-text is-success"><h1>E</h1></span>
                    <span class="nes-text is-primary"><h1>T</h1></span>
                    
                    <span><h1>&nbsp;GAME~ </h1></span>
                    
                    <span>
                    <section class="icon-list">
                        {/* <!-- Copyright Nintendo --> */}
                        <i class="nes-mario"></i>
                    </section>
                    </span>
                </div>

                <div className ="box4" >
                    <section class="icon-list">
                    <i class="nes-icon is-large like"></i>
                    </section>
                    <span>&nbsp;</span>
                     <Link exact to={"/rules"}><a class="nes-btn" href="#"><h2>&nbsp;Rules&nbsp;</h2></a></Link>
                </div>

            </div>

           

            </body>

        )
    }

}
