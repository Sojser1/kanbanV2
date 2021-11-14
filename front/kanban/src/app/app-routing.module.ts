import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './entities/home/home.component'
import {LoginComponent} from "./entities/login/login.component";
import {BoardComponent} from "./entities/board/board.component";
import {BoardListComponent} from "./entities/board-list/board-list.component";

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'board',
  component: BoardComponent,
}, {
  path: 'board-list',
  component: BoardListComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
