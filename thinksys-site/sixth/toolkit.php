<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Primary Meta Tags -->
<title> ToolkitPageTitle </title>
<meta name="description" content="ToolkitPageMetaDescription">
<meta name="keywords" content="ToolkitPageKeywords">
<meta name="language" content="English">
<meta name="author" content="Thinksys">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="ToolkitPageOgurl">
<meta property="og:title" content="ToolkitPageOgtitle">
<meta property="og:description" content="ToolkitPageOgdescription">
<meta property="og:image" content="ToolkitPageOgimage">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="ToolkitPageTwitterurl">
<meta property="twitter:title" content="ToolkitPageTwittertitle">
<meta property="twitter:description" content="ToolkitPageTwitterdescription">
<meta property="twitter:image" content="ToolkitPageTwitterimage">

<!--Robots tag-->
<meta name="robots" content= "ToolkitPageTobotscontent1, ToolkitPageTobotscontent2">

<!--structure data-->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "ToolkitPageMainEntityOfPageid"
  },
  "headline": "ToolkitPagejsonheadline",
  "description": "ToolkitPagejsondescription",
  "image": "ToolkitPagejsonimage",  
  "author": {
    "@type": "Organization",
    "name": "ToolkitPagejsonauthorName"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "ToolkitPagejsonpublisherName",
    "logo": {
      "@type": "ImageObject",
      "url": "ToolkitPagejsonpublisherUrl"
    }
  },
  "datePublished": "ToolkitPagejsonDatePublished",
  "dateModified": "ToolkitPagejsonDateModified"
}
</script>
  <link href="../assets/images/favicon.png" rel="icon">
   <!-- bootstrap css file  -->
  <link rel="stylesheet"  type="text/css" href="../assets/bootstrap/bootstrap.min.css">
  <!-- line-awesome cdn -->
  <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
  <!-- fontawesome css file -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- website css file -->
  <link rel="stylesheet" href="../assets/css/common.css">
  <link rel="stylesheet" href="../assets/css/header.css">
  <link rel="stylesheet" href="../assets/css/footer.css">
  <link rel="stylesheet" href="../assets/css/innerStyle.css">
  <link rel="stylesheet" href="../assets/css/toolkit.css">
  
  </head>
  <body>  
  <?php include('../common/header.php') ?>
