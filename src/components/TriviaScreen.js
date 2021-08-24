import React, { useState, useEffect } from 'react';
import he from 'he';

import Spinner from './Spinner';
import ErrorScreen from './ErrorScreen';

const TriviaScreen = props => {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    useEffect( async () => {
        (async () => {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
                const data = await res.json();

                if(data.response_code !== 0) {
                    throw new Error("Something went wrong!")
                }
             
                let decodedQuestions = data.results.map(result => {
                    result.question = he.decode(result.question);
                    return result;
                });
                setQuestions(decodedQuestions);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
          })()
    }, []);

    if(error) {
        return (
           <ErrorScreen error={error} />
        )
    }

    if(loading) {
        return (
            <Spinner />
        )
    }

    const guess = guess => {
        let guessObject = {
            question: questions[count].question,
            guess
        }
        guessObject.correct = guess === questions[count].correct_answer; 
        props.addGuess(guessObject);

        if(count < questions.length - 1) {
            setCount(count + 1);
        } else {
            props.viewResults();
        }
        
    }

    return (
        <div className="trivia-screen">
                <div className="question-container">
                    <h2 className="category">{questions[count].category}</h2>
                    <div className="question">{questions[count].question}</div>
                </div>
           
            <div className="index">{count + 1} of 10</div>
            
            <div className="btn-container">
                <button className="btn" onClick={() => guess('True')}>True</button>
                <button className="btn" onClick={() => guess('False')}>False</button>
            </div>
        </div>
    )
};

export default TriviaScreen;
