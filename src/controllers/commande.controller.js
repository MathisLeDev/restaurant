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
exports.CommandeController = void 0;
const commande_entity_1 = require("../entity/commande.entity");
const client_entity_1 = require("../entity/client.entity");
const employe_entity_1 = require("../entity/employe.entity");
const article_entity_1 = require("../entity/article.entity");
class CommandeController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commandes = yield commande_entity_1.Commande.find();
                return res.json(commandes);
            }
            catch (e) {
                return res.status(500).send({
                    message: "An unexpected error occurred while associating maladie"
                });
            }
        });
    }
    static getCommandeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const commande = yield commande_entity_1.Commande.findOne({ where: { id: id } });
                if (!commande)
                    return res.status(401).json({ message: "Commande not found" });
                return res.json(commande);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting commande by id"
                });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extraire les données de la requête
                const { clientId, employeId, dateEtHeure, statut, articles } = req.body;
                // Trouver le client et l'employé associés
                const client = yield client_entity_1.Client.findOne({ where: { id: clientId } });
                const employe = yield employe_entity_1.Employe.findOne({ where: { id: employeId } });
                // Vérifier si le client et l'employé existent
                if (!client || !employe) {
                    return res.status(404).json({ message: "Client or employe not found" });
                }
                const articlesArray = yield Promise.all(articles.map((articleId) => __awaiter(this, void 0, void 0, function* () {
                    const article = yield article_entity_1.Article.findOne({ where: { id: articleId } });
                    if (!article) {
                        return res.status(404).json({ message: "Article not found" });
                    }
                    return article;
                })));
                console.log("ici", articlesArray[0]);
                // Créer une nouvelle commande avec les données de la requête
                const nouvelleCommande = commande_entity_1.Commande.create({
                    client: client,
                    employe: employe,
                    dateEtHeure: dateEtHeure,
                    statut: statut,
                    articles: articlesArray
                });
                console.log("nouvelleCommande", nouvelleCommande);
                // Enregistrer la nouvelle commande
                const resultat = yield nouvelleCommande.save();
                // Retourner la nouvelle commande créée
                res.json(resultat);
            }
            catch (error) {
                console.error("An unexpected error occurred while creating commande", error);
                return res.status(500).send({
                    message: "An unexpected error occurred while creating commande"
                });
            }
        });
    }
}
exports.CommandeController = CommandeController;
