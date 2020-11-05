jQuery('document').ready(function() {

	var download, language, home, news, oldversion, downloadbutton, info, lang, lang2;

	lang2 = jQuery('#buttonLang').html()
	
	if (lang2 == 'ENG'){
		language = 'ru'
	}


	langR = function(){
		if (lang2 == 'ENG'){
			language = 'en'
			download = "Download"
			home = "Home"
			news = "News"
			oldversion = "Old versions"
			downloadbutton = "Download a game"
			info = "PyPong - Nice interesting game. Play, <br> collect points, compete with your friends! <br><br>Move the mouse to interact with the paddle, <br>after the ball touches the top of the screen, <br>one point is added to the player, after the ball touches <br>the bottom of the screen loses life, only 3 lives."
			jQuery('#buttonLang').html("");
			jQuery('#Download').html(download);
			jQuery('#home').html(home);
			jQuery('#News').html(news);
			jQuery('#OldVersion').html(oldversion);
			jQuery('#DownloadButton').html(downloadbutton);
			jQuery('#info').html(info);
		}
	}

	if (language == 'ru'){
		jQuery('#buttonLang').click(langR);
	}

});