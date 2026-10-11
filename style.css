* {
  box-sizing: border-box;
}

:root {
  --bg: #070b12;
  --panel: #101826;
  --panel-2: #172333;
  --line: rgba(255,255,255,0.09);
  --text: #edf4ff;
  --muted: #9fb5d1;
  --accent: #5ad0ff;
  --accent-2: #7ef0c7;
  --danger: #ff6a6a;
  --warning: #ffd166;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #060912, #0b1220);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.app-shell {
  width: min(1200px, 100%);
  height: min(90vh, 820px);
  background: rgba(10, 16, 24, 0.9);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 280px 1fr;
  box-shadow: 0 30px 80px rgba(0,0,0,0.45);
}

.sidebar {
  background: linear-gradient(180deg, #0b1220, #101a2b);
  border-right: 1px solid var(--line);
  padding: 22px 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 26px;
}

.logo {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #051013;
  font-weight: 900;
  font-size: 24px;
}

.brand h1 {
  margin: 0;
  font-size: 1.2rem;
}

.brand span {
  color: var(--muted);
  font-size: 0.8rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-btn {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  text-align: left;
  font-weight: 700;
  cursor: pointer;
}

.nav-btn.active {
  background: linear-gradient(90deg, rgba(90, 208, 255, 0.16), rgba(126, 240, 199, 0.08));
  border-color: rgba(90, 208, 255, 0.45);
}

.mini-panel {
  margin-top: 30px;
  padding: 16px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
}

.mini-panel h2 {
  margin: 0 0 14px;
  font-size: 1rem;
}

.status-row {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  color: var(--muted);
}

.status-row strong {
  color: var(--text);
}

.main-panel {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(15,22,34,0.9), rgba(11,17,25,1));
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid var(--line);
}

.topbar h2 {
  margin: 4px 0 0;
}

.eyebrow {
  margin: 0;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

#newChatBtn,
#sendBtn,
#analyzeImageBtn,
#analyzeSiteBtn {
  border: none;
  border-radius: 12px;
  color: #041318;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  font-weight: 800;
  cursor: pointer;
}

#newChatBtn {
  padding: 10px 16px;
}

.chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.message {
  max-width: 76%;
  padding: 12px 14px;
  border-radius: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.message.user {
  margin-left: auto;
  background: linear-gradient(135deg, rgba(90,208,255,0.18), rgba(126,240,199,0.1));
  border: 1px solid rgba(90,208,255,0.26);
}

.message.bot {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
}

.composer {
  display: flex;
  gap: 12px;
  padding: 18px 22px 22px;
  border-top: 1px solid var(--line);
}

#userInput,
#imageUrl,
#siteUrl {
  flex: 1;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
}

#sendBtn {
  padding: 0 22px;
}

.extra-tools {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 0 22px 22px;
}

.tool-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tool-card label {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

#analyzeImageBtn,
#analyzeSiteBtn {
  padding: 12px 14px;
}

@media (max-width: 720px) {
  .app-shell {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100vh;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .extra-tools {
    grid-template-columns: 1fr;
  }

  .message {
    max-width: 88%;
  }
}
