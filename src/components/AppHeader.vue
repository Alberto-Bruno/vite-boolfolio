<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page"
                                href="#">Home</router-link>
                        </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </div>
        </nav>
    </header>
</template>
<style></style>