import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-post-btn',
  templateUrl: './add-post-btn.component.html',
  styleUrls: ['./add-post-btn.component.scss']
})
export class AddPostBtnComponent implements OnInit {
  sub$: Subscription;
  theNewPost : object;
  @Output() newPost : EventEmitter<object> = new EventEmitter<object>();

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(PostModalComponent, { minWidth: '40vw', minHeight: '40vh'})
    this.sub$ = dialogRef.componentInstance.sendPost.subscribe((post)=> this.newPost.emit(post));

  }

}
