import { Component } from '@angular/core';

declare global {
    interface Tarefa {
        id: string
        tarefa: string
        horario: string
        isRealizada: Boolean
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
}
