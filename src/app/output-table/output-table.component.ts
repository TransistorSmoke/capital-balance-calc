import { registerLocaleData } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  // Receives and stores the form data from <app-input-form> component
  @Input() dataTable: any;
   

  // // Set default variables for our table
  // startBalance: number = 0;
  // outputContributions: number = 0;
  // outputEarnings: number = 0;
  // outputFees: number = 0;
  // outputTax: number = 0;
  // withdrawals: number = 0;
  // endBalance: number = 0;
  // yearlyOutputData: {}[] = [];

  // // Assume/set years of contribution period (yearsContribution)
  // YEARS_CONTRIBUTION: number = 35;
  // YEAR_START: number = 2020;
  // AGE_START: number = 45;
  
  // // Generates an array of all data for x number years between YEAR_START up until + YEARS_CONTRIBUTION
  // getYearlyData() {

  //   // Reset all the data variables, to prevent further recalculations that override the rendered data on the table. 
  //   this.initOutputData();
  //   const data = this.dataTable;

  //   for (let x = 0; x <= this.YEARS_CONTRIBUTION; x++){
  //     this.startBalance = x === 0 ? this.startBalance : this.endBalance;
      
  //     /* Continue processing contributions until the age when contribution stops `ageStopContribution`.
  //      * From age `ageStopContribution` onwards, set contributions to 0.  
  //      *
  //      * IF statements are used instead of ternary operators due to use of multiple complicated conditions.
  //      * Readability is affected if multiple nested ternary operations are used.    
  //     */
  //     if (data.ageStopContribution && data.ageStopContribution > this.AGE_START) {
  //       if (data.ageStopContribution >= (this.AGE_START + x)) {
  //         this.outputContributions =  x === 0 ? data.salary * (data.pctContribution/100) : this.outputContributions * (1 + data.pctInflation/100);
  //       } else {
  //         this.outputContributions = 0;
  //       }
  //     }
      
  //     this.outputEarnings = (this.startBalance + this.outputContributions) * (data.pctEarnings/100);
  //     this.outputFees = (this.startBalance + this.outputContributions + this.outputEarnings) * (data.pctFees/100);
  //     this.outputTax = (this.outputContributions + this.outputEarnings) * (data.pctTax/100);                       


  //     /* Set withdrawal value to 0, until hitting the age of withdrawal start.
  //      * If the withdrawal start age is less than or equal to contribution start age of 45 (START_AGE), withdrawal age is INVALID. So,  withdrawal is set to 0;
  //      * If withdrawal age is valid, withdrawals will start on the specified age.
  //     */
  //     this.withdrawals = (data.ageStartWithdrawal && data.ageStartWithdrawal > this.AGE_START) ?
  //                        (data.ageStartWithdrawal <= (this.AGE_START + x) ? this.startBalance * (data.pctWithdrawal/100) : 0 ) : 0;
            
  //     this.endBalance = this.startBalance + this.outputContributions + this.outputEarnings - this.outputFees - this.outputTax - this.withdrawals;
      
  //     /* Save calculated financial data to an array for year (x).
  //      * This will be used to display the data per column in the table       
  //     */
  //     this.yearlyOutputData[x] = {        
  //       year: this.YEAR_START + x,
  //       age: this.AGE_START + x,
  //       startBalance: Math.ceil(this.startBalance),
  //       contributions: Math.ceil(this.outputContributions),
  //       earnings: Math.ceil(this.outputEarnings),
  //       fees: Math.ceil(this.outputFees),
  //       tax: Math.ceil(this.outputTax),
  //       withdrawals: Math.ceil(this.withdrawals),
  //       endBalance: Math.ceil(this.endBalance)
  //     }
  //   }
    
  //   return this.yearlyOutputData;  // This is the array of object data that will be passed to the list and chart components for tabulation.
  // } 

  // initOutputData() {
  //   this.startBalance = 300000,
  //   this.outputContributions = 0,
  //   this.outputEarnings = 0,
  //   this.outputFees = 0,
  //   this.outputTax = 0,
  //   this.withdrawals = 0,
  //   this.endBalance = 0,
  //   this.yearlyOutputData = []
  // }

}
