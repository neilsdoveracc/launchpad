import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule, 
        RouterLink, 
        RouterOutlet,
        RouterLinkActive,
    ],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })

  export class UserComponent {}