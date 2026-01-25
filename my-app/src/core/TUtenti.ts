export type TUtenti = IUtente[]

export interface IUtente {
    id: number;
    name: string;
    email: string;
    password: string;
}


// Mock data for users
export const utenti: TUtenti = [
    {
        id: 1,
        name: "Gianluca",
        email: "gianluca@example.com",
        password: "password123",
 
    },
    {
        id: 2,
        name: "Mario",
        email: "mario@example.com",
        password: "password456",
    }
];