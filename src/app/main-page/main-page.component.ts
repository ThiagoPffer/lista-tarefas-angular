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

    tarefas: Tarefa[];
    newTarefa: Tarefa;

    constructor(_tarefaService: TarefaService) {
        this.tarefaService = _tarefaService;
        this.tarefas = this.tarefaService.getTarefas();
        this.newTarefa = { ...Constants.EMPTY_TAREFA };
    }

    ngOnInit(): void {
    }

    addTarefa(){
        if (this.tarefaService.tarefaHasHorario(this.newTarefa.horario) && this.tarefaService.tarefaHasText(this.newTarefa.tarefa) ) {
            this.newTarefa.id = this.tarefaService.getRandomId();
            this.tarefas.push(this.newTarefa);
            this.tarefaService.saveTarefas(this.tarefas);
            this.newTarefa = { ...Constants.EMPTY_TAREFA };
            this.newTarefaElement.nativeElement.focus();
        }
    }
}
