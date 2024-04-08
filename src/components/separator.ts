
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { } from "../types";

@customElement("su-separator")
export class Separator extends LitElement {
  @property({ type: Boolean, reflect: true })
  bar: boolean = false;

  render() {
    return html`<hr />`;
  }

  static styles = css`
    hr {
      width: 100%;
      border: none;
      height: 0;
      border-bottom: 1px solid var(--su-base);
      margin: 0.3rem 0;
    }

    :host([bar]) hr {
      height: 100%;
      width: 0;
      border-bottom: none;
      border-right: 1px solid var(--su-base);
      margin: 0 0.3rem;
    }
  `;
}
