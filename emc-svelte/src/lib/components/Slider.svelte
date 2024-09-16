<section id="slider1" class="slider slider-1">
    <div class="carousel owl-carousel carousel-arrows carousel-dots" data-slide="1" data-slide-md="1"
      data-slide-sm="1" data-autoplay="true" data-nav="true" data-dots="true" data-space="0" data-loop="true"
      data-speed="3000" data-transition="fade" data-animate-out="fadeOut" data-animate-in="fadeIn">
      <div class="slide-item align-v-h bg-overlay">
        <div class="bg-img"><img src="/images/sliders/10.jpg" alt="slide img"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
              <div class="slide__content">
                <h2 class="slide__title">Unyielding Protection, Every Day</h2>
                <p class="slide__desc">Crafted with precision, our impact windows and doors are built 
                  to withstand the toughest conditions, safeguarding your home and business.</p>
                <a href="tel:3052836280" class="btn btn__primary btn__hover2 mr-30">
                  <i class="icon-arrow-right"></i><span>Request Quote</span>
                </a>
                <a href="products.html" class="btn btn__white btn__bordered">
                  <i class="icon-arrow-right"></i><span>Our Products</span>
                </a>
              </div><!-- /.slide-content -->
            </div><!-- /.col-xl-9 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.slide-item -->
      <div class="slide-item align-v-h bg-overlay">
        <div class="bg-img"><img src="/images/sliders/11.jpg" alt="slide img"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
              <div class="slide__content">
                <h2 class="slide__title">Innovation Meets Reliability</h2>
                <p class="slide__desc">Engineered to perfection, 
                  our products meet Florida's stringent codes, offering you peace of mind with every installation</p>
                  <a href="tel:3052836280" class="btn btn__primary btn__hover2 mr-30">
                    <i class="icon-arrow-right"></i><span>Request Quote</span>
                  </a>
                  <a href="products.html" class="btn btn__white btn__bordered">
                    <i class="icon-arrow-right"></i><span>Our Products</span>
                  </a>
              </div><!-- /.slide-content -->
            </div><!-- /.col-xl-9 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.slide-item -->
      <div class="slide-item align-v-h bg-overlay">
        <div class="bg-img"><img src="/images/sliders/12.jpg" alt="slide img"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
              <div class="slide__content">
                <h2 class="slide__title">Ready When You Are</h2>
                <p class="slide__desc">Whether it’s a last-minute project or a planned build, 
                  our stock windows and doors are always available to meet your immediate needs.</p>
                  <a href="tel:3052836280" class="btn btn__primary btn__hover2 mr-30">
                    <i class="icon-arrow-right"></i><span>Request Quote</span>
                  </a>
                  <a href="products.html" class="btn btn__white btn__bordered">
                    <i class="icon-arrow-right"></i><span>Our Products</span>
                  </a>
              </div><!-- /.slide-content -->
            </div><!-- /.col-xl-9 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.slide-item -->
    </div><!-- /.carousel -->
  </section><!-- /.slider -->


<style lang="scss">
.header-transparent+.slider {
  margin-top: -100px;
}

.header-transparent+.slider .slide-item {
  padding-top: 100px;
}

.slider {
  padding: 0;
}

.slider .slide-item {
  height: 100vh;
}

.slider .slide__subtitle {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: #335dff;
  margin-bottom: 18px;
}

.slider .slide__title {
  font-size: 105px;
  line-height: 95px;
  color: #ffffff;
  margin-bottom: 20px;
}

.slider .slide__desc {
  font-size: 17px;
  line-height: 26px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 46px;
  max-width: 650px;
}

.slider .carousel-arrows .owl-nav .owl-prev {
  left: 50px;
}

.slider .carousel-arrows .owl-nav .owl-next {
  right: 50px;
}

.slider .carousel-arrows .owl-nav .owl-prev,
.slider .carousel-arrows .owl-nav .owl-next {
  color: #ffffff;
  border: none;
  line-height: 46px;
  width: auto;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.4s ease;
  transform: scale(0.8);
}

.slider .carousel-arrows .owl-nav .owl-prev:hover,
.slider .carousel-arrows .owl-nav .owl-next:hover {
  color: #335dff;
}

.slider:hover .carousel-arrows .owl-nav .owl-prev,
.slider:hover .carousel-arrows .owl-nav .owl-next {
  opacity: 1;
  transform: scale(1);
}

