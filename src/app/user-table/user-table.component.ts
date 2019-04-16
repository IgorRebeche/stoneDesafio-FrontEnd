import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';


export interface PeriodicElement {
  nome: string;
  position: number;
  email: string;
  departamento: string;
  celular: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 2, nome: 'Roberto Amaral', email: 'Roberto Amaral@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 3, nome: 'Patrick de Oliveira', email: 'Patrick@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 4, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 5, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 6, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 7, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 8, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
 
  displayedColumns: string[] = ['position', 'nome', 'email', 'departamento', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  atualizarLista(){
    const ELEMENT_DATA2: PeriodicElement[] = [
      {position: 1, nome: 'Teste', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
      {position: 2, nome: 'Teste', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
    ];
    //Atualizar Informacoes
    this.dataSource = new MatTableDataSource(ELEMENT_DATA2);
    //Atualizar Paginacao
    this.dataSource.paginator = this.paginator;
  }

  // Deletar ITEM DA LISTA E ATUALIZAR NO BD
  deletar(data){
    // raw_data is the array of data that you getting from the db.
    console.log(data);
    // ATUALIZAR NO BD
      //PEGAR ID, ACHAR USUARIO, DELETAR USUARIO
    //DELETAR ITEM DA LISTA
    this.dataSource.data.splice(data-1,1);
    this.dataSource.paginator = this.paginator;  
  }

}
