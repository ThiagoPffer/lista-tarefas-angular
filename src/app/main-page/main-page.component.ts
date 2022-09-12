import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Tarefa {
    tarefa: String
    horario: String
    isRealizada: Boolean
}

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    TAREFA_MIN_LENGTH: Number = 10;
    EMPTY_TAREFA: Tarefa = {
        tarefa: '',
        horario: '',
        isRealizada: false
    }

    @ViewChild('ipt_tarefa')
    newTarefaElement!: ElementRef<HTMLInputElement>;

    tarefas: Tarefa[];
    newTarefa: Tarefa;

    constructor() { 
        this.tarefas = [
            {
                tarefa: 'Fazer exame admissional',
                horario: '10:00',
                isRealizada: false
            },
            {
                tarefa: 'Abrir conta no santander',
                horario: '08:00',
                isRealizada: true
            },
            {
                tarefa: 'Criar componente para itens da lista',
                horario: '18:00',
                isRealizada: false
            }
        ];
        this.newTarefa = { ...this.EMPTY_TAREFA };
    }

    ngOnInit(): void {}

    addTarefa(){
        if (this.tarefaHasHorario(this.newTarefa.horario) && this.tarefaHasText(this.newTarefa.tarefa) ) {
            this.tarefas.push(this.newTarefa);
            this.newTarefa = { ...this.EMPTY_TAREFA };
            this.newTarefaElement.nativeElement.focus();
        }
    }

    // CRIAR SERVIÇO PARA REALIZAR TAIS VERIFICAÇÕES (CÓDIGO DUPLICADO EM TAREFA-ITEM.COMPONENT)
    tarefaHasText(tarefa: String) { return tarefa && tarefa !== '' && tarefa.length > this.TAREFA_MIN_LENGTH; }

    tarefaHasHorario(horario: String) { return horario && horario.length >= 4; }
}
