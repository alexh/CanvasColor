function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var color = 0;

$('document').ready(function(){
	console.log('started');

	for(var i = 0; i < 50; i++){
		var col = $('<div class="row"></div>');
		for(var j = 0; j < 50; j++){
			var cur = $('<div class="pixel"></div>');
			cur.css('border-top-width', '0px');
			if (i == 49){
				cur.css('border-bottom-width', '1px');
			}
			if (i = 0){
				cur.css('border-top-width', '1px');
			}
			col.append(cur);
		}
		$('.canvas').append(col);
	}


	$('.pixel').click(function (){
		console.log("clicked");
		$(this).val(color);
		$(this).css('background-color', color);
	});

	for(var i = 0; i< 16; i++){
		var tool = $('<div id="tool'+i+'"class="tool"></div>');
		tool.val(getRandomColor());
		tool.css('background-color', tool.val());
		$('.toolbar').append(tool);
		$('#tool'+ i).click(function(){
			$(this).parent().find('.tool').removeClass('selected');
			$(this).addClass('selected');
			color = $(this).val();
			console.log(color);

		});
	}
	$('.tool').first().addClass('selected');
	color = $('.tool.selected').val();
});