.slider .carousel-arrows .owl-dots {
  bottom: 30px;
  text-align: center;
}

.slider .carousel-dots .owl-dots .owl-dot span {
  border-color: #ffffff;
}

.slider .carousel-dots .owl-dots .owl-dot.active span:before {
  background-color: #ffffff;
}

.slider-layout2 .slide__title {
  font-size: 85px;
}

/* Large Size Screens */
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .slider .slide__title {
    font-size: 65px;
    line-height: 75px;
  }

  .slider .carousel-arrows .owl-nav .owl-next {
    right: 10px;
  }

  .slider .carousel-arrows .owl-nav .owl-prev {
    left: 10px;
  }
}

/* Medium Size Screens */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .slider .slide__title {
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 10px;
  }

  .slider .carousel-arrows .owl-nav .owl-next {
    right: 0;
  }

  .slider .carousel-arrows .owl-nav .owl-prev {
    left: 0;
  }
}

/* Mobile Phones and tablets */
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .header-transparent+.slider {
    margin-top: 0;
  }

  .header-transparent+.slider .slide-item {
    padding-top: 0;
  }

  .slider .slide-item {
    height: calc(100vh - 80px);
  }

  .header-transparent+.slider .slide__content {
    padding-top: 0;
  }

  .slider .carousel-arrows .owl-nav .owl-prev,
  .slider .carousel-arrows .owl-nav .owl-next {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  .slider .carousel-arrows .owl-nav .owl-next:before,
  .slider .carousel-arrows .owl-nav .owl-prev:before {
    font-size: 15px;
  }
}

/*  Small Screens and tablets  */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .slider .slide__title {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 10px;
  }

  .slider .carousel-arrows .owl-nav .owl-prev {
    left: 10px;
  }

  .slider .carousel-arrows .owl-nav .owl-next {
    right: 10px;
  }
}

/* Extra Small Devices */
@media only screen and (min-width: 320px) and (max-width: 575px) {
  .slider .slide__subtitle {
    margin-bottom: 15px;
  }

  .slider .slide__title {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 10px;
  }

  .slider .slide__desc {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .slider .btn {
    margin-bottom: 20px;
  }

  .slider .carousel-arrows .owl-nav .owl-prev,
  .slider .carousel-arrows .owl-nav .owl-next {
    display: none;
  }
}

/*--------------------------
      Video
--------------------------*/
.video__btn {
  position: relative;
}

.video-banner {
  padding: 225px 0;
  border-radius: 5px;
}

.video-banner-layout2 {
  padding: 300px 0;
}

.popup-video {
  text-align: center;
  display: inline-block;
  position: relative;
}

.popup-video .video__player {
  font-size: 18px;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
  background-color: #335dff;
  color: #ffffff;
  position: relative;
  display: inline-block;
}

.popup-video .video__player-animation {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border: 2px solid #ffffff;
  border-radius: 50%;
  -webkit-animation: pulsing 3s linear 0s infinite;
  -moz-animation: pulsing 3s linear 0s infinite;
  -ms-animation: pulsing 3s linear 0s infinite;
  -o-animation: pulsing 3s linear 0s infinite;
  animation: pulsing 3s linear 0s infinite;
}

.popup-video .video__player-animation-2 {
  animation-delay: 1s;
}

.popup-video .video__player-animation-3 {
  animation-delay: 1.8s;
}

.popup-video .video__player-title {
  color: #1b1a1a;
  font-size: 13px;
  font-weight: 700;
  padding-top: 20px;
  margin-bottom: 0;
  line-height: 1;
  margin-left: 30px;
}

.popup-video:hover .video__player-animation {
  opacity: 0;
  animation-play-state: paused;
}

.video__btn-white .video__player {
  background-color: #ffffff;
  color: #1b1a1a;
}

/* Mobile Phones and tablets */
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .video-banner {
    padding: 125px 0;
  }

  .video-banner-layout2 {
    padding: 150px 0;
  }

  .popup-video .video__player {
    font-size: 18px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
}

/* Extra Small Devices */
@media only screen and (min-width: 320px) and (max-width: 575px) {
  .video-banner {
    padding: 100px 0;
  }

  .video-banner-layout2 {
    padding: 120px 0;
  }
}
  </style>