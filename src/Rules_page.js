import React from 'react';
import './index.css';
import {Link} from "react-router-dom"


export default class Rules_page extends React.Component{


    render(){

        
        return(

            

            <body>
            <div className = "grid-container">
                <div className="box5">
                <div><Link exact to={"/"} ><a class="nes-btn" href="#"><h3>Back</h3></a></Link></div>
                </div>
                <div className="box2">
                    <div><h1>Rules</h1></div>
                    
                </div>

                <div className ="box1">
                </div>
                
                <div className ="box3">

                    <ul>
                    <section class="icon-list">
                    <i class="nes-icon is-large heart"></i>
                    </section>
                   <h4>The object of the game is to identify a 'Set' of three cards from 12 cards laid out on the table. Each card has a variation of the following four features:</h4>
                    <p></p>
                    <li>1) COLOR: Each card is red, green, or blue.</li>
                    <li> 2) SYMBOL: Each card contains circles, squares, or triangles.</li>
                    <li>  3) NUMBER: Each card has one, two, or three symbols.</li>
                    <li>  4) SHADING: Each card is solid, open, or striped.</li>
                    <p></p>
                    <h4>A 'Set' consists of three cards in which each feature is EITHER the same on each card OR is different on each card. That is to say, any feature in the 'Set' of three cards is either common to all three cards or is different on each card.</h4>
                    </ul>
                </div>

                <div className ="box4">
                </div>

            </div>

           

            </body>

        )
    }

}
