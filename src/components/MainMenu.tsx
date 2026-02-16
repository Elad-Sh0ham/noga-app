interface MainMenuProps {
  onSelect: (menu: 'NUMBERS_MENU' | 'LETTERS' | 'SHAPES' | 'WORDS') => void;
}

const MainMenu = ({ onSelect }: MainMenuProps) => {
  // נשתמש בנתיב ה-Base URL כדי לוודא שהתמונה נטענת
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div style={menuStyles.container}>
      
      {/* אזור הדמות של נגה */}
      <div style={menuStyles.nogaWrapper}>
        <img 
          src={`${baseUrl}images/noga/happy.svg`} 
          alt="נגה" 
          className="noga-bounce" // כאן אנחנו מחברים את האנימציה מה-CSS
          style={menuStyles.nogaImg}
        />
        {/* בועת דיבור אופציונלית */}
        <div style={menuStyles.bubble}>היי נגה! מה נלמד היום?</div>
      </div>

      {/* גריד הכפתורים */}
      <div style={menuStyles.grid}>
        <button style={{...menuStyles.btn, backgroundColor: '#A3D5FF'}} onClick={() => onSelect('NUMBERS_MENU')}>
          <span style={{fontSize: '2.5rem', marginBottom: '10px'}}>🔢</span>
          מספרים
        </button>
        <button style={{...menuStyles.btn, backgroundColor: '#FFC6D0'}}>
          <span style={{fontSize: '2.5rem', marginBottom: '10px'}}>🅰️</span>
          אותיות
        </button>
        <button style={{...menuStyles.btn, backgroundColor: '#B8E994'}}>
          <span style={{fontSize: '2.5rem', marginBottom: '10px'}}>🟦</span>
          צורות
        </button>
        <button style={{...menuStyles.btn, backgroundColor: '#FFD97D'}}>
          <span style={{fontSize: '2.5rem', marginBottom: '10px'}}>📖</span>
          מילים
        </button>
      </div>
    </div>
  );
};

const menuStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px', // מתאים לרוחב טלפון
    margin: '0 auto'
  },
  nogaWrapper: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '30px',
    marginTop: '20px'
  },
  nogaImg: {
    width: '150px', // גודל בולט ומזמין
    height: 'auto',
    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
  },
  bubble: {
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    border: '4px solid #4A4A4A',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginTop: '15px',
    position: 'relative' as 'relative',
    boxShadow: '0 4px 0 rgba(0,0,0,0.1)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    width: '100%'
  },
  btn: { 
    height: '150px',
    borderRadius: '35px',
    border: 'none',
    color: '#4A4A4A', 
    fontWeight: 'bold' as 'bold',
    fontSize: '1.3rem',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 0px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.1s'
  }
};

export default MainMenu;