import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'aboutus',component: AboutUsComponent},
  {path:'todo',component: TodoComponent},
  
 
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
