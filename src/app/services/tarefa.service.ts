import { Constants } from './../settings/constants';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    constructor() { }

    getTarefas(): Array<Tarefa> {
        return JSON.parse(localStorage.getItem(Constants.LOCAL_STORAGE_TAREFAS_KEY) || '[]');
    }

    saveTarefas(tarefas: Tarefa[]) {
        localStorage.setItem(Constants.LOCAL_STORAGE_TAREFAS_KEY, JSON.stringify(tarefas));
    }

    updateTarefa(tarefa: Tarefa) {
        let tarefas = this.getTarefas();
        let index = tarefas.findIndex(item => { return item.id === tarefa.id });
        tarefas.splice(index, 1, tarefa);
        this.saveTarefas(tarefas);
    }

    deleteTarefa(id: string) {
        let tarefas = this.getTarefas();
        let index = tarefas.findIndex(item => { return item.id === id });
        tarefas.splice(index, 1);
        this.saveTarefas(tarefas);
    }

    getRandomId() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    tarefaHasText(tarefa: string) { return tarefa && tarefa !== '' && tarefa.length > Constants.TAREFA_MIN_LENGTH; }
    tarefaHasHorario(horario: string) { return horario && horario.length >= 4; }
}
