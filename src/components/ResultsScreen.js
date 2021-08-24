import React from 'react';

const ResultsScreen = ({ results, numberCorrect, playAgain }) => {

    return (
        <div className="results-screen">
            <div className="results-screen__score">
                <h2>You scored</h2>
                <h2> {numberCorrect} / {results.length}</h2>
            </div>
            <div className="result-container">
                {results.map((r, i) => 
                    (
                        <div key={i} className="result-container__result">
                            <span 
                                className={`result-container__icon ${r.correct ? "result-container__icon--correct" : "result-container__icon--wrong"}`}>
                                {r.correct ? '+' : "-"}
                            </span>
                            <span className="result-container__question">{r.question} <br/><strong className="u-l">Your guess: {r.guess}</strong></span>
                        </div>
                    )
                )}
            </div>
            
            <button onClick={playAgain}>Play Again?</button>
        </div>
    )
};

export default ResultsScreen;
