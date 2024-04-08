"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const article_entity_1 = require("../entity/article.entity");
class ArticleController {
    constructor() {
    }
    static createArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const article = req.body;
                const newArticle = article_entity_1.Article.create(article);
                yield newArticle.save();
                res.json(newArticle);
            }
            catch (error) {
                console.error("An unexpected error occurred while creating article", error);
                return res.status(500).send({
                    message: "An unexpected error occurred while creating article"
                });
            }
        });
    }
    static getArticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const articles = yield article_entity_1.Article.find();
                return res.json(articles);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting articles"
                });
            }
        });
    }
    static getArticleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const article = yield article_entity_1.Article.findOne({ where: { id: id } });
                if (!article)
                    return res.status(401).json({ message: "Article not found" });
                return res.json(article);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting article by id"
                });
            }
        });
    }
}
exports.ArticleController = ArticleController;
