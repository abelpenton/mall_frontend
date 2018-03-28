import { pushAction } from "./pushAuction";
import { Product } from "../../products/models/product";
import { User } from "../../users/models/user";

export class Auction {
    id:number;
    pushsActions:pushAction[];
    openDate:Date;
    units:number;
    product:Product;
    closePrice?:number;
    dateClose?:Date;
}