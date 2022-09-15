import { Constants } from './../../../settings/constants';
import { TarefaService } from './../../../services/tarefa.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tarefa-item',
    templateUrl: './tarefa-item.component.html',
    styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {

    tarefaService: TarefaService;

    @Input() tarefa: Tarefa;
    @Output() deleteTask = new EventEmitter;
    
    isEditandoTarefa: Boolean;
    taskDescription: String;

    constructor(_tarefaService: TarefaService) {
        this.tarefaService = _tarefaService;
        this.tarefa = { ...Constants.EMPTY_TAREFA };
        this.isEditandoTarefa = false;
        this.taskDescription = '';
    }

    ngOnInit(): void {
    }

    deleteTarefa() {
        this.deleteTask.emit(this.tarefa);
    }

    toggleEditarTarefa() {
        this.isEditandoTarefa = !this.isEditandoTarefa;
        if (this.isEditandoTarefa) {
            this.taskDescription = this.tarefa.tarefa;
        }
    }

    saveEditTask() {
        if (this.tarefaService.tarefaHasText(this.tarefa.tarefa)) {
            this.toggleEditarTarefa();
        }
    }

    cancelEditTask() {
        this.tarefa.tarefa = this.taskDescription;
        this.toggleEditarTarefa();
    }

}
