import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {
  @Input() cartCount = 0;
  @Output() searchChanged = new EventEmitter<string>();
  @Output() categorySelected = new EventEmitter<string>();
  @Output() cartClicked = new EventEmitter<void>();
  @Output() pageSelected = new EventEmitter<string>();
}
