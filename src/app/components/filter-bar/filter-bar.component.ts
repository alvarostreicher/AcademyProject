import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../api-calls.service';
import { Observable } from 'rxjs';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  categories$ : Observable<[]>;
 

  constructor( private apiCallsService: ApiCallsService ) { }

  getCaterogies() {
   this.categories$ = this.apiCallsService.getCategories();
  }
  ngOnInit() {
    this.getCaterogies();
  }

  setFilter = (category) => {
    console.log(category);
  }

}
