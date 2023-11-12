<script setup>
import Flicking from "@egjs/vue3-flicking";

const options = {
    circular: true,
    align: 'center',
    horizontal: true,

};
const juice_names = ["Orange Juice", "Grape Juice", "Apple Juice", "Cranberry Juice", "Pineapple Juice", "Mango Juice", "Grapefruit Juice", "Peach Juice", "Pear Juice", "V8 Juice", "Naked Juice"]
const tea_names = ["Assam", "Ceylon", "Darjeeling", "Earl Grey", "Keemun", "Lapsang Souchong", "Nilgiri", "Scottish Breakfast", "Yunnan", "Biluochun", "Dragon Well"];
const coffee_names = ["Espresso", "Latte", "Mocha", "Cappuccino", "Americano", "Cold brew coffee", "Drip coffee", "French press coffee", "Turkish coffee", "Vietnamese coffee", "Ethiopian coffee", "Colombian coffee", "Brazilian coffee"];
</script>

<template>
    <section id="menu">
        <div class="py-3" id="menu-cafe">
            <div class="container">
                <p class="fs-3" style="color: #ffffff;">Menu</p>
                <hr class="border-2" style="border-color: #ece0d1;">
                <div class="row row-cols-1 row-cols-lg-2 m-auto ">
                    <div class="col">
                        <div class="row row-cols-2 m-auto">
                            <div class="col">
                                <div class="row m-auto g-0 g-lg-4">
                                    <div class="col-12 col-lg-4">
                                        <i class='bx bxs-coffee bx-lg' style="color: #ece0d1;"></i>
                                    </div>
                                    <div class="col-12 col-lg-8">
                                        <b class="text-white">Coffee</b>
                                        <p class="text-white">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row m-auto g-0 g-lg-4">
                                    <div class="col-12 col-lg-4">
                                        <i class='bx bxs-cake bx-lg' style="color: #ece0d1;"></i>
                                    </div>
                                    <div class="col-12 col-lg-8">
                                        <b class="text-white">Cake</b>
                                        <p class="text-white">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row m-auto g-0 g-lg-4">
                                    <div class="col-12 col-lg-4">
                                        <i class='bx bxs-bowl-hot bx-lg' style="color: #ece0d1;"></i>
                                    </div>
                                    <div class="col-12 col-lg-8">
                                        <b class="text-white">Tea</b>
                                        <p class="text-white">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row m-auto g-0 g-lg-4">
                                    <div class="col-12 col-lg-4">
                                        <i class='bx bxs-drink bx-lg' style="color: #ece0d1;"></i>
                                    </div>
                                    <div class="col-12 col-lg-8">
                                        <b class="text-white">Drink</b>
                                        <p class="text-white">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col" data-aos="fade-left"  >
                        <img src="https://png.pngtree.com/background/20230527/original/pngtree-lighting-of-cafe-table-and-chairs-picture-image_2760365.jpg"
                            alt="" class="img-fluid rounded-5">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="menu-list" class=" container py-3 py-lg-5">
        <div class="" id="coffee">
            <p class="fs-4 fw-semibold" style="color: #38220f;"><span><i class="bx bx-coffee bx-lg"></i></span>Coffee</p>
            <hr>
            <div class="py-3" >
                <Flicking :options="options">
                    <div class="menu-list-card shadow rounded-4 mx-3 my-5" v-for="(item, index) in coffee_names" data-aos="zoom-in-up"
                        :key="index">
                        <div class="menu-list-head">
                            <div class="menu-tags shadow">
                                <div class="bx bxs-offer bx-md" style="color: #ece0d1;"></div>
                            </div>
                        </div>
                        <div class="menu-list-img p-1">
                            <img src="../assets/menu/coffee-menu.png" alt="" srcset="" class="img-fluid">
                        </div>
                        <div class="menu-list-desc px-3 py-2">
                            <b class="d-block">{{ item }}</b>
                            <div class="badge" style="background-color: #38220f;">3 $</div>
                        </div>
                        <div class="menu-list-foot">
                            <button class="btn" aria-label="favorite">
                                <i class="bx bx-heart " style="color: red;"></i>
                            </button>
                            <button class=" shadow btn cart-btn" aria-label="add cart">
                                <i class="bx bxs-cart-download bx-sm bx-tada"></i>
                            </button>
                        </div>
                    </div>
                </Flicking>
            </div>
        </div>
        <div class="" id="tea">
            <p class="fs-4 fw-semibold" style="color: #38220f;"><span><i class="bx bx-bowl-hot bx-lg"></i></span>Tea</p>
            <hr>
            <div class="py-3">
                <Flicking :options="options">
                    <div class="menu-list-card shadow rounded-4 mx-3 my-5" v-for="(item, index) in tea_names" :key="index" data-aos="zoom-in-up">
                        <div class="menu-list-head">
                            <div class="menu-tags shadow">
                                <div class="bx bxs-offer bx-md" style="color: #ece0d1;"></div>
                            </div>
                        </div>
                        <div class="menu-list-img p-1">
                            <img src="../assets/menu/tea-menu.png"
                                alt="" srcset="" class="img-fluid">
                        </div>
                        <div class="menu-list-desc px-3 py-2">
                            <b class="d-block">{{ item }}</b>
                            
                            <div class="badge" style="background-color: #38220f;">2 $</div>
                        </div>
                        <div class="menu-list-foot">
                            <button class="btn" aria-label="favorite">
                                <i class="bx bx-heart " style="color: red;"></i>
                            </button>
                            <button class=" shadow btn cart-btn" aria-label="add cart">
                                <i class="bx bxs-cart-download bx-sm bx-tada"></i>
                            </button>
                        </div>
                    </div>
                </Flicking>
            </div>
        </div>
        <div class="" id="drinks">
            <p class="fs-4 fw-semibold" style="color: #38220f;"><span><i class="bx bx-drink bx-lg"></i></span>Other drinks</p>
            <hr>
            <div class="py-3">
                <Flicking :options="options">
                    <div class="menu-list-card shadow rounded-4 mx-3 my-5" v-for="(item, index) in juice_names" :key="index" data-aos="zoom-in-up">
                        <div class="menu-list-head">
                            <div class="menu-tags shadow">
                                <div class="bx bxs-offer bx-md" style="color: #ece0d1;"></div>
                            </div>
                        </div>
                        <div class="menu-list-img p-1">
                            <img src="../assets/menu/drink-menu.png"
                                alt="" srcset="" class="img-fluid">
                        </div>
                        <div class="menu-list-desc px-3 py-2">
                            <b class="d-block">{{ item }}</b>
                            <div class="badge" style="background-color: #38220f;">2 $</div>
                        </div>
                        <div class="menu-list-foot">
                            <button class="btn" aria-label="favorite">
                                <i class="bx bx-heart " style="color: red;"></i>
                            </button>
                            <button class=" shadow btn cart-btn" aria-label="add cart">
                                <i class="bx bxs-cart-download bx-sm bx-tada"></i>
                            </button>
                        </div>
                    </div>
                </Flicking>
            </div>
        </div>
    </section>
</template>

<style>
#menu-cafe {
    background-color: #634832;
}

.menu-list-card {
    /* border: #38220f solid .5px; */
    /* background-color: #ece0d1; */
    max-width: 15rem;
    max-height: 30rem;
    width: 100%;
    height: 100%;

}

.menu-list-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

}

.menu-list-img>img {
    max-width: 10rem;
    max-height: 10rem;
    align-self: center;
    position: relative;
    top: -35px;
}

.menu-list-head {
    display: flex;
}

.menu-tags {
    background-color: #634832;
    position: relative;
    top: -10px;
    left: -10px;
    width: 3rem;
    height: 3rem;
    border-radius: 20px 5px 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-list-foot {
    display: flex;
    justify-content: space-between;
}

.cart-btn {
    border: #634832 1px solid;
    color: #efefef;
    background-color: #634832;
    border-radius: 3px 5px 20px 5px;
    position: relative;
    top: 10px;
    left: 10px;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-btn:hover {
    border: #634832 solid 1px;
    background-color: white;
    color: #634832;
}
</style>