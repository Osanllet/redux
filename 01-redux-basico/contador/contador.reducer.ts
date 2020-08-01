import { Action } from '../ngrx-fake/ngrx';

export const contadorReducer = (state = 10, action: Action) => {

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