<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
}
</script>

<template>
    <div class="container">
        <div class="card my-5">
            <div class="card-header">
                <h2>{{ project.title }}</h2>
            </div>
            <div class="card-body">
                <p>{{ project.content }}</p>
            </div>
            <div class="card-footer">
                <i v-for="technology in project.technologies" :key="technology.id" :class="technology.class_icon"
                    class="fa-2x me-4"></i>
            </div>

            <!-- Button -->
            <router-link v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                class="btn btn-outline-primary">
                <b>VIEW PROJECT!</b>
            </router-link>
            <router-link v-else :to="{ name: 'home' }" class="btn btn-outline-primary"><b>GO BACK TO HOME</b></router-link>

        </div>
    </div>
</template>