chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    switch(request.action){
        case 'NEXT-MK':
            //NEXT_MK
            $('#play-next').click();
            break;
        case 'PREV-MK':
            //PREV_MK
            $('#play-prev').click();
            break;
        case 'PLAY-PAUSE-MK':
            //PLAY_MK
            $('#play-pause').click();
            break;
    }
});