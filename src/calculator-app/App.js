import React from "react";
import OutputResult from "./outputScreenResult";
import Button from "./button";
import "./style.css"

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        const value = event.target.value
        switch(value) {
            case '=':
                if(this.state.question !== '') {
                    var ans = "";
                    try{
                        ans = eval(this.state.question);
                    }
                    catch(err){
                        this.setState({answer: "Invalid"});
                    }
                    if(ans === undefined) {
                        this.setState({answer: 'Invalid', question: ''});
                    }
                    else {
                        console.log("Answer: ", ans);
                        this.setState({answer: ans , question: ''});
                    }
                    }

                    break;
                    
            
            case 'DEL':
                var str = this.state.question;
                str = str.substring(0,str.length - 1);
                this.setState({question: str});
                break;
            
            case 'CE':
                this.setState({question: '', answer: ''});
                break;

            default:
                this.setState({question: (this.state.question += value)});
                break;
        }
    }

    render() {

        return(
            <>
            <h1>CALCULATOR APP</h1>
                <div className="container">
                    <div className="screen">
                        <OutputResult value = {this.state.question} />
                        <OutputResult value = {this.state.answer} />
                    </div>
                    <div className="button-set">
                        <div className="numpad">
                            <Button label = {"7"} handleClick = {this.handleClick}/>
                            <Button label = {"9"} handleClick = {this.handleClick}/>
                            <Button label = {"8"} handleClick = {this.handleClick}/>
                            <Button label = {"6"} handleClick = {this.handleClick}/>
                            <Button label = {"5"} handleClick = {this.handleClick}/>
                            <Button label = {"4"} handleClick = {this.handleClick}/>
                            <Button label = {"3"} handleClick = {this.handleClick}/>
                            <Button label = {"2"} handleClick = {this.handleClick}/>
                            <Button label = {"1"} handleClick = {this.handleClick}/>
                            <Button label = {"DEL"} handleClick = {this.handleClick}/>
                            <Button label = {"0"} handleClick = {this.handleClick}/>
                            <Button label = {"CE"} handleClick = {this.handleClick}/>

                        </div>

                        <div className="action">
                            <Button label = {"+"} handleClick = {this.handleClick}/>
                            <Button label = {"-"} handleClick = {this.handleClick}/>
                            <Button label = {"X"} handleClick = {this.handleClick}/>
                            <Button label = {"%"} handleClick = {this.handleClick}/>
                        </div>

                        <div className="result"><Button label = {"="} handleClick = {this.handleClick}/></div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default App;