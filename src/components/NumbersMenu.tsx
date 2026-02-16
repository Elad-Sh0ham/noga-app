import React from 'react';

interface NumbersMenuProps {
  onSelect: (num: number) => void;
  onBack: () => void;
}

const NumbersMenu = ({ onSelect, onBack }: NumbersMenuProps) => {
  return (
    <div>
      <button onClick={onBack} style={numStyles.backBtn}>⬅️ חזור</button>
      <h2 style={{marginTop: '60px', color: '#2c3e50'}}>בחר מספר:</h2>
      
      <div style={numStyles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button key={num} onClick={() => onSelect(num)} style={numStyles.circle}>
            {/* עכשיו הנתיב פשוט וישיר לשם הקובץ המספרי */}
                <img 
                src={`${import.meta.env.BASE_URL}images/numbers/${num}.svg`}
                alt={num.toString()} 
                style={{ width: '70%', height: 'auto' }} 
                onError={(e) => {
                    // אם אין תמונה, נציג את המספר כטקסט במקום לקרוס
                    e.currentTarget.style.display = 'none';
                }} 
                />
          </button>
        ))}
      </div>
    </div>
  );
};

const numStyles = {
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '15px',
    padding: '10px'
  },
  circle: { 
    aspectRatio: '1/1', 
    borderRadius: '50%', 
    border: '6px solid #A3D5FF', 
    backgroundColor: 'white', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 6px 0px rgba(163, 213, 255, 0.4)'
  },
  backBtn: { 
    float: 'right' as 'right', 
    padding: '10px 15px', 
    borderRadius: '15px', 
    border: 'none', 
    backgroundColor: '#eee',
    fontWeight: 'bold'
  }
};

export default NumbersMenu;