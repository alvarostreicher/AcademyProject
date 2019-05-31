import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallsService } from 'src/app/api-calls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  paramId;
  filteredPost;
  constructor( private route : ActivatedRoute, private apiCallsServices : ApiCallsService ) { }

   ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get("id")
    console.log(this.paramId)
    this.getPost();
  }

  getPost(){
    let data = {};
   this.apiCallsServices.getPosts().subscribe((posts)=>{
     for(let post of posts){
       
     }
   });
  }




}
