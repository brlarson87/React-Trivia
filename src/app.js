import React, { useState } from 'react';

//Components
import StartScreen from './components/StartScreen';
import TriviaScreen from './components/TriviaScreen';
import ResultsScreen from './components/ResultsScreen';

// Main App Component/Router
const App = () => {
    const [started, setStarted] = useState(false);
    const [finishedGame, setFinishedGame] = useState(false);
    const [results, setResults] = useState([]);

    const start = () => setStarted(true);
    
    const viewResults = () => setFinishedGame(true);

    const playAgain = () => {
        setStarted(false);
        setFinishedGame(false);
        setResults([]);
    }

    const addGuess = (guess) => {
        setResults([...results, guess]);
    }

    // Trivia game finished
    if(finishedGame) {
        return (
            <ResultsScreen 
                results={results} 
                numberCorrect={results.filter(result => result.correct).length}
                playAgain={playAgain}
            />
        )
        
    }

    // On start/main screen
    if(!started) {
        return(
            <StartScreen start={start}/>
        )
        
    }

    // Trivia game started/game in progress
    return (
        <div>
            <TriviaScreen viewResults={viewResults} addGuess={addGuess}/>
        </div>
    )
};

export default App;
