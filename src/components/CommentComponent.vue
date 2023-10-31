<script setup>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";


const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })];


const options = { 
    horizontal: false ,
    circular: true,
    align: "prev"
};

const reviews = [
    {
        "username": "@coffeelover123",
        "review": "This coffee shop is my go-to spot for a delicious cup of coffee and a relaxing atmosphere. The baristas are always friendly and knowledgeable, and the coffee is always fresh and flavorful. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@caffeinequeen",
        "review": "I'm a huge fan of this coffee shop! The coffee is always top-notch, and the staff is incredibly friendly and welcoming. I especially love their seasonal coffee drinks, which are always creative and delicious. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@coffeeholic",
        "review": "This coffee shop is my favorite place to go in the morning to get my caffeine fix. The coffee is always fresh and delicious, and the staff is always friendly and welcoming. I also love that they have a variety of seating options, so I can always find a spot to relax and enjoy my coffee. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@coffeeconneisseur",
        "review": "This coffee shop is a hidden gem! The coffee is delicious, the staff is friendly, and the atmosphere is cozy and inviting. I love coming here to relax and enjoy a cup of coffee, or to work on my laptop. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@coffeeenthusiast",
        "review": "I've been to this coffee shop many times, and I'm always impressed by the quality of the coffee and the service. The baristas are always happy to make recommendations, and they're always willing to go the extra mile to make sure that I'm happy with my order. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@coffeejunkie",
        "review": "This coffee shop is the best in town! The coffee is delicious, the staff is friendly, and the atmosphere is warm and inviting. I love coming here to relax and enjoy a cup of coffee, or to meet up with friends. I highly recommend this shop to anyone looking for a great coffee experience."
    },
    {
        "username": "@coffeevibes",
        "review": "I love the coffee at this shop! It is always fresh and flavorful, and there is a wide variety of drinks to choose from. I also love the fact that the shop is open late, so I can always come in for a cup of coffee after a long day. I highly recommend this shop to anyone who loves coffee."
    },
    {
        "username": "@coffeeloversunite",
        "review": "This coffee shop is my favorite place to study or work. The coffee is delicious, the staff is friendly, and the atmosphere is quiet and conducive to concentration. I also love the fact that they have free Wi-Fi, so I can always stay connected while I am working. I highly recommend this shop to anyone looking for a great place to study or work."
    },
    {
        "username": "@coffeebreak",
        "review": "I love the breakfast at this coffee shop! The pastries are fresh and delicious, and the coffee is always on point. I also love the fact that they have a variety of healthy options available, so I can always find something to satisfy my hunger without feeling guilty. I highly recommend this shop to anyone looking for a great breakfast."
    },
    {
        "username": "@coffeeshopaddict",
        "review": "I'm addicted to this coffee shop! The coffee is delicious, the staff is friendly, and the atmosphere is cozy and inviting. I love coming here to relax and enjoy a cup of coffee, or to work on my laptop. I highly recommend this shop to anyone looking for a great coffee experience."
    }
]

</script>

<template>
    <section id="comment">
        <div class="container py-3 py-lg-5">
            <div class="row row-cols-1 row-cols-lg-2 m-auto">
                <div class="col">
                    <img class="img-fluid rounded-5 shadow"
                        src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?w=1380&t=st=1698764599~exp=1698765199~hmac=70234a5454daa12ed6b1e5f4921bd98bfdc9a213ac1908c8e8ef09739a9bef43"
                        alt="">
                </div>
                <div class="col">
                    <p class="text-white fs-4"><span><i class='bx bx-message-square-dots mx-2'></i></span>Review</p>
                    <hr class="border-white">
                    <div class="comment-list px-2">
                        <Flicking :options="options" :plugins="plugins">
                            <div class="" v-for="(item, index) in reviews" :key="index">
                                <b class="text-white">{{ item.username }}</b>
                                <p class="text-white-50">{{ item.review }}</p>
                            </div>
                        </Flicking>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#comment {
    background-color: #634832;
}

.comment-list {
    max-height: 17rem;
    overflow-y: auto;
}
</style>