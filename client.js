$(function(){
    $(document).keyup(function(e) {
            if (e.which == 27) {
              $('#liveToast').toast('hide');
              
           }
       });
        
    $('.code').on('click', function(e) {

        const product = $(this).data('name');
        const code = $(this).data('code');
        $('#name').html(product);
        $('#code').html(code);

        var toast = new Audio('toast.wav');
        e.preventDefault();
                // first pause the audio (in case it is still playing)
                toast.pause();
                // reset the audio
                toast.currentTime = 0;
                // play audio
                toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
       

    });
});
