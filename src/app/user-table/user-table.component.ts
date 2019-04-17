import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';


export interface PeriodicElement {
  nome: string;
  matricula: number;
  email: string;
  departamento: string;
  celular: Number;
  position: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, matricula: 20161424434, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 2, matricula: 20161423444, nome: 'Roberto Amaral', email: 'Roberto Amaral@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 3, matricula: 20161346661, nome: 'Patrick de Oliveira', email: 'Patrick@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 4, matricula: 20164563423, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 5, matricula: 20136345323, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 6, matricula: 20161363422, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 7, matricula: 20663405821, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
  {position: 8, matricula: 20161105823, nome: 'Igor Rebeche Rosa', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
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
 
  displayedColumns: string[] = ['matricula', 'nome', 'email', 'departamento', 'actions'];
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
      {position: 8,matricula: 20161123233, nome: 'Teste', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
      {position: 8, matricula: 20161105823, nome: 'Teste', email: 'igorrebeche@gmail.com', departamento: 'Contas a pagar', celular: 990881111},
    ];
    //Atualizar Informacoes
    this.dataSource = new MatTableDataSource(ELEMENT_DATA2);
    //Atualizar Paginacao
    this.dataSource.paginator = this.paginator;
  }

  // Deletar ITEM DA LISTA E ATUALIZAR NO BD
  index :Number
  actionBD(data){

    if(data['acao'] == 'Deletar'){

      //PEGAR ID data['position'], ACHAR USUARIO, DELETAR USUARIO

      //DELETAR ITEM DA LISTA
      this.dataSource.data.splice(data['position']-1,1);
      this.dataSource.paginator = this.paginator;  

    }else if(data['acao'] == 'Salvar'){
      // ATUALIZAR NO BD
      console.log('enviar para bd');
      
    }
    
    
    
    

}
}
