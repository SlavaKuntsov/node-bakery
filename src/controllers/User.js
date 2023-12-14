import pool from '../db.js'

class User {
	create(res, req) {
		// const insertQuery = 'INSERT INTO users(name, age) VALUES($1, $2)'
		// const values = ['John', 25]

		// const select = 'SELECT * from users'

		const query = {
			text: 'INSERT INTO users(name, age) VALUES($1, $2)',
			values: ['Slava', 18]
		}

		pool.query(query, (err, res) => {
			
			if (!err) {
				console.log('user created')
				// console.log(res.rows[0])
			} else {
				console.log('error')
			}
			// pool.end()
		})
	}
}

export default new User()
