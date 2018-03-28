import { User } from "../../users/models/user";

export class Product {
    id:number;
    photo:File;
    genre:string;
    platform:string;
    outPrice:number;
    currentPrice:number;
    date:Date;
    likes:number;
    state:string;
    about:string;
    ofert:boolean;
    reserved:boolean;
    userReserved?: User[];    
}