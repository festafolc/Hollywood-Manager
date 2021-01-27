const express = require('express')
const router = express.Router()

const { Films } = require('../../db')

router.get('/', async (req, res) => {
    const films = await Films.findAll()
    res.json(films)
})

router.post('/', async (req, res) => {
    const film = await Films.create(req.body)
    res.json(film)
})

router.put('/:filmId', async (req, res) => {
    await Films.update(req.body, {
        where: { id: req.params.filmId }
    })
    res.json({ success: 'Film has been updated' })
})

router.delete('/:filmId', async (req, res) => {
    await Films.destroy({
        where: { id: req.params.filmId }
    })
    res.json({ success: 'Film deleted' })
})

module.exports = router