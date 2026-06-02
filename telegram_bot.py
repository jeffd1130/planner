"
Telegram bot — remote control for Jeff's Planner.
Runs continuously on Mac (long polling). Responds to commands instantly.

Commands:
  /daily    — today's full briefing
  /week     — this week's schedule
  /mon /tue /wed /thu /fri /sat /sun — specific day
  /vinz     — Vinz daily checklist
  /sprint   — current action items
  /projects — project pipeline
  /help     — command list
"
import os, sys, time, datetime, urllib.request, urllib.parse, json

TOKEN   = os.environ.get("TELEGRAM_BOT_TOKEN", "8982254096:AAHkeiVliPX1CD8yemDIJPoYXepwJgHAakE")
CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "8325608814")

# ── Task data ──────────────────────────────────────────────────────────
DAILY_TASKS = [
    "Review GitHub dashboard",
    "Check messages / DMs",
]

VINZ_TASKS = [
    "LA Reel Edits — check progress (slides from Cobrinha Design TG)",
    "Manila Slides — check if Coach Mark sent assets",
    "Capacity check — flag if overloaded or has open slots",
]

WEEKLY = {
    "mon": {
        "label": "Monday",
        "meetings": ["8:00 AM — v4 Meeting"],
        "tasks": [
            "Cobrinha: Produce Tue LA post — Adults Reel (D-2, drops Wed 10:30 AM)",
            "Tito AI: Produce Wed demo reel (D-2, drops Wed 7:00 PM)",
            "Weekly priorities review — set top 3 focus items",
            "Check pending approvals (Dani / Prof Cobrinha)",
        ],
    },
    "tue": {
        "label": "Tuesday",
        "meetings": [],
        "tasks": [
            "Cobrinha D-0: verify + schedule Tue LA post (7:30 PM PST)",
            "Follow up on pending Vinz deliverables",
        ],
    },
    "wed": {
        "label": "Wednesday",
        "meetings": [],
        "tasks": [
            "Cobrinha: Produce Thu LA post — Kids Carousel (D-2, drops Fri 9 AM)",
            "Tito AI: Confirm Wed demo went live at 7:00 PM PHT",
        ],
    },
    "thu": {
        "label": "Thursday",
        "tasks": [
            "Tito AI: Produce Fri inspiration reel (drops Fri 7:00 PM PHT)",
            "Tito AI: Content planning — script next week's 3 slots",
            "Tito AI: Channel check — comments, DMs, follower growth, analytics",
            "Cobrinha: Produce Fri LA post — Adults Lifestyle (D-2, drops Sat 11 AM)",
            "Cobrinha D-0: verify + schedule Thu LA post (6:00 PM PST)",
        ],
    },
    "fri": {
        "label": "Friday",
        "meetings": [],
        "tasks": [
            "Cobrinha: Produce Sat LA post — Kids Summer Camp (D-2, drops Sun 9:30 AM)",
            "Cobrinha D-0: verify + schedule Fri LA post (8:00 PM PST)",
            "Tito AI: Confirm Fri inspiration went live at 7:00 PM PHT",
            "EOW wrap-up — note completed items and carry-overs",
            "Assign Vinz tasks for next week",
            "Update Capacity Calendar",
        ],
    },
    "sat": {
        "label": "Saturday",
        "meetings": [],
        "tasks": [
            "Tito AI: Produce Mon AI tip reel (D-2, drops Mon 8:00 PM)",
            "Cobrinha: Confirm Fri LA post went live (8:00 PM PST)",
        ],
    },
    "sun": {
        "label": "Sunday",
        "meetings": [],
        "tasks": [
            "Cobrinha: Confirm Sat LA post went live (6:30 PM PST)",
            "Tito AI: D-1 check — confirm Mon AI tip is ready to drop",
            "Weekly prep — review upcoming week, flag content gaps",
        ],
    },
}

SPRINT = {
    "SGS": [
        "Set up meeting with Ben Jr. re: creatives",
        "Finalize website go-live checklist",
        "Get address from Mafe (US + Philippines)",
        "Finalize merch pictures with descriptions",
        "Identify SGS social media content plan",
    ],    "Ops": [
        "Check Vinz tasks — assess current capacity",
        "Finalize Capacity Calendar for next month",
        "Set Tito AI posting schedule (unlocks Vinz video edits)",
    ],
}

PROJECTS = [
    ("Alliance Cobrinha LA",       "Social Media",   "Active"),
    ("Tito AI (@TitoAIPH)",        "Content Channel","Active"),
    ("SGS Website",                "Website Launch", "In Progress"),
    ("SGS Social Media",           "Social Plan",    "Planned"),
    ("Claude Products Workflow",   "Internal Ops",   "In Progress"),
    ("Capacity Calendar",          "Internal Ops",   "In Progress"),
]

DAY_ORDER = ["mon","tue","wed","thu","fri","sat","sun"]

def pht_now():
    return datetime.datetime.utcnow() + datetime.timedelta(hours=8)

def today_key():
    return DAY_ORDER[pht_now().weekday()]

