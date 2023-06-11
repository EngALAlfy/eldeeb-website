<template>


  <header role="banner" dir="rtl">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/"><i><img src="/assets/img/favicon.png" width="50" height="50"></i> الديب للتشييد
          والبناء </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav mr-auto pl-lg-5 pl-0">

            <li class="nav-item">
              <router-link exact to="/" tag="a" active-class="active" class="nav-link">الرئيسية</router-link>
            </li>

            <li class="nav-item dropdown dropdown04">
              <a class="nav-link dropdown-toggle a04" href="/" id="dropdown04" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">اعمالنا</a>
              <div class="dropdown-menu dropdown-menu04 text-right" aria-labelledby="dropdown04">

                <a v-for="work in works" class="dropdown-item" :href="'/works/'+work.id">{{work.name}}</a>

                <!--

                                 <a href="/" class="dropdown dropdown-item dropdown-toggle dropdown05" id="dropdown05"
                   data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">الاعمال السابقه

                  <div class="dropdown-menu dropdown-menu05" aria-labelledby="dropdown05">
                    <a class="dropdown-item" href="services.html">Metal Roofing</a>
                    <a class="dropdown-item" href="services.html">General Contracting</a>
                  </div>

                </a>
                <a href="/" class="dropdown dropdown-item dropdown-toggle dropdown05" id="dropdown06"
                   data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">الاعمال الحاليه

                  <div class="dropdown-menu dropdown-menu05" aria-labelledby="dropdown06">
                    <a class="dropdown-item" href="services.html">Metal Roofing</a>
                    <a class="dropdown-item" href="services.html">General Contracting</a>
                    <a class="dropdown-item" href="services.html">House Renovation</a>

                    <a class="dropdown-item" href="services.html">Construction Consultant</a>
                  </div>

                </a>


                 -->
              </div>

            </li>

            <li class="nav-item">
              <router-link to="/about" tag="a" active-class="active" class="nav-link">من نحن</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" tag="a" active-class="active" class="nav-link">تواصل معنا</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "AppHeader",
  mounted() {
    $('.dropdown04').hover(function () {
      var $this = $(this);
      $this.addClass('show');
      $this.find('.a04').attr('aria-expanded', true);
      $this.find('.dropdown-menu04').addClass('show');
    }, function () {
      var $this = $(this);
      $this.removeClass('show');
      $this.find('.a04').attr('aria-expanded', false);
      $this.find('.dropdown-menu04').removeClass('show');
    });

    $('.dropdown05').hover(function () {
      var $this = $(this);
      $this.addClass('show');
      $this.attr('aria-expanded', true);
      $this.find('.dropdown-menu05').addClass('show');
    }, function () {
      var $this = $(this);
      $this.removeClass('show');
      $this.attr('aria-expanded', false);
      $this.find('.dropdown-menu05').removeClass('show');
    });
  }, data() {
    return {

    }
  }
}
</script>

<style scoped>
.dropdown-menu05 {
  left: 100%;
  top: 0;
}
</style>