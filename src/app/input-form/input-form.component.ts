import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
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
      // this.isFormValid = true;   
      // this.formData = {
      //   salary: 100000,
      //   pctContribution: 9.5,
      //   pctInflation: 3,
      //   pctEarnings: 7.5,
      //   pctFees: 1.5,
      //   pctTax: 15,
      //   pctWithdrawal: 5,
      //   ageStartWithdrawal: null,
      //   ageStopContribution: null
      // }

    // if (form.status === "VALID") {   
      
    //   this.isHidden = true;
    //   this.isFormValid = true;
    //   this.formData = form.value;
    // } else {
    //   this.isHidden = false;
    // }



    if (form.status === "VALID") {
      this.isFormValid = true;
      this.isHidden = true;
      this.formData = this.getYearlyData(form.value);      
    } else {
      this.isHidden = false;
    }
  }











  // INSTEAD, perform the data calculations here and share them to the table and chart components
  // Set default variables for our table

  // User's input form data
  salary: number = 0;
  pctContribution: number = 0;
  pctInflation: number = 0;
  pctEarnings: number = 0;
  pctFees: number = 0;
  pctTax: number = 0;
  pctWithdrawal: number = 0;
  ageStartWithdrawal: number = 0;
  ageStopContribution: number = 0;
  
  // User's output data
  startBalance: number = 0;
  outputContributions: number = 0;
  outputEarnings: number = 0;
  outputFees: number = 0;
  outputTax: number = 0;
  withdrawals: number = 0;
  endBalance: number = 0;
  yearlyOutputData: {}[] = [];

  // Assume/set years of contribution period (yearsContribution)
  YEARS_CONTRIBUTION: number = 50;
  YEAR_START: number = 2020;
  AGE_START: number = 45;
  
  // Generates an array of all data for x number years between YEAR_START up until + YEARS_CONTRIBUTION
  getYearlyData(data: any) {

    // Reset all the data variables, to prevent further recalculations that override the rendered data on the table. 
    this.initOutputData();

    for (let x = 0; x <= this.YEARS_CONTRIBUTION; x++){
      this.startBalance = x === 0 ? this.startBalance : this.endBalance;


      /* Continue calculating contributions until the age when contribution stops `ageStopContribution`.
       * From age `ageStopContribution` onwards, set contributions to 0.  
       * Else, if no age (ageStopContribution) is set, calculate contribution all throughout the contribution period.
       * 
       * IF statements are used instead of ternary operators due to use of multiple complicated conditions.
       * Readability is affected if multiple nested ternary operations are used.
      */
      
      if (data.ageStopContribution && data.ageStopContribution > this.AGE_START) {
        if ((this.AGE_START + x) <= data.ageStopContribution) {
          this.outputContributions =  x === 0 ? data.salary * (data.pctContribution/100) : this.outputContributions * (1 + data.pctInflation/100);
        } else {
          this.outputContributions = 0;
        }
      } else {
        this.outputContributions =  x === 0 ? data.salary * (data.pctContribution/100) : this.outputContributions * (1 + data.pctInflation/100);        
      }
      
      this.outputEarnings = (this.startBalance + this.outputContributions) * (data.pctEarnings/100);
      this.outputFees = (this.startBalance + this.outputContributions + this.outputEarnings) * (data.pctFees/100);
      this.outputTax = (this.outputContributions + this.outputEarnings) * (data.pctTax/100);                       


      /* Set withdrawal value to 0, until hitting the age of withdrawal start.
       * If the withdrawal start age is less than or equal to contribution start age of 45 (START_AGE), withdrawal age is INVALID. So,  withdrawal is set to 0;
       * If withdrawal age is valid, withdrawals will start on the specified age.
      */
      this.withdrawals = (data.ageStartWithdrawal && data.ageStartWithdrawal > this.AGE_START) ?
                         (data.ageStartWithdrawal <= (this.AGE_START + x) ? this.startBalance * (data.pctWithdrawal/100) : 0 ) : 0;
            
      this.endBalance = this.startBalance + this.outputContributions + this.outputEarnings - this.outputFees - this.outputTax - this.withdrawals;
      
      /* Save calculated financial data to an array for year (x).
       * This will be used to display the data per column in the table       
      */
      this.yearlyOutputData[x] = {        
        year: this.YEAR_START + x,
        age: this.AGE_START + x,
        startBalance: Math.ceil(this.startBalance),
        contributions: Math.ceil(this.outputContributions),
        earnings: Math.ceil(this.outputEarnings),
        fees: Math.ceil(this.outputFees),
        tax: Math.ceil(this.outputTax),
        withdrawals: Math.ceil(this.withdrawals),
        endBalance: Math.ceil(this.endBalance)
      }
    }
    
    return this.yearlyOutputData;  // This is the array of object data that will be passed to the list and chart components for tabulation.
  } 

  initOutputData() {
    this.startBalance = 300000,
    this.outputContributions = 0,
    this.outputEarnings = 0,
    this.outputFees = 0,
    this.outputTax = 0,
    this.withdrawals = 0,
    this.endBalance = 0,
    this.yearlyOutputData = []
  }



}
