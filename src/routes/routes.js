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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../entity/user");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.get('/api/user', userController_1.UserController.getUser);
router.post('/api/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    console.log(req.body);
    if (!((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.firstName) || !((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.lastName) || !((_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.age)) {
        return res.status(400).send({
            message: "Please provide firstName, lastName and age"
        });
    }
    const { firstName, lastName, age } = req.body;
    const user = user_1.User.create({ firstName, lastName, age });
    yield user.save();
    return res.json(user);
}));
router.put('/api/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f, _g;
    console.log(req.body);
    if (!((_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.id) || !((_e = req === null || req === void 0 ? void 0 : req.body) === null || _e === void 0 ? void 0 : _e.firstName) || !((_f = req === null || req === void 0 ? void 0 : req.body) === null || _f === void 0 ? void 0 : _f.lastName) || !((_g = req === null || req === void 0 ? void 0 : req.body) === null || _g === void 0 ? void 0 : _g.age)) {
        return res.status(400).send({
            message: "Please provide id, firstName, lastName and age"
        });
    }
    const user = yield user_1.User.findOne({ where: { id: req.body.id } });
    if (!user) {
        return res.status(400).send({
            message: "User not found"
        });
    }
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    yield user.save();
    return res.json(user);
}));
exports.default = router;
