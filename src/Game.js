import React from 'react';
import './style.css';
import bluedice from './dicepictures/bluedice.png';
import pic1 from './dicepictures/1.jpg';
import pic2 from './dicepictures/2.jpg';
import pic3 from './dicepictures/3.jpg';
import pic4 from './dicepictures/4.jpg';
import pic5 from './dicepictures/5.jpg';
import pic6 from './dicepictures/6.jpg';

class Game extends React.Component {
    state = { Player1: 0 };
    state = { Player2: 0 };
    state = { amount: 0 };
    state = { wins: 0 };
    state = { losses: 0 };
    state = { draws: 0 };

    handleClick = () => {
        var Rand_Player1 = Math.floor(Math.random() * 6) + 1;
        var Rand_Player2 = Math.floor(Math.random() * 6) + 1;
        this.setState({ Player1: Rand_Player1 });
        this.setState({ Player2: Rand_Player2 });
        this.setState({ amount: this.state.amount + 1 });
        if (Rand_Player1 > Rand_Player2) {
            this.setState({ wins: this.state.wins + 1 });
        } else if (Rand_Player1 < Rand_Player2) {
            this.setState({ losses: this.state.losses + 1 });
        } else {
            this.setState({ draws: this.state.draws + 1 });
        }
    };
    showDicePic = (number) => {
        if (number === 1) {
            return (
                <div>
                    <img src={pic1} alt="dice1" className="dice" />
                </div>
            );
        } else if (number === 2) {
            return (
                <div>
                    <img src={pic2} alt="dice2" className="dice" />
                </div>
            );
        } else if (number === 3) {
            return (
                <div>
                    <img src={pic3} alt="dice3" className="dice" />
                </div>
            );
        } else if (number === 4) {
            return (
                <div>
                    <img src={pic4} alt="dice4" className="dice" />
                </div>
            );
        } else if (number === 5) {
            return (
                <div>
                    <img src={pic5} alt="dice5" className="dice" />
                </div>
            );
        } else if (number === 6) {
            return (
                <div>
                    <img src={pic6} alt="dice6" className="dice" />
                </div>
            );
        }
    };
    ResultGame = (mainUserResult, computerUserResult) => {
        if (mainUserResult > computerUserResult) {
            return (
                <div className="result_won">
                    {' '}
                    <h4 className="titleresult">YOU WON</h4>
                </div>
            );
        } else if (mainUserResult < computerUserResult) {
            return (
                <div className="result_lost">
                    {' '}
                    <h4 className="titleresult">YOU LOST</h4>
                </div>
            );
        } else if (
            (mainUserResult == null && computerUserResult == null) ||
            (mainUserResult === 0 && computerUserResult === 0)
        ) {
            return;
        } else {
            return (
                <div className="result_draw">
                    {' '}
                    <h4 className="titleresult">DRAW</h4>
                </div>
            );
        }
    };
    handleButton = () => {
        this.setState({ amount: 0 });
        this.setState({ wins: 0 });
        this.setState({ losses: 0 });
        this.setState({ draws: 0 });
        this.setState({ Player1: 0 });
        this.setState({ Player2: 0 });
    };
    NaNsolution = () => {
        if (isNaN(this.state.amount)) {
            this.setState({ amount: 0 });
        }
        if (isNaN(this.state.wins)) {
            this.setState({ wins: 0 });
        }
        if (isNaN(this.state.losses)) {
            this.setState({ losses: 0 });
        }
        if (isNaN(this.state.draws)) {
            this.setState({ draws: 0 });
        }
        if (isNaN(this.state.Player1)) {
            this.setState({ Player1: 0 });
        }
        if (isNaN(this.state.Player2)) {
            this.setState({ Player2: 0 });
        }
    };
    render() {
        this.NaNsolution();
        return (
            <div>
                <center>
                    <h1 className="title-main">Welcome To The Dice Game!</h1>
                    <div className="instruction">Click the dice in order to roll it</div>
                    <div>
                        <img src={bluedice} onClick={this.handleClick} alt="main-dice" className="main-dice" />
                    </div>
                    <div className="Amount">Games Played: {this.state.amount}</div>
                    <center>
                        {' '}
                        <div className="button" onClick={this.handleButton}>
                            Clear Scores
                        </div>
                    </center>

                    <div className="users">
                        <div className="user1">
                            You: {this.state.Player1}
                            {this.showDicePic(this.state.Player1)}
                        </div>
                        <div className="user2">
                            Computer: {this.state.Player2}
                            {this.showDicePic(this.state.Player2)}
                        </div>
                    </div>
                    <div>{this.ResultGame(this.state.Player1, this.state.Player2)}</div>
                    <div className="balance">
                        Wins: {this.state.wins} Losses: {this.state.losses} Draws: {this.state.draws}
                    </div>
                </center>
            </div>
        );
    }
}
export default Game;
