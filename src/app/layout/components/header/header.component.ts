import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() cartCount = 0;
  @Output() searchChanged = new EventEmitter<string>();
  @Output() cartClicked = new EventEmitter<void>();
  @Output() pageSelected = new EventEmitter<string>();
  search = '';
}
