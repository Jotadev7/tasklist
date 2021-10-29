export class Tarefas {
    public id: number;
    public titulo: string;
    public descricao: string;
    public dataConclusao: Date;
    public isDone: boolean;

    constructor(id: number, titulo: string, descricao: string, dataConclusao: Date, isDone: boolean) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataConclusao = dataConclusao;
        this.isDone = isDone;
    }
}