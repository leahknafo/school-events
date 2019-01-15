
import { Component, OnInit } from '@angular/core';
import { SchoolModel } from '../models/school.model';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  
  events: SchoolModel[];

  constructor(private schoolService: SchoolService) {
  }

  ngOnInit() {
    this.events = this.schoolService.get();
  }

}
