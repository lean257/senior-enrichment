'use strict'

const express = require('express')
const router = express.Router()
const {Campus, Student} = require('../../db/models')
module.exports = router;

//get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
})

//get a campus by id
router.get('/:campusId/students', (req, res, next) => {
  const campusId = req.params.campusId
  Student.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
})

router.get('/:campusId/image', (req, res, next) => {
  res.redirect('/school.jpg')
})

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.json(newCampus))
  .catch(next)
})

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => res.json(campus))
  .catch(next)
})

router.put('/:campusId', (req, res, next) => {
  Campus.update(
    req.body,
    {where: {id: req.params.campusId},
    returning: true})
  .then(result => {
    res.status(200).json(result[1][0])
  })
  .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => campus.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})
