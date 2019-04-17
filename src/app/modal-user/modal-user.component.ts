import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MatDialog
} from '@angular/material';
import {
  ModalUserFormComponent
} from './modal-user-form/modal-user-form.component';
import {
  User
} from '../bd_models/userModel'
import {
  UserTableComponent
} from '../user-table/user-table.component';

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
  //Recebe os dados da linha
  @Input() personalData: User;
  //Recebe o tipo de acao:
  @Input() UserAction: String;
  @Output() userFromModal = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    if (this.UserAction == 'Criar') {

      const dialogRef = this.dialog.open(ModalUserFormComponent, {
        data: {
          userData: this.user = new User('', '', '', ''),
          position: '1',
          acao: 'Criar'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.userFromModal.emit(result);
      });

    } else if (this.UserAction == 'Editar') {
      this.user = new User(this.personalData['email'], this.personalData['nome'], this.personalData['celular'], this.personalData['departamento'])
      const dialogRef = this.dialog.open(ModalUserFormComponent, {
        data: {
          userData: this.user,
          position: '1',
          acao: 'Editar'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.userFromModal.emit(result);
      });
    }




  }

}
