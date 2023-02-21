import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/main.scss'

import VueScrollTo from 'vue-scrollto'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      nav: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        introduction: "Hello, I'm Diego Monzon Contreras,",
        title: 'Full-Stack Developer',
        location: 'Based in Israel, Netanya.',
        cta: 'Resume',
        resumeUrl: '/files/resume.pdf',
      },
      skills: {
        header: 'What I bring to the table',
      },
      projects: {
        header: 'Some of the things I made',
        cta: 'READ MORE',
        wewix: {
          peek: 'Website builder similar to Wix',
          desc: 'Wewix is a web-based application that enables users to create and customize their own professional websites with ease. It offers customizable templates and design elements, along with other features, to help users create unique and engaging websites. The app is user-friendly and accessible to all skill levels, allowing anyone to create a professional-looking website without coding experience.',
        },
        twitter: {
          peek: 'Website clone of Twitter',
          desc: 'The clone includes the exact look and feel of Twitter and it includes the following features: Authentication, Post upload, Replies, Personal profiles, Media upload, Search, Automatic trends based on hashtags.',
        },
        saderti: {
          title: 'Saderti',
          peek: 'The app for work managers',
          desc: 'Saderti is a powerful web application that I created to help managers manage their workers and schedules. With a user-friendly interface, the app streamlines the scheduling process, allowing managers to focus on other critical tasks. I built the application (beta version) in just one week.',
        },
        defined: {
          peek: 'A clean looking dictionary app',
          desc: 'The app allows search for word terms and/or of synonyms, in case a user is connected he can also bookmark a favorite word to have quick access to it in his profile page and he can also see his search history.',
        },
        minesweeper: {
          peek: 'Updated version of the classic minesweeper game',
          desc: 'The game was built as the first challenge in the Coding Academy bootcamp, the assignment was to code the game and there were optional bonuses one could add as well, the entire game was build in 4 days including all of the optional bonuses and including a unique design I created.',
        },
      },
      about: {
        header: 'Who am I',
        p1: `Hey! my name is Diego Monzon Contreras and I am a 23 years old
          full-stack and front-end developer. From a young age, I have always
          been fascinated with problem solving and spent much of my free time
          searching for puzzles to try and solve. When I was 13, I stumbled upon
          a blog about C# and fell in love with the art of programming and using
          code to solve problems. Since then, I have dedicated hundreds of hours
          to learning programming, including courses in Java, C#, JavaScript,
          and various frameworks and tools. I have also enjoyed tackling
          programming challenges on websites like CodeWars, using data
          structures and algorithms to find solutions.`,
        p2: `At the age of 18, I joined the army as a non-commissioned officer (NCO) in HR. As a member of a team or organization, I always strive to improve my skills and contribute to the overall success of the group, and as such, I devoted myself fully to my role, often working more than 12 hours per day. My dedication and hard work paid off, and I was eventually promoted to Deputy officer and later became the HR Officer of my unit, managing the HR needs of over 500 soldiers. During this time, I utilized my programming knowledge to create scripts and programs that automated and streamlined some of the HR processes, effectively utilizing my problem-solving skills and technical expertise to improve efficiency and reduce manual workload. Additionally, I integrated management tools like Trello to enhance productivity and organization to achieve optimal results.`,
        p3: `After completing my service, I further advanced my skills by attending Coding Academy, a coding Bootcamp that taught me full-stack development using technologies like Vue, Vuex, React, Redux, SCSS, JavaScript, TypeScript, Node.js, MongoDB, and Express. I enjoyed the fast-paced nature of the course with short deadlines, as I always enjoy being challenged and strive to excel in everything I do.`,
      },
      contact: {
        header: 'How to reach me',
        status:
          'Thanks for stopping by, I’m currently looking for a job as a Full-Stack/Front-End Developer.',
        cta: {
          p1: 'If you are interested, give me a',
          act1: 'call',
          p2: 'or send me an',
          act2: 'email',
        },
        footerNote: 'Diego Monzon Contreras. All Rights Reserved.',
      },
    },
    he: {
      nav: {
        home: 'בית',
        skills: 'יכולות',
        projects: 'פרויקטים',
        about: 'אודות',
        contact: 'צור קשר',
      },
      hero: {
        introduction: 'היי, אני דיאגו מונסון קונטררס,',
        title: 'מתכנת Full-Stack',
        location: 'מתגורר בנתניה, ישראל.',
        cta: 'קורות חיים',
        resumeUrl: '/files/resume_he.pdf',
      },
      skills: {
        header: 'מה אני מביא לשולחן',
      },
      projects: {
        header: 'כמה מהדברים שבניתי',
        cta: 'פרטים נוספים',
        wewix: {
          peek: 'אפליקציית ווב לבניית אתרים בהשראת Wix',
          desc: `Wewix היא אפליקציית ווב שמאפשרת למשתמשים ליצור ולעצב אתר מקצועי עבורם בקלות וביעילות. האפליקציה מספקת תבניות הניתנות לעריכה ואלמנטים עיצוביים, בנוסף לפיצ'רים נוספים, על מנת לאפשר למשתמש לייצר אתר ייחודי וחוויתי. האפליקציה היא ידידותית למשתמש ומותאמת למשתמשים מכל רמות הידע, כך מאפשרת לכל אחד לייצר אתר מקצועי ללא ידע בתכנות.`,
        },
        twitter: {
          peek: 'עותק של אפליקציית הווב Twitter',
          desc: `העותק מכיל את הנראות המדויקת של האתר המקורי וממומש בו הפיצ'רים הבאים: אוטנטיקציה, העלאת פוסט, כתיבת תגובה, פרופילים אישיים, שמירת פוסטים, מעקב אחרי משתמשים, עדכון בזמן אמת, שיתוף פוסטים, העלאת מדיה, חיפוש, טרנדים אוטומטיים על בסיס האשטאגים.`,
        },
        saderti: {
          title: "סדר'תי",
          peek: 'האפליקציה למנהלי משמרות',
          desc: "סדר'תי היא אפליקציה עוצמתית שיצרתי בכדי לעזור למנהלי משמרת לנהל את העובדים שלהם ואת סידורי העבודה. לאפליקציה יש עיצוב ייחודי,פשוט ואינטואיטיבי שמסייע לנהל את יצירת הסידורים בצורה מהירה. יצרתי את האפליקציה (בגרסת הבטא) תוך שבוע בודד.",
        },
        defined: {
          peek: 'אפליקציית מילון עם עיצוב נקי',
          desc: 'האפליקציה מאפשרת חיפוש פירושים למילים ו/או חיפוש מילים נפרדות, במידה והמשתמש מחובר גם יוכל לשמור מילים אהובות בדף הפרופיל שלו לגישה מהירה וגם יוכל לצפות בהיסטוריית החיפושים שלו.',
        },
        minesweeper: {
          peek: 'גרסה מעודכנת למשחק הקלאסי Minesweeper',
          desc: `המשחק נבנה בתור האתגר הראשון בבוטקאמפ של קודינג אקדמי, דרישות המטלה היו תכנות המשחק עם אפשרויות להוסיף פיצ'רים נוספים כבונוס, המשחק נבנה תוך 4 ימים כולל כלל הבונוסים וכולל עיצוב אישי של אלמנטי המשחק.`,
        },
      },
      about: {
        header: 'מי אני',
        p1: `היי! אני דיאגו מונסון קונטררס ואני מתכנת Full-Stack בן 23. התשוקה הכי גדולה שלי בחיים היא פתרון בעיות והיא התחילה כבר כשהייתי ילד קטן, בכל רגע פנוי הייתי מחפש חידות באינטרנט כדי שיהיה לי חומר למחשבה למהלך היום והייתי מכור לסיפוק שפתרון החידה היה נותן לי. כשהייתי בן 13 נתקלתי במקרה בבלוג שדיבר על C# וברגע הזה התאהבתי באומנות התכנות, בשבילי זה היה רגע יוצא דופן בו גיליתי עולם שמלא בחידות שרק מחכות שאפתור אותן! מאז אותו רגע הקדשתי מאות שעות ללמידת תכנות ומדעי המחשב, לקחתי קורסים רבים ולמדתי על Java, Javascript, React, CSS ועוד שפות וטכנולוגיות נוספות. נהנתי בעיקר להתמודד עם בעיות אלגוריתמיקה ומבני נתונים באתרים כמו CodeWars.`,
        p2: `כשהגעתי לגיל 18 התגייסתי לצבא בתפקיד מש"ק משאבי אנוש. אחת התכונות החזקות והידועות עליי היא השאיפה הענקית שלי להצטיין ולהביא את הסביבה שלי להצטיינות, ומתוך המקום הזה לקחתי את התפקיד שלי בצבא קרוב ללב ונתתי לו להיות כל עולמי, לגמרי בהתנדבות הגעתי ראשון למשרד ויצאתי אחרון, עבדתי כל יום מעל 12 שעות. ההשקעה וההתמדה הובילה לכך שמהר מאוד קודמתי למלא תקן של סגן קצין משאבי האנוש, ובהמשך גם נכנסתי לקבע ומילאתי את התקן של קצין משאבי האנוש. בתפקידי ניהלתי את משרד משאבי האנוש של היחידה שמנתה כ500-800 חיילים בכל רגע נתון שלהם היה צריך לתת מענה מהיר ואיכותי דרך ציר המפקדים. במהלך תקופה זו היכולות החזקות של פתרון הבעיות שפיתחתי בגילי הצעיר הובאו לידי ביטוי באופן יומיומי, הייתי צריך לתת מענה מיידי, מהיר, איכותי שדורש מחשבה ואחריות רבה באופן שוטף במשך כל שנות העבודה שלי ביחידה, השתמשתי בכלי ניהול כמו Trello כדי לשמור על סדר וארגון ועל בקרת משימות ותהליכים שונים, והייתי כותב קוד שביצע עבורי או לכל הפחות הקל על הרבה מאוד מהעבודה הידנית שנדרשית כיום ממשרדי המשא"ן בצבא.`,
        p3: `מיד לאחר השחרור הצטרפתי לקורס קודינג אקדמי, בוטקאמפ שלימד אותי תכנות Full-Stack בעזרת הטכנולוגיות Vue, React, Angular, NodeJS, MongoDB, Express. מאוד נהנתי משיטת הלימוד המהירה והאינטנסיבית של הקורס כי זה אתגר אותי, ואם יש משהו שאני מכור אליו זה להיות מאותגר ולהצליח.`,
      },
      contact: {
        header: 'איך ליצור איתי קשר',
        status:
          'תודה רבה על הביקור באתר! אני כרגע מחפש משרת Full-Stack/Front-End באיזור מרכז הארץ.',
        cta: `אם התעניינתם ניתן לפנות אליי
          <a href="tel:+97254-673-6558">בטלפון</a> או לשלוח לי הודעה
          <a href="mailto:projkd1@gmail.com">במייל</a>.`,
        cta: {
          p1: 'למקרה שהתעניינת, ניתן לפנות אליי',
          act1: 'בטלפון',
          p2: 'או לשלוח לי',
          act2: 'מייל',
        },
        footerNote: 'דיאגו מונסון קונטררס. כל הזכויות שמורות.',
      },
    },
  },
})

const app = createApp(App)

app.use(VueScrollTo)
app.use(i18n)
app.mount('#app')
