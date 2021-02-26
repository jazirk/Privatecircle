import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.scss']
})
export class GridDetailsComponent implements OnInit {

  id: number;
  companyDetails: string[] = [];
  constructor(private activatedRoute: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      this.companyDetails = this.dataStorageService.getCompanyDetails(this.id - 1);
    });
  }

}
