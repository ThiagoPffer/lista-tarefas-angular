import { Component, OnInit } from '@angular/core';

interface Tarefa {
    tarefa: String
    horario: String
    isRealizada: Boolean
}

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    TAREFA_MIN_LENGTH: Number = 10;
    EMPTY_TAREFA: Tarefa = {
        tarefa: '',
        horario: '',
        isRealizada: false
    }

    tarefas: Tarefa[];
    newTarefa: Tarefa;

    constructor() { 
        this.tarefas = [];
        this.newTarefa = { ...this.EMPTY_TAREFA };
    }

    ngOnInit(): void {}

    addTarefa(key?: String){
        if ((!key || key === "Enter") && this.newTarefa && this.newTarefa.tarefa !== '' && this.newTarefa.tarefa.length > this.TAREFA_MIN_LENGTH ) {
            this.tarefas.push(this.newTarefa);
            this.newTarefa = this.EMPTY_TAREFA;
        }
    }

    teste(item: Tarefa) {
        console.log(item);
    }

}
