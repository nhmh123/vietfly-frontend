<template>
  <!-- ============================================================== -->
  <!-- Preloader - style you can find in spinners.css -->
  <!-- ============================================================== -->
  <div id="preloader">
    <div class="preloader"><span></span><span></span></div>
  </div>

  <!-- ============================================================== -->
  <!-- Main wrapper - style you can find in pages.scss -->
  <!-- ============================================================== -->
  <div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Top header  -->
    <!-- ============================================================== -->
    <TheHeader />
    <!-- ============================================================== -->
    <!-- Top header  -->
    <!-- ============================================================== -->

    <router-view></router-view>

    <!-- ============================ Footer Start ================================== -->
    <TheFooter />
    <!-- ============================ Footer End ================================== -->


    <!-- Log In Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
        <div class="modal-content" id="loginmodal">
          <div class="modal-header">
            <h4 class="modal-title fs-6">Sign In / Register</h4>
            <a href="#" class="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i
                class="fa-solid fa-square-xmark"></i></a>
          </div>
          <div class="modal-body">
            <div class="modal-login-form py-4 px-md-3 px-0">
              <form>

                <div class="form-floating mb-4">
                  <input type="email" class="form-control" placeholder="name@example.com">
                  <label>User Name</label>
                </div>
                <div class="form-floating mb-4">
                  <input type="password" class="form-control" placeholder="Password">
                  <label>Password</label>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary full-width font--bold btn-lg">Log In</button>
                </div>

                <div class="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                  <div class="modal-flex-first">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="savepassword" value="option1">
                      <label class="form-check-label" for="savepassword">Save Password</label>
                    </div>
                  </div>
                  <div class="modal-flex-last">
                    <a href="JavaScript:Void(0);" class="text-primary fw-medium">Forget Password?</a>
                  </div>
                </div>
              </form>
            </div>

            <div class="prixer px-3">
              <div class="devider-wraps position-relative">
                <div class="devider-text text-muted-2 text-md">Sign In with More Methods</div>
              </div>
            </div>

            <div class="social-login py-4 px-2">
              <ul class="row align-items-center justify-content-between g-3 p-0 m-0">
                <li class="col"><a href="#" class="square--60 border br-dashed rounded-2 full-width"><i
                      class="fa-brands fa-facebook color--facebook fs-2"></i></a></li>
                <li class="col"><a href="#" class="square--60 border br-dashed rounded-2"><i
                      class="fa-brands fa-whatsapp color--whatsapp fs-2"></i></a></li>
                <li class="col"><a href="#" class="square--60 border br-dashed rounded-2"><i
                      class="fa-brands fa-linkedin color--linkedin fs-2"></i></a></li>
                <li class="col"><a href="#" class="square--60 border br-dashed rounded-2"><i
                      class="fa-brands fa-dribbble color--dribbble fs-2"></i></a></li>
                <li class="col"><a href="#" class="square--60 border br-dashed rounded-2"><i
                      class="fa-brands fa-twitter color--twitter fs-2"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="modal-footer align-items-center justify-content-center">
            <p>Don't have an account yet?<a href="signup.html" class="text-primary fw-medium ms-1">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->


    <!-- Choose Countries Modal -->
    <div class="modal modal-lg fade" id="countryModal" tabindex="-1" aria-labelledby="countryModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
            <a href="#" class="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i
                class="fa-solid fa-square-xmark"></i></a>
          </div>
          <div class="modal-body">
            <div class="allCountrieslist">

              <div class="suggestedCurrencylist-wrap mb-4">
                <div class="d-inline-block mb-0 ps-3">
                  <h5 class="fs-6 fw-bold">Suggested Countries For you</h5>
                </div>
                <div class="suggestedCurrencylists">
                  <ul
                    class="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/united-states.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">United State Dollar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/united-kingdom.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry active" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/flag.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/belgium.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Euro</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/brazil.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/china.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Thai Baht</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="suggestedCurrencylist-wrap">
                <div class="d-inline-block mb-0 ps-3">
                  <h5 class="fs-6 fw-bold">All Countries</h5>
                </div>
                <div class="suggestedCurrencylists">
                  <ul
                    class="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/united-states.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">United State Dollar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/vietnam.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Property currency</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/turkey.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/spain.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/japan.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/flag.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/portugal.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/italy.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/germany.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/france.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/european.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/china.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Danish Krone</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/brazil.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/belgium.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/turkey.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/spain.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/germany.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/france.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                      </a>
                    </li>
                    <li class="col">
                      <a class="selectCountry" href="#">
                        <div class="d-inline-block"><img src="../assets/vendor/geotrip/img/flag/brazil.png"
                            class="img-fluid circle" width="35" alt=""></div>
                        <div class="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <a id="back2Top" class="top-scroll" title="Back to top" href="#"><i class="fa-solid fa-sort-up"></i></a>


  </div>
  <!-- ============================================================== -->
  <!-- End Wrapper -->
  <!-- ============================================================== -->
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
