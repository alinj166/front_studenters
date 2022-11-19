import { Servicesdem } from "./servicesdem";
import { Servicesoff } from "./servicesoff";
import { Solde } from "./solde";

export class User {
    nom?: string
    prenom?: string
    gender?: string
    soldeAux?: Number
    passwordHash?:string
    Profession?:string
    ville?:string
    //competance?:[]
    servicesdem?: Servicesdem[] |any
    servicesoff?: Servicesoff[] |any
    constructor(
         nom?: string, 
         prenom?: string,
         gender?: string,
         soldeAux?: Number,
         passwordHash?:string,
         ville?:string,
        // competance?:[],
         Profession?: string,
         servicesdem?: Servicesdem[] | any ,
         servicesoff?: Servicesoff[] |any
    ){}
}