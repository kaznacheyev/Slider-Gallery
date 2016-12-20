$(document).ready(function() {
var $li = $('.img-list').find('> li'), // находим все li из списка img-list
		$links = $li.find('> a'), // находим все ссылки в li
		$lightbox = $('.lightbox'), // lightbox для больших картинок
		$overlay = $('.overlay'), // фон для lightbox
		$prev = $('.prev'), // навигация
		$next = $('.next'), // навигация
		liIndex, // для порядка нумерации картинки
		targetImg; // для открытия нужной картинки

		function replaceImg(src) {
	$lightbox.find('img').attr('src', src); // функция для замены атрибутов src на другой 
}

function getHref(index) {
	return $li.eq(index).find('> a').attr('href'); // функция для возвращения href, в параметре передаем index
}

$links.click(function(e) {
	e.preventDefault(); // функция для открытия lightbox, вместо картинки(отменяет стандартные действия браузера)
	liIndex = $(this).parent().index(); // выбираем ссылку по которой кликаем и сохраняем значение index
	targetImg = $(this).attr('href'); // получаем картинку ссылки по которой кликаем
	replaceImg(targetImg); // замена маленькой картинки на большую
	$lightbox.fadeIn();
});

$overlay.click(function() {
	$lightbox.fadeOut(); // функция для закрытия картинки, кликая на любую область вне картинки
});

$next.click(function() {
	if ((liIndex + 1) < $li.length) { // сравниваем порядковый номер с общим кол-вом элементов в массиве
		targetImg = getHref(liIndex + 1); // следующая картинка
		liIndex++;
	} else { // если картинка последняя, переходим к начальной
		targetImg = getHref(0); // первая картинка
		liIndex = 0;
	}
	replaceImg(targetImg); // замена маленькой картинки на большую
});

$prev.click(function() {
	if (liIndex > 0) {		
		targetImg = getHref(liIndex - 1); // предыдущая картинка
		liIndex--;
	} else {
		targetImg = getHref($li.length - 1); // последняя картинка
		liIndex = $li.length - 1;
	}
	replaceImg(targetImg); // замена маленькой картинки на большую
});

});