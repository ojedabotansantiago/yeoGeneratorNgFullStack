import {
   Routes,
  RouterModule
} from "@angular/router";

import {
   primerTemplateCmp
   } from "../../components/primerTemplate/primerTemplate-cmp";

const todoRoutes: Routes = [
  {
    path: "",
    component: primerTemplateCmp,
    pathMatch: "full"
  }
];

export const todoRouting = RouterModule.forRoot(todoRoutes);
