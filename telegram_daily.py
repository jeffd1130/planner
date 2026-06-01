"""
Daily 7 AM PHT briefing — sent via Telegram bot.
Run by GitHub Actions cron (23:00 UTC = 7:00 AM PHT).
"""
import os, datetime, urllib.request, urllib.parse, json

TOKEN   = os.environ["TELEGRAM_BOT_TOKEN"]
CHAT_ID = os.environ["TELEGRAM_CHAT_ID"]

# ── Today in PHT (UTC+8) ───────────────────────────────────────────────
now       = datetime.datetime.utcnow() + datetime.timedelta(hours=8)
day_idx   = now.weekday()           # 0=Mon … 6=Sun
day_names = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
day_keys  = ["mon","tue","wed","thu","fri","sat","sun"]
today     = day_keys[day_idx]
date_str  = now.strftime("%B %d, %Y")

# ── Task data ──────────────────────────────────────────────────────────
DAILY = [
    "Review Notion dashboards",
    "Check messages / DMs",
]

VINZ = [
    "Clark daily posting — next-day post prepped (1-day advance)",
    "LA Reel Edits — check progress (slides from Cobrinha Design TG)",
    "Manila Slides — check if Coach Mark sent assets",
    "IBJJF World Championship — reposts done + added to story",
    "Capacity check — flag if overloaded or has open slots",
]

WEEKLY = {
    "mon": {
        "meetings": ["8:00 AM — v4 Meeting"],
        "tasks": [
            "Cobrinha: Produce Tue LA post — Adults Reel (D-2, drops Wed 10:30 AM PHT)",
            "Tito AI: Produce Wed demo reel (D-2, drops Wed 7:00 PM PHT)",
            "Weekly priorities review — set top 3 focus items",
            "Check pending approvals (Dani / Prof Cobrinha)",
        ],
    },
    "tue": {
        "meetings": [],
        "tasks": [
            "Cobrinha D-0: verify + schedule Tue LA post (7:30 PM PST)",
            "Follow up on pending Vinz deliverables",
        ],
    },
    "wed": {
        "meetings": [],
        "tasks": [
            "Cobrinha: Produce Thu LA post — Kids Carousel (D-2, drops Fri 9 AM PHT)",
            "Tito AI: Confirm Wed demo went live at 7:00 PM PHT",
        ],
    },
    "thu": {
        "meetings": ["10:30 AM — Clark Meeting (Golden Gate / Pares)"],
        "tasks": [
            "Tito AI: Produce Fri inspiration reel (drops Fri 7:00 PM PHT)",
            "Tito AI: Content planning — script next week's 3 slots",
            "Tito AI: Channel check — comments, DMs, follower growth, analytics",
            "Cobrinha: Produce Fri LA post — Adults Lifestyle (D-2, drops Sat 11 AM PHT)",
            "Cobrinha D-0: verify + schedule Thu LA post (6:00 PM PST / 9:00 AM Fri PHT)",
            "Pares: follow up Clark meeting action items + Zoho review",
        ],
    },
    "fri": {
        "meetings": [],
        "tasks": [
            "Cobrinha: Produce Sat LA post — Kids Summer Camp (D-2, drops Sun 9:30 AM PHT)",
            "Cobrinha D-0: verify + schedule Fri LA post (8:00 PM PST)",
            "Tito AI: Confirm Fri inspiration went live at 7:00 PM PHT",
            "EOW wrap-up — note completed items and carry-overs",
            "Assign Vinz tasks for next week",
            "Update Capacity Calendar",
        ],
    },
    "sat": {
        "meetings": [],
        "tasks": [
            "Tito AI: Produce Mon AI tip reel (D-2, drops Mon 8:00 PM PHT)",
            "Cobrinha: Confirm Fri LA post went live (8:00 PM PST)",
        ],
    },
    "sun": {
        "meetings": [],
        "tasks": [
            "Cobrinha: Confirm Sat LA post went live (6:30 PM PST)",
            "Tito AI: D-1 check — confirm Mon AI tip is ready to drop",
            "Weekly prep — review upcoming week, flag content gaps",
        ],
    },
}

SPRINT_GROUPS = {
    "SGS": [
        "Set up meeting with Ben Jr. re: creatives",
        "Finalize website go-live checklist",
        "Get address from Mafe (US + Philippines)",
        "Finalize merch pictures with descriptions",
        "Identify SGS social media content plan",
    ],
    "Pares": [
        "Finish Pares Social Media Plan — resume Jun 8 (3x/week)",
        "Build Pares accounting & finance automation — due Jun 15",
    ],
    "Ops": [
        "Check Vinz tasks — assess current capacity",
        "Finalize Capacity Calendar for next month",
        "Set Tito AI posting schedule (unlocks Vinz video edits)",
    ],
}

# ── Build message ──────────────────────────────────────────────────────
day_data = WEEKLY[today]
lines = []

lines.append(f"<b>Good morning, Jeff!</b>")
lines.append(f"<i>{day_names[day_idx]}, {date_str}  ·  7:00 AM PHT</i>")
lines.append("")

# Meetings
if day_data["meetings"]:
    lines.append("<b>MEETINGS</b>")
    for m in day_data["meetings"]:
        lines.append(f"  • {m}")
    lines.append("")

# Daily tasks
lines.append("<b>DAILY</b>")
for t in DAILY:
    lines.append(f"  • {t}")
lines.append("")

# Day-specific tasks
if day_data["tasks"]:
    lines.append(f"<b>TODAY — {day_names[day_idx].upper()}</b>")
    for t in day_data["tasks"]:
        lines.append(f"  • {t}")
    lines.append("")

# Vinz check
lines.append("<b>VINZ CHECK</b>")
for v in VINZ:
    lines.append(f"  • {v}")
lines.append("")

# Sprint summary (group counts only — open app for details)
lines.append("<b>SPRINT ITEMS</b>")
total = sum(len(v) for v in SPRINT_GROUPS.values())
for group, items in SPRINT_GROUPS.items():
    lines.append(f"  • {group}: {len(items)} items")
lines.append(f"  Open planner app to update status.")
lines.append("")
lines.append("https://jeffd1130.github.io/planner/")

message = "\n".join(lines)

# ── Send ───────────────────────────────────────────────────────────────
payload = json.dumps({
    "chat_id": CHAT_ID,
    "text": message,
    "parse_mode": "HTML",
    "disable_web_page_preview": True,
}).encode()

req = urllib.request.Request(
    f"https://api.telegram.org/bot{TOKEN}/sendMessage",
    data=payload,
    headers={"Content-Type": "application/json"},
)
with urllib.request.urlopen(req) as r:
    result = json.loads(r.read())
    if result.get("ok"):
        print(f"Sent daily briefing for {day_names[day_idx]}, {date_str}")
    else:
        print(f"Error: {result}")
        exit(1)
