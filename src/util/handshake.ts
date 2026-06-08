import { SITE } from "../consts"

export function render(
  type: "NEXT" | "PREV",
  ringId: string,
  currentSite: string,
  targetSite: { name: string; url: string },
) {
  const title = `REGISTRY_REDIRECT`

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="1.5;url=${targetSite.url}">
    <title>${title}</title>
    <style>
        :root {
            --bg: #050505;
            --accent: #00ffff;
            --border: #1a1a1a;
            --text: #a0a0a0;
            --text-bright: #ffffff;
            --font-mono: "Geist Mono", monospace;
        }

        body {
            background: var(--bg);
            color: var(--text);
            font-family: var(--font-mono);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-size: 12px;
            letter-spacing: -0.01em;
            -webkit-font-smoothing: antialiased;
        }

        .registry-box {
            border: 1px solid var(--border);
            padding: 2.5rem;
            width: 320px;
            position: relative;
        }

        .registry-header {
            color: var(--text-bright);
            font-weight: 500;
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            letter-spacing: 0.05em;
        }

        .entry {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 1.2rem;
        }

        .label {
            font-size: 10px;
            color: var(--text);
            opacity: 0.4;
            text-transform: uppercase;
        }

        .value {
            color: var(--text-bright);
            font-size: 13px;
        }

        .progress-bar {
            height: 1px;
            background: var(--border);
            width: 100%;
            margin-top: 2rem;
            position: relative;
            overflow: hidden;
        }

        .progress-fill {
            position: absolute;
            height: 100%;
            background: var(--accent);
            width: 0%;
            animation: load 1.5s ease-in-out forwards;
        }

        @keyframes load {
            0% { width: 0%; }
            100% { width: 100%; }
        }

        .target-node {
            color: var(--accent);
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="registry-box">
        <div class="registry-header">
            <span>REGISTRY_ENTRY</span>
            <span style="opacity: 0.3">#${Math.floor(Math.random() * 9000) + 1000}</span>
        </div>
        
        <div class="entry">
            <span class="label">Federation_Ring</span>
            <span class="value">${ringId}</span>
        </div>

        <div class="entry">
            <span class="label">Route_Direction</span>
            <span class="value">${type}</span>
        </div>

        <div class="entry">
            <span class="label">Target_Node</span>
            <span class="value target-node">${targetSite.name}</span>
        </div>

        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    </div>
</body>
</html>
  `.trim()
}
