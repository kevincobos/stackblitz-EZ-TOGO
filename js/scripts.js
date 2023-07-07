$(function(){
    $('#reservetableButton').on('click', function() {
        $('#reservetableModal').modal('show');
    });
    
    $('#loginButton').on('click', function() {
        $('#loginModal').modal('show');
    });

    /* calling a modal from a button    
    $('#1').on('click', function() {
        $('#foodItemSelected').modal('show');
    });
    */

    // creating a funtion to know which button was clicked
    // and then change the modal title to the name of the button
    $(".btn").on('click', function(){
        var fired_button = $(this).val();
        //alert(fired_button);
        $('#foodItemSelected').find('.modal-title').text(fired_button);
    });
    
    //This will
    $('#showFoodItemSelectedModal').on('show.bs.modal', function(e) {
        //var modal = $(popupTemplate);
        //modal.find('.modal-title').text('HELLO');
        //modal.modal();

        //get data-id attribute of the clicked element
        var modalTitle = $(e.relatedTarget).data('itemFood1');
    
        //populate the textbox
        //var modalTitle = $(e.currentTarget).find('input[name="bookId"]').val(bookId);
        //$(e.currentTarget).find('#bookId');
        //$('#showFoodItemSelectedModal').al( bookId ).text( bookId );
        //$('#showFoodItemSelectedModal').find('.modal-title').text(modalTitle);

    });
    

    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").on('click', function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }

        $('[data-toggle="tooltip"]').tooltip();
    });
});