# macOS Classic Theme for Zed

[![Zed Extension](https://img.shields.io/badge/-Zed_Extension-blue?style=flat&logo=zedindustries&logoColor=%23FFFFFF&logoSize=auto&labelColor=%23111111&color=%23084CCF)](https://zed.dev/extensions/macos-classic)

A macOS native style theme for [Zed](https://zed.dev), let it same like native app in macOS.

## Screenshot

### Light

![SCR-20240204-edk](https://github.com/user-attachments/assets/1db96b6e-5da6-4979-aee2-d3ee743fcc74)

### Dark

![SCR-20240204-edr](https://github.com/user-attachments/assets/d87bea56-aa6d-4c86-acfc-87f91624f8a7)

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

## Other Tools Themes

- [Zed Theme](https://github.com/huacnlee/zed-theme-macos-classic)
- [VS Code Theme](https://github.com/huacnlee/vscode-macos-classic.theme)
- [Warp Theme](https://github.com/huacnlee/warp-theme-macos-classic)

## License

MIT
