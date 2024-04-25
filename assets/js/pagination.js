var items = $(".card-main");
var numItems = items.length;
var perPage = 4;

items.slice(perPage).hide();

$("#pagination-container").pagination({
	items: numItems,
	itemsOnPage: perPage,
	prevText: "&laquo;",
	nextText: "&raquo;",
	onPageClick: function (pageNumber) {
		var showFrom = perPage * (pageNumber - 1);
		var showTo = showFrom + perPage;
		items.hide().slice(showFrom, showTo).show();

		// Menyembunyikan tombol 'Prev' di halaman pertama dan 'Next' di halaman terakhir
		var totalPages = Math.ceil(numItems / perPage);
		if (pageNumber === 1) {
			$(".prev").hide();
		} else {
			$(".prev").show();
		}
		if (pageNumber === totalPages) {
			$(".next").hide();
		} else {
			$(".next").show();
		}
	},
});

// Menyembunyikan tombol 'Prev' di awal secara default
$(".prev").hide();
