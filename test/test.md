# macOS Classic Theme for Zed

A macOS native style theme for [Zed](https://zed.dev), let it same like native app in macOS.

See also: [macOS Classic Theme for VS Code](https://marketplace.visualstudio.com/items?itemName=huacnlee.theme-macos-classic)

## Features

- Light and Dark mode
- macOS native style

## Usage

Setup auto switch theme in light and dark mode based on the system's appearance.

Open your Zed user settings.json: `~/.config/zed/settings.json`, and add this config:

```json
{
  "theme": {
    "mode": "system",
    "light": "macOS Classic Light",
    "dark": "macOS Classic Dark"
  }
}
```
