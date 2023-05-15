const asyncHandler = require('express-async-handler')
const Experience = require('../models/experienceModel')

const getExperiences = asyncHandler( async(req, res) => {
  const experiences = await Experience.find()
  res.status(200).json(experiences)
})

const createExperience = asyncHandler( async(req, res) => {
  const { title, employer, period, description, highlights } = req.body
  if (! title || !employer || !period || !description || !highlights) {
    res.status(400)
    throw new Error('All fields are mandatory')
  }
  const experience = await Experience.create({
    employer,
    title,
    period,
    description,
    highlights
  })
  res.status(201).json(experience)
})

const getExperience = asyncHandler( async(req, res) => {
  const experience = await Experience.findById(req.params.id)
  if (!experience) {
    res.status(404).json({message: 'Experience not found'})
  }
  res.status(200).json(experience)
})

module.exports = { getExperiences, createExperience, getExperience }