<template>
    <div class="product__card">
        <p>Brand- {{ product.brand }}</p>
        <hr />
        <p>Model - {{ product.title }}</p>
        <hr />
        <p>Description - {{ product.description }}</p>
        <hr />
        <p>Price - {{ product.price }}$</p>
        <hr />
        <p>Rating - {{ product.rating }}</p>
        <hr />
        <p>Stock - {{ product.stock }}</p>
        <hr />
        <p>Category - {{ product.category }}</p>
        <hr />
        <p>
            <template v-for="image in product.images" :key="image">
                <img class="thumbnail" :src="image" :alt="product.title" />
            </template>
        </p>
        <hr />
        <p>
            <button @click="addToCart(product.id)">Add to cart</button>

            <button class="delete__button" @click="delFromCart(product.id)" :ref="`id-${product.id}`">
                Delete from cart
            </button>
        </p>
        <p><a :href="`/product/${product.id}`"> Details </a></p>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
};
</script>

<style scoped lang="scss">
.product__card {
    padding: 5px;
    margin: 5px;
    border: 1px solid red;
}
</style>
