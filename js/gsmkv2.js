var mkListener = function(e){
	chrome.extension.sendMessage({ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,keyCode:e.keyCode},function(r){
		switch(r.keyCode){
			case 176:
				//NEXT_MK
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs)$('#player_next').click();
					else chrome.extension.sendMessage({cmd:"next"});
				});
				break;
			case 177:
				//PREV_MK
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs)$('#player_previous').click();
					else chrome.extension.sendMessage({cmd:"prev"});
				});
				break;
			case 178:
				//STOP_MK
				break;
			case 179:
				//PLAY_MK
				chrome.extension.sendMessage({type:"tabid"},function(j){
					if(j.isgs)$('#player_play_pause').click();
					else chrome.extension.sendMessage({cmd:"play_pause"});
				});
				break;
		}
	})
}
$(window).keyup(function(e){mkListener(e)});
chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	switch(request){
		case 'next':$('#player_next').click();
		break;
		case 'prev':$('#player_previous').click();
		break;
		case 'play_pause':$('#player_play_pause').click();
		break;
		default:;
	}
});