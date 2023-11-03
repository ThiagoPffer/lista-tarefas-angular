import { TarefaService } from './../../services/tarefa.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tarefas-list',
    templateUrl: './tarefas-list.component.html',
    styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

    @Input() tarefas: Tarefa[];
    @Output() onTaskChanged = new EventEmitter();

    constructor(
        private tarefaService: TarefaService
    ) {
        this.tarefas = [];
    }

    ngOnInit(): void {}

    onDeleteTask() { 
        this.tarefas = this.tarefaService.getTarefas();
        this.onTaskChanged.emit(this.tarefas);
    }

    onSaveEditTask() {
        this.tarefaService.saveTarefas(this.tarefas);
        this.tarefas = this.tarefaService.getTarefas();
        this.onTaskChanged.emit(this.tarefas);
    }
}
