import mongoose from 'mongoose';
import Annotation from '../models/Annotation.js';
import Technology from '../models/Technology.js';

export default class AnnotationController {

    static async getAllAnnotations(req, res) {
        const { key, order, technology } = req.query

        let filterOrder = ''
        if (!order || (order !== 'asc' && order !== 'desc')) {
            filterOrder = 'desc'
        } else {
            filterOrder = order
        }

        try {
            const annotations = await Annotation
                .find({ $or: [{ title: new RegExp(key) }, { description: new RegExp(key) }] })
                .sort(filterOrder === 'asc' ? 'createdAt' : '-createdAt')

            res.status(200)
                .json({ annotations })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async getAnnotationById(req, res) {
        const { id } = req.params

        try {
            if (!mongoose.isValidObjectId(id)) {
                return res
                    .status(422)
                    .json({ message: 'ID inválido!' })
            }

            const annotation = await Annotation.findOne({ _id: id })

            if (!annotation) {
                return res
                    .status(404)
                    .json({ message: 'Anotação não encontrada!' })
            }

            res.status(200)
                .json({ annotation })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async createAnnotation(req, res) {
        const { title, description, id_technology } = req.body

        if (!title) {
            return res
                .status(422)
                .json({ message: 'O título é obrigatório!' })
        }

        if (!description) {
            return res
                .status(422)
                .json({ message: 'A descrição é obrigatória!' })
        }

        if (!id_technology) {
            return res
                .status(422)
                .json({ message: 'É obrigatório informar a tecnologia!' })
        }

        if (!mongoose.isValidObjectId(id_technology)) {
            return res
                .status(422)
                .json({ message: 'ID da tecnologia inválido!' })
        }

        const technology = await Technology.findOne({ _id: id_technology })

        if (!technology) {
            return res
                .status(404)
                .json({ message: 'Tecnologia informada não encontrada!' })
        }

        const annotation = new Annotation({
            title,
            description,
            technology: {
                _id: technology._id,
                name: technology.name
            }
        })

        try {
            await annotation.save()
            res.status(201)
                .json({ message: 'Anotação incluída com sucesso!' })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async updateAnnotationById(req, res) {
        const { id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res
                .status(422)
                .json({ message: 'ID inválido!' })
        }

        const annotation = await Annotation.findOne({ _id: id })

        if (!annotation) {
            return res
                .status(404)
                .json({ message: 'Anotação não encontrada!' })
        }

        const { title, description, id_technology } = req.body

        if (!title) {
            return res
                .status(422)
                .json({ message: 'O título é obrigatório!' })
        }

        if (!description) {
            return res
                .status(422)
                .json({ message: 'A descrição é obrigatória!' })
        }

        if (!id_technology) {
            return res
                .status(422)
                .json({ message: 'É obrigatório informar a tecnologia!' })
        }

        if (!mongoose.isValidObjectId(id_technology)) {
            return res
                .status(422)
                .json({ message: 'ID da tecnologia inválido!' })
        }

        const technology = await Technology.find({ _id: id_technology })

        if (!technology) {
            return res
                .status(404)
                .message({ message: 'Tecnologia informada não encontrada!' })
        }

        const updatedAnnotationData = {
            title,
            description,
            technology: {
                _id: technology._id,
                name: technology.name
            }
        }

        try {
            await Annotation.findByIdAndUpdate(id, updatedAnnotationData)
            res.status(200)
                .json({ message: 'Anotação atualizada com sucesso!' })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async removeAnnotationById(req, res) {
        const { id } = req.params

        try {
            if (!mongoose.isValidObjectId(id)) {
                return res
                    .status(422)
                    .json({ message: 'ID inválido!' })
            }

            const annotation = await Annotation.findOne({ _id: id })

            if (!annotation) {
                return res
                    .status(404)
                    .json({ message: 'Anotação não encontrada!' })
            }

            await Annotation.findByIdAndDelete(id)

            res.status(200)
                .json({ message: 'Anotação excluída com sucesso!' })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

}