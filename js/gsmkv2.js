var mkListener = function(e){
	chrome.extension.sendMessage({ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,keyCode:e.keyCode},function(r){
		switch(r.keyCode){
			case MKVAL.NEXT:
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs){
						if(document.getElementById('player_next'))document.getElementById('player_next').click();
						else document.getElementById('play-next').click();
					}else chrome.extension.sendMessage({cmd:"next"});
				});
				break;
			case MKVAL.PREV:
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs){
						if(document.getElementById('player_previous'))document.getElementById('player_previous').click();
						else document.getElementById('play-prev').click();
					}else chrome.extension.sendMessage({cmd:"prev"});
				});
				break;
			case MKVAL.STOP:
				break;
			case MKVAL.PLAY:
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs){
						if(document.getElementById('player_play_pause'))document.getElementById('player_play_pause').click();
						else document.getElementById('play-pause').click();
					}else chrome.extension.sendMessage({cmd:"play_pause"});
				});
				break;
		}
	})
}
$(window).keyup(function(e){mkListener(e)});
chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	switch(request){
		case 'next':{
			if(document.getElementById('player_next'))document.getElementById('player_next').click();
			else document.getElementById('play-next').click();
			break;
		}
		case 'prev':{
			if(document.getElementById('player_previous'))document.getElementById('player_previous').click();
			else document.getElementById('play-prev').click();
			break;
		}
		case 'play_pause':{
			if(document.getElementById('player_play_pause'))document.getElementById('player_play_pause').click();
			else document.getElementById('play-pause').click();
			break;
		}
		default:;
	}
});