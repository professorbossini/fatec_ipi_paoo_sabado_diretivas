import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textoBotao = "Esconder/Exibir";
  esconder = false;



  alterarExibicao() {
    this.esconder = !this.esconder;
  }
  pessoas = [
    { nome: "Jose", idade: 18 },
    { nome: "Maria", idade: 22 },
    { nome: "Joao", idade: 17 }
  ]

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }

}
²