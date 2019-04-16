import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalUserComponent, DialogData} from '../modal-user.component';
//import { } from '/w';

@Component({
  selector: 'app-modal-user-form',
  templateUrl: './modal-user-form.component.html',
  styleUrls: ['./modal-user-form.component.css']
})
export class ModalUserFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', Validators.required);

  nomeInput :string
  emailInput :string;
  departamentoInput :string;
  celularInput:string;


  constructor(
    public dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  

  ngOnInit() {
    console.log(this.data['nome'])
    this.nomeInput = this.data['nome'];
    this.emailInput = this.data['email'];
    this.departamentoInput = this.data['departamento'];
    this.celularInput = this.data['celular'];
  }
  

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  deleteUserData(data){
    console.log('Delete: ');
    console.log(data);

    //Deletar row

  }
  updateUserData(data){
    console.log('Update: ')
    console.log(data);
  }


}
