import { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import NumbersMenu from './components/NumbersMenu';
import NumberGame from './components/NumberGame';

type ScreenType = 'HOME' | 'NUMBERS_MENU' | 'GAME';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('HOME');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  // --- ניהול כפתור חזור של הטלפון ---
  useEffect(() => {
    const handlePopState = () => {
      if (currentScreen === 'GAME') {
        setCurrentScreen('NUMBERS_MENU');
      } else if (currentScreen === 'NUMBERS_MENU') {
        setCurrentScreen('HOME');
      }
    };

    if (currentScreen !== 'HOME') {
      window.history.pushState({ screen: currentScreen }, '');
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentScreen]);

  const goToNumbers = () => setCurrentScreen('NUMBERS_MENU');
  const startGame = (num: number) => {
    setSelectedNumber(num);
    setCurrentScreen('GAME');
  };

  return (
    <div style={appStyles.container}>
      {currentScreen === 'HOME' && (
        <MainMenu onSelect={goToNumbers} />
      )}

      {currentScreen === 'NUMBERS_MENU' && (
        <NumbersMenu 
          onBack={() => window.history.back()} 
          onSelect={startGame} 
        />
      )}

      {currentScreen === 'GAME' && selectedNumber !== null && (
        <NumberGame 
          number={selectedNumber} 
          onBack={() => window.history.back()} 
        />
      )}
    </div>
  );
};

const appStyles = {
  container: {
    textAlign: 'center' as 'center',
    padding: '20px',
    backgroundColor: '#FDF9F3',
    minHeight: '100vh',
    direction: 'rtl' as 'rtl',
    fontFamily: 'Arial',
    overflowX: 'hidden' as 'hidden'
  }
};

export default App;