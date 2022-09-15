import { Constants } from './../settings/constants';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    constructor() { }

    getRandomId() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    tarefaHasText(tarefa: String) { return tarefa && tarefa !== '' && tarefa.length > Constants.TAREFA_MIN_LENGTH; }
    tarefaHasHorario(horario: String) { return horario && horario.length >= 4; }
}
