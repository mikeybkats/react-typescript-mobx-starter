import { observable, action } from 'mobx';

export interface INote {
    title: string;
    content: string;
}

export interface INoteStore {
    notes: INote[];
    currentTitle: string;
    currentContent: string;

    addNote: (note: INote) => void;
    setCurrentTitle: (newTitle: string) => void;
    setCurrentContent: (newContent: string) => void;
}

export default class NoteStore {
    @observable notes: INote[] = [];

    @observable currentTitle: string = "";
    @observable currentContent: string = "";

    @action.bound 
    public addNote = (note: INote): void => {
        this.currentTitle = "";
        this.currentContent = "";
        this.notes.push(note);
    }
    public setCurrentTitle = (newTitle: string): void => {
        this.currentTitle = newTitle;
    }
    public setCurrentContent = (newContent: string): void => {
        this.currentContent = newContent;
    }
}

