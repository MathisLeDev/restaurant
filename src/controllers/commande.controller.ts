import {User} from "../entity/user";
import {Commande} from "../entity/commande.entity";
import {Client} from "../entity/client.entity";
import {Employe} from "../entity/employe.entity";
import {Article} from "../entity/article.entity";

export class CommandeController {

    static async getAll(req: any, res: any) {
        try {
            const commandes = await Commande.find();
            return res.json(commandes)
        } catch (e) {
            return res.status(500).send({
                message: "An unexpected error occurred while associating maladie"
            });
        }
    }

    static async getCommandeById(req: any, res: any) {
        try {
            const id = req.params.id;
            const commande = await Commande.findOne({where: {id: id}});
            if(!commande) return res.status(401).json({message: "Commande not found"})
            return res.json(commande)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting commande by id"
            });
        }
    }

    static async create(req: any, res: any) {
        try {
            // Extraire les données de la requête
            const { clientId, employeId, dateEtHeure, statut, articles } = req.body;

            // Trouver le client et l'employé associés
            const client = await Client.findOne({where: {id: clientId}});
            const employe = await Employe.findOne({where:{id:employeId}});

            // Vérifier si le client et l'employé existent
            if (!client || !employe) {
                return res.status(404).json({ message: "Client or employe not found" });
            }

            const articlesArray = await Promise.all(articles.map(async (articleId: any) => {
                const article = await Article.findOne({where:{id:articleId}});
                if (!article) {
                    return res.status(404).json({ message: "Article not found" });
                }
                return article;
            }));

            console.log("ici", articlesArray[0]);

            // Créer une nouvelle commande avec les données de la requête
            const nouvelleCommande = Commande.create({
                client: client,
                employe: employe,
                dateEtHeure: dateEtHeure,
                statut: statut,
                articles: articlesArray
            });

            console.log("nouvelleCommande", nouvelleCommande)

            // Enregistrer la nouvelle commande
            const resultat = await nouvelleCommande.save();

            // Retourner la nouvelle commande créée
            res.json(resultat);
        } catch (error) {
            console.error("An unexpected error occurred while creating commande", error);
            return res.status(500).send({
                message: "An unexpected error occurred while creating commande"
            });
        }
    }


}
