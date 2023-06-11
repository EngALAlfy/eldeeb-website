<template>
  <footer class="site-footer" dir="rtl" role="contentinfo">
    <div class="container text-right">
      <div class="row mb-5">
        <div class="col-4">
          <img src="/assets/img/favicon.png" width="150" height="150">
        </div>
        <div class="col-4">
          <h3>روابط سريعه</h3>
          <ul class="list-unstyled footer-link">
            <li><a href="#">من نحن</a></li>
            <li><a href="#">خدماتنا</a></li>
            <li><a href="#">اعمالنا</a></li>
            <li><a href="#">تواصل معنا</a></li>
          </ul>
        </div>
        <div class="col-4">
          <h3>تواصل معنا</h3>
          <ul class="list-unstyled footer-link text-right">
            <li class="d-flex"><span class="text-black">۸ ز عمارات الشركه السعوديه <br> بجوار كوبري الجيش <br> الماظه , القاهره<br>مصر</span></li>
            <li class="d-flex"><span class="text-black">01023334599 (2+) </span></li>
            <li class="d-flex"><span class="text-black">022678660 (2+) </span></li>
            <li class="d-flex"><span class="text-black">info@eldeebam.com</span></li>
          </ul>
        </div>

      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="copyright">Copyright &copy;{{new Date().getFullYear()}} All rights reserved | made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://arconnecthost.com" target="_blank">ALalfy@ARConnectHost</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

</style>