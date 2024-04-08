import type { Meta, StoryObj } from "@storybook/web-components";
import { fn } from "@storybook/test";
import { html } from "lit";
import { Menu, createContextMenu } from "../components/menu";
import "@phosphor-icons/webcomponents/PhArchive";
import "@phosphor-icons/webcomponents/PhArrowSquareUpRight";
import "@phosphor-icons/webcomponents/PhFileText";
import "@phosphor-icons/webcomponents/PhFolder";
import "@phosphor-icons/webcomponents/PhImage";
import "@phosphor-icons/webcomponents/PhPresentationChart";
import "@phosphor-icons/webcomponents/PhTable";

const meta = {
  title: "Components/Menu",
  tags: ["autodocs"],
  component: "su-menu",
  argTypes: {
    slot: { control: "text" },
    bar: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<Menu & { onClick: Function }>;

export default meta;
type Story = StoryObj<Menu & { onClick: Function }>;

export const Default: Story = {
  args: {
    bar: true,
    disabled: false,
    slot: "File",
  },
  render: ({ bar, slot, disabled, onClick, ...args }) => {
    void args;
    return html`\
<div style="min-height: 700px;">
  <su-menu ?bar=${bar} ?disabled=${disabled} @click=${onClick}>
    <su-menu-item ?bar=${bar}>
      <span>${slot}</span>
      <su-menu slot="submenu">
        <su-menu-item>New Text File</su-menu-item>
        <su-menu-item>New File...</su-menu-item>
        <su-menu-item>New Window</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Open File...<small slot="extra">Ctrl+O</small></su-menu-item>
        <su-menu-item>Open Folder...</su-menu-item>
        <su-menu-item>Open Workspace from File...</su-menu-item>
        <su-menu-item>
          <span>Open Recent...</span>
          <su-menu slot="submenu">
            <su-menu-item disabled>Reopen Closed Editor</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>/home/stdui/components/button.ts</su-menu-item>
            <su-menu-item>/home/stdui/components/menu.ts/</su-menu-item>
            <su-menu-item>/home/stdui/theme/anim.ts</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>/home/hax/src/main.rs</su-menu-item>
            <su-menu-item>/home/hax/Cargo.toml</su-menu-item>
            <su-menu-item>/home/hax/src/service/translation/mod.rs</su-menu-item>
            <su-menu-item>/home/hax/src/service/translation/provider.rs</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>More...</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Clear Recently Opened...</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Add Folder to Workspace...</su-menu-item>
        <su-menu-item>Save Workspace As...</su-menu-item>
        <su-menu-item>Duplicate Workspace</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Save<small slot="extra">Ctrl+S</small></su-menu-item>
        <su-menu-item>Save As...<small slot="extra">Ctrl+Shift+S</small></su-menu-item>
        <su-menu-item disabled>Save All</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>
          <span>Share</span>
          <su-menu slot="submenu">
            <su-menu-item>Export Profile (Default)...</su-menu-item>
            <su-menu-item>Import Profile...</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Auto Save</su-menu-item>
        <su-menu-item>
          <span>Preferences</span>
          <su-menu slot="submenu">
            <su-menu-item>
              <span>Profiles (Default)...</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Default</su-menu-item>
                <su-separator></su-separator>
                <su-menu-item>Show Profile Contents</su-menu-item>
                <su-separator></su-separator>
                <su-menu-item>Create Profile...</su-menu-item>
                <su-menu-item disabled>Delete Profile...</su-menu-item>
                <su-separator></su-separator>
                <su-menu-item>Export Profile...</su-menu-item>
                <su-menu-item>Import Profile...</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-menu-item>Settings</su-menu-item>
            <su-menu-item>Extensions</su-menu-item>
            <su-menu-item>Keyboard Shortcuts</su-menu-item>
            <su-menu-item>Configure User Snippets</su-menu-item>
            <su-menu-item>User Tasks</su-menu-item>
            <su-menu-item>
              <span>Theme</span>
              <su-menu slot="submenu">
                <su-menu-item>Color Theme</su-menu-item>
                <su-menu-item>File Icon Theme</su-menu-item>
                <su-menu-item>Product Theme</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Online Services Settings</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item checked>Settings Sync is On</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Revert File</su-menu-item>
        <su-menu-item>Close Editor</su-menu-item>
        <su-menu-item>Close Folder</su-menu-item>
        <su-menu-item>Close Window</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Exit</su-menu-item>
      </su-menu>
    </su-menu-item>
    ${bar ? html`<su-separator bar></su-separator>` : null}
    <su-menu-item ?bar=${bar}>
      <span>Edit</span>
      <su-menu slot="submenu">
        <su-menu-item>Undo</su-menu-item>
        <su-menu-item>Redo</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Cut</su-menu-item>
        <su-menu-item>Copy</su-menu-item>
        <su-menu-item>Paste</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Find</su-menu-item>
        <su-menu-item>Replace</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Find in Files</su-menu-item>
        <su-menu-item>Replace in Files</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Toggle Line Comment</su-menu-item>
        <su-menu-item>Toggle Block Comment</su-menu-item>
        <su-menu-item>Emmet: Expand Abbreviation</su-menu-item>
      </su-menu>
    </su-menu-item>
    ${bar ? html`<su-separator bar></su-separator>` : null}
    <su-menu-item ?bar=${bar}>
      <span>Selection</span>
      <su-menu slot="submenu">
        <su-menu-item>Select All</su-menu-item>
        <su-menu-item>Expand Selection</su-menu-item>
        <su-menu-item>Shrink Selection</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Copy Line Up</su-menu-item>
        <su-menu-item>Copy Line Down</su-menu-item>
        <su-menu-item>Move Line Up</su-menu-item>
        <su-menu-item>Move Line Down</su-menu-item>
        <su-menu-item>Duplicate Selection</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Add Cursor Above</su-menu-item>
        <su-menu-item>Add Cursors to Line Ends</su-menu-item>
        <su-menu-item>Add Next Occurrence</su-menu-item>
        <su-menu-item>Add Previous Occurrence</su-menu-item>
        <su-menu-item>Select All Occurrences</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Switch to Ctrl+Click for Multi-cursor</su-menu-item>
        <su-menu-item>Column Selection Mode</su-menu-item>
      </su-menu>
    </su-menu-item>
    ${bar ? html`<su-separator bar></su-separator>` : null}
    <su-menu-item ?bar=${bar}>
      <span>View</span>
      <su-menu slot="submenu">
        <su-menu-item>Command Palette...</su-menu-item>
        <su-menu-item>Open View...</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>
          <span>Appearance</span>
          <su-menu slot="submenu">
            <su-menu-item>Full Screen</su-menu-item>
            <su-menu-item>Zen Mode</su-menu-item>
            <su-menu-item>Centered Layout</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item checked>Menu Bar</su-menu-item>
            <su-menu-item checked>Primary Side Bar</su-menu-item>
            <su-menu-item>Secondary Side Bar</su-menu-item>
            <su-menu-item checked>Status Bar</su-menu-item>
            <su-menu-item checked>Panel</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Move Primary Side Bar Right</su-menu-item>
            <su-menu-item>
              <span>Activity Bar Position</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Side</su-menu-item>
                <su-menu-item>Top</su-menu-item>
                <su-menu-item>Hidden</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-menu-item>
              <span>Panel Position</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Bottom</su-menu-item>
                <su-menu-item>Left</su-menu-item>
                <su-menu-item>Right</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-menu-item>
              <span>Align Panel</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Center</su-menu-item>
                <su-menu-item>Justify</su-menu-item>
                <su-menu-item>Left</su-menu-item>
                <su-menu-item>Right</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-menu-item>
              <span>Tab Bar</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Multiple Tabs</su-menu-item>
                <su-menu-item>Single Tab</su-menu-item>
                <su-menu-item>Hidden</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-menu-item>
              <span>Editor Actions Position</span>
              <su-menu slot="submenu">
                <su-menu-item selected>Tab Bar</su-menu-item>
                <su-menu-item>Title Bar</su-menu-item>
                <su-menu-item>Hidden</su-menu-item>
              </su-menu>
            </su-menu-item>
            <su-separator></su-separator>
            <su-menu-item checked>Minimap</su-menu-item>
            <su-menu-item checked>Breadcrumbs</su-menu-item>
            <su-menu-item checked>Sticky Scroll</su-menu-item>
            <su-menu-item checked>Render Whitespace</su-menu-item>
            <su-menu-item checked>Render Control Characters</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Zoom In</su-menu-item>
            <su-menu-item>Zoom Out</su-menu-item>
            <su-menu-item>Reset Zoom</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-menu-item>
          <span>Editor Layout</span>
          <su-menu slot="submenu">
            <su-menu-item>Split Up</su-menu-item>
            <su-menu-item>Split Down</su-menu-item>
            <su-menu-item>Split Left</su-menu-item>
            <su-menu-item>Split Right</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Split in Group</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Move Editor into New Window</su-menu-item>
            <su-menu-item>Copy Editor into New Window</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Single</su-menu-item>
            <su-menu-item>Two Columns</su-menu-item>
            <su-menu-item>Three Columns</su-menu-item>
            <su-menu-item>Two Rows</su-menu-item>
            <su-menu-item>Three Rows</su-menu-item>
            <su-menu-item>Grid (2x2)</su-menu-item>
            <su-menu-item>Two Rows Right</su-menu-item>
            <su-menu-item>Two Columns Bottom</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Flip Layout</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Explorer</su-menu-item>
        <su-menu-item>Search</su-menu-item>
        <su-menu-item>Source Control</su-menu-item>
        <su-menu-item>Run</su-menu-item>
        <su-menu-item>Extensions</su-menu-item>
        <su-menu-item>Testing</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Problems</su-menu-item>
        <su-menu-item>Output</su-menu-item>
        <su-menu-item>Debug Console</su-menu-item>
        <su-menu-item>Terminal</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Word Wrap</su-menu-item>
      </su-menu>
    </su-menu-item>
    ${bar ? html`<su-separator bar></su-separator>` : null}
    <su-menu-item ?bar=${bar}>
      <span>Go</span>
      <su-menu slot="submenu">
        <su-menu-item>Back</su-menu-item>
        <su-menu-item disabled>Forward</su-menu-item>
        <su-menu-item disabled>Last Edit Location</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>
          <span>Switch Editor</span>
          <su-menu slot="submenu">
            <su-menu-item>Next Editor</su-menu-item>
            <su-menu-item>Previous Editor</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Next Used Editor</su-menu-item>
            <su-menu-item>Previous Used Editor</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Next Editor in Group</su-menu-item>
            <su-menu-item>Previous Editor in Group</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item>Next Used Editor in Group</su-menu-item>
            <su-menu-item>Previous Used Editor in Group</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-menu-item>
          <span>Switch Group</span>
          <su-menu slot="submenu">
            <su-menu-item>Group 1</su-menu-item>
            <su-menu-item>Group 2</su-menu-item>
            <su-menu-item>Group 3</su-menu-item>
            <su-menu-item>Group 4</su-menu-item>
            <su-menu-item>Group 5</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item disabled>Next Group</su-menu-item>
            <su-menu-item disabled>Previous Group</su-menu-item>
            <su-separator></su-separator>
            <su-menu-item disabled>Group Left</su-menu-item>
            <su-menu-item disabled>Group Right</su-menu-item>
            <su-menu-item disabled>Group Above</su-menu-item>
            <su-menu-item disabled>Group Below</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Go to File...</su-menu-item>
        <su-menu-item>Go to Symbol in Workspace...</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Go to Symbol in Editor...</su-menu-item>
        <su-menu-item>Go to Definition</su-menu-item>
        <su-menu-item>Go to Declaration</su-menu-item>
        <su-menu-item>Go to Type Definition</su-menu-item>
        <su-menu-item>Go to Implementations</su-menu-item>
        <su-menu-item>Go to References</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Go to Line/Column...</su-menu-item>
        <su-menu-item>Go to Bracket</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Next Problem</su-menu-item>
        <su-menu-item>Previous Problem</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Next Change</su-menu-item>
        <su-menu-item>Previous Change</su-menu-item>
      </su-menu>
    </su-menu-item>
    ${bar ? html`<su-separator bar></su-separator>` : null}
    <su-menu-item ?bar=${bar}>
      <span>Help</span>
      <su-menu slot="submenu">
        <su-menu-item>Welcome</su-menu-item>
        <su-menu-item>Show All Commands</su-menu-item>
        <su-menu-item>Documentation</su-menu-item>
        <su-menu-item>Editor Playground</su-menu-item>
        <su-menu-item>Show Release Notes</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Keyboard Shortcuts Reference</su-menu-item>
        <su-menu-item>Video Tutorials</su-menu-item>
        <su-menu-item>Tips and Tricks</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Join Us on YouTube</su-menu-item>
        <su-menu-item>Search Feature Requests</su-menu-item>
        <su-menu-item>Report Issue</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>View License</su-menu-item>
        <su-menu-item>Privacy Statement</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Toggle Developer Tools</su-menu-item>
        <su-menu-item>Open Process Explorer</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Restart to Update</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>About</su-menu-item>
      </su-menu>
    </su-menu-item>
  </su-menu>
</div>
   `;
  },
};

export const ContextMenu: Story = {
  render: ({ onClick }) => {
    function handleClick(e: Event) {
      onClick(e);
      ctx.hide();
    }

    const menu = html`\
      <su-menu @click=${handleClick}>
        <su-menu-item>
          <span>View</span>
          <su-menu slot="submenu">
              <su-menu-item>Large icons</su-menu-item>
              <su-menu-item selected>Medium icons</su-menu-item>
              <su-menu-item>Small icons</su-menu-item>
              <su-separator></su-separator>
              <su-menu-item>Auto arrange icons</su-menu-item>
              <su-menu-item checked>Align icons to grid</su-menu-item>
              <su-separator></su-separator>
              <su-menu-item checked>Show desktop icons</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-menu-item>
          <span>Sort by</span>
          <su-menu slot="submenu">
              <su-menu-item>Name</su-menu-item>
              <su-menu-item>Size</su-menu-item>
              <su-menu-item>Item type</su-menu-item>
              <su-menu-item>Date modified</su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-menu-item @click=${() => window.location.reload()}>Refresh</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item disabled>Paste</su-menu-item>
        <su-menu-item>Undo Move<span slot="extra">Ctrl+Z</span></su-menu-item>
        <su-menu-item>Open in Terminal</su-menu-item>
        <su-menu-item>Open in Visual Studio</su-menu-item>
        <su-menu-item>Open Git GUI here</su-menu-item>
        <su-menu-item>Open Git Bash here</su-menu-item>
        <su-menu-item>Open with Code</su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>
          <span>New</span>
          <su-menu slot="submenu">
            <su-menu-item icon>
              Folder
              <ph-folder weight="regular" slot="icon"></ph-folder>
            </su-menu-item>
            <su-menu-item icon>
              Shortcut
              <ph-arrow-square-up-right weight="regular" slot="icon"></ph-arrow-square-up-right>
            </su-menu-item>
            <su-separator></su-separator>
            <su-menu-item icon>
              Bitmap Image
              <ph-image weight="regular" slot="icon"></ph-image>
            </su-menu-item>
            <su-menu-item icon>
              Google Docs
              <ph-file-text weight="regular" slot="icon"></ph-file-text>
            </su-menu-item>
            <su-menu-item icon>
              Google Sheets
              <ph-table weight="regular" slot="icon"></ph-table>
            </su-menu-item>
            <su-menu-item icon>
              Google Slides
              <ph-presentation-chart weight="regular" slot="icon"></ph-presentation-chart>
            </su-menu-item>
            <su-menu-item icon>
              Text Document
              <ph-file-text weight="regular" slot="icon"></ph-file-text>
            </su-menu-item>
            <su-menu-item icon @click=${onClick}>
              Compressed (zipped) Folder
              <ph-archive weight="regular" slot="icon"></ph-archive>
            </su-menu-item>
          </su-menu>
        </su-menu-item>
        <su-separator></su-separator>
        <su-menu-item>Display settings</su-menu-item>
        <su-menu-item>Personalize</su-menu-item>
      </su-menu>
    `;

    const ctx = createContextMenu(menu);
    document.addEventListener("contextmenu", ctx.show);
    return html`<div style="min-height: 700px"></div>`;
  }
}
