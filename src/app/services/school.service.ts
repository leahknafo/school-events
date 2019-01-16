import { Injectable } from '@angular/core';
import { SchoolModel } from '../models/school.model';
// import { MenuModel } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() {
   }

  get(): SchoolModel[] {
    return [
      {
    name: "trip",
    date: new Date(2018,0,15),
    duration: 7,
    classes: [1,2]   
   },  {
        name: "meeting",
        date: new Date(2018,0,22),
        duration: 8,
        classes: [3,4]
      },  {
        name: "party",
        date: new Date(2018,0,7),
        duration: 5,
        classes: [3,5,6]
      },  {
        name: "purim-party",
        date: new Date(2018,2,30),
        duration: 4,
        classes: [5,4]
      }
    ];
  }
}

// export class MenuService {

//   constructor() {
//    }


//   get(): MenuModel[] {
//     return [
//       {
//         name: "Home"
//       }, {
//         name: "About"
//       }, {
//         name: "Contact"
//       }, {
//         name: "Gallery"
//       }
//     ];
//   }
// }
