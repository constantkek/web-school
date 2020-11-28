const pool = require('./pool')

const queries = {
  getUsers: async () => {
    const res = await pool.query('SELECT * FROM public.users')
    return res.rows
  },
  getCourses: async () => {
    const res = await pool.query('SELECT * FROM public.courses')
    return res.rows
  }
}

module.exports = queries