# macOS Classic Theme for Zed

A macOS native style theme for [Zed](https://zed.dev), let it same like native app in macOS.

See also: [macOS Classic Theme for VS Code](https://marketplace.visualstudio.com/items?itemName=huacnlee.theme-macos-classic)

## Installation

```bash
curl -sSL https://raw.githubusercontent.com/huacnlee/zed-theme-macos-classic/main/install | bash
```

Or manually download [macos-classic.json](https://raw.githubusercontent.com/huacnlee/zed-theme-macos-classic/main/macos-classic.json) and put it into `~/.config/zed/themes/` folder.

## Screenshot

### Light

![SCR-20240129-ej7](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/ae002997-b346-49ec-936e-ee60e8403a8b)

### Dark

![SCR-20240129-eiy](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/c99b05b7-f33d-42a8-a4c4-22030fdbf2e1)

### Dark2

![SCR-20240129-ejd](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/e511146e-755b-43c5-a1b0-5a42361e9304)

## Development

Export theme from VS Code.

```bash
$ cargo run -p theme_importer ~/.vscode/extensions/huacnlee.theme-macos-classic-1.7.1/theme/macOS-classic.json > light.json
```

## License

MIT
