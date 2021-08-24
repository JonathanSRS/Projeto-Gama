import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedUserComponent } from './feed-user/feed-user.component';
import { ViewCurriculoComponent } from './view-curriculo/view-curriculo.component';
import { FeedEmpresaComponent } from './feed-empresa/feed-empresa.component';
import { MinhasVagasComponent } from './minhas-vagas/minhas-vagas.component';
import { MinhasCandidaturasComponent } from './minhas-candidaturas/minhas-candidaturas.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'contato', component: ContatoComponent},
  {path:'curriculo/:id', component: CurriculoComponent},
  {path:'empresa', component: EmpresaComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'sobre' , component: SobreComponent},
  

  {path:'info', component: InfoComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},

  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'feed-user', component: FeedUserComponent},
  {path: 'feed-empresa', component: FeedEmpresaComponent},
  {path: 'view-curriculo/:id', component: ViewCurriculoComponent},
  {path: 'minhas-vagas', component: MinhasVagasComponent},
  {path: 'minhas-candidaturas', component: MinhasCandidaturasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
