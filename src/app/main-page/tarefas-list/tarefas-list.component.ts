import { Component, Input, OnInit } from '@angular/core';

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

    onDeleteTask(tarefaEvent: Tarefa) {
        let index = this.tarefas.findIndex( tarefa => { return tarefa.id === tarefaEvent.id } );
        this.tarefas.splice(index, 1);
    }
}
