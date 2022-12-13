import { RootState } from "@/store";
import { ActionTree, MutationTree, GetterTree } from "vuex";

export interface ProdArr {
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

export const getters: GetterTree<Array<ProdArr>, RootState> = {
  getProduct(state) {
    return state;
  },
};

export const mutations: MutationTree<Array<ProdArr>> = {
  addProduct(state, val: ProdArr) {
    state.push(val);
  },
};

const actions: ActionTree<ProdArr, RootState> = {
  addNewProduct({ commit }, payload: string) {
    commit("addProduct", payload);
  },
};

export default {
  state: {
    products: [] as ProdArr[],
  },
  getters,
  mutations,
  actions,
};
