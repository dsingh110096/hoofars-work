/**
 * Created by ASHUTOSH on 07-Oct-16.
 */

$(document).ready(function(){

    $("#artist-next").click(function(){
        if ($('#musician').is(':checked') && $('#dancer').is(':checked'))       
        {
            $('#artistmodal').modal('hide');
            $('#music-details').modal('show');
            $('#dance-details').modal('show');
        }
		
		
		else if ($('#model').is(':checked') && $('#musician').is(':checked'))       
        {
            $('#artistmodal').modal('hide');
            $('#music-details').modal('show');
			$('#model-details').modal('show');
			
        }
		
		
		
		else if($('#model').is(':checked') && $('#dancer').is(':checked'))   
        {
            $('#artistmodal').modal('hide');
            $('#model-details').modal('show');
            $('#dance-details').modal('show');
        }
		
		else if($('#all').is(':checked'))
		{
			$('#artistmodal').modal('hide');
            $('#model-details').modal('show');
            $('#dance-details').modal('show');
			$('#music-details').modal('show');
			
			
		}
		
		
		
		
		
		
        else if ($('#musician').is(':checked'))
        {
            $('#artistmodal').modal('hide');
            $('#music-details').modal('show');
        }
        else if ($('#dancer').is(':checked'))
        {
            $('#artistmodal').modal('hide');
            $('#dance-details').modal('show');
        }
        else if ($('#model').is(':checked'))
        {
            $('#artistmodal').modal('hide');
            $('#model-details').modal('show');
        }
    });
    
    $(".dropdown-menu li a").click(function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });


});
