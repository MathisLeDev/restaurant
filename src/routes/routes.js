"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const commande_controller_1 = require("../controllers/commande.controller");
const article_controller_1 = require("../controllers/article.controller");
const table_controller_1 = require("../controllers/table.controller");
const reservation_controller_1 = require("../controllers/reservation.controller");
const employe_controller_1 = require("../controllers/employe.controller");
const client_controller_1 = require("../controllers/client.controller");
const router = express_1.default.Router();
router.get('/api/ping', (req, res) => {
    res.send('pong');
});
router.get('/api/user', userController_1.UserController.getUser);
router.post('/api/user', userController_1.UserController.createUser);
router.put('/api/user', userController_1.UserController.updateUser);
// Routes pour les commandes
router.get('/api/commandes', commande_controller_1.CommandeController.getAll);
router.post('/api/commandes', commande_controller_1.CommandeController.create);
router.get('/api/commandes/:id', commande_controller_1.CommandeController.getCommandeById);
// Routes pour les articles
router.get('/api/articles', article_controller_1.ArticleController.getArticles);
router.post('/api/articles', article_controller_1.ArticleController.createArticle);
router.get('/api/articles/:id', article_controller_1.ArticleController.getArticleById);
// Routes pour les tables
router.get('/api/tables', table_controller_1.TableController.getAll);
router.post('/api/tables', table_controller_1.TableController.create);
router.get('/api/tables/:id', table_controller_1.TableController.getTableById);
// Routes pour les réservations
router.get('/api/reservations', reservation_controller_1.ReservationController.getAll);
router.post('/api/reservations', reservation_controller_1.ReservationController.create);
router.get('/api/reservations/:id', reservation_controller_1.ReservationController.getReservationById);
// Routes pour les employés
router.get('/api/employes', employe_controller_1.EmployeController.getAll);
router.post('/api/employes', employe_controller_1.EmployeController.create);
router.get('/api/employes/:id', employe_controller_1.EmployeController.getEmployeById);
// Routes pour les clients
router.get('/api/clients', client_controller_1.ClientController.getAll);
router.post('/api/clients', client_controller_1.ClientController.create);
router.get('/api/clients/:id', client_controller_1.ClientController.getClientById);
exports.default = router;
