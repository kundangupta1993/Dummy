<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Primary Meta Tags -->
<title> BlogPageTitle </title>
<meta name="description" content="BlogPageMetaDescription">
<meta name="keywords" content="BlogPageKeywords">
<meta name="language" content="English">
<meta name="author" content="Thinksys">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="BlogPageOgurl">
<meta property="og:title" content="BlogPageOgtitle">
<meta property="og:description" content="BlogPageOgdescription">
<meta property="og:image" content="BlogPageOgimage">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="BlogPageTwitterurl">
<meta property="twitter:title" content="BlogPageTwittertitle">
<meta property="twitter:description" content="BlogPageTwitterdescription">
<meta property="twitter:image" content="BlogPageTwitterimage">

<!--Robots tag-->
<meta name="robots" content= "BlogPageTobotscontent1, BlogPageTobotscontent2">

<!--structure data-->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "BlogPageMainEntityOfPageid"
  },
  "headline": "BlogPagejsonheadline",
  "description": "BlogPagejsondescription",
  "image": "BlogPagejsonimage",  
  "author": {
    "@type": "Organization",
    "name": "BlogPagejsonauthorName"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "BlogPagejsonpublisherName",
    "logo": {
      "@type": "ImageObject",
      "url": "BlogPagejsonpublisherUrl"
    }
  },
  "datePublished": "BlogPagejsonDatePublished",
  "dateModified": "BlogPagejsonDateModified"
}
</script>
  <link href="../assets/images/favicon.png" rel="icon"> 
     <!-- bootstrap css file  -->
			<link rel="stylesheet"  type="text/css" href="../assets/bootstrap/bootstrap.min.css">
			<!-- line-awesome cdn -->
			<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
			<!-- fontawesome css file -->
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			<!-- swiper css file -->
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css">
			
			<link rel="stylesheet" href="../assets/css/common.css">
			<link rel="stylesheet" href="../assets/css/header.css">
			<link rel="stylesheet" href="../assets/css/footer.css">
      <link rel="stylesheet" href="../assets/css/innerStyle.css">
      <link rel="stylesheet" href="../assets/css/blog.css">
</head>

