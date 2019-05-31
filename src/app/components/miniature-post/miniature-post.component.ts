import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-miniature-post',
  templateUrl: './miniature-post.component.html',
  styleUrls: ['./miniature-post.component.scss']
})
export class MiniaturePostComponent implements OnInit {
  @Input() Image: String;
  @Input() title: String;
  @Input() shortDescription: String;
  @Input() description: String;
  @Input() id: any;
  @Input() category: String;
  @Input() comments: Number;
  
  constructor(private sanitization : DomSanitizer, public dialog : MatDialog) { }

  ngOnInit() {
    
  }

  getImage = () => {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${this.Image})`);
  }

  sendEdit(){
    let refModal = this.dialog.open(PostModalComponent, {
      minWidth: '40vw', 
      minHeight: '40vh',
      data: {
        id: this.id,
        image: this.Image,
        title: this.title,
        description: this.description,
        category: this.category
      }
    })
  }

}
