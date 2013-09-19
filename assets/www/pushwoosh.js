


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>phonegap-cordova-push-notifications/PGB Push Plugin/pushwoosh.js at master · shaders/phonegap-cordova-push-notifications</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe123-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="970CBA85:6F4B:1208F89:523AB9C3" name="octolytics-dimension-request_id" /><meta content="5214903" name="octolytics-actor-id" /><meta content="aberti77" name="octolytics-actor-login" /><meta content="5865314c4363c83e2e5112f382026c4b62debe9ec03b526682ca049b4cf46d9b" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="aPd1iCgMVrCZa2GXJKQrqxIwT09cPc1pZFhuQmvy+BI=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-a1b8d7acf8e42ee53257e820a8560262dda06210.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-acae6310771c20dbc51ca69f28f11995324fdbf2.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-833cfa634cf92fc04a73184bfc27838b36a5158e.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-8ac68f6670edb77b7574b97f64f7243f65ccab5a.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="f12d348e606cd1568d2d4f23404c9631">

        <link data-pjax-transient rel='permalink' href='/shaders/phonegap-cordova-push-notifications/blob/610cfe7ac05a1a3176dd8669262ca7c621369e8c/PGB%20Push%20Plugin/pushwoosh.js'>
  <meta property="og:title" content="phonegap-cordova-push-notifications"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/shaders/phonegap-cordova-push-notifications"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="phonegap-cordova-push-notifications - Phonegap Cordova 2.8 Pushwoosh Push Notifications Plugin"/>

  <meta name="description" content="phonegap-cordova-push-notifications - Phonegap Cordova 2.8 Pushwoosh Push Notifications Plugin" />

  <meta content="1770540" name="octolytics-dimension-user_id" /><meta content="shaders" name="octolytics-dimension-user_login" /><meta content="4422136" name="octolytics-dimension-repository_id" /><meta content="shaders/phonegap-cordova-push-notifications" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4422136" name="octolytics-dimension-repository_network_root_id" /><meta content="shaders/phonegap-cordova-push-notifications" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/shaders/phonegap-cordova-push-notifications/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-cordova-push-notifications:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>    <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="aberti77"
      data-repo="shaders/phonegap-cordova-push-notifications"
      data-branch="master"
      data-sha="395ec38cbebf27ba016d16f976994ec0f9f46111"
  >

    <input type="hidden" name="nwo" value="shaders/phonegap-cordova-push-notifications" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/aberti77" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/a73d132f8d88cca06fd0096084e702a5?d=https%3A%2F%2Fidenticons.github.com%2F53b321fad42ccd6d04c4dabe3cc85ab2.png&amp;s=140" width="20" /> aberti77
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="shaders/phonegap-cordova-push-notifications">This repository</span>
    </li>
    <li>
      <a href="/shaders/phonegap-cordova-push-notifications/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="aPd1iCgMVrCZa2GXJKQrqxIwT09cPc1pZFhuQmvy+BI=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4422136" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/shaders/phonegap-cordova-push-notifications/watchers">
          29
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/shaders/phonegap-cordova-push-notifications/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/shaders/phonegap-cordova-push-notifications/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/shaders/phonegap-cordova-push-notifications/stargazers">90</a>
</div>

  </li>


        <li>
          <a href="/shaders/phonegap-cordova-push-notifications/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/shaders/phonegap-cordova-push-notifications/network" class="social-count">142</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/shaders" class="url fn" itemprop="url" rel="author"><span itemprop="title">shaders</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/shaders/phonegap-cordova-push-notifications" class="js-current-repository js-repo-home-link">phonegap-cordova-push-notifications</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/shaders/phonegap-cordova-push-notifications" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /shaders/phonegap-cordova-push-notifications">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/shaders/phonegap-cordova-push-notifications/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /shaders/phonegap-cordova-push-notifications/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>21</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/shaders/phonegap-cordova-push-notifications/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /shaders/phonegap-cordova-push-notifications/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/shaders/phonegap-cordova-push-notifications/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /shaders/phonegap-cordova-push-notifications/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/shaders/phonegap-cordova-push-notifications/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /shaders/phonegap-cordova-push-notifications/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/shaders/phonegap-cordova-push-notifications/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /shaders/phonegap-cordova-push-notifications/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/shaders/phonegap-cordova-push-notifications/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /shaders/phonegap-cordova-push-notifications/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/shaders/phonegap-cordova-push-notifications.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/shaders/phonegap-cordova-push-notifications.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:shaders/phonegap-cordova-push-notifications.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:shaders/phonegap-cordova-push-notifications.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/shaders/phonegap-cordova-push-notifications" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/shaders/phonegap-cordova-push-notifications" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/shaders/phonegap-cordova-push-notifications" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/shaders/phonegap-cordova-push-notifications/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e5e868a59004b0139c7bc7cad8614b29 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:e5e868a59004b0139c7bc7cad8614b29 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/shaders/phonegap-cordova-push-notifications/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/blob/master/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/tree/2.0/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.0" data-skip-pjax="true" rel="nofollow" title="2.0">2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/tree/1.0.3/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.3" data-skip-pjax="true" rel="nofollow" title="1.0.3">1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/tree/1.0.2/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.2" data-skip-pjax="true" rel="nofollow" title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/tree/1.0.1/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.1" data-skip-pjax="true" rel="nofollow" title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/shaders/phonegap-cordova-push-notifications/tree/1.0.0/PGB%20Push%20Plugin/pushwoosh.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.0" data-skip-pjax="true" rel="nofollow" title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/shaders/phonegap-cordova-push-notifications" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">phonegap-cordova-push-notifications</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/shaders/phonegap-cordova-push-notifications/tree/master/PGB%20Push%20Plugin" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">PGB Push Plugin</span></a></span><span class="separator"> / </span><strong class="final-path">pushwoosh.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="PGB Push Plugin/pushwoosh.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/649e23ccbb2082b3722b5a7fd1d1cce0?d=https%3A%2F%2Fidenticons.github.com%2F878811c67733f742081ae237ae697fbc.png&amp;s=140" width="24" />
    <span class="author"><a href="/shaders" rel="author">shaders</a></span>
    <time class="js-relative-date" datetime="2013-04-14T01:43:02-07:00" title="2013-04-14 01:43:02">April 14, 2013</time>
    <div class="commit-title">
        <a href="/shaders/phonegap-cordova-push-notifications/commit/d901ecf24e411c9babd490ef1b67d4bdb0180054" class="message" data-pjax="true" title="PhoneGap Build Push Plugin support">PhoneGap Build Push Plugin support</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/649e23ccbb2082b3722b5a7fd1d1cce0?d=https%3A%2F%2Fidenticons.github.com%2F878811c67733f742081ae237ae697fbc.png&amp;s=140" width="24" />
          <a href="/shaders">shaders</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>138 lines (113 sloc)</span>
        <span>3.332 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/shaders/phonegap-cordova-push-notifications/edit/master/PGB%20Push%20Plugin/pushwoosh.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/shaders/phonegap-cordova-push-notifications/raw/master/PGB%20Push%20Plugin/pushwoosh.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/shaders/phonegap-cordova-push-notifications/blame/master/PGB%20Push%20Plugin/pushwoosh.js" class="button minibutton ">Blame</a>
          <a href="/shaders/phonegap-cordova-push-notifications/commits/master/PGB%20Push%20Plugin/pushwoosh.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/shaders/phonegap-cordova-push-notifications/delete/master/PGB%20Push%20Plugin/pushwoosh.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">PushWoosh</span> <span class="o">=</span> <span class="p">{</span>	</div><div class='line' id='LC2'>	<span class="nx">getHWId</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3'>		<span class="k">return</span> <span class="nx">device</span><span class="p">.</span><span class="nx">uuid</span><span class="p">;</span></div><div class='line' id='LC4'>	<span class="p">},</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="nx">register</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC8'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;registerDevice&#39;</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>		<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTimezoneOffset</span><span class="p">()</span> <span class="o">*</span> <span class="mi">60</span><span class="p">;</span>	<span class="c1">//in seconds</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>		<span class="kd">var</span> <span class="nx">language</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">language</span><span class="p">;</span></div><div class='line' id='LC13'>		<span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="s1">&#39;en&#39;</span><span class="p">;</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">language</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lang</span> <span class="o">=</span> <span class="nx">language</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">);</span> </div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="kd">var</span> <span class="nx">deviceType</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC19'>		<span class="k">if</span> <span class="p">(</span><span class="nx">device</span><span class="p">.</span><span class="nx">platform</span> <span class="o">==</span> <span class="s1">&#39;android&#39;</span> <span class="o">||</span> <span class="nx">device</span><span class="p">.</span><span class="nx">platform</span> <span class="o">==</span> <span class="s1">&#39;Android&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC20'>			<span class="nx">deviceType</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="p">}</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC24'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC25'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC26'>					<span class="nx">push_token</span> <span class="o">:</span> <span class="nx">token</span><span class="p">,</span></div><div class='line' id='LC27'>					<span class="nx">language</span> <span class="o">:</span> <span class="nx">lang</span><span class="p">,</span></div><div class='line' id='LC28'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">(),</span></div><div class='line' id='LC29'>					<span class="nx">timezone</span> <span class="o">:</span> <span class="nx">offset</span><span class="p">,</span></div><div class='line' id='LC30'>					<span class="nx">device_type</span> <span class="o">:</span> <span class="nx">deviceType</span></div><div class='line' id='LC31'>				<span class="p">}</span></div><div class='line' id='LC32'>			<span class="p">};</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC36'>	<span class="p">},</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>	<span class="nx">unregister</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC40'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;unregisterDevice&#39;</span><span class="p">;</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC43'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC44'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC45'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">()</span></div><div class='line' id='LC46'>				<span class="p">}</span></div><div class='line' id='LC47'>			<span class="p">};</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC50'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC51'>	<span class="p">},</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>	<span class="nx">sendBadge</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">badgeNumber</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC55'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;setBadge&#39;</span><span class="p">;</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC59'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC60'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">(),</span></div><div class='line' id='LC61'>					<span class="nx">badge</span><span class="o">:</span> <span class="nx">badgeNumber</span></div><div class='line' id='LC62'>				<span class="p">}</span></div><div class='line' id='LC63'>			<span class="p">};</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC66'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC67'>	<span class="p">},</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>	<span class="nx">sendAppOpen</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC71'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;applicationOpen&#39;</span><span class="p">;</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC74'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC75'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC76'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">()</span></div><div class='line' id='LC77'>				<span class="p">}</span></div><div class='line' id='LC78'>			<span class="p">};</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC81'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC82'>	<span class="p">},</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>	<span class="nx">sendPushStat</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hashValue</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC86'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;pushStat&#39;</span><span class="p">;</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC89'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC90'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC91'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">(),</span></div><div class='line' id='LC92'>					<span class="nx">hash</span><span class="o">:</span> <span class="nx">hashValue</span></div><div class='line' id='LC93'>				<span class="p">}</span></div><div class='line' id='LC94'>			<span class="p">};</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC97'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC98'>	<span class="p">},</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>	<span class="nx">setTags</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tagsJsonObject</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>		<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC102'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">+</span> <span class="s1">&#39;setTags&#39;</span><span class="p">;</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>		<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC105'>				<span class="nx">request</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC106'>					<span class="nx">application</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">appCode</span><span class="p">,</span></div><div class='line' id='LC107'>					<span class="nx">hwid</span> <span class="o">:</span> <span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">getHWId</span><span class="p">(),</span></div><div class='line' id='LC108'>					<span class="nx">tags</span><span class="o">:</span> <span class="nx">tagsJsonObject</span></div><div class='line' id='LC109'>				<span class="p">}</span></div><div class='line' id='LC110'>			<span class="p">};</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>		<span class="nx">payload</span> <span class="o">=</span> <span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC113'>		<span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">);</span></div><div class='line' id='LC114'>	<span class="p">},</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>	<span class="nx">helper</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">lambda</span><span class="p">,</span> <span class="nx">lambdaerror</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>		<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC118'>		<span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC119'>			<span class="k">if</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//Request complete !!</span></div><div class='line' id='LC120'>				<span class="k">if</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>					<span class="k">if</span><span class="p">(</span><span class="nx">lambda</span><span class="p">)</span> <span class="nx">lambda</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC122'>				<span class="p">}</span></div><div class='line' id='LC123'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>					<span class="k">if</span><span class="p">(</span><span class="nx">lambdaerror</span><span class="p">)</span> <span class="nx">lambdaerror</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC125'>				<span class="p">}</span></div><div class='line' id='LC126'>			<span class="p">}</span></div><div class='line' id='LC127'>		<span class="p">};</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>		<span class="c1">// open the client</span></div><div class='line' id='LC130'>		<span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC131'>		<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">,</span> <span class="s1">&#39;application/json; charset=utf-8&#39;</span><span class="p">);</span></div><div class='line' id='LC132'>		<span class="c1">// send the data</span></div><div class='line' id='LC133'>		<span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">params</span><span class="p">);</span></div><div class='line' id='LC134'>	<span class="p">}</span></div><div class='line' id='LC135'><span class="p">};</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'><span class="nx">PushWoosh</span><span class="p">.</span><span class="nx">baseurl</span> <span class="o">=</span> <span class="s1">&#39;https://cp.pushwoosh.com/json/1.3/&#39;</span><span class="p">;</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.03190s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/shaders/phonegap-cordova-push-notifications/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

