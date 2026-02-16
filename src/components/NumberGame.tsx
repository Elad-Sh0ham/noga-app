import React from 'react';

interface NumberGameProps {
  number: number;
  onBack: () => void;
}

const NumberGame = ({ number, onBack }: NumberGameProps) => {
  return (
    <div style={{marginTop: '50px'}}>
      <button onClick={onBack} style={{float: 'right'}}>⬅️ חזור</button>
      <h1>לומדים את המספר: {number}</h1>
      <div style={{fontSize: '100px', margin: '40px'}}>⭐</div>
      <p>כאן יבואו 3 השלבים של המספר {number}</p>
    </div>
  );
};

export default NumberGame;