import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees?: Employees[];

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeesService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeesService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employees', id]);
  }
}
