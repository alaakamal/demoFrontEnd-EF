import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employees } from '../employees';
import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees?: Employees[];
  constructor(private employeesService: EmployeesService) { }
  ngOnInit() {
    this.employeesService.getEmployees().subscribe(employees => {
      console.log(employees);
      this.employees = employees;
      console.log(this.employees);
    });
  }
  /*
  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(data=> {
      console.log(data);
      console.log(data.at(1)?.id);
      console.log(data.at(1)?.employeeid);
      console.log(data.at(1)?.firstname);
      console.log(data.at(1)?.lastname);
      console.log(data.at(1)?.jobid);
      console.log(data.at(1)?.phonenumber);
      console.log(data.at(1)?.salary);
      console.log(data.at(1)?.hiredate);
      console.log(data.at(1)?.email);

      this.employees = data

      console.log(data.at(1)?.id);
      console.log(data.at(1)?.employeeid);
      console.log(data.at(1)?.firstname);
      console.log(data.at(1)?.lastname);
      console.log(data.at(1)?.jobid);
      console.log(data.at(1)?.phonenumber);
      console.log(data.at(1)?.salary);
      console.log(data.at(1)?.hiredate);
      console.log(data.at(1)?.email);

    });
  }
  */
}
