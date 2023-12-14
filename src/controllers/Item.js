import pool from '../db.js'

class Item {
	// getCarousel(req, res) {
	// 	const select = 'SELECT * from users'
	// }
	async getCategory(req, res) {
		const { category } = req.query
		console.log('category: ', category)

		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms))
		}

		async function Query(selectString) {
			await sleep(1000)
			pool.query(selectString, async (err, result) => {
				if (err) {
					console.error('Ошибка выполнения запроса:', err)
					await res
						.status(500)
						.json({ error: 'Ошибка выполнения запроса' })
				} else {
					res.json(result.rows)
					console.log(result.rows)
				}
			})
		}

		if (category === 'all') {
			await Query(select)
		} else if (category === 'cake') {
			await sleep(1000)
			const select = `SELECT id, initcap(name) as name, initcap(secondname) as secondname, path, type, price, initcap(description) as description, instock from catalogitems where type like '${category}';`
			console.log('select: ', select)
			await Query(select)
		} else if (category === 'bread') {
			await sleep(1000)
			const select = `SELECT id, initcap(name) as name, initcap(secondname) as secondname, path, type, price, initcap(description) as description, instock from catalogitems where type like '${category}';`
			console.log('select: ', select)
			await Query(select)
		} else if (category === 'dough') {
			await sleep(1000)
			const select = `SELECT id, initcap(name) as name, initcap(secondname) as secondname, path, type, price, initcap(description) as description, instock from catalogitems where type like '${category}';`
			console.log('select: ', select)
			await Query(select)
		} else {
			// Действия по умолчанию, если значение category не соответствует ни одному условию
			await res.status(500).json({ error: 'Категория не найдена' })
		}
	}
	findById(req, res) {
		const { id } = req.query
		console.log('id: ', id)

		const select = `SELECT id, initcap(name) as name, initcap(secondname) as secondname, path, type, price, initcap(description) as description, instock from catalogitems where id = ${id};`

		pool.query(select, (err, result) => {
			if (err) {
				console.error('Ошибка выполнения запроса:', err)
				res.status(500).json({ error: 'Ошибка выполнения запроса' })
			} else {
				res.json(result.rows[0])
				console.log(result.rows)
			}
		})
	}
	createTable(req, res) {
		const select = `  
		CREATE TABLE catalogitems (
			id serial PRIMARY KEY,
			name varchar(100),
			secondName varchar(100),
			path varchar(50),
			type varchar(100)
		)`
		// CREATE TABLE catalogitems (
		// 	id serial PRIMARY KEY,
		// 	name varchar(100),
		// 	age integer
		// )`

		pool.query(select, (err, result) => {
			if (err) {
				console.log('not find')
				console.error('Ошибка выполнения запроса:', err)
				res.status(500).json({ error: 'Ошибка выполнения запроса' })
			} else {
				console.log('find')
				res.json(result.rows)
				console.log(result.rows)
			}
		})
	}
	add(req, res) {
		const query = {
			text: 'insert into "public"."catalogitems"(name, secondName, path, price,  type) values($1, $2, $3, $4)',
			values: ['chocolate cake', 'шоколадный торт', 'cake1', 10, 'cake']
		}
		const text = 'insert into catalogitems(name, age) values("Slave", 18)'

		pool.query(query, (err, result) => {
			if (err) {
				console.error('Ошибка выполнения запроса:', err)
				res.status(500).json({ error: 'Ошибка выполнения запроса' })
			} else {
				res.status(300).json({ message: 'Values add' })
				// res.json(result.rows)
				// console.log(result.rows);
			}
		})
	}
}

export default new Item()
