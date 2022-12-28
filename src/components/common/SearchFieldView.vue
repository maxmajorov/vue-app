<template>
    <div class="search">
        <input type="text" className="searchInput" v-model="search" placeholder="Quick search" @blur="clearSearch()" />
        <div className="searchIcon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2105 17.4274 13.7873 16.4633 15.0491L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.0491 16.4633C13.7873 17.4274 12.2105 18 10.5 18ZM10.5 16C13.5376 16 16 13.5376 16 10.5C16 7.46243 13.5376 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16Z"
                    fill="#828282"
                />
            </svg>
        </div>
        <span class="amount" v-if="isSearchOpen">({{ data.length }})</span>
        <div class="search-box vertical-scroll" v-if="isSearchOpen">
            <a :href="`/product-details/${prod.id}`" v-for="prod in data" :key="prod.id" class="search-box__product">
                <img class="search-box__image" :src="prod.thumbnail" :alt="prod.title" />
                <p>{{ prod.title }}</p>
                <p>
                    <strong>&nbsp; €{{ prod.price }}</strong>
                </p>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'SearchField',
    data() {
        return {
            search: '',
            data: [],
            isSearchOpen: false,
        };
    },
    watch: {
        async search() {
            if (this.search) {
                await this.getSearchParameters(this.search);
                this.data = this.getSearchData;
                this.isSearchOpen = this.data;
            } else {
                this.isSearchOpen = false;
            }
        },
    },
    computed: {
        ...mapGetters('Filter', ['getSearchData']),
    },
    methods: {
        ...mapActions('Filter', ['getSearchParameters']),
        clearSearch() {
            setTimeout(() => {
                this.search = '';
                this.data = [];
                this.isSearchOpen = false;
            }, 500);
        },
    },
};
</script>

<style lang="scss">
.search {
    position: relative;

    &Input {
        width: 100%;
        height: 40px;
        padding: 6px 10px;
        border-radius: 99px;
        background: #ededf0;
        font-size: 20px;
        line-height: 32px;
        border: none;

        &:focus {
            border: none;
        }
    }

    &Icon {
        position: absolute;
        top: 13px;
        right: 10px;
        cursor: pointer;
    }

    .amount {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        color: #adabab;
    }
    .search-box {
        position: absolute;
        width: 100%;
        height: 30vh;
        overflow-y: auto;
        overflow-x: hidden;
        background: #fff;
        box-shadow: 0 0 10px #ccc;
        padding: 10px 0;
        top: 100%;
        & a {
            color: #000;
            text-decoration: none;
        }
        &__product {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            border-bottom: 1px solid #ccc;
            text-align: center;
            &:hover {
                background: #eee;
            }
        }
        &__image {
            max-width: 50px;
            margin-right: 10px;
        }
    }
}
</style>
