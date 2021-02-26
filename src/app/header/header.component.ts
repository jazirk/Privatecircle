import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import headerTitle from './header-title.json';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitles: Array<Header>;

  constructor(private dataStorageSrvice: DataStorageService) {
  }

  ngOnInit() {
    this.headerTitles = headerTitle.headerTitles;
  }

  search(event: Event) {
    this.dataStorageSrvice.searchSubject.next((event.target as HTMLInputElement).value);
  }

}
