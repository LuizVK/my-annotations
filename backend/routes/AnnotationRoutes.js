import express from 'express'
import AnnotationController from '../controllers/AnnotationController.js'

const router = express.Router()

router.get('/', AnnotationController.getAllAnnotations)
router.get('/:id', AnnotationController.getAnnotationById)
router.post('/create', AnnotationController.createAnnotation)
router.patch('/:id', AnnotationController.updateAnnotationById)
router.delete('/:id', AnnotationController.removeAnnotationById)

export default router