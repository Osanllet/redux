// Acciones
interface Action {
    type: string,
    payload?: any
}

// const incrementadorAction: Action = { 
//     type: 'INCREMENTAR'
// };

const reducer = ( state = 10, action: Action ) => {

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
        
        default:
            return state;
            break;
    }

}

// Usar el reducer
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer( 10, incrementadorAction ));

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

console.log(reducer( 10, decrementadorAction ));

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(  10, multiplicarAction ));

const dividirAction: Action = {
     type: 'DIVIDIR',
     payload: 2
}

console.log(reducer( 10, dividirAction ));