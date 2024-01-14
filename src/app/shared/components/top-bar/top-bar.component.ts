import { Component,ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  clicado: boolean = false;

  constructor(private elRef: ElementRef) {}

  clickInputSearch() {
    this.clicado = !this.clicado;
  }

  @HostListener('document:click', ['$event'])
  fecharAoClicarFora(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.clicado = false;
    }
  }
}
