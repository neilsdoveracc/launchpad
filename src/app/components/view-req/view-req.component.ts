import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/auth/user.service';

@Component({
  selector: 'app-view-req',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './view-req.component.html',
  styleUrls: ['./view-req.component.scss']
})
export class ViewReqComponent implements OnInit {
  reqForm: FormGroup = new FormGroup({});
  reqData: any;
  state?: any;
  approvalDecision: string = 'No';
  isAdmin: boolean = false; // This will determine if the user can see the CV section

  // Candidates array
  candidates = [
    {
      name: 'John Doe',
      vendor: 'Vendor A',
      cv: 'john_doe_cv.pdf'
    },
    {
      name: 'Jane Smith',
      vendor: 'Vendor B',
      cv: 'jane_smith_cv.pdf'
    },
    {
      name: 'Michael Johnson',
      vendor: 'Vendor C',
      cv: 'michael_johnson_cv.pdf'
    },
    {
      name: 'Emily Davis',
      vendor: 'Vendor D',
      cv: 'emily_davis_cv.pdf'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService // Inject UserService
  ) {}

  ngOnInit(): void {
    // Access the data passed through state
    this.reqData = history.state.data;
    this.state = this.router?.getCurrentNavigation()?.extras.state;

    this.reqForm = new FormGroup({
      ReqId: new FormControl(this.reqData?.ReqId || '', [Validators.required]),
      JobTitle: new FormControl(this.reqData?.JobTitle || '', [Validators.required]),
      CreatedBy: new FormControl(this.reqData?.CreatedBy || '', [Validators.required]),
      CreatedDate: new FormControl(this.reqData?.CreatedDate || '', [Validators.required]),
      DeptId: new FormControl(this.reqData?.DeptId || '', [Validators.required]),
      Status: new FormControl(this.reqData?.Status || '', [Validators.required])
    });

    // Determine if the user is an admin
    this.checkAdminRole();
  }

  checkAdminRole(): void {
    const userRole = this.userService.getUserRole();
    if (userRole && userRole.username === "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    console.log(this.isAdmin);
  }
  goBack(): void {
    this.location.back();
  }
}