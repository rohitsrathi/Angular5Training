import { PostsService } from './services/posts.service';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { TablesComponent } from './tables/tables.component';
import { TodosComponent } from './todos/todos.component';
import { LoginService } from './services/login.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'parent', component: ParentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IntroComponent,
    TablesComponent,
    TodosComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostsService, TodoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
