<?php require("../../includes/configure.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

  <title>Music Makers - Thrills</title>
  <meta name="keywords" content="Thrills, music, indie, Seek the thrill, reklammusik, Felix Martinz, Joel Hilme, kompositör, producer, producent" />
  <meta name="description" content="Music Makers - Joel Hilme and Felix Martinz" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" type="text/css" href="../../<?php echo STYLESHEET ?>" />
  <link href="favico.ico" rel="shortcut icon" type="image/x-icon" />

  </head>
  <body>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-41505850-1', 'musicmakers.se');
      ga('send', 'pageview');

    </script>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    <div id="main_wrapper">

  	<div id="logo">
  	<!-- eof logo -->
  	</div>

  	<div id="main_content_wrapper">
  		<div id="menu">
  	<input type="button" value="&lt;- Go Back" onclick="history.back(-1)" class="back_button" />
  		<!-- eof menu -->
  		</div>


  		<div id="main_content_video">

  			<!-- "Video For Everybody" http://camendesign.com/code/video_for_everybody -->
  			<video controls="controls" poster="gooh_poster.jpg" width="480" height="270">
  			<source src="gooh.mp4" type="video/mp4"></source>
  			<object type="application/x-shockwave-flash" data="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" width="480" height="270">
  				<param name="movie" value="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" />
  				<param name="allowFullScreen" value="true" />
  				<param name="wmode" value="transparent" />
  				<param name="flashVars" value="config={'playlist':['gooh_poster.jpg',{'url':'gooh.mp4','autoPlay':false}]}" />
  				<img alt="Thrills" src="gooh_poster.jpg" width="640" height="360" title="No video playback capabilities" />
  				</object>
  			</video>
  			<span class="right"><div class='fb-like' data-send='false' data-layout='box_count' data-width='5' data-height='5' data-show-faces='false'></div></span>
  			<p style="margin-bottom:-16px; margin-top:0px;"><span class="filmtitle_font">Gooh!</span></p>
  			<p style="margin-bottom:-10px;"><span class="filminfo_font">Director: Magnus Härdner/B-Reel Films</span></p>
  			<p style="margin-bottom:-10px;"><span class="filmtext_font">Gooh likes Cornelis. We like Cornelis. So we made a Cornelis-like, 70s-oozing friendly tune with our best 70s nylon guitar.</span></p>


  						<div id="footer">
  						<?php echo FOOTER ?>
  						<!-- eof footer -->
  						</div>

  					<!-- eof main_content-->
  					</div>

  					<div class="clear"></div>

  				<!-- eof main_content_wrapper -->
  				</div>
  			<!-- eof main wrapper -->
  	</div>
	</body>
</html>
