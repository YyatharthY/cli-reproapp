import { Component, OnInit } from '@angular/core';
import { isInDevMode } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  
  ngOnInit() {
    this.title = isInDevMode() ? 'App in dev mode works.' : 'App is prod mode works.'
  }
}
