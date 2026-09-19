const questions = [
  { en: "I enjoy turning an idea into a page or tool that people can use online.", ar: "أستمتع بتحويل فكرة إلى صفحة أو أداة يستطيع الناس استخدامها عبر الإنترنت.", w: [3,0,0] },
  { en: "I care about how a page looks and how easily people can move through it.", ar: "أهتم بشكل الصفحة ومدى سهولة تنقّل المستخدم داخلها.", w: [3,0,0] },
  { en: "I would enjoy learning how pages, buttons, and online forms are built.", ar: "أستمتع بتعلّم كيفية بناء الصفحات والأزرار والنماذج الإلكترونية.", w: [3,0,0] },
  { en: "I like combining creativity with logical problem-solving.", ar: "أحب الجمع بين الإبداع وحل المشكلات المنطقية.", w: [3,1,1] },
  { en: "I enjoy improving a digital product after seeing how people use it.", ar: "أستمتع بتحسين منتج رقمي بعد ملاحظة طريقة استخدام الناس له.", w: [2,2,1] },
  { en: "I can patiently fix a problem until a page works as expected.", ar: "أستطيع الاستمرار بصبر في إصلاح مشكلة حتى تعمل الصفحة كما يجب.", w: [3,2,1] },
  { en: "I often notice small mistakes that other people may miss.", ar: "غالباً ألاحظ الأخطاء الصغيرة التي قد لا ينتبه إليها الآخرون.", w: [1,3,2] },
  { en: "I enjoy trying different ways to make something fail so it can be improved.", ar: "أستمتع بتجربة طرق مختلفة لاكتشاف كيف يمكن أن يتعطل شيء ما ثم تحسينه.", w: [0,3,0] },
  { en: "I like following clear steps and recording exactly what happened.", ar: "أحب اتباع خطوات واضحة وتسجيل ما حدث بدقة.", w: [1,3,2] },
  { en: "I prefer checking that a product meets its requirements before it is released.", ar: "أفضل التأكد من أن المنتج يطابق المتطلبات قبل إطلاقه.", w: [1,3,1] },
  { en: "I can repeat tests carefully without losing focus.", ar: "أستطيع تكرار الاختبارات بعناية من دون أن أفقد تركيزي.", w: [1,3,1] },
  { en: "I can explain a problem clearly and respectfully without blaming the person who made it.", ar: "أستطيع شرح المشكلة بوضوح واحترام من دون لوم الشخص الذي ارتكبها.", w: [1,3,1] },
  { en: "I enjoy finding patterns in numbers, charts, or information.", ar: "أستمتع باكتشاف الأنماط في الأرقام أو الرسوم البيانية أو المعلومات.", w: [0,0,3] },
  { en: "I like asking why something happened and using evidence to answer.", ar: "أحب أن أسأل لماذا حدث شيء ما وأن أستخدم الأدلة للوصول إلى الإجابة.", w: [1,1,3] },
  { en: "I am willing to learn more mathematics and statistics.", ar: "لدي استعداد لتعلّم المزيد من الرياضيات والإحصاء.", w: [0,0,3] },
  { en: "I do not mind organizing and cleaning messy information before analyzing it.", ar: "لا أمانع في ترتيب وتنظيف معلومات غير منظمة قبل تحليلها.", w: [0,2,3] },
  { en: "I like turning results into charts and explaining what they mean.", ar: "أحب تحويل النتائج إلى رسوم بيانية وشرح معناها للآخرين.", w: [1,1,3] },
  { en: "I would enjoy using programming to answer questions with data.", ar: "أستمتع باستخدام البرمجة للإجابة عن أسئلة مرتبطة بالبيانات.", w: [2,1,3] }
];

const careers = [
  {
    key: "web", en: "Web Development", ar: "تطوير الويب",
    whyEn: "You enjoy creating useful digital experiences, combining logic with creativity, and improving how people interact with websites.",
    whyAr: "تستمتع ببناء تجارب رقمية مفيدة، والجمع بين المنطق والإبداع، وتحسين طريقة تفاعل الناس مع المواقع.",
    majorsEn: ["Computer Science", "Software Engineering", "Information Technology", "Computer Information Systems", "Web or Multimedia"],
    majorsAr: ["علوم الحاسوب", "هندسة البرمجيات", "تكنولوجيا المعلومات", "نظم المعلومات الحاسوبية", "الويب أو الوسائط المتعددة"]
  },
  {
    key: "qa", en: "Quality Assurance", ar: "ضمان جودة البرمجيات",
    whyEn: "You enjoy finding details, testing different situations, documenting issues clearly, and helping a team release reliable software.",
    whyAr: "تستمتع بملاحظة التفاصيل، واختبار حالات مختلفة، وتوثيق المشكلات بوضوح، ومساعدة الفريق على إطلاق برمجيات موثوقة.",
    majorsEn: ["Software Engineering", "Computer Science", "Information Technology", "Computer Information Systems"],
    majorsAr: ["هندسة البرمجيات", "علوم الحاسوب", "تكنولوجيا المعلومات", "نظم المعلومات الحاسوبية"]
  },
  {
    key: "data", en: "Data Science", ar: "علوم البيانات",
    whyEn: "You enjoy patterns, evidence, mathematics, organizing information, and explaining conclusions through charts and clear reasoning.",
    whyAr: "تستمتع باكتشاف الأنماط، واستخدام الأدلة والرياضيات، وتنظيم المعلومات، وشرح النتائج من خلال الرسوم والتفكير الواضح.",
    majorsEn: ["Data Science", "Artificial Intelligence", "Computer Science", "Statistics", "Applied Mathematics", "Business Analytics"],
    majorsAr: ["علوم البيانات", "الذكاء الاصطناعي", "علوم الحاسوب", "الإحصاء", "الرياضيات التطبيقية", "تحليلات الأعمال"]
  }
];

