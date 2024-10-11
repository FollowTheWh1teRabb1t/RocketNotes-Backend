const { Router } = require('express')

const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.use(ensureAuthenticated)

tagsRoutes.get('/', tagsController.index)

module.exports = tagsRoutes
