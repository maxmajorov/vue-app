<template>
    <header className="header">
        <div className="container">
            <div className="block_one">
                <div className="block_oneLocation">
                    <!-- <LocationOnIcon fontSize="small" /> -->
                    <div>Minsk city</div>
                </div>
                <div className="block_oneStoreInfo">
                    <ul className="block_oneStoreInfoBenefits">
                        <li>Payment</li>
                        <li>Delivery</li>
                        <!-- up ===> &#9650; -->
                        <li className="block_oneStoreInfoBenefitsMore">More &#9660;</li>
                    </ul>
                    <div className="block_oneStoreInfoContacts">
                        <div className="block_oneStoreInfoContactsPhone">
                            <!-- <PhoneAndroidIcon fontSize="small" /> -->
                            <span>+7(999) 999-99-99</span>
                        </div>
                        <div>More &#9660;</div>
                    </div>
                    <div className="storeInfoHours">
                        <!-- <AccessTimeIcon fontSize="small" /> -->
                        <div className="{classes.hours_time}">
                            <div>contact-center</div>
                            <div>8.00-20.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_two">
                <div className="block_twoLogo}">
                    <img src="../../assets/img/logo.png" width="80" alt="logo" />
                </div>
                <SearchField />
                <div className="block_twoControls">
                    <div className="block_twoControlsCart">
                        <IconButton color="primary" component="label">
                            <AddShoppingCartIcon fontSize="large" />
                        </IconButton>
                        <span className="block_twoControlsCartOrders">{{ 0 }}</span>
                    </div>
                    <div>
                        Shopping Cart
                        <div>
                            <b>{{ 0.0 }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import SearchField from '../../components/common/SearchFieldView.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HeaderView',
    components: {
        SearchField,
    },
});
</script>

<style scoped lang="scss">
@import '../../styles/style.scss';
.header {
    .container {
        margin: 0 auto;

        .block_one {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            padding: 8px 0;
            border-bottom: 2px solid lightgray;

            &Location {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover {
                    color: lightblue;
                    transition: color 0.3s ease-in-out;
                }
            }

            &StoreInfo {
                position: relative;
                display: flex;
                align-items: center;

                &Benefits {
                    display: flex;

                    & > li {
                        cursor: pointer;
                        margin-right: 8px;

                        &:hover {
                            color: blue;
                            transition: color 0.3s ease-in-out;
                        }
                    }

                    &::after {
                        content: '|';
                        color: gray;
                    }
                }

                &Contacts {
                    display: flex;
                    align-items: center;
                    padding: 0 8px;

                    & > div {
                        margin-right: 8px;

                        &:hover:last-child {
                            cursor: pointer;
                            color: blue;
                            transition: color 0.3s ease-in-out;
                        }
                    }

                    &::after {
                        content: '|';
                        color: gray;
                    }

                    &Phone {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                &Hours {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: gray;

                    &_time {
                        margin-left: 5px;
                        text-align: center;
                    }
                }
            }
        }

        .block_two {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;

            &Logo {
                display: flex;
                align-items: center;
                width: 65px;
                height: 65px;
            }

            &Controls {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &Cart {
                    position: relative;
                    margin-right: 20px;

                    &Orders {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -2px;
                        right: -4px;
                        width: 18px;
                        height: 18px;
                        color: #fff;
                        background-color: #f44336;
                        font-size: 14px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}
</style>
