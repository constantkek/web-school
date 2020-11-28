const { Router } = require('express')
const queries = require('../sql/queries')

const router = Router()

router.get('/courses', [

], async (req, res) => {
  try {
    const courses = await queries.getFullCourses()
    return res.status(200).json({ courses, message: 'Friends selected.' })
  } catch (e) {
    return res.status(500).json({ message: 'Error while getting courses.', errors: e.message })
  }
})

module.exports = router