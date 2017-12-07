import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

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
  title: string = "primer component";
  placeHolder: string = "componente 1º";
  todos: Todo[] = [];
  todoForm: Todo;


  ngOnInit() {
    this._hellowWolrd();
  }

  private _hellowWolrd(): void {
    console.log('hellow world')
  }
}
