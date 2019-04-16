import { Component,  Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalUserFormComponent } from './modal-user-form/modal-user-form.component';

export interface DialogData {
  email: string;
  name: string;
  celular: string;
  departamento: string;
  position: string;
}

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  animal: string;
  name: string;
  @Input() personalData : JSON;
  @Output() userFromModal = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log(this.personalData);
    const dialogRef = this.dialog.open(ModalUserFormComponent, {
      data: {nome: this.personalData['nome'],
             email: this.personalData['email'],
             celular: this.personalData['celular'],
             departamento: this.personalData['departamento'],
             position: this.personalData['position']}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if(result == "Deletar"){
        this.userFromModal.emit(result);
      }
      if(result == "Salvar"){
        //EMITiR OUTRO OUTPUT PARA SALVAR NO COMPONENTE DO DATA TABLE
        console.log(result);
      }

      //console.log(result);
    });
  }
  updateTableEvent(data){
    console.log('Enviou para o userTable');
   
    
  }

}

