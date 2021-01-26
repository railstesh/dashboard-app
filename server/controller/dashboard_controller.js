const express = require('express');
const router = express.Router();

const dashboardService = require('../service/dashboard_service');
router.get('/dashboard', dashboardService.getDashboardData);

module.exports = router;