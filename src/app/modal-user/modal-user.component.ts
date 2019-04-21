import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalUserFormComponent} from './modal-user-form/modal-user-form.component';
import {User} from '../bd_models/userModel'
import {UserTableComponent} from '../user-table/user-table.component';

export interface DialogData {
    userData: User,
    position: String,
    acao: String
}

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  user: User;
  position: String;
  acao: String;

  //Recebe os dados da linha
  @Input() personalData: User;

  //Recebe o tipo de acao:
  @Input() UserAction: String;
  @Input() nomeBotao: String;
  @Output() userFromModal = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  
  openDialog(): void {

    if (this.UserAction == 'Criar') {
      this.user = new User('', '', '', '','');
      this.acao = 'Criar';

    } else if (this.UserAction == 'Editar') {
      this.user = new User(this.personalData['email'], 
                           this.personalData['nome'], 
                           this.personalData['celular'], 
                           this.personalData['departamento'], 
                           this.personalData['matricula'])
      this.acao = 'Salvar';
    }
    
    const dialogRef = this.dialog.open(ModalUserFormComponent, {
      data: {
        userData: this.user,
        position: '1',
        acao: this.acao
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userFromModal.emit(result);
    });




  }

}
