import { OrderByPipe } from '../../order-by.pipe';
import { Component, Input, OnInit } from '@angular/core';

interface Tarefa {
    tarefa: String
    horario: String
    isRealizada: Boolean
}

@Component({
    selector: 'app-tarefas-list',
    templateUrl: './tarefas-list.component.html',
    styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

    @Input() tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    ngOnInit(): void {
    }

    deleteTarefa(index: number) { this.tarefas.splice(index, 1); }

    teste(item: Tarefa, index: Number) {
        console.log(item, index);
    }

}
