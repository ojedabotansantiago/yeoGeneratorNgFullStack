"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var todo_cmp_1 = require("../../components/todos/todo-cmp");
var primerTemplate_cmp_1 = require("../../components/primerTemplate/primerTemplate-cmp");
var menu_cmp_1 = require("../../components/menu/menu-cmp");
var carouselGeneral_cmp_1 = require("../../components/carousel/carouselGeneral-cmp");
var todoRoutes = [
    {
        path: "",
        component: menu_cmp_1.menuCmp,
        pathMatch: "full"
    }, {
        path: "TodoCmp",
        component: todo_cmp_1.TodoCmp,
        pathMatch: "full"
    },
    {
        path: "primerTemplateCmp",
        component: primerTemplate_cmp_1.primerTemplateCmp,
        pathMatch: "full"
    },
    {
        path: "carouselGeneralCmp",
        component: carouselGeneral_cmp_1.carouselGeneralCmp,
        pathMatch: "full"
    }
];
exports.todoRouting = router_1.RouterModule.forRoot(todoRoutes);
