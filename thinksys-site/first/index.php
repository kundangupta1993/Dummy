<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Primary Meta Tags -->
  <title> HomePageTitle </title>
  <meta name="description" content="HomePageMetaDescription">
  <meta name="keywords" content="HomePageKeywords">
  <meta name="language" content="English">
  <meta name="author" content="Home">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="HomePageOgurl">
  <meta property="og:title" content="HomePageOgtitle">
  <meta property="og:description" content="HomePageOgdescription">
  <meta property="og:image" content="HomePageOgimage">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="HomePageTwitterurl">
  <meta property="twitter:title" content="HomePageTwittertitle">
  <meta property="twitter:description" content="HomePageTwitterdescription">
  <meta property="twitter:image" content="HomePageTwitterimage">

  <!--Robots tag-->
  <meta name="robots" content="HomePageTobotscontent1, HomePageTobotscontent2">

  <!--structure data-->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "HomePageMainEntityOfPageid"
    },
    "headline": "HomePagejsonheadline",
    "description": "HomePagejsondescription",
    "image": "HomePagejsonimage",
    "author": {
      "@type": "Organization",
      "name": "HomePagejsonauthorName"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HomePagejsonpublisherName",
      "logo": {
        "@type": "ImageObject",
        "url": "HomePagejsonpublisherUrl"
      }
    },
    "datePublished": "HomePagejsonDatePublished",
    "dateModified": "HomePagejsonDateModified"
  }
  </script>
  <link href="../assets/images/favicon.png" rel="icon">
  <!-- bootstrap css file  -->
  <link rel="stylesheet" type="text/css" href="../assets/bootstrap/bootstrap.min.css">
  <!-- line-awesome cdn -->
  <link rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
  <!-- fontawesome css file -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- swiper css file -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css">

  <link rel="stylesheet" href="../assets/css/common.css">
  <link rel="stylesheet" href="../assets/css/header.css">
  <link rel="stylesheet" href="../assets/css/footer.css">
  <link rel="stylesheet" href="../assets/css/innerStyle.css" type="text/css">
  <link rel="stylesheet" href="../assets/css/style.css" type="text/css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" type="text/css">



</head>

