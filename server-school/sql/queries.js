const pool = require('./pool')

const queries = {
  getUsers: async () => {
    const res = await pool.query('SELECT * FROM public.users')
    return res.rows
  },
  getCourses: async () => {
    const res = await pool.query('SELECT * FROM public.courses')
    return res.rows
  },
  getFullCourses: async () => {
    const res = await pool.query(`
      SELECT crs.courseID, crs.name, lns.lessonID, lns.lesson_name 
      FROM public.courses as crs 
      RIGHT JOIN public.lessons as lns 
      ON lns.courseID = crs.courseID`)
    return res.rows
  },
  getTasksByLesson: async () => {
    // TODO
  },
}

module.exports = queries