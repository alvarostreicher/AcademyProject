import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-edit-delete',
  templateUrl: './btn-edit-delete.component.html',
  styleUrls: ['./btn-edit-delete.component.scss']
})
export class BtnEditDeleteComponent implements OnInit {

  @Output() sendEditClickOne : EventEmitter<object> = new EventEmitter<object>();
  @Output() sendDeleteClickOne : EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.sendEditClickOne.emit({});
  }

  onDelete(){
    this.sendDeleteClickOne.emit({});
  }

}
