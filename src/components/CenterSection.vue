<template>
    <div class="center-section">
        <p>{{ categories }}</p>
        <p>{{ text }}</p>
        <p>{{ getCategories }}</p>
        <p>{{ text5 }}</p>
        <p>
            Select number of products -
            <input type="number" min="0" max="100" @change="getData()" v-model="limit" />
        </p>

        <div class="product-list">
            <ProductItem
                v-for="product in productsList.products"
                :key="product.id"
                v-bind:product="product"
            ></ProductItem>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters, mapState } from 'vuex';
import ProductItem from '@/components/ProductItem';

export default {
    data() {
        return {
            loading: false,
            productsList: [],
            limit: 0,
            url: `https://dummyjson.com/products?limit=`,
        };
    },
    watch: {
        limit() {
            if (this.limit > 100) this.limit = 100;
        },
    },
    async mounted() {
        this.loading = true;
        await this.getCat();
        await this.getData();
        this.loading = false;
    },
    computed: {
        // mapState mapGetters
        ...mapState('Categories', ['categories', 'text']),
        ...mapGetters('Categories', ['getCategories']),
        text5() {
            return this.$store.getters['Categories/getCategories'];
        },
    },
    methods: {
        // mutations && actions
        ...mapActions('Categories', ['getCat']),
        getData() {
            axios.get(this.url + `${!this.limit ? 5 : this.limit}`).then((response) => {
                this.productsList = response.data;
            });
        },
    },

    components: {
        ProductItem,
    },
};
</script>

<style scoped lang="scss">
.center-section {
    flex-basis: 80%;
}
</style>
