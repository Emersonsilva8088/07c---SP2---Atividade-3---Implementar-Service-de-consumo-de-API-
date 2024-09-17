import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { InicioComponent } from '../inicio/inicio.component';

const routes: Routes = [
    {
        path: 'inicio', component: InicioComponent, children: [,
            { path: 'login', component: CadastroProdutoComponent },
            { path: 'restrito', component: ListaProdutoComponent },
            { path: 'editar/:id', component: AtualizaProdutoComponent }
        ]
    },
{ path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(restritoRoutes)],
    exports: [RouterModule],
   
})
export class RestritoRoutingModule { }