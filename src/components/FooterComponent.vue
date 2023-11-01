<script setup>

</script>

<template>
    <footer id="footer">
        <div class="container py-3 py-lg-4">
            <div class="row row-cols-2 row-cols-lg-4 m-auto pt-3">
                <div class="col d-flex align-items-center justify-content-center flex-column" >
                    <img id="logo-footer" src="../assets/logo2.png" class="img-fluid" alt="" srcset="">
                    <a href="#" class="nav-link text-center" style="color: #ece0d1;">CoffeeShop</a>
                </div>
                <div class="col">
                    <p style="color: #ece0d1;">Most Coffee</p>
                    <ul class="list-most">
                        <li>Americano</li>
                        <li>Espresso</li>
                        <li>Mocha</li>
                        <li>Latte</li>
                    </ul>
                </div>
                <div class="col">
                    <p style="color: #ece0d1;">Most Tea</p>
                    <ul class="list-most">
                        <li>Assam</li>
                        <li>Ceylon</li>
                        <li>Darjeeling</li>
                        <li>Keemun</li>
                    </ul>
                </div>
                <div class="col">
                    <p style="color: #ece0d1;">Most Drinks</p>
                    <ul class="list-most">
                        <li>Cranberry Juice</li>
                        <li>Grape Juice</li>
                        <li>Orange Juice</li>
                        <li>Pineapple Juice</li>
                    </ul>
                </div>
            </div>
            <hr style="border-color: #ece0d1;">
            <div class="text-white-50 nav">
                <div class="mx-1">
                    <i class="bx bx-copyright mx-2"></i>
                    <span>2023 : Apisit Saithong</span>
                </div>
                <a class="mx-1 text-decoration-none text-white-50" href="https://github.com/Apisit250aps">
                    <i class="bx bxl-github mx-2"></i>
                    <span>Apisit250aps</span>
                </a>
                <a class="mx-1 text-decoration-none text-white-50" href="https://www.facebook.com/aps.apisit.250/">
                    <i class="bx bxl-facebook-square mx-2"></i>
                    <span>YU</span>
                </a>
                <div class="mx-1">
                    <i class="bx bxl-gmail mx-2"></i>
                    <span>aps.apisit250@gmail.com</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: #634832;
}
.footer-logo {
    max-width: 10rem;
    max-height: 10rem;
}

.list-most {
    list-style-type: none;
}
.list-most > li {
    color: #dbc1ac;
}
#logo-footer {
    max-width: 10rem;
}
</style>