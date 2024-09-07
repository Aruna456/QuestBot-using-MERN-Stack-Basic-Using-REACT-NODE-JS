import React, { useState } from 'react';

export default function AskFAQ() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        fetch('http://localhost:5000/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        })
        .then(response => response.json())
        .then(data => {
            if (data.answer) {
                setAnswer(data.answer);
            } else if (data.message) {
                setError(data.message);
            }
        })
        .catch(error => {
            setError('Error fetching data');
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Ask a Question</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Type your question" 
                />
                <button type="submit">Ask</button>
            </form>
            {answer && (
                <div>
                    <h2>Answer:</h2>
                    <p>{answer}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}
