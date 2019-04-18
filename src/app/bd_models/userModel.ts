export class User {
    email: string;
    nome: string;
    celular: string;
    departamento: string;
    matricula: string;


    constructor (email: string, nome: string, celular: string, departamento :string, matricula :string){
        this.email = email;
        this.nome = nome;
        this.celular = celular;
        this.departamento = departamento;
        this.matricula = matricula;

     }
}