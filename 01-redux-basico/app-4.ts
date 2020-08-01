import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementarAction } from './contador/contador.actions';

const store: Store = createStore( contadorReducer );

store.subscribe( () => {
    console.log('Subs:', store.getState());
} )

store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
store.dispatch( incrementarAction );
