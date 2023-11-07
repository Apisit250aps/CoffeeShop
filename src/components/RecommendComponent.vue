<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Perspective, AutoPlay } from "@egjs/flicking-plugins";

const plugins = [
    new Perspective({ rotate: 0.5 }),
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })
];
const options = {
    circular: true,
    align: 'center',
    horizontal: true,

};

const recommends = ['Latte', "Americano", "Mocha", "Espresso", "Black Coffee", "Cappuccino", "Affogato","Flat White", "Macchiato"]
</script>

<template>
    <section id="recommend" class="container py-5 ">
        <p class="fs-3" style="color: #38220f;">Recommend</p>
        <hr class="border-2" style="border-color: #38220f;">
        <Flicking class="py-5" :options="options" :plugins="plugins">
            <div class="menu-card card-panel shadow-sm rounded-4 my-5 mx-3" v-for="(item, index) in recommends" :key="index" >
                <div class="menu-img">
                    <img class="img-fluid"
                        src="https://purepng.com/public/uploads/large/purepng.com-cup-mug-coffeecupmugcoffeebean-1411527406382isz5a.png"
                        alt="" srcset="">
                </div>
                <div class="menu-desc px-3">
                    <b>{{item}}</b>
                    <p class="text-black">Lorem ipsum dolor sit amet.</p>
                    <div class="badge badge-price">price 3 $</div>
                </div>
                <div class="menu-footer">
                    <button aria-label="favorite" type="button" class=" btn btn-lg menu-btn-heart">
                        <i class="bx bx-heart bx-tada-hover"></i>
                    </button>
                    <button aria-label="add cart" type="button" class=" btn btn-lg menu-btn-cart shadow-sm">
                        <i class="bx bxs-cart-download bx-tada-hover"></i>
                    </button>
                </div>
            </div>
        </Flicking>
    </section>
</template>
<style>
#recommend {
    height: auto;
}

.menu-card {
    position: relative;
    max-width: 20rem;
    max-height: 30rem;
    width: 100%;
    height: 100%;
}

.menu-img {
    background-color: transparent;
    border-radius: 100%;
    position: relative;
    top: -100px;
}

.menu-desc {

    position: relative;
    top: -25px;
}

.menu-footer {
    display: flex;
    justify-content: end;
}

.menu-btn-cart {
    position: relative;
    top: 5px;
    left: 5px;
    border-radius: 20px 0px 15px 0px;
    background-color: #634832;
    color: white;
    border: #634832 1px solid;
}

.menu-btn-cart:hover {
    background-color: white;
    border: #634832 1px solid;
    color: #634832;
}

.menu-btn-heart:hover {
    color:red;
}

.badge-price {
    background-color: #634832;
}
</style>