const express = require('express');
const app    = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js Docker Container!',
             timestamp: new Date().toISOString(),
             hostname: require('os').hostname() });
});
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
module.exports = app;   // for tests