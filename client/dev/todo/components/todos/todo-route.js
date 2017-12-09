"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var todo_cmp_1 = require("../../components/todos/todo-cmp");
var primerTemplate_cmp_1 = require("../../components/primerTemplate/primerTemplate-cmp");
var menu_cmp_1 = require("../../components/menu/menu-cmp");
var todoRoutes = [
    {
        path: "",
        component: todo_cmp_1.TodoCmp,
        pathMatch: "full"
    },
    {
        path: "primerTemplateCmp",
        component: primerTemplate_cmp_1.primerTemplateCmp,
        pathMatch: "full"
    },
    {
        path: "menu",
        component: menu_cmp_1.menuCmp,
        pathMatch: "full"
    }
];
exports.todoRouting = router_1.RouterModule.forRoot(todoRoutes);
