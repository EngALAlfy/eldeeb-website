<template>
  <div>
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {AppFooter, AppHeader},

}
</script>