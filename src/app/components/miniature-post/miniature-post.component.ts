import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  @Input() route : [];
  sub$ : Subscription;
  @Output() reference : EventEmitter<any> = new EventEmitter<any>();
  @Output() snackReference : EventEmitter<any> = new EventEmitter<any>();
  @Output() editPost : EventEmitter<object> = new EventEmitter<object>();
  
  
  constructor(private sanitization : DomSanitizer, public dialog : MatDialog, public snackBar : MatSnackBar) { }

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
        description: this.shortDescription,
        category: this.category
      }
    });
     refModal.componentInstance.sendPost.subscribe((post)=> this.editPost.emit(post));
     this.reference.emit(refModal);
  }

  sendDelete(){
    let snackRef = this.snackBar.open(`Dele Post: ${this.title}`, 'UNDO', { duration: 3000 });
    let data = {snack: snackRef, id: this.id}
    this.snackReference.emit(data);
  }

}
