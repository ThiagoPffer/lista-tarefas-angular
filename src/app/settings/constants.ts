export class Constants {
    public static TAREFA_MIN_LENGTH: number = 5;
    public static EMPTY_TAREFA: Tarefa = {
        id: '',
        tarefa: '',
        horario: '',
        isRealizada: false
    }
    public static LOCAL_STORAGE_TAREFAS_KEY: string = 'tarefas'
}