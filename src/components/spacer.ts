import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { SUOutline } from "../types";

@customElement("su-spacer")
export class Spacer extends LitElement {
  @property({ type: String })
  type: SUOutline = "invisible";

  render() {
    return html`<div></div>`;
  }

  static styles = css`
    :host { flex: 1; }
    div { flex: 1; }

    :host([type="solid"]) {
      border-left: 1px solid var(--su-base);
      border-bottom: 1px solid var(--su-base);
    }
    :host([type="dashed"]) {
      border-left: 1px dashed var(--su-base);
      border-bottom: 1px dashed var(--su-base);
    }
  `;
}
