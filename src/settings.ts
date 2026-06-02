import { App, PluginSettingTab, Setting } from 'obsidian';
import TodoAggregatorPlugin from './main';

export interface TodoAggregatorSettings {
	targetFile: string;
	excludeFolders: string;
}

export const DEFAULT_SETTINGS: TodoAggregatorSettings = {
	targetFile: 'Todo Dashboard.md',
	excludeFolders: ''
};

export class TodoAggregatorSettingsTab extends PluginSettingTab {
	plugin: TodoAggregatorPlugin;

	constructor(app: App, plugin: TodoAggregatorPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Target file')
			.setDesc('Path to the aggregated todo file (e.g., "Todos/Dashboard.md")')
			.addText(text => text
				.setPlaceholder('Todo Dashboard.md')
				.setValue(this.plugin.settings.targetFile)
				.onChange(async (value) => {
					this.plugin.settings.targetFile = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Exclude folders')
			.setDesc('Comma-separated list of folders to exclude (e.g., "templates,archive")')
			.addText(text => text
				.setPlaceholder('templates,archive')
				.setValue(this.plugin.settings.excludeFolders)
				.onChange(async (value) => {
					this.plugin.settings.excludeFolders = value;
					await this.plugin.saveSettings();
				}));
	}
}
