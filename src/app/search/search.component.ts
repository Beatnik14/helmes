import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchResult = new EventEmitter<string>();
  @Output() searchResultHistory = new EventEmitter<string>();
  searchHistory: string[] = [];
  constructor(private searchService: SearchService) {}
  search: string = '';
  ngOnInit(): void {
    this.searchHistory = this.searchService.getFromLocalStorage();
  }
  onSearch() {
    this.searchResult.emit(this.search);
    this.searchHistory.splice(0, 1, this.search);
    this.searchHistory = this.searchService.getFromLocalStorage();
  }
  onSearchHistory(singleSearchHistory: string) {
    this.search = singleSearchHistory;
    this.searchResultHistory.emit(singleSearchHistory);
    this.searchHistory.splice(0, 1, this.search);
  }
}
