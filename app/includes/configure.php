<?php

// Definera http
define('HTTP_SERVER', 'http://www.wearthemusicmakers.se/musicmakers');

define('STYLESHEET', 'stylesheet/stylesheet_gold.css');


// Definera undersidor
define('DIR_START', HTTP_SERVER . '');
define('DIR_ABOUT', HTTP_SERVER . 'samples.php');
define('DIR_SAMPLES', HTTP_SERVER . 'about.php');
define('DIR_CONTACT', HTTP_SERVER . 'contact.php');
define('DIR_FTP', HTTP_SERVER . 'ftp.php');

// Footer

define('FOOTER', '');

// Definera menyer

define('MENU_START', '
		<li><a href="/"><span id="menu_active">ARCHIVE</span>&nbsp;&nbsp;</a></li>
		<li><a href="samples.php">SAMPLES&nbsp;&nbsp;</a></li>
		<li><a href="about.php">ABOUT&nbsp;&nbsp;</a></li>
		<li><a href="contact.php">CONTACT&nbsp;&nbsp;</a></li>
		<li><a href="ftp.php">FTP</a></li>
');

define('MENU_ABOUT', '
		<li><a href="/">ARCHIVE&nbsp;&nbsp;</a></li>
		<li><a href="samples.php">SAMPLES&nbsp;&nbsp;</a></li>
		<li><a href="about.php"><span id="menu_active">ABOUT</span>&nbsp;&nbsp;</a></li>
		<li><a href="contact.php">CONTACT&nbsp;&nbsp;</a></li>
		<li><a href="ftp.php">FTP</a></li>
');

define('MENU_SAMPLES', '
		<li><a href="/">ARCHIVE&nbsp;&nbsp;</a></li>
		<li><a href="samples.php"><span id="menu_active">SAMPLES</span>&nbsp;&nbsp;</a></li>
		<li><a href="about.php">ABOUT&nbsp;&nbsp;</a></li>
		<li><a href="contact.php">CONTACT&nbsp;&nbsp;</a></li>
		<li><a href="ftp.php">FTP</a></li>
');

define('MENU_CONTACT', '
		<li><a href="/">ARCHIVE&nbsp;&nbsp;</a></li>
		<li><a href="samples.php">SAMPLES&nbsp;&nbsp;</a></li>
		<li><a href="about.php">ABOUT&nbsp;&nbsp;</a></li>
		<li><a href="contact.php"><span id="menu_active">CONTACT</span>&nbsp;&nbsp;</a></li>
		<li><a href="ftp.php">FTP</a></li>
');

define('MENU_FTP', '
		<li><a href="/">ARCHIVE&nbsp;&nbsp;</a></li>
		<li><a href="samples.php">SAMPLES&nbsp;&nbsp;</a></li>
		<li><a href="about.php">ABOUT&nbsp;&nbsp;</a></li>
		<li><a href="contact.php">CONTACT&nbsp;&nbsp;</a></li>
		<li><a href="ftp.php"><span id="menu_active">FTP</span></a></li>
');
?>
