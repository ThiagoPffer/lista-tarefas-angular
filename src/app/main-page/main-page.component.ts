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
        this.tarefas = [];
        this.newTarefa = { ...this.EMPTY_TAREFA };
    }

    ngOnInit(): void {}

    addTarefa(key?: String){
        if ((!key || key === "Enter") && this.tarefaHasHorario(this.newTarefa.horario) && this.tarefaHasText(this.newTarefa.tarefa) ) {
            this.tarefas.push(this.newTarefa);
            this.newTarefa = { ...this.EMPTY_TAREFA };
            this.newTarefaElement.nativeElement.focus();
        }
    }

    tarefaHasText(tarefa: String) { return tarefa && tarefa !== '' && tarefa.length > this.TAREFA_MIN_LENGTH; }

    tarefaHasHorario(horario: String) { return horario && horario.length >= 4; }

    teste(item: Tarefa) {
        console.log(item);
        console.log(this.newTarefaElement);
    }

}
