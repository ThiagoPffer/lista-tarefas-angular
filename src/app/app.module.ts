import { OrderByPipe } from './order-by.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { TarefasListComponent } from './main-page/tarefas-list/tarefas-list.component';
import { TarefaItemComponent } from './main-page/tarefas-list/tarefa-item/tarefa-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TarefasListComponent,
    OrderByPipe,
    TarefaItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
