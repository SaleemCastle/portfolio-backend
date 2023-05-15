const express = require('express')
const router = express.Router()
const { getExperiences, createExperience, getExperience } = require('../controllers/expeienceController')

router.route('/').get(getExperiences).post(createExperience)
router.route('/:id').get(getExperience)

module.exports = router