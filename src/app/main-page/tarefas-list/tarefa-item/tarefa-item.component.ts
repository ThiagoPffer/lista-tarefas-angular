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
    @Output() _deleteTask = new EventEmitter;
    @Output() _saveTask = new EventEmitter;

    isEditandoTarefa: Boolean;
    taskDescription: string;

    constructor(_tarefaService: TarefaService) {
        this.tarefaService = _tarefaService;
        this.tarefa = { ...Constants.EMPTY_TAREFA };
        this.isEditandoTarefa = false;
        this.taskDescription = '';
    }

    ngOnInit(): void {
    }

    deleteTarefa() {
        this.tarefaService.deleteTarefa(this.tarefa.id);
        this._deleteTask.emit();
    }

    toggleEditarTarefa() {
        this.isEditandoTarefa = !this.isEditandoTarefa;
        if (this.isEditandoTarefa) {
            this.taskDescription = this.tarefa.tarefa;
        }
    }

    saveTask() {
        if (this.tarefaService.tarefaHasText(this.tarefa.tarefa)) {
            this.toggleEditarTarefa();
            this._saveTask.emit();
        }
    }

    cancelEditTask() {
        this.tarefa.tarefa = this.taskDescription;
        this.toggleEditarTarefa();
    }

    setChecked() {
        this.tarefa.isRealizada = !this.tarefa.isRealizada;
        this._saveTask.emit();
    }
}
