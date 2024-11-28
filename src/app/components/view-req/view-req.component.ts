import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-view-req',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './view-req.component.html',
  styleUrls: ['./view-req.component.scss']
})
export class ViewReqComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private location: Location) {

    }

  reqForm: FormGroup = new FormGroup({});
  reqData: any;
  state?:any;


  ngOnInit(): void {
    // Access the data passed through state
    this.reqData = history.state.data;
    this.state = this.router?.getCurrentNavigation()?.extras.state;

    this.reqForm = new FormGroup({
      ReqId: new FormControl(this.reqData.ReqId, [Validators.required]), // Example validation
      JobTitle: new FormControl(this.reqData.JobTitle, [Validators.required]),
      CreatedBy: new FormControl(this.reqData.CreatedBy, [Validators.required]),
      CreatedDate: new FormControl(this.reqData.CreatedDate, [Validators.required]),
      DeptId: new FormControl(this.reqData.DeptId, [Validators.required]),
      Status: new FormControl(this.reqData.Status, [Validators.required])
    });

    console.log(this.reqForm);
    
  }
  
  approvalDecision: string = 'No';

  goBack(): void {
    this.location.back(); //
  }
}
