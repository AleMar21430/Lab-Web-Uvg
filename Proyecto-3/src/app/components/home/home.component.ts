import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	@HostListener('document:mousemove', ['$event'])
	parallax(event: MouseEvent) {
		const parallaxSpans = document.querySelectorAll('.Parallax');
		parallaxSpans.forEach((shift: any) => {
			const position = shift.getAttribute('pr-val');
			const x = ((event.pageX - window.innerWidth/2) * Number(position)) / 500 ;
			const y = ((event.pageY - window.innerHeight/2) * Number(position)) / 500;
			shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}
}
