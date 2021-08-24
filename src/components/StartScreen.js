import React from 'react';

const StartScreen = ({ start }) => {
    return (
        <div className="start-screen">
            <h2>Welcome to the Trivia Challenge!</h2>

            <h3>You will be presented with 10 True or False questions.</h3>

            <h3>Can you score 100%?</h3>

            <button onClick={start}>Begin</button>
        </div>
    )
}


export default StartScreen;
