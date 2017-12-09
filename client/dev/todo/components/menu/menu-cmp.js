"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menuCmp = /** @class */ (function () {
    function menuCmp() {
        this.title = "primer menu";
        this.placeHolder = "menu";
    }
    menuCmp.prototype.ngOnInit = function () {
        this._hellowWolrd();
    };
    menuCmp.prototype._hellowWolrd = function () {
        console.log('menu world');
    };
    menuCmp = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "todo/templates/menuTemplate.html",
            styleUrls: ["todo/styles/todo.css"]
        })
    ], menuCmp);
    return menuCmp;
}());
exports.menuCmp = menuCmp;
