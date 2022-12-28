import { RootState } from '@/store';
import { ActionTree, MutationTree, GetterTree } from 'vuex';
import axios from 'axios';

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

const state = {
    products: [] as IProduct[],
    singleProduct: {} as IProduct,
};

export const getters: GetterTree<TState, RootState> = {
    getAllProducts(state: TState) {
        return state.products;
    },
    getSingleProduct(state: TState) {
        return state.singleProduct;
    },
    getProdThroughId(state: TState, id: number) {
        return state.products[id];
    },
};
export const mutations: MutationTree<Array<IProduct>> = {
    addProduct(state, val: IProduct) {
        state.push(val);
    },
};

const actions: ActionTree<RootState, RootState> = {
    async getAllProd({ commit }) {
        if (!state.products.length) {
            return await axios.get('https://dummyjson.com/products?limit=100').then((response) => {
                commit('getAll', response.data as IProduct[]);
            });
        }
    },
    async getSingleProd({ commit }, payload: number) {
        if (!state.products.length) {
            return await axios.get(`https://dummyjson.com/products/${payload}`).then((response) => {
                commit('getSingle', response.data as IProduct[]);
            });
        } else {
            commit('getSingleId', payload);
        }
    },
};

const store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
export type TState = typeof state;
export default store;
