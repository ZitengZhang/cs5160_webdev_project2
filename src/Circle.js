
import React from 'react';
import './index.css';



export default class Circle extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(


            
            
            <svg width="50" height="50">
            <defs>
	            <pattern id="hash" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
		            <rect width="3" height="6" transform="translate(0,0)" fill="grey"></rect>
	            </pattern>
            </defs>

            <circle cx="25" cy="25" r="20" 
            stroke={this.props.stroke_color} 
            strokeWidth="3"
            fill={this.props.fill_color}
            />
            </svg>
            
        )
    }


}