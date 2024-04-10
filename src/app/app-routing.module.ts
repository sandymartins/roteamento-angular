import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Filho1Component } from './componentes/pai/filho1/filho1.component';
import { Filho2Component } from './componentes/pai/filho2/filho2.component';

const routes: Routes = [
  { path: "rota1", component: Filho1Component },
  { path: "rota2", component: Filho2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
