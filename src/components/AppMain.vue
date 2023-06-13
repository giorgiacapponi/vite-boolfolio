<script>
import axios from "axios";
import AppCard from "./AppCard.vue";

export default {
    name: "AppMain",
    data() {
        return {
            urlProjects: "http://localhost:8000/api/projects",
            projects: [],
        };
    },
    mounted() {
        axios.get(this.urlProjects)
            .then(resp => {
                this.projects = resp.data.results;
            });
    },
    components: { AppCard }
}
</script>

<template>
    <h1>progetti</h1>

    <div class="container">
        <div class="row row-cols-3 g-5">
            <div class="col" v-for="project in projects" :key="project.id">
                <AppCard :project="project" />
            </div>
        </div>
    </div>
</template>