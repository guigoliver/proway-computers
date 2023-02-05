import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  /** ATTRIBUTE **/
  descricao = "";

  /** CONSTRUCTOR **/
  constructor(
    private router: Router
  ) { }

  /** METHODS **/
  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}