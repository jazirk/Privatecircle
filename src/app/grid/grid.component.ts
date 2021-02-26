import { Component, OnInit } from '@angular/core';
import {Company} from '../shared/models/company.model';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  companyList: Array<Company>
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.companyList = this.dataStorageService.getCompanies();
  }

}