<body>
<?php include('../common/header.php') ?>
<section class="subpage-banner" style="background-image: url('../assets/images/blogbanner.jpg');">
		<div class="banner-gradient">
			<div class="container h-100">
				<div class="row h-100 align-items-center">
					<div class="col-xl-6 offset-xl-3 text-center text-white">
            <h1 class="">Blog</h1>
					</div>
				</div>
			</div>
		</div>
  </section>
    <div class="container mt-7">
        <div class="row">
            <div class="col-lg-8">
                <main class="main-content-area">
                    <article class="post post-single">
                        <div class="post-header">
                            <div class="tag-wrap flex just-around flex-wrap align-items-center">
                                <a href="#" class="tag tag-pill tc-food">Development</a>
                                <div class="share-wrap flex align-items-center">
                                    <div class="share-title h5 text-center">Sharing is caring:</div>
                                    <div class="share-links flex align-items-center">
                                        <a class="facebook  equal-padding padding-l" href="#"
                                            title="Share on Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24">
                                                <path
                                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h6.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                                </path>
                                            </svg></a>

                                        <a class="twitter  equal-padding" href="#" title="Share on Twitter"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                                </path>
                                            </svg></a>

                                        <a class="whatsapp  equal-padding" href="#" title="Share on Whatsapp"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z">
                                                </path>
                                            </svg></a>

                                        <a class="pinterest  equal-padding" href="#" title="Share on Pinterest"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                                            </svg></a>

                                        <a class="linkedin equal-padding" href="#" title="Share on Linkedin"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
                                                </path>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                            <h1 class="post-title">An eCommerce Adoption Roadmap</h1>
                            <div class="post-meta">
                                <span class="author">By <a href="#">Thinksys</a></span>
                                <time class="pub-date" datetime="2020-06-24">June 24, 2020</time>
                            </div>
                        </div>
                        <div class="post-img-wrap">
                            <img class="post-img" src="../assets/images/e-com-development.jpg">
                        </div>
                        <div class="post-content">
                            <p>In the age of “shelter at home” and “social distancing”, eCommerce adoption is no longer
                                just an option but a necessity. Most offline businesses have now been forced to make a
                                move to online selling platforms. Even the biggest stores that have been in business for
                                many years are adopting online channels.</p>
                            <p>There have been changes in consumer behavior as well. As per a survey by CNBC, about 85%
                                of consumers now prefer online shopping over brick-and-mortar shops.</p>
                            <p>But while rushing to join the eCommerce bandwagon, you may miss out on some important
                                steps that might hurt your business in the long-run. Although, in essence, having an
                                eCommerce store is similar to having an offline store, there are many things that
                                differentiate the two.</p>
                            <p>To make sure your online business soars like your offline business, you must keep a few
                                things in mind.</p>
                            <p>With an online business, you need to be proactive rather than reactive. Having a
                                well-thought-out and specified roadmap can be the difference-maker. You need to identify
                                your goals and then based on these goals, you need to form an actionable plan or a
                                strong roadmap. Perhaps, the critical difference is just how central technology becomes
                                in an online model as compared to the offline models.</p>
                            <p>In this article, we will discuss the technical elements needed to shift from a purely
                                offline model to an eCommerce platform.</p>
                            <h3>First, Why eCommerce?</h3>
                            <p>Sure, some still need this question answered. So, here goes.</p>
                            <p>The biggest benefit of adopting eCommerce is that you get the opportunity to connect with
                                a wider audience. Since the majority of people own smartphones these days, eCommerce can
                                give you the power to be in people’s pockets. They don’t have to go around searching for
                                your store. Instead, your potential customers can simply access your products at their
                                fingertips.</p>
                            <p>Another significant benefit of adopting eCommerce is the lower setup cost as compared to
                                a brick-and-mortar store with its associated real-estate investments. Moreover,
                                eCommerce gives you the opportunity to create innovative, and impactful, promotions.
                                Also, as your online customer testimonials are available for billions of people to read,
                                it helps your credibility.</p>
                            <p>Hopefully, that will settle the “Why?” question. Now on to the “How?”</p>
                            <h3>An eCommerce Roadmap</h3>
                            <p>By focusing on the key elements mentioned below, you can create a great eCommerce
                                adoption roadmap – </p>
                            <p><b>Set up an online store:</b><br>
                                The first thing you need to do when making a switch to an online store is to have a
                                website or platform to showcase your products. There are tools aplenty and multiple
                                sales channels that you can use to easily set up your online store. Platforms like
                                Shopify, Magento, BigCommerce, WooCommerce, etc. are quite popular in this segment. </p>
                            <p>But beyond the eCommerce engine, you must focus on the experience you provide your
                                visitors. This brings the spotlight on the themes or website templates and elements that
                                you use. Remember, how your website looks and how it allows the visitors to browse,
                                search, and interact will be a crucial part of your store’s online presence.</p>
                            <p><b>Create the essential pages:</b><br>
                                Without getting too caught up in the frills of setting up an online store, you must
                                focus on creating those essential website pages that clearly showcase your products and
                                services. </p>
                            <p>First, focus on the basics and create an online store that makes it easy for people to
                                explore and find what they are looking for. Providing visitors the right information at
                                the right stage will help them progress in the buying journey.</p>
                            <p>Some of the essential pages include the homepage, product pages, return/exchange,
                                contact, and shipping. Your homepage should be able to help visitors easily dive into
                                the entire store and discover what they need as well as any offers or promotions. The
                                product pages on your online store must be detailed, compelling, and including
                                high-quality product images. The shipping page must be capable of answering some of the
                                common FAQs regarding shipping.</p>
                            <p>Communication is key. Your online visitors should be able to easily get in touch with you
                                or resolve their queries using the Contact page. The return/exchange page should help
                                customers get details about your return/exchange policies. This is also a good time to
                                explore adding options like AI-enabled chatbots and smart features that assist your
                                customers while helping you stand out.</p>
                            <p><b>Creating an online presence:</b><br>
                                After setting up an online store/website, the next step is to inform your customers
                                about it by creating an online presence. You need to reach out to your target audience
                                with the right messaging on the channels that they prefer.</p>
                            <p>For doing it, first, analyze the market and figure out who your audience is and where do
                                they hang out in the online space. Depending on your target audience, you can make use
                                of various social media platforms like Facebook, Instagram, Twitter, Reddit, or Quora.
                                These social media platforms allow you to interact with your potential buyers and sell
                                your products to them. After developing a good following on social media sites, you can
                                directly sell products from your social media handles as well.</p>
                            <p>Another effective strategy is to leverage the power of email. By using gated content that
                                delivers value to your users, you can collect emails of people which you can then use to
                                send personalized messages or campaigns. You can also use paid advertisements like
                                Google ads, Facebook ads, or YouTube ads to promote your online marketplace. </p>
                            <p>On the technology front, this is also a good time to consider the value of marketing
                                automation, email marketing, and CRM solutions that integrate with your web presence.
                                This will allow you to keep track of and build relationships with your target customers
                                over time.</p>
                            <p><b>Setting up payments</b><br>
                                This is a critical step. Since you’ll be dealing with a lot of financial transactions,
                                you must choose a secure payment solution. Rising consumer awareness and an increase in
                                the number of cybercrimes means that you must be extra careful while setting up a
                                payment method. Customers want convenient payment processes as well as security.</p>
                            <p><b>Order fulfillment</b><br>
                                Order fulfillment first requires inventory management. For an online store, you must be
                                aware of your inventory at all times. Integrating your systems with solutions like ERP
                                and supply chain systems will allow the site to be in sync with the orders being placed.
                                This tight integration also provides the customers with transparent visibility into the
                                delivery status at all times.</p>
                            <p><b>Customer service</b><br>
                                Irrespective of how big or small your online store is, customer service can be crucial.
                                Your customer service solutions should be capable of handling all customer queries and
                                should also be aware of all company policies. You can also look at utilizing smart
                                chatbots on your eCommerce website for greater impact.</p>
                            <p>Of course, this is just scratching the surface. You need to think about hosting the site,
                                data management, and including smart data-driven analytics into the operational
                                processes. The technology choices are extremely vast and they can have a profound impact
                                at every stage of this process. It’s only normal to be overwhelmed by the scale of the
                                task. That’s where, if you’d like any help with your eCommerce setup then ThinkSys could
                                help.</p>

                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="post post-compact next-post has-img">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/cloud.jpg">
                                    </div>
                                    <a href="#" class="overlay-link"></a>

                                    <div class="post-content">
                                        <div class="label">Newer post</div>
                                        <h6 class="post-title">Exploring Serverless Technologies</h6>
                                        <div class="post-meta">
                                            <time class="pub-date" datetime="2020-06-24">June 24, 2020</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="post post-compact previous-post has-img">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/native.jpg">
                                    </div>
                                    <a href="#" class="overlay-link"></a>
                                    <div class="post-content">
                                        <div class="label">Older post</div>
                                        <h6 class="post-title">Native Apps, Hybrid Apps, or Progressive Web
                                            Development</h6>
                                        <div class="post-meta">
                                            <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="related-post-wrap">
                            <div class="row">
                                <div class="col-12">
                                    <h3 class="section-title">You might also like</h3>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev1.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">5 Areas Where eCommerce Sites Can Gain
                                                    From Artificial Intelligence(AI)</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev2.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">Angular vs Reactjs: Our Updated
                                                    View</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev3.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">Application Development with
                                                    Microservices in the DevOps Age</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev4.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">What is Rapid Application Development
                                                    and why you should care?</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev5.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">What the Coming of 5G Means for Mobile
                                                    App Development?</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <article class="post post-style-one">
                                        <a href="#">
                                            <div class="post-img-wrap">
                                                <img class="post-img" src="../assets/images/dev6.jpg">
                                            </div>
                                        </a>
                                        <div class="post-content">
                                            <div class="tag-wrap">
                                                <a href="#" class="tag tag-small tc-food1">Development</a>
                                            </div>
                                            <h6 class="post-title"><a href="#">AngularJS – Making Mobile App
                                                    Development Better</a></h6>
                                            <div class="post-meta">
                                                <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                    </article>
                </main>
            </div>


            <div class="col-lg-4">
                <div class="form-group has-search w-100">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Type to search">
                </div>
                <aside class="site-sidebar">
                    <div class="widget widget-tags">
                        <h3 class="widget-title text-upper">Categories</h3>
                        <div class="widget-content">
                            <a href="#" class="tag tag-pill tc-business">AI</a>
                            <a href="#" class="tag tag-pill tc-food">AWS</a>
                            <a href="#" class="tag tag-pill tc-health">AZURE</a>
                            <a href="#" class="tag tag-pill tc-inspiration">BIG DATA</a>
                            <a href="#" class="tag tag-pill tc-lifestyle">BLOCKCHAIN</a>
                            <a href="#" class="tag tag-pill tc-nature">CEO'S MESSAGE</a>
                            <a href="#" class="tag tag-pill tc-sports">CLOUD</a>
                            <a href="#" class="tag tag-pill tc-technology">DEVELOPMENT</a>
                            <a href="#" class="tag tag-pill tc-travel">DEVOPS</a>
                            <a href="#" class="tag tag-pill tc-business">GUEST POST</a>
                            <a href="#" class="tag tag-pill tc-food">IOT</a>
                            <a href="#" class="tag tag-pill tc-health">MICRA SERVICES</a>
                            <a href="#" class="tag tag-pill tc-inspiration">PRESS RELEASE</a>
                            <a href="#" class="tag tag-pill tc-lifestyle">QA TESTING</a>
                            <a href="#" class="tag tag-pill tc-nature">SECURITY</a>
                            <a href="#" class="tag tag-pill tc-sports">STARTUPS</a>
                        </div>
                    </div>
                    <div class="widget widget-latest-post">
                        <h3 class="widget-title text-upper">Latest posts</h3>
                        <div class="widget-content">
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/devops.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-nature1">DevOps</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">Is your DevOps initiative pushing up your
                                            Cloud bills?</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-06-24">June 24, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/cloud.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-travel1">Cloud</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">Exploring Serverless Technologies</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-06-24">June 24, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/native.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-food1">Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">Native Apps, Hybrid Apps, or Progressive Web
                                            Development</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-06-24">June 24, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/security.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-nature1">Security</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">What Has Changed In The Security
                                            Considerations Of Enterprise Products?</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/reacttesting.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-technology1">Quality Assurance Testing</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">React Testing Library</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/azure.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-aws1">AWS, Azure</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">AWS and Azure: The Business Enablers for
                                            2020</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                        <span class="read-time">2 min read</span>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/flutter.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-food1">Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">React Native Vs Flutter App Development</a>
                                    </h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/costsaving.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-food1">Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">Cost-Saving While Maintaining The Pace Of
                                            Product Development</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>
                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/sector.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-ai1">AI,Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">5 Sectors Where AI Is Set To Rule</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/devproducts.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-food1">Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">The Top 5 Factors To Consider While Developing
                                            Products With Remote Teams</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/quantum.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-food1">Development</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">How Quantum Computing Can Help Businesses?</a>
                                    </h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/message.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-nature1">CEO's Message</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">How ThinkSys Is Ensuring It’s As Close As
                                            Possible To Business As Usual For Our Customers</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/aicare.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-ai1">AI</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">What Is Edge AI And Why Should Enterprises
                                            Care?</a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <article class="post post-style-two flex">
                                <a href="#">
                                    <div class="post-img-wrap">
                                        <img class="post-img" src="../assets/images/combat.jpg">
                                    </div>
                                </a>
                                <div class="post-content">
                                    <div class="tag-wrap">
                                        <a href="#" class="tag tag-small tc-ai1">AI</a>
                                    </div>
                                    <h6 class="post-title h5"><a href="#">How AI Can Help Combat Security Challenges?
                                        </a></h6>
                                    <div class="post-meta">
                                        <time class="pub-date" datetime="2020-05-21">May 21, 2020</time>
                                    </div>
                                </div>

                            </article>
                            <h3 class="widget-title text-upper">FOLLOW US ON TWITTER</h3>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
    <?php include('../common/enquiry-now.php') ?>
    <?php include('../common/footer.php') ?>
    
      <script src="../assets/js/jquery.min.js"></script>
      <!-- bootstrap js file -->
      <script src="../assets/bootstrap/bootstrap.min.js"></script>
      <script src="../assets/bootstrap/popper.min.js"></script>

    <script src="../assets/js/TweenMax.min.js"></script>
    <script src="../assets/js/TimelineMax.min.js"></script>
    <script src="../assets/js/main.js"></script>
</body>

</html>