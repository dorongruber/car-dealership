import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Directive({
    standalone: true,
    selector: '[appColorPicker]',
})
export class ColorPickerDirective implements OnChanges {
    @Input() appColorPicker!: AbstractControl<any, any>;
    constructor(private el: ElementRef) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.setControValue();
    }

    @HostListener("change") onValueChange() {
        this.setControValue();
    }

    setControValue() {
        this.appColorPicker?.setValue(this.el.nativeElement.value);
    }
    
}