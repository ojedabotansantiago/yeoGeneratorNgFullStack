import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import {
  TodoService
} from "../../services/todo-service";

type Todo = {
  todoMessage: string;
  _id?: string;
};

@Component({
  selector: "primerTemplate-cmp",
  templateUrl: "todo/templates/primerTemplate.html",
  styleUrls: ["todo/styles/todo.css"]
})
export class primerTemplateCmp implements OnInit {
  title: string = "Angular";
  placeHolder: string = "Añade un TODO";
  todos: Todo[] = [];
  todoForm: Todo;

  constructor(private _todoService: TodoService) {
    this.todoForm = {
      todoMessage: ""
    };
  }

  ngOnInit() {}
}
