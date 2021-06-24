import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllinfoComponent } from './allinfo/allinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'table', component: TableComponent },
  //{ path: 'allinfo/C09613544', component: AllinfoComponent },
  { path: 'allinfo/:cert', component: AllinfoComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


