<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg pt-3 sticky-top">
        <div class="container d-flex flex-row align-items-center justify-content-between">
            <a class="navbar-brand fw-semibold" href="#" style="color: #38220f;">
                <p class="fs-4">Cafe, Coffee</p>
            </a>
            <div class="offcanvas offcanvas-end rounded-start-4" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Cafe, Coffee</h5>
                    <button type="button" class="btn pe-auto rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class='bx bx-x bx-spin-hover bx-sm'></i>
                    </button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end justify-content-lg-center flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <span class="d-inline d-lg-none"><i class="bx mx-3 bx-s bx-home"></i></span>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service"><span class="d-inline d-lg-none"><i
                                        class="bx mx-3 bx-s bx-qr-scan"></i></span>Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#recommend">
                                <span class="d-inline d-lg-none"><i
                                        class="bx mx-3 bx-s bx-food-menu"></i></span>Recommend</a>
                        </li>
                        <li class="nav-item dropdown-center">
                            <a class="nav-link dropdown-toggle" href="#menu" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span class="d-inline d-lg-none"><i class="bx mx-3 bx-s bx-drink"></i></span>Menu
                            </a>
                            <ul class="dropdown-menu border-0 shadow">
                                <li><a class="dropdown-item" href="#coffee">Coffee</a></li>
                                <li><a class="dropdown-item" href="#tea">Tea</a></li>
                                <li><a class="dropdown-item" href="#drinks">Other</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="">
                <button type="button" class="btn btn-inline d-inline-block text-center  rounded-circle pe-auto mx-1 ">
                    <i class="bx bx-cart bx-tada"></i>
                </button>
                <button type="button"
                    class="btn btn-inline d-inline-block text-center justify-content-center align-items-center  rounded-circle pe-auto mx-1">
                    <i class="bx bx-heart bx-tada"></i>
                </button>

                <button class="btn btn-inline d-inline-block text-center d-lg-none rounded-circle pe-auto mx-1"
                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <i class="bx bx-menu bx-tada"></i>
                </button>
            </div>
        </div>
    </nav>
</template>