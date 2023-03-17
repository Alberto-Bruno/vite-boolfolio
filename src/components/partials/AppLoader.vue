<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loader-container d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-compact-disc fa-spin fa-5x"></i>
        <div class="loader">Loading..</div>
    </div>
</template>

<style lang="scss" scoped>
.loader-container {
    margin-top: 200px;

    .loader {
        font-size: 2rem;
    }
}
</style>