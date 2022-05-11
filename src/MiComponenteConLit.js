import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './MiComponenteConLit-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<mi-componente-con-lit></mi-componente-con-lit>
```

##styling-doc

@customElement mi-componente-con-lit
*/
export class MiComponenteConLit extends LitElement {
  static get is() {
    return 'mi-componente-con-lit';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('mi-componente-con-lit-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}
