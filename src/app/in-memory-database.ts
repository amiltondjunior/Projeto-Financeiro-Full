import{InMemoryDbService} from "angular-in-memory-web-api";
import { importExpr } from '@angular/compiler/src/output/output_ast';
import {Category} from "./pages/categories/shared/category.model";
export class InMemoryDatabase implements InMemoryDbService{
    createDb()
    {
        const categories: Category[] = 
        [
        {id: 1,name: 'Lazer', description:'Ir no Shopping'},
        {id: 2,name: 'Curso', description:'Udemy'},
        {id: 3,name: 'Transporte', description:'Crédito Bilhete'},
    {id:4,name: 'Curso', description: 'Alura'}
    ];
                return{categories}
    }
}