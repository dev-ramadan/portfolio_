import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  item:any = []
  ngOnInit(): void {
    this.myNav()
    this.d()
    this.openPopup()
  }
  myNav(){
    const bar = document.getElementById("bar");
    const nav:any =document.getElementById("navbar");
    const close =document.getElementById("close");
    if(bar){
        bar.addEventListener('click',()=>{
          nav.classList.add("active");
        })      
      if(close){
        close.onclick=() => {
          nav.classList.remove('active')  
        }
      }
    }
  }
  d(){
    let  home:any = document.querySelector(".nav-linkss1");
    let  project:any = document.querySelector(".nav-linkss2");
    let  skils:any = document.querySelector(".nav-linkss3");
    let  contact:any = document.querySelector(".nav-linkss4");
    home.onclick = ()=>{
            home.classList.add("active"),
            project.classList.remove("active"),
            skils.classList.remove("active"),
            contact.classList.remove("active")
    }
    
    project.onclick = ()=>{
      project.classList.add("active"),
      home.classList.remove("active"),
      skils.classList.remove("active"),
      contact.classList.remove("active")
    }
    skils.onclick = ()=>{
      skils.classList.add("active"),
      home.classList.remove("active"),
      project.classList.remove("active"),
      contact.classList.remove("active")
    }
    contact.onclick = ()=>{
      contact.classList.add("active"),
      home.classList.remove("active"),
      skils.classList.remove("active"),
      project.classList.remove("active")
    }
  }
  open(){
    
  }
   
  
  openPopup() { 
     let open:any = document.querySelector('.modal-dialog')
    //  open.style.display = 'none'
  } 

  }



