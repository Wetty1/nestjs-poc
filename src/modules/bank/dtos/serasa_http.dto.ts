export interface DataPerson {
    id: string;
    cpf: string;
    name: string;
    dirty_name: boolean;
    score: number;
}

export type ResponseFindPerson = DataPerson[];
