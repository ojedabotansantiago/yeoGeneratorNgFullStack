import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todos/todo-cmp";
import { primerTemplateCmp } from "./todo/components/primerTemplate/primerTemplate-cmp";
import { todoRouting } from "./todo/components/todos/todo-route";
import { TodoService }   from "./todo/services/todo-service";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting
    ],
    declarations: [
      App,
      TodoCmp,
      primerTemplateCmp
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
