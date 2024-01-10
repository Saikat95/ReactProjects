import React from "react";
import './style.css'
import refresh from '../assets/refresh.png'

class App extends React.Component {
    constructor(){
        super();
        this.state =  {
            quote:'Random Quote',
            author: 'Associated Author'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    getQuote(){
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randonNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuotes = dataQuotes[randonNum];

                this.setState({
                    quote: randomQuotes.quote,
                    author: randomQuotes.author
                }   
                )
                })
    }


    handleClick = () => {
        this.getQuote();
    }



    render(){
        return(
            <>
                <div className="header">
                    <h1>This is Random Quote Generator App</h1>
                </div>
                
                <div className="container">
                    <div className="quote-container">
                        <p className="quote">{this.state.quote}</p>
                        <p className="author">-{this.state.author}</p>
                    </div>

                    <div className="footer">
                        <img alt="refresh" src={refresh} onClick={this.handleClick}></img>
                    </div>
                </div>
            </>
        );
    }
}

export default App