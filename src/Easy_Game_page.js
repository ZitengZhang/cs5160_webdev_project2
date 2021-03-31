
import React from 'react';
import './index.css';
import EasyCard from './EasyCard.js'
import {Link} from "react-router-dom"
import "nes.css/css/nes.min.css";

export default class Easy_Game_page extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            start:true,
            cards:[],
            onBoardCard:[],
            currentCard:[],
            showSelectedResult: "",
            setFound: 0,
            showTrophy:"invisible"
        }
        this.checkSet = this.checkSet.bind(this);
    }

    generate_all_cards(){
        let shape = ["circle", "square", "triangle"]
        let color = ["red","green","blue"]
        let number=["1","2","3"];
        //let shading=["solid","none","striped"]

        var count =0
        if(this.state.start === true){
            for(var i=0;i<shape.length;i++){
                for(var j=0;j<color.length;j++){
                    for(var x=0;x<number.length;x++){
                        //for(var y=0;y<shading.length;y++){
                            this.state.cards.push({
                                    id: count++,
                                    shape:shape[i],
                                    color:color[j],
                                    number:number[x],
                                    //shading:shading[y],
                                    selected: "card"
                                    })
                        //}
                    }
                }
            }

           
        }
    }


    gameStart(){

        this.generate_all_cards();
        var temp = this.state.cards
        
        if(this.state.start === true){
            for(var i=0;i<12;i++){
                var allCardLength = temp.length;
                var randomIndex = Math.floor(Math.random() * allCardLength)
                //console.log(randomIndex)
                const randomCard = temp[randomIndex]
                this.state.onBoardCard.push(randomCard);

                const index = temp.findIndex((item => this.isEquivalent(item,randomCard)));
                if(index>-1){
                    temp.splice(index,1);
                }
            }
            this.setState({
                start: false,
                cards: temp
            })
        }


    }


    addThreeCard(){
        var temp = this.state.cards
        const cardLeftNum = this.state.cards.length;
        
        if(cardLeftNum >= 3){
            for(var i=0;i<3;i++){
                    var allCardLength = temp.length;
                    var randomIndex = Math.floor(Math.random() * allCardLength)
                    //console.log(randomIndex)
                    const randomCard = temp[randomIndex]
                    this.state.onBoardCard.push(randomCard);

                    const index = temp.findIndex((item => this.isEquivalent(item,randomCard)));
                    if(index>-1){
                        temp.splice(index,1);
                    }
                }
            
        
            this.setState({
                cards: temp
            })
        }
    }


    findASet(){

        var temp = this.state.onBoardCard;
        const numOfCard = temp.length;
        for(var i=0;i<numOfCard;i++){
            var firstCard = temp[i];
            for(var j=i+1;j<numOfCard;j++){
                var secondCard = temp[j];
                for(var k=j+1;k<numOfCard;k++){
                    var thirdCard = temp[k];
                    if(this.isSet(firstCard,secondCard,thirdCard)){
                        console.log("find a set"+ i +" "+ j+ " " +k)
                        temp[i].selected ="hint";
                        temp[j].selected ="hint";
                        temp[k].selected ="hint";
                        this.setState({
                            onBoardCard: temp
                        })
                        return;
                    }
                }
            }

        }

        console.log("no set found")
        if(this.checkGameEnd()===false){
            this.setState({
                showSelectedResult:"No Set Found. Add 3 Card."
            })
        }
        return;
    }

    canFindSet(){
        var temp = this.state.onBoardCard;
        const numOfCard = temp.length;
        for(var i=0;i<numOfCard;i++){
            var firstCard = temp[i];
            for(var j=i+1;j<numOfCard;j++){
                var secondCard = temp[j];
                for(var k=j+1;k<numOfCard;k++){
                    var thirdCard = temp[k];
                    if(this.isSet(firstCard,secondCard,thirdCard)){
                        console.log("Can find a set "+ i +" "+ j+ " " +k)
                        return true;
                    }
                }
            }

        }

        console.log("no set found")
        return false;
    }

     
    
    // childCallback =(values)=>{
    //     console.log(values)
        
    //     this.state.currentCard.push(values)

    //     if(this.state.currentCard.length === 3){
    //         console.log(this.state.currentCard)
    //         this.checkSet()
    //         this.setState({
    //             currentCard:[]
    //         })
    //     }
    // }
    isSet(firstCard,secondCard,thirdCard){
        if(((firstCard.color === secondCard.color && firstCard.color === thirdCard.color && secondCard.color === thirdCard.color) || (firstCard.color !== secondCard.color && firstCard.color !== thirdCard.color && secondCard.color !== thirdCard.color))
        &&((firstCard.shape === secondCard.shape && firstCard.shape === thirdCard.shape && secondCard.shape === thirdCard.shape) || (firstCard.shape !== secondCard.shape && firstCard.shape !== thirdCard.shape && secondCard.shape !== thirdCard.shape))
        &&((firstCard.number === secondCard.number && firstCard.number === thirdCard.number && secondCard.number === thirdCard.number) || (firstCard.number !== secondCard.number && firstCard.number !== thirdCard.number && secondCard.number !== thirdCard.number))
        //&&((firstCard.shading === secondCard.shading && firstCard.shading === thirdCard.shading && secondCard.shading === thirdCard.shading) || (firstCard.shading !== secondCard.shading && firstCard.shading !== thirdCard.shading && secondCard.shading !== thirdCard.shading))
        ){
            return true;
        }

        return false;
    }

    checkSet(){
        let firstCard = this.state.currentCard[0]
        let secondCard = this.state.currentCard[1]
        let thirdCard = this.state.currentCard[2]

        var temp = this.state.onBoardCard
        if(this.isSet(firstCard,secondCard,thirdCard))
        {
            this.setState({
                showSelectedResult: "This is a set!!"
            })
            const index1 = temp.findIndex((item => this.isEquivalent(item,firstCard)));
            //this.state.cards[index1].selected = false;
            temp.splice(index1,1);
            const index2 = temp.findIndex((item => this.isEquivalent(item,secondCard)));
            //this.state.cards[index2].selected = false;
            temp.splice(index2,1);
            const index3 = temp.findIndex((item => this.isEquivalent(item,thirdCard)));
            //this.state.cards[index3].selected = false;
            temp.splice(index3,1);
            
            //console.log(temp);
            this.setState({
                onBoardCard: temp
            })

            this.setState({
                currentCard:[],
                setFound: this.state.setFound+1
            })
            // this.state.cards.filter(item => this.isEquivalent(item,firstCard))
            // this.state.cards.filter(item => this.isEquivalent(item,secondCard))
            // this.state.cards.filter(item => this.isEquivalent(item,secondCard))
            console.log(this.state.onBoardCard);
            console.log("This is a set!!")

            if(this.state.onBoardCard.length < 12){
                this.addThreeCard()
            }

            this.checkGameEnd()

        }
        else{
            this.setState({
                showSelectedResult: "Not a set!!"
            })

            const index1 = temp.findIndex((item => this.isEquivalent(item,firstCard)));
            const index2 = temp.findIndex((item => this.isEquivalent(item,secondCard)));
            const index3 = temp.findIndex((item => this.isEquivalent(item,thirdCard)));
           
            temp[index1].selected = "card"
            temp[index2].selected = "card"
            temp[index3].selected = "card"

            this.setState({
                currentCard:[],
                onBoardCard:temp
            })

            console.log("Not a set!!")
        }
    }

    checkGameEnd(){
        if(this.state.cards.length===0 && this.canFindSet() === false){
            this.setState({
                showTrophy:"visible",
                showSelectedResult:"Congratulations! You found all Sets!! ",

            })
            return true;
        }
        return false;
    }

    resetGame(){
        this.setState({
            start:true,
            cards:[],
            onBoardCard:[],
            currentCard:[],
            showSelectedResult: "",
            setFound: 0,
            showTrophy:"invisible",
        })

        this.gameStart()
    }


    isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
    
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
    
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        //console.log("same")
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    handleClick(id){

        
        var temp = [...this.state.onBoardCard]
        const index = temp.findIndex((item => (item.id === id)));
        let curCard = this.state.onBoardCard[index]
        
        if(((temp[index].selected === "card") ||(temp[index].selected === "hint"))&& this.state.currentCard.length<3){
            temp[index].selected = "selected_card"
            this.setState({
                onBoardCard:temp
             })

            this.state.currentCard.push(curCard)
            //console.log(this.state.currentCard.length+ "add  "+curCard)
            if(this.state.currentCard.length === 3){
                console.log(this.state.currentCard)
                this.checkSet()
            }
        }
        else if(temp[index].selected === "selected_card" && this.state.currentCard.length<=3){
            temp[index].selected = "card"
            this.setState({
                onBoardCard:temp
             })
             //console.log(this.state.currentCard.length)
             var tempCurrentCard = this.state.currentCard
             const indexOfCur = tempCurrentCard.findIndex((item => (item.id === id)));
             if(indexOfCur>-1){
                tempCurrentCard.splice(indexOfCur,1);
             }
             this.setState({
                currentCard : tempCurrentCard
             })
             //console.log(this.state.currentCard.length)
        }
        
    }


    

    render(){

        
        return(
            
            <body>
            <div className = "grid-container">
                <div className="box5">
                <div><Link exact to={"/"} ><a class="nes-btn" href="#"><h3>Back</h3></a></Link></div>
                </div>
                <div className="box2">
                    <div><h1>Easy Game</h1></div>
                    
                </div>

                <div className ="box1">
                   
                    <div><a class="nes-btn" href="#" onClick={()=>this.resetGame()}><h3>&nbsp;Reset&nbsp;</h3></a></div>
                    <div><a class="nes-btn" href="#" onClick={()=>this.addThreeCard()}><h4>Add Cards</h4></a></div>
                    <div><a class="nes-btn" href="#" onClick={()=>this.findASet()}><h4>Find a Set</h4></a></div>
                    <div>
                        <span><h5>Cards in deck: </h5></span>
                        <span class="nes-text is-error"><h5>{this.state.cards.length}</h5></span>
                        
                    </div>
                    <div>
                        <span><h5>Set Found:</h5></span>
                        <span class="nes-text is-success"><h5>{this.state.setFound}</h5></span>
                    </div>
                </div>
                
                <div className ="box3">
                    <div className ="game_board">

                        {this.gameStart()}
                        {
                            this.state.onBoardCard.map((card)=>
                            <EasyCard shape={card.shape}color={card.color} number={card.number} 
                                //shading={card.shading}
                                selected={card.selected} 
                                //passToParent={this.childCallback}
                                
                                onClick={()=> this.handleClick(card.id)}
                            />
                            )
                        }
                    </div>
                </div>

                <div className ="box4">
                    <div className = {this.state.showTrophy}>
                        <section class="icon-list">
                        <i class="nes-icon trophy is-large"></i>
                        </section>
                    </div>
                    <div><h2>{this.state.showSelectedResult}</h2></div>
                    
                </div>

            </div>

            </body>
           
        )
    }

}