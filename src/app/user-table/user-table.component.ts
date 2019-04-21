import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
export class UserTableComponent implements OnInit {

  userDbReference: JSON;

  displayedColumns: string[] = ['position', 'matricula', 'nome', 'email', 'departamento', 'actions'];
  dataSource: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.updateList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Condicional de açoes com o BD
  actionBD(data) {
    if (data['acao'] == 'Deletar') {

      //PEGAR ID data['position'], ACHAR USUARIO, DELETAR USUARIO
      console.log(data);
      //DELETAR ITEM DA LISTA
      this.http.post('http://localhost:3000/api/users/remove', data.userData).subscribe(
        (data) => {
          console.log('atualizar lista');
          this.updateList();
        },
        (error) => {}
      )

    } else if (data['acao'] == 'Salvar') {
      // ATUALIZAR NO BD
      this.http.post('http://localhost:3000/api/users/update', data.userData).subscribe(
        (response: any) => {
          if(response.status == 'error'){
            alert('Algum erro ocorreu');
          }
          
          this.updateList();
        },
        error => {
          console.log('error');
        } 
      )

    } else if (data['acao'] == 'Criar') {
      //Enviar usuario para BD

      this.http.post('http://localhost:3000/api/users/add', data.userData).subscribe(
        (response: any) => {
          console.log('atualizar lista');
          this.updateList();
        },
        (error) => {

        }
      )
      //Caso nao registre-o
    }
  }
  updateList(){
    this.http.get('http://localhost:3000/api/users').subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;

      console.log(response)
    });
  }
}
