import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  title = "Discovering the World";
  subtitle = "Making your Life Easier";

  constructor() { }

  ngOnInit() {
  }

}
