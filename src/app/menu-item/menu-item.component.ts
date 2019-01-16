import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '../models/menu.models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItems: MenuModel[];

  constructor() { }

  ngOnInit() {
  }

}
