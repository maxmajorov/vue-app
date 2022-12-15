import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import Products from './modules/Products';

export interface RootState {
    modules: {
        Products: typeof Products;
    };
}

export const key: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
    modules: {
        Products,
    },
});

export default store;
