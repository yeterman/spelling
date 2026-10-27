import { ShopItem, WordCategory, WordEntry } from '../types';

export const CATEGORY_INFO: Record<
  WordCategory,
  { label: string; subtitle: string; icon: string; badgeColor: string }
> = {
  homophones: {
    label: 'אוצר מילים וזוגות דומים (100)',
    subtitle: '100 מילים יומיומיות, טבע, בעלי חיים ומילים דומות בצליל',
    icon: '🎭',
    badgeColor: 'from-amber-500 to-orange-600',
  },
  gutturals: {
    label: 'א׳, ע׳, ה׳ ו-ח׳ (100)',
    subtitle: '100 מילים ופעלים לתרגול אותיות גרוניות (מעבדה, הרפתקה, עצמאות)',
    icon: '🧐',
    badgeColor: 'from-emerald-500 to-teal-600',
  },
  emphatics: {
    label: 'ט׳/ת׳, כ׳/ק׳, ס׳/ש׳ (100)',
    subtitle: '100 מילים מאתגרות, מילים לועזיות וחפצים (מתמטיקה, טלסקופ, אופניים)',
    icon: '⚡',
    badgeColor: 'from-fuchsia-500 to-purple-600',
  },
  custom: {
    label: 'המילים שלי (הורים)',
    subtitle: 'מילים מותאמות אישית למבחני כתיב שבועיים',
    icon: '⭐',
    badgeColor: 'from-pink-500 to-rose-600',
  },
};

