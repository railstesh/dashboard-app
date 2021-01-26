const app = require('./app');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function () {
  console.log('Listening to '+ PORT + '...');
});