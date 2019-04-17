export class User {
    email: string;
    nome: string;
    celular: string;
    departamento: string;


    constructor (email: string, nome: string, celular: string, departamento: string){
        this.email = email;
        this.nome = nome;
        this.celular = celular;
        this.departamento = departamento;
     }
}