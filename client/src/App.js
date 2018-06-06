import React, { Component, Fragment } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
// import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import clickcards from "./boosh.json";
import "./App.css";
const guessarray = []
const highscorearray = []
const summary = {
  welcome: "Click An Image to Begin!",
  right: "Great Guess!",
  wrong: "Sorry, You Lose. Try Again!"
}



class App extends Component {
  
  state = {
    clickcards,
    score: 0,
    highscore: 0,
    guessarray,
    highscorearray,
    message: summary.welcome,
    className: "click-item"
  };

  handleShuffle = () => {
    const shuffle = clickcards.sort(() => Math.random() - 0.5);
    let newcards = shuffle.slice(0,12)
    this.setState({ clickcards: newcards });
  }

  handleIncrement = score => {
    let newscore = score + 1
    this.setState({ score: newscore });
  }

  handleClassChange = () => {
    this.setState({className: "click-item shake"})
    setTimeout(function() { this.setState({className: "click-item"}) }.bind(this), 1000)
  }

  handleArrayCheck = (guessarray, id) => {
    if (guessarray.includes(id)) {
      console.log("You lose!")
      highscorearray.push(this.state.score)
      const highestscore = Math.max(...highscorearray)
      this.setState({message: summary.wrong})
      this.setState({highscore: highestscore})
      this.setState({score: 0})
      this.setState({guessarray: guessarray.splice(0,guessarray.length)})
      this.handleClassChange()
    } else {
      console.log("Great guess!")
      guessarray.push(id)
      this.handleIncrement(this.state.score)
      this.setState({message: summary.right})
    }
  }

  handleClick = id => {
    this.handleShuffle()
    this.handleArrayCheck(guessarray, id)
  }

  


  render() {
    return (
      <Fragment>
        <Navbar
          message={this.state.message} 
          score={this.state.score}
          highscore={this.state.highscore}
          />
        {/* <Jumbotron/>   */}
        <Wrapper>
          <div className="container">
            {this.state.clickcards.slice(0,12).map(clickcard => (
              <ClickCard
                id={clickcard.id}
                key={clickcard.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                name={clickcard.name}
                image={clickcard.image}
                className={this.state.className}
              />
            ))}

          </div>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
