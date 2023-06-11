<template>
  <div>

    <div class="map">
      <div class="container">
        <div class="map-inner">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.1287427151794!2d31.377282877878226!3d30.07943455808698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161ffe566657%3A0x30b318d683d3bfd3!2z2KfZhNiv2YrYqCDZhNmE2KrYtNmK2YrYryDZiNin2YTYqNmG2KfYoQ!5e0!3m2!1sar!2seg!4v1601462207471!5m2!1sar!2seg"
              height="610" style="border:0" allowfullscreen="">
          </iframe>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="row justify-content-end text-right">
          <div class="col-md-7">
            <form >
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="fname">الاسم الاول</label>
                  <input type="text" class="form-control form-control-lg" id="fname">
                </div>
                <div class="col-md-6 form-group">
                  <label for="lname">الاسم الاخير</label>
                  <input type="text" class="form-control form-control-lg" id="lname">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="email">البريد</label>
                  <input type="email" id="email" class="form-control form-control-lg">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">الرساله</label>
                  <textarea name="message" id="message" class="form-control form-control-lg" cols="30" rows="8"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="submit" value="ارسال" class="btn btn-primary btn-lg btn-block">
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-4 text-right">
            <h5 class="text-uppercase mb-3">العنوان</h5>
            <p class="mb-5 text-right">۸ ز عمارات الشركه السعوديه <br> بجوار كوبري الجيش <br> الماظه , القاهره<br>مصر</p>

            <h5 class="text-uppercase mb-3">ارسل الينا بريدا</h5>
            <p class="mb-5"><a href="mailto:info@eldeebam.com">info@eldeebam.com</a></p>

            <h5 class="text-uppercase mb-3">اتصل بنا</h5>
            <p class="mb-5">هاتف: 023182280 (2+) <br> موبيل: 01023334599 (2+)<br>(+2) 022678660 : تليفاكس</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
}
</script>

<style scoped>
.map{
  padding-top: 80px;

}

.map-inner iframe{
  width: 100%;
}
</style>