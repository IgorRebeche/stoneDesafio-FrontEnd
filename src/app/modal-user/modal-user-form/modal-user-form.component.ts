import {
  Component,
  OnInit,
  Inject,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  ModalUserComponent,
  DialogData
} from '../modal-user.component';
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
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'Você precisa colocar um valor' :
      this.email.hasError('email') ? 'Não é um email valido' :
      '';
  }

  UserForm :FormGroup = new FormGroup({
    email: this.email,
    nome: this.nome,
    departamento: this.departamento,
    celular: this.celular,
    matricula: this.matricula
  })


  constructor(
    public dialogRef: MatDialogRef < ModalUserComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      dialogRef.disableClose = true;
    }



  ngOnInit() {
    this.nome.setValue(this.data.userData.nome);
    this.email.setValue(this.data.userData.email);
    this.departamento.setValue(this.data.userData.departamento);
    this.celular.setValue(this.data.userData.celular);
    this.matricula.setValue(this.data.userData.matricula);
  }

  delUserData() {
    this.data['acao'] = 'Deletar';

  }
  updateUserData() {
    if (this.data['acao'] == 'Criar') {
      this.data.userData.nome = this.nome.value;
      this.data.userData.email = this.email.value;
      this.data.userData.departamento = this.departamento.value;
      this.data.userData.celular = this.celular.value;
      this.data.userData.matricula = this.matricula.value;
      
    } else {
      this.data.userData.nome = this.nome.value;
      this.data.userData.email = this.email.value;
      this.data.userData.departamento = this.departamento.value;
      this.data.userData.celular = this.celular.value;
      this.data.userData.matricula = this.matricula.value;
      this.data['acao'] = 'Salvar';
    }


  }
  disableBtn() :boolean{
    if(this.data['acao'] =='Criar'){
      return true;
    }else{
      return false;
    }
   
  }

}
