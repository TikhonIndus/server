import ProductModel from '../models/Product.js'
import AppError from '../errors/AppError.js'

class Product {
    async getAll(req, res, next) {
        try {
            const products = await ProductModel.getAll(req.params)
            res.json(products)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const product = await ProductModel.getOne(req.params.id)
            res.json(product)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const product = await ProductModel.create(req.body, req.files?.image)
            res.json(product)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const product = await ProductModel.update(req.params.id, req.body, req.files?.image)
            res.json(product)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Не указан id товара')
            }
            const product = await ProductModel.delete(req.params.id)
            res.json(product)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }
}

export default new Product()