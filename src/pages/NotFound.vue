<script>
export default {
    name: 'NotFound',
}
</script>

<template>
    <section id="not-found" class="d-flex flex-column align-items-center my-5">
        <p class="text-center mt-5">
            La pagina che stai cercando non è stata trovata. <br>
            Torna alla pagina precedente.

        </p>
        <button @click=$router.back() class="btn btn-primary">Back</button>
    </section>
</template>

<style lang="scss" scoped>
#not-found {
    p {
        font-size: 2rem;
    }

    button {
        font-size: 1.5rem;
    }
}
</style>