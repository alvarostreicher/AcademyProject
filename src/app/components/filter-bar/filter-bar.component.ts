import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ApiCallsService } from '../../api-calls.service';
import { Observable, Subscription } from 'rxjs';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, OnDestroy {
  @Output() categoryClick : EventEmitter<string> = new EventEmitter<string>();
  categories$ : Observable<[]>;

  constructor( private apiCallsService: ApiCallsService ) { }

  getCaterogies() {
   this.categories$ = this.apiCallsService.getCategories();
  }
  ngOnInit() {
    this.getCaterogies();
  }

  ngOnDestroy(){
    
  }

  setFilter = (category) => {
    this.categoryClick.emit(category)
  }

}
