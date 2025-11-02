# 🎯 Tradovate Multi-Account Manager
## מערכת לניהול מספר חשבונות Tradovate

### 👋 ברוכים הבאים!

זוהי מערכת מקצועית ומקיפה לניהול מספר חשבונות Tradovate במקביל.
המערכת מאפשרת לך לעקוב אחר יתרות, פוזיציות, לבצע הזמנות, ולנהל סיכונים על כל החשבונות שלך ממקום אחד.

---

## 🚀 התחלה מהירה - 3 צעדים

### 1️⃣ התקן חבילות
```powershell
npm install
```

### 2️⃣ צור קובץ תצורה
```powershell
copy config.example.json config.json
```
ערוך את `config.json` ומלא את הפרטים שלך

### 3️⃣ הרץ
```powershell
npm start
```

**זהו!** המערכת רצה ומוכנה לעבודה 🎉

---

## 📚 איפה להתחיל?

### 🆕 חדש פה?
**→ קרא את [START_HERE.md](START_HERE.md)** - הסבר מפורט על כל הצעדים

### ⚡ רוצה התקנה מהירה?
**→ קרא את [QUICK_SETUP.md](QUICK_SETUP.md)** - 3 שלבים פשוטים

### ✅ רוצה לבדוק שהכל תקין?
**→ עבור על [CHECKLIST.md](CHECKLIST.md)** - רשימת בדיקות

### 📖 רוצה ללמוד לעומק?
**→ קרא את [GUIDE.md](GUIDE.md)** - מדריך מפורט בעברית (650+ שורות!)

### 🗺️ רוצה מבט כולל?
**→ עיין ב-[INDEX.md](INDEX.md)** - מפת כל הפרויקט

---

## 💡 מה המערכת עושה?

### ✅ חיבור וניהול
- מתחבר למספר חשבונות Tradovate במקביל
- אימות אוטומטי וחידוש Tokens
- עובד עם Demo או Live

### 📊 מידע בזמן אמת
- יתרות חשבון
- פוזיציות פתוחות
- הזמנות פעילות
- סטטיסטיקות מפורטות

### 📈 ביצוע פעולות
- ביצוע הזמנות בחשבון ספציפי
- ביצוע הזמנות בכל החשבונות בו-זמנית
- ביטול הזמנות
- ניהול פוזיציות

### 🛡️ ניהול סיכונים
- ניתוח רמת חשיפה (exposure)
- התראות על יתרות נמוכות
- מעקב אחר פוזיציות
- דוחות סיכום

### 🔄 כלים מתקדמים
- ניטור רציף אוטומטי
- ייצוא נתונים ל-JSON
- Dashboard אינטראקטיבי
- תמיכה ב-WebSocket (template)

---

## 🎯 פקודות שימושיות

```powershell
# פקודות בסיסיות
npm start                    # הרצה בסיסית
npm run advanced            # דוגמאות מתקדמות

# ניהול תיק
npm run portfolio           # ניתוח תיק השקעות
npm run portfolio:monitor   # ניטור רציף (כל 30 שניות)
npm run portfolio:export    # ייצוא נתונים

# דוגמאות
node examples/quick-start.js      # התחלה מהירה
node examples/place-orders.js     # ביצוע הזמנות
node examples/risk-monitor.js     # ניטור סיכונים
```

---

## 📁 מה יש בפרויקט?

```
tradovate-multi-account/
├── 📂 src/                    # קוד המערכת
│   ├── TradovateClient.js         # חיבור לחשבון בודד
│   ├── MultiAccountManager.js     # ניהול מספר חשבונות
│   ├── utils.js                   # פונקציות עזר
│   └── עוד...
│
├── 📂 examples/               # דוגמאות שימוש
│   ├── quick-start.js             # התחלה מהירה
│   ├── place-orders.js            # הזמנות
│   ├── risk-monitor.js            # ניטור סיכונים
│   └── README.md
│
├── 📖 תיעוד מקיף
│   ├── START_HERE.md              # 👈 התחל כאן!
│   ├── QUICK_SETUP.md             # התקנה מהירה
│   ├── GUIDE.md                   # מדריך מפורט
│   ├── INDEX.md                   # מפת הפרויקט
│   └── עוד...
│
└── ⚙️ קבצי הגדרה
    ├── package.json
    ├── config.example.json
    └── עוד...
```

---

## 🌟 למה להשתמש במערכת הזו?

