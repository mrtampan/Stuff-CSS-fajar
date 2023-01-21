

// Imports
import themeSwitcher from './src/theme-switcher.js';
// import toggleNavigation from './src/toggle-navigation';

// Theme switcher
themeSwitcher.addButton({
  tag: 'BUTTON',
  class: 'contrast theme-switcher',
  target: 'body',
});
themeSwitcher.init();

// Toggle navigation
// toggleNavigation.init();