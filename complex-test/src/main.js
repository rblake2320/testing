// Main application entry point
const APP_VERSION = '2.0.0';
const APP_NAME = 'Complex Test App';

function initialize() {
  console.log(`Initializing ${APP_NAME} v${APP_VERSION}`);
}

module.exports = { initialize, APP_VERSION, APP_NAME };