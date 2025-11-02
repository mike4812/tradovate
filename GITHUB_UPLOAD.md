# 🚀 העלאת הפרויקט ל-GitHub

## מדריך שלב אחר שלב

### דרישות מוקדמות
- ✅ Git מותקן במחשב
- ✅ חשבון GitHub (https://github.com/)
- ✅ הפרויקט מוכן (זה הקובץ!)

---

## שלב 1: התקנת Git (אם עדיין לא מותקן)

### בדיקה אם Git מותקן:
```powershell
git --version
```

### אם לא מותקן:
1. הורד מ: https://git-scm.com/download/win
2. התקן עם ברירות המחדל
3. אתחל את PowerShell מחדש

---

## שלב 2: הגדרת Git (פעם ראשונה בלבד)

```powershell
# הגדר את השם שלך
git config --global user.name "Your Name"

# הגדר את האימייל שלך (אותו אימייל מ-GitHub)
git config --global user.email "your.email@example.com"

# בדוק שההגדרות נשמרו
git config --list
```

---

## שלב 3: אתחול Git בפרויקט

פתח PowerShell בתיקיית הפרויקט:

```powershell
# עבור לתיקיית הפרויקט
cd c:\projects\argaman-capital-main\tradovate-multi-account

# אתחל Git repository
git init
```

---

## שלב 4: הוספת קבצים ל-Git

```powershell
# הוסף את כל הקבצים
git add .

# צור commit ראשון
git commit -m "Initial commit - Tradovate Multi-Account Manager"
```

### אם יש שגיאה עם config.json:
```powershell
# ודא ש-config.json ב-.gitignore
echo "config.json" >> .gitignore
git add .gitignore
git commit -m "Update gitignore"
```

---

## שלב 5: יצירת Repository ב-GitHub

### דרך 1: דרך האתר (מומלץ למתחילים)

1. **היכנס ל-GitHub:** https://github.com/
2. **לחץ על ה-+** בפינה הימנית עליונה
3. **בחר "New repository"**
4. **מלא פרטים:**
   - Repository name: `tradovate-multi-account`
   - Description: `Multi-account Tradovate connection manager with web interface`
   - Public או Private (בחר לפי רצונך)
   - **אל** תסמן "Initialize with README" (יש לנו כבר!)
5. **לחץ "Create repository"**

### דרך 2: דרך GitHub CLI (למתקדמים)

```powershell
# התקן GitHub CLI
winget install --id GitHub.cli

# התחבר ל-GitHub
gh auth login

# צור repository חדש
gh repo create tradovate-multi-account --public --source=. --remote=origin --push
```

---

## שלב 6: חיבור הפרויקט המקומי ל-GitHub

אחרי יצירת ה-Repository ב-GitHub, העתק את ה-URL (יראה כך: `https://github.com/USERNAME/tradovate-multi-account.git`)

```powershell
# הוסף את GitHub כ-remote
git remote add origin https://github.com/USERNAME/tradovate-multi-account.git

# בדוק שה-remote נוסף
git remote -v

# שנה את שם ה-branch ל-main (GitHub standard)
git branch -M main

# העלה את הקבצים ל-GitHub
git push -u origin main
```

### אם מתבקש username ו-password:
- **Username:** שם המשתמש שלך ב-GitHub
- **Password:** השתמש ב-**Personal Access Token** (לא סיסמה רגילה!)

#### יצירת Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. בחר scope: `repo` (full control)
4. העתק את ה-token (רק פעם אחת!)
5. השתמש בו במקום סיסמה

---

## שלב 7: בדיקה שהכל עבד

```powershell
# בדוק סטטוס
git status

# ראה את ה-commits
git log

# בדוק ב-GitHub
# פתח: https://github.com/USERNAME/tradovate-multi-account
```

---

## 🔄 עדכון הפרויקט בעתיד

כשאתה משנה קבצים:

```powershell
# ראה מה השתנה
git status

# הוסף את הקבצים שהשתנו
git add .

# או קובץ ספציפי
git add src/myfile.js

# צור commit עם הודעה
git commit -m "תיאור השינוי שעשית"

# העלה ל-GitHub
git push
```

---

## 📋 פקודות שימושיות

```powershell
# ראה סטטוס נוכחי
git status

# ראה היסטוריה
git log --oneline

# ראה שינויים לפני commit
git diff

# בטל שינויים בקובץ
git checkout -- filename

# משוך עדכונים מ-GitHub
git pull

# שכפל את הפרויקט ממחשב אחר
git clone https://github.com/USERNAME/tradovate-multi-account.git
```

---

## ⚠️ חשוב! קבצים שלא להעלות

וודא שהקבצים הבאים **לא** מועלים ל-GitHub (צריכים להיות ב-`.gitignore`):

```
node_modules/
config.json
.env
*.log
.DS_Store
```

אם בטעות העלית `config.json`:
```powershell
# הסר מ-Git (אבל לא מהמחשב)
git rm --cached config.json

# commit
git commit -m "Remove config.json from Git"

# push
git push
```

---

## 🌐 GitHub Pages (אתר חי בחינם!)

אם תרצה להעלות את האתר ל-GitHub Pages:

1. **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main → `/web` או `/root`
4. **Save**

האתר יהיה זמין ב:
```
https://USERNAME.github.io/tradovate-multi-account/
```

**הערה:** אתה תצטרך להוסיף backend API נפרד למידע אמיתי.

---

## 📝 README.md טוב

ה-README.md שיש לך כבר מעולה! אבל אפשר להוסיף:

```markdown
## Installation

\`\`\`bash
git clone https://github.com/USERNAME/tradovate-multi-account.git
cd tradovate-multi-account
npm install
\`\`\`

## Usage

\`\`\`bash
# Web Interface
npm run web

# CLI
npm start
\`\`\`

## Demo

[Live Demo](https://username.github.io/tradovate-multi-account/)

## Screenshots

![Dashboard](screenshots/dashboard.png)
```

---

## 🎨 הוסף תגים (Topics) ב-GitHub

בעמוד ה-Repository:
1. לחץ על ⚙️ ליד About
2. הוסף Topics:
   - `tradovate`
   - `trading`
   - `multi-account`
   - `nodejs`
   - `javascript`
   - `dashboard`
   - `web-interface`

---

## 📸 הוסף צילומי מסך (אופציונלי)

1. צור תיקייה `screenshots/` בפרויקט
2. שמור צילומי מסך מהאתר
3. העלה ל-Git:
```powershell
git add screenshots/
git commit -m "Add screenshots"
git push
```

4. השתמש בהם ב-README:
```markdown
![Dashboard](screenshots/dashboard.png)
```

---

## 🔐 אבטחה

### אל תעלה:
- ❌ `config.json` - יש בו סיסמאות!
- ❌ `.env` - משתני סביבה רגישים
- ❌ API keys או tokens
- ❌ `node_modules/` - גדול מדי

### כדי להסיר קובץ רגיש שכבר הועלה:

```powershell
# הסר מהיסטוריה (זהיר!)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch config.json" \
  --prune-empty --tag-name-filter cat -- --all

# force push
git push origin --force --all
```

**עדיף:** צור repository חדש אם העלית משהו רגיש.

---

## 🏷️ Releases ו-Tags

כשהפרויקט יציב:

```powershell
# צור tag
git tag -a v1.0.0 -m "Version 1.0.0 - Initial release"

# העלה את ה-tag
git push origin v1.0.0

# ב-GitHub:
# Releases → Draft a new release → בחר את ה-tag
```

---

## 👥 שיתוף פעולה

### הוסף collaborators:
1. Settings → Collaborators
2. Add people

### Work with branches:
```powershell
# צור branch חדש
git checkout -b feature-name

# עבוד על השינויים
git add .
git commit -m "Add new feature"

# העלה
git push -u origin feature-name

# ב-GitHub: צור Pull Request
```

---

## 🆘 בעיות נפוצות

### "Permission denied"
צור Personal Access Token והשתמש בו במקום סיסמה.

### "Repository not found"
בדוק את ה-URL:
```powershell
git remote -v
git remote set-url origin https://github.com/CORRECT-USERNAME/repo.git
```

### "Failed to push"
```powershell
git pull --rebase origin main
git push
```

### שכחת להוסיף קובץ ל-commit:
```powershell
git add forgotten-file.js
git commit --amend --no-edit
git push --force
```

---

## 📚 משאבים נוספים

- [GitHub Docs](https://docs.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - תיקון טעויות

---

## ✅ Checklist

לפני העלאה:
- [ ] Git מותקן
- [ ] חשבון GitHub קיים
- [ ] `.gitignore` מוגדר נכון
- [ ] `config.json` לא יועלה
- [ ] README.md מעודכן
- [ ] הכל עובד (`npm start`, `npm run web`)
- [ ] commit message תיאורי
- [ ] Repository נוצר ב-GitHub
- [ ] הקבצים הועלו בהצלחה

---

## 🎉 סיימת!

הפרויקט שלך עכשיו ב-GitHub! 🚀

**URL הפרויקט שלך:**
```
https://github.com/YOUR-USERNAME/tradovate-multi-account
```

שתף אותו עם אחרים! ⭐

---

**עזרה נוספה?** פתח issue ב-GitHub או קרא את התיעוד.

תאריך: נובמבר 2025
