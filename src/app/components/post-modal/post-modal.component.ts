import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiCallsService } from 'src/app/api-calls.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit, OnDestroy {

  Forma : FormGroup;
  categories : Array<object> = [];
  sub$ : Subscription;
  modalTitle : String;
  @Output() sendPost : EventEmitter<object> = new EventEmitter<object>();

  constructor(private formBuilder : FormBuilder, private http : ApiCallsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getCategories();
    if(!this.data){
      this.modalTitle = 'Create Post';
      this.Forma = this.formBuilder.group({
        title: [null, Validators.required],
        id:[Math.floor(Math.random()*100)+10],
        shortDescription: [null,Validators.required],
        category: [this.categories.length > 0 ? this.categories[0] : '' , [Validators.required, Validators.min(0)]],
        image: ['https://source.unsplash.com/random', [Validators.required, Validators.pattern("^(http|https)+://+[a-z-A-Z|.|?|%|0-9|/_=+]+")]]
      })
    } else {
      this.modalTitle = 'Edit Post';
      this.Forma = this.formBuilder.group({
        title: [this.data.title, Validators.required],
        id: [this.data.id],
        shortDescription: [this.data.description,Validators.required],
        category: [this.categories.length > 0 ? this.categories[0] : this.data.category , [Validators.required, Validators.min(0)]],
        image: [this.data.image, [Validators.required, Validators.pattern("^(http|https)+://+[a-z-A-Z|.|?|%|0-9|/_=+]+")]]
      })
    }
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
