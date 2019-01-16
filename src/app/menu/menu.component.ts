import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../models/menu.models';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuModel[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuService.get();
  }

}
