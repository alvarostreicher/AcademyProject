import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiCallsService } from 'src/app/api-calls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit, OnDestroy {

  Forma : FormGroup;
  categories : Array<object> = [];
  sub$ : Subscription;
  @Output() sendPost : EventEmitter<object> = new EventEmitter<object>();

  constructor(private formBuilder : FormBuilder, private http : ApiCallsService) { }

  ngOnInit() {
    this.getCategories();
    this.Forma = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null,Validators.required],
      select: [this.categories.length > 0 ? this.categories[0] : [''] , [Validators.required, Validators.min(0)]],
      url: ['https://source.unsplash.com/random', [Validators.required, Validators.pattern("^(http|https)+://+[a-z-A-Z|.|?|%|0-9|/_=+]+")]]
    })
  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

  onSubmit() {
    if(this.Forma.status === 'VALID'){
      this.sendPost.emit(this.Forma.value)
    }
  }

  getCategories(){
   this.sub$ = this.http.getCategories().subscribe((category)=> this.categories = category);
  }
}
