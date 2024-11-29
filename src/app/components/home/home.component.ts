// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { timeout } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
    RouterLinkActive,
    ToastrModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = 'User'; // Replace with actual username logic
  isSidebarExpanded: boolean = true;

  // constructor(private toastr: ToastrService,) {}

  // viewUsersClicked() {
  //   this.toastr.warning('Yet to be implemented', 'Warning!', {
  //     timeOut: 2000,
  //   });
  // }
}