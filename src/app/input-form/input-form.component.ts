import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {    
  constructor() {}
  ngOnInit(): void {}
  

    /*
     * isFormValid = derived from NgForm objects's form.status property, and tells us when the form has valid input data.* 
     * formData = an object to which our form inputs will be saved. Data from these will be used for the calculations for the table and chart display.
     * isHidden = tracked by the error msg and app-output-view elements.     
     * If it is true, form is valid, data is processed and reveals table and chart. Error message is hidden.
     * Otherwise, form is invalid, table and chart are hidden. Error message is revealed.
    */


  isFormValid: boolean = false;
  formData: {} = {};
  isHidden: boolean = true;


  /* NgForm object is used as a source of our input data. 
   * NgForm is a readily exposed object for us to access. We can access the form input data from here.
  */
  onDataSubmit(form: NgForm) { 
    
    // Dummy data for test
    // ------------------- 
      this.isFormValid = true;   
      this.formData = {
        salary: 100000,
        pctContribution: 9.5,
        pctInflation: 3,
        pctEarnings: 7.5,
        pctFees: 1.5,
        pctTax: 15,
        pctWithdrawal: 5,
        ageStartWithdrawal: 54,
        ageStopContribution: 54
      }

      // console.log(form)
      // console.log(this.formData);

    // if (form.status === "VALID") {
    //   console.log(form)
      
    //   this.isHidden = true;
    //   this.isFormValid = true;
    //   this.formData = form.value;
    //   console.log(this.formData);
    // } else {
    //   this.isHidden = false;
    // }
  }
}
