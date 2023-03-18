<script>
export default {
    name: 'ErrorAlert',
    props: { hasError: Boolean },
}
</script>

<template>
    <div v-if="hasError" class="container display-flex justify-content-center my-5">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <h3>Reload page!</h3>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
    </div>
</template>