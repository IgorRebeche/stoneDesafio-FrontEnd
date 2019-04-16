import { Component, OnInit, Inject,  Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalUserFormComponent } from './modal-user-form/modal-user-form.component';

export interface DialogData {
  animal: string;
  name: string;
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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log(this.personalData['nome']);
    const dialogRef = this.dialog.open(ModalUserFormComponent, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

