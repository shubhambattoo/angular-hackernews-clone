import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

  goToStory (link) {
    link ? window.open(link, 'blank') : false;
  }

}