<section class="subpage-banner toolkit-banner" style="background-image: url('../assets/images/toolkitbanner.jpg');">
  <div class="banner-gradient">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-xl-6 offset-xl-3 text-center text-white">
          <h1 class="">The right software development partner can change everything</h1>
          <h5>We help tech companies to scale up by providing them with agile software development teams</h5>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="toolkit-main mt-7">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 mt-lg-5 pt-lg-3 mb-5">
        <nav class="navigation mt-4" id="mainNav">
          <a class="navigation__link active" href="#development-toolkit">
            <img src="../assets/images/wdt.png" alt="">
             <p>Development Toolkit</p>
            </a>
          <a class="navigation__link" href="#mob-development-toolkit">
            <img src="../assets/images/mdt.png" alt="">
            <p>Mobile Development Toolkit</p>
          </a>
          <a class="navigation__link" href="#testing-toolkit">
            <img src="../assets/images/testing.png" alt="">
            <p>Testing Toolkit</p>
          </a>
        </nav>

      </div>
      <div class="col-lg-9">
        <!-- Development Toolkit -->
        <div id="development-toolkit"></div>
          <div class="container toolkit-section p-0 pt-7">
            <h2 class="mb-4">Development Toolkit</h2>
            <div class="controls mb-5">
                <div class="Innercontainer">
                    <div class=" d-block d-xl-flex justify-content-around text-center">
                        <button class="view-filter active all-developement-tab" data-filter="all">All</button>
                        <button class="view-filter ide-editors-tab" data-filter="IDE-Editors">IDE/Editors</button>
                        <button class="view-filter developement-tab" data-filter="Deployment">Deployment</button>
                        <button class="view-filter containers-tab" data-filter="Containers">Containers</button>
                        <button class="view-filter cloud-tab" data-filter="Cloud">Cloud</button>
                        <button class="view-filter restclient-tab" data-filter="RestClient">RestClient</button>
                        <button class="view-filter version-control-tab" data-filter="Version Control">Version Control</button>
                        <button class="view-filter version-cont-server-tab" data-filter="Version Control Server">Version Control Server</button>
                        <button class="view-filter ci-cd-tab" data-filter="CI/CD">CI/CD</button>
                        <button class="view-filter misc-tab" data-filter="Misc">Misc</button>
                        <button class="view-filter virtualization-tab" data-filter="Virtualization">Virtualization</button>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul class="developement-toolkit-wrap toolkit-wrap pt-7">
                  <!-- 1. IDE/Editors -->
                  <li class="developement-toolkit toolkit">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/iconfinder_visualstudiocode_4691493.png" alt="" class="img-fluid">
                      <p>VSCode</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/sublime-text.svg" alt="" class="img-fluid">
                      <p>Sublime</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/iconfinder_vim_4691236.png" alt="" class="img-fluid">
                      <p>Vim</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/notepad--1.svg" alt="" class="img-fluid">
                      <p>Notepad++</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/iconfinder_14_939747.svg" alt="" class="img-fluid">
                      <p>Visual Studio</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/webstorm-icon-logo.png" alt="" class="img-fluid">
                      <p>Webstorm</p>
                    </div>
                    </div>
                  </li>
                  <li class="developement-toolkit toolkit ide-editor">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/eclipse.png" alt="" class="img-fluid">
                      <p>Eclipse</p>
                    </div>
                    </div>
                  </li>
                  <!-- 2. Deployment -->
                  <li class="developement-toolkit toolkit developement">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/iis.png" alt="" class="img-fluid">
                        <p>IIS</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit developement">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/pm2.png" alt="" class="img-fluid">
                        <p>PM2</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit developement">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/Nginx.png" alt="" class="img-fluid">
                        <p>Nginx</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit developement">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/Apache.png" alt="" class="img-fluid">
                        <p>Apache</p>
                      </div>
                      </div>
                  </li>
                  <!-- 3. Containers -->
                  <li class="developement-toolkit toolkit containers">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/docker.png" alt="" class="img-fluid">
                        <p>Docker</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit containers">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/Kubernetes.png" alt="" class="img-fluid">
                        <p>Kubernetes</p>
                      </div>
                      </div>
                  </li>
                  <!-- 4. Cloud -->
                  <li class="developement-toolkit toolkit cloud">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/aws.png" alt="" class="img-fluid">
                        <p>AWS</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit cloud">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/google.png" alt="" class="img-fluid">
                        <p>Google</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit cloud">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/microsoft.png" alt="" class="img-fluid">
                        <p>Microsoft</p>
                      </div>
                      </div>
                  </li>
                  <!-- 5. RestClient -->
                  <li class="developement-toolkit toolkit restclient">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/postman.png" alt="" class="img-fluid">
                        <p>Postman</p>
                      </div>
                      </div>
                  </li>
                  <!-- 6. Version Control -->
                  <li class="developement-toolkit toolkit version-control">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/git.png" alt="" class="img-fluid">
                        <p>Git</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit version-control">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/tfs.png" alt="" class="img-fluid">
                        <p>TFS</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit version-control">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/svn.png" alt="" class="img-fluid">
                        <p>SVN</p>
                      </div>
                      </div>
                  </li>
                  <!-- 7. Version Control Server -->
                  <li class="developement-toolkit toolkit version-control-server">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/github.png" alt="" class="img-fluid">
                        <p>Github</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit version-control-server">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/gitlab.png" alt="" class="img-fluid">
                        <p>Gitlab</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit version-control-server">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/bitbucket.png" alt="" class="img-fluid">
                        <p>Bitbucket</p>
                      </div>
                      </div>
                  </li>
                  <!-- 8. CI/CD -->
                  <li class="developement-toolkit toolkit ci-cd">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/Jenkins.png" alt="" class="img-fluid">
                        <p>Jenkins</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit ci-cd">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/gitlab.png" alt="" class="img-fluid">
                        <p>Gitlab</p>
                      </div>
                      </div>
                  </li>
                  <!-- 9. Misc -->
                  <li class="developement-toolkit toolkit misc">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/eslint.png" alt="" class="img-fluid">
                        <p>ESLint – (Code Quality Check)</p>
                        </div>
                  </li>
                  <!-- 10. Virtualization -->
                  <li class="developement-toolkit toolkit virtualization">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/VirtualBox.png" alt="" class="img-fluid">
                        <p>VirtualBox</p>
                      </div>
                      </div>
                  </li>
                  <li class="developement-toolkit toolkit virtualization">
                    <div class="toolkit-container">
                    <div class="text-center">
                        <img src="../assets/images/toolkit/vagrant.png" alt="" class="img-fluid">
                        <p>Vagrant</p>
                      </div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        <!-- Mobile Development Toolkit -->
        <div id="mob-development-toolkit"></div>
        <div class="container toolkit-section p-0 pt-7 mt-5" >
          <h2 class="mb-4">Mobile Development Toolkit</h2>
          <div class="controls mb-5">
              <div class="Innercontainer">
                  <div class=" d-block d-xl-flex justify-content-around text-center">
                      <button class="view-filter active mobile-all-tab" data-filter="all">All</button>
                      <button class="view-filter app-developement-tab" data-filter="tppm">App Developement</button>
                      <button class="view-filter tppm-tab" data-filter="tppm">Third Party Package Manager, Cocoapods</button>
                      <button class="view-filter bug-traking-tab" data-filter="Bug Tracking">Bug Tracking</button>
                      <button class="view-filter distribution-tab" data-filter="Distribution">Distribution</button>
                      <button class="view-filter backend-tab" data-filter="Backend">Backend</button>
                      <button class="view-filter local-database-tab" data-filter="Local Database">Local Database</button>
                      <button class="view-filter profiling-tools-tab" data-filter="Profiling tools">Profiling tools</button>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul class="mobile-developement-toolkit-wrap toolkit-wrap pt-7">
                <!-- 1. Developement tool -->
                <li class="mobile-developement-toolkit toolkit app-dev-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/android.png" alt="" class="img-fluid">
                      <p>Android SDK</p>
                    </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit app-dev-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Xcode.png" alt="" class="img-fluid">
                        <p>Xcode</p>
                      </div>
                  </div>
                </li>
                <!-- 2. Third Party Package Manager, Cocoapods -->
                <li class="mobile-developement-toolkit toolkit tppm">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/gradle.png" alt="" class="img-fluid">
                        <p>Gradle</p>
                      </div>
                  </div>
                </li>
                <!--3. Bug Tracking -->
                <li class="mobile-developement-toolkit toolkit bug-traking">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/jira.png" alt="" class="img-fluid">
                        <p>Jira</p>
                      </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit bug-traking">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/gitlab.png" alt="" class="img-fluid">
                        <p>Gitlab</p>
                      </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit bug-traking">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Phabricator.png" alt="" class="img-fluid">
                        <p>Phabricator</p>
                      </div>
                  </div>
                </li>
                <!-- 4. Distribution -->
                <li class="mobile-developement-toolkit toolkit distribution">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Play Store.png" alt="" class="img-fluid">
                        <p> Play Store</p>
                      </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit  distribution">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Apple Store.png" alt="" class="img-fluid">
                        <p>Apple Store</p>
                      </div>
                  </div>
                </li>
                <!-- 5. Backend -->
                <li class="mobile-developement-toolkit toolkit backend">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/REST and SOAP.png" alt="" class="img-fluid">
                        <p> Restful/SOAP</p>
                      </div>
                  </div>
                </li>
                <!-- 6. Local Database -->
                <li class="mobile-developement-toolkit toolkit local-database">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Sqlite.png" alt="" class="img-fluid">
                        <p>Sqlite</p>
                      </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit local-database">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Core Data.png " alt="" class="img-fluid">
                        <p>Core Data</p>
                      </div>
                  </div>
                </li>
                <!-- 7. Profiling tools -->
                <li class="mobile-developement-toolkit toolkit profiling-tools">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/androidstudio.png" alt="" class="img-fluid">
                        <p> Lint from Android Studio</p>
                        </div>
                  </div>
                </li>
                <li class="mobile-developement-toolkit toolkit profiling-tools">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Xcode.png" alt="" class="img-fluid">
                        <p>Instrument from Xcode</p>
                        </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Testing Toolkit -->
        <div id="testing-toolkit mb-5"></div>
        <div class="container toolkit-section p-0 pt-7 mt-5"  id="">
          <h2 class="mb-4">Testing Toolkit</h2>
          <div class="controls mb-5">
              <div class="Innercontainer">
                  <div class=" d-block d-xl-flex justify-content-around text-center">
                      <button class="view-filter active testing-all-tab" data-filter="all">All</button>
                      <button class="view-filter automation-tab" data-filter="Automation">Automation</button>
                      <button class="view-filter load-performance-tab" data-filter="Load/Performance">Load/Performance</button>
                      <button class="view-filter bug-traking-tool-tab" data-filter="Bug Tracking">Bug Tracking</button>
                      <button class="view-filter test-mgt-tab" data-filter="Test Management">Test Management</button>
                      <button class="view-filter repo-tab" data-filter="Repositories">Repositories</button>
                      <button class="view-filter others-tab" data-filter="Others">Others</button>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul class="testing-toolkit-wrap toolkit-wrap py-7 mb-5">
                <!-- 1. Automation Tools -->
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/SymbioTest.png" alt="" class="img-fluid">
                        <p>SymbioTest</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/appium.png" alt="" class="img-fluid">
                        <p>Appium</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/QTP.png" alt="" class="img-fluid">
                        <p>QTP</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Selenium.png" alt="" class="img-fluid">
                        <p>Selenium</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Coded UI.png" alt="" class="img-fluid">
                        <p>Coded UI</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/AutoIt.png" alt="" class="img-fluid">
                        <p>AutoIt</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/cucumber.png" alt="" class="img-fluid">
                        <p>Cucumber</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/jasmine.png" alt="" class="img-fluid">
                        <p>Jasmine</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/SpecFlow.png" alt="" class="img-fluid">
                        <p>SpecFlow</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/TestComplete.png" alt="" class="img-fluid">
                        <p>TestComplete</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Protractor.png" alt="" class="img-fluid">
                        <p>Protractor</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit automation-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Sikuli.png" alt="" class="img-fluid">
                        <p>Sikuli</p>
                      </div>
                  </div>
                </li>
                <!-- 2. Load/Performance Tool -->
                <li class="testing-toolkit toolkit load-performance">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/jmeter.png" alt="" class="img-fluid">
                        <p>Jmeter/Blazemeter</p>
                        </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit load-performance">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Load Runner.png" alt="" class="img-fluid">
                        <p>Load Runner</p>
                      </div>
                  </div>
                </li>
                <!--3. Bug Tracking Tools -->
                <li class="testing-toolkit toolkit bug-traking-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/jira.png" alt="" class="img-fluid">
                        <p>Jira</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit bug-traking-tool">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/BugZilla.png" alt="" class="img-fluid">
                        <p>BugZilla</p>
                      </div>
                  </div>
                </li>
                <!--4. Test Management Tools -->
                <li class="testing-toolkit toolkit test-mangement">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/jira.png" alt="" class="img-fluid">
                        <p>Jira</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit  test-mangement">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Quality Center.png" alt="" class="img-fluid">
                        <p>Quality Center</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit test-mangement">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/MS Test Manager.png" alt="" class="img-fluid">
                        <p>MS Test Manager</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit  test-mangement">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/TestComplete.png" alt="" class="img-fluid">
                        <p>TestRail</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit test-mangement">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/XStudio.jpeg" alt="" class="img-fluid">
                        <p>XStudio</p>
                      </div>
                  </div>
                </li>
                <!-- 5. Repositories -->
                <li class="testing-toolkit toolkit repo">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/git.png" alt="" class="img-fluid">
                        <p>GIT</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit repo">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/svn.png" alt="" class="img-fluid">
                        <p>SVN</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit repo">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/tfs.png" alt="" class="img-fluid">
                        <p>TFS</p>
                      </div>
                  </div>
                </li>
                <!-- 5. Others -->
                <li class="testing-toolkit toolkit others">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Maven.png" alt="" class="img-fluid">
                        <p>Maven</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit others">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/gradle.png" alt="" class="img-fluid">
                        <p>Gradle</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit others">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/TestNG.png" alt="" class="img-fluid">
                        <p>TestNG</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit others">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/report.png" alt="" class="img-fluid">
                        <p>ReportNG</p>
                      </div>
                  </div>
                </li>
                <li class="testing-toolkit toolkit others">
                  <div class="toolkit-container">
                    <div class="text-center">
                      <img src="../assets/images/toolkit/Log4j.png" alt="" class="img-fluid">
                        <p>Log4j</p>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</section>
