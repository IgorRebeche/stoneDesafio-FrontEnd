import { Component,  Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalUserFormComponent } from './modal-user-form/modal-user-form.component';

export interface DialogData {
  email: string;
  name: string;
  celular: string;
  departamento: string;
  position: string;
  acao: string;
}

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  @Input() personalData : JSON;
  @Output() userFromModal = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    if(this.personalData == undefined){
      const dialogRef = this.dialog.open(ModalUserFormComponent, {
        data: {nome: '',
               email: '',
               celular: '',
               departamento: '',
               matricula: '',
               position: '',
               acao: ''}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.userFromModal.emit(result);
      });
    }else{
      const dialogRef = this.dialog.open(ModalUserFormComponent, {
      data: {nome: this.personalData['nome'],
             email: this.personalData['email'],
             celular: this.personalData['celular'],
             departamento: this.personalData['departamento'],
             matricula: this.personalData['matricula'],
             position: this.personalData['position'],
             acao: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userFromModal.emit(result);
    });
    }
   
    

    
  }

}

