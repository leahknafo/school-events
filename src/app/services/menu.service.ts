import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  get(): MenuModel[] {
    return [
      {
        name: "Home"
      }, {
        name: "About"
      }, {
        name: "Contact"
      }, {
        name: "Gallery"
      }
    ];
  }
}
