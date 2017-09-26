import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/ShoppingCart/components/ShoppingCartApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ShoppingCartApp,
});
