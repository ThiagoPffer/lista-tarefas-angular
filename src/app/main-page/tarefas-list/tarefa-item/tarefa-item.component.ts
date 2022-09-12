import { Component, Input, OnInit, ViewChild } from '@angular/core';

interface Tarefa {
    tarefa: String
    horario: String
    isRealizada: Boolean
}

@Component({
    selector: 'app-tarefa-item',
    templateUrl: './tarefa-item.component.html',
    styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {

    TAREFA_MIN_LENGTH: Number = 10;
    @Input() tarefa: Tarefa;
    isEditandoTarefa: Boolean;
    taskDescription: String;

    constructor() {
        this.tarefa = {
            tarefa: '',
            horario: '',
            isRealizada: false
        };
        this.isEditandoTarefa = false;
        this.taskDescription = '';
    }

    ngOnInit(): void {
    }

    deleteTarefa() { 
        // this.tarefas.splice(index, 1); 
        console.log('TODO: Emitir eventos para excluir o item');
    }

    toggleEditarTarefa() { 
        this.isEditandoTarefa = !this.isEditandoTarefa;
        if (this.isEditandoTarefa) {
            this.taskDescription = this.tarefa.tarefa;
        }
    }

    saveEditTask() {
        if (this.tarefaHasText(this.tarefa.tarefa)) {
            this.toggleEditarTarefa();
        }
    }

    cancelEditTask() {
        this.tarefa.tarefa = this.taskDescription;
        this.toggleEditarTarefa();
    }
    
    tarefaHasText(tarefa: String) { return tarefa && tarefa !== '' && tarefa.length > this.TAREFA_MIN_LENGTH; }

}
