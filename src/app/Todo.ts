export class Todo {
    details: string;
    isComplete: boolean;

    constructor (details:string) {
        this.details = details;
        this.isComplete = false;
    }
}