import { Component } from '@angular/core';
import emailjs  from '@emailjs/browser';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { JsonPipe } from '@angular/common';
interface ContactForm {
    from_name : string;
    to_name: string ;
    email : string ;
    phone : string ;
    message:string;
}


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form : ContactForm ={
    from_name : '',
    to_name: 'admin' ,
    email : '' ,
    phone : '' ,
    message:'',
  } 
   send(){
     emailjs.send("service_brv60q8","template_qie64ts", {...this.form},{
      publicKey : 'tue_ywTFJ40wC021D',
    })
    .then(() => {
      this.form.email  = '';
      this.form.phone = '';
      this.form.message = '';
      this.form.from_name = '';
    })
  }
  
 
}

// from_name: this.form.value.from_name,
// to_name:   this.form.value.to_name,
// email: this.form.value.email,
// phone: this.form.value.phone,
// message: this.form.value.message,