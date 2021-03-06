import { Component, OnInit , Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { BlogPost, Comments } from '../blog-list/blog';
import { DateDeltaPipe } from '../blog/date-delta.pipe';


@Component({
  selector: 'comments',
  template: require('./comments.component.html'),
  directives: [ROUTER_DIRECTIVES],
  styles: [require('./comments.component.scss')],
  pipes: [DateDeltaPipe]
})
export class CommentsComponent implements OnInit {
  title: string = 'Comments';
  @Input() comments: Comments[];
  @Input() showComments: boolean;

  constructor() {
      this.showComments = true;
  }

  ngOnInit() {

  }


}
