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
    selector: "menu",
    templateUrl: "todo/templates/menuTemplate.html",
    styleUrls: ["todo/styles/todo.css"]
})
export class menuCmp implements OnInit {
    title: string = "primer menu";
    placeHolder: string = "menu";

    ngOnInit() {
        this._hellowWolrd();
    }

    private _hellowWolrd(): void {
        console.log('menu world')
    }
}