export const DEFAULT_WORDS: WordEntry[] = [
  {
    "id": "h-1",
    "word": "קול",
    "vocalized": "קוֹל",
    "sentence": "שמעתי ___ חזק מהחדר השני.",
    "sentenceTts": "שמעתי קוֹל חזק מהחדר השני.",
    "hintEmoji": "🔊 צליל או דיבור",
    "spellingTip": "קול ששומעים נכתב ב-ק׳ ו-ו׳ (כמו רמקול).",
    "category": "homophones"
  },
  {
    "id": "h-2",
    "word": "כל",
    "vocalized": "כָּל־",
    "sentence": "___ התלמידים בכיתה יצאו להפסקה.",
    "sentenceTts": "כָּל־ התלמידים בכיתה יצאו להפסקה.",
    "hintEmoji": "👥 כולם, 100% מהקבוצה",
    "spellingTip": "כל נכתב באות כ׳ ובלי ו׳ כשנסמך למילה אחריו.",
    "category": "homophones"
  },
  {
    "id": "h-3",
    "word": "עט",
    "vocalized": "עֵט",
    "sentence": "כתבתי במחברת עם ___ כחול.",
    "sentenceTts": "כתבתי במחברת עם עֵט כחול.",
    "hintEmoji": "🖊️ כלי כתיבה עם דיו",
    "spellingTip": "עט לכתיבה מתחיל ב-ע׳ ומסתיים ב-ט׳.",
    "category": "homophones"
  },
  {
    "id": "h-4",
    "word": "עת",
    "vocalized": "עֵת",
    "sentence": "בכל ___ ובכל שעה אפשר ללמוד דבר חדש.",
    "sentenceTts": "בכל עֵת ובכל שעה אפשר ללמוד דבר חדש.",
    "hintEmoji": "⏳ זמן או תקופה",
    "spellingTip": "עת (= זמן) מתחיל ב-ע׳ ומסתיים ב-ת׳ (כמו עתיד).",
    "category": "homophones"
  },
  {
    "id": "h-5",
    "word": "קרא",
    "vocalized": "קָרָא",
    "sentence": "הוא ___ ספר הרפתקאות מרתק אתמול.",
    "sentenceTts": "הוא קָרָא ספר הרפתקאות מרתק אתמול.",
    "hintEmoji": "📖 לקרוא ספר או לקרוא למישהו",
    "spellingTip": "קרא בספר מסתיים ב-א׳ (שורש ק.ר.א).",
    "category": "homophones"
  },
  {
    "id": "h-6",
    "word": "קרה",
    "vocalized": "קָרָה",
    "sentence": "מה ___ בבית הספר היום?",
    "sentenceTts": "מה קָרָה בבית הספר היום?",
    "hintEmoji": "❓ התרחש, אירע",
    "spellingTip": "קרה (= התרחש, מקרה) מסתיים באות ה׳.",
    "category": "homophones"
  },
  {
    "id": "h-7",
    "word": "קרע",
    "vocalized": "קָרַע",
    "sentence": "הגור השובב ___ את הדף לשניים.",
    "sentenceTts": "הגור השובב קָרַע את הדף לשניים.",
    "hintEmoji": "📄 חתך או פיצל נייר",
    "spellingTip": "קרע נייר או בד מסתיים באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-8",
    "word": "שעה",
    "vocalized": "שָׁעָה",
    "sentence": "השיעור נמשך ___ שלמה.",
    "sentenceTts": "השיעור נמשך שָׁעָה שלמה.",
    "hintEmoji": "🕐 60 דקות בשעון",
    "spellingTip": "שעה (כמו שעון) נכתבת עם ע׳ באמצע ו-ה׳ בסוף.",
    "category": "homophones"
  },
  {
    "id": "h-9",
    "word": "שהה",
    "vocalized": "שָׁהָה",
    "sentence": "התייר ___ במלון שלושה ימים.",
    "sentenceTts": "התייר שָׁהָה במלון שלושה ימים.",
    "hintEmoji": "🏨 נשאר במקום מסוים",
    "spellingTip": "שהה (= נשאר במקום) נכתב עם פעמיים ה׳.",
    "category": "homophones"
  },
  {
    "id": "h-10",
    "word": "חם",
    "vocalized": "חַם",
    "sentence": "בקיץ הישראלי מזג האוויר ___ מאוד.",
    "sentenceTts": "בקיץ הישראלי מזג האוויר חַם מאוד.",
    "hintEmoji": "☀️ טמפרטורה גבוהה",
    "spellingTip": "חם (חום) מתחיל באות ח׳ ומסתיים ב-ם סופית.",
    "category": "homophones"
  },
  {
    "id": "h-11",
    "word": "אור",
    "vocalized": "אוֹר",
    "sentence": "הדלקנו את ה___ בחדר כשהחשיך.",
    "sentenceTts": "הדלקנו את האוֹר בחדר כשהחשיך.",
    "hintEmoji": "💡 הארה ממנורה או מהשמש",
    "spellingTip": "אור שמאיר נכתב באות א׳.",
    "category": "homophones"
  },
  {
    "id": "h-12",
    "word": "עור",
    "vocalized": "עוֹר",
    "sentence": "חשוב למרוח קרם הגנה כדי לשמור על ה___ בשמש.",
    "sentenceTts": "חשוב למרוח קרם הגנה כדי לשמור על העוֹר בשמש.",
    "hintEmoji": "🖐️ השכבה שעוטפת את הגוף",
    "spellingTip": "עור הגוף מתחיל באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-13",
    "word": "צבע",
    "vocalized": "צֶבַע",
    "sentence": "היא בחרה ב___ כחול כדי לצבוע את השמיים.",
    "sentenceTts": "היא בחרה בצֶבַע כחול כדי לצבוע את השמיים.",
    "hintEmoji": "🎨 גוון בציור",
    "spellingTip": "צבע (לצבוע) מסתיים באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-14",
    "word": "צבא",
    "vocalized": "צָבָא",
    "sentence": "אחי הגדול משרת ב___ ההגנה לישראל.",
    "sentenceTts": "אחי הגדול משרת בצָבָא ההגנה לישראל.",
    "hintEmoji": "🪖 ארגון של חיילים",
    "spellingTip": "צבא של חיילים מסתיים באות א׳.",
    "category": "homophones"
  },
  {
    "id": "h-15",
    "word": "ברח",
    "vocalized": "בָּרַח",
    "sentence": "החתול נבהל מהרעש ו___ אל החצר.",
    "sentenceTts": "החתול נבהל מהרעש ובָּרַח אל החצר.",
    "hintEmoji": "🏃 נמלט במהירות",
    "spellingTip": "ברח (בריחה) מסתיים באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-16",
    "word": "ברך",
    "vocalized": "בֶּרֶךְ",
    "sentence": "הוא קיבל מכה קלה ב___ בזמן המשחק.",
    "sentenceTts": "הוא קיבל מכה קלה בבֶּרֶךְ בזמן המשחק.",
    "hintEmoji": "🦵 המפרק שבאמצע הרגל",
    "spellingTip": "ברך ברגל מסתיימת ב-ך׳ סופית (ברכיים).",
    "category": "homophones"
  },
  {
    "id": "h-17",
    "word": "שער",
    "vocalized": "שַׁעַר",
    "sentence": "החלוץ בעט והבקיע ___ מרהיב!",
    "sentenceTts": "החלוץ בעט והבקיע שַׁעַר מרהיב!",
    "hintEmoji": "⚽ שער בכדורגל או שער כניסה",
    "spellingTip": "שער נכתב עם ע׳ באמצע.",
    "category": "homophones"
  },
  {
    "id": "h-18",
    "word": "שאר",
    "vocalized": "שְׁאָר",
    "sentence": "שני תלמידים נשארו בכיתה וכל ה___ יצאו לחצר.",
    "sentenceTts": "שני תלמידים נשארו בכיתה וכל השְׁאָר יצאו לחצר.",
    "hintEmoji": "➕ היתר, מי שנשאר",
    "spellingTip": "שאר (נשאר) נכתב עם א׳ באמצע.",
    "category": "homophones"
  },
  {
    "id": "h-19",
    "word": "מלך",
    "vocalized": "מֶלֶךְ",
    "sentence": "ה___ ישב על כיסא המלכות בארמון.",
    "sentenceTts": "המֶלֶךְ ישב על כיסא המלכות בארמון.",
    "hintEmoji": "👑 שליט בממלכה",
    "spellingTip": "מלך (מלכות) מסתיים ב-ך׳ סופית.",
    "category": "homophones"
  },
  {
    "id": "h-20",
    "word": "מלח",
    "vocalized": "מֶלַח",
    "sentence": "הוספנו קורט ___ לסלט הירקות.",
    "sentenceTts": "הוספנו קורט מֶלַח לסלט הירקות.",
    "hintEmoji": "🧂 תבלין לבן ומלוח",
    "spellingTip": "מלח (מלוח) מסתיים באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-21",
    "word": "סיר",
    "vocalized": "סִיר",
    "sentence": "אבא בישל מרק ירקות חם בתוך ___ גדול.",
    "sentenceTts": "אבא בישל מרק ירקות חם בתוך סִיר גדול.",
    "hintEmoji": "🍲 כלי בישול במטבח",
    "spellingTip": "סיר לבישול מתחיל באות ס׳.",
    "category": "homophones"
  },
  {
    "id": "h-22",
    "word": "שיר",
    "vocalized": "שִׁיר",
    "sentence": "שרנו יחד ___ שמח במסיבת יום ההולדת.",
    "sentenceTts": "שרנו יחד שִׁיר שמח במסיבת יום ההולדת.",
    "hintEmoji": "🎶 מנגינה ומילים ששרים",
    "spellingTip": "שיר ששרים מתחיל באות ש׳.",
    "category": "homophones"
  },
  {
    "id": "h-23",
    "word": "אח",
    "vocalized": "אָח",
    "sentence": "יש לי ___ קטן שלומד בכיתה ב׳.",
    "sentenceTts": "יש לי אָח קטן שלומד בכיתה ב׳.",
    "hintEmoji": "👦 בן של ההורים שלי",
    "spellingTip": "אח במשפחה נכתב עם ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-24",
    "word": "אך",
    "vocalized": "אַךְ",
    "sentence": "רצינו לצאת לטיול, ___ ירד גשם חזק.",
    "sentenceTts": "רצינו לצאת לטיול, אַךְ ירד גשם חזק.",
    "hintEmoji": "🔄 מילה נרדפת ל\"אבל\"",
    "spellingTip": "אך (= אבל) מסתיימת ב-ך׳ סופית.",
    "category": "homophones"
  },
  {
    "id": "h-25",
    "word": "פצע",
    "vocalized": "פֶּצַע",
    "sentence": "שמנו פלסטר קטן על ה___ באצבע.",
    "sentenceTts": "שמנו פלסטר קטן על הפֶּצַע באצבע.",
    "hintEmoji": "🩹 שריטה בעור",
    "spellingTip": "פצע (פציעה) מסתיים באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-26",
    "word": "כלה",
    "vocalized": "כַּלָּה",
    "sentence": "ה___ לבשה שמלה לבנה בחתונה.",
    "sentenceTts": "הכַּלָּה לבשה שמלה לבנה בחתונה.",
    "hintEmoji": "👰 מתחתנת בחתונה",
    "spellingTip": "כלה בחתונה מתחילה ב-כ׳ ומסתיימת ב-ה׳.",
    "category": "homophones"
  },
  {
    "id": "h-27",
    "word": "קלה",
    "vocalized": "קַלָּה",
    "sentence": "השאלה הראשונה במבחן הייתה ___ מאוד.",
    "sentenceTts": "השאלה הראשונה במבחן הייתה קַלָּה מאוד.",
    "hintEmoji": "🪶 לא כבדה או לא קשה",
    "spellingTip": "קלה (מהמילה קל) מתחילה באות ק׳.",
    "category": "homophones"
  },
  {
    "id": "h-28",
    "word": "חץ",
    "vocalized": "חֵץ",
    "sentence": "ציירנו ___ שמראה את הכיוון הנכון במסלול.",
    "sentenceTts": "ציירנו חֵץ שמראה את הכיוון הנכון במסלול.",
    "hintEmoji": "🏹 חץ וקשת או סימן כיוון",
    "spellingTip": "חץ מתחיל באות ח׳ ומסתיים ב-ץ סופית.",
    "category": "homophones"
  },
  {
    "id": "h-29",
    "word": "עץ",
    "vocalized": "עֵץ",
    "sentence": "בחצר שלנו צומח ___ תפוחים גבוה וירוק.",
    "sentenceTts": "בחצר שלנו צומח עֵץ תפוחים גבוה וירוק.",
    "hintEmoji": "🌳 צמח גדול עם גזע וענפים",
    "spellingTip": "עץ צומח מתחיל באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-30",
    "word": "רך",
    "vocalized": "רַךְ",
    "sentence": "הפרווה של הגור נעימה ו___ כמו צמר גפן.",
    "sentenceTts": "הפרווה של הגור נעימה ורַךְ כמו צמר גפן.",
    "hintEmoji": "☁️ נעים למגע, ההפך מקשה",
    "spellingTip": "רך (רכות) מסתיים ב-ך׳ סופית.",
    "category": "homophones"
  },
  {
    "id": "h-31",
    "word": "רק",
    "vocalized": "רַק",
    "sentence": "נשארו ___ חמש דקות עד לסיום ההפסקה.",
    "sentenceTts": "נשארו רַק חמש דקות עד לסיום ההפסקה.",
    "hintEmoji": "☝️ בלבד, לא יותר מזה",
    "spellingTip": "רק (= בלבד) נכתב באות ק׳.",
    "category": "homophones"
  },
  {
    "id": "h-32",
    "word": "שבע",
    "vocalized": "שֶׁבַע",
    "sentence": "בשבוע אחד יש ___ ימים בדיוק.",
    "sentenceTts": "בשבוע אחד יש שֶׁבַע ימים בדיוק.",
    "hintEmoji": "7️⃣ המספר 7",
    "spellingTip": "שבע (כמו שבוע) מסתיים באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-33",
    "word": "עם",
    "vocalized": "עִם",
    "sentence": "הלכתי לשחק בגינה ___ החברות הכי טובות שלי.",
    "sentenceTts": "הלכתי לשחק בגינה עִם החברות הכי טובות שלי.",
    "hintEmoji": "🤝 ביחד עם מישהו",
    "spellingTip": "עם (= ביחד) מתחיל באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-34",
    "word": "אם",
    "vocalized": "אִם",
    "sentence": "___ נצא מוקדם בבוקר, נספיק להגיע בזמן.",
    "sentenceTts": "אִם נצא מוקדם בבוקר, נספיק להגיע בזמן.",
    "hintEmoji": "❔ מילת תנאי",
    "spellingTip": "אם (תנאי) מתחיל באות א׳.",
    "category": "homophones"
  },
  {
    "id": "h-35",
    "word": "על",
    "vocalized": "עַל",
    "sentence": "הספר מונח ___ השולחן בחדר.",
    "sentenceTts": "הספר מונח עַל השולחן בחדר.",
    "hintEmoji": "⬆️ מעל משהו",
    "spellingTip": "על (מעל השולחן) נכתב באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-36",
    "word": "אל",
    "vocalized": "אַל",
    "sentence": "___ תשכחי לקחת בקבוק מים וכובע לטיול.",
    "sentenceTts": "אַל תשכחי לקחת בקבוק מים וכובע לטיול.",
    "hintEmoji": "🚫 מילת שלילה או לכיוון",
    "spellingTip": "אל מתחיל באות א׳.",
    "category": "homophones"
  },
  {
    "id": "h-37",
    "word": "לו",
    "vocalized": "לוֹ",
    "sentence": "נתתי ___ מתנה יפה לכבוד יום ההולדת.",
    "sentenceTts": "נתתי לוֹ מתנה יפה לכבוד יום ההולדת.",
    "hintEmoji": "🎁 עבורו, בשבילו",
    "spellingTip": "לו (= בשבילו) נכתב עם ו׳.",
    "category": "homophones"
  },
  {
    "id": "h-38",
    "word": "לא",
    "vocalized": "לֹא",
    "sentence": "אף פעם ___ מאוחר מדי ללמוד דבר חדש.",
    "sentenceTts": "אף פעם לֹא מאוחר מדי ללמוד דבר חדש.",
    "hintEmoji": "❌ ההפך מכן",
    "spellingTip": "לא (שלילה) נכתב עם א׳ בסוף.",
    "category": "homophones"
  },
  {
    "id": "h-39",
    "word": "עיר",
    "vocalized": "עִיר",
    "sentence": "ירושלים ותל אביב הן כל אחת ___ גדולה.",
    "sentenceTts": "ירושלים ותל אביב הן כל אחת עִיר גדולה.",
    "hintEmoji": "🏙️ יישוב גדול עם רחובות",
    "spellingTip": "עיר (עירייה) מתחילה באות ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-40",
    "word": "קמח",
    "vocalized": "קֶמַח",
    "sentence": "ניפינו ___ לבן כדי לאפות עוגה לשבת.",
    "sentenceTts": "ניפינו קֶמַח לבן כדי לאפות עוגה לשבת.",
    "hintEmoji": "🌾 אבקה מחיטה לאפייה",
    "spellingTip": "קמח מתחיל ב-ק׳ ומסתיים ב-ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-41",
    "word": "גשר",
    "vocalized": "גֶּשֶׁר",
    "sentence": "חצינו את הנהר מעל ה___ החדש.",
    "sentenceTts": "חצינו את הנהר מעל הגֶּשֶׁר החדש.",
    "hintEmoji": "🌉 מעבר מעל נהר או כביש",
    "spellingTip": "גשר נכתב ג-ש-ר.",
    "category": "homophones"
  },
  {
    "id": "h-42",
    "word": "גשם",
    "vocalized": "גֶּשֶׁם",
    "sentence": "בחורף יורד ___ שמשקה את השדות.",
    "sentenceTts": "בחורף יורד גֶּשֶׁם שמשקה את השדות.",
    "hintEmoji": "🌧️ טיפות מים מהעננים",
    "spellingTip": "גשם מסתיים ב-ם סופית.",
    "category": "homophones"
  },
  {
    "id": "h-43",
    "word": "שמש",
    "vocalized": "שֶׁמֶשׁ",
    "sentence": "ה___ זורחת בשמיים ומחממת את העולם.",
    "sentenceTts": "השֶׁמֶשׁ זורחת בשמיים ומחממת את העולם.",
    "hintEmoji": "☀️ הכוכב שמאיר לנו ביום",
    "spellingTip": "שמש נכתבת עם ש׳ בהתחלה ובסוף.",
    "category": "homophones"
  },
  {
    "id": "h-44",
    "word": "ירח",
    "vocalized": "יָרֵחַ",
    "sentence": "בלילה בהיר אפשר לראות את ה___ המלא.",
    "sentenceTts": "בלילה בהיר אפשר לראות את היָרֵחַ המלא.",
    "hintEmoji": "🌕 מאיר בשמי הלילה",
    "spellingTip": "ירח מסתיים באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-45",
    "word": "כוכב",
    "vocalized": "כּוֹכָב",
    "sentence": "ראינו ___ נופל בשמי הלילה במדבר.",
    "sentenceTts": "ראינו כּוֹכָב נופל בשמי הלילה במדבר.",
    "hintEmoji": "⭐ נקודת אור מנצנצת בחלל",
    "spellingTip": "כוכב מתחיל ב-כ׳ ומסתיים ב-ב׳.",
    "category": "homophones"
  },
  {
    "id": "h-46",
    "word": "ענן",
    "vocalized": "עָנָן",
    "sentence": "בשמיים שט ___ לבן שנראה כמו כבשה.",
    "sentenceTts": "בשמיים שט עָנָן לבן שנראה כמו כבשה.",
    "hintEmoji": "☁️ מרחף בשמיים ומוריד גשם",
    "spellingTip": "ענן מתחיל ב-ע׳ ומסתיים ב-ן סופית.",
    "category": "homophones"
  },
  {
    "id": "h-47",
    "word": "קשת",
    "vocalized": "קֶשֶׁת",
    "sentence": "אחרי הגשם הופיעה ___ צבעונית בענן.",
    "sentenceTts": "אחרי הגשם הופיעה קֶשֶׁת צבעונית בענן.",
    "hintEmoji": "🌈 פס צבעוני בשמיים אחרי גשם",
    "spellingTip": "קשת מתחילה ב-ק׳ ומסתיימת ב-ת׳.",
    "category": "homophones"
  },
  {
    "id": "h-48",
    "word": "רוח",
    "vocalized": "רוּחַ",
    "sentence": "בסתיו נושבת ___ קרירה ונעימה.",
    "sentenceTts": "בסתיו נושבת רוּחַ קרירה ונעימה.",
    "hintEmoji": "💨 אוויר בתנועה",
    "spellingTip": "רוח מסתיימת באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-49",
    "word": "שלג",
    "vocalized": "שֶׁלֶג",
    "sentence": "בפסגת החרמון ירד ___ לבן ורך.",
    "sentenceTts": "בפסגת החרמון ירד שֶׁלֶג לבן ורך.",
    "hintEmoji": "❄️ פתיתים לבנים וקרים בחורף",
    "spellingTip": "שלג נכתב ש-ל-ג.",
    "category": "homophones"
  },
  {
    "id": "h-50",
    "word": "ברד",
    "vocalized": "בָּרָד",
    "sentence": "בסערה ירדו כדורי ___ קטנים של קרח.",
    "sentenceTts": "בסערה ירדו כדורי בָּרָד קטנים של קרח.",
    "hintEmoji": "🌨️ גרגירי קרח שיורדים מהענן",
    "spellingTip": "ברד נכתב ב-ר-ד.",
    "category": "homophones"
  },
  {
    "id": "h-51",
    "word": "פרח",
    "vocalized": "פֶּרַח",
    "sentence": "בגינה צמח ___ אדום וריחני.",
    "sentenceTts": "בגינה צמח פֶּרַח אדום וריחני.",
    "hintEmoji": "🌺 צמח צבעוני עם עלי כותרת",
    "spellingTip": "פרח (פריחה) מסתיים באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-52",
    "word": "דשא",
    "vocalized": "דֶּשֶׁא",
    "sentence": "שיחקנו תופסת על ה___ הירוק בפארק.",
    "sentenceTts": "שיחקנו תופסת על הדֶּשֶׁא הירוק בפארק.",
    "hintEmoji": "🌱 מרבד ירוק בגינה",
    "spellingTip": "דשא מסתיים באות א׳!",
    "category": "homophones"
  },
  {
    "id": "h-53",
    "word": "יער",
    "vocalized": "יַעַר",
    "sentence": "טיילנו בין העצים הגבוהים ב___.",
    "sentenceTts": "טיילנו בין העצים הגבוהים ביַעַר.",
    "hintEmoji": "🌲 שטח גדול מלא עצים",
    "spellingTip": "יער נכתב עם ע׳ באמצע (י-ע-ר).",
    "category": "homophones"
  },
  {
    "id": "h-54",
    "word": "נהר",
    "vocalized": "נָהָר",
    "sentence": "מים צלולים זורמים ב___ אל הים.",
    "sentenceTts": "מים צלולים זורמים בנָהָר אל הים.",
    "hintEmoji": "🏞️ זרם מים רחב וגדול",
    "spellingTip": "נהר נכתב עם ה׳ באמצע (נ-ה-ר).",
    "category": "homophones"
  },
  {
    "id": "h-55",
    "word": "נחל",
    "vocalized": "נַחַל",
    "sentence": "טבלנו רגליים במים הקרירים של ה___.",
    "sentenceTts": "טבלנו רגליים במים הקרירים של הנַחַל.",
    "hintEmoji": "💧 זרם מים בטבע",
    "spellingTip": "נחל נכתב עם ח׳ באמצע (נ-ח-ל).",
    "category": "homophones"
  },
  {
    "id": "h-56",
    "word": "מדבר",
    "vocalized": "מִדְבָּר",
    "sentence": "גמלים ויעלים חיים ב___ היבש.",
    "sentenceTts": "גמלים ויעלים חיים במִדְבָּר היבש.",
    "hintEmoji": "🐪 אזור חם ויבש עם מעט גשם",
    "spellingTip": "מדבר נכתב מ-ד-ב-ר.",
    "category": "homophones"
  },
  {
    "id": "h-57",
    "word": "חוף",
    "vocalized": "חוֹף",
    "sentence": "בנינו ארמון מחול על ___ הים.",
    "sentenceTts": "בנינו ארמון מחול על חוֹף הים.",
    "hintEmoji": "🏖️ שפת הים",
    "spellingTip": "חוף מתחיל ב-ח׳ ומסתיים ב-ף סופית.",
    "category": "homophones"
  },
  {
    "id": "h-58",
    "word": "סלע",
    "vocalized": "סֶלַע",
    "sentence": "היעל עמד בביטחון על קצה ה___.",
    "sentenceTts": "היעל עמד בביטחון על קצה הסֶלַע.",
    "hintEmoji": "🪨 אבן גדולה מאוד בטבע",
    "spellingTip": "סלע מתחיל ב-ס׳ ומסתיים ב-ע׳.",
    "category": "homophones"
  },
  {
    "id": "h-59",
    "word": "חול",
    "vocalized": "חוֹל",
    "sentence": "הלכנו יחפים על ה___ הרך בשפת הים.",
    "sentenceTts": "הלכנו יחפים על החוֹל הרך בשפת הים.",
    "hintEmoji": "⏳ גרגירים זהובים בחוף הים",
    "spellingTip": "חול מתחיל באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-60",
    "word": "בוץ",
    "vocalized": "בּוֹץ",
    "sentence": "אחרי הגשם נוצרו שלוליות ו___ בשביל.",
    "sentenceTts": "אחרי הגשם נוצרו שלוליות ובּוֹץ בשביל.",
    "hintEmoji": "🥾 אדמה רטובה ממים",
    "spellingTip": "בוץ מסתיים ב-ץ סופית.",
    "category": "homophones"
  },
  {
    "id": "h-61",
    "word": "כלב",
    "vocalized": "כֶּלֶב",
    "sentence": "ה___ הנאמן כשכש בזנבו בשמחה.",
    "sentenceTts": "הכֶּלֶב הנאמן כשכש בזנבו בשמחה.",
    "hintEmoji": "🐶 חיית מחמד נובחת וחברותית",
    "spellingTip": "כלב מתחיל באות כ׳.",
    "category": "homophones"
  },
  {
    "id": "h-62",
    "word": "חתול",
    "vocalized": "חָתוּל",
    "sentence": "ה___ גרגר בהנאה על הספה החמה.",
    "sentenceTts": "החָתוּל גרגר בהנאה על הספה החמה.",
    "hintEmoji": "🐱 חיית מחמד שמייללת",
    "spellingTip": "חתול מתחיל ב-ח׳ ונכתב עם ת׳.",
    "category": "homophones"
  },
  {
    "id": "h-63",
    "word": "סוס",
    "vocalized": "סוּס",
    "sentence": "ה___ דהר במהירות בשדה הפתוח.",
    "sentenceTts": "הסוּס דהר במהירות בשדה הפתוח.",
    "hintEmoji": "🐴 חיה אצילית שרוכבים עליה",
    "spellingTip": "סוס נכתב עם שני ס׳ (ס-ו-ס).",
    "category": "homophones"
  },
  {
    "id": "h-64",
    "word": "חמור",
    "vocalized": "חֲמוֹר",
    "sentence": "ה___ האפור נשא את הסלים בשביל.",
    "sentenceTts": "החֲמוֹר האפור נשא את הסלים בשביל.",
    "hintEmoji": "🫏 חיה עם אוזניים ארוכות שנוערת",
    "spellingTip": "חמור מתחיל באות ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-65",
    "word": "גמל",
    "vocalized": "גָּמָל",
    "sentence": "ה___ צעד בשיירה ארוכה בחולות המדבר.",
    "sentenceTts": "הגָּמָל צעד בשיירה ארוכה בחולות המדבר.",
    "hintEmoji": "🐫 חיית מדבר עם דבשת",
    "spellingTip": "גמל נכתב ג-מ-ל.",
    "category": "homophones"
  },
  {
    "id": "h-66",
    "word": "פיל",
    "vocalized": "פִּיל",
    "sentence": "ל___ יש חדק ארוך ואוזניים גדולות.",
    "sentenceTts": "לפִּיל יש חדק ארוך ואוזניים גדולות.",
    "hintEmoji": "🐘 חיה ענקית עם חדק",
    "spellingTip": "פיל נכתב עם י׳ באמצע (פ-י-ל).",
    "category": "homophones"
  },
  {
    "id": "h-67",
    "word": "אריה",
    "vocalized": "אַרְיֵה",
    "sentence": "ה___ נקרא מלך החיות ויש לו רעמה.",
    "sentenceTts": "האַרְיֵה נקרא מלך החיות ויש לו רעמה.",
    "hintEmoji": "🦁 טורף גדול עם רעמה",
    "spellingTip": "אריה מתחיל ב-א׳ ומסתיים ב-י-ה.",
    "category": "homophones"
  },
  {
    "id": "h-68",
    "word": "נמר",
    "vocalized": "נָמֵר",
    "sentence": "על הפרווה של ה___ יש חברבורות שחורות.",
    "sentenceTts": "על הפרווה של הנָמֵר יש חברבורות שחורות.",
    "hintEmoji": "🐆 טורף מהיר ממשפחת החתולים",
    "spellingTip": "נמר נכתב נ-מ-ר.",
    "category": "homophones"
  },
  {
    "id": "h-69",
    "word": "דוב",
    "vocalized": "דֹּב",
    "sentence": "ה___ החום אוהב לאכול דבש ודגים.",
    "sentenceTts": "הדֹּב החום אוהב לאכול דבש ודגים.",
    "hintEmoji": "🐻 חיה גדולה ופרוותית",
    "spellingTip": "דוב בכתיב מלא נכתב עם ו׳ (ד-ו-ב).",
    "category": "homophones"
  },
  {
    "id": "h-70",
    "word": "זאב",
    "vocalized": "זְאֵב",
    "sentence": "ה___ חי בלהקה בטבע ומיילל בלילה.",
    "sentenceTts": "הזְאֵב חי בלהקה בטבע ומיילל בלילה.",
    "hintEmoji": "🐺 חיית בר שדומה לכלב גדול",
    "spellingTip": "זאב נכתב עם א׳ באמצע (ז-א-ב).",
    "category": "homophones"
  },
  {
    "id": "h-71",
    "word": "שועל",
    "vocalized": "שׁוּעָל",
    "sentence": "ל___ יש פרווה ג׳ינג׳ית וזנב מפואר.",
    "sentenceTts": "לשׁוּעָל יש פרווה ג׳ינג׳ית וזנב מפואר.",
    "hintEmoji": "🦊 חיה פקחית עם זנב עבה",
    "spellingTip": "שועל נכתב עם ע׳ (ש-ו-ע-ל).",
    "category": "homophones"
  },
  {
    "id": "h-72",
    "word": "ארנב",
    "vocalized": "אַרְנָב",
    "sentence": "ה___ קפץ בדשא וכרסם גזר טרי.",
    "sentenceTts": "האַרְנָב קפץ בדשא וכרסם גזר טרי.",
    "hintEmoji": "🐰 חיה פרוותית עם אוזניים ארוכות",
    "spellingTip": "ארנב מתחיל ב-א׳ ומסתיים ב-ב׳.",
    "category": "homophones"
  },
  {
    "id": "h-73",
    "word": "צבי",
    "vocalized": "צְבִי",
    "sentence": "ה___ הישראלי רץ במהירות בטבע.",
    "sentenceTts": "הצְבִי הישראלי רץ במהירות בטבע.",
    "hintEmoji": "🦌 חיה מהירה ועדינה עם קרניים",
    "spellingTip": "צבי נכתב צ-ב-י.",
    "category": "homophones"
  },
  {
    "id": "h-74",
    "word": "קוף",
    "vocalized": "קוֹף",
    "sentence": "ה___ טיפס בזריזות מענף לענף על העץ.",
    "sentenceTts": "הקוֹף טיפס בזריזות מענף לענף על העץ.",
    "hintEmoji": "🐒 חיה שובבה שמטפסת על עצים",
    "spellingTip": "קוף מתחיל ב-ק׳ ומסתיים ב-ף סופית.",
    "category": "homophones"
  },
  {
    "id": "h-75",
    "word": "ציפור",
    "vocalized": "צִפּוֹר",
    "sentence": "שמענו ___ מצייצת על ענף העץ בבוקר.",
    "sentenceTts": "שמענו צִפּוֹר מצייצת על ענף העץ בבוקר.",
    "hintEmoji": "🐦 בעל כנף שעף בשמיים",
    "spellingTip": "ציפור בכתיב מלא נכתבת עם י׳ (צ-י-פ-ו-ר).",
    "category": "homophones"
  },
  {
    "id": "h-76",
    "word": "נשר",
    "vocalized": "נֶשֶׁר",
    "sentence": "ה___ פורש כנפיים ענקיות ודואה בשמיים.",
    "sentenceTts": "הנֶשֶׁר פורש כנפיים ענקיות ודואה בשמיים.",
    "hintEmoji": "🦅 עוף דורס גדול במצוקים",
    "spellingTip": "נשר נכתב נ-ש-ר.",
    "category": "homophones"
  },
  {
    "id": "h-77",
    "word": "ינשוף",
    "vocalized": "יַנְשׁוּף",
    "sentence": "ה___ ער בלילה ורואה היטב בחושך.",
    "sentenceTts": "היַנְשׁוּף ער בלילה ורואה היטב בחושך.",
    "hintEmoji": "🦉 עוף לילה עם עיניים גדולות",
    "spellingTip": "ינשוף מסתיים ב-ף סופית (י-נ-ש-ו-ף).",
    "category": "homophones"
  },
  {
    "id": "h-78",
    "word": "פרפר",
    "vocalized": "פַּרְפַּר",
    "sentence": "___ צבעוני התעופף מפרח לפרח בגינה.",
    "sentenceTts": "פַּרְפַּר צבעוני התעופף מפרח לפרח בגינה.",
    "hintEmoji": "🦋 חרק עם כנפיים צבעוניות ויפות",
    "spellingTip": "פרפר נכתב פעמיים פ-ר (פ-ר-פ-ר).",
    "category": "homophones"
  },
  {
    "id": "h-79",
    "word": "דבורה",
    "vocalized": "דְּבוֹרָה",
    "sentence": "ה___ אוספת צוף מהפרחים ומכינה דבש.",
    "sentenceTts": "הדְּבוֹרָה אוספת צוף מהפרחים ומכינה דבש.",
    "hintEmoji": "🐝 חרק מעופף שמייצר דבש בכוורת",
    "spellingTip": "דבורה מסתיימת באות ה׳.",
    "category": "homophones"
  },
  {
    "id": "h-80",
    "word": "נמלה",
    "vocalized": "נְמָלָה",
    "sentence": "ה___ החרוצה סוחבת גרגיר חיטה אל הקן.",
    "sentenceTts": "הנְמָלָה החרוצה סוחבת גרגיר חיטה אל הקן.",
    "hintEmoji": "🐜 חרק קטן וחרוץ שחי במושבה",
    "spellingTip": "נמלה מסתיימת באות ה׳ (נ-מ-ל-ה).",
    "category": "homophones"
  },
  {
    "id": "h-81",
    "word": "דג",
    "vocalized": "דָּג",
    "sentence": "ה___ שחה במים הצלולים בעזרת הסנפירים.",
    "sentenceTts": "הדָּג שחה במים הצלולים בעזרת הסנפירים.",
    "hintEmoji": "🐟 חי ושוחה במים",
    "spellingTip": "דג נכתב ד-ג.",
    "category": "homophones"
  },
  {
    "id": "h-82",
    "word": "לווייתן",
    "vocalized": "לִוְיָתָן",
    "sentence": "ה___ הכחול הוא בעל החיים הגדול ביותר בים.",
    "sentenceTts": "הלִוְיָתָן הכחול הוא בעל החיים הגדול ביותר בים.",
    "hintEmoji": "🐋 יונק ימי ענק",
    "spellingTip": "לווייתן בכתיב מלא נכתב עם שני ו׳ ושני י׳ (ל-ו-ו-י-י-ת-ן)!",
    "category": "homophones"
  },
  {
    "id": "h-83",
    "word": "דולפין",
    "vocalized": "דּוֹלְפִין",
    "sentence": "ה___ קפץ מעל גלי הים בשמחה.",
    "sentenceTts": "הדּוֹלְפִין קפץ מעל גלי הים בשמחה.",
    "hintEmoji": "🐬 יונק ימי חכם וידידותי",
    "spellingTip": "דולפין מסתיים ב-ן סופית.",
    "category": "homophones"
  },
  {
    "id": "h-84",
    "word": "צב",
    "vocalized": "צָב",
    "sentence": "ה___ נושא את השריון שלו על גבו לכל מקום.",
    "sentenceTts": "הצָב נושא את השריון שלו על גבו לכל מקום.",
    "hintEmoji": "🐢 זוחל איטי עם שריון",
    "spellingTip": "צב נכתב צ-ב.",
    "category": "homophones"
  },
  {
    "id": "h-85",
    "word": "נחש",
    "vocalized": "נָחָשׁ",
    "sentence": "ה___ זוחל בשקט בין האבנים בשדה.",
    "sentenceTts": "הנָחָשׁ זוחל בשקט בין האבנים בשדה.",
    "hintEmoji": "🐍 זוחל ארוך ללא רגליים",
    "spellingTip": "נחש נכתב עם ח׳ באמצע (נ-ח-ש).",
    "category": "homophones"
  },
  {
    "id": "h-86",
    "word": "צפרדע",
    "vocalized": "צְפַרְדֵּעַ",
    "sentence": "ה___ קפצה אל הביצה וקרקרה בקול.",
    "sentenceTts": "הצְפַרְדֵּעַ קפצה אל הביצה וקרקרה בקול.",
    "hintEmoji": "🐸 דו-חיים ירוק שקופץ במים",
    "spellingTip": "צפרדע מסתיימת באות ע׳!",
    "category": "homophones"
  },
  {
    "id": "h-87",
    "word": "לחם",
    "vocalized": "לֶחֶם",
    "sentence": "אפינו כיכר ___ טרייה וריחנית בתנור.",
    "sentenceTts": "אפינו כיכר לֶחֶם טרייה וריחנית בתנור.",
    "hintEmoji": "🍞 מאפה בסיסי מקמח ומים",
    "spellingTip": "לחם נכתב עם ח׳ באמצע ו-ם סופית.",
    "category": "homophones"
  },
  {
    "id": "h-88",
    "word": "חלב",
    "vocalized": "חָלָב",
    "sentence": "מזגנו כוס ___ קר לצד העוגיות.",
    "sentenceTts": "מזגנו כוס חָלָב קר לצד העוגיות.",
    "hintEmoji": "🥛 משקה לבן שנותנת הפרה",
    "spellingTip": "חלב מתחיל ב-ח׳ ומסתיים ב-ב׳.",
    "category": "homophones"
  },
  {
    "id": "h-89",
    "word": "גבינה",
    "vocalized": "גְּבִינָה",
    "sentence": "מרחנו ___ לבנה על פרוסת הלחם.",
    "sentenceTts": "מרחנו גְּבִינָה לבנה על פרוסת הלחם.",
    "hintEmoji": "🧀 מאכל שמכינים מחלב",
    "spellingTip": "גבינה נכתבת ג-ב-י-נ-ה.",
    "category": "homophones"
  },
  {
    "id": "h-90",
    "word": "ביצה",
    "vocalized": "בֵּיצָה",
    "sentence": "אבא הכין חביתה מ___ טרייה לארוחת הבוקר.",
    "sentenceTts": "אבא הכין חביתה מבֵּיצָה טרייה לארוחת הבוקר.",
    "hintEmoji": "🥚 מטילה התרנגולת",
    "spellingTip": "ביצה נכתבת עם י׳ ו-צ׳ (ב-י-צ-ה).",
    "category": "homophones"
  },
  {
    "id": "h-91",
    "word": "תפוח",
    "vocalized": "תַּפּוּחַ",
    "sentence": "אכלתי ___ אדום ומתוק בהפסקת עשר.",
    "sentenceTts": "אכלתי תַּפּוּחַ אדום ומתוק בהפסקת עשר.",
    "hintEmoji": "🍎 פרי עגול ומתוק שצומח על עץ",
    "spellingTip": "תפוח מתחיל ב-ת׳ ומסתיים ב-ח׳.",
    "category": "homophones"
  },
  {
    "id": "h-92",
    "word": "תפוז",
    "vocalized": "תַּפּוּז",
    "sentence": "סחטנו מיץ טבעי מ___ כתום ועסיסי.",
    "sentenceTts": "סחטנו מיץ טבעי מתַּפּוּז כתום ועסיסי.",
    "hintEmoji": "🍊 פרי הדר כתום (תפוח זהב)",
    "spellingTip": "תפוז מתחיל ב-ת׳ ומסתיים ב-ז׳.",
    "category": "homophones"
  },
  {
    "id": "h-93",
    "word": "בננה",
    "vocalized": "בָּנָנָה",
    "sentence": "הקוף קילף ___ צהובה ומתוקה.",
    "sentenceTts": "הקוף קילף בָּנָנָה צהובה ומתוקה.",
    "hintEmoji": "🍌 פרי צהוב וארוך",
    "spellingTip": "בננה נכתבת עם שני נ׳ ו-ה׳ בסוף (ב-נ-נ-ה).",
    "category": "homophones"
  },
  {
    "id": "h-94",
    "word": "ענבים",
    "vocalized": "עֲנָבִים",
    "sentence": "שטפנו אשכול ___ ירוקים ומתוקים.",
    "sentenceTts": "שטפנו אשכול עֲנָבִים ירוקים ומתוקים.",
    "hintEmoji": "🍇 פירות קטנים שגדלים באשכול",
    "spellingTip": "ענבים מתחילים באות ע׳!",
    "category": "homophones"
  },
  {
    "id": "h-95",
    "word": "אבטיח",
    "vocalized": "אֲבַטִּיחַ",
    "sentence": "בקיץ חתכנו פלח ___ אדום וקר.",
    "sentenceTts": "בקיץ חתכנו פלח אֲבַטִּיחַ אדום וקר.",
    "hintEmoji": "🍉 פרי קיץ גדול, ירוק מבחוץ ואדום מבפנים",
    "spellingTip": "אבטיח מתחיל ב-א׳, עם ט׳ באמצע ו-ח׳ בסוף!",
    "category": "homophones"
  },
  {
    "id": "h-96",
    "word": "מלפפון",
    "vocalized": "מְלַפְפוֹן",
    "sentence": "חתכנו ___ ירוק ופריך לסלט.",
    "sentenceTts": "חתכנו מְלַפְפוֹן ירוק ופריך לסלט.",
    "hintEmoji": "🥒 ירק ירוק לסלט",
    "spellingTip": "מלפפון נכתב עם שני פ׳ רצופים (מ-ל-פ-פ-ו-ן)!",
    "category": "homophones"
  },
  {
    "id": "h-97",
    "word": "עגבנייה",
    "vocalized": "עַגְבָנִיָּה",
    "sentence": "הוספנו ___ אדומה לסלט הירקות.",
    "sentenceTts": "הוספנו עַגְבָנִיָּה אדומה לסלט הירקות.",
    "hintEmoji": "🍅 ירק/פרי אדום ועגול לסלט",
    "spellingTip": "עגבנייה בכתיב מלא: מתחילה ב-ע׳ ונכתבת עם שני י׳ לפני ה-ה׳!",
    "category": "homophones"
  },
  {
    "id": "h-98",
    "word": "גזר",
    "vocalized": "גֶּזֶר",
    "sentence": "הארנב אוהב לכרסם ___ כתום ופריך.",
    "sentenceTts": "הארנב אוהב לכרסם גֶּזֶר כתום ופריך.",
    "hintEmoji": "🥕 ירק שורש כתום",
    "spellingTip": "גזר נכתב ג-ז-ר.",
    "category": "homophones"
  },
  {
    "id": "h-99",
    "word": "בצל",
    "vocalized": "בָּצָל",
    "sentence": "טיגנו ___ במחבת להכנת התבשיל.",
    "sentenceTts": "טיגנו בָּצָל במחבת להכנת התבשיל.",
    "hintEmoji": "🧅 ירק עם קליפות שגורם לדמעות כשחותכים אותו",
    "spellingTip": "בצל נכתב ב-צ-ל.",
    "category": "homophones"
  },
  {
    "id": "h-100",
    "word": "שום",
    "vocalized": "שׁוּם",
    "sentence": "הוספנו שן ___ לתבשיל כדי לתת לו טעם וריח.",
    "sentenceTts": "הוספנו שן שׁוּם לתבשיל כדי לתת לו טעם וריח.",
    "hintEmoji": "🧄 תבלין וירק עם שיניים לבנות",
    "spellingTip": "שום נכתב ש-ו-ם.",
    "category": "homophones"
  },
  {
    "id": "g-1",
    "word": "מעבדה",
    "vocalized": "מַעְבָּדָה",
    "sentence": "ערכנו ניסוי מדעי מרתק ב___ בבית הספר.",
    "sentenceTts": "ערכנו ניסוי מדעי מרתק במַעְבָּדָה בבית הספר.",
    "hintEmoji": "🔬 חדר שבו עושים ניסויים מדעיים",
    "spellingTip": "מעבדה מהשורש ע.ב.ד — האות השנייה היא ע׳!",
    "category": "gutturals"
  },
  {
    "id": "g-2",
    "word": "החליט",
    "vocalized": "הֶחְלִיט",
    "sentence": "הוועד ___ לארגן מסיבת סוף שנה.",
    "sentenceTts": "הוועד הֶחְלִיט לארגן מסיבת סוף שנה.",
    "hintEmoji": "✅ קיבל החלטה",
    "spellingTip": "בניין הפעיל (ה׳ בהתחלה) + שורש ח.ל.ט.",
    "category": "gutturals"
  },
  {
    "id": "g-3",
    "word": "התעקש",
    "vocalized": "הִתְעַקֵּשׁ",
    "sentence": "הוא לא ויתר ו___ להצליח במשימה.",
    "sentenceTts": "הוא לא ויתר והִתְעַקֵּשׁ להצליח במשימה.",
    "hintEmoji": "💪 עמד על שלו, היה עקשן",
    "spellingTip": "שורש ע.ק.ש (עקשן) — עם ע׳ ואז ק׳.",
    "category": "gutturals"
  },
  {
    "id": "g-4",
    "word": "אכזבה",
    "vocalized": "אַכְזָבָה",
    "sentence": "היא הרגישה ___ קלה כשהמשחק נדחה.",
    "sentenceTts": "היא הרגישה אַכְזָבָה קלה כשהמשחק נדחה.",
    "hintEmoji": "😔 תחושה כשמשהו שציפינו לו לא קרה",
    "spellingTip": "אכזבה מתחילה ב-א׳ ואחריה כ׳.",
    "category": "gutturals"
  },
  {
    "id": "g-5",
    "word": "תערוכה",
    "vocalized": "תַּעֲרוּכָה",
    "sentence": "ביקרנו ב___ של ציורים במוזיאון.",
    "sentenceTts": "ביקרנו בתַּעֲרוּכָה של ציורים במוזיאון.",
    "hintEmoji": "🖼️ תצוגה של יצירות אומנות",
    "spellingTip": "תערוכה מהשורש ע.ר.כ — ת׳ בהתחלה וע׳ שנייה.",
    "category": "gutturals"
  },
  {
    "id": "g-6",
    "word": "מהפכה",
    "vocalized": "מַהְפֵּכָה",
    "sentence": "המצאת המחשב חוללה ___ בעולם.",
    "sentenceTts": "המצאת המחשב חוללה מַהְפֵּכָה בעולם.",
    "hintEmoji": "🔄 שינוי דרמטי וגדול",
    "spellingTip": "מהפכה מהשורש ה.פ.כ — מ׳ ואז ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-7",
    "word": "התאמץ",
    "vocalized": "הִתְאַמֵּץ",
    "sentence": "הספורטאי ___ מאוד באימון.",
    "sentenceTts": "הספורטאי הִתְאַמֵּץ מאוד באימון.",
    "hintEmoji": "🏋️ השקיע מאמץ וכוח",
    "spellingTip": "שורש א.מ.ץ (מאמץ) — עם א׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-8",
    "word": "הבהיר",
    "vocalized": "הִבְהִיר",
    "sentence": "המורה ___ את החוקים לפני תחילת המשחק.",
    "sentenceTts": "המורה הִבְהִיר את החוקים לפני תחילת המשחק.",
    "hintEmoji": "💡 הפך משהו לבהיר וברור",
    "spellingTip": "שורש ב.ה.ר (בהיר) — עם ה׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-9",
    "word": "מעלית",
    "vocalized": "מַעֲלִית",
    "sentence": "עלינו לקומה השמינית באמצעות ה___.",
    "sentenceTts": "עלינו לקומה השמינית באמצעות המַעֲלִית.",
    "hintEmoji": "🛗 מעלה ומורידה אנשים בבניין",
    "spellingTip": "מעלית מהמילה לעלות (שורש ע.ל.ה) — מ׳ ואז ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-10",
    "word": "הרפתקה",
    "vocalized": "הַרְפַּתְקָה",
    "sentence": "הטיול במדבר היה ___ מרגשת.",
    "sentenceTts": "הטיול במדבר היה הַרְפַּתְקָה מרגשת.",
    "hintEmoji": "🗺️ חוויה מרתקת ומלאת גילויים",
    "spellingTip": "הרפתקה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-11",
    "word": "הפתעה",
    "vocalized": "הַפְתָּעָה",
    "sentence": "ארגנו לחברה שלנו מסיבת ___ ליום ההולדת.",
    "sentenceTts": "ארגנו לחברה שלנו מסיבת הַפְתָּעָה ליום ההולדת.",
    "hintEmoji": "🎁 משהו משמח שלא ציפינו לו",
    "spellingTip": "הפתעה מתחילה ב-ה׳ ומסתיימת ב-ע-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-12",
    "word": "הצלחה",
    "vocalized": "הַצְלָחָה",
    "sentence": "איחלנו לה המון ___ במבחן.",
    "sentenceTts": "איחלנו לה המון הַצְלָחָה במבחן.",
    "hintEmoji": "🏆 השגת המטרה",
    "spellingTip": "הצלחה מתחילה ב-ה׳ ומסתיימת ב-ח-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-13",
    "word": "התרגשות",
    "vocalized": "הִתְרַגְּשׁוּת",
    "sentence": "הייתה ___ גדולה בכיתה לפני הטיול.",
    "sentenceTts": "הייתה הִתְרַגְּשׁוּת גדולה בכיתה לפני הטיול.",
    "hintEmoji": "💓 פרפרים בבטן ושמחה",
    "spellingTip": "התרגשות מתחילה ב-ה׳ (בניין התפעל).",
    "category": "gutturals"
  },
  {
    "id": "g-14",
    "word": "התנצל",
    "vocalized": "הִתְנַצֵּל",
    "sentence": "הוא ביקש סליחה ו___ על הטעות.",
    "sentenceTts": "הוא ביקש סליחה והִתְנַצֵּל על הטעות.",
    "hintEmoji": "🙏 ביקש סליחה",
    "spellingTip": "התנצל מתחיל ב-ה׳ (ה-ת-נ-צ-ל).",
    "category": "gutturals"
  },
  {
    "id": "g-15",
    "word": "העדיף",
    "vocalized": "הֶעֱדִיף",
    "sentence": "הוא ___ לקרוא ספר במקום לצפות במסך.",
    "sentenceTts": "הוא הֶעֱדִיף לקרוא ספר במקום לצפות במסך.",
    "hintEmoji": "⚖️ בחר בדבר אחד על פני אחר",
    "spellingTip": "העדיף מתחיל ב-ה׳ ואחריה ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-16",
    "word": "התעורר",
    "vocalized": "הִתְעוֹרֵר",
    "sentence": "הוא ___ מוקדם בבוקר לצלילי השעון.",
    "sentenceTts": "הוא הִתְעוֹרֵר מוקדם בבוקר לצלילי השעון.",
    "hintEmoji": "⏰ קם משינה",
    "spellingTip": "התעורר בא מהמילה \"ער\" — עם ע׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-17",
    "word": "התארגן",
    "vocalized": "הִתְאַרְגֵּן",
    "sentence": "הוא סידר את התיק ו___ לבית הספר.",
    "sentenceTts": "הוא סידר את התיק והִתְאַרְגֵּן לבית הספר.",
    "hintEmoji": "🎒 התכונן וסידר",
    "spellingTip": "התארגן בא מהמילה \"ארגון\" — עם א׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-18",
    "word": "הבטיח",
    "vocalized": "הִבְטִיחַ",
    "sentence": "הוא ___ לקיים את המילה שלו.",
    "sentenceTts": "הוא הִבְטִיחַ לקיים את המילה שלו.",
    "hintEmoji": "🤙 נתן הבטחה",
    "spellingTip": "הבטיח מתחיל ב-ה׳ ומסתיים ב-ח׳.",
    "category": "gutturals"
  },
  {
    "id": "g-19",
    "word": "הבטחה",
    "vocalized": "הַבְטָחָה",
    "sentence": "כשנותנים ___ לחבר, חשוב לעמוד בה.",
    "sentenceTts": "כשנותנים הַבְטָחָה לחבר, חשוב לעמוד בה.",
    "hintEmoji": "🤝 התחייבות לעשות משהו",
    "spellingTip": "הבטחה (להבטיח) מתחילה ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-20",
    "word": "אבטחה",
    "vocalized": "אַבְטָחָה",
    "sentence": "איש ה___ בדק את התיקים בכניסה.",
    "sentenceTts": "איש האַבְטָחָה בדק את התיקים בכניסה.",
    "hintEmoji": "🛡️ שמירה וביטחון",
    "spellingTip": "אבטחה (של מאבטח) מתחילה ב-א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-21",
    "word": "אזהרה",
    "vocalized": "אַזְהָרָה",
    "sentence": "שלט ה___ בחוף מתריע מפני גלים גבוהים.",
    "sentenceTts": "שלט האַזְהָרָה בחוף מתריע מפני גלים גבוהים.",
    "hintEmoji": "⚠️ התראה מפני סכנה",
    "spellingTip": "אזהרה מתחילה ב-א׳ ובאמצע ה׳ (להיזהר).",
    "category": "gutturals"
  },
  {
    "id": "g-22",
    "word": "מערכת",
    "vocalized": "מַעֲרֶכֶת",
    "sentence": "סידרתי את התיק לפי ___ השעות.",
    "sentenceTts": "סידרתי את התיק לפי מַעֲרֶכֶת השעות.",
    "hintEmoji": "📅 מערכת שעות או מערכת השמש",
    "spellingTip": "מערכת מהשורש ע.ר.כ — מ׳ ואז ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-23",
    "word": "עצמאות",
    "vocalized": "עַצְמָאוּת",
    "sentence": "ביום ה___ חוגגים את הקמת המדינה.",
    "sentenceTts": "ביום העַצְמָאוּת חוגגים את הקמת המדינה.",
    "hintEmoji": "🇮🇱 חופש לעמוד ברשות עצמך",
    "spellingTip": "עצמאות מתחילה ב-ע׳ ויש א׳ לפני -ות.",
    "category": "gutturals"
  },
  {
    "id": "g-24",
    "word": "עפיפון",
    "vocalized": "עֲפִיפוֹן",
    "sentence": "העפנו ___ צבעוני גבוה בשמיים.",
    "sentenceTts": "העפנו עֲפִיפוֹן צבעוני גבוה בשמיים.",
    "hintEmoji": "🪁 צעצוע שעף ברוח עם חוט",
    "spellingTip": "עפיפון בא מהמילה \"לעוף\" — מתחיל ב-ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-25",
    "word": "עיתון",
    "vocalized": "עִתּוֹן",
    "sentence": "קראנו כתבה מעניינת ב___ של שבת.",
    "sentenceTts": "קראנו כתבה מעניינת בעִתּוֹן של שבת.",
    "hintEmoji": "📰 דפים מודפסים עם חדשות",
    "spellingTip": "עיתון בא מהמילה \"עת\" — מתחיל ב-ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-26",
    "word": "ארמון",
    "vocalized": "אַרְמוֹן",
    "sentence": "המלך והמלכה גרו ב___ מפואר.",
    "sentenceTts": "המלך והמלכה גרו באַרְמוֹן מפואר.",
    "hintEmoji": "🏰 מבנה מפואר של מלכים",
    "spellingTip": "ארמון מתחיל באות א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-27",
    "word": "אמונה",
    "vocalized": "אֱמוּנָה",
    "sentence": "עם ___ בעצמך תוכלי להשיג כל מטרה.",
    "sentenceTts": "עם אֱמוּנָה בעצמך תוכלי להשיג כל מטרה.",
    "hintEmoji": "✨ ביטחון ותקווה",
    "spellingTip": "אמונה מתחילה באות א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-28",
    "word": "הערכה",
    "vocalized": "הַעֲרָכָה",
    "sentence": "המורה העניקה לה תעודת ___ על ההשקעה.",
    "sentenceTts": "המורה העניקה לה תעודת הַעֲרָכָה על ההשקעה.",
    "hintEmoji": "👏 כבוד והוקרה",
    "spellingTip": "הערכה באה מהמילה \"ערך\" — ה׳ ואז ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-29",
    "word": "התלהבות",
    "vocalized": "הִתְלַהֲבוּת",
    "sentence": "הילדים קפצו ב___ כששמעו על הטיול.",
    "sentenceTts": "הילדים קפצו בהִתְלַהֲבוּת כששמעו על הטיול.",
    "hintEmoji": "🤩 שמחה ואנרגיה מתפרצת",
    "spellingTip": "התלהבות מהמילה \"להבה\" — עם ה׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-30",
    "word": "ארוחה",
    "vocalized": "אֲרוּחָה",
    "sentence": "הכנו יחד ___ משפחתית טעימה.",
    "sentenceTts": "הכנו יחד אֲרוּחָה משפחתית טעימה.",
    "hintEmoji": "🍽️ סעודה",
    "spellingTip": "ארוחה מתחילה ב-א׳ ונכתבת עם ח׳.",
    "category": "gutturals"
  },
  {
    "id": "g-31",
    "word": "הצעה",
    "vocalized": "הַצָּעָה",
    "sentence": "היא העלתה ___ מצוינת למשחק בכיתה.",
    "sentenceTts": "היא העלתה הַצָּעָה מצוינת למשחק בכיתה.",
    "hintEmoji": "🙋 רעיון שמציעים לאחרים",
    "spellingTip": "הצעה מתחילה ב-ה׳ ומסתיימת ב-ע-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-32",
    "word": "אלופה",
    "vocalized": "אַלּוּפָה",
    "sentence": "היא זכתה במקום הראשון והפכה ל___.",
    "sentenceTts": "היא זכתה במקום הראשון והפכה לאַלּוּפָה.",
    "hintEmoji": "🥇 מנצחת במקום הראשון",
    "spellingTip": "אלופה מתחילה באות א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-33",
    "word": "הליכה",
    "vocalized": "הֲלִיכָה",
    "sentence": "יצאנו ל___ מהירה בפארק בערב.",
    "sentenceTts": "יצאנו להֲלִיכָה מהירה בפארק בערב.",
    "hintEmoji": "🚶 צעידה ברגל",
    "spellingTip": "הליכה (הלך) מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-34",
    "word": "השקיע",
    "vocalized": "הִשְׁקִיעַ",
    "sentence": "הוא ___ מחשבה רבה בהכנת הפרויקט.",
    "sentenceTts": "הוא הִשְׁקִיעַ מחשבה רבה בהכנת הפרויקט.",
    "hintEmoji": "🌱 נתן ממרצו ומזמנו",
    "spellingTip": "השקיע מתחיל ב-ה׳ ומסתיים ב-ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-35",
    "word": "הרגשה",
    "vocalized": "הַרְגָּשָׁה",
    "sentence": "עזרה לזולת נותנת ___ נפלאה בלב.",
    "sentenceTts": "עזרה לזולת נותנת הַרְגָּשָׁה נפלאה בלב.",
    "hintEmoji": "❤️ תחושה פנימית",
    "spellingTip": "הרגשה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-36",
    "word": "אסיפה",
    "vocalized": "אֲסִיפָה",
    "sentence": "המורה הזמינה את ההורים ל___ כיתתית.",
    "sentenceTts": "המורה הזמינה את ההורים לאֲסִיפָה כיתתית.",
    "hintEmoji": "👨‍👩‍👧 מפגש שבו נאספים יחד",
    "spellingTip": "אסיפה מהשורש א.ס.ף — מתחילה ב-א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-37",
    "word": "עבודה",
    "vocalized": "עֲבוֹדָה",
    "sentence": "הגשנו ___ משותפת במדעים.",
    "sentenceTts": "הגשנו עֲבוֹדָה משותפת במדעים.",
    "hintEmoji": "📝 משימה או פרויקט",
    "spellingTip": "עבודה מתחילה ב-ע׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-38",
    "word": "הזמנה",
    "vocalized": "הַזְמָנָה",
    "sentence": "עיצבנו ___ צבעונית למסיבת הכיתה.",
    "sentenceTts": "עיצבנו הַזְמָנָה צבעונית למסיבת הכיתה.",
    "hintEmoji": "💌 כרטיס שמזמין אורחים",
    "spellingTip": "הזמנה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-39",
    "word": "אחראי",
    "vocalized": "אַחְרַאי",
    "sentence": "כל תורן בכיתה ___ על שמירת הסדר.",
    "sentenceTts": "כל תורן בכיתה אַחְרַאי על שמירת הסדר.",
    "hintEmoji": "🫡 בעל אחריות",
    "spellingTip": "אחראי מתחיל ב-א-ח ומסתיים ב-א-י.",
    "category": "gutturals"
  },
  {
    "id": "g-40",
    "word": "הפסקה",
    "vocalized": "הַפְסָקָה",
    "sentence": "כשהצלצול נשמע יצאנו ל___ בחצר.",
    "sentenceTts": "כשהצלצול נשמע יצאנו להַפְסָקָה בחצר.",
    "hintEmoji": "🔔 זמן מנוחה בין השיעורים",
    "spellingTip": "הפסקה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-41",
    "word": "אהבה",
    "vocalized": "אַהֲבָה",
    "sentence": "משפחה חמה מלאה ב___ ובדאגה.",
    "sentenceTts": "משפחה חמה מלאה באַהֲבָה ובדאגה.",
    "hintEmoji": "❤️ רגש חם ועמוק בלב",
    "spellingTip": "אהבה נכתבת א-ה-ב-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-42",
    "word": "אמת",
    "vocalized": "אֱמֶת",
    "sentence": "תמיד חשוב לומר את ה___ ולא לשקר.",
    "sentenceTts": "תמיד חשוב לומר את האֱמֶת ולא לשקר.",
    "hintEmoji": "⚖️ דבר נכון ואמיתי",
    "spellingTip": "אמת מתחילה ב-א׳ ומסתיימת ב-ת׳.",
    "category": "gutturals"
  },
  {
    "id": "g-43",
    "word": "אומץ",
    "vocalized": "אֹמֶץ",
    "sentence": "הכבאי גילה ___ לב רב בעבודתו.",
    "sentenceTts": "הכבאי גילה אֹמֶץ לב רב בעבודתו.",
    "hintEmoji": "🦁 גבורה ואי-פחד",
    "spellingTip": "אומץ מתחיל ב-א׳ ומסתיים ב-ץ סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-44",
    "word": "אושר",
    "vocalized": "אֹשֶׁר",
    "sentence": "החיוך שלה הביא המון ___ ושמחה.",
    "sentenceTts": "החיוך שלה הביא המון אֹשֶׁר ושמחה.",
    "hintEmoji": "😊 שמחה גדולה בלב",
    "spellingTip": "אושר מתחיל באות א׳ (א-ו-ש-ר).",
    "category": "gutturals"
  },
  {
    "id": "g-45",
    "word": "עושר",
    "vocalized": "עֹשֶׁר",
    "sentence": "המלך באגדה חי ב___ רב עם זהב ויהלומים.",
    "sentenceTts": "המלך באגדה חי בעֹשֶׁר רב עם זהב ויהלומים.",
    "hintEmoji": "💎 כסף ורכוש רב (עשיר)",
    "spellingTip": "עושר (של עשיר) מתחיל באות ע׳!",
    "category": "gutturals"
  },
  {
    "id": "g-46",
    "word": "אוצר",
    "vocalized": "אוֹצָר",
    "sentence": "הפיראטים חיפשו תיבת ___ באי הבודד.",
    "sentenceTts": "הפיראטים חיפשו תיבת אוֹצָר באי הבודד.",
    "hintEmoji": "🪙 מטמון של זהב ואבנים טובות",
    "spellingTip": "אוצר מתחיל באות א׳.",
    "category": "gutturals"
  },
  {
    "id": "g-47",
    "word": "אורח",
    "vocalized": "אוֹרֵחַ",
    "sentence": "קיבלנו כל ___ שהגיע לביתנו בחיוך.",
    "sentenceTts": "קיבלנו כל אוֹרֵחַ שהגיע לביתנו בחיוך.",
    "hintEmoji": "🏠 מבקר שבא להתארח",
    "spellingTip": "אורח מתחיל ב-א׳ ומסתיים ב-ח׳.",
    "category": "gutturals"
  },
  {
    "id": "g-48",
    "word": "אזרח",
    "vocalized": "אֶזְרָח",
    "sentence": "כל ___ במדינה שומר על חוקיה.",
    "sentenceTts": "כל אֶזְרָח במדינה שומר על חוקיה.",
    "hintEmoji": "🪪 תושב של מדינה",
    "spellingTip": "אזרח מתחיל ב-א׳ ומסתיים ב-ח׳.",
    "category": "gutturals"
  },
  {
    "id": "g-49",
    "word": "אוויר",
    "vocalized": "אֲוִיר",
    "sentence": "נשמנו ___ צח ונקי בראש ההר.",
    "sentenceTts": "נשמנו אֲוִיר צח ונקי בראש ההר.",
    "hintEmoji": "🌬️ החמצן שאנו נושמים",
    "spellingTip": "אוויר בכתיב מלא נכתב עם שני ו׳ (א-ו-ו-י-ר)!",
    "category": "gutturals"
  },
  {
    "id": "g-50",
    "word": "אדמה",
    "vocalized": "אֲדָמָה",
    "sentence": "שתלנו שתיל רך בתוך ה___ בגינה.",
    "sentenceTts": "שתלנו שתיל רך בתוך האֲדָמָה בגינה.",
    "hintEmoji": "🌱 הקרקע שעליה צומחים הצמחים",
    "spellingTip": "אדמה מתחילה ב-א׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-51",
    "word": "אבן",
    "vocalized": "אֶבֶן",
    "sentence": "דילגנו מעל ___ גדולה בשביל הטיול.",
    "sentenceTts": "דילגנו מעל אֶבֶן גדולה בשביל הטיול.",
    "hintEmoji": "🪨 חתיכת סלע",
    "spellingTip": "אבן מתחילה ב-א׳ ומסתיימת ב-ן סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-52",
    "word": "אגם",
    "vocalized": "אֲגַם",
    "sentence": "ברבורים לבנים שטו במי ה___ השקט.",
    "sentenceTts": "ברבורים לבנים שטו במי האֲגַם השקט.",
    "hintEmoji": "🦢 מקווה מים גדול מוקף יבשה",
    "spellingTip": "אגם מתחיל ב-א׳ ומסתיים ב-ם סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-53",
    "word": "אימון",
    "vocalized": "אִמּוּן",
    "sentence": "הלכתי ל___ כדורסל באולם הספורט.",
    "sentenceTts": "הלכתי לאִמּוּן כדורסל באולם הספורט.",
    "hintEmoji": "🏀 תרגול ספורטיבי (להתאמן)",
    "spellingTip": "אימון בכתיב מלא נכתב א-י-מ-ו-ן.",
    "category": "gutturals"
  },
  {
    "id": "g-54",
    "word": "אירוע",
    "vocalized": "אֵירוּעַ",
    "sentence": "חגגנו ___ משפחתי מרגש באולם.",
    "sentenceTts": "חגגנו אֵירוּעַ משפחתי מרגש באולם.",
    "hintEmoji": "🎊 מסיבה או התרחשות מיוחדת",
    "spellingTip": "אירוע מתחיל ב-א-י ומסתיים באות ע׳!",
    "category": "gutturals"
  },
  {
    "id": "g-55",
    "word": "אפשרות",
    "vocalized": "אֶפְשָׁרוּת",
    "sentence": "לכל שאלה במבחן יש יותר מ___ אחת.",
    "sentenceTts": "לכל שאלה במבחן יש יותר מאֶפְשָׁרוּת אחת.",
    "hintEmoji": "🔀 אופציה או בחירה (אפשר)",
    "spellingTip": "אפשרות מתחילה ב-א׳ ומסתיימת ב-ת׳.",
    "category": "gutturals"
  },
  {
    "id": "g-56",
    "word": "ארון",
    "vocalized": "אָרוֹן",
    "sentence": "סידרתי את הבגדים המקופלים בתוך ה___.",
    "sentenceTts": "סידרתי את הבגדים המקופלים בתוך האָרוֹן.",
    "hintEmoji": "🚪 רהיט לאחסון בגדים או ספרים",
    "spellingTip": "ארון מתחיל ב-א׳ ומסתיים ב-ן סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-57",
    "word": "ארובה",
    "vocalized": "אֲרוּבָּה",
    "sentence": "עשן לבן עלה מ___ הבית בחורף.",
    "sentenceTts": "עשן לבן עלה מאֲרוּבָּה הבית בחורף.",
    "hintEmoji": "🏠 צינור על הגג ליציאת עשן מהאח",
    "spellingTip": "ארובה מתחילה ב-א׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-58",
    "word": "אצבע",
    "vocalized": "אֶצְבַּע",
    "sentence": "בכל כף יד יש חמש ___ות.",
    "sentenceTts": "בכל כף יד יש חמש אֶצְבַּעות.",
    "hintEmoji": "☝️ חלק מכף היד",
    "spellingTip": "אצבע מתחילה ב-א׳ ומסתיימת באות ע׳!",
    "category": "gutturals"
  },
  {
    "id": "g-59",
    "word": "אוזן",
    "vocalized": "אֹזֶן",
    "sentence": "הקשבנו למוזיקה השקטה ב___ קשבת.",
    "sentenceTts": "הקשבנו למוזיקה השקטה באֹזֶן קשבת.",
    "hintEmoji": "👂 איבר השמיעה",
    "spellingTip": "אוזן בכתיב מלא נכתבת א-ו-ז-ן.",
    "category": "gutturals"
  },
  {
    "id": "g-60",
    "word": "אף",
    "vocalized": "אַף",
    "sentence": "בעזרת ה___ אנחנו מריחים פרחים ריחניים.",
    "sentenceTts": "בעזרת האַף אנחנו מריחים פרחים ריחניים.",
    "hintEmoji": "👃 איבר ההרחה בפנים",
    "spellingTip": "אף נכתב א-ף.",
    "category": "gutturals"
  },
  {
    "id": "g-61",
    "word": "עין",
    "vocalized": "עַיִן",
    "sentence": "קרצתי לה ב___ אחת בחיוך.",
    "sentenceTts": "קרצתי לה בעַיִן אחת בחיוך.",
    "hintEmoji": "👁️ איבר הראייה",
    "spellingTip": "עין מתחילה ב-ע׳ ומסתיימת ב-ן סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-62",
    "word": "עקב",
    "vocalized": "עָקֵב",
    "sentence": "החלק האחורי של כף הרגל נקרא ___.",
    "sentenceTts": "החלק האחורי של כף הרגל נקרא עָקֵב.",
    "hintEmoji": "🦶 אחורי כף הרגל (וגם בעקבות)",
    "spellingTip": "עקב מתחיל באות ע׳ וכתוב עם ק׳.",
    "category": "gutturals"
  },
  {
    "id": "g-63",
    "word": "עולם",
    "vocalized": "עוֹלָם",
    "sentence": "אנחנו חיים על כדור הארץ ב___ מופלא.",
    "sentenceTts": "אנחנו חיים על כדור הארץ בעוֹלָם מופלא.",
    "hintEmoji": "🌍 תבל, כדור הארץ כולו",
    "spellingTip": "עולם מתחיל באות ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-64",
    "word": "עתיד",
    "vocalized": "עָתִיד",
    "sentence": "ב___ נרצה לטייל במקומות חדשים בעולם.",
    "sentenceTts": "בעָתִיד נרצה לטייל במקומות חדשים בעולם.",
    "hintEmoji": "🚀 הזמן שיבוא מחר ובהמשך",
    "spellingTip": "עתיד מתחיל ב-ע׳ ונכתב עם ת׳.",
    "category": "gutturals"
  },
  {
    "id": "g-65",
    "word": "עבר",
    "vocalized": "עָבָר",
    "sentence": "בשיעור היסטוריה לומדים על מה שקרה ב___.",
    "sentenceTts": "בשיעור היסטוריה לומדים על מה שקרה בעָבָר.",
    "hintEmoji": "⏪ הזמן שכבר חלף",
    "spellingTip": "עבר מתחיל באות ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-66",
    "word": "עכשיו",
    "vocalized": "עַכְשָׁיו",
    "sentence": "אנחנו מתרגלות כתיב ממש ___!",
    "sentenceTts": "אנחנו מתרגלות כתיב ממש עַכְשָׁיו!",
    "hintEmoji": "⏱️ כעת, ברגע זה ממש",
    "spellingTip": "עכשיו מתחיל ב-ע-כ ומסתיים ב-י-ו!",
    "category": "gutturals"
  },
  {
    "id": "g-67",
    "word": "עונה",
    "vocalized": "עוֹנָה",
    "sentence": "האביב הוא ___ יפה שבה הכול פורח.",
    "sentenceTts": "האביב הוא עוֹנָה יפה שבה הכול פורח.",
    "hintEmoji": "🍂 תקופה בשנה (קיץ, חורף, סתיו, אביב)",
    "spellingTip": "עונה מתחילה ב-ע׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-68",
    "word": "ענף",
    "vocalized": "עָנָף",
    "sentence": "הציפור בנתה קן על ___ גבוה של העץ.",
    "sentenceTts": "הציפור בנתה קן על עָנָף גבוה של העץ.",
    "hintEmoji": "🌿 זרוע של עץ",
    "spellingTip": "ענף מתחיל ב-ע׳ ומסתיים ב-ף סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-69",
    "word": "עלה",
    "vocalized": "עָלֶה",
    "sentence": "___ ירוק נשר מהעץ ברוח הסתיו.",
    "sentenceTts": "עָלֶה ירוק נשר מהעץ ברוח הסתיו.",
    "hintEmoji": "🍃 צומח על ענפי העץ",
    "spellingTip": "עלה מתחיל ב-ע׳ ומסתיים ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-70",
    "word": "עציץ",
    "vocalized": "עָצִיץ",
    "sentence": "השקינו את הפרח ששתול ב___ על החלון.",
    "sentenceTts": "השקינו את הפרח ששתול בעָצִיץ על החלון.",
    "hintEmoji": "🪴 כלי שבו מגדלים צמח בבית",
    "spellingTip": "עציץ מתחיל ב-ע׳ ומסתיים ב-ץ סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-71",
    "word": "עוגה",
    "vocalized": "עוּגָה",
    "sentence": "אפינו ___ מתוקה עם ציפוי שוקולד.",
    "sentenceTts": "אפינו עוּגָה מתוקה עם ציפוי שוקולד.",
    "hintEmoji": "🎂 מאפה חגיגי ומתוק",
    "spellingTip": "עוגה מתחילה ב-ע׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-72",
    "word": "עוגייה",
    "vocalized": "עוּגִיָּה",
    "sentence": "אכלתי ___ פריכה לצד כוס התה.",
    "sentenceTts": "אכלתי עוּגִיָּה פריכה לצד כוס התה.",
    "hintEmoji": "🍪 מאפה קטן ומתוק",
    "spellingTip": "עוגייה בכתיב מלא נכתבת עם שני י׳ לפני ה-ה׳!",
    "category": "gutturals"
  },
  {
    "id": "g-73",
    "word": "עגלה",
    "vocalized": "עֲגָלָה",
    "sentence": "הובלנו את המצרכים בסופר בתוך ___.",
    "sentenceTts": "הובלנו את המצרכים בסופר בתוך עֲגָלָה.",
    "hintEmoji": "🛒 כלי עם גלגלים להובלה",
    "spellingTip": "עגלה (כמו עגול וגלגל) מתחילה באות ע׳.",
    "category": "gutturals"
  },
  {
    "id": "g-74",
    "word": "ערימה",
    "vocalized": "עֲרֵמָה",
    "sentence": "סידרנו את הספרים ב___ מסודרת על השולחן.",
    "sentenceTts": "סידרנו את הספרים בעֲרֵמָה מסודרת על השולחן.",
    "hintEmoji": "📚 גל או אוסף של דברים זה על זה",
    "spellingTip": "ערימה בכתיב מלא נכתבת ע-ר-י-מ-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-75",
    "word": "עזרה",
    "vocalized": "עֶזְרָה",
    "sentence": "תמיד שמחתי להגיש ___ לחברה שביקשה.",
    "sentenceTts": "תמיד שמחתי להגיש עֶזְרָה לחברה שביקשה.",
    "hintEmoji": "🤝 סיוע ותמיכה",
    "spellingTip": "עזרה (לעזור) מתחילה ב-ע׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-76",
    "word": "עצה",
    "vocalized": "עֵצָה",
    "sentence": "סבתא נתנה לי ___ חכמה ומועילה.",
    "sentenceTts": "סבתא נתנה לי עֵצָה חכמה ומועילה.",
    "hintEmoji": "💡 המלצה טובה (לייעץ)",
    "spellingTip": "עצה מתחילה ב-ע׳ ובלי י׳ בהתחלה (ע-צ-ה).",
    "category": "gutturals"
  },
  {
    "id": "g-77",
    "word": "עוצמה",
    "vocalized": "עָצְמָה",
    "sentence": "לגלי הים בחורף יש ___ חזקה מאוד.",
    "sentenceTts": "לגלי הים בחורף יש עָצְמָה חזקה מאוד.",
    "hintEmoji": "⚡ כוח רב וחוזק",
    "spellingTip": "עוצמה מתחילה ב-ע׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-78",
    "word": "עדינות",
    "vocalized": "עֲדִינוּת",
    "sentence": "היא ליטפה את הגור הקטן ב___ רבה.",
    "sentenceTts": "היא ליטפה את הגור הקטן בעֲדִינוּת רבה.",
    "hintEmoji": "🪶 רוך ונעימות (עדין)",
    "spellingTip": "עדינות מתחילה ב-ע׳ ומסתיימת ב-ת׳.",
    "category": "gutturals"
  },
  {
    "id": "g-79",
    "word": "עייפות",
    "vocalized": "עֲיֵפוּת",
    "sentence": "אחרי הטיול הארוך הרגשנו ___ נעימה.",
    "sentenceTts": "אחרי הטיול הארוך הרגשנו עֲיֵפוּת נעימה.",
    "hintEmoji": "🥱 תחושה שרוצים לישון (עייף)",
    "spellingTip": "עייפות בכתיב מלא נכתבת עם שני י׳ (ע-י-י-פ-ו-ת).",
    "category": "gutturals"
  },
  {
    "id": "g-80",
    "word": "ערנות",
    "vocalized": "עֵרָנוּת",
    "sentence": "שתיית מים ושינה טובה תורמות ל___ בשיעור.",
    "sentenceTts": "שתיית מים ושינה טובה תורמות לעֵרָנוּת בשיעור.",
    "hintEmoji": "👀 מצב שבו ערים ומרוכזים",
    "spellingTip": "ערנות (מהמילה ער) מתחילה ב-ע׳ ובלי י׳!",
    "category": "gutturals"
  },
  {
    "id": "g-81",
    "word": "הצללה",
    "vocalized": "הַצְלָלָה",
    "sentence": "מתחת לרשת ה___ בגינה היה צל קריר.",
    "sentenceTts": "מתחת לרשת ההַצְלָלָה בגינה היה צל קריר.",
    "hintEmoji": "⛱️ יצירת צל מפני השמש",
    "spellingTip": "הצללה (מהמילה צל) מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-82",
    "word": "הדרכה",
    "vocalized": "הַדְרָכָה",
    "sentence": "המדריכה העבירה ___ מעניינת במוזיאון.",
    "sentenceTts": "המדריכה העבירה הַדְרָכָה מעניינת במוזיאון.",
    "hintEmoji": "🧭 הסבר והנחיה (להדריך, דרך)",
    "spellingTip": "הדרכה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-83",
    "word": "הודעה",
    "vocalized": "הוֹדָעָה",
    "sentence": "שלחתי לאימא ___ קצרה בטלפון.",
    "sentenceTts": "שלחתי לאימא הוֹדָעָה קצרה בטלפון.",
    "hintEmoji": "💬 מסר כתוב או בעל פה (להודיע)",
    "spellingTip": "הודעה מתחילה ב-ה׳ ומסתיימת ב-ע-ה!",
    "category": "gutturals"
  },
  {
    "id": "g-84",
    "word": "הופעה",
    "vocalized": "הוֹפָעָה",
    "sentence": "להקת המחול העלתה ___ מרהיבה על הבמה.",
    "sentenceTts": "להקת המחול העלתה הוֹפָעָה מרהיבה על הבמה.",
    "hintEmoji": "🎤 מופע של שירה או ריקוד (להופיע)",
    "spellingTip": "הופעה מתחילה ב-ה׳ ומסתיימת ב-ע-ה!",
    "category": "gutturals"
  },
  {
    "id": "g-85",
    "word": "הוכחה",
    "vocalized": "הוֹכָחָה",
    "sentence": "הבלש מצא ___ שפתרה את התעלומה.",
    "sentenceTts": "הבלש מצא הוֹכָחָה שפתרה את התעלומה.",
    "hintEmoji": "🔍 ראיה שמראה שמשהו נכון (להוכיח)",
    "spellingTip": "הוכחה מתחילה ב-ה׳, עם כ׳ ואז ח-ה.",
    "category": "gutturals"
  },
  {
    "id": "g-86",
    "word": "החלטה",
    "vocalized": "הַחְלָטָה",
    "sentence": "קיבלנו ___ משותפת בהצבעה כיתתית.",
    "sentenceTts": "קיבלנו הַחְלָטָה משותפת בהצבעה כיתתית.",
    "hintEmoji": "🗳️ בחירה סופית (להחליט)",
    "spellingTip": "החלטה מתחילה ומסתיימת ב-ה׳, עם ח׳ ו-ט׳.",
    "category": "gutturals"
  },
  {
    "id": "g-87",
    "word": "היכרות",
    "vocalized": "הֶכֵּרוּת",
    "sentence": "ביום הראשון ללימודים עשינו משחקי ___.",
    "sentenceTts": "ביום הראשון ללימודים עשינו משחקי הֶכֵּרוּת.",
    "hintEmoji": "👋 להכיר אנשים חדשים",
    "spellingTip": "היכרות בכתיב מלא נכתבת עם י׳ אחרי ה-ה׳ (ה-י-כ-ר-ו-ת).",
    "category": "gutturals"
  },
  {
    "id": "g-88",
    "word": "הכנה",
    "vocalized": "הֲכָנָה",
    "sentence": "עשינו חזרות ו___ לקראת טקס בית הספר.",
    "sentenceTts": "עשינו חזרות והֲכָנָה לקראת טקס בית הספר.",
    "hintEmoji": "📋 התכוננות מראש (להכין)",
    "spellingTip": "הכנה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-89",
    "word": "המלצה",
    "vocalized": "הַמְלָצָה",
    "sentence": "קיבלתי ___ חמה על ספר קריאה חדש.",
    "sentenceTts": "קיבלתי הַמְלָצָה חמה על ספר קריאה חדש.",
    "hintEmoji": "⭐ עצה טובה לבחור במשהו (להמליץ)",
    "spellingTip": "המלצה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-90",
    "word": "הנאה",
    "vocalized": "הֲנָאָה",
    "sentence": "המשחק המשותף הסב לנו ___ רבה.",
    "sentenceTts": "המשחק המשותף הסב לנו הֲנָאָה רבה.",
    "hintEmoji": "😄 כיף ושמחה (ליהנות)",
    "spellingTip": "הנאה (ליהנות) מסתיימת ב-א-ה!",
    "category": "gutturals"
  },
  {
    "id": "g-91",
    "word": "הנחה",
    "vocalized": "הֲנָחָה",
    "sentence": "בחנות הספרים הייתה ___ מיוחדת לשבוע הספר.",
    "sentenceTts": "בחנות הספרים הייתה הֲנָחָה מיוחדת לשבוע הספר.",
    "hintEmoji": "🏷️ הורדת מחיר (וגם להניח)",
    "spellingTip": "הנחה מתחילה ומסתיימת ב-ה׳, עם ח׳ באמצע.",
    "category": "gutturals"
  },
  {
    "id": "g-92",
    "word": "הסכמה",
    "vocalized": "הַסְכָּמָה",
    "sentence": "הגענו ל___ משותפת שמתאימה לכולם.",
    "sentenceTts": "הגענו להַסְכָּמָה משותפת שמתאימה לכולם.",
    "hintEmoji": "👍 אישור והבנה הדדית (להסכים)",
    "spellingTip": "הסכמה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-93",
    "word": "הסבר",
    "vocalized": "הֶסְבֵּר",
    "sentence": "המורה נתנה ___ ברור ופשוט לתרגיל.",
    "sentenceTts": "המורה נתנה הֶסְבֵּר ברור ופשוט לתרגיל.",
    "hintEmoji": "📖 הבהרה שמסבירה איך משהו עובד",
    "spellingTip": "הסבר מתחיל ב-ה׳ ונכתב עם ס׳.",
    "category": "gutturals"
  },
  {
    "id": "g-94",
    "word": "המשך",
    "vocalized": "הֶמְשֵׁךְ",
    "sentence": "נחכה בסקרנות ל___ הסיפור בפרק הבא.",
    "sentenceTts": "נחכה בסקרנות להֶמְשֵׁךְ הסיפור בפרק הבא.",
    "hintEmoji": "➡️ החלק הבא (להמשיך)",
    "spellingTip": "המשך מתחיל ב-ה׳ ומסתיים ב-ך׳ סופית.",
    "category": "gutturals"
  },
  {
    "id": "g-95",
    "word": "התחלה",
    "vocalized": "הַתְחָלָה",
    "sentence": "כל ___ חדשה מביאה איתה הזדמנויות.",
    "sentenceTts": "כל הַתְחָלָה חדשה מביאה איתה הזדמנויות.",
    "hintEmoji": "🌱 נקודת הפתיחה (להתחיל)",
    "spellingTip": "התחלה מתחילה ומסתיימת ב-ה׳, עם ת׳ ו-ח׳.",
    "category": "gutturals"
  },
  {
    "id": "g-96",
    "word": "התמדה",
    "vocalized": "הַתְמָדָה",
    "sentence": "בעזרת אימון ו___ משתפרים מיום ליום.",
    "sentenceTts": "בעזרת אימון והַתְמָדָה משתפרים מיום ליום.",
    "hintEmoji": "🏃‍♀️ המשך השקעה בלי לוותר (להתמיד)",
    "spellingTip": "התמדה מתחילה ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-97",
    "word": "חברות",
    "vocalized": "חֲבֵרוּת",
    "sentence": "___ טובה מבוססת על אמון והקשבה.",
    "sentenceTts": "חֲבֵרוּת טובה מבוססת על אמון והקשבה.",
    "hintEmoji": "👯‍♀️ קשר קרוב בין חברים",
    "spellingTip": "חברות מתחילה ב-ח׳ ומסתיימת ב-ת׳.",
    "category": "gutturals"
  },
  {
    "id": "g-98",
    "word": "חגיגה",
    "vocalized": "חֲגִיגָה",
    "sentence": "ערכנו ___ שמחה לכבוד סיום הפרויקט.",
    "sentenceTts": "ערכנו חֲגִיגָה שמחה לכבוד סיום הפרויקט.",
    "hintEmoji": "🎈 מסיבה ושמחה (חג)",
    "spellingTip": "חגיגה מתחילה ב-ח׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "g-99",
    "word": "חוכמה",
    "vocalized": "חָכְמָה",
    "sentence": "ספרים מוסיפים דעת ו___.",
    "sentenceTts": "ספרים מוסיפים דעת וחָכְמָה.",
    "hintEmoji": "🦉 תבונה ושכל (חכם)",
    "spellingTip": "חוכמה בכתיב מלא נכתבת עם ו׳ (ח-ו-כ-מ-ה).",
    "category": "gutturals"
  },
  {
    "id": "g-100",
    "word": "חופשה",
    "vocalized": "חֻפְשָׁה",
    "sentence": "ב___ הגדולה בקיץ נסענו לטייל בצפון.",
    "sentenceTts": "בחֻפְשָׁה הגדולה בקיץ נסענו לטייל בצפון.",
    "hintEmoji": "🏖️ ימי מנוחה וחופש",
    "spellingTip": "חופשה מתחילה ב-ח׳ ומסתיימת ב-ה׳.",
    "category": "gutturals"
  },
  {
    "id": "e-1",
    "word": "מתמטיקה",
    "vocalized": "מָתֵמָטִיקָה",
    "sentence": "שיעור ___ עוסק במספרים, שברים והנדסה.",
    "sentenceTts": "שיעור מָתֵמָטִיקָה עוסק במספרים, שברים והנדסה.",
    "hintEmoji": "➗ מקצוע החשבון והגיאומטריה",
    "spellingTip": "במתמטיקה: קודם ת׳ ואחר כך ט׳! (מ-ת-מ-ט-י-ק-ה).",
    "category": "emphatics"
  },
  {
    "id": "e-2",
    "word": "טמפרטורה",
    "vocalized": "טֶמְפֵּרָטוּרָה",
    "sentence": "ה___ עלתה היום לשלושים מעלות.",
    "sentenceTts": "הטֶמְפֵּרָטוּרָה עלתה היום לשלושים מעלות.",
    "hintEmoji": "🌡️ מידת החום או הקור",
    "spellingTip": "שתי האותיות הן ט׳! (ט-מ-פ-ר-ט-ו-ר-ה).",
    "category": "emphatics"
  },
  {
    "id": "e-3",
    "word": "תזמורת",
    "vocalized": "תִּזְמוֹרֶת",
    "sentence": "ה___ ניגנה יצירה מרגשת באולם.",
    "sentenceTts": "התִּזְמוֹרֶת ניגנה יצירה מרגשת באולם.",
    "hintEmoji": "🎻 קבוצת נגנים שמנגנים יחד",
    "spellingTip": "תזמורת מהשורש ז.מ.ר — מתחילה ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-4",
    "word": "קהילה",
    "vocalized": "קְהִלָּה",
    "sentence": "כל תושבי השכונה התנדבו למען ה___.",
    "sentenceTts": "כל תושבי השכונה התנדבו למען הקְהִלָּה.",
    "hintEmoji": "🏘️ קבוצת אנשים שחיים יחד",
    "spellingTip": "קהילה (קהל) מתחילה ב-ק׳ ואחריה ה׳.",
    "category": "emphatics"
  },
  {
    "id": "e-5",
    "word": "מוזיקה",
    "vocalized": "מוּזִיקָה",
    "sentence": "אני אוהבת להאזין ל___ בזמן שאני מציירת.",
    "sentenceTts": "אני אוהבת להאזין למוּזִיקָה בזמן שאני מציירת.",
    "hintEmoji": "🎵 שירים ומנגינות",
    "spellingTip": "מוזיקה נכתבת עם ז׳ ו-ק׳.",
    "category": "emphatics"
  },
  {
    "id": "e-6",
    "word": "אסתטיקה",
    "vocalized": "אֶסְתֵּטִיקָה",
    "sentence": "העיצוב של החדר מצטיין ביופי וב___.",
    "sentenceTts": "העיצוב של החדר מצטיין ביופי ובאֶסְתֵּטִיקָה.",
    "hintEmoji": "✨ יופי, סדר וניקיון עיצובי",
    "spellingTip": "קודם ס-ת ואחר כך ט-י-ק-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-7",
    "word": "היסטוריה",
    "vocalized": "הִסְטוֹרְיָה",
    "sentence": "בשיעור ___ למדנו על העת העתיקה.",
    "sentenceTts": "בשיעור הִסְטוֹרְיָה למדנו על העת העתיקה.",
    "hintEmoji": "🏛️ חקר העבר",
    "spellingTip": "היסטוריה נכתבת עם ה׳, ס׳ ו-ט׳.",
    "category": "emphatics"
  },
  {
    "id": "e-8",
    "word": "ספורטאי",
    "vocalized": "סְפּוֹרְטַאי",
    "sentence": "כל ___ מתאמן שעות רבות לפני התחרות.",
    "sentenceTts": "כל סְפּוֹרְטַאי מתאמן שעות רבות לפני התחרות.",
    "hintEmoji": "🏅 אדם שעוסק בספורט",
    "spellingTip": "ספורט + סיומת א-י.",
    "category": "emphatics"
  },
  {
    "id": "e-9",
    "word": "טכנולוגיה",
    "vocalized": "טֶכְנוֹלוֹגְיָה",
    "sentence": "מחשבים ורובוטים הם חלק מעולם ה___.",
    "sentenceTts": "מחשבים ורובוטים הם חלק מעולם הטֶכְנוֹלוֹגְיָה.",
    "hintEmoji": "🤖 מדע ההמצאות והמחשבים",
    "spellingTip": "טכנולוגיה מתחילה ב-ט׳ ואחריה כ׳.",
    "category": "emphatics"
  },
  {
    "id": "e-10",
    "word": "אסטרונאוט",
    "vocalized": "אַסְטְרוֹנָאוּט",
    "sentence": "ה___ ריחף בחללית מחוץ לכדור הארץ.",
    "sentenceTts": "האַסְטְרוֹנָאוּט ריחף בחללית מחוץ לכדור הארץ.",
    "hintEmoji": "🧑‍🚀 טייס חלל",
    "spellingTip": "אסטרונאוט: מתחיל ב-א-ס-ט ומסתיים ב-א-ו-ט.",
    "category": "emphatics"
  },
  {
    "id": "e-11",
    "word": "טלסקופ",
    "vocalized": "טֶלֶסְקוֹפּ",
    "sentence": "הבטנו בירח ובכוכבים דרך עדשת ה___.",
    "sentenceTts": "הבטנו בירח ובכוכבים דרך עדשת הטֶלֶסְקוֹפּ.",
    "hintEmoji": "🔭 מכשיר לצפייה בכוכבים",
    "spellingTip": "טלסקופ: ט׳, ס׳, ק׳ ו-פ׳ רגילה בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-12",
    "word": "תיאטרון",
    "vocalized": "תֵּיאַטְרוֹן",
    "sentence": "הלכנו לצפות בהצגה מצחיקה ב___.",
    "sentenceTts": "הלכנו לצפות בהצגה מצחיקה בתֵּיאַטְרוֹן.",
    "hintEmoji": "🎭 אולם שבו מציגים הצגות",
    "spellingTip": "תיאטרון: קודם ת׳ ואחר כך ט׳ (ת-י-א-ט-ר-ו-ן).",
    "category": "emphatics"
  },
  {
    "id": "e-13",
    "word": "שוקולד",
    "vocalized": "שׁוֹקוֹלָד",
    "sentence": "אפינו עוגת ___ חמה ומתוקה.",
    "sentenceTts": "אפינו עוגת שׁוֹקוֹלָד חמה ומתוקה.",
    "hintEmoji": "🍫 ממתק אהוב מקקאו",
    "spellingTip": "שוקולד נכתב עם ש׳, ק׳ ושני ו׳.",
    "category": "emphatics"
  },
  {
    "id": "e-14",
    "word": "אוטובוס",
    "vocalized": "אוֹטוֹבּוּס",
    "sentence": "נסענו ב___ הגדול לטיול השנתי.",
    "sentenceTts": "נסענו באוֹטוֹבּוּס הגדול לטיול השנתי.",
    "hintEmoji": "🚌 כלי רכב ציבורי להסעת נוסעים",
    "spellingTip": "אוטובוס: א-ו-ט-ו-ב-ו-ס.",
    "category": "emphatics"
  },
  {
    "id": "e-15",
    "word": "אינטרנט",
    "vocalized": "אִינְטֶרְנֶט",
    "sentence": "חיפשנו מידע ב___ עבור העבודה.",
    "sentenceTts": "חיפשנו מידע באִינְטֶרְנֶט עבור העבודה.",
    "hintEmoji": "🌐 רשת המחשבים העולמית",
    "spellingTip": "אינטרנט נכתב עם שני ט׳ (א-י-נ-ט-ר-נ-ט).",
    "category": "emphatics"
  },
  {
    "id": "e-16",
    "word": "משטרה",
    "vocalized": "מִשְׁטָרָה",
    "sentence": "ניידת ה___ שמרה על הסדר בכביש.",
    "sentenceTts": "ניידת המִשְׁטָרָה שמרה על הסדר בכביש.",
    "hintEmoji": "🚓 שוטרים ששומרים על החוק",
    "spellingTip": "משטרה (שוטר) נכתבת עם ט׳ באמצע.",
    "category": "emphatics"
  },
  {
    "id": "e-17",
    "word": "סבלנות",
    "vocalized": "סַבְלָנוּת",
    "sentence": "חיכינו בתור ב___ ובנחת.",
    "sentenceTts": "חיכינו בתור בסַבְלָנוּת ובנחת.",
    "hintEmoji": "🧘 יכולת להמתין ברוגע",
    "spellingTip": "סבלנות מתחילה ב-ס׳ ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-18",
    "word": "תחרות",
    "vocalized": "תַּחֲרוּת",
    "sentence": "השתתפנו ב___ ריצה בבית הספר.",
    "sentenceTts": "השתתפנו בתַּחֲרוּת ריצה בבית הספר.",
    "hintEmoji": "🏁 התמודדות ספורטיבית",
    "spellingTip": "תחרות מתחילה ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-19",
    "word": "תחבורה",
    "vocalized": "תַּחְבּוּרָה",
    "sentence": "רכבת ואוטובוס הם אמצעי ___ ציבורית.",
    "sentenceTts": "רכבת ואוטובוס הם אמצעי תַּחְבּוּרָה ציבורית.",
    "hintEmoji": "🚆 כלי רכב להסעת נוסעים",
    "spellingTip": "תחבורה מתחילה ב-ת׳ ואחריה ח׳.",
    "category": "emphatics"
  },
  {
    "id": "e-20",
    "word": "קופסה",
    "vocalized": "קֻפְסָה",
    "sentence": "שמרתי את המדבקות בתוך ___ יפה.",
    "sentenceTts": "שמרתי את המדבקות בתוך קֻפְסָה יפה.",
    "hintEmoji": "📦 תיבה לאחסון חפצים",
    "spellingTip": "קופסה נכתבת עם ק׳, ס׳ ו-ה׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-21",
    "word": "כרטיס",
    "vocalized": "כַּרְטִיס",
    "sentence": "קנינו ___ כניסה לסרט החדש.",
    "sentenceTts": "קנינו כַּרְטִיס כניסה לסרט החדש.",
    "hintEmoji": "🎟️ כרטיס לסרט או לרכבת",
    "spellingTip": "כרטיס: כ׳ בהתחלה, ט׳ באמצע, ס׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-22",
    "word": "פסטיבל",
    "vocalized": "פֶסְטִיבָל",
    "sentence": "בקיץ נערך בעיר ___ ססגוני של מוזיקה.",
    "sentenceTts": "בקיץ נערך בעיר פֶסְטִיבָל ססגוני של מוזיקה.",
    "hintEmoji": "🎪 חגיגה של מופעים",
    "spellingTip": "פסטיבל נכתב עם ס׳ ו-ט׳.",
    "category": "emphatics"
  },
  {
    "id": "e-23",
    "word": "אקווריום",
    "vocalized": "אַקְוַרְיוֹם",
    "sentence": "דגי הנוי שחו בשלווה בתוך ה___.",
    "sentenceTts": "דגי הנוי שחו בשלווה בתוך האַקְוַרְיוֹם.",
    "hintEmoji": "🐠 מכל זכוכית עם מים ודגים",
    "spellingTip": "אקווריום: עם ק׳ ופעמיים ו׳ באמצע.",
    "category": "emphatics"
  },
  {
    "id": "e-24",
    "word": "קנגורו",
    "vocalized": "קֶנְגּוּרוּ",
    "sentence": "ה___ היא חיית כיס שמנתרת לגובה.",
    "sentenceTts": "הקֶנְגּוּרוּ היא חיית כיס שמנתרת לגובה.",
    "hintEmoji": "🦘 חיה קופצנית מאוסטרליה",
    "spellingTip": "קנגורו מתחיל ב-ק׳ ויש בו שני ו׳.",
    "category": "emphatics"
  },
  {
    "id": "e-25",
    "word": "דינוזאור",
    "vocalized": "דִּינוֹזָאוּר",
    "sentence": "במוזיאון הטבע ראינו שלד ענק של ___.",
    "sentenceTts": "במוזיאון הטבע ראינו שלד ענק של דִּינוֹזָאוּר.",
    "hintEmoji": "🦕 זוחל קדמון ענק",
    "spellingTip": "דינוזאור נכתב ד-י-נ-ו-ז-א-ו-ר.",
    "category": "emphatics"
  },
  {
    "id": "e-26",
    "word": "טלוויזיה",
    "vocalized": "טֶלֶוִיזְיָה",
    "sentence": "צפינו יחד בתוכנית טבע ב___.",
    "sentenceTts": "צפינו יחד בתוכנית טבע בטֶלֶוִיזְיָה.",
    "hintEmoji": "📺 מסך לצפייה בתוכניות",
    "spellingTip": "טלוויזיה: עם ט׳ בהתחלה ושני ו׳ באמצע.",
    "category": "emphatics"
  },
  {
    "id": "e-27",
    "word": "פנטזיה",
    "vocalized": "פַנְטַזְיָה",
    "sentence": "היא אוהבת לקרוא ספרי ___ וקסם.",
    "sentenceTts": "היא אוהבת לקרוא ספרי פַנְטַזְיָה וקסם.",
    "hintEmoji": "🐉 דמיון ואגדות",
    "spellingTip": "פנטזיה נכתבת עם ט׳ ו-ז׳.",
    "category": "emphatics"
  },
  {
    "id": "e-28",
    "word": "מגנט",
    "vocalized": "מַגְנֵט",
    "sentence": "תלינו את הציור על המקרר בעזרת ___.",
    "sentenceTts": "תלינו את הציור על המקרר בעזרת מַגְנֵט.",
    "hintEmoji": "🧲 מושך אליו ברזל",
    "spellingTip": "מגנט מסתיים באות ט׳.",
    "category": "emphatics"
  },
  {
    "id": "e-29",
    "word": "תרבות",
    "vocalized": "תַּרְבּוּת",
    "sentence": "בכל מדינה יש שפה, אומנות ו___ מיוחדת.",
    "sentenceTts": "בכל מדינה יש שפה, אומנות ותַּרְבּוּת מיוחדת.",
    "hintEmoji": "🎨 מנהגים, יצירה ואומנות",
    "spellingTip": "תרבות מתחילה ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-30",
    "word": "תקשורת",
    "vocalized": "תִּקְשׁוֹרֶת",
    "sentence": "___ טובה בין חברים מונעת אי-הבנות.",
    "sentenceTts": "תִּקְשׁוֹרֶת טובה בין חברים מונעת אי-הבנות.",
    "hintEmoji": "📡 העברת מסרים ושיחה",
    "spellingTip": "תקשורת מתחילה ומסתיימת ב-ת׳, עם ק׳.",
    "category": "emphatics"
  },
  {
    "id": "e-31",
    "word": "סביבה",
    "vocalized": "סְבִיבָה",
    "sentence": "חשוב לשמור על איכות ה___ ולמחזר.",
    "sentenceTts": "חשוב לשמור על איכות הסְבִיבָה ולמחזר.",
    "hintEmoji": "🌿 הטבע והמרחב שמסביבנו",
    "spellingTip": "סביבה מתחילה ב-ס׳ ונכתבת עם שני ב׳.",
    "category": "emphatics"
  },
  {
    "id": "e-32",
    "word": "אולימפיאדה",
    "vocalized": "אוֹלִימְפִּיאָדָה",
    "sentence": "הספורטאים הטובים בעולם מתחרים ב___.",
    "sentenceTts": "הספורטאים הטובים בעולם מתחרים באוֹלִימְפִּיאָדָה.",
    "hintEmoji": "🏅 משחקי הספורט העולמיים",
    "spellingTip": "אולימפיאדה נכתבת עם פ-י-א-ד-ה בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-33",
    "word": "גיאוגרפיה",
    "vocalized": "גֵּיאוֹגְרַפְיָה",
    "sentence": "בשיעור ___ למדנו על יבשות ונהרות.",
    "sentenceTts": "בשיעור גֵּיאוֹגְרַפְיָה למדנו על יבשות ונהרות.",
    "hintEmoji": "🌍 חקר כדור הארץ והמפות",
    "spellingTip": "גיאוגרפיה: ג-י-א-ו-ג-ר-פ-י-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-34",
    "word": "אוניברסיטה",
    "vocalized": "אוּנִיבֶרְסִיטָה",
    "sentence": "אחותי הגדולה לומדת רפואה ב___.",
    "sentenceTts": "אחותי הגדולה לומדת רפואה באוּנִיבֶרְסִיטָה.",
    "hintEmoji": "🎓 מוסד ללימודים גבוהים",
    "spellingTip": "אוניברסיטה נכתבת עם ס׳ ואז ט׳.",
    "category": "emphatics"
  },
  {
    "id": "e-35",
    "word": "מיקרוסקופ",
    "vocalized": "מִקְרוֹסְקוֹפּ",
    "sentence": "התבוננו בתאים זעירים של עלה דרך ה___.",
    "sentenceTts": "התבוננו בתאים זעירים של עלה דרך המִקְרוֹסְקוֹפּ.",
    "hintEmoji": "🔬 מכשיר שמגדיל דברים זעירים",
    "spellingTip": "מיקרוסקופ: שני ק׳, ס׳ ו-פ׳ רגילה בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-36",
    "word": "אנציקלופדיה",
    "vocalized": "אֶנְצִיקְלוֹפֶּדְיָה",
    "sentence": "קראנו ערך מרתק על החלל ב___.",
    "sentenceTts": "קראנו ערך מרתק על החלל באֶנְצִיקְלוֹפֶּדְיָה.",
    "hintEmoji": "📚 מאגר ידע רחב",
    "spellingTip": "אנציקלופדיה: א-נ-צ-י-ק-ל-ו-פ-ד-י-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-37",
    "word": "קפטריה",
    "vocalized": "קָפֵטֶרְיָה",
    "sentence": "קנינו כריך ב___ של בית הספר.",
    "sentenceTts": "קנינו כריך בקָפֵטֶרְיָה של בית הספר.",
    "hintEmoji": "🥪 מזנון או חדר אוכל קל",
    "spellingTip": "קפטריה נכתבת עם ק׳ ו-ט׳.",
    "category": "emphatics"
  },
  {
    "id": "e-38",
    "word": "אטמוספירה",
    "vocalized": "אַטְמוֹסְפֵירָה",
    "sentence": "שכבת האוויר סביב כדור הארץ נקראת ___.",
    "sentenceTts": "שכבת האוויר סביב כדור הארץ נקראת אַטְמוֹסְפֵירָה.",
    "hintEmoji": "🌎 מעטפת האוויר של כדור הארץ",
    "spellingTip": "אטמוספירה: א-ט-מ-ו-ס-פ-י-ר-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-39",
    "word": "קרקס",
    "vocalized": "קִרְקָס",
    "sentence": "הלוליינים ביצעו פעלולים באוהל ה___.",
    "sentenceTts": "הלוליינים ביצעו פעלולים באוהל הקִרְקָס.",
    "hintEmoji": "🎪 מופע של לוליינים ואקרובטים",
    "spellingTip": "קרקס נכתב עם שני ק׳ ו-ס׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-40",
    "word": "פסנתר",
    "vocalized": "פְּסַנְתֵּר",
    "sentence": "היא מנגנת מנגינה יפה על ה___.",
    "sentenceTts": "היא מנגנת מנגינה יפה על הפְּסַנְתֵּר.",
    "hintEmoji": "🎹 כלי נגינה עם קלידים",
    "spellingTip": "פסנתר נכתב עם ס׳ ו-ת׳ (פ-ס-נ-ת-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-41",
    "word": "גיטרה",
    "vocalized": "גִּיטָרָה",
    "sentence": "הוא פרט על מיתרי ה___ סביב המדורה.",
    "sentenceTts": "הוא פרט על מיתרי הגִּיטָרָה סביב המדורה.",
    "hintEmoji": "🎸 כלי נגינה עם שישה מיתרים",
    "spellingTip": "גיטרה נכתבת עם ט׳ ו-ה׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-42",
    "word": "חצוצרה",
    "vocalized": "חֲצוֹצְרָה",
    "sentence": "הנגן נשף ב___ המוזהבת בתזמורת.",
    "sentenceTts": "הנגן נשף בחֲצוֹצְרָה המוזהבת בתזמורת.",
    "hintEmoji": "🎺 כלי נשיפה ממתכת",
    "spellingTip": "חצוצרה מתחילה ב-ח׳ ונכתבת עם שני צ׳.",
    "category": "emphatics"
  },
  {
    "id": "e-43",
    "word": "כינור",
    "vocalized": "כִּנּוֹר",
    "sentence": "נגן ה___ ניגן מנגינה מרגשת באמצעות הקשת.",
    "sentenceTts": "נגן הכִּנּוֹר ניגן מנגינה מרגשת באמצעות הקשת.",
    "hintEmoji": "🎻 כלי מיתר שמנגנים בו עם קשת",
    "spellingTip": "כינור בכתיב מלא מתחיל ב-כ-י (כ-י-נ-ו-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-44",
    "word": "תוף",
    "vocalized": "תּוֹף",
    "sentence": "המתופף הקיש על ה___ במקלות הקצב.",
    "sentenceTts": "המתופף הקיש על התּוֹף במקלות הקצב.",
    "hintEmoji": "🥁 כלי הקשה",
    "spellingTip": "תוף מתחיל ב-ת׳ ומסתיים ב-ף סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-45",
    "word": "ספרייה",
    "vocalized": "סִפְרִיָּה",
    "sentence": "שאלתי שני ספרי קריאה חדשים מה___.",
    "sentenceTts": "שאלתי שני ספרי קריאה חדשים מהסִפְרִיָּה.",
    "hintEmoji": "📚 מקום שבו שואלים וקוראים ספרים",
    "spellingTip": "ספרייה בכתיב מלא: מתחילה ב-ס׳ ונכתבת עם שני י׳!",
    "category": "emphatics"
  },
  {
    "id": "e-46",
    "word": "מחברת",
    "vocalized": "מַחְבֶּרֶת",
    "sentence": "כתבתי את הסיכום בצורה מסודרת ב___.",
    "sentenceTts": "כתבתי את הסיכום בצורה מסודרת במַחְבֶּרֶת.",
    "hintEmoji": "📓 דפים כרוכים לכתיבה בבית הספר",
    "spellingTip": "מחברת (שורש ח.ב.ר) נכתבת עם ח׳ ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-47",
    "word": "קלמר",
    "vocalized": "קַלְמָר",
    "sentence": "סידרתי את העפרונות והטושים בתוך ה___.",
    "sentenceTts": "סידרתי את העפרונות והטושים בתוך הקַלְמָר.",
    "hintEmoji": "✏️ נרתיק לכלי כתיבה",
    "spellingTip": "קלמר מתחיל באות ק׳ (ק-ל-מ-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-48",
    "word": "עיפרון",
    "vocalized": "עִפָּרוֹן",
    "sentence": "שרטטתי קו ישר עם סרגל ו___.",
    "sentenceTts": "שרטטתי קו ישר עם סרגל ועִפָּרוֹן.",
    "hintEmoji": "✏️ כלי כתיבה וציור מעץ",
    "spellingTip": "עיפרון בכתיב מלא מתחיל ב-ע-י ומסתיים ב-ן סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-49",
    "word": "מחק",
    "vocalized": "מַחַק",
    "sentence": "מחקתי את הטעות במחברת בעזרת ה___.",
    "sentenceTts": "מחקתי את הטעות במחברת בעזרת המַחַק.",
    "hintEmoji": "🧼 מוחק כתיבה של עיפרון",
    "spellingTip": "מחק נכתב עם ח׳ ו-ק׳ (מ-ח-ק).",
    "category": "emphatics"
  },
  {
    "id": "e-50",
    "word": "סרגל",
    "vocalized": "סַרְגֵּל",
    "sentence": "מדדנו אורך של עשרה סנטימטרים בעזרת ___.",
    "sentenceTts": "מדדנו אורך של עשרה סנטימטרים בעזרת סַרְגֵּל.",
    "hintEmoji": "📏 כלי למדידה ולשרטוט קו ישר",
    "spellingTip": "סרגל מתחיל באות ס׳ (ס-ר-ג-ל).",
    "category": "emphatics"
  },
  {
    "id": "e-51",
    "word": "מספריים",
    "vocalized": "מִסְפָּרַיִם",
    "sentence": "גזרנו נייר צבעוני ליצירה בעזרת ___.",
    "sentenceTts": "גזרנו נייר צבעוני ליצירה בעזרת מִסְפָּרַיִם.",
    "hintEmoji": "✂️ כלי לגזירת נייר או בד",
    "spellingTip": "מספריים מתחילים ב-מ-ס ונכתבים עם שני י׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-52",
    "word": "תיקייה",
    "vocalized": "תִּיקִיָּה",
    "sentence": "שמרתי את דפי העבודה בתוך ___ מסודרת.",
    "sentenceTts": "שמרתי את דפי העבודה בתוך תִּיקִיָּה מסודרת.",
    "hintEmoji": "📁 אוגדן לשמירת דפים",
    "spellingTip": "תיקייה: מתחילה ב-ת׳, עם ק׳ ושני י׳ לפני ה-ה׳.",
    "category": "emphatics"
  },
  {
    "id": "e-53",
    "word": "מחשב",
    "vocalized": "מַחְשֵׁב",
    "sentence": "הקלדנו את העבודה ושמרנו קובץ ב___.",
    "sentenceTts": "הקלדנו את העבודה ושמרנו קובץ במַחְשֵׁב.",
    "hintEmoji": "💻 מכשיר אלקטרוני לעבודה ולמשחק",
    "spellingTip": "מחשב (לחשוב) נכתב עם ח׳ ו-ש׳.",
    "category": "emphatics"
  },
  {
    "id": "e-54",
    "word": "מקלדת",
    "vocalized": "מִקְלֶדֶת",
    "sentence": "האותיות בעברית מסודרות על גבי ה___.",
    "sentenceTts": "האותיות בעברית מסודרות על גבי המִקְלֶדֶת.",
    "hintEmoji": "⌨️ לוח מקשים להקלדה",
    "spellingTip": "מקלדת (להקליד) נכתבת עם ק׳ ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-55",
    "word": "עכבר",
    "vocalized": "עַכְבָּר",
    "sentence": "הזזנו את הסמן על המסך בעזרת ה___.",
    "sentenceTts": "הזזנו את הסמן על המסך בעזרת העַכְבָּר.",
    "hintEmoji": "🖱️ מכשירן קטן למחשב וגם מכרסם קטן",
    "spellingTip": "עכבר מתחיל ב-ע׳ ואחריה כ׳ (ע-כ-ב-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-56",
    "word": "מדפסת",
    "vocalized": "מַדְפֶּסֶת",
    "sentence": "הדפסנו את התמונות הצבעוניות ב___.",
    "sentenceTts": "הדפסנו את התמונות הצבעוניות במַדְפֶּסֶת.",
    "hintEmoji": "🖨️ מכשיר שמדפיס על נייר",
    "spellingTip": "מדפסת (להדפיס) נכתבת עם ס׳ ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-57",
    "word": "טלפון",
    "vocalized": "טֶלֶפוֹן",
    "sentence": "דיברתי עם סבתא ב___ הנייד.",
    "sentenceTts": "דיברתי עם סבתא בטֶלֶפוֹן הנייד.",
    "hintEmoji": "📱 מכשיר לשיחות ולהודעות",
    "spellingTip": "טלפון מתחיל באות ט׳ ומסתיים ב-ן סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-58",
    "word": "מצלמה",
    "vocalized": "מַצְלֵמָה",
    "sentence": "צילמנו תמונה כיתתית יפה ב___.",
    "sentenceTts": "צילמנו תמונה כיתתית יפה במַצְלֵמָה.",
    "hintEmoji": "📷 מכשיר לצילום תמונות",
    "spellingTip": "מצלמה (לצלם) נכתבת מ-צ-ל-מ-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-59",
    "word": "סוללה",
    "vocalized": "סוֹלְלָה",
    "sentence": "הטענו את ה___ של הטלפון לפני הטיול.",
    "sentenceTts": "הטענו את הסוֹלְלָה של הטלפון לפני הטיול.",
    "hintEmoji": "🔋 בטרייה שנותנת אנרגיה למכשיר",
    "spellingTip": "סוללה מתחילה ב-ס׳ ונכתבת עם שני ל׳.",
    "category": "emphatics"
  },
  {
    "id": "e-60",
    "word": "נורה",
    "vocalized": "נוּרָה",
    "sentence": "החלפנו ___ חדשה במנורת השולחן.",
    "sentenceTts": "החלפנו נוּרָה חדשה במנורת השולחן.",
    "hintEmoji": "💡 מאירה כשמדליקים את החשמל",
    "spellingTip": "נורה נכתבת נ-ו-ר-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-61",
    "word": "מקרר",
    "vocalized": "מְקָרֵר",
    "sentence": "שמרנו את החלב והגבינות בתוך ה___.",
    "sentenceTts": "שמרנו את החלב והגבינות בתוך המְקָרֵר.",
    "hintEmoji": "🧊 שומר על האוכל קר וטרי במטבח",
    "spellingTip": "מקרר (מהמילה קר) נכתב עם ק׳ ושני ר׳.",
    "category": "emphatics"
  },
  {
    "id": "e-62",
    "word": "תנור",
    "vocalized": "תַּנּוּר",
    "sentence": "אפינו פשטידה חמה בתוך ה___ במטבח.",
    "sentenceTts": "אפינו פשטידה חמה בתוך התַּנּוּר במטבח.",
    "hintEmoji": "♨️ מכשיר לאפיית אוכל ועוגות",
    "spellingTip": "תנור מתחיל באות ת׳ (ת-נ-ו-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-63",
    "word": "כיור",
    "vocalized": "כִּיּוֹר",
    "sentence": "שטפנו ידיים במים ובסבון מעל ה___.",
    "sentenceTts": "שטפנו ידיים במים ובסבון מעל הכִּיּוֹר.",
    "hintEmoji": "🚰 קערה עם ברז מים במטבח או באמבטיה",
    "spellingTip": "כיור מתחיל באות כ׳ (כ-י-ו-ר).",
    "category": "emphatics"
  },
  {
    "id": "e-64",
    "word": "סבון",
    "vocalized": "סַבּוֹן",
    "sentence": "בועות של ___ ריחפו באוויר כששטפנו ידיים.",
    "sentenceTts": "בועות של סַבּוֹן ריחפו באוויר כששטפנו ידיים.",
    "hintEmoji": "🧼 חומר לניקוי ולרחיצה",
    "spellingTip": "סבון מתחיל ב-ס׳ ומסתיים ב-ן סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-65",
    "word": "מגבת",
    "vocalized": "מַגֶּבֶת",
    "sentence": "ניגבנו את הידיים הרטובות ב___ רכה.",
    "sentenceTts": "ניגבנו את הידיים הרטובות במַגֶּבֶת רכה.",
    "hintEmoji": "🧺 בד לניגוב הגוף או הידיים",
    "spellingTip": "מגבת (לנגב) מסתיימת באות ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-66",
    "word": "מברשת",
    "vocalized": "מִבְרֶשֶׁת",
    "sentence": "צחצחתי שיניים עם ___ ומשחה בבוקר.",
    "sentenceTts": "צחצחתי שיניים עם מִבְרֶשֶׁת ומשחה בבוקר.",
    "hintEmoji": "🪥 כלי לצחצוח שיניים או להברשת שיער",
    "spellingTip": "מברשת מסתיימת באות ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-67",
    "word": "מסרק",
    "vocalized": "מַסְרֵק",
    "sentence": "סידרתי את השיער מול המראה בעזרת ___.",
    "sentenceTts": "סידרתי את השיער מול המראה בעזרת מַסְרֵק.",
    "hintEmoji": "🪮 כלי לסירוק השיער",
    "spellingTip": "מסרק מתחיל ב-מ-ס ומסתיים ב-ק׳!",
    "category": "emphatics"
  },
  {
    "id": "e-68",
    "word": "מראה",
    "vocalized": "מַרְאָה",
    "sentence": "הסתכלתי ב___ לפני שיצאתי מהבית.",
    "sentenceTts": "הסתכלתי במַרְאָה לפני שיצאתי מהבית.",
    "hintEmoji": "🪞 זכוכית שמשקפת את הדמות שלנו",
    "spellingTip": "מראה (שורש ר.א.ה — לראות) נכתבת עם א׳ ואז ה׳.",
    "category": "emphatics"
  },
  {
    "id": "e-69",
    "word": "שולחן",
    "vocalized": "שֻׁלְחָן",
    "sentence": "ערכנו את הצלחות והכוסות על ה___.",
    "sentenceTts": "ערכנו את הצלחות והכוסות על השֻׁלְחָן.",
    "hintEmoji": "🪑 רהיט שאוכלים או כותבים עליו",
    "spellingTip": "שולחן נכתב עם ש׳, ח׳ ו-ן סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-70",
    "word": "כיסא",
    "vocalized": "כִּסֵּא",
    "sentence": "ישבתי בנוחות על ה___ ליד שולחן הכתיבה.",
    "sentenceTts": "ישבתי בנוחות על הכִּסֵּא ליד שולחן הכתיבה.",
    "hintEmoji": "🪑 רהיט לישיבה",
    "spellingTip": "כיסא בכתיב מלא: מתחיל ב-כ-י, עם ס׳ ומסתיים ב-א׳!",
    "category": "emphatics"
  },
  {
    "id": "e-71",
    "word": "ספה",
    "vocalized": "סַפָּה",
    "sentence": "ישבנו יחד על ה___ הנוחה בסלון.",
    "sentenceTts": "ישבנו יחד על הסַפָּה הנוחה בסלון.",
    "hintEmoji": "🛋️ מושב רך ורחב בסלון",
    "spellingTip": "ספה מתחילה ב-ס׳ ומסתיימת ב-ה׳.",
    "category": "emphatics"
  },
  {
    "id": "e-72",
    "word": "שטיח",
    "vocalized": "שָׁטִיחַ",
    "sentence": "על רצפת החדר פרוס ___ רך וצבעוני.",
    "sentenceTts": "על רצפת החדר פרוס שָׁטִיחַ רך וצבעוני.",
    "hintEmoji": "🧶 אריג שנפרש על הרצפה",
    "spellingTip": "שטיח מתחיל ב-ש׳, עם ט׳ באמצע ו-ח׳ בסוף!",
    "category": "emphatics"
  },
  {
    "id": "e-73",
    "word": "וילון",
    "vocalized": "וִילוֹן",
    "sentence": "פתחנו את ה___ כדי שאור השמש ייכנס לחדר.",
    "sentenceTts": "פתחנו את הוִילוֹן כדי שאור השמש ייכנס לחדר.",
    "hintEmoji": "🪟 בד שתלוי ליד החלון",
    "spellingTip": "וילון מתחיל ב-ו׳ אחת (ו-י-ל-ו-ן).",
    "category": "emphatics"
  },
  {
    "id": "e-74",
    "word": "חלון",
    "vocalized": "חַלּוֹן",
    "sentence": "פתחנו את ה___ כדי לאוורר את החדר.",
    "sentenceTts": "פתחנו את החַלּוֹן כדי לאוורר את החדר.",
    "hintEmoji": "🪟 פתח בקיר להכנסת אור ואוויר",
    "spellingTip": "חלון מתחיל ב-ח׳ ומסתיים ב-ן סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-75",
    "word": "תקרה",
    "vocalized": "תִּקְרָה",
    "sentence": "מנורת החדר תלויה במרכז ה___.",
    "sentenceTts": "מנורת החדר תלויה במרכז התִּקְרָה.",
    "hintEmoji": "🏠 החלק העליון של החדר מעל הראש",
    "spellingTip": "תקרה מתחילה ב-ת׳ ואחריה ק׳ (ת-ק-ר-ה)!",
    "category": "emphatics"
  },
  {
    "id": "e-76",
    "word": "רצפה",
    "vocalized": "רִצְפָּה",
    "sentence": "שטפנו את ה___ בחדר עד שהבריקה.",
    "sentenceTts": "שטפנו את הרִצְפָּה בחדר עד שהבריקה.",
    "hintEmoji": "🧹 המשטח שעליו דורכים בחדר",
    "spellingTip": "רצפה נכתבת בלי י׳: ר-צ-פ-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-77",
    "word": "מדרגות",
    "vocalized": "מַדְרֵגוֹת",
    "sentence": "עלינו ב___ בזהירות לקומה השנייה.",
    "sentenceTts": "עלינו במַדְרֵגוֹת בזהירות לקומה השנייה.",
    "hintEmoji": "🪜 שלבים לעלייה ולירידה בין קומות",
    "spellingTip": "מדרגות (לדרוך, דרגה) מסתיימות ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-78",
    "word": "מפתח",
    "vocalized": "מִטְרִיָּה",
    "sentence": "פתחנו את נעילת הדלת באמצעות ה___.",
    "sentenceTts": "פתחנו את נעילת הדלת באמצעות המִטְרִיָּה.",
    "hintEmoji": "🔑 פותח ונועל מנעול",
    "spellingTip": "מפתח (לפתוח) נכתב עם ת׳ ומסתיים ב-ח׳.",
    "category": "emphatics"
  },
  {
    "id": "e-79",
    "word": "מטרייה",
    "vocalized": "מִטְרִיָּה",
    "sentence": "פתחנו ___ צבעונית כדי לא להירטב בגשם.",
    "sentenceTts": "פתחנו מִטְרִיָּה צבעונית כדי לא להירטב בגשם.",
    "hintEmoji": "☂️ מגינה עלינו מפני הגשם (מטר)",
    "spellingTip": "מטרייה באה מהמילה \"מטר\" (גשם) — נכתבת עם ט׳ ושני י׳!",
    "category": "emphatics"
  },
  {
    "id": "e-80",
    "word": "מעיל",
    "vocalized": "מְעִיל",
    "sentence": "לבשתי ___ חם לפני שיצאתי בבוקר החורפי.",
    "sentenceTts": "לבשתי מְעִיל חם לפני שיצאתי בבוקר החורפי.",
    "hintEmoji": "🧥 בגד עליון מחמם לחורף",
    "spellingTip": "מעיל נכתב עם ע׳ באמצע (מ-ע-י-ל).",
    "category": "emphatics"
  },
  {
    "id": "e-81",
    "word": "כובע",
    "vocalized": "כּוֹבַע",
    "sentence": "חבשתי ___ מצחייה כדי להגן על הפנים מהשמש.",
    "sentenceTts": "חבשתי כּוֹבַע מצחייה כדי להגן על הפנים מהשמש.",
    "hintEmoji": "🧢 חובשים על הראש",
    "spellingTip": "כובע מתחיל ב-כ׳ ומסתיים באות ע׳!",
    "category": "emphatics"
  },
  {
    "id": "e-82",
    "word": "צעיף",
    "vocalized": "צָעִיף",
    "sentence": "עטפתי את הצוואר ב___ צמר רך וחמים.",
    "sentenceTts": "עטפתי את הצוואר בצָעִיף צמר רך וחמים.",
    "hintEmoji": "🧣 כורכים סביב הצוואר בחורף",
    "spellingTip": "צעיף נכתב עם ע׳ באמצע ו-ף סופית.",
    "category": "emphatics"
  },
  {
    "id": "e-83",
    "word": "כפפות",
    "vocalized": "כְּפָפוֹת",
    "sentence": "לבשנו ___ חמות על הידיים בשלג.",
    "sentenceTts": "לבשנו כְּפָפוֹת חמות על הידיים בשלג.",
    "hintEmoji": "🧤 מחממות את כפות הידיים",
    "spellingTip": "כפפות (כף יד) מתחילות ב-כ׳ ונכתבות עם שני פ׳.",
    "category": "emphatics"
  },
  {
    "id": "e-84",
    "word": "מגפיים",
    "vocalized": "מַגָּפַיִם",
    "sentence": "נעלתי ___ מגומי ויצאתי לדלג בשלוליות.",
    "sentenceTts": "נעלתי מַגָּפַיִם מגומי ויצאתי לדלג בשלוליות.",
    "hintEmoji": "🥾 נעליים גבוהות לחורף",
    "spellingTip": "מגפיים נכתבים עם שני י׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-85",
    "word": "סנדלים",
    "vocalized": "סַנְדָּלִים",
    "sentence": "בקיץ החם נעלתי ___ מאווררים ונוחים.",
    "sentenceTts": "בקיץ החם נעלתי סַנְדָּלִים מאווררים ונוחים.",
    "hintEmoji": "👡 נעליים פתוחות לקיץ",
    "spellingTip": "סנדלים מתחילים באות ס׳.",
    "category": "emphatics"
  },
  {
    "id": "e-86",
    "word": "משקפיים",
    "vocalized": "מִשְׁקָפַיִם",
    "sentence": "הרכבתי ___ שמש ביציאה לחוף הים.",
    "sentenceTts": "הרכבתי מִשְׁקָפַיִם שמש ביציאה לחוף הים.",
    "hintEmoji": "👓 עדשות במסגרת לראייה או להגנה מהשמש",
    "spellingTip": "משקפיים נכתבים עם ק׳ ושני י׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-87",
    "word": "שעון",
    "vocalized": "שָׁעוֹן",
    "sentence": "בדקתי ב___ מה השעה כדי לא לאחר.",
    "sentenceTts": "בדקתי בשָׁעוֹן מה השעה כדי לא לאחר.",
    "hintEmoji": "⌚ מראה את השעה",
    "spellingTip": "שעון (שעה) נכתב עם ע׳ באמצע.",
    "category": "emphatics"
  },
  {
    "id": "e-88",
    "word": "טבעת",
    "vocalized": "טַבַּעַת",
    "sentence": "היא ענדה ___ כסף עדינה על האצבע.",
    "sentenceTts": "היא ענדה טַבַּעַת כסף עדינה על האצבע.",
    "hintEmoji": "💍 תכשיט עגול לאצבע",
    "spellingTip": "טבעת מתחילה ב-ט׳, עם ע׳ באמצע ו-ת׳ בסוף!",
    "category": "emphatics"
  },
  {
    "id": "e-89",
    "word": "שרשרת",
    "vocalized": "שַׁרְשֶׁרֶת",
    "sentence": "הכנתי ___ מחרוזים צבעוניים.",
    "sentenceTts": "הכנתי שַׁרְשֶׁרֶת מחרוזים צבעוניים.",
    "hintEmoji": "📿 תכשיט לצוואר מחוליות או חרוזים",
    "spellingTip": "שרשרת נכתבת ש-ר-ש-ר-ת ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-90",
    "word": "צמיד",
    "vocalized": "צָמִיד",
    "sentence": "ענדתי ___ חוטים צבעוני על פרק היד.",
    "sentenceTts": "ענדתי צָמִיד חוטים צבעוני על פרק היד.",
    "hintEmoji": "📿 תכשיט שעונדים על היד (צמוד)",
    "spellingTip": "צמיד נכתב צ-מ-י-ד.",
    "category": "emphatics"
  },
  {
    "id": "e-91",
    "word": "כדורגל",
    "vocalized": "כַּדּוּרֶגֶל",
    "sentence": "שיחקנו ___ במגרש עם כל החברים.",
    "sentenceTts": "שיחקנו כַּדּוּרֶגֶל במגרש עם כל החברים.",
    "hintEmoji": "⚽ משחק ספורט פופולרי עם כדור ושערים",
    "spellingTip": "כדורגל מחבר את המילים כדור + רגל במילה אחת.",
    "category": "emphatics"
  },
  {
    "id": "e-92",
    "word": "כדורסל",
    "vocalized": "כַּדּוּרְסַל",
    "sentence": "קלעתי סל של שלוש נקודות במשחק ה___.",
    "sentenceTts": "קלעתי סל של שלוש נקודות במשחק הכַּדּוּרְסַל.",
    "hintEmoji": "🏀 משחק ספורט שבו קולעים כדור לסל",
    "spellingTip": "כדורסל מחבר כדור + סל (עם כ׳ בהתחלה ו-ס׳ בסוף).",
    "category": "emphatics"
  },
  {
    "id": "e-93",
    "word": "אופניים",
    "vocalized": "אוֹפַנַּיִם",
    "sentence": "רכבנו על ___ בשביל המיוחד בפארק.",
    "sentenceTts": "רכבנו על אוֹפַנַּיִם בשביל המיוחד בפארק.",
    "hintEmoji": "🚲 כלי רכב דו-גלגלי שמדוושים בו (עם קסדה!)",
    "spellingTip": "אופניים מתחילים ב-א-ו ונכתבים עם שני י׳ בסוף.",
    "category": "emphatics"
  },
  {
    "id": "e-94",
    "word": "קורקינט",
    "vocalized": "קוֹרְקִינֵט",
    "sentence": "היא נסעה בזהירות על ה___ עם קסדה.",
    "sentenceTts": "היא נסעה בזהירות על הקוֹרְקִינֵט עם קסדה.",
    "hintEmoji": "🛴 כלי רכב קטן עם כידון וגלגלים",
    "spellingTip": "קורקינט: שני ק׳ ומסתיים ב-ט׳ (ק-ו-ר-ק-י-נ-ט)!",
    "category": "emphatics"
  },
  {
    "id": "e-95",
    "word": "קסדה",
    "vocalized": "בְּרֵכָה",
    "sentence": "תמיד חובשים ___ על הראש כשרכבים על אופניים.",
    "sentenceTts": "תמיד חובשים בְּרֵכָה על הראש כשרכבים על אופניים.",
    "hintEmoji": "🪖 מגינה על הראש ברכיבה",
    "spellingTip": "קסדה מתחילה ב-ק׳ ואחריה ס׳ (ק-ס-ד-ה).",
    "category": "emphatics"
  },
  {
    "id": "e-96",
    "word": "בריכה",
    "vocalized": "בְּרֵיכָה",
    "sentence": "שחינו ב___ הקרירה ביום קיץ חם.",
    "sentenceTts": "שחינו בבְּרֵיכָה הקרירה ביום קיץ חם.",
    "hintEmoji": "🏊‍♀️ מתקן מים לשחייה",
    "spellingTip": "בריכה בכתיב מלא נכתבת ב-ר-י-כ-ה.",
    "category": "emphatics"
  },
  {
    "id": "e-97",
    "word": "מטוס",
    "vocalized": "מָטוֹס",
    "sentence": "ה___ המריא משדה התעופה אל מעל העננים.",
    "sentenceTts": "המָטוֹס המריא משדה התעופה אל מעל העננים.",
    "hintEmoji": "✈️ כלי טיס עם כנפיים (לטוס)",
    "spellingTip": "מטוס (לטוס) נכתב עם ט׳ ו-ס׳ (מ-ט-ו-ס)!",
    "category": "emphatics"
  },
  {
    "id": "e-98",
    "word": "רכבת",
    "vocalized": "אֳנִיָּה",
    "sentence": "נסענו ב___ המהירה מתל אביב לחיפה.",
    "sentenceTts": "נסענו באֳנִיָּה המהירה מתל אביב לחיפה.",
    "hintEmoji": "🚆 נוסעת על מסילת ברזל",
    "spellingTip": "רכבת נכתבת עם כ׳ ומסתיימת ב-ת׳.",
    "category": "emphatics"
  },
  {
    "id": "e-99",
    "word": "אונייה",
    "vocalized": "אוֹנִיָּה",
    "sentence": "ה___ הגדולה הפליגה על פני הים הפתוח.",
    "sentenceTts": "האוֹנִיָּה הגדולה הפליגה על פני הים הפתוח.",
    "hintEmoji": "🚢 כלי שיט גדול בים",
    "spellingTip": "אונייה בכתיב מלא: א-ו-נ-י-י-ה (עם שני י׳).",
    "category": "emphatics"
  },
  {
    "id": "e-100",
    "word": "סירה",
    "vocalized": "סִירָה",
    "sentence": "חתרנו במשוטים ב___ קטנה על האגם.",
    "sentenceTts": "חתרנו במשוטים בסִירָה קטנה על האגם.",
    "hintEmoji": "🚣 כלי שיט קטן במים",
    "spellingTip": "סירה מתחילה ב-ס׳ ומסתיימת ב-ה׳.",
    "category": "emphatics"
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  // Companions
  {
    id: 'comp-owl',
    name: 'ינשוף החכמה',
    type: 'companion',
    icon: '🦉',
    description: 'החבר הקלאסי שאוהב מילים קשות ושורשים.',
    price: 0,
  },
  {
    id: 'comp-unicorn',
    name: 'חד-קרן קסום',
    type: 'companion',
    icon: '🦄',
    description: 'מפזר אבק כוכבים בכל פעם שאת מצליחה ברצף!',
    price: 80,
  },
  {
    id: 'comp-fox',
    name: 'שועל הבזק',
    type: 'companion',
    icon: '🦊',
    description: 'אלוף המהירות — מעודד אותך לשבור שיאי זמן.',
    price: 150,
  },
  {
    id: 'comp-dragon',
    name: 'דרקון האש',
    type: 'companion',
    icon: '🐉',
    description: 'שומר על רצף האש שלך בוער וחזק!',
    price: 250,
  },
  {
    id: 'comp-panda',
    name: 'פנדה גלקטית',
    type: 'companion',
    icon: '🐼',
    description: 'המאסטרית של המילים הלועזיות והמאתגרות.',
    price: 400,
  },

  // Themes
  {
    id: 'theme-galaxy',
    name: 'סגול גלקסיה',
    type: 'theme',
    icon: '🌌',
    description: 'עיצוב לילי מרהיב בגווני אינדיגו וסגול חלל.',
    price: 0,
    previewClass: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'theme-berry',
    name: 'ורוד מסטיק ניאון',
    type: 'theme',
    icon: '🌸',
    description: 'אנרגטי, שמח ונוצץ בגווני פוקסיה וורוד.',
    price: 120,
    previewClass: 'from-pink-500 to-rose-600',
  },
  {
    id: 'theme-ocean',
    name: 'טורקיז אוקיינוס',
    type: 'theme',
    icon: '🌊',
    description: 'גווני ים רגועים ומרעננים של טורקיז ואזמרגד.',
    price: 180,
    previewClass: 'from-cyan-500 to-teal-600',
  },
  {
    id: 'theme-gold',
    name: 'זהב מלכותי',
    type: 'theme',
    icon: '👑',
    description: 'עיצוב יוקרתי של אלופות כתיב אמיתיות!',
    price: 300,
    previewClass: 'from-amber-500 to-orange-600',
  },

  // Confetti styles
  {
    id: 'conf-classic',
    name: 'קונפטי מסיבה',
    type: 'confetti',
    icon: '🎉',
    description: 'פיצוץ צבעוני של קונפטי בכל הצלחה.',
    price: 0,
  },
  {
    id: 'conf-stars',
    name: 'מטר כוכבים מוזהבים',
    type: 'confetti',
    icon: '🌟',
    description: 'כוכבים מוזהבים שמאירים את המסך.',
    price: 100,
  },
  {
    id: 'conf-fire',
    name: 'ניצוצות אש וניאון',
    type: 'confetti',
    icon: '🔥',
    description: 'זיקוקים בגווני אש, זהב ומג׳נטה.',
    price: 220,
  },
];
