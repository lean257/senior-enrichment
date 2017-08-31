const express = require('express')
const router = express.Router()
const Student = require('../../db/models').Student
module.exports = router

//get all students
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next)
})
router.param('id', (req,res, next, id) => {
  Student.findById(id)
  .then(foundStudent => {
  //app.param middleware, we attach smth to the req object that we use later
    req.student = foundStudent
    next();
    return null;
  })
  .catch(next)
})
//get a student by id
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => res.json(student))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next)
})

router.put('/:studentId', (req, res, next) => {
  Student.update(
    req.body,
    {where: {id: req.params.studentId},
    returning: true})
  .then(result => {
    res.status(200).json(result[1][0])
  })
  .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})
