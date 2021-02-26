import {Injectable} from '@angular/core';
import {Company} from './models/company.model';
import * as data from './data.json';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  companyDetails: Array<Company> = data.companies;
  companyInfo = data.details;
  searchSubject = new Subject();

  constructor() {
  }

  getCompanies() {
    return this.companyDetails;
  }

  getCompanyDetails(id: number) {
    return this.companyInfo[id].companies;
  }
}
