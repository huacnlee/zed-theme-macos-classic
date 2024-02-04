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

![SCR-20240204-edk](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/af411d67-0679-4458-a0af-86ba3ed6dc32)

### Dark

![SCR-20240204-edr](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/cb763f4a-8871-497f-94a3-2399e6c8fce7)

### Dark2

![SCR-20240204-edx](https://github.com/huacnlee/zed-theme-macos-classic/assets/5518/3ae356da-3050-4a59-ba21-6fa32443631a)

## Development

Export theme from VS Code.

```bash
$ cargo run -p theme_importer ~/.vscode/extensions/huacnlee.theme-macos-classic-1.7.1/theme/macOS-classic.json > light.json
```

## License

MIT
