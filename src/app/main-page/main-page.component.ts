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
        this.tarefas = [
            {
                id: this.tarefaService.getRandomId(),
                tarefa: 'Fazer exame admissional',
                horario: '10:00',
                isRealizada: false
            },
            {
                id: this.tarefaService.getRandomId(),
                tarefa: 'Abrir conta no santander',
                horario: '08:00',
                isRealizada: true
            },
            {
                id: this.tarefaService.getRandomId(),
                tarefa: 'Criar componente para itens da lista',
                horario: '18:00',
                isRealizada: false
            }
        ];
        this.newTarefa = { ...Constants.EMPTY_TAREFA };
    }

    ngOnInit(): void {}

    addTarefa(){
        if (this.tarefaService.tarefaHasHorario(this.newTarefa.horario) && this.tarefaService.tarefaHasText(this.newTarefa.tarefa) ) {
            this.newTarefa.id = this.tarefaService.getRandomId();
            this.tarefas.push(this.newTarefa);
            this.newTarefa = { ...Constants.EMPTY_TAREFA };
            this.newTarefaElement.nativeElement.focus();
        }
    }
}
