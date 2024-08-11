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
      // console.log(employees);
      this.employees = employees;
      // console.log(this.employees);
    });
  }
}
