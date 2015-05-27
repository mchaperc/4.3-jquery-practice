// (function() {

	$(document).ready(function() {
		determineKeyValue();
	});

	var shift = false;
	var caps = false;
	var html = '';

	function determineKeyValue() {
		$('.keyboard-key').on('click', function(event) {
			if (functionKeys[$(this).text()]) {
				functionKeys[$(this).text()]();
			} else {
				if (shift === true) {
					html += functionKeys[$(this).text()] || upperCaseKey($(this).text());
					shift = false;
					reMapChars();
					if (!caps) {
						$('.letter').removeClass('up-case');
					}
				} else if (caps === true) {
					html +=	functionKeys[$(this).text()] || upperCaseKey($(this).text());
				} else {
					html += functionKeys[$(this).text()] || $(this).text();
				}
				$('.display').html(html);
			}
		});
	}

	function reMapChars() {
		if (shift === true) {
			displaySpecialChars();
		} else {
			displayNums();
		}
	}

	function displaySpecialChars() {
		$('.back-tick').text('~');
	}

	function displayNums() {
		$('.back-tick').text('`');
	}


	function upperCaseKey(key) {
		return key.toUpperCase();
	}

	var specialCharacters = {
		'`': '~',
		'1': '!',
		'2': '@',
		'3': '#',
		'4': '$',
		'5': '%',
		'6': '^',
		'7': '&',
		'8': '*',
		'9': '(',
		'0': ')',
		'-': '_',
		'=': '+',
		'[': '{',
		']': '}',
		'\\': '|',
		';': ':',
		"'": '"',
		',': '<',
		'.': '>',
		'/': '?'
	}

	var functionKeys = {
		'delete': function() {
			html = html.slice(0, -1);
			$('.display').html(html);
		},
		'caps lock': function() {
			if (!caps) {
				caps = true;
				shift = false;
				$('.letter').addClass('up-case');	
			} else {
				caps = false;
				shift = false;
				$('.letter').removeClass('up-case');	
			}
		},
		'shift': function() {
			if(shift === false) {
				$('span').toggleClass('hidden');
			}
			shift = true;
			reMapChars();
			$('.letter').addClass('up-case');
		},
		'tab': function() {
			html += '&#9;';
		},
		'return': function() {
			html += '\n';
		}
	}

// })();