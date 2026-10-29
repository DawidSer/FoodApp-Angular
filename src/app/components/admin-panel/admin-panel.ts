import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-admin-panel',
  styleUrl: './admin-panel.scss',
  templateUrl: './admin-panel.html',
})
export class AdminPanel {}
