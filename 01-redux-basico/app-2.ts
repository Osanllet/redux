import { Action } from './ngrx-fake/ngrx';

import { 
    incrementarAction,
    decrementarAction,
    multiplicarAction,
    dividirAction,
    resetAction } from './contador/contador.actions';

const reducer = (state = 10, action: Action) => {

    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
            break;

        case 'DECREMENTAR':
            return state -= 1;
            break;

        case 'MULTIPLICAR':
            return state * action.payload;
            break;

        case 'DIVIDIR':
            return state / action.payload;
            break;

        case 'RESET':
            return state = 0;
            break;

        default:
            return state;
            break;
    }

}

console.log( reducer( 10, incrementarAction ) );
console.log( reducer( 10, decrementarAction ) );
console.log( reducer( 10, multiplicarAction ) );
console.log( reducer( 10, dividirAction  ) );
console.log( reducer( 10, resetAction  ) );