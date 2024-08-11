import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Employees } from './employees';

@Injectable({ providedIn: 'root' })

export class EmployeesService {
  private basUrl = "http://localhost:8081/Employees";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(`${this.basUrl}`);
  }

  createEmployee(employee: Employees): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employees> {
    return this.httpClient.get<Employees>(`${this.basUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employees): Observable<Object> {
    return this.httpClient.put(`${this.basUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }
}