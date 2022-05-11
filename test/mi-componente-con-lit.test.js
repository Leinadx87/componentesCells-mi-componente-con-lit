import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../mi-componente-con-lit.js';

suite('MiComponenteConLit', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<mi-componente-con-lit></mi-componente-con-lit>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