<?php include('../common/enquiry-now.php') ?>
<?php include('../common/footer.php') ?>
    
    
    <script src="../assets/js/jquery.min.js"></script>
    <!-- bootstrap js file -->
    <script src="../assets/bootstrap/bootstrap.min.js"></script>
    <script src="../assets/bootstrap/popper.min.js"></script>

    <script src="../assets/js/TweenMax.min.js"></script>
    <script src="../assets/js/TimelineMax.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <script>
      $(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function() {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
        });
    });

  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();

      // Show/hide menu on scroll
      //if (scrollDistance >= 850) {
      //		$('nav').fadeIn("fast");
      //} else {
      //		$('nav').fadeOut("fast");
      //}
    
      // Assign active class to nav links while scolling
      $('.toolkit-section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navigation a.active').removeClass('active');
              $('.navigation a').eq(i).addClass('active');
          }
      });
  }).scroll();

      (function() {
    'use strict';
    $.MixItUp = function() {
        var self = this;
        self._execAction('_constructor', 0);
        $.extend(self, {
            controls: {
                enable: true,
                live: false,
                toggleFilterButtons: false,
                toggleLogic: 'or',
                activeClass: 'active'
            }
        });
        self._execAction('_constructor', 1);
    };
   }
)(jQuery);
$(document).ready(function () {
  // Developement toolkit
    $(".controls button").on("click", function () {
          $(".controls button").removeClass("active");
          $(this).addClass("active");
    });
    $(".ide-editors-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.ide-editor').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".developement-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.developement').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".containers-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.containers').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".cloud-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.cloud').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".restclient-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.restclient').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".version-control-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.version-control').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".version-cont-server-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.version-control-server').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".ci-cd-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.ci-cd').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".misc-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.misc').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".virtualization-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.virtualization').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".all-developement-tab").on("click", function () {
          $('.developement-toolkit').removeClass("animate animateTwo").addClass('animate').show();
    });
    
    // mobile development toolkit
    $(".app-developement-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.app-dev-tool').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".tppm-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.tppm').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".bug-traking-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.bug-traking').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".distribution-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.distribution').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".backend-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.backend').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".local-database-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.local-database').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".profiling-tools-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.profiling-tools').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".mobile-all-tab").on("click", function () {
          $('.mobile-developement-toolkit').removeClass("animate animateTwo").addClass('animate').show();
    });
    // Testing toolkit
    $(".automation-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.automation-tool').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".load-performance-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.load-performance').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".bug-traking-tool-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.bug-traking-tool').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".test-mgt-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.test-mangement').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".repo-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.repo').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".others-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animateTwo').hide();
          $('.others').removeClass("animate animateTwo").addClass('animate').show();
    });
    $(".testing-all-tab").on("click", function () {
          $('.testing-toolkit').removeClass("animate animateTwo").addClass('animate').show();
    });
});
    </script>
  </body>
</html>