"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPdv = void 0;
const client_1 = require("@prisma/client");
const dbPdv = new client_1.PrismaClient();
exports.dbPdv = dbPdv;
