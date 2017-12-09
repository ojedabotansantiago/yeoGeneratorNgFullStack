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

import {
  menuCmp
} from "../../components/menu/menu-cmp";

import {
  carouselGeneralCmp
} from "../../components/carousel/carouselGeneral-cmp";

const todoRoutes: Routes = [
  {
    path: "",
    component: menuCmp,
    pathMatch: "full"
  },{
    path: "TodoCmp",
    component: TodoCmp,
    pathMatch: "full"
  },
  {
    path: "primerTemplateCmp",
    component: primerTemplateCmp,
    pathMatch: "full"
  },
  {
    path: "carouselGeneralCmp",
    component: carouselGeneralCmp,
    pathMatch: "full"
  }
];



export const todoRouting = RouterModule.forRoot(todoRoutes);
