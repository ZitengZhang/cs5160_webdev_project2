import React from 'react';
import Circle from './Circle';
import './index.css';
import Square from './Square';
import Triangle from './Triangle';

export default class EasyCard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            card: "card",
            selected: false,
        };
    }

    getTheCard(){


        
        var card_shading = this.props.color;
        
        //circle
        if(this.props.shape === "circle"){
            if(this.props.number === "1"){
                return(
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                )
            }
            else if(this.props.number === "2"){
                return(
                    <div>
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }

            else if(this.props.number === "3"){
                return(
                    <div>
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Circle stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }
        }

        //rect
        if(this.props.shape === "square"){
            if(this.props.number === "1"){
                return(
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                )
            }
            else if(this.props.number === "2"){
                return(
                    <div>
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }

            else if(this.props.number === "3"){
                return(
                    <div>
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                    <Square stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }



        }

        //triangle
        if(this.props.shape === "triangle"){
            if(this.props.number === "1"){
                return(
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                )
            }
            else if(this.props.number === "2"){
                return(
                    <div>
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }

            else if(this.props.number === "3"){
                return(
                    <div>
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                    <Triangle stroke_color={this.props.color} fill_color={card_shading}/>
                    </div>
                )
            }



        }


    }

    render(){

        return(


    
            <div className={this.props.selected} 
                //onClick={()=>this.click()}
                onClick={()=> this.props.onClick()}
            >
                {this.getTheCard()}
            </div>
        )
    }


}