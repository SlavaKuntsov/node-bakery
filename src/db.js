import pg from 'pg'

//LOCAL
// const pool = new pg.Pool({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'example',
// 	password: 'root',
// 	port: '5432'
// })

//TEST
// const pool = new pg.Pool({
// 	user: 'postgres',
// 	host: 'roundhouse.proxy.rlwy.net',
// 	database: 'railway',
// 	password: 'D*6BbfB-BBG*F531Bd5e2*244*Gb3C*e',
// 	port: '22858'
// })

//WORK
// const pool = new pg.Pool({
// 	user: 'postgres',
// 	host: 'roundhouse.proxy.rlwy.net',
// 	database: 'railway',
// 	password: 'EBeg*A41Af63dA1fC35G43c-bggD2*fE',
// 	port: '55001'
// })



//RENDER
const pool = new pg.Pool({
	// user: 'bakery_database_user',
	// host: 'a.oregon-postgres.render.com',
	// database: 'bakery_database',
	// password: 'rsetHKyY6NxvOHxRddfXxWF0ySPvHi8v',
	// port: '5432',
	connectionString: 'postgres://tgkmkaxz:L43WYrsNd_Ytc6wypL-rP_uzsoVVdM_G@suleiman.db.elephantsql.com/tgkmkaxz'
}) 

// console.log('pool: ', pool);

pool.connect()


export default pool