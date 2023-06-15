<script>
import axios from "axios";
import AppCard from "./AppCard.vue";

export default {
    name: "AppMain",
    data() {
        return {
            urlProjects: "http://localhost:8000/api/projects",
            projects: [],
            last_page:null,
            current_page:1,
            
        };
    },
    components: { AppCard },
    mounted() {
     this.getProjects();
           
    },
    computed:{
       
 
    },
    methods:{
        getProjects(page){
       
            axios.get(this.urlProjects,{params:{page:page}})
            .then(resp => {
                this.projects = resp.data.results.data;
                this.last_page=resp.data.results.last_page;
                this.current_page=resp.data.results.current_page;
                console.log(page);

            });

          
        
        },
      
    },
  
}
</script>

<template>
    <h1>progetti</h1>

    <div class="container">
        <div class="row row-cols-3 g-5">
            <div class="col" v-for="project in projects" :key="project.id">
                <AppCard :project="project" @click="$router.push({name:'show',params:{slug:project.slug}})" />
            </div>
        </div>
        <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
            <ul class="pagination ">
                <li class="page-item"><a class="page-link" href="#" @click.prevent="(current_page !==1) ? getProjects(--current_page) : ''" >Previous</a></li>

                <li class="page-item" v-for="n in last_page"><a class="page-link" href="#" @click.prevent="getProjects(n)">{{ n }}</a></li>
                <li class="page-item" ><a class="page-link" href="#"  @click.prevent="(current_page !== last_page) ? getProjects(++current_page) : ''" >Next</a></li>
            </ul>
        </nav>
    </div>
</template>