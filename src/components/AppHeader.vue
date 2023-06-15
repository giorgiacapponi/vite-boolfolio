<script>
import { RouterLink } from 'vue-router';

export default {
    name: "AppHeader",
    data() {
        return {};
    },
    components: { RouterLink }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <routerLink :to="{name:'home'}" class="nav-link" href="">Home</routerLink>
        </li>
        <li class="nav-item">
            <routerLink :to="{name:'about-us'}" class="nav-link" href="">About us</routerLink>
        </li>
        <li class="nav-item">
          <routerLink :to="{name:'projects'}" class="nav-link" href="">Projects</routerLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>