const copy = {
  en: {
    eyebrow: "A NawrasEdu experience", introTitle: "Which IT path feels most like you?", introLead: "Answer 18 short questions and discover how well your interests match three growing technology careers.",
    web: "Web Development", qa: "Quality Assurance", data: "Data Science", start: "Start questionnaire", time: "About 4 minutes", beforeTitle: "Before you begin",
    beforeOne: "There are no right or wrong answers.", beforeTwo: "Choose what honestly sounds most like you.", beforeThree: "Your result is guidance for exploration—not a final decision.",
    exit: "Exit", questionHelp: "How much does this sound like you?", answerLegend: "Select an answer from one to five", notMe: "Not like me", veryMe: "Very much like me", back: "Back", next: "Next question", seeResult: "See my result",
    resultEyebrow: "Your career match", scoresTitle: "Your compatibility scores", independent: "Independent scores", scoreNote: "These scores show compatibility, not probability, so they do not need to add up to 100%.",
    whyKicker: "Why it may fit", majorsKicker: "If you would like to select a major", majorsTitle: "Majors worth exploring", majorNote: "Names and admission requirements differ between universities. Compare current study plans before choosing.",
    restart: "Take it again", home: "Back to introduction", footer: "A NawrasEdu product", footerNote: "Made to help Tawjihi students explore with confidence.",
    progress: (n) => `Question ${n} of 18`, title: (career) => `You're most likely going to love ${career}.`,
    clear: "This is your clearest match right now.", promising: "This looks like a promising direction to explore.", mixed: (career) => `${career} is also a strong option. Explore both before deciding.`, choose: "Please choose an answer to continue."
  },
  ar: {
    eyebrow: "تجربة من NawrasEdu", introTitle: "أي مسار تقني يشبهك أكثر؟", introLead: "أجب عن 18 سؤالاً قصيراً واكتشف مدى توافق اهتماماتك مع ثلاثة مسارات تقنية متنامية.",
    web: "تطوير الويب", qa: "ضمان جودة البرمجيات", data: "علوم البيانات", start: "ابدأ الاستبيان", time: "حوالي 4 دقائق", beforeTitle: "قبل أن تبدأ",
    beforeOne: "لا توجد إجابات صحيحة أو خاطئة.", beforeTwo: "اختر الإجابة التي تشبهك بصدق.", beforeThree: "نتيجتك إرشاد للاستكشاف وليست قراراً نهائياً.",
    exit: "خروج", questionHelp: "إلى أي درجة تشبهك هذه العبارة؟", answerLegend: "اختر إجابة من واحد إلى خمسة", notMe: "لا يشبهني", veryMe: "يشبهني جداً", back: "السابق", next: "السؤال التالي", seeResult: "اعرض نتيجتي",
    resultEyebrow: "توافقك المهني", scoresTitle: "درجات التوافق", independent: "درجات مستقلة", scoreNote: "تعبر هذه الدرجات عن التوافق وليست احتمالات، لذلك ليس من الضروري أن يكون مجموعها 100٪.",
    whyKicker: "لماذا قد يناسبك", majorsKicker: "إذا أردت اختيار تخصص جامعي", majorsTitle: "تخصصات تستحق الاستكشاف", majorNote: "تختلف أسماء التخصصات وشروط القبول بين الجامعات. قارن الخطط الدراسية الحالية قبل الاختيار.",
    restart: "أعد التجربة", home: "العودة إلى المقدمة", footer: "منتج من NawrasEdu", footerNote: "لمساعدة طلبة التوجيهي على الاستكشاف بثقة.",
    progress: (n) => `السؤال ${n} من 18`, title: (career) => `من المرجح أنك ستحب مسار ${career}.`,
    clear: "هذا هو المسار الأكثر وضوحاً لك حالياً.", promising: "يبدو هذا مساراً واعداً يستحق الاستكشاف.", mixed: (career) => `${career} خيار قوي أيضاً. استكشف المسارين قبل أن تقرر.`, choose: "اختر إجابة للمتابعة."
  }
};

