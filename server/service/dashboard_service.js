const data  = require('../utility/sample_data.json');

exports.getDashboardData = (req, res) => {
  try {
    res.json(JSON.stringify(data));
  } catch (err) {
    res.json({ error: 'Error occured' });
  }
};