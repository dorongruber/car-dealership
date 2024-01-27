import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[bodyHost]'
})
export class ComponenRefDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}