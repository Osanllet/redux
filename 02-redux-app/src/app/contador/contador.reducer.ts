import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';


// export function contadorReducer( state: number = 10, action: Action ): number {

//     switch ( action.type ) {
//         case incrementar.type:
//             return state + 1;
//             break;

//         case decrementar.type:
//             return state - 1;
//             break;

//         default:
//             return state;
//             break;
//     }

// }

export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    on(reset      , state => initialState),
    on(multiplicar, (state , { numero }) => state * numero),
    on(dividir    , (state , { numero }) => state / numero)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}
