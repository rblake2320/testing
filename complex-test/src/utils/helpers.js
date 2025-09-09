// Utility helper functions

function formatDate(date) {
  return new Date(date).toISOString();
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = { formatDate, generateId };