import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	TodoCmp
} from "../../components/todos/todo-cmp";

import {
   primerTemplateCmp
   } from "../../components/primerTemplate/primerTemplate-cmp";

const todoRoutes: Routes = [
  {
    path: "",
    component: TodoCmp,
    pathMatch: "full"
  },
  {
    path: "primerTemplateCmp",
    component: primerTemplateCmp,
    pathMatch: "full"
  }
];



export const todoRouting = RouterModule.forRoot(todoRoutes);
