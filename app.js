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
  vinz: [
    { id: 'v0', text: 'Daily messaging with Vinz' },
    { id: 'v1', text: 'Clark daily posting — next-day post prepped (1-day advance)' },
    { id: 'v2', text: 'LA Reel Edits — edit progress (slides from Cobrinha Design TG)' },
    { id: 'v3', text: 'Manila Slides — check if Coach Mark sent assets' },
    { id: 'v5', text: 'Capacity check — flag if overloaded or has open slots' },
  ],
  weekly: {
    mon: [
      { id: 'mon2', text: 'Cobrinha: Produce Tue LA post — Adults Reel (D-2 · drops Wed 10:30 AM)' },
      { id: 'mon5', text: 'Weekly priorities review — set top 3 focus items' },
      { id: 'mon6', text: 'Check pending approvals (Dani / Prof Cobrinha)' },
      { id: 'mon7', text: 'Check Telegram groups' },
      { id: 'mon8', text: 'Tito AI: Confirm Mon AI tip went live at 8:00 PM PHT' },
      { id: 'mon9', type: 'meeting', text: 'Call with Vinz — weekly catch up + one on one' },
      { id: 'mon10', text: 'Weekly prep — review upcoming week, flag content gaps' },
    ],
    tue: [
      { id: 'tue0', type: 'meeting', text: '8:00 AM — v4 Meeting' },
      { id: 'tue4', type: 'meeting', text: 'One on One with Dino — TBD / to be requested' },
      { id: 'tue1', text: 'Cobrinha D-0: verify + schedule Tue LA post (7:30 PM PST)' },
    ],
    wed: [
      { id: 'wed1', text: 'Cobrinha: Produce Thu LA post — Kids Carousel (D-2 · drops Fri 9 AM)' },
      { id: 'wed2', text: 'Tito AI: Confirm Wed demo went live at 7:00 PM PHT' },
    ],
    thu: [
      { id: 'thu1', type: 'meeting', text: '10:30 AM — Clark Meeting (Golden Gate / Pares)' },
      { id: 'thu2', text: 'Tito AI: Produce Mon AI tip reel (drops Mon 8:00 PM PHT)' },
      { id: 'thu3', text: 'Tito AI: Produce Wed demo reel (drops Wed 7:00 PM PHT)' },
      { id: 'thu4', text: 'Tito AI: Produce Fri inspiration reel (drops Fri 7:00 PM PHT)' },
      { id: 'thu9', text: 'Tito AI: Content planning — script next week\'s 3 slots' },
      { id: 'thu10', text: 'Tito AI: Channel check — comments, DMs, follower growth, analytics' },
      { id: 'thu5', text: 'Cobrinha: Produce Fri LA post — Adults Lifestyle (D-2 · drops Sat 11 AM)' },
      { id: 'thu7', text: 'Cobrinha D-0: verify + schedule Thu LA post (6:00 PM PST)' },
      { id: 'thu8', text: 'Pares: follow up Clark meeting action items + Zoho review' },
    ],
    fri: [
      { id: 'fri1', text: 'Cobrinha: Produce Sat LA post — Kids Summer Camp (D-2 · drops Sun 9:30 AM)' },
      { id: 'fri2', text: 'Cobrinha D-0: verify + schedule Fri LA post (8:00 PM PST)' },
      { id: 'fri4', text: 'Tito AI: Confirm Fri inspiration went live at 7:00 PM PHT' },
      { id: 'fri8', text: 'Friday checkpoint — review week progress' },
      { id: 'fri9', text: 'Send weekly update to Dino' },
      { id: 'fri5', text: 'EOW wrap-up — note completed items and carry-overs' },
      { id: 'fri6', text: 'Assign Vinz tasks for next week' },
      { id: 'fri7', text: 'Update Capacity Calendar — confirm next month pipeline' },
    ],
    sat: [
      { id: 'sat2', text: 'Cobrinha: Confirm Fri LA post went live (8:00 PM PST)' },
    ],
    sun: [
      { id: 'sun1', text: 'Cobrinha: Confirm Sat LA post went live (6:30 PM PST)' },
    ],
  },
  sprint: [
    { id: 'pr1', group: 'PRIORITY', text: 'SGS Website — customers can buy, pay and receive delivery' },
    { id: 'pr2', group: 'PRIORITY', text: 'BePresent Wear — set up Instagram account + content plan' },
    { id: 'sp0a', group: 'SGS', text: 'Secure PayPal login + enable 2FA' },
    { id: 'sp0b', group: 'SGS', text: 'Get owner/admin access to website (Shopify)' },
    { id: 'sp0c', group: 'SGS', text: 'Get shirt images for website (high-res)' },
    { id: 'sp0d', group: 'SGS', text: 'Upload product images + set up inventory on Shopify' },
    { id: 'sp0e', group: 'SGS', text: 'Connect PayPal as payment method on Shopify' },
    { id: 'sp0f', group: 'SGS', text: 'Set up shipping zones + delivery rates' },
    { id: 'sp0g', group: 'SGS', text: 'Test full checkout — add to cart, pay, confirm order email' },
    { id: 'sp1', group: 'SGS', text: 'Set up meeting with Ben Jr. re: creatives' },
    { id: 'sp3', group: 'SGS', text: 'Get address from Mafe (US + Philippines)' },
    { id: 'sp4', group: 'SGS', text: 'Finalize merch pictures with descriptions' },
    { id: 'sp5', group: 'SGS', text: 'Identify SGS social media content plan' },
    { id: 'sp8', group: 'Ops', text: 'Check Vinz tasks — assess current capacity' },
    { id: 'sp9', group: 'Ops', text: 'Finalize Capacity Calendar for next month' },
    { id: 'sp10', group: 'Ops', text: 'Set Tito AI posting schedule (unlocks Vinz video edits)' },
    { id: 'sp11', group: 'Ops', text: 'Finalize Claude Products Workflow document' },
  ],
  projects: [
    { id: 'p0', name: 'Social Media Automation', type: 'Main Project', status: 'active', next: 'Cobrinha · TitoAI · BePresent' },
    { id: 'p1', name: 'Alliance Cobrinha LA', type: 'Social Media Automation', status: 'active', next: 'Weekly production' },
    { id: 'p4', name: 'Tito AI (@TitoAIPH)', type: 'Content Channel', status: 'active', next: 'Every Thursday' },
    { id: 'p13', name: 'BePresent Wear', type: 'Instagram Setup', status: 'due', next: 'Setup + content plan' },
    { id: 'p9', name: 'SGS Website', type: 'Website Launch', status: 'due', next: 'PRIORITY — go live ASAP' },
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
let currentView = 'sprint';
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
    const isPriority = g === 'PRIORITY';
    const items = TASKS.sprint.filter(t => t.group === g);
    const taskHtml = items.map(t => {
      const done = isActive(t.id, 'sprint');
      const cls = ['task-item', done ? 'done' : '', isPriority ? 'priority-item' : ''].filter(Boolean).join(' ');
      return `<div class="${cls}" onclick="window._toggle('${t.id}','sprint')">
        <div class="task-check"></div>
        <span class="task-text">${t.text}</span>
      </div>`;
    }).join('');
    html += `<div class="group-label${isPriority ? ' priority' : ''}">${g}</div><div class="task-list">${taskHtml}</div>`;
  });
  return html;
}

function renderVinz() {
  const ids = TASKS.vinz.map(t => t.id);
  return `
    <div class="section-header">Vinz — Daily Check</div>
    ${renderProgressBar(ids, 'daily')}
    <div class="task-list">${TASKS.vinz.map(t => renderTask(t, 'daily')).join('')}</div>
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

const VIEWS = { weekly: renderWeekly, sprint: renderSprint, vinz: renderVinz, projects: renderProjects };

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
