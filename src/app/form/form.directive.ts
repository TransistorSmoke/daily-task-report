import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appEnableTabUse]'
})
export class FormDirective {
	constructor(private element: ElementRef) { }

	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {

	const tabSpace = 16;
	const cursorStart = this.element.nativeElement.selectionStart;

	const textArea = this.element;
		if (event.code === 'Tab') {
			event.preventDefault();
			let currentText = this.element.nativeElement.value;
			this.element.nativeElement.value = currentText + '\t';
			this.element.nativeElement.selectionStart =  this.element.nativeElement.selectionEnd = cursorStart + tabSpace;
			this.element.nativeElement.focus();
		}
	}
}
