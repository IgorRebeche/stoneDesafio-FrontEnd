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
  
  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  departamento = new FormControl('', [Validators.required]);
  celular = new FormControl('', [Validators.required]);
  matricula = new FormControl('', [Validators.required]);


  constructor(
    public dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  

  ngOnInit() {
    this.nome.setValue(this.data['nome']);
    this.email.setValue(this.data['email']);
    this.departamento.setValue(this.data['departamento']);
    this.celular.setValue(this.data['celular']);
    this.matricula.setValue(this.data['matricula']);
  }
  

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  delUserData(){
    this.data['acao'] = 'Deletar';

  }
  updateUserData(){
    this.data['acao'] = 'Salvar';
  }


}
