import { Constants } from '../settings/constants';
import { TarefaService } from './../services/tarefa.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    tarefaService: TarefaService;

    @ViewChild('ipt_tarefa')
    newTarefaElement!: ElementRef<HTMLInputElement>;

    progress: string;
    tarefas: Tarefa[];
    newTarefa: Tarefa;

    constructor(_tarefaService: TarefaService) {
        this.tarefaService = _tarefaService;
        this.tarefas = this.tarefaService.getTarefas();
        this.newTarefa = { ...Constants.EMPTY_TAREFA };
        this.progress = '0%';
    }

    ngOnInit(): void {
        this.calculateProgress(this.tarefas);
    }

    onTaskChanges(tarefas: Tarefa[]): void {
        console.log('onTaskChanges')
        this.tarefas = tarefas;
        this.calculateProgress(tarefas);
    }

    addTarefa(){
        if (this.tarefaService.tarefaHasHorario(this.newTarefa.horario) && this.tarefaService.tarefaHasText(this.newTarefa.tarefa) ) {
            this.newTarefa.id = crypto.randomUUID();
            this.tarefas.push(this.newTarefa);
            this.tarefaService.saveTarefas(this.tarefas);
            this.newTarefa = { ...Constants.EMPTY_TAREFA };
            this.newTarefaElement.nativeElement.focus();
            this.calculateProgress(this.tarefas);
        }
    }

    calculateProgress(tarefas: Tarefa[]) {
        let newProgress: number = 0;
        let selectedTasksLength: number = tarefas.filter(task => task.isRealizada).length;
        newProgress = tarefas.length > 0 ? (100 * selectedTasksLength) / tarefas.length : 0;
        this.progress = `${newProgress}%`;
    }
}
