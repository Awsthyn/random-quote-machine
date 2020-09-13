import React, { Component } from 'react'
import Text from "./Text"
import Author from "./Author"
import {ReactComponent as TwitterLogo} from './assets/twitter-brands.svg'

const quotes = [
    {quote: "The purpose of our lives is to be happy", author: "Dalai Lama"},
    {quote: "Life is what happens when you’re busy making other plans", author: "John Lennon"},
    {quote: "Get busy living or get busy dying", author: "Stephen King"},
    {quote: "You only live once, but if you do it right, once is enough", author: "Mae West"},
    {quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison"},
    {quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein"},
    {quote: "Never let the fear of striking out keep you from playing the game", author: "Babe Ruth"}
]


export default class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {quote: null, author: null}
        this.randomQuote = this.randomQuote.bind(this)
      }

    randomQuote(){
        let random = Math.floor(quotes.length * Math.random())
        this.setState({quote: quotes[random].quote, author: quotes[random].author})
    }

    componentDidMount(){
        this.randomQuote()
    }

    render() {
        return (
            <div id="quote-box" style={{backgroundColor: "rgb(51, 71, 91)", width: "900px"}} className="rounded mt-4 p-4 ml-auto mr-auto text-center">
                <div >
                <Text quote={this.state.quote} />
                <Author author={this.state.author}/>
                </div>
                <div className="mt-3 d-inline-flex flex-column">
                <button style={{backgroundColor: "rgb(0, 164, 189)"}} className="text-white btn mb-3" id="new-quote" onClick={()=>this.randomQuote()}>New quote</button>
                <a  style={{backgroundColor: "rgb(0, 164, 189)"}} id="tweet-quote" className="text-white btn" 
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${this.state.quote + ' - ' + this.state.author}`}>
                    <TwitterLogo style={{width: "1.5em"}} className="text-white mr-2"/>
                    <span>Tweet quote</span></a>
                </div>
            </div>
        )
    }
}
