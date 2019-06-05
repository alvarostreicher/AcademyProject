import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallsService } from 'src/app/api-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  paramId;
  filteredPost;
  Image: String; 
  Forma : FormGroup;
  post$ : Observable<object[]>;
  
  constructor( private route : ActivatedRoute, private apiCallsServices : ApiCallsService, private formBuilder : FormBuilder,  private router: Router, ) { }

   ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get("id")
    this.getPost();
    this.Forma = this.formBuilder.group({
      comment: [null, Validators.required]
    })
  }

  ngOnDestroy() {
  }  

  getPost(){
   this.post$ = this.apiCallsServices.getPost(this.paramId);
  }

  // getPost(){
  //   this.apiCallsServices.getPost(this.paramId).subscribe((post)=> this.filteredPost = post);
  // }

  addComment(){
    if(this.Forma.status === 'VALID'){
      this.filteredPost[0][0].comments.push({
        id: this.filteredPost[0][0].comments.length + 1,
        author: 'Juan Cecina',
        content: this.Forma.value.comment
      })
    }
    this.Forma.reset();
  }

  goBack(){
    this.router.navigate([''])
  }

}
