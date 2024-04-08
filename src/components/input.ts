
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { SUPresentation, SUStatus } from "../types";

@customElement("su-input")
export class Input extends LitElement {
  @property({ type: String, reflect: true })
  type?: HTMLInputElement["type"] = "text";

  @property({ type: String })
  value?: string = "";

  @property({ type: String })
  label?: string = "";

  @property({ type: String, reflect: true })
  status?: SUStatus = "primary";

  @property({ type: String, reflect: true })
  variant?: SUPresentation = "block";

  @property({ type: Boolean, reflect: true })
  required?: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled?: boolean = false;

  render() {
    return html`
      <fieldset ?disabled=${this.disabled}>
        ${this.label ? html`<legend>${this.label}</legend>` : null}
        <input
          type=${this.type}
          value="${this.value}"
          ?required=${this.required}
        />
        <slot></slot>
      </fieldset>
    `;
  }

  static styles = css`
    fieldset {
      position: relative;
      border-width: 1px;
      border-style: solid;
      display: inline-grid;
      padding: 0.6rem;
      gap: 0.6rem;
    }

    input {
      border: none;
      background-color: transparent;
      font-family: inherit;
    }

    :host([status="primary"]) fieldset {
      color: var(--su-base);
      border-color: var(--su-base);
    }
    :host([status="secondary"]) fieldset {
      color: var(--su-white);
      border-color: var(--su-white);
    }
    :host([status="success"]) fieldset {
      color: var(--su-success);
      border-color: var(--su-success);
    }
    :host([status="info"]) fieldset {
      color: var(--su-info);
      border-color: var(--su-info);
    }
    :host([status="warning"]) fieldset {
      color: var(--su-warning);
      border-color: var(--su-warning);
    }
    :host([status="failure"]) fieldset {
      color: var(--su-failure);
      border-color: var(--su-failure);
    }
    :host([status="debug"]) fieldset {
      color: var(--su-debug);
      border-color: var(--su-debug);
    }


    :host([variant="block"]) legend {
      padding: 0.2rem 0.3rem;
    }
    :host([variant="block"][status="primary"]) legend {
      color: var(--su-white);
      background-color: var(--su-black);
    }
    :host([variant="block"][status="secondary"]) legend {
      color: var(--su-black);
      background-color: var(--su-white);
    }
    :host([variant="block"][status="success"]) legend {
      color: var(--su-white);
      background-color: var(--su-success);
    }
    :host([variant="block"][status="info"]) legend {
      color: var(--su-white);
      background-color: var(--su-info);
    }
    :host([variant="block"][status="warning"]) legend {
      color: var(--su-black);
      background-color: var(--su-warning);
    }
    :host([variant="block"][status="failure"]) legend {
      color: var(--su-white);
      background-color: var(--su-failure);
    }
    :host([variant="block"][status="debug"]) legend {
      color: var(--su-white);
      background-color: var(--su-debug);
    }

    :host fieldset:invalid {
      color: var(--su-failure);
      border-color: var(--su-failure);
    }
    :host fieldset:invalid legend {
      color: var(--su-white);
      background-color: var(--su-failure) !important;
    }

    ::slotted(*) {
      padding: 1rem 0 0;
      border-top: 1px solid currentColor;
    }

    fieldset:disabled {
      pointer-events: none;
    }
    fieldset:disabled::after {
      position: absolute;
      content: "";
      inset: 0;
      opacity: 0.4;
      background-color: white;
      background-image: var(--su-texture-disabled);
    }

    input:focus,
    input:focus-visible {
      outline: none;
    }

    input:focus::after,
    input:focus-visible::after {
      position: absolute;
      content: "";
      inset: 2px;
      pointer-events: initial;
      border: 1px solid currentColor;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "su-input": Input,
  }
}
