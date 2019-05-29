import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-add-post-btn',
  templateUrl: './add-post-btn.component.html',
  styleUrls: ['./add-post-btn.component.scss']
})
export class AddPostBtnComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(PostModalComponent)
  }

}