<body>
  <?php include('../common/header.php') ?>
  <!-- particles.js container -->
  <div id="particles-js"></div>
  <script src="https://vincentgarreau.com/particles.js/assets/_build/js/lib/particles.js"></script>
  <div class="wrapper">
    <div class="homeHeader animation_img">
      <div class="homeHeader-inner">
        <div class="container">
          <div class="mid-text">
            <div class="sub-heading next1 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              Delivering Next Age Software
              Engineering Excellence
            </div>
            <h1 class="text-white text-center ml-auto mr-auto pb-7" data-aos="fade-up" data-aos-delay="300"
              data-aos-duration="800">Moving beyond
              the limits to empower businesses’ digital transformation.</h1>
            <a href="#main-services" class="banner-arrow">
              <div class="mouse"></div>
              <p>Scroll</p>
            </a>
          </div>
        </div>
      </div>
      <!-- <div id="myVideo1">
						<video autoplay muted loop id="myVideo">
							 <source src="../assets/images/HeaderVideo.mov" type="video/mp4">
						</video>
				 </div> -->
    </div>
    <!---- service-section start---->
    <div id="main-services" style="position: relative;top: -75px;"></div>
    <div class="main-service-section  py-7" style="background-image: url('../assets/images/back-pattern.png');">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 offset-xl-1">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <a href="devops-development-service.php">
                  <div class="service-content-wrap text-center devops" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="500">
                    <div class="image-wrap">
                      <img class="img-fluid" src="../assets/images/devops.png">
                    </div>
                    <h2 class="my-4">DevOps</h2>
                    <p class="mb-4">Automating & optimizing operations to power business with a new style of IT.</p>
                    <button class="btn buttonDefault">Know More</button>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-4">
                <a href="developement-services.php">
                  <div class="service-content-wrap text-center developement" data-aos="fade-up" data-aos-delay="500"
                    data-aos-duration="700">
                    <div class="image-wrap">
                      <img class="img-fluid" src="../assets/images/development.png" />
                    </div>
                    <h2 class="my-4">Development </h2>
                    <p class="mb-4">Innovation-led development solutions for future-ready applications. </p>
                    <button class="btn buttonDefault">Know More</button>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-4">
                <a href="qa-testing-service.php">
                  <div class="service-content-wrap text-center qa-testing" data-aos="fade-up" data-aos-delay="700"
                    data-aos-duration="900">
                    <div class="image-wrap">
                      <img class="img-fluid" src="../assets/images/devlopment4.svg" />
                    </div>
                    <h2 class="my-4">QA Testing</h2>
                    <p class="mb-4">Reimagining user experience with quality engineering to achieve agility and quality.
                    </p>
                    <button class="btn buttonDefault">Know More</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---- service-section end---->
    <div class='serviceContainer bg-white'>
      <div class='tiles d-none d-lg-block'>
        <div class="row1">
          <div class="box1 lightOrange"></div>
          <div class="box2 lightOrange">
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box3 orange">
            <div class="four"></div>
          </div>
          <div class="box4 red"></div>
          <div class="box5 darkOrange"></div>
        </div>
        <div class="row2">
          <div class="box6 lightGreen">
            <div class="one"></div>
            <div class="four"></div>
          </div>
          <div class="box7 lightOrange">
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <a href="developement-services.php" class="box8 green cursor-pointer service-link">
            <i class="las la-laptop-code"></i>
            <p>Development</p>
          </a>
          <a href="qa-testing-service.php" class="box9 orange cursor-pointer service-link">
            <i class="las la-file-code"></i>
            <p>QA Testing</p>
          </a>
        </div>
        <div class="row3">
          <div class="box10 red">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <a href="cloud-computing-service.php" class="box11 darkOrange cursor-pointer service-link">
            <i class="las la-cloud"></i>
            <p>Cloud Computing</p>
          </a>
          <a href="big-data-service.php" class="box12 orange cursor-pointer service-link">
            <i class="las la-database"></i>
            <p>Big Data</p>
          </a>
          <a href="devops-development-service.php" class="box13 red cursor-pointer service-link">
            <i class="lab la-dev"></i>
            <p>Dev Ops</p>
          </a>
          <a href="design-service.php" class="box14 darkOrange cursor-pointer service-link">
            <i class="las la-pencil-ruler"></i>
            <p>Design</p>
          </a>
        </div>
        <div class="row4">
          <div class="box15 red"></div>
          <div class="box16 red">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <a href="iot-development-service.php" class="box17 lightOrange cursor-pointer service-link">
            <i class="las la-sitemap"></i>
            <p>IOT</p>
          </a>
          <a href="it-infra-development-service.php" class="box18 khakiClr cursor-pointer service-link">
            <i class="las la-desktop"></i>
            <p>IT Infra</p>
          </a>
          <div class="box19">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
        </div>
        <div class="row5">
          <div class="box20">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box21">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box22 orange">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box23">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
        </div>
        <div class="row6">
          <div class="box24">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box25">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box26 green">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
        </div>
        <div class="row7">
          <div class="box27 red">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box28 red">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="box29 orange">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
        </div>
      </div>
      <div class="container h-100 h-xs-auto">
        <div class="row h-100 align-items-center align-items-md-center align-items-baseline">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="tiles d-block d-lg-none">
              <a href="services.php" class="box8 green cursor-pointer service-link">
                <i class="las la-laptop-code"></i>
                <p>Development</p>
              </a>
              <a href="qa-testing-service.php" class="box9 orange cursor-pointer service-link">
                <i class="las la-file-code"></i>
                <p>QA Testing</p>
              </a>
              <a href="cloud-computing-service.php" class="box11 darkOrange cursor-pointer service-link">
                <i class="las la-cloud"></i>
                <p>Cloud Computing</p>
              </a>
              <a href="big-data-service.php" class="box12 red cursor-pointer service-link">
                <i class="las la-database"></i>
                <p>Big Data</p>
              </a>
              <a href="devops-development-service.php" class="box13 red cursor-pointer service-link">
                <i class="lab la-dev"></i>
                <p>Dev Ops</p>
              </a>
              <a href="design-service.php" class="box14 darkOrange cursor-pointer service-link">
                <i class="las la-pencil-ruler"></i>
                <p>Design</p>
              </a>
              <a href="iot-development-service.php" class="box17 lightOrange cursor-pointer service-link">
                <i class="las la-sitemap"></i>
                <p>IOT</p>
              </a>
              <a href="it-infra-development-service.php" class="box18 khakiClr cursor-pointer service-link">
                <i class="las la-desktop"></i>
                <p>IT Infra</p>
              </a>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 order-1 order-lg-2">
            <div class="leftSide mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
              <h2 class="heading heading-style">Services</h2>
              <p class="aboutDesc">Reinvent your enterprise applications with our wide range of development and QA
                services and power your business with speed, quality, innovation, and productivity. Make the most of the
                emerging technologies like DevOps, Artificial Intelligence, Cloud Computing, and more to build,
                automate, and grow with agility. Be it application development, migration, management, or maintenance,
                our experts leverage their industry knowledge and technical expertise to help you achieve maximum
                business value and drive effective transformation.
              </p>
              <div class="">
                <button class="btn buttonDefault" onclick="location.href='services.php'">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of service container -->
    <div class="casestudy-section">
      <div class="casestudy-main-container">
        <div class="container h-100 casestudy-container">
          <div class="row h-100">
            <div class="col-lg-8 d-flex align-items-center" data-aos="fade-up" data-aos-delay="300"
              data-aos-duration="500">
              <div class="left-section">
                <div class="leftSide">
                  <h2 class="heading heading-style">Case Studies</h2>
                  <p class="aboutDesc">As an innovation-led and result-driven organization, we believe it’s only fair
                    that you’re able to see our results before you hop on-board. Browse through various detailed Case
                    Studies and discover how we help organizations build tech skills at scale and improve engineering
                    impact. Understand how we plan, build, innovate, and accomplish to helps our clients overcome their
                    business challenges across all industries and bring new life to processes using leading platforms,
                    frameworks, technologies, and more.
                  </p>
                  <div class="">
                    <button class="btn buttonDefault" onclick="location.href='case-study.php'">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="right-section-new">
                <div class="cs-col-1">
                  <div class="casebox1 casebox">
                    <div class="AtlasBlockimg"><img src="../assets/images/atlaslogo.png" /></div>
                  </div>
                  <div class="casebox2 casebox">
                    <div class="AmericanBlockimg"><img src="../assets/images/americangreetingslogo.png" /></div>
                  </div>
                </div>
                <div class="cs-col-2">
                  <div class="casebox3 casebox">
                    <div class="PlaytikaBlockimg"><img src="../assets/images/playtikalogo.png" /></div>
                  </div>
                  <div class="casebox4 casebox">
                    <div class="AllegroBlockimg"><img src="../assets/images/allegrologo.png" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="about-section">
      <div class="fullwidth">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-6 d-flex align-items-lg-center align-items-baseline" data-aos="fade-up"
              data-aos-delay="300" data-aos-duration="500">
              <div class="leftSide">
                <h2 class="heading heading-style">About Us</h2>
                <p class="aboutDesc">
                  ThinkSys is a fast-moving and agile software product development company that strives to help
                  enterprises navigate their path to digital transformation by embracing the power of next-generation
                  technologies and building scalable and secure software products. With years of experience in
                  delivering impeccable and quality software development, testing, and outsourced services, we expertly
                  help our clients through their digital journey. Moreover, our team of over 200+ employees leverages
                  their diverse skills across software development, automation, QA, Testing, DevOps, and more to offer
                  solutions that don't just work but guarantee an unparallel user experience.
                </p>
                <div class="">
                  <button class="btn buttonDefault" onclick="location.href='about_us.php'">Read More</button>
                </div>

              </div>
            </div>
            <div class="col-lg-6">
            </div>
          </div>
        </div>
        <div class="rightSide d-flex d-lg-none">
          <div id="hexagon14" class="hexagon">
            <div class="clip-caption"><a href="about_us.php">Company</a></div>
          </div>
          <div id="hexagon13" class="hexagon">
            <div class="clip-caption"><a href="about_us.php">Life At<br /> Thinksys</a></div>
          </div>
          <div id="hexagon9" class="hexagon">
            <div class="clip-caption"><a href="about_us.php">Why Us</a></div>
          </div>
          <div id="hexagon5" class="hexagon">
            <div class="clip-caption"><a href="testimonials.php">Testimonial</a></div>
          </div>
          <div id="hexagon7" class="hexagon">
            <div class="clip-caption"><a href="clients.php">Clients</a></div>
          </div>
        </div>
        <div class="rightSide d-lg-flex d-none">
          <div class="first-col">
            <div id="hexagon14" class="hexagon">
              <div class="clip-caption"><a href="about_us.php">Company</a></div>
            </div>
          </div>
          <div class="second-col">
            <div id="hexagon12" class="hexagon">
              <div class="hex-background"
                style="background-image: url(https://image.shutterstock.com/image-photo/close-view-young-business-people-600w-1731284125.jpg)">
              </div>
            </div>
            <div id="hexagon13" class="hexagon">
              <div class="clip-caption"><a href="about_us.php">Life At<br /> Thinksys</a></div>
            </div>
          </div>
          <div class="third-col">
            <div id="hexagon9" class="hexagon">
              <div class="clip-caption"><a href="about_us.php">Why Us</a></div>
            </div>
            <div id="hexagon10" class="hexagon">
              <div class="hex-background"
                style="background-image: url(https://image.shutterstock.com/image-vector/comic-vector-cartoon-illustration-explosions-600w-1101201776.jpg)">
              </div>
            </div>
            <div id="hexagon11" class="hexagon">
              <div class="hex-background"
                style="background-image: url(https://image.shutterstock.com/image-photo/startup-business-team-on-meeting-260nw-520798171.jpg)">
              </div>
            </div>
          </div>
          <div class="forth-col">
            <div id="hexagon5" class="hexagon">
              <div class="hex-background"
                style="background-image: url(https://image.shutterstock.com/image-photo/multiracial-thumbs-against-blue-sky-600w-171340040.jpg)">
              </div>
            </div>
            <div id="hexagon6" class="hexagon">
              <div class="clip-caption"><a href="testimonials.php">Testimonial</a></div>
            </div>
            <div id="hexagon7" class="hexagon">
              <div class="clip-caption"><a href="clients.php">Clients</a></div>
            </div>
            <div id="hexagon8" class="hexagon">
              <div class="hex-background"
                style="background-image: url(https://i0.wp.com/www.thinksys.com/wp-content/uploads/2018/03/life-at-thinksys.jpg?fit=1600%2C430&ssl=1)">
              </div>
            </div>
          </div>
          <div class="fifth-col">
            <div id="hexagon1" class="hexagon"></div>
            <div id="hexagon2" class="hexagon"></div>
            <div id="hexagon3" class="hexagon"></div>
            <div id="hexagon4" class="hexagon"></div>
            <div id="hexagon15" class="hexagon"></div>
          </div>
        </div>
      </div>
    </div>
    <section class="spacer bg-light" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">

      <div class="testimonial-section wow animate__animated animate__fadeIn">
        <div class="testi-user-img">
          <h2 class="heading heading-style-center text-center mt-md-4 mt-4">Testimonials</h2>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="u1" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u2" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u3" src="../assets/images/logo-missing.png" alt="">
              </div>

              <div class="swiper-slide">
                <img class="u4" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u5" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u6" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u7" src="../assets/images/logo-missing.png" alt="">
              </div>

              <div class="swiper-sl../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u9" src="../assets/images/logo-missing.png" alt="">
              </div>
              <div class="swiper-slide">
                <img class="u10" src="../assets/images/logo-missing.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="user-saying">

          <div class="swiper-container testimonial">
            <div class="swiper-wrapper ">
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">
                  <p>
                    “I really appreciate the efforts of customer support team at Thinksys in delivering the resolutions
                    via remote support without waiting for the customer’s response, which not only satisfies the
                    customer needs but also turn their experiences positive with us.“
                  </p>
                  <div class="name">-- Liat --</div>
                  <div class="designation">Senior Manager</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “I am glad to have my product and services in the safe hands of one of the best QA organizations who
                    understand the client’s needs and believes in real-time executions to accomplish the business goals.
                    In addition, I also admire the invaluable insights provided by the Thinksys team to us, useful in
                    driving the new business. Thanks for your efforts and support.“
                  </p>
                  <div class="name">-- Hila --</div>
                  <div class="designation">QA Manger</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “I am quite impressed with the efficiency and proficiency of Thinksys Development team in
                    successfully updating and implementing changes at 11th hour to meet the need of volatile
                    requirements.“
                  </p>
                  <div class="name">-- Brett --</div>
                  <div class="designation">QA Manger</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “With their outstanding and commendable work, I always feel happy while working with the Thinksys.“
                  </p>
                  <div class="name">-- Brett --</div>
                  <div class="designation">QA Manger</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “Thanks to Thinksys team, who goes beyond the boundaries along with their sincere efforts to helps
                    us in resolving major bugs & issues. I feel happy and assured of your valuable efforts and hard work
                    in delivering best QA solutions even in the most complex situations. Further, I am very much
                    grateful of your involvement and assistance in our mobile web redesign testing. Thanks Thinksys team
                    for your good work. “
                  </p>
                  <div class="name">-- Sanjay Patel --</div>
                  <div class="designation">QA Manger</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “QA team at Thinksys has always accepted our different business & software challenges whether defect
                    writing or adding up QA test scenarios to new stories, and have successfully executed them in an
                    effective manner within the stipulated time period. Great Job!! I really appreciate you for their
                    hard work.“
                  </p>
                  <div class="name">-- Deen Ibrahim --</div>
                  <div class="designation">QSenior Manager</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “We are thankful for your much appreciated and valuable feedbacks and assistance during android app
                    regression. “
                  </p>
                  <div class="name">-- Lauren Stigmen --</div>
                  <div class="designation">Senior Manager</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “Thank you for your help with OWA in bringing up the large customer base for us. “
                  </p>
                  <div class="name">-- Eric Karlsson --</div>
                  <div class="designation">Senior Manager</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “I appreciate your deviation from the standard schedule to test after the Disaster Recovery process
                    to verify and validate the veracity and intended functioning of our website. Please, keep up the
                    good work. “
                  </p>
                  <div class="name">-- Joe --</div>
                  <div class="designation">Senior Manager</div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="quote">
                  <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="">

                  <p>
                    “Teams at Thinksys; Development or QA or any other team knows how to coordinate amongst themselves
                    very well. Teams impart combined efforts by working closely to validate full flows in a much
                    effective manner. I am very much pleased with the excellent work carried out at Thinksys. “
                  </p>
                  <div class="name">-- J.Taylor Claiborne --</div>
                  <div class="designation">Senior Manager</div>

                </div>
              </div>


            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>

          </div>
        </div>
      </div>
    </section>
    <section class="partenerWrap" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <img src="../assets/images/bottom.png" class="topAttach" alt="">
      <h1 class="partnerHead heading heading-style-center">
        Our Partners
      </h1>
      <div class="swiper-container our-partner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swContainer">
              <div class="imgWrap">
                <img src="../assets/images/partner1.png" class="slideImage slide1" alt="">
              </div>
              <div class="textWrap">
                <!-- <div class="companyName">
													 Century Link
												</div> -->
                <div class="companyPara">
                  Leading application automated testing platform for delivering digital confidence.
                </div>
              </div>
              <!-- <div class="learnWrap">
												<span class="learnMore">
												Learn More
												</span>
												<img src="../assets/images/right-arrow.png" class="right-arrow" alt="">
										 </div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swContainer">
              <div class="imgWrap">
                <img src="../assets/images/partner2.png" class="slideImage slide1" alt="">
              </div>
              <div class="textWrap">
                <!-- <div class="companyName">
													 Century Link
												</div> -->
                <div class="companyPara">
                  Enterprise-ready self-service load testing platform as a service (PaaS) for quality app performance.
                </div>
              </div>
              <!-- <div class="learnWrap">
												<span class="learnMore">
												Learn More
												</span>
												<img src="../assets/images/right-arrow.png" class="right-arrow" alt="">
										 </div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swContainer">
              <div class="imgWrap">
                <img src="../assets/images/partner3.png" class="slideImage slide1" alt="">
              </div>
              <div class="textWrap">
                <!-- <div class="companyName">
													 Century Link
												</div> -->
                <div class="companyPara">
                  Certified Microsoft support for improved efficiency, business growth, & accelerated sales cycle.
                </div>
              </div>
              <!-- <div class="learnWrap">
												<span class="learnMore">
												Learn More
												</span>
												<img src="../assets/images/right-arrow.png" class="right-arrow" alt="">
										 </div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swContainer">
              <div class="imgWrap">
                <img src="../assets/images/partner4.png" class="slideImage slide1" alt="">
              </div>
              <div class="textWrap">
                <!-- <div class="companyName">
													 Century Link
												</div> -->
                <div class="companyPara">
                  A dynamic partner ecosystem with a rich and flexible suite of benefits to help a business grow.
                </div>
              </div>
              <!-- <div class="learnWrap">
												<span class="learnMore">
												Learn More
												</span>
												<img src="../assets/images/right-arrow.png" class="right-arrow" alt="">
										 </div> -->
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swContainer">
              <div class="imgWrap">
                <img src="../assets/images/partner5.png" class="slideImage slide1" alt="">
              </div>
              <div class="textWrap">
                <!-- <div class="companyName">
												 Century Link
											</div> -->
                <div class="companyPara">
                  For optimum digital marketing solutions, professional services, and integrated technologies.
                </div>
              </div>
              <!-- <div class="learnWrap">
											<span class="learnMore">
											Learn More
											</span>
											<img src="../assets/images/right-arrow.png" class="right-arrow" alt="">
									 </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <img src="../assets/images/bottom.png" class="bottomAttach" alt="">
    </section>
    <!---- wrapper end start ---->
    <?php include('../common/footer.php') ?>
    <script src="../assets/js/jquery.min.js"></script>
    <!-- bootstrap js file -->
    <script src="../assets/bootstrap/bootstrap.min.js"></script>
    <script src="../assets/bootstrap/popper.min.js"></script>
    <!-- swiper js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js"></script>
    <!-- <script type="text/javascript" src="../assets/js/html5shiv.js"></script> -->

    <script src="../assets/js/jquery.localscroll-1.2.7-min.js" type="text/javascript"></script>
    <script src="../assets/js/jquery.scrollTo-1.4.6-min.js" type="text/javascript"></script>
    <script src="../assets/js/jquery.nicescroll.min.js" type="text/javascript"></script>
    <script src="../assets/js/TweenMax.min.js"></script>
    <script src="../assets/js/TimelineMax.min.js"></script>
    <!-- <script src="../assets/js/animate.js"></script> -->
    <script src="../assets/js/swiper-bundle.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <!-- <script src="../assets/js/wow.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

    <script>
    AOS.init({
      once: true
    });
    </script>

    <script>
    var swiper = new Swiper('.our-partner', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

      },
      breakpoints: {

        1100: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        780: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        650: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        140: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }


    });

    $(document).ready(function() {
      $("html").niceScroll({
        cursorcolor: "#fff"
      });
      $("#left").hover(
        function() {
          $(this).addClass("result_hover");
          $("#right").addClass("result_down");
          $("#mid").addClass("result_down");
        },
        function() {
          $(this).removeClass("result_hover");
          $("#right").removeClass("result_down");
          $("#mid").removeClass("result_down");
        }
      );

      $("#mid").hover(
        function() {
          $(this).addClass("result_hover");
          $("#right").addClass("result_down");
          $("#left").addClass("result_down");
        },
        function() {
          $(this).removeClass("result_hover");
          $("#right").removeClass("result_down");
          $("#left").removeClass("result_down");
        }
      );

      $("#right").hover(
        function() {
          $(this).addClass("result_hover");
          $("#left").addClass("result_down");
          $("#mid").addClass("result_down");
        },
        function() {
          $(this).removeClass("result_hover");
          $("#left").removeClass("result_down");
          $("#mid").removeClass("result_down");
        }
      );

    });
    </script>
    <!-- testimonials swiper call -->
    <script>
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '2',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 70,
        modifier: 6,
        slideShadows: false,
      }

    });


    var galleryTop = new Swiper('.swiper-container.testimonial', {
      speed: 400,
      spaceBetween: 50,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });




    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);;
    </script>
</body>

</html>