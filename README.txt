Equalheight – простой аналог популярных плагинов для выравнивания блоков по высоте.

ОПИСАНИЕ:
Скрипт для выравнивания блоков по высоте.
Скрипт проходит группу элементов, которые нужно выровнять, выбирает самый высокий и присваивает его высоту всем остальным элементам из этой группы.

ПОДКЛЮЧЕНИЕ:
<script src="jquery-1.11.3.js"></script>
<script src="Equalheight.js"></script>

<script>
	$( document ).ready( function() {

		var element = 'div'; // Элементы, которым необходимо присвоить одинаковую высоту.

		getMaxHeight( element );

		$( window ).resize( function(){
			getMaxHeight( element );
		} );
		
	} );
</script>
