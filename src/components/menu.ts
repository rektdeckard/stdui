
import { LitElement, css, html, render, type TemplateResult } from 'lit'
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js'
import { ref, createRef } from 'lit/directives/ref.js';
import { keyed } from 'lit/directives/keyed.js';
import "@phosphor-icons/webcomponents/PhCaretRight";
import "@phosphor-icons/webcomponents/PhCheck";
import "@phosphor-icons/webcomponents/PhDotOutline";
import type { SUTrigger } from "../types";

@customElement("su-menu")
export class Menu extends LitElement {
  @property({ type: Boolean, reflect: true })
  bar: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @state()
  _open: boolean = false;

  render() {
    return html`
      <menu
        role="${this.bar ? "menubar" : "menu"}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </menu>
    `;
  }

  static styles = css`
    menu {
      position: relative;
      display: inline-flex;
      flex-direction: column;
      padding: 0.2rem;
      margin: 0;
      gap: 0.2rem;
      border: 1px solid var(--su-base);
      background-color: var(--su-surface);
    }

    :host([bar]) menu {
      flex-direction: row;
    }

    :host menu[disabled] {
      pointer-events:none;
    }
    :host menu[disabled]::after {
      position: absolute;
      content: "";
      inset: 0;
      opacity: 0.6;
      background-color: var(--su-shadow);
      background-image: 
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    }
  `;
}

@customElement("su-menu-item")
export class MenuItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  bar: boolean = false;

  @property({ type: Boolean, reflect: true })
  icon: boolean = false;

  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  trigger: SUTrigger = "hover";

  @queryAssignedElements({ slot: "submenu" })
  _submenu!: Array<HTMLElement>;
  @state()
  _hasSubmenu: boolean = false;

  @state()
  _open: boolean = false;

  @state()
  _position: DOMRect | null = null;

  openSubmenu(e: PointerEvent) {
    if (!(e.target instanceof Element)) return;
    const rect = (e.target.getBoundingClientRect());
    this._position = rect;
    this._open = true;
  }

  closeSubmenu() {
    this._open = false;
  }

  _handleFocusOut(e: FocusEvent) {
    if (e.relatedTarget && !this.contains(e.relatedTarget as Element)) {
      this.closeSubmenu();
    }
  }

  render() {
    return html`
      <div
        data-su-menuitem
        tabindex="${this.disabled ? -1 : 0}"
        role="menuitem"
        @pointerenter=${this.trigger === "hover" ? this.openSubmenu : null}
        @click=${this.trigger === "click" ? this.openSubmenu : null}
        @focus=${this.openSubmenu}
        @pointerleave=${this.closeSubmenu}
        @focusout=${this._handleFocusOut}
        ?disabled=${this.disabled}
      >
        ${this.checked
        ? html`<ph-check weight="bold"></ph-check>`
        : this.selected ? html`<ph-dot-outline weight="fill"></ph-dot-outline>`
          : !this.bar ? html`<div class="icon"></div>`
            : null
      }
        ${this.icon
        ? html`<div class="icon"><slot name="icon"></slot></div>`
        : null
      }
          <slot></slot>
          ${!this.bar ? html`<su-spacer></su-spacer>` : null}
          <slot name="extra"></slot>
        ${!this.bar && this._hasSubmenu
        ? html`<ph-caret-right weight="fill"></ph-caret-right>`
        : null
      }
        <slot name="extra"></slot>
        <su-dialog
          position="absolute"
          ?open=${this._open}
          x=${this._position ? this.bar ? 0 : this._position.width : 0}
          y=${this._position ? this.bar ? this._position.height : 0 : 0}
        >
          <slot name="submenu" @slotchange=${() => this._hasSubmenu = !!this._submenu.length}></slot>
        </su-dialog>
      </div>
    `;
  }

  static styles = css`
    :host [data-su-menuitem] {
      position: relative;
      padding: 0.2rem;
      cursor: default;
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.3rem;
    }

    :host [data-su-menuitem]:focus-within {
      outline: none;
    }

    :host [data-su-menuitem]:hover,
    :host [data-su-menuitem]:focus-within {
      color: var(--su-surface);
      background-color: var(--su-base);
    }

    :host [data-su-menuitem][disabled] {
      pointer-events:none;
      // color: var(--su-shadow);
    }
    :host [data-su-menuitem][disabled]::after {
      position: absolute;
      content: "";
      inset: 0;
      opacity: 0.4;
      background-color: white;
      background-image: var(--su-texture-disabled);
    }

    .icon {
      width: 1em;
      min-width: 1em;
      display: inline-flex;
    }
  `;
}

@customElement("su-dialog")
export class Dialog extends LitElement {
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @property({ type: Boolean, reflect: true })
  modal: boolean = false;

  @property({ type: Boolean, reflect: true })
  closeable: boolean = true;

  @property({ type: String })
  position: string = "fixed";

  @property({ type: Number })
  x: number = 0;
  @property({ type: Number })
  y: number = 0;

  dialogRef = createRef<HTMLDialogElement>();

  protected firstUpdated() {
    if (!this.modal) return;
    this.renderRoot.querySelector("dialog")?.showModal();
  }

  handleClose(e: MouseEvent) {
    if (this.modal && this.closeable && e.target === this.dialogRef.value) {
      this.dialogRef.value?.close();
    }
  }

  render() {
    return html`
      <dialog
        ${ref(this.dialogRef)}
        ?open=${!this.modal && this.open}
        style="top: ${this.y}px; left: ${this.x}px; position: ${this.position};"
        @click=${this.handleClose}
      >
        <slot></slot>
      </dialog>
    `;
  }

  static styles = css`
    :host dialog {
      border: none;
      padding: 0;
      margin: 0;
      width: max-content;
      overflow: visible;
      z-index: auto;
    }

    :host dialog:focus,
    :host dialog:focus-visible {
      outline: none;
    }

    ::backdrop {
      background: none;
    }
  `;
}

export function createContextMenu<E extends (HTMLElement | TemplateResult) = TemplateResult>(
  el: E,
  target: HTMLElement | DocumentFragment = document.body,
) {
  const elementRef = createRef<E extends TemplateResult ? HTMLDialogElement : E>();

  return {
    ref: () => elementRef.value,
    show: (e: MouseEvent) => {
      e.preventDefault();

      if (el instanceof Element) {
        (elementRef as any).value = el;
        el.style.position = "fixed";
        el.style.left = `${e.x}px`;
        el.style.top = `${e.y}px`;

        if (!el.isConnected) {
          target.appendChild(el);
        }
      } else {
        render(keyed(Math.random(), html`\
          <su-dialog
            ${ref(elementRef)}
            modal closeable
            x=${e.x} y=${e.y}
          >
            ${el}
          </su-dialog>\
        `), target);
      }
    },
    hide: () => elementRef.value?.remove(),
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "su-menu": Menu,
    "su-menu-item": MenuItem,
  }
}
