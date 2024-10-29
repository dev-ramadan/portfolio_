import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Aos from 'aos';
import { register} from 'swiper/element/bundle';
register()

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProjectComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
  project= [
    {
      id:1,
      name:'E-commerce',
      image:'project/e-comarce.png',
      url:'https://e-comarce1.vercel.app/login'
    },
    {
      id:2,
      name:'CRUD-System',
      image:'project/crud.png',
      url:'https://effulgent-concha-e6c292.netlify.app/'
    },
    {
      id:3,
      name:'Dashbord',
      image:'project/Dashbord.png',
      url:'https://dachbord-admin.vercel.app/'
    },
    {
      id:4,
      name:'Prayer Time',
      image:'project/time.png',
      url:'https://prayer-neon.vercel.app/'
    },
    {
      id:5,
      name:'Switch Slider',
      image:'project/slider.png',
      url:'https://dev-ramadan.github.io/slider/'
    },
  ]
}
