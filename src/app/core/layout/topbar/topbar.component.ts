import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  @Output() emitOpenSideMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  openSideMenu: boolean = false;

  toggleSIdeMenu() {
    this.openSideMenu = !this.openSideMenu;
    this.emitOpenSideMenu.emit(this.openSideMenu);
  }
}
