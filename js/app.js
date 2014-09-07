chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new Event('click');
    console.log('Command:', request.action);
    switch(request.action){
        case 'NEXT-MK':
            //NEXT_MK
            document.getElementById('play-next').dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            //PREV_MK
            document.getElementById('play-prev').dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            //PLAY_MK
            document.getElementById('play-pause').dispatchEvent(click_event);
            break;
        case 'NP-FAV':
            //NP_FAV
            document.getElementById('np-fav').click(); // dispatchEvent doesn't work!
            break;
        case 'NP-ADD':
            //NP_ADD
            document.getElementById('np-add').click(); // dispatchEvent doesn't work!
            break;
    }
});
