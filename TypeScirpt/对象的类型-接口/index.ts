interface Person {
    name:string;
    age?:string ;
    [propName:string]:any;
}
let tom: Person = {
    name: 'Tom',
    age: "25",
    2: 1
};
interface PersonNo {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let huangben: PersonNo = {
    id:2,
    name: 'Tom',
    gender: 'male'
};
