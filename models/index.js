const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')

const connection = new Sequelize('novels', 'novels', 'Gre@tnov3ls', {
  host: 'localhost', dialect: 'mysql',
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Novels.belongsTo(Authors)
Authors.belongsTo(Novels)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Genres.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Genres,
  Novels,
  NovelsGenres,
}
