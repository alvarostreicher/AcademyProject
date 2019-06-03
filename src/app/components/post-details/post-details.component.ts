import { Component, OnInit, Input } from '@angular/core';
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
  Image: String; 

  constructor( private route : ActivatedRoute, private apiCallsServices : ApiCallsService ) { }

   ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get("id")
    this.getPost();
  }

  // getPost(){
  //   let data = [{new:  null}];
  //  this.apiCallsServices.getPosts().subscribe((posts)=>{
  //    data[0].new = posts;
  //    this.filteredPost = data.map((post,index)=> post.new.filter((filterpost)=> filterpost.id == this.paramId ));
  //  });
  // }

  getPost(){
    this.filteredPost = this.apiCallsServices.getPost(this.paramId);
  }



}
