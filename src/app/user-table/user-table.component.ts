import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';


export interface PeriodicElement {
  nome: string;
  position: number;
  email: string;
  cargo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 2, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 3, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 4, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 5, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 6, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 7, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
  {position: 8, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
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
 
  displayedColumns: string[] = ['position', 'nome', 'email', 'cargo', 'actions'];
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
      {position: 1, nome: 'Teste', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
      {position: 2, nome: 'Teste', email: 'igorrebeche@gmail.com', cargo: 'Contas a pagar'},
    ];
    //Atualizar Informacoes
    this.dataSource = new MatTableDataSource(ELEMENT_DATA2);
    //Atualizar Paginacao
    this.dataSource.paginator = this.paginator;
  }

}
