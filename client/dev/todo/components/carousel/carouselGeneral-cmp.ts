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
    selector: "carouselGeneral-cmp",
    templateUrl: "todo/templates/carouseles/generalCarouselTemnplate.html",
    styleUrls: ["todo/styles/todo.css"]
})
export class carouselGeneralCmp implements OnInit {
    title: string = "primer menu";
    placeHolder: string = "menu";

    ngOnInit() {
        this._hellowWolrd();
    }

    private _hellowWolrd(): void {
        console.log('menu world')
    }
}
