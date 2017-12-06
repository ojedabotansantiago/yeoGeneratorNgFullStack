"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var primerTemplate_cmp_1 = require("../../components/primerTemplate/primerTemplate-cmp");
var todoRoutes = [
    {
        path: "",
        component: primerTemplate_cmp_1.primerTemplateCmp,
        pathMatch: "full"
    }
];
exports.todoRouting = router_1.RouterModule.forRoot(todoRoutes);