# ── Message builders ───────────────────────────────────────────────────
def fmt_daily(day_key=None):
    if day_key is None:
        day_key = today_key()
    now = pht_now()
    d = WEEKLY[day_key]
    lines = [
        f"<b>Good morning, Jeff!</b>",
        f"<i>{d['label']}, {now.strftime('%B %d, %Y')}  ·  PHT</i>",
    ]
    if d["meetings"]:
        lines.append("<b>MEETINGS</b>")
        for m in d["meetings"]: lines.append(f"  • {m}")
        lines.append("")
    lines.append("<b>DAILY</b>")
    for t in DAILY_TASKS: lines.append(f"  • {t}")
    lines.append("")
    lines.append(f"<b>TODAY — {d['label'].upper()}</b>")
    for t in d["tasks"]: lines.append(f"  • {t}")
    lines.append("")
    lines.append("<b>VINZ CHECK</b>")
    for v in VINZ_TASKS: lines.append(f"  • {v}")
    return "\n".join(lines)

def fmt_week():
    now = pht_now()
    lines = [f"<b>This Week — {now.strftime('%B %d, %Y')}</b>", ""]
    for k in DAY_ORDER:
        d = WEEKLY[k]
        marker = " (today)" if k == today_key() else
        lines.append(f"<b>{d['label'].upper()}{marker}</b>")
        if d["meetings"]:
            for m in d["meetings"]: lines.append(f"  [{m}]")
        for t in d["tasks"]: lines.append(f"  • {t}")
        lines.append("")
    return "\n".join(lines)

def fmt_day(day_key):
    d = WEEKLY[day_key]
    lines = [f"<b>{d['label'].upper()}</b>", ""]
    if d["meetings"]:
        lines.append("<b>Meetings</b>")
        for m in d["meetings"]: lines.append(f"  • {m}")
        lines.append("")
    lines.append("<b>Tasks</b>")
    for t in d["tasks"]: lines.append(f"  • {t}")
    return "\n".join(lines)

def fmt_vinz():
    lines = ["<b>VINZ DAILY CHECKLIST</b>", ""]
    for i, v in enumerate(VINZ_TASKS, 1):
        lines.append(f"{i}. {v}")
    lines += ["", "<i>Pending: Tito AI video edits (waiting for posting schedule)</i>"]
    return "\n".join(lines)

def fmt_sprint():
    lines = ["<b>CURRENT SPRINT</b>", ""]
    for group, items in SPRINT.items():
        lines.append(f"<b>{group}</b>")
        for item in items: lines.append(f"  • {item}")
        lines.append("")
    return "\n".join(lines)

def fmt_projects():
    lines = ["<b>PROJECTS PIPELINE</b>", ""]
    for name, ptype, status in PROJECTS:
        lines.append(f"• <b>{name}</b>  <i>{status}</i>")
        lines.append(f"  {ptype}")
    return "\n".join(lines)

def fmt_help():
    return """/daily — today's full briefing
/week — full week schedule
/mon /tue /wed /thu /fri /sat /sun — specific day
/vinz — Vinz daily checklist
/sprint — current action items
/projects — project pipeline
/help — this list

App: https://jeffd1130.github.io/planner/"

COMMANDS = {
    "/start":    lambda: fmt_help(),
    "/help":     lambda: fmt_help(),
    "/daily":    lambda: fmt_daily(),
    "/week":     lambda: fmt_week(),
    "/vinz":     lambda: fmt_vinz(),
    "/sprint":   lambda: fmt_sprint(),
    "/projects": lambda: fmt_projects(),
    "/mon": lambda: fmt_day("mon"),
    "/tue": lambda: fmt_day("tue"),
    "/wed": lambda: fmt_day("wed"),
    "/thu": lambda: fmt_day("thu"),
    "/fri": lambda: fmt_day("fri"),
    "/sat": lambda: fmt_day("sat"),
    "/sun": lambda: fmt_day("sun"),
}

# ── Telegram API ───────────────────────────────────────────────────────
def api(method, **params):
    payload = json.dumps(params).encode()
    req = urllib.request.Request(
        f"https://api.telegram.org/bot{TOKEN}/{method}",
        data=payload,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=35) as r:
        return json.loads(r.read())

def send(text):
    try:
        api("sendMessage", chat_id=CHAT_ID, text=text, parse_mode="HTML",
            disable_web_page_preview=True)
    except Exception as e:
        print(f"Send error: {e}")

# ── Main loop ──────────────────────────────────────────────────────────
def run():
    print(f"Bot running. Chat ID: {CHAT_ID}")
    send("Planner bot is online. Send /help for commands.")
    offset = None
    while True:
        try:
            params = {"timeout": 30, "allowed_updates": ["message"]}
            if offset: params["offset"] = offset
            resp = api("getUpdates", **params)
            for update in resp.get("result", []):
                offset = update["update_id"] + 1
                msg = update.get("message", {})
                text = msg.get("text", "").strip()
                chat = str(msg.get("chat", {}).get("id", ""))
                if chat != CHAT_ID:
                    continue
                cmd = text.split()[0].lower() if text else
                if cmd in COMMANDS:
                    send(COMMANDS[cmd]())
                elif text:
                    send("Unknown command. Send /help for the list.")
        except KeyboardInterrupt:
            print("Bot stopped.")
            sys.exit(0)
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(5)

if __name__ == "__main__":
    run()
