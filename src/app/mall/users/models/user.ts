import { Address } from "./Address";
import { Product } from './../../products/models/product';
import { Auction } from "../../auction/models/auction";

export class User {
    id:number;
    name:string;
    lastname:string;
    username:string;
    gmail:string;
    phone:string;
    sex:string;
    password:string;
    photo:File;
    addrSend:Address;
    selling:Product[];
    shopper: Product[];
    auction: Auction[];
    seguidos:User[];
    seguidores:User[];
}