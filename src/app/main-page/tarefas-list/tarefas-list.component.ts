import { TarefaService } from './../../services/tarefa.service';
import { Component, Input, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
    selector: 'app-tarefas-list',
    templateUrl: './tarefas-list.component.html',
    styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

    tarefaService: TarefaService;
    @Input() tarefas: Tarefa[];

    constructor(_tarefaService: TarefaService) {
        this.tarefaService = _tarefaService;
        this.tarefas = [];
    }

    ngOnInit(): void {
    }

    onDeleteTask() { this.tarefas = this.tarefaService.getTarefas(); }
    onSaveEditTask() { 
        this.tarefaService.saveTarefas(this.tarefas);
        this.tarefas = this.tarefaService.getTarefas();
    }
}
