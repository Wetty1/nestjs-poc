export interface DataPerson {
    id: string;
    cpf: string;
    name: string;
    dirty_name: number;
    score: number;
}

export type ResponseFindPerson = DataPerson[];
