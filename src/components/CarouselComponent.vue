<script setup>

</script>

<template>
    <section class="container py-lg-5 py-3" id="home">
        <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
            <div class="carousel-inner rounded-5 shadow">
                <div class="carousel-item active">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_beans_coffee_macro_194156_3840x2160.jpg"
                        class=" img-fluid d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Coffee: Start your day right.</h5>
                        <p>This slogan conveys the benefits of coffee in helping people wake up and feel energized. It is
                            suitable for coffee advertisements that target working adults or students.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_beans_coffee_cup_211153_3840x2160.jpg"
                        class=" img-fluid d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Coffee: Refresh your day.</h5>
                        <p>This slogan conveys the refreshing taste of coffee. It is suitable for coffee advertisements that target a general audience.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_beans_coffee_hand_200354_3840x2160.jpg"
                        class=" img-fluid d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Coffee: Fuel your creativity.</h5>
                        <p>This slogan conveys the benefits of coffee in helping people be more creative. It is suitable for coffee advertisements that target working people or students.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="controller mt-3">
            <button class="btn shadow btn-inline rounded-start-5" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <i class="bx bxs-left-arrow bx-fade-left-hover"></i>
            </button>
            <button class="btn shadow mx-2 btn-inline rounded-end-5" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <i class="bx bxs-right-arrow bx-fade-right-hover"></i>
            </button>
        </div>
    </section>
</template>