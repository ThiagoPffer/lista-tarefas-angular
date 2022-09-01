import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    TAREFA_MIN_LENGTH: Number = 10;
    tarefas: String[];
    newTarefa: String;

    constructor() { 
        this.tarefas = [];
        this.newTarefa = '';
    }

    ngOnInit(): void {}

    addTarefa(key?: String){
        if ((!key || key === "Enter") && this.newTarefa && this.newTarefa !== '' && this.newTarefa.length > this.TAREFA_MIN_LENGTH ) {
            this.tarefas.push(this.newTarefa);
            this.newTarefa = '';
        }
    }

}
