import { registerLocaleData } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit {
  constructor() { }
  
  // Receives and stores the form data from <app-input-form> component
  @Input() dataTable: any;

  // Set default variables for our table
  startBalance: number = 0;
  outputContributions: number = 0;
  outputEarnings: number = 0;
  outputFees: number = 0;
  outputTax: number = 0;
  withdrawals: number = 0;
  endBalance: number = 0;
  yearlyOutputData: {}[] = [];

  // Assume/set years of contribution period (yearsContribution)
  YEARS_CONTRIBUTION: number = 30;
  YEAR_START: number = 2020;
  AGE_START: number = 45;

  ngOnInit(): void {}
  
  // Generates an array of all data for x number years between YEAR_START up until + YEARS_CONTRIBUTION
  getYearlyData() {
    this.initOutputData();


    const userData = this.dataTable;

    for (let x = 0; x <= this.YEARS_CONTRIBUTION; x++){
      this.startBalance = x === 0 ? this.startBalance : this.endBalance;
      
      // this.outputContributions = x === 0 ? 
      //       this.dataTable.salary * (this.dataTable.pctContribution/100) : 
      //       this.outputContributions * (1 + this.dataTable.pctInflation/100) ;

      // this.outputContributions =  (this.dataTable.ageStopContribution && this.dataTable.ageStopContribution > this.AGE_START) ?
      //                             (this.dataTable.ageStopContribution < (this.AGE_START + x) ? ( ): ) :
      
      if (userData.ageStopContribution && userData.ageStopContribution > this.AGE_START) {
        if (userData.ageStopContribution >= (this.AGE_START + x)) {
          this.outputContributions =  x === 0 ? 
                                      userData.salary * (userData.pctContribution/100) : 
                                      this.outputContributions * (1 + userData.pctInflation/100) ;

          console.log('salary = ', userData.salary)
        } else {
          this.outputContributions = 0;
        }
      }
      

      this.outputEarnings = (this.startBalance + this.outputContributions) * (this.dataTable.pctEarnings/100);
      this.outputFees = (this.startBalance + this.outputContributions + this.outputEarnings) * (this.dataTable.pctFees/100);
      this.outputTax = (this.outputContributions + this.outputEarnings) * (this.dataTable.pctTax/100);                       


      /* Set withdrawal value to 0, until hitting the age of withdrawal start.
       * If the withdrawal start age is less than or equal to contribution start age of 45 (START_AGE), withdrawal age is INVALID. So,  withdrawal is set to 0;
       * If withdrawal age is valid, withdrawals will start on the specified age.
      */

      this.withdrawals = (this.dataTable.ageStartWithdrawal && this.dataTable.ageStartWithdrawal > this.AGE_START) ?
                         (this.dataTable.ageStartWithdrawal <= (this.AGE_START + x) ? this.startBalance * (this.dataTable.pctWithdrawal/100) : 0 ) : 0;
            
      this.endBalance = this.startBalance + this.outputContributions + this.outputEarnings - this.outputFees - this.outputTax - this.withdrawals;
      
      // Save calculated financial data to an array for year (x)
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

    return this.yearlyOutputData;
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
