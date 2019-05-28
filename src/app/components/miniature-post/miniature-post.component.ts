import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-miniature-post',
  templateUrl: './miniature-post.component.html',
  styleUrls: ['./miniature-post.component.scss']
})
export class MiniaturePostComponent implements OnInit {
  @Input() Image: String;
  @Input() title: String;
  @Input() shortDescription: String;
  @Input() category: String;
  @Input() comments: Number;
  
  constructor(private sanitization : DomSanitizer) { }

  ngOnInit() {
    
  }

  getImage = () => {
    
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${this.Image})`);
  }

}
