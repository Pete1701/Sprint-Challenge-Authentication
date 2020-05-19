const server = require('./api/server.js');

const PORT = process.env.PORT || 3377;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
