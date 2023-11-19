const Router = require('express');
const router = new Router();
const dutyController = require('../controller/dutyController');

router.post('/', dutyController.create);
router.get('/', dutyController.getAll);
router.delete('/:id', dutyController.deleteById); // Додали новий маршрут DELETE

module.exports = router;
