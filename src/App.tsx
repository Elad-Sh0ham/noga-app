import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import NumbersMenu from './components/NumbersMenu';
import NumberGame from './components/NumberGame';

type ScreenType = 'HOME' | 'NUMBERS_MENU' | 'GAME';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('HOME');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <div style={appStyles.container}>
      {currentScreen === 'HOME' && (
        <MainMenu onSelect={(menu) => setCurrentScreen(menu as any)} />
      )}

      {currentScreen === 'NUMBERS_MENU' && (
        <NumbersMenu 
          onBack={() => setCurrentScreen('HOME')} 
          onSelect={(num) => { setSelectedNumber(num); setCurrentScreen('GAME'); }} 
        />
      )}

      {currentScreen === 'GAME' && selectedNumber !== null && (
        <NumberGame 
          number={selectedNumber} 
          onBack={() => setCurrentScreen('NUMBERS_MENU')} 
        />
      )}
    </div>
  );
};

const appStyles = {
  container: {
    textAlign: 'center' as 'center',
    padding: '20px',
    backgroundColor: '#FDF9F3', // צבע הקרם של בלואי
    minHeight: '100vh',
    direction: 'rtl' as 'rtl',
    fontFamily: 'Arial'
  }
};

export default App;