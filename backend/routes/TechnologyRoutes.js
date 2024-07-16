import express from 'express';
import TechnologyController from '../controllers/TechnologyController.js';

const router = express.Router()

router.get('/', TechnologyController.getAllTechnology)
router.get('/:id', TechnologyController.getTechnologyById)
router.post('/create', TechnologyController.createTechnology)
router.patch('/:id', TechnologyController.updateTechnologyById)
router.delete('/:id', TechnologyController.removeTechnologyById)

export default router