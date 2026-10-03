module.exports = {
  "title": "Agentic OS Lab",
  "url": "https://github.com/AgenticOSLab/agenticoslab-docs",
  "src": "docmd",
  "out": "dist",
  "engine": "js",
  "layout": {
    "spa": true,
    "header": {
      "enabled": true
    },
    "sidebar": {
      "collapsible": true,
      "defaultCollapsed": false
    },
    "optionsMenu": {
      "position": "sidebar-top",
      "components": {
        "search": true,
        "themeSwitch": true
      }
    },
    "footer": {
      "style": "minimal",
      "content": "© 2026 Agentic OS Lab.",
      "branding": true
    }
  },
  "theme": {
    "name": "default",
    "appearance": "system",
    "codeHighlight": true
  },
  "minify": true,
  "autoTitleFromH1": true,
  "copyCode": true,
  "pageNavigation": true,
  "navigation": [
    {
      "title": "Введение",
      "path": "/",
      "icon": "zap"
    },
    {
      "title": "Agentic OS",
      "path": "/agenticos"
    },
    {
      "title": "Agent Pi",
      "path": "/pi"
    },
    {
      "title": "GitHub",
      "path": "https://github.com/AgenticOSLab/agenticoslab-docs",
      "icon": "github",
      "external": true
    }
  ],
  "plugins": {
    // "ai": {
    //   "assistant": true,
    //   "projectId": ""
    // },
    "git": {
      "commitHistory": true,
      "maxCommits": 5
    },
    "seo": {
      "defaultDescription": "Agentic OS Lab Documentation"
    }
  }
}