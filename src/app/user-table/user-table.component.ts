import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';


export interface userInterface {
  nome: string;
  matricula: number;
  email: string;
  departamento: string;
  celular: Number;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  userDbReference: JSON;

  displayedColumns: string[] = ['matricula', 'nome', 'email', 'departamento', 'actions'];
  dataSource: any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.updateList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ######################################################
  // Entrega as informações dos usuarios e atualiza a lista
  // ######################################################
  updateList(){
    this.http.get('http://localhost:3000/api/users').subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;

      console.log(response)
    });
  }

  //##############################
  //Condicional de açoes com o BD
  //##############################
  actionBD(data) {
    if (data['acao'] == 'Deletar') {

      //DELETAR ITEM DA LISTA
      this.http.post('http://localhost:3000/api/users/remove', data.userData).subscribe(
        (response: any) => {
          this.updateList();
        },
        (error) => {
          console.log('Ocorreu algum erro');
        }
      )

    } else if (data['acao'] == 'Salvar') {

      // ATUALIZAR NO BD
      this.http.post('http://localhost:3000/api/users/update', data.userData).subscribe(
        (response: any) => {
          //Alertar caso ocorra algum erro
          if(response.status == 'error'){
            alert('Algum erro ocorreu');
          }
          
          this.updateList();
        },
        error => {
          console.log('Ocorreu algum erro');
        } 
      )

    } else if (data['acao'] == 'Criar') {
      //Enviar usuario para BD
      this.http.post('http://localhost:3000/api/users/add', data.userData).subscribe(
        (response: any) => {
          //Alertar caso esta matricula ja esteja cadastrada
          if(response.status == 'exist'){
            alert('Este usuario ja existe');
          }else{
            this.updateList();
          }
          
        },
        (error) => {
          console.log('Ocorreu algum erro');
        });
      //Caso nao registre-o
    }
  }
}
