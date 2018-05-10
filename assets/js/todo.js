// When an item on the to-do list is clicked
// we cross it off and grey it out.
// This is toggleable
$('ul').on('click', 'li', function(){
    $(this).toggleClass("done");
});

// Remove items from the to-do list
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add items to the to-do list
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
        todoText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoText + "</li>");
    }
});

$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle(600);
});
