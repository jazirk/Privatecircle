import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {Company} from '../../shared/models/company.model';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit, OnDestroy {
  @Input() companies;
  searchText: string = '';
  companyData;
  headerTitles = ['Date', 'Name', 'No.of entities', 'Actions'];
  selectedCompany;
  searchSub: Subscription;
  constructor(private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.searchSub = this.dataStorageService.searchSubject.pipe(debounceTime(300)).subscribe((searchText: string) => {
      this.filterValue(searchText);
      this.searchText =  searchText;
    });
  }

  selectCompany(item) {
    this.selectedCompany = item.id;
    this.router.navigate(['/details', item.id]);
  }

  filterValue(searchText) {
    let filteredValue: Company[] = [];
    filteredValue = this.companies.filter((data: any) => {
      return data.name.toLowerCase().includes(searchText.trim().toLowerCase())
    });
    this.companyData = filteredValue;
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}
