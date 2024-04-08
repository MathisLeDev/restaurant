"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commande = void 0;
// commande.entity.ts
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
const employe_entity_1 = require("./employe.entity");
const article_entity_1 = require("./article.entity");
let Commande = class Commande extends typeorm_1.BaseEntity {
};
exports.Commande = Commande;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Commande.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.commandes),
    __metadata("design:type", client_entity_1.Client)
], Commande.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employe_entity_1.Employe, employe => employe.commandes),
    __metadata("design:type", employe_entity_1.Employe)
], Commande.prototype, "employe", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Commande.prototype, "dateEtHeure", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Commande.prototype, "statut", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_entity_1.Article, article => article.commande),
    __metadata("design:type", Array)
], Commande.prototype, "articles", void 0);
exports.Commande = Commande = __decorate([
    (0, typeorm_1.Entity)()
], Commande);
