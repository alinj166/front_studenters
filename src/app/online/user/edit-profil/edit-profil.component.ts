import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor(private user:User,private crud:CrudService,private formBuilder:FormBuilder) { }


 userModifier=new FormGroup(
    { 
      nom:new FormControl(''),
      email:new FormControl(''),

      prenom:new FormControl(''),
      Profession:new FormControl(''),
    passwordHash:new FormControl(''),
    image:new FormControl(''),
    ville:new FormControl(''),
    });
  
OnEditProfile(){
    this.crud.EditProfile(this.userModifier.value)
    .subscribe(data => console.log(data));
    }

  ngOnInit(): void {
    this.userModifier = this.formBuilder.group(
      {nom:[''],
      email:[''],
      prenom:[''],
      Profession:[''],
      passwordHash:[''],
      image:['']
      }
      )
  }


}
