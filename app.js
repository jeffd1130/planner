// ─── FIREBASE CONFIG ──────────────────────────────────────────────────────────
// Paste your Firebase project config here (Firebase Console > Project Settings)
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
const WORKSPACE = "jeff"; // same on all devices = synced data

// ─── TASK DATA ────────────────────────────────────────────────────────────────
const TASKS = {
  daily: [
    { id: 'd1', text: 'Check email (jdelasarmas@angelcarehhs.com)' },
    { id: 'd2', text: 'Review Notion dashboards' },
    { id: 'd3', text: 'Angelcare KPI: scan claims queue for flags' },
    { id: 'd4', text: 'Check messages / DMs across platforms' },
  ],
  vinz: [
    { id: 'v1', text: 'Clark daily posting — next-day post prepped (1-day advance)' },
    { id: 'v2', text: 'LA Reel Edits — edit progress (slides from Cobrinha Design TG)' },
    { id: 'v3', text: 'Manila Slides — check if Coach Mark sent assets' },
    { id: 'v4', text: 'IBJJF World Championship — reposts done + added to story' },
    { id: 'v5', text: 'Capacity check — flag if overloaded or has open slots' },
  ],
  weekly: {
    mon: [
      { id: 'mon1', type: 'meeting', text: '8:00 AM — v4 Meeting' },
      { id: 'mon2', text: 'Cobrinha: Produce Tue LA post — Adults Reel (D-2 · drops Wed 10:30 AM)' },
      { id: 'mon3', text: 'Angelcare Social: Produce Tue slot — Solano County (D-2 · drops Wed 1 AM)' },
      { id: 'mon4', text: 'Tito AI: Produce Wed demo reel (D-2 · drops Wed 7:00 PM)' },
      { id: 'mon5', text: 'Weekly priorities review — set top 3 focus items' },
      { id: 'mon6', text: 'Check pending approvals (Dani / Prof Cobrinha)' },
    ],
    tue: [
      { id: 'tue1', text: 'Cobrinha D-0: verify + schedule Tue LA post (7:30 PM PST)' },
      { id: 'tue2', text: 'Angelcare Social D-0: verify + schedule Tue slot (9:00 AM PST)' },
      { id: 'tue3', text: 'Follow up on pending Vinz deliverables' },
    ],
    wed: [
      { id: 'wed1', text: 'Cobrinha: Produce Thu LA post — Kids Carousel (D-2 · drops Fri 9 AM)' },
      { id: 'wed2', text: 'Tito AI: Confirm Wed demo went live at 7:00 PM PHT' },
      { id: 'wed3', text: 'Mid-week Angelcare KPI check — flag billing anomalies' },
    ],
    thu: [
      { id: 'thu1', type: 'meeting', text: '10:30 AM — Clark Meeting (Golden Gate / Pares)' },
      { id: 'thu2', text: 'Tito AI: Produce Fri inspiration reel (drops Fri 7:00 PM PHT)' },
      { id: 'thu3', text: 'Tito AI: Content planning — script next week\'s 3 slots' },
      { id: 'thu4', text: 'Tito AI: Channel check — comments, DMs, follower growth, analytics' },
      { id: 'thu5', text: 'Cobrinha: Produce Fri LA post — Adults Lifestyle (D-2 · drops Sat 11 AM)' },
      { id: 'thu6', text: 'Angelcare Social: Produce Fri slot — Santa Clara (D-2 · drops Sat 1 AM)' },
      { id: 'thu7', text: 'Cobrinha D-0: verify + schedule Thu LA post (6:00 PM PST)' },
      { id: 'thu8', text: 'Pares: follow up Clark meeting action items + Zoho review' },
    ],
    fri: [
      { id: 'fri1', text: 'Cobrinha: Produce Sat LA post — Kids Summer Camp (D-2 · drops Sun 9:30 AM)' },
      { id: 'fri2', text: 'Cobrinha D-0: verify + schedule Fri LA post (8:00 PM PST)' },
      { id: 'fri3', text: 'Angelcare Social D-0: verify + schedule Fri slot (9:00 AM PST)' },
      { id: 'fri4', text: 'Tito AI: Confirm Fri inspiration went live at 7:00 PM PHT' },
      { id: 'fri5', text: 'EOW wrap-up — note completed items and carry-overs' },
      { id: 'fri6', text: 'Assign Vinz tasks for next week' },
      { id: 'fri7', text: 'Update Capacity Calendar — confirm next month pipeline' },
    ],
    sat: [
      { id: 'sat1', text: 'Tito AI: Produce Mon AI tip reel (D-2 · drops Mon 8:00 PM)' },
      { id: 'sat2', text: 'Cobrinha: Confirm Fri LA post went live (8:00 PM PST)' },
    ],
    sun: [
      { id: 'sun1', text: 'Cobrinha: Confirm Sat LA post went live (6:30 PM PST)' },
      { id: 'sun2', text: 'Tito AI: D-1 check — confirm Mon AI tip is ready to drop' },
      { id: 'sun3', text: 'Weekly prep — review upcoming week, flag content gaps' },
    ],
  },
  sprint: [
    { id: 'sp1', group: 'SGS', text: 'Set up meeting with Ben Jr. re: creatives' },
    { id: 'sp2', group: 'SGS', text: 'Finalize website go-live checklist' },
    { id: 'sp3', group: 'SGS', text: 'Get address from Mafe (US + Philippines)' },
    { id: 'sp4', group: 'SGS', text: 'Finalize merch pictures with descriptions' },
    { id: 'sp5', group: 'SGS', text: 'Identify SGS social media content plan' },
    { id: 'sp6', group: 'Pares', text: 'Finish Pares Social Media Plan — resume Jun 8 (3x/week)' },
    { id: 'sp7', group: 'Pares', text: 'Build Pares accounting & finance automation — due Jun 15' },
    { id: 'sp8', group: 'Ops', text: 'Check Vinz tasks — assess current capacity' },
    { id: 'sp9', group: 'Ops', text: 'Finalize Capacity Calendar for next month' },
    { id: 'sp10', group: 'Ops', text: 'Set Tito AI posting schedule (unlocks Vinz video edits)' },
    { id: 'sp11', group: 'Ops', text: 'Finalize Claude Products Workflow document' },
  ],
  projects: [
    { id: 'p1', name: 'Alliance Cobrinha LA', type: 'Social Media Automation', status: 'active', next: 'Weekly production' },
    { id: 'p2', name: 'Angelcare Social', type: 'Hiring Post Automation', status: 'active', next: 'Weekly production' },
    { id: 'p3', name: 'Angelcare KPI', type: 'Dashboard & Analytics', status: 'active', next: 'Weekly monitoring' },
    { id: 'p4', name: 'Tito AI (@TitoAIPH)', type: 'Content Channel', status: 'active', next: 'Every Thursday' },
    { id: 'p5', name: 'Golden Gate / Pares', type: 'Restaurant Ops', status: 'active', next: 'Thu Clark meeting' },
    { id: 'p6', name: 'Clark Daily Postings', type: 'Social Media (Vinz)', status: 'active', next: 'Daily check' },
    { id: 'p7', name: 'Pares Social Media', type: 'Social Media Plan', status: 'hold', next: 'Resumes Jun 8' },
    { id: 'p8', name: 'Pares Accounting & Finance', type: 'Claude Automation', status: 'due', next: 'Due Jun 15' },
    { id: 'p9', name: 'SGS Website', type: 'Website Launch', status: 'progress', next: 'See SGS checklist' },
    { id: 'p10', name: 'SGS Social Media', type: 'Social Media Plan', status: 'planned', next: 'After website launch' },
    { id: 'p11', name: 'Claude Products Workflow', type: 'Internal Ops', status: 'progress', next: 'Finalize doc' },
    { id: 'p12', name: 'Capacity Calendar', type: 'Internal Ops', status: 'progress', next: 'Finalize this week' },
  ]
};

const DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const STATUS_MAP = {
  active:   ['Active', 'badge-active'],
  progress: ['In Progress', 'badge-progress'],
  planned:  ['Planned', 'badge-planned'],
  hold:     ['On Hold', 'badge-hold'],
  due:      ['Due Soon', 'badge-due'],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let completions = {};
let currentView = 'daily';
let currentDay = DAY_KEYS[new Date().getDay()];
let db = null;
let unsubscribe = null;

function todayStr() {
  return new Date().toISOString().slice(0, 10); // "2026-06-01"
}
function currentWeek() {
  const d = new Date();
  const jan4 = new Date(d.getFullYear(), 0, 4);
  const w = Math.ceil(((d - jan4) / 86400000 + jan4.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(w).padStart(2, '0')}`;
}

function isActive(id, resetType) {
  const c = completions[id];
  if (!c || !c.done) return false;
  if (resetType === 'daily') return c.date === todayStr();
  if (resetType === 'weekly') return c.week === currentWeek();
  return true; // sprint: manual
}

function toggle(id, resetType) {
  const was = isActive(id, resetType);
  if (!was) {
    completions[id] = { done: true, date: todayStr(), week: currentWeek() };
  } else {
    completions[id] = { done: false };
  }
  saveState();
  render();
}

// ─── PERSISTENCE ─────────────────────────────────────────────────────────────
function saveLocal() {
  localStorage.setItem('planner-completions', JSON.stringify(completions));
}
function loadLocal() {
  try {
    completions = JSON.parse(localStorage.getItem('planner-completions') || '{}');
  } catch { completions = {}; }
}

async function saveState() {
  saveLocal();
  if (db) {
    setSyncStatus('syncing');
    try {
      const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      await setDoc(doc(db, 'planners', WORKSPACE), { completions, updatedAt: Date.now() });
      setSyncStatus('online');
    } catch { setSyncStatus('offline'); }
  }
}

function setSyncStatus(status) {
  const dot = document.getElementById('sync-indicator');
  if (dot) dot.className = `sync-dot ${status}`;
}

// ─── FIREBASE INIT ────────────────────────────────────────────────────────────
async function initFirebase() {
  if (!FIREBASE_CONFIG.apiKey) return;
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, onSnapshot } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = initializeApp(FIREBASE_CONFIG);
    db = getFirestore(app);
    setSyncStatus('syncing');
    unsubscribe = onSnapshot(doc(db, 'planners', WORKSPACE), snap => {
      if (snap.exists()) {
        const remote = snap.data().completions || {};
        // Merge: remote wins for any key it has
        completions = { ...completions, ...remote };
        saveLocal();
        render();
      }
      setSyncStatus('online');
    }, () => setSyncStatus('offline'));
  } catch (e) {
    console.warn('Firebase init failed:', e);
    setSyncStatus('offline');
  }
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function progress(ids, resetType) {
  const done = ids.filter(id => isActive(id, resetType)).length;
  return { done, total: ids.length };
}

function renderProgressBar(ids, resetType) {
  const { done, total } = progress(ids, resetType);
  if (!total) return '';
  const pct = Math.round((done / total) * 100);
  return `<div class="progress-bar-wrap">
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <span class="progress-label">${done}/${total}</span>
  </div>`;
}

function renderTask(task, resetType) {
  const done = isActive(task.id, resetType);
  const cls = ['task-item', done ? 'done' : '', task.type === 'meeting' ? 'meeting' : ''].filter(Boolean).join(' ');
  return `<div class="${cls}" onclick="window._toggle('${task.id}','${resetType}')">
    <div class="task-check"></div>
    <span class="task-text">${task.text}</span>
  </div>`;
}

function renderDaily() {
  const ids = TASKS.daily.map(t => t.id);
  return `
    <div class="section-header">Today — ${new Date().toLocaleDateString('en-PH', { weekday:'long', month:'long', day:'numeric' })}</div>
    ${renderProgressBar(ids, 'daily')}
    <div class="task-list">${TASKS.daily.map(t => renderTask(t, 'daily')).join('')}</div>
  `;
}

function renderWeekly() {
  const todayIdx = new Date().getDay();
  const dayTasks = TASKS.weekly[currentDay] || [];
  const ids = dayTasks.map(t => t.id);

  const tabs = DAY_KEYS.map((k, i) => {
    const isToday = i === todayIdx;
    const isActive = k === currentDay;
    const cls = ['day-tab', isToday ? 'today' : '', isActive ? 'active' : ''].filter(Boolean).join(' ');
    return `<button class="${cls}" onclick="window._setDay('${k}')">${DAY_LABELS[i]}</button>`;
  }).join('');

  return `
    <div class="day-tabs">${tabs}</div>
    ${renderProgressBar(ids, 'weekly')}
    <div class="task-list">
      ${dayTasks.length ? dayTasks.map(t => renderTask(t, 'weekly')).join('') : '<div class="empty">No tasks for this day.</div>'}
    </div>
    <button class="reset-btn" onclick="window._resetWeek()">Reset this week</button>
  `;
}

function renderSprint() {
  const groups = [...new Set(TASKS.sprint.map(t => t.group))];
  const ids = TASKS.sprint.map(t => t.id);
  let html = `
    <div class="section-header">Current Sprint</div>
    ${renderProgressBar(ids, 'sprint')}
  `;
  groups.forEach(g => {
    const items = TASKS.sprint.filter(t => t.group === g);
    html += `<div class="group-label">${g}</div><div class="task-list">${items.map(t => renderTask(t, 'sprint')).join('')}</div>`;
  });
  return html;
}

function renderVinz() {
  const ids = TASKS.vinz.map(t => t.id);
  return `
    <div class="section-header">Vinz — Daily Check</div>
    ${renderProgressBar(ids, 'daily')}
    <div class="task-list">${TASKS.vinz.map(t => renderTask(t, 'daily')).join('')}</div>
    <div class="section-header" style="margin-top:8px">Pending (activate when ready)</div>
    <div class="task-list">
      <div class="task-item">
        <div class="task-check" style="opacity:0.3"></div>
        <span class="task-text" style="color:var(--muted)">Tito AI video edits — waiting for posting schedule</span>
      </div>
    </div>
  `;
}

function renderProjects() {
  const cards = TASKS.projects.map(p => {
    const [label, cls] = STATUS_MAP[p.status] || ['Unknown', 'badge-planned'];
    return `<div class="project-row">
      <div>
        <div class="project-name">${p.name}</div>
        <div class="project-type">${p.type}</div>
        <div class="project-next">${p.next}</div>
      </div>
      <div class="status-badge ${cls}">${label}</div>
    </div>`;
  }).join('');
  return `
    <div class="section-header">Projects Pipeline</div>
    <div class="project-card">${cards}</div>
  `;
}

const VIEWS = { daily: renderDaily, weekly: renderWeekly, sprint: renderSprint, vinz: renderVinz, projects: renderProjects };

function render() {
  const main = document.getElementById('main');
  if (main) main.innerHTML = VIEWS[currentView]?.() || '';
}

// ─── GLOBALS (for inline onclick) ────────────────────────────────────────────
window._toggle = toggle;
window._setDay = (day) => { currentDay = day; render(); };
window._resetWeek = () => {
  const week = currentWeek();
  Object.entries(completions).forEach(([id, c]) => { if (c.week === week) completions[id] = { done: false }; });
  saveState();
  render();
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
function updateHeaderDate() {
  const el = document.getElementById('today-label');
  if (el) el.textContent = new Date().toLocaleDateString('en-PH', { weekday: 'long', month: 'short', day: 'numeric' }) + ' · PHT';
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    render();
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

loadLocal();
updateHeaderDate();
render();
initFirebase();
