import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { SUPresentation, SUStatus } from "../types";

@customElement("su-badge")
export class Badge extends LitElement {
  @property({ type: String, reflect: true })
  status?: SUStatus | undefined;

  @property({ type: String, reflect: true })
  variant?: SUPresentation = "block";

  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }

  static styles = css`
    span {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.3rem;
      gap:0.4rem;
      border: 1px solid var(--su-base);

      font-family: inherit;
      font-size: 0.8rem;
    }

    :host([variant="block"][status="primary"]) span {
      color: var(--su-white);
      background-color: var(--su-black);
    }
    :host([variant="block"][status="secondary"]) span {
      color: var(--su-black);
      background-color: var(--su-white);
    }
    :host([variant="block"][status="success"]) span {
      color: var(--su-white);
      background-color: var(--su-success);
    }
    :host([variant="block"][status="info"]) span {
      color: var(--su-white);
      background-color: var(--su-info);
    }
    :host([variant="block"][status="warning"]) span {
      color: var(--su-black);
      background-color: var(--su-warning);
    }
    :host([variant="block"][status="failure"]) span {
      color: var(--su-white);
      background-color: var(--su-failure);
    }
    :host([variant="block"][status="debug"]) span {
      color: var(--su-white);
      background-color: var(--su-debug);
    }

    :host([variant="line"]) span {
      color: currentColor;
      border: 2px solid currentColor;
      background: transparent;
      padding: calc(0.2rem - 1px) calc(0.3rem - 1px);
    }
    :host([variant="line"][status="primary"]) span {
      color: var(--su-base);
      border: 2px solid var(--su-base);
    }
    :host([variant="line"][status="secondary"]) span {
      color: var(--su-white);
      border: 2px solid var(--su-white);
    }
    :host([variant="line"][status="success"]) span {
      color: var(--su-success);
      border: 2px solid var(--su-success);
    }
    :host([variant="line"][status="info"]) span {
      color: var(--su-info);
      border: 2px solid var(--su-info);
    }
    :host([variant="line"][status="warning"]) span {
      color: var(--su-warning);
      border: 2px solid var(--su-warning);
    }
    :host([variant="line"][status="failure"]) span {
      color: var(--su-failure);
      border: 2px solid var(--su-failure);
    }
    :host([variant="line"][status="debug"]) span {
      color: var(--su-debug);
      border: 2px solid var(--su-debug);
    }

    @media (prefers-color-scheme: light) {
      :host([variant="line"][status="secondary"]) span {
        color: var(--su-base);
        border: 2px solid var(--su-grey300);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "su-badge": Badge,
  }
}
