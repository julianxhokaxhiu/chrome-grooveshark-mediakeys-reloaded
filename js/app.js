chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    switch(request.action){
        case 'NEXT-MK':
            document.getElementById('play-next').dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            document.getElementById('play-prev').dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            document.getElementById('play-pause').dispatchEvent(click_event);
            break;
    }
});