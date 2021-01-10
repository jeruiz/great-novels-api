const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')

const connection = new Sequelize('novels', 'novels', 'Gre@tnov3ls', {
    host: 'localhost', dialect: 'mysql',
})
