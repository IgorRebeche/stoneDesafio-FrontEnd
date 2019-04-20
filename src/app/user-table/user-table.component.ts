import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';


export interface userInterface {
  nome: string;
  matricula: number;
  email: string;
  departamento: string;
  celular: Number;
}

const ELEMENT_DATA: userInterface[] = [
  { matricula: 20161424434, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20161423444, nome: 'Roberto Amaral', email: 'Roberto Amaral@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20161346661, nome: 'Patrick de Oliveira', email: 'Patrick@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20164563423, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20136345323, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20161363422, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20663405821, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  { matricula: 20161105823, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
];

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
    this.http.get('http://localhost:3000/api/users').subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;

      console.log(response)
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Deletar ITEM DA LISTA E ATUALIZAR NO BD

  index: Number
  actionBD(data) {

    if (data['acao'] == 'Deletar') {

      //PEGAR ID data['position'], ACHAR USUARIO, DELETAR USUARIO
      console.log(data);
      //DELETAR ITEM DA LISTA
      this.http.post('http://localhost:3000/api/users/remove', data.userData).subscribe(
        (response) => {
          //console.log()
          this.ngAfterViewInit();
        },
        (error) => {
        }
      )
      this.dataSource.data.splice(data['position'] - 1, 1);
      this.dataSource.paginator = this.paginator;

    } else if (data['acao'] == 'Salvar') {
      // ATUALIZAR NO BD
      this.http.post('http://localhost:3000/api/users/update', data.userData).subscribe(
        (response) => {
          //console.log()
          this.ngAfterViewInit();
        },
        (error) => {

        }
      )
      console.log('enviar para bd');

    } else if (data['acao'] == 'Criar') {
      //Enviar usuario para BD

      this.http.post('http://localhost:3000/api/users/add', data.userData).subscribe(
        (response) => {
          //console.log()
        },
        (error) => {

        }
      )
      //Caso nao registre-o
    }

    
    
    
    

}
}
