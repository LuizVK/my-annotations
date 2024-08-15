import mongoose, { mongo } from 'mongoose';
import Technology from '../models/Technology.js';

export default class TechnologyController {

    static async getAllTechnology(req, res) {
        try {
            const technologys = await Technology.find().sort('createdAt')

            res.status(200)
                .json({ technologys })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async getTechnologyById(req, res) {
        const { id } = req.params
        try {
            if (!mongoose.isValidObjectId(id)) {
                return res
                    .status(422)
                    .json({ message: 'ID inválido!' })
            }

            const technology = await Technology.findOne({ _id: id })

            if (!technology) {
                return res
                    .status(404)
                    .json({ message: 'Tecnologia não encontrada!' })
            }

            res.status(200)
                .json({ technology })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async createTechnology(req, res) {
        const { name, iconPrefix, iconName } = req.body

        if (!name) {
            return res
                .status(422)
                .json({ message: 'O nome da tecnologia é obrigatório!' })
        }

        const technology = new Technology({
            name,
            icon: {
                iconPrefix,
                iconName
            }
        })

        try {
            await technology.save()

            res.status(201)
                .json({ message: 'Tecnologia criada com sucesso!' })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async updateTechnologyById(req, res) {
        const { id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res
                .status(422)
                .json({ message: 'ID inválido!' })
        }

        const technology = await Technology.findOne({ _id: id })

        if (!technology) {
            return res
                .status(404)
                .json({ message: 'Tecnologia não encontrada!' })
        }

        const { name, iconPrefix, iconName } = req.body

        if (!name) {
            return res
                .status(422)
                .json({ message: 'O nome da tecnologia é obrigatório!' })
        }

        const updatedTechnologyData = {
            name,
            icon: {
                iconPrefix,
                iconName
            }
        }

        try {
            await Technology.findByIdAndUpdate(id, updatedTechnologyData)

            res.status(201)
                .json({ message: 'Tecnologia atualizada com sucesso!' })
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }

    static async removeTechnologyById(req, res) {
        const { id } = req.params

        try {
            if (!mongoose.isValidObjectId(id)) {
                return res
                    .status(422)
                    .json({ message: 'ID inválido!' })
            }

            const technology = await Technology.findOne({ _id: id })

            if (!technology) {
                return res
                    .status(404)
                    .json({ message: 'Tecnologia não encontrada!' })
            }

            await Technology.findByIdAndDelete(id)

            res.status(200)
                .json({ message: 'Tecnologia excluída com sucesso!'})
        } catch (err) {
            res.status(500)
                .json({ message: 'Ops! Ocorreu um problema inesperado.', error: err })
        }
    }
}