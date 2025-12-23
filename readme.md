# Todo Aggregator

**A focused task aggregation plugin for Obsidian.**

Todo Aggregator scans your entire Obsidian vault and collects all unchecked `- [ ]` tasks into a single note. 

Instead of hunting through dozens of files, you get one centralized view of everything that still needs to be done.



## Key Features

- **Vault-wide scanning**  
  Aggregates unchecked `- [ ]` tasks from all Markdown files in your vault.

- **Centralized view**  
  Writes all pending tasks into a single note, grouped by source file.

- **File-based grouping**  
  Tasks are organized under their originating notes for context and traceability.

- **Smart caching**  
  Avoids reprocessing unchanged files for faster subsequent runs.

- **Change-aware updates**  
  Only rescans files that have been modified since the last aggregation.

- **Folder exclusions**  
  Skip folders like `archive/`, `templates/`, or any path you choose.

- **Safe by design**  
  Automatically ignores the dashboard file itself to prevent recursive aggregation.


## Usage

You can run Todo Aggregator in two ways:

- Click the **Aggregate Todos** ribbon icon
- Open the Command Palette and run **Aggregate Todos**

Each run scans eligible files and updates the note with all unchecked tasks.


## Output Format

Tasks are grouped by file using a clean, readable structure:

```markdown
## 📄 [[ProjectPlan.md]]
- [ ] Finalize architecture
- [ ] Write documentation

## 📄 [[MeetingNotes.md]]
- [ ] Follow up with design team
```



## Settings

Available in the plugin settings panel.

- **Dashboard file path**  
  Location where aggregated todos are written.  
  _Example:_ `Todos/Dashboard.md`

- **Excluded folders**  
  Comma-separated list of folder names or paths to ignore.  
  _Example:_ `archive,templates,drafts`

> The dashboard file is always excluded automatically.


## Installation

> **Note:** Todo Aggregator is not yet listed in the Obsidian Community Plugins directory.

### Manual Installation

1. Download the latest release from the GitHub Releases page.
2. Extract the plugin files into:
   ```
   .obsidian/plugins/todo-aggregator/
   ```
3. Reload Obsidian and enable **Todo Aggregator** from the plugins settings.

---

## Development

If you want to contribute or customize the plugin:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development mode:
   ```bash
   npm run dev
   ```


## About Siran

**Todo Aggregator** is built by **Siran**.

Siran develops focused tools for productivity, organization, and intentional digital workflows - ranging from open-source utilities to premium tools.

Learn more at https://siran.app

---

**License:** MIT
