import React from 'react';

const ErrorScreen = ({ error }) => {
    return (
        <div className="error-screen">
            <h1>{error}</h1>
            <p>Check your internet connection and try again.</p>
        </div>
    )
}

export default ErrorScreen;