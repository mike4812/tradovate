# Tradovate Multi-Account Manager

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)

מערכת לניהול מספר חשבונות Tradovate במקביל. המערכת מאפשרת חיבור לכמה חשבונות Tradovate, קבלת מידע, ביצוע פעולות על חשבון ספציפי או על כל החשבונות בו-זמנית.

## 🌟 Features

- 🌐 **Web Interface** - Dashboard אינטראקטיבי ומעוצב
- 👥 **Multi-Account** - ניהול מספר חשבונות במקביל
- 📊 **Real-time Data** - יתרות, פוזיציות והזמנות
- 🛡️ **Risk Management** - ניתוח סיכונים והתראות
- 🔄 **Auto-refresh** - עדכון אוטומטי של נתונים
- 📱 **Responsive** - עובד מצוין על כל המכשירים

## תכונות עיקריות

- ✅ חיבור למספר חשבונות Tradovate במקביל
- ✅ אימות אוטומטי לכל החשבונות
- ✅ קבלת מידע מכל החשבונות (יתרות, פוזיציות, הזמנות)
- ✅ ביצוע פעולות על חשבון ספציפי
- ✅ ביצוע פעולות על כל החשבונות בו-זמנית
- ✅ ניהול אוטומטי של Tokens וחידוש
- ✅ תמיכה בסביבות Demo ו-Live
- ✅ Dashboard סטטוס לכל החשבונות

## התקנה

### דרישות מקדימות
- Node.js (גרסה 14 ומעלה)
- חשבונות Tradovate (Demo או Live)
- API Credentials מ-Tradovate

### שלבי התקנה

1. **התקן את החבילות הנדרשות:**
```bash
cd tradovate-multi-account
npm install
```

2. **צור קובץ תצורה:**
```bash
# העתק את קובץ הדוגמה
copy config.example.json config.json

# או ב-Linux/Mac:
cp config.example.json config.json
```

3. **ערוך את `config.json` והזן את פרטי החשבונות שלך:**
```json
{
  "accounts": [
    {
      "accountName": "Account1",
      "username": "YOUR_USERNAME",
      "password": "YOUR_PASSWORD",
      "appId": "YOUR_APP_ID",
      "appVersion": "1.0",
      "cid": "YOUR_CID",
      "sec": "YOUR_SECRET"
    }
  ],
  "settings": {
    "isDemo": true,
    "autoReconnect": true,
    "tokenRefreshInterval": 3600000
  }
}
```

## שימוש

### 🌐 הרצת ממשק Web (מומלץ!)

```bash
npm run web
```

פתח את הדפדפן ב: **http://localhost:3000**

ממשק אינטראקטיבי עם:
- Dashboard מלא
- ניהול חשבונות
- פוזיציות והזמנות
- הגדרות ורענון אוטומטי

### הרצת הדוגמה הבסיסית

```bash
npm start
```

### דוגמאות קוד

#### 1. חיבור לכל החשבונות

```javascript
import MultiAccountManager from './src/MultiAccountManager.js';

const manager = new MultiAccountManager(true); // true = Demo mode

// הוסף חשבונות
manager.addAccounts([
  {
    accountName: 'Account1',
    username: 'user1',
    password: 'pass1',
    appId: 'app_id',
    appVersion: '1.0',
    cid: 'cid',
    sec: 'secret'
  }
]);

// התחבר לכל החשבונות
await manager.connectAll();

// הצג סטטוס
await manager.printStatus();
```

#### 2. קבלת מידע מכל החשבונות

```javascript
// קבל סיכום של כל החשבונות
const summaries = await manager.getAllAccountsSummary();

// קבל יתרה כוללת
const totalBalance = await manager.getTotalBalance();
console.log(`Total Balance: $${totalBalance}`);

// קבל כל הפוזיציות
const allPositions = await manager.getAllPositions();

// קבל כל ההזמנות
const allOrders = await manager.getAllOrders();
```

#### 3. עבודה עם חשבון ספציפי

```javascript
// קבל client לחשבון ספציפי
const client = manager.getClient('Account1');

// קבל יתרה
const balance = await client.getBalance();

// קבל פוזיציות
const positions = await client.getPositions();

// בצע הזמנה
const orderData = {
  action: 'Buy',
  symbol: 'MESM4',
  orderQty: 1,
  orderType: 'Limit',
  price: 5000
};
await client.placeOrder(orderData);
```

#### 4. ביצוע פעולה על כל החשבונות

```javascript
// בצע הזמנה זהה בכל החשבונות
const orderData = {
  action: 'Buy',
  symbol: 'MESM4',
  orderQty: 1,
  orderType: 'Market'
};

await manager.placeOrderOnAll(orderData);
```

#### 5. חידוש Tokens

```javascript
// חדש את כל ה-Tokens
await manager.renewAllTokens();
```

## API Reference

### MultiAccountManager

#### Methods

