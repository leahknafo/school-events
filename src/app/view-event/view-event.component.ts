import { Component, OnInit, Input } from '@angular/core';
import { SchoolModel } from '../models/school.model';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  @Input() events: SchoolModel[];

  constructor() { }

  ngOnInit() {
  }

}
