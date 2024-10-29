import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoodingComponent } from '../componants/looding/looding.component';
import { HomeComponent } from "../componants/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoodingComponent, CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title : string = 'angular-learn';
  isloading = true;
  constructor(){
    setTimeout(() => {
      this.isloading = false;
    }, 3000);
  }
  schemas = [CUSTOM_ELEMENTS_SCHEMA] ;
}
