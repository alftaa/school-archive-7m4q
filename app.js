const groups = {
  staff: { title: "شؤون الموظفات", subtitle: "الدوام، الغياب، الأداء والاستئذان", color: "#72227d" },
  students: { title: "شؤون الطالبات والتوجيه", subtitle: "القيد، الانضباط، الإرشاد والإشراف", color: "#9a4aa3" },
  exams: { title: "الاختبارات والأعمال التعليمية", subtitle: "الاختبارات، الكنترول والنماذج", color: "#965000" },
  admin: { title: "المعاملات والاتصالات الإدارية", subtitle: "الوارد، الصادر، التعاميم والاجتماعات", color: "#5d5960" },
  finance: { title: "المالية والتشغيل والعُهد", subtitle: "الميزانية، المقصف، المصروفات والعُهد", color: "#a85d15" }
};

const records = [
  { id: 1, group: "staff", title: "حصر غياب الموظفات وسجل دقائق التأخير", from: "١٤٣٩", to: "١٤٤٦", retention: "مستمر", source: "الملف ١", keywords: "غياب تأخير موظفة حضور دوام" },
  { id: 2, group: "staff", title: "سجل الدوام الرسمي", from: "١٤٣٦", to: "١٤٤٦", retention: "مستمر", source: "الملف ٢", keywords: "حضور انصراف بصمة دوام موظفات" },
  { id: 3, group: "admin", title: "دعم وتطوير الهيئة التعليمية", from: "١٤٣٦", to: "١٤٤٦", retention: "مستمر", source: "الملف ٢", keywords: "تطوير مهني معلمات تدريب تعليم" },
  { id: 4, group: "admin", title: "سجل توديع المعاملات", from: "—", to: "—", retention: "مستمر", source: "الملف ٣", keywords: "تسليم إرسال معاملة معاملات توديع" },
  { id: 5, group: "finance", title: "الميزانية التشغيلية وسجل المقصف المدرسي والمصروفات", from: "١٤٣٦", to: "١٤٤٦", retention: "مستمر", source: "الملف ٣", keywords: "مال مالية ميزانية مقصف صرف مصروف مشتريات" },
  { id: 6, group: "students", title: "سجل أحوال الطالبات وسجل قيد الطالبات", from: "١٤٣٨", to: "١٤٤٦", retention: "مستمر", source: "الملف ٤", keywords: "طالبة طالبات قيد تسجيل أحوال بيانات" },
  { id: 7, group: "exams", title: "سجل الاختبارات", from: "١٤٤٤", to: "١٤٤٦", retention: "٥ سنوات", source: "الملف ٥", keywords: "اختبار اختبارات امتحان امتحانات نتائج" },
  { id: 8, group: "admin", title: "سجل التعاميم", from: "—", to: "—", retention: "٣ سنوات", source: "الملف ٦", keywords: "تعاميم تعميم تعليمات قرار قرارات" },
  { id: 9, group: "admin", title: "زيارة المشرفة", from: "١٤٣٧", to: "١٤٤٣", retention: "مستمر", source: "الملف ٦", keywords: "مشرفة إشراف زيارة زيارات متابعة" },
  { id: 10, group: "admin", title: "سجل الوارد", from: "١٤٤٣", to: "١٤٤٥", retention: "٣ سنوات", source: "الملف ٧", keywords: "وارد خطاب خطابات معاملة معاملات مراسلات" },
  { id: 11, group: "admin", title: "سجل الصادر", from: "—", to: "—", retention: "٣ سنوات", source: "الملف ٧", keywords: "صادر خطاب خطابات معاملة معاملات مراسلات" },
  { id: 12, group: "staff", title: "الأداء الوظيفي", from: "١٤٤٠", to: "١٤٤٣", retention: "٤ سنوات", source: "الملف ٨", keywords: "تقييم أداء وظيفي موظفة موظفات" },
  { id: 13, group: "exams", title: "سجل الاختبارات - بيان إضافي", from: "١٤٤٤", to: "١٤٤٦", retention: "٥ سنوات", source: "الملف ٩", note: "ورد سجل الاختبارات في بيان مستقل آخر ضمن الملفات المرفقة.", keywords: "اختبار اختبارات امتحان امتحانات نتائج مكرر إضافي" },
  { id: 14, group: "exams", title: "نموذج أسئلة وإجابات", from: "١٤٤٥", to: "١٤٤٧", retention: "عام دراسي", source: "الملف ١٠", keywords: "اسئلة أسئلة إجابات اجابات نموذج نماذج اختبار" },
  { id: 15, group: "students", title: "سجل المناوبة اليومي", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "مناوبة يومي يومية اشراف إشراف" },
  { id: 16, group: "students", title: "سجل الإشراف اليومي", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "اشراف إشراف يومي مناوبة" },
  { id: 17, group: "students", title: "سجل توزيع حصص الانتظار", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "حصص انتظار توزيع معلمات" },
  { id: 18, group: "students", title: "تحويل الطالبات للمرشدة الطلابية", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "تحويل طالبة طالبات مرشدة إرشاد طلابي" },
  { id: 19, group: "staff", title: "سجل استئذان الموظفات", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "استئذان إذن اذن خروج موظفة موظفات" },
  { id: 20, group: "admin", title: "سجل الاجتماعات", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "اجتماع اجتماعات محضر محاضر" },
  { id: 21, group: "admin", title: "سجل الجولات الإدارية", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١١", keywords: "جولة جولات ادارية إدارية متابعة" },
  { id: 22, group: "exams", title: "سجل الكنترول والبرنتات وأعمال السنة", from: "١٤٤٤", to: "١٤٤٦", retention: "غير محددة", source: "الملف ١٢", keywords: "كنترول برنتات أعمال اعمال سنة درجات رصد" },
  { id: 23, group: "students", title: "سجل الانضباط المدرسي", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١٣", keywords: "انضباط حضور غياب طالبة طالبات" },
  { id: 24, group: "students", title: "الخطة الإجرائية للتهيئة والاستعداد", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١٣", keywords: "خطة اجرائية إجرائية تهيئة استعداد اخلاء إخلاء" },
  { id: 25, group: "students", title: "سجل لائحة السلوك والمواظبة والعقد الالتزامي", from: "١٤٤٥", to: "—", retention: "عام دراسي", source: "الملف ١٣", keywords: "سلوك مواظبة عقد التزام انضباط طالبة" },
  { id: 26, group: "finance", title: "العُهد", from: "١٤٣٩", to: "١٤٣٩", retention: "مستمر", source: "الملف ١٣", keywords: "عهد عهدة عُهد أصول اصول ممتلكات" },
  { id: 27, group: "finance", title: "المبيضات", from: "١٤٤٠", to: "١٤٤٣", retention: "مستمر", source: "الملف ١٣", keywords: "مبيضات نظافة مواد تنظيف مستودع" }
];

const arabicDigits = { "0": "٠", "1": "١", "2": "٢", "3": "٣", "4": "٤", "5": "٥", "6": "٦", "7": "٧", "8": "٨", "9": "٩" };
const latinDigits = { "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9" };

function toArabicNumber(value) {
  return String(value).replace(/[0-9]/g, d => arabicDigits[d]);
}

function normalizeArabic(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[٠-٩]/g, d => latinDigits[d])
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ـ/g, "")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const synonyms = {
  دوام: ["حضور", "انصراف", "بصمة"],
  غياب: ["تاخير", "حضور"],
  اختبار: ["اختبارات", "امتحان", "كنترول", "اسئله"],
  امتحان: ["اختبار", "اختبارات", "كنترول"],
  طالبه: ["طالبات", "قيد", "سلوك", "انضباط", "ارشاد"],
  مقصف: ["ميزانيه", "مصروفات", "ماليه"],
  ماليه: ["ميزانيه", "مصروفات", "مقصف"],
  مراسلات: ["وارد", "صادر", "معاملات", "تعاميم"],
  دائم: ["مستمر"],
  تنظيف: ["مبيضات", "نظافه"]
};

function expandedTerms(query) {
  const base = normalizeArabic(query).split(" ").filter(Boolean);
  const extra = base.flatMap(term => synonyms[term] || []);
  return [...new Set([...base, ...extra].map(normalizeArabic))];
}

function recordText(record) {
  return normalizeArabic([
    record.title, record.keywords, record.from, record.to, record.retention,
    record.source, groups[record.group].title
  ].join(" "));
}

const archiveGroups = document.querySelector("#archive-groups");
const resultsBox = document.querySelector("#search-results");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const clearSearch = document.querySelector("#clear-search");
const resultSummary = document.querySelector("#result-summary");
const showAll = document.querySelector("#show-all");
let activeFilter = "all";

function renderGroups() {
  const entries = Object.entries(groups).filter(([key]) => activeFilter === "all" || activeFilter === key);
  archiveGroups.innerHTML = entries.map(([key, group]) => {
    const groupRecords = records.filter(record => record.group === key);
    return `
      <article class="archive-group" style="--group-color:${group.color}">
        <button class="group-button" type="button" data-group="${key}" aria-label="عرض ${group.title}">
          <span class="group-copy">
            <span class="group-title">${group.title}</span>
            <span class="group-subtitle">${group.subtitle}</span>
          </span>
          <span class="group-action">
            <span class="record-count">${toArabicNumber(groupRecords.length)} سجلات</span>
            <span class="action-label">عرض السجلات</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </button>
      </article>`;
  }).join("");

  archiveGroups.querySelectorAll(".group-button").forEach(button => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.group);
      document.querySelector("#archive-title").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function highlight(text, rawQuery) {
  const query = rawQuery.trim();
  if (!query || query.length < 2) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "giu"), "<mark>$1</mark>");
}

function renderResults(matches, query = "") {
  resultsBox.innerHTML = matches.map(record => {
    const group = groups[record.group];
    const period = record.from === "—" && record.to === "—"
      ? "الفترة غير مدونة"
      : record.to === "—" ? `من ${record.from}` : `${record.from} - ${record.to}`;
    return `
      <article class="result-item" style="--result-color:${group.color}">
        <div class="result-copy">
          <h3>${highlight(record.title, query)}</h3>
          <p class="result-category">${group.title}</p>
        </div>
        <div class="result-meta" aria-label="بيانات السجل">
          <span><strong>الفترة</strong>${period}</span>
          <span><strong>مدة الحفظ</strong>${record.retention}</span>
          <span><strong>المصدر</strong>${record.source}</span>
        </div>
        ${record.note ? `<p class="source-note">${record.note}</p>` : ""}
      </article>`;
  }).join("");
}

function updateView() {
  const query = searchInput.value.trim();
  const terms = expandedTerms(query);
  const isSearching = terms.length > 0 || activeFilter !== "all";
  const matches = records.filter(record => {
    if (activeFilter !== "all" && record.group !== activeFilter) return false;
    if (!terms.length) return true;
    const haystack = recordText(record);
    return terms.some(term => haystack.includes(term));
  });

  clearSearch.hidden = !query;
  showAll.hidden = !isSearching;
  archiveGroups.hidden = isSearching;
  resultsBox.hidden = !isSearching || matches.length === 0;
  emptyState.hidden = matches.length > 0;

  if (isSearching && matches.length) renderResults(matches, query);

  if (!isSearching) {
    resultSummary.textContent = `${toArabicNumber(Object.keys(groups).length)} مستودعات · ${toArabicNumber(records.length)} سجلًا`;
  } else if (matches.length) {
    resultSummary.textContent = `${toArabicNumber(matches.length)} ${matches.length === 1 ? "سجل" : "سجلًا"}`;
  } else {
    resultSummary.textContent = "لا توجد نتائج";
  }
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter").forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderGroups();
  updateView();
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

searchInput.addEventListener("input", updateView);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    searchInput.value = "";
    setFilter("all");
  }
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  updateView();
});

showAll.addEventListener("click", () => {
  searchInput.value = "";
  setFilter("all");
});

document.querySelector("#reset-empty").addEventListener("click", () => {
  searchInput.value = "";
  setFilter("all");
  searchInput.focus();
});

renderGroups();
updateView();

