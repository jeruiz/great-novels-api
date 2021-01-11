const NovelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: Novels, key: 'id' } },
  })
}

module.exports = NovelsGenres
