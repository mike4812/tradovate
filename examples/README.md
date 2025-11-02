# Examples / דוגמאות שימוש

תיקייה זו מכילה דוגמאות מעשיות לשימוש במערכת.

## רשימת דוגמאות

### 1. Quick Start - התחלה מהירה
**קובץ:** `quick-start.js`

הדוגמה הכי פשוטה להתחלה.

```bash
node examples/quick-start.js
```

**מה זה עושה:**
- יוצר manager
- מתחבר לחשבון
- מציג יתרה וסטטוס

---

### 2. Place Orders - ביצוע הזמנות
**קובץ:** `place-orders.js`

איך לבצע הזמנות על חשבון ספציפי או כל החשבונות.

```bash
node examples/place-orders.js
```

**מה זה עושה:**
- מציג איך לבצע הזמנה בחשבון אחד
- מציג איך לבצע הזמנה בכל החשבונות
- מציג הזמנות פעילות

**הערה:** קוד ההזמנות מסומן בהערות למען הבטיחות.

---

### 3. Risk Monitor - ניטור סיכונים
**קובץ:** `risk-monitor.js`

מעקב אחר סיכונים בחשבונות.

```bash
# בדיקה חד-פעמית
node examples/risk-monitor.js

# ניטור רציף
node examples/risk-monitor.js --continuous
```

**מה זה עושה:**
- בודק יתרות נמוכות
- בודק רמת חשיפה (exposure)
- מתריע על יותר מדי פוזיציות פתוחות
- מציג דשבורד סיכונים

**התראות:**
- 🔴 High severity - דורש תשומת לב מיידית
- 🟡 Medium severity - לשים לב
- 🟢 All clear - הכל תקין

---

## הרצת הדוגמאות

### הכנה
1. ודא ש-`config.json` קיים ומוגדר
2. התקן חבילות: `npm install`

### הרצה
```bash
node examples/[example-name].js
```

### טיפים
- כל הדוגמאות משתמשות ב-`config.json`
- התחל בסביבת Demo
- הדוגמאות בטוחות להרצה (לא משנות דבר ללא אישור)

---

## יצירת דוגמה משלך

```javascript
import MultiAccountManager from '../src/MultiAccountManager.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadConfig() {
  const configPath = path.join(__dirname, '../config.json');
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

async function main() {
  const config = loadConfig();
  const manager = new MultiAccountManager(config.settings.isDemo);
  manager.addAccounts(config.accounts);

  try {
    await manager.connectAll();
    
    // Your code here
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    manager.disconnect();
  }
}

main().catch(console.error);
```

---

## תרומת דוגמאות

אם יש לך דוגמה שימושית, נשמח שתשתף!
ראה [CONTRIBUTING.md](../CONTRIBUTING.md) למידע נוסף.

---

**בהצלחה! 🚀**
