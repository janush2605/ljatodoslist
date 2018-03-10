import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ListComponentComponent} from './list-component/list-component.component';
import {TodoComponentComponent} from './todo-component/todo-component.component';
import {TodosFacadeMock} from "../services/TodosFacadeMock";

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    TodoComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [TodosFacadeMock],
  bootstrap: [AppComponent]
})
export class AppModule {
}
