import {Article} from "../entity/article.entity";

export class ArticleController {
    constructor() {
    }

    static async createArticle(req:any, res:any) {
        try {
            const article = req.body;
            const newArticle = Article.create(article);
            await newArticle.save();
            res.json(newArticle);
        } catch (error) {
            console.error("An unexpected error occurred while creating article", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating article"
            });
        }
    }

    static async updateArticle(req:any, res:any) {
        try {
            const id = req.params.id;
            const article = await Article.findOne({where: {id: id}});
            if(!article) return res.status(401).json({message: "Article not found"})
            await Article.update(id, req.body);
            return res.json({message: "Article updated"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while updating article"
            });
        }
    }

    static async getArticles(req:any, res:any) {
        try {
            const articles = await Article.find();
            return res.json(articles)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting articles"
            });
        }
    }

    static async getArticleById(req:any, res:any) {
        try {
            const id = req.params.id;
            const article = await Article.findOne({where: {id: id}});
            if(!article) return res.status(401).json({message: "Article not found"})
            return res.json(article)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting article by id"
            });
        }
    }


}
