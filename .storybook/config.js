import { configure } from '@storybook/react';


window.parent.document.title = 'ui-harness.site';


// Load stories.
const req = require.context('../lib', true, /stories.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
