import './style.css'; // ייבוא העיצוב
import { Howl } from 'howler'; // ייבוא ספריית הסאונד

// 1. ייבוא הנכסים (Assets)
// Vite יודע לתרגם את ה-Import הזה לנתיב הנכון באופן אוטומטי
import nogaDefaultUrl from './assets/images/noga/noga.svg';
import nogaHappyUrl from './assets/images/noga/happy.svg';

// 2. הגדרת הסאונד (בהנחה שיש לך קובץ hello.mp3 בתיקיית ה-audio)
// אם אין לך עדיין קובץ סאונד, הקוד לא יישבר, פשוט לא נשמע כלום
const helloSound = new Howl({
  src: ['/src/assets/audio/hello.mp3'], // שים לב לנתיב
  html5: true
});

// 3. יצירת הממשק
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="game-container">
    <h1>היי, אני נֹגה!</h1>
    <div class="noga-wrapper">
      <img src="${nogaDefaultUrl}" id="noga-character" class="noga-animated" alt="Noga" />
    </div>
    <p>לחצו עלי!</p>
  </div>
`;

// 4. לוגיקה של אינטראקציה
const nogaImg = document.querySelector<HTMLImageElement>('#noga-character')!;

nogaImg.addEventListener('click', () => {
  // החלפת תמונה ל-"שמח" לרגע
  nogaImg.src = nogaHappyUrl;
  
  // השמעת סאונד
  helloSound.play();

  // חזרה לתמונה המקורית אחרי שנייה
  setTimeout(() => {
    nogaImg.src = nogaDefaultUrl;
  }, 1000);
});