- `addAccount(accountConfig)` - הוסף חשבון בודד
- `addAccounts(accountConfigs)` - הוסף מספר חשבונות
- `connectAll()` - התחבר לכל החשבונות
- `getClient(accountName)` - קבל client לחשבון ספציפי
- `getAllClients()` - קבל את כל ה-clients
- `getAccountNames()` - קבל רשימת שמות החשבונות
- `getAllAccountsSummary()` - קבל סיכום של כל החשבונות
- `getTotalBalance()` - קבל יתרה כוללת
- `getAllPositions()` - קבל כל הפוזיציות
- `getAllOrders()` - קבל כל ההזמנות
- `placeOrder(accountName, orderData)` - בצע הזמנה בחשבון ספציפי
- `placeOrderOnAll(orderData)` - בצע הזמנה בכל החשבונות
- `renewAllTokens()` - חדש את כל ה-Tokens
- `disconnect()` - התנתק מכל החשבונות
- `printStatus()` - הצג סטטוס dashboard

### TradovateClient

#### Methods

- `authenticate()` - בצע אימות
- `getAccountInfo()` - קבל מידע על החשבון
- `getPositions()` - קבל פוזיציות
- `getBalance()` - קבל יתרה
- `getOrders()` - קבל הזמנות
- `placeOrder(orderData)` - בצע הזמנה
- `cancelOrder(orderId)` - בטל הזמנה
- `renewToken()` - חדש Token
- `getAccountSummary()` - קבל סיכום החשבון

## מבנה הפרויקט

```
tradovate-multi-account/
├── src/
│   ├── TradovateClient.js        # Client בודד לחשבון Tradovate
│   ├── MultiAccountManager.js    # מנהל מרובה חשבונות
│   └── index.js                  # קובץ ראשי להדגמה
├── config.example.json           # דוגמה לקובץ תצורה
├── .env.example                  # דוגמה לקובץ סביבה
├── package.json
├── .gitignore
└── README.md
```

## אבטחה

⚠️ **חשוב:** אל תשתף את קובץ `config.json` או את פרטי ההתחברות שלך!

- הקובץ `config.json` נמצא ב-`.gitignore` ולא יישמר ב-Git
- השתמש במשתני סביבה (`.env`) לסביבות production
- אל תכתוב את פרטי ההתחברות בקוד
- השתמש בסביבת Demo לפני שעובר ל-Live

## טיפים

1. **התחל בסביבת Demo** - תמיד התחל בסביבת Demo כדי לבדוק את הקוד
2. **נהל Tokens** - המערכת מחדשת אוטומטית את ה-Tokens, אבל עדיין כדאי לבדוק
3. **טיפול בשגיאות** - המערכת ממשיכה לעבוד גם אם חשבון אחד נכשל
4. **ביצועים** - פעולות מבוצעות במקביל לביצועים טובים יותר

## Troubleshooting

### בעיות חיבור
- ודא שפרטי ההתחברות נכונים
- בדוק אם אתה בסביבת Demo או Live הנכונה
- ודא שה-API credentials תקפים

### Token expired
- המערכת מחדשה אוטומטית את ה-Token
- ניתן לקרוא ל-`renewAllTokens()` באופן ידני

### Rate limiting
- Tradovate מגביל מספר בקשות לשנייה
- המערכת מטפלת בכך אבל עדיף לא לשלוח יותר מדי בקשות בו-זמנית

## קבצים במערכת

```
tradovate-multi-account/
├── src/
│   ├── TradovateClient.js           # Client בודד לחשבון
│   ├── MultiAccountManager.js       # מנהל מרובה חשבונות
│   ├── TradovateWebSocketClient.js  # תמיכה ב-WebSocket
│   ├── utils.js                     # פונקציות עזר
│   ├── index.js                     # הדגמה בסיסית
│   ├── advanced-examples.js         # דוגמאות מתקדמות
│   ├── portfolio-manager.js         # כלי ניהול תיק
│   └── server.js                    # 🌐 Web Server
├── web/                             # 🌐 ממשק Web
│   ├── index.html                   # עמוד ראשי
│   ├── css/style.css                # עיצוב
│   └── js/app.js                    # לוגיקה
├── config.example.json              # דוגמה לתצורה
├── .env.example                     # דוגמה למשתני סביבה
├── README.md                        # תיעוד בסיסי (הקובץ הזה)
├── GUIDE.md                         # 📖 מדריך מפורט בעברית
└── package.json
```

## מדריכים נוספים

📖 **[מדריך שימוש מפורט בעברית](GUIDE.md)** - הסבר מפורט על כל התכונות, דוגמאות קוד, טיפים מתקדמים ועוד

🚀 **[התקנה מהירה](QUICK_SETUP.md)** - התחל בעבודה ב-3 שלבים פשוטים

📊 **[סיכום הפרויקט](PROJECT_SUMMARY.md)** - מבט כולל על המערכת והאפשרויות

🌐 **[ממשק Web](web/README.md)** - אתר אינטראקטיבי לניהול החשבונות

## תמיכה

לשאלות ותמיכה נוספת, עיין בתיעוד הרשמי של Tradovate:
- [Tradovate API Documentation](https://api.tradovate.com/)
- [Tradovate Developer Center](https://tradovate.github.io/api/)

## רישיון

ISC

---

**Made with ❤️ for Tradovate traders**