### ✅ חיסכון בזמן
במקום לנהל כל חשבון בנפרד, נהל את כולם ממקום אחד

### ✅ בטיחות
- התחל תמיד ב-Demo
- בדיקות רבות לפני ביצוע
- תיעוד מקיף

### ✅ גמישות
- קל להתאמה אישית
- פונקציות מודולריות
- הרחבה פשוטה

### ✅ מקצועיות
- קוד נקי ומסודר
- תיעוד מלא בעברית
- דוגמאות מעשיות

---

## 💻 דוגמת קוד

```javascript
import MultiAccountManager from './src/MultiAccountManager.js';

// צור מנהל חשבונות
const manager = new MultiAccountManager(true); // true = Demo

// הוסף חשבונות
manager.addAccounts([
  {
    accountName: 'חשבון 1',
    username: 'user1',
    password: 'pass1',
    // ... שאר הפרטים
  }
]);

// התחבר לכולם
await manager.connectAll();

// קבל יתרה כוללת
const total = await manager.getTotalBalance();
console.log(`יתרה כוללת: $${total}`);

// הצג סטטוס
await manager.printStatus();
```

---

## ⚠️ חשוב לדעת!

### 🔐 אבטחה
- **אל תשתף את config.json** - יש בו סיסמאות!
- השתמש ב-`.gitignore` (כלול בפרויקט)
- שמור גיבוי במקום בטוח

### 🧪 בדיקות
- **התחל תמיד בסביבת Demo** (`isDemo: true`)
- בדוק שהכל עובד לפני מעבר ל-Live
- השתמש בדוגמאות לתרגול

### 📚 למידה
- קרא את התיעוד לפני שימוש
- נסה את הדוגמאות
- שאל שאלות אם משהו לא ברור

---

## 🆘 צריך עזרה?

### יש לך שאלה?
1. קרא את **[GUIDE.md](GUIDE.md)** - יש שם כמעט הכל
2. בדוק את **[START_HERE.md](START_HERE.md)** - פתרון בעיות נפוצות
3. עיין ב-**[examples/](examples/)** - דוגמאות מעשיות

### יש באג או רעיון?
- קרא את **[CONTRIBUTING.md](CONTRIBUTING.md)**
- פתח Issue ב-GitHub (אם רלוונטי)

### רוצה ללמוד יותר על Tradovate?
- [Tradovate API Documentation](https://api.tradovate.com/)
- [Tradovate Community](https://community.tradovate.com/)

---

## 📊 סטטיסטיקות

- **שורות קוד:** ~1,780
- **שורות תיעוד:** ~2,000+
- **פונקציות:** 40+
- **דוגמאות:** 6
- **קבצי תיעוד:** 9

---

## 🎓 מסלול למידה מומלץ

### שלב 1: התקנה (5 דקות)
1. ✅ `npm install`
2. ✅ `copy config.example.json config.json`
3. ✅ ערוך config.json
4. ✅ `npm start`

### שלב 2: למידה בסיסית (15 דקות)
1. 📖 קרא START_HERE.md
2. 💻 הרץ examples/quick-start.js
3. 💻 הרץ npm start
4. ✅ וודא שהכל עובד

### שלב 3: למידה מתקדמת (1 שעה)
1. 📖 קרא GUIDE.md
2. 💻 הרץ דוגמאות נוספות
3. 💻 נסה npm run portfolio:monitor
4. 🎯 התאם אישית לצרכים שלך

---

## 🏆 מה הלאה?

אחרי שהכל עובד:
1. ✅ נסה את כל הדוגמאות
2. ✅ קרא את הקוד ב-src/
3. ✅ התאם לצרכים שלך
4. ✅ העבר לסביבת Live (זהירות!)
5. ✅ תרום לפרויקט אם תרצה

---

## 📝 רישיון

ISC License - חופשי לשימוש אישי ומסחרי

**אזהרה:** מסחר בחוזים עתידיים כרוך בסיכון. השתמש באחריות.

---

## 🎉 מוכן להתחיל?

**→ קרא את [START_HERE.md](START_HERE.md) עכשיו! 🚀**

---

## 📞 יצירת קשר ותמיכה

- 📖 תיעוד: כל הקבצים במדריכים
- 🌐 Tradovate: https://tradovate.com/
- 💬 Community: https://community.tradovate.com/

---

**בהצלחה במסחר! 🚀📈💰**

---

תאריך יצירה: נובמבר 2025
גרסה: 1.0.0
נוצר עם ❤️ עבור סוחרי Tradovate
