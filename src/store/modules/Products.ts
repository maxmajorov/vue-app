import { RootState } from '@/store';
import { ActionTree, MutationTree, GetterTree } from 'vuex';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}

export const getters: GetterTree<Array<IProduct>, RootState> = {
    getProduct(state) {
        return state;
    },
};

export const mutations: MutationTree<Array<IProduct>> = {
    addProduct(state, val: IProduct) {
        state.push(val);
    },
};

const actions: ActionTree<IProduct, RootState> = {
    addNewProduct({ commit }, payload: string) {
        commit('addProduct', payload);
    },
};

export default {
    state: {
        products: [] as IProduct[],
    },
    getters,
    mutations,
    actions,
};
