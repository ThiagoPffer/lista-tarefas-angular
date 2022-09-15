import { Component } from '@angular/core';

declare global {
    interface Tarefa {
        id: String
        tarefa: String
        horario: String
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
