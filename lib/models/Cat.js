const pool = require('../utils/pool');

class CartoonCat {
  id;
  name;
  type;
  url;
  year;
  lives;
  isSidekick;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSidekick = row.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from cats;');
    return rows.map(row => new CartoonCat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('select * from cats where id = $1', [id]);
    if(!rows[0]) throw new Error(`No cat for id=${id}`);

    return new CartoonCat(rows[0]);
  }
}

module.exports = CartoonCat;
