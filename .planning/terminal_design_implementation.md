# Implementation Plan: Terminal Style Portfolio Design

Change the portfolio template to a modern, premium command-line terminal aesthetic.

## Objective
Redesign the portfolio to look and feel like a terminal/CLI, while maintaining professional readability and responsiveness.

## Design Concept
- **Color Palette**: 
  - Background: Deep Black/Gray (#0a0a0a)
  - Text: Matrix Green (#00ff41) for commands, Soft White (#e0e0e0) for content.
  - Accents: Cyberpunk Blue or Neon Purple.
- **Typography**: Monospaced fonts (e.g., 'Fira Code', 'Courier New', or 'JetBrains Mono').
- **UI Elements**: 
  - A terminal window wrapper with mac-style controls (red, yellow, green buttons).
  - Command prompts (e.g., `guest@marifyahya:~$`).
  - Scanline or flicker effects (subtle).
  - Interactive "commands" that reveal sections.

## Technical Steps
1.  **Full-Screen CSS**: 
    - Adjust `.terminal-container` and `.terminal-window` to take 100% width and height.
    - Remove borders and border-radius from the terminal window.
2.  **Remove Controls**:
    - Remove the `.terminal-controls` div from `index.html`.
    - Adjust `.terminal-header` to be a simple top bar or remove it if not needed.
3.  **Layout Refinements**:
    - Remove centering and max-width to allow a full-width terminal experience.
    - Maintain consistent horizontal padding for readability.
    - Align the language toggle buttons horizontally with the navigation menu.

## Files to Modify
- `index.html`: Structure adjustments.
- `css/styles.css`: Complete restyling.
- `js/script.js`: (Optional) Add typing effects or interactive commands.
