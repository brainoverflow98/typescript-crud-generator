import {Table} from './decorators.js';

@Table("User_Table")
export default class User
{
    constructor(name : string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    name: string;
    age: number;

}

