import pkg from 'pg'

const { Pool } = pkg

const pool = new Pool({
  user: 'Flutter5408',
  password: 'Flutter5408',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'NodeShop'
});


export default {
  query: (text, params) => pool.query(text, params)
}