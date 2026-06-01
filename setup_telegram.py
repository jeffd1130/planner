"""
Run this ONCE to get your Telegram chat ID.
Steps:
  1. Open Telegram → search for your bot → send any message (e.g. "hello")
  2. Run: python3 setup_telegram.py
  3. Copy the chat_id printed below
  4. Add it as a GitHub Secret named TELEGRAM_CHAT_ID
"""
import urllib.request, json

TOKEN = "8982254096:AAHkeiVliPX1CD8yemDIJPoYXepwJgHAakE"

url = f"https://api.telegram.org/bot{TOKEN}/getUpdates"
with urllib.request.urlopen(url) as r:
    data = json.loads(r.read())

if not data.get("result"):
    print("No messages found. Send any message to your bot first, then re-run.")
else:
    msg = data["result"][-1]["message"]
    print(f"\nYour chat ID: {msg['chat']['id']}")
    print(f"From: {msg['chat'].get('first_name', '')} {msg['chat'].get('last_name', '')}")
    print(f"\nAdd this to GitHub Secrets as: TELEGRAM_CHAT_ID")
