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
      // כשהמשתמש לוחץ על כפתור חזור בטלפון:
      if (currentScreen === 'GAME') {
        setCurrentScreen('NUMBERS_MENU');
      } else if (currentScreen === 'NUMBERS_MENU') {
        setCurrentScreen('HOME');
      }
    };

    // מוסיפים רשומה להיסטוריה בכל פעם שעוברים מסך (חוץ מדף הבית)
    if (currentScreen !== 'HOME') {
      window.history.pushState({ screen: currentScreen }, '');
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentScreen]);

  // פונקציות ניווט ידניות (מהכפתורים במסך)
  const goToNumbers = () => setCurrentScreen('NUMBERS_MENU');
  const goToHome = () => setCurrentScreen('HOME');
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
          onBack={() => window.history.back()} // שינוי ל-back של הדפדפן כדי שיסנכרן את ההיסטוריה
          onSelect={startGame} 
        />
      )}

      {currentScreen === 'GAME' && selectedNumber !== null && (
        <NumberGame 
          number={selectedNumber} 
          onBack={() => window.history.back()} // שינוי ל-back של הדפדפן
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