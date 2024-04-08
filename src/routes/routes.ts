import express from 'express'
import {UserController} from "../controllers/userController";
import {CommandeController} from "../controllers/commande.controller";
import {ArticleController} from "../controllers/article.controller";
import {TableController} from "../controllers/table.controller";
import {ReservationController} from "../controllers/reservation.controller";
import {EmployeController} from "../controllers/employe.controller";
import {ClientController} from "../controllers/client.controller";

const router = express.Router()

router.get('/api/ping', (req, res) => {
    res.send('pong')
});

router.get('/api/user', UserController.getUser);
router.post('/api/user',  UserController.createUser);
router.put('/api/user',  UserController.updateUser);


// Routes pour les commandes
router.get('/api/commandes', CommandeController.getAll);
router.post('/api/commandes', CommandeController.create);
router.get('/api/commandes/:id', CommandeController.getCommandeById);

// Routes pour les articles
router.get('/api/articles', ArticleController.getArticles);
router.post('/api/articles', ArticleController.createArticle);
router.put('/api/articles/:id', ArticleController.updateArticle);
router.get('/api/articles/:id', ArticleController.getArticleById);

// Routes pour les tables
router.get('/api/tables', TableController.getAll);
router.post('/api/tables', TableController.create);
router.get('/api/tables/:id', TableController.getTableById);

// Routes pour les réservations
router.get('/api/reservations', ReservationController.getAll);
router.post('/api/reservations', ReservationController.create);
router.put('/api/reservations/:id', ReservationController.update);
router.patch('/api/reservations/cancel/:id', ReservationController.cancel);
router.get('/api/reservations/:id', ReservationController.getReservationById)

// Routes pour les employés
router.get('/api/employes', EmployeController.getAll);
router.post('/api/employes', EmployeController.create);
router.get('/api/employes/:id', EmployeController.getEmployeById);

// Routes pour les clients
router.get('/api/clients', ClientController.getAll);
router.post('/api/clients', ClientController.create);
router.get('/api/clients/:id', ClientController.getClientById);

export default router