let language = localStorage.getItem("nawrasedu-language") || "en";
let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let currentView = "intro";

const views = { intro: document.querySelector("#intro-view"), quiz: document.querySelector("#quiz-view"), result: document.querySelector("#result-view") };
const answerScale = document.querySelector("#answer-scale");

function translatePage() {
  const t = copy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar" ? "دليل NawrasEdu للمسارات التقنية" : "NawrasEdu Career Guide";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (currentView === "quiz") renderQuestion();
  if (currentView === "result") renderResult();
}

function showView(name) {
  currentView = name;
  Object.entries(views).forEach(([key, view]) => {
    view.hidden = key !== name;
    view.classList.toggle("is-active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => document.querySelector("#app").focus({ preventScroll: true }), 50);
}

function renderQuestion() {
  const t = copy[language];
  const number = currentQuestion + 1;
  document.querySelector("#question-text").textContent = questions[currentQuestion][language];
  document.querySelector("#question-number").textContent = String(number).padStart(2, "0");
  document.querySelector("#progress-label").textContent = t.progress(number);
  document.querySelector("#progress-percent").textContent = `${Math.round(number / questions.length * 100)}%`;
  document.querySelector("#progress-bar").style.width = `${number / questions.length * 100}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(number));

  answerScale.innerHTML = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    const checked = answers[currentQuestion] === value ? "checked" : "";
    return `<div class="answer-option"><input type="radio" id="answer-${value}" name="answer" value="${value}" ${checked}><label for="answer-${value}">${value}</label></div>`;
  }).join("");

  document.querySelector('[data-action="back"]').disabled = currentQuestion === 0;
  const next = document.querySelector('[data-action="next"]');
  next.disabled = answers[currentQuestion] === null;
  next.querySelector("[data-i18n]").textContent = currentQuestion === questions.length - 1 ? t.seeResult : t.next;
}

function calculateScores() {
  return careers.map((_, careerIndex) => {
    const weighted = questions.reduce((total, question, index) => total + (answers[index] - 1) * question.w[careerIndex], 0);
    const max = 4 * questions.reduce((total, question) => total + question.w[careerIndex], 0);
    return Math.round(weighted / max * 100);
  });
}

function renderResult() {
  const t = copy[language];
  const scores = calculateScores();
  const ranked = scores.map((score, index) => ({ score, index })).sort((a, b) => b.score - a.score);
  const top = careers[ranked[0].index];
  const second = careers[ranked[1].index];
  const topName = top[language];
  const lead = ranked[0].score - ranked[1].score;

  document.querySelector("#result-title").textContent = t.title(topName);
  document.querySelector("#result-summary").textContent = ranked[0].score >= 70 && lead >= 10 ? t.clear : ranked[0].score >= 60 && lead >= 5 ? t.promising : t.mixed(second[language]);
  document.querySelector("#why-title").textContent = topName;
  document.querySelector("#why-copy").textContent = top[language === "ar" ? "whyAr" : "whyEn"];

  document.querySelector("#score-list").innerHTML = ranked.map(({ score, index }) => `
    <div class="score-row">
      <div class="score-label"><span>${careers[index][language]}</span><strong>${score}%</strong></div>
      <div class="score-bar" aria-hidden="true"><span style="--score:${score}%"></span></div>
    </div>`).join("");

  const majorKey = language === "ar" ? "majorsAr" : "majorsEn";
  document.querySelector("#major-list").innerHTML = top[majorKey].map((major) => `<span>${major}</span>`).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("click", (event) => {
  const languageButton = event.target.closest("[data-lang]");
  if (languageButton) {
    language = languageButton.dataset.lang;
    localStorage.setItem("nawrasedu-language", language);
    translatePage();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;

  if (action === "start") {
    currentQuestion = 0;
    answers = Array(questions.length).fill(null);
    showView("quiz");
    renderQuestion();
  }
  if (action === "back" && currentQuestion > 0) { currentQuestion -= 1; renderQuestion(); }
  if (action === "next") {
    if (answers[currentQuestion] === null) { showToast(copy[language].choose); return; }
    if (currentQuestion < questions.length - 1) { currentQuestion += 1; renderQuestion(); }
    else { renderResult(); showView("result"); }
  }
  if (action === "restart") {
    answers = Array(questions.length).fill(null);
    currentQuestion = 0;
    showView("quiz");
    renderQuestion();
  }
  if (action === "home" || action === "exit") showView("intro");
});

answerScale.addEventListener("change", (event) => {
  if (event.target.name !== "answer") return;
  answers[currentQuestion] = Number(event.target.value);
  document.querySelector('[data-action="next"]').disabled = false;
});

translatePage();
