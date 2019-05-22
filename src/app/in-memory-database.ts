import{InMemoryDbService} from "angular-in-memory-web-api";
import { importExpr } from '@angular/compiler/src/output/output_ast';

export class InMemoryDatabase implements InMemoryDbService{
    createDb()
    {
        const categories = 
        [
        {id: 1,name: 'Lazer', descripition:'Pagamento de contas'}
        ]
                return{categories}
    }
}