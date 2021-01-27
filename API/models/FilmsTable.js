module.exports = (sequelize, type) => {
    return sequelize.define('films', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        director: type.STRING,
        actor: type.STRING,
        studio: type.STRING,
        cinema: type.STRING
    })
}