console.log( 'js' );

$(document).ready( onReady );

function onReady() {
    $('#requestButton').on('click', clickFunction )
}

function clickFunction() {
    $.ajax ({
        method: 'GET',
        url: ('/kittens'),
        success: function(respond) {
            console.log('back from the server with' + respond)
        }
    })
}
