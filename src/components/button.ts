import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { SUPresentation, SUStatus } from "../types";

@customElement("su-button")
export class Button extends LitElement {
  @property({ type: String, reflect: true })
  status?: SUStatus = "primary";

  @property({ type: String, reflect: true })
  variant?: SUPresentation = "block";

  @property({ type: Boolean })
  disabled?: boolean = false;

  @property({ type: Boolean })
  compact?: boolean = false;

  render() {
    return html`
      <button ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    button {
      position: relative;
      appearance: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      border: 1px solid var(--su-base);
      padding: 0.6rem 0.9rem;
      font-family: inherit;
      // font-weight: bold;
      box-shadow: 4px 4px 0 0 var(--su-shadow);
      transform: translate(0, 0);
      transition:
        transform var(--su-t1) ease,
        box-shadow var(--su-t1) ease;
    }

    :host([variant="block"][status="primary"]) button {
      color: var(--su-white);
      background-color: var(--su-black);
    }
    :host([variant="block"][status="secondary"]) button {
      color: var(--su-black);
      background-color: var(--su-white);
    }
    :host([variant="block"][status="success"]) button {
      color: var(--su-white);
      background-color: var(--su-success);
    }
    :host([variant="block"][status="info"]) button {
      color: var(--su-white);
      background-color: var(--su-info);
    }
    :host([variant="block"][status="warning"]) button {
      color: var(--su-black);
      background-color: var(--su-warning);
    }
    :host([variant="block"][status="failure"]) button {
      color: var(--su-white);
      background-color: var(--su-failure);
    }
    :host([variant="block"][status="debug"]) button {
      color: var(--su-white);
      background-color: var(--su-debug);
    }

    :host([variant="line"]) button {
      background: transparent;
      padding: calc(0.6rem - 1px) calc(0.9rem - 1px);
    }
    :host([variant="line"][status="primary"]) button {
      color: var(--su-base);
      border: 2px solid var(--su-base);
    }
    :host([variant="line"][status="secondary"]) button {
      color: var(--su-white);
      border: 2px solid var(--su-white);
    }
    :host([variant="line"][status="success"]) button {
      color: var(--su-success);
      border: 2px solid var(--su-success);
    }
    :host([variant="line"][status="info"]) button {
      color: var(--su-info);
      border: 2px solid var(--su-info);
    }
    :host([variant="line"][status="warning"]) button {
      color: var(--su-warning);
      border: 2px solid var(--su-warning);
    }
    :host([variant="line"][status="failure"]) button {
      color: var(--su-failure);
      border: 2px solid var(--su-failure);
    }
    :host([variant="line"][status="debug"]) button {
      color: var(--su-debug);
      border: 2px solid var(--su-debug);
    }

    :host([compact]) button {
      padding: 0.2rem 0.3rem;
      gap:0.4rem;
    }

    button:active {
      transform: translate(2px, 2px);
      box-shadow: 0 0 0 0 var(--su-shadow);
    }

    button:disabled {
      pointer-events: none;
    }
    button:disabled::after {
      position: absolute;
      content: "";
      inset: 0;
      opacity: 0.4;
      background-color: white;
      background-image: var(--su-texture-disabled);
    }

    button:hover {
    }

    button:focus,
    button:focus-visible {
      outline: none;
    }

    button:focus::after,
    button:focus-visible::after {
      position: absolute;
      content: "";
      inset: 2px;
      pointer-events: initial;
      border: 1px solid currentColor;
    }

    @media (prefers-color-scheme: light) {
      :host([variant="line"][status="secondary"]) button {
        color: var(--su-base);
        border: 2px solid var(--su-grey300);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "su-button": Button,
  }
}
