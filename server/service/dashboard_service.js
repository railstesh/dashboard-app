const data  = require('../utility/sample_data.json');

exports.getDashboardData = (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    res.json({ error: 'Error occured' });
  }
};