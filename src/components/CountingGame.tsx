import React, { useState } from 'react';

const CountingGame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [score, setScore] = useState(0);

  const checkAnswer = (num: number) => {
    if (num === targetNumber) {
      setScore(score + 1);
      setTargetNumber(Math.floor(Math.random() * 10) + 1);
      alert("כל הכבוד! נכון מאוד! 🎉");
    } else {
      alert("אופס, נסה שוב! ❤️");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#A3D5FF' }}>כמה פריטים אתה רואה?</h1>
      
      <div style={{ fontSize: '50px', margin: '30px' }}>
        {/* מציג אימוג'ים לפי המספר שנבחר */}
        {"🍎".repeat(targetNumber)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => checkAnswer(num)}
            style={{
              padding: '15px',
              fontSize: '20px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#A3D5FF',
              cursor: 'pointer'
            }}
          >
            {num}
          </button>
        ))}
      </div>
      <h2 style={{ marginTop: '20px' }}>ניקוד: {score}</h2>
    </div>
  );
};

export default CountingGame;