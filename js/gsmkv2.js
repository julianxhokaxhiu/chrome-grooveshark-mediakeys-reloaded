var mkListener = function(e){
	chrome.extension.sendRequest({ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,keyCode:e.keyCode},function(r){
		switch(r.keyCode){
			case 176:
				//NEXT_MK
				chrome.extension.sendRequest({type:"tabid"},function(j){
					if(j.isgs)$('#player_next').click();
					else chrome.extension.sendRequest({cmd:"next"});
				});
				break;
			case 177:
				//PREV_MK
				chrome.extension.sendRequest({type:"tabid"},function(j){
					if(j.isgs)$('#player_previous').click();
					else chrome.extension.sendRequest({cmd:"prev"});
				});
				break;
			case 178:
				//STOP_MK
				break;
			case 179:
				//PLAY_MK
				chrome.extension.sendRequest({type:"tabid"},function(j){
					if(j.isgs)$('#player_play_pause').click();
					else chrome.extension.sendRequest({cmd:"play_pause"});
				});
				break;
		}
	})
}
$(window).keyup(function(e){mkListener(e)});
chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
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