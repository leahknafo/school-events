import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    ListEventComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { ViewEventComponent } from './view-event/view-event.component';
// import { EventsListComponent } from './list-event/list-event.component';
// import { AddEventComponent } from './add-event/add-event.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ViewEventComponent,
//     EventsListComponent,
//     AddEventComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
