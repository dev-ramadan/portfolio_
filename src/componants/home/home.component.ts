import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle'
import { NavComponent } from "../nav/nav.component";
import { ProjectComponent } from "../project/project.component";
import {NgxTypedJsModule}  from 'ngx-typed-js';

// import Aos from 'aos';
import { SkilsComponent } from "../skils/skils.component";
import { ContactComponent } from "../contact/contact.component";
import { ModalComponent } from "../modal/modal.component";
register()

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, ProjectComponent, NgxTypedJsModule, SkilsComponent, ContactComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
ngOnInit(): void {
  // Aos.init()
}
  }
  schemas :[CUSTOM_ELEMENTS_SCHEMA];

