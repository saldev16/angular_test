import { Component } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, SideNavComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  openSideNav: boolean = false;

  toggleSideNav(event: boolean) {
    this.openSideNav = event;
  }
}
