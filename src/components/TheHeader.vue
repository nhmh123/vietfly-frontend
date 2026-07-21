<template>
  <!-- Start Navigation -->
  <div class="header header-light">
    <div class="container">
      <nav id="navigation" class="navigation navigation-landscape">
        <div class="nav-header">
          <a class="nav-brand" href="#"><img src="../assets/vendor/geotrip/img/logo.png" class="logo" alt=""></a>
          <div class="nav-toggle"></div>
          <div class="mobile_nav">
            <ul>
              <li class="languageDropdown me-3">
                <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                  <span class="d-flex align-items-center gap-2">INR |<i class="bi bi-globe h-auto"></i></span>
                </a>
              </li>
              <li>
                <a href="#" class="text-primary rounded" data-bs-toggle="modal" data-bs-target="#login">
                  <svg width="34" height="34" viewBox="0 0 24 24" class="fill-primary"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3"
                      d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" />
                    <path
                      d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-menus-wrapper" style="transition-property: none;">
          <ul class="nav-menu">

            <li><a href="JavaScript:Void(0);">Home<span class="submenu-indicator"></span></a>
              <ul class="nav-dropdown nav-submenu">
                <li>
                  <a href="index.html">Home version 01</a>
                </li>
                <li>
                  <a href="home-2.html">Home version 02</a>
                </li>
                <li>
                  <a href="home-3.html">Home version 03</a>
                </li>
                <li>
                  <a href="home-4.html">Home version 04</a>
                </li>
                <li>
                  <a href="home-5.html">Home version 05</a>
                </li>
                <li>
                  <a href="slider-home.html">Home version 06</a>
                </li>
              </ul>
            </li>

            <li><a href="JavaScript:Void(0);">Listing<span class="submenu-indicator"></span></a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="JavaScript:Void(0);">Hotel<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="hotel-list-01.html">Hotel list 01</a></li>
                    <li><a href="hotel-list-02.html">Hotel list 02</a></li>
                    <li><a href="hotel-list-03.html">Hotel list 03</a></li>
                    <li><a href="hotel-detail.html">Hotel Detail 01</a></li>
                    <li><a href="hotel-detail-2.html">Hotel Detail 02</a></li>
                  </ul>
                </li>
                <li><a href="JavaScript:Void(0);">Flight<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="flight-list-01.html">Flight List 01</a></li>
                    <li><a href="flight-list-02.html">Flight List 02</a></li>
                    <li><a href="Flight-detail.html">Flight Detail</a></li>
                  </ul>
                </li>
                <li><a href="JavaScript:Void(0);">Rental<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="property-list-01.html">Rental List 01</a></li>
                    <li><a href="property-list-02.html">Rental List 02</a></li>
                    <li><a href="property-list-03.html">Rental List 03</a></li>
                    <li><a href="rental-detail.html">Rental Detail</a></li>
                  </ul>
                </li>
                <li><a href="JavaScript:Void(0);">Car<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="car-list-01.html">Car List 01</a></li>
                    <li><a href="car-list-02.html">Car List 02</a></li>
                    <li><a href="car-list-03.html">Car List 03</a></li>
                    <li><a href="car-detail.html">Car Detail</a></li>
                  </ul>
                </li>
                <li><a href="JavaScript:Void(0);">Destination<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="destination-01.html">Destination List 01</a></li>
                    <li><a href="destination-02.html">Destination List 02</a></li>
                    <li><a href="destination-03.html">Destination List 03</a></li>
                    <li><a href="destination-detail.html">Destination Detail</a></li>
                  </ul>
                </li>
                <li>
                  <a href="join-us.html">Join with GeoTrip</a>
                </li>
                <li>
                  <a href="add-listing.html">Add Listing</a>
                </li>
                <li>
                  <a href="compare-listing.html">Compare Listing</a>
                </li>
                <li>
                  <a href="booking-page.html">Booking Page</a>
                </li>
                <li>
                  <a href="my-profile.html">User Dashboard</a>
                </li>
              </ul>
            </li>

            <li><a href="JavaScript:Void(0);">Pages<span class="submenu-indicator"></span></a>
              <ul class="nav-dropdown nav-submenu">
                <li><a href="JavaScript:Void(0);">Blog<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="classic-blog.html">Classic Blog</a></li>
                    <li><a href="blog.html">Blog Grid Style</a></li>
                    <li><a href="blog-detail.html">Single Blog</a></li>
                  </ul>
                </li>
                <li><a href="JavaScript:Void(0);">Authentication<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="login.html">Sign In</a></li>
                    <li><a href="register.html">Sign Up</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    <li><a href="two-factor-auth.html">Two factor authentication</a></li>
                  </ul>
                </li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="career-page.html">Career Page</a></li>
                <li><a href="help-center.html">Help Center</a></li>
                <li><a href="faq.html">FAQ's</a></li>
                <li><a href="404.html">Error Page</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="JavaScript:Void(0);">Contact Us<span class="submenu-indicator"></span></a>
                  <ul class="nav-dropdown nav-submenu">
                    <li><a href="contact-v1.html">Contact V.01</a></li>
                    <li><a href="contact-v2.html">Contact V0.2</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href="JavaScript:Void(0);">Menu<span class="submenu-indicator"></span></a>
              <ul class="nav-dropdown nav-submenu xxl-menu">
                <li>
                  <a href="home-stay.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i
                          class="fa-solid fa-spa"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Stays</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="home-hotel.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i
                          class="fa-solid fa-hotel"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="home-flight.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i
                          class="fa-solid fa-plane"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Flight</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="home-rental.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i
                          class="fa-solid fa-eye"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Rental</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="home-car.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i
                          class="fa-brands fa-dropbox"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="home-stay.html">
                    <div class="mega-advance-menu">
                      <div class="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i
                          class="fa-solid fa-person-walking-luggage"></i></div>
                      <div class="mega-last ps-2">
                        <h6 class="lh-base fs-6 font--bold m-0">Home Destination</h6>
                        <p class="text-sm-muted m-0">Beautiful Place for stays</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="documantion/index.html" target="_blank">Docs</a></li>

          </ul>

          <ul class="nav-menu nav-menu-social align-to-right">
            <li class="languageDropdown me-2">
              <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">INR | <i
                  class="bi bi-globe"></i></a>
            </li>
            <li class="list-buttons">
              <a href="#" class="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i
                  class="fa-regular fa-circle-user fs-6 me-2"></i>Sign In / Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!-- End Navigation -->
  <div class="clearfix"></div>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>
