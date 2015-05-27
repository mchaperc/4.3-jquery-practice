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

	function upperCaseKey(key) {
		return key.toUpperCase();
	}

	function displaySpecialChars() {
		$('.back-tick').text('~');
		$('.one').text('!');
		$('.two').text('@');
		$('.three').text('#');
		$('.four').text('$');
		$('.five').text('%');
		$('.six').text('^');
		$('.seven').text('&');
		$('.eight').text('*');
		$('.nine').text('(');
		$('.zero').text(')');
		$('.minus').text('_');
		$('.equals').text('+');
		$('.left-bracket').text('{');
		$('.right-bracket').text('}');
		$('.front-slash').text('|');
		$('.semi-colon').text(':');
		$('.apostrophe').text('"');
		$('.comma').text('<');
		$('.period').text('>');
		$('.back-slash').text('?');
	}

	function displayNums() {
		$('.back-tick').text('`');
		$('.one').text('1');
		$('.two').text('2');
		$('.three').text('3');
		$('.four').text('4');
		$('.five').text('5');
		$('.six').text('6');
		$('.seven').text('7');
		$('.eight').text('8');
		$('.nine').text('9');
		$('.zero').text('0');
		$('.minus').text('-');
		$('.equals').text('=');
		$('.left-bracket').text('[');
		$('.right-bracket').text(']');
		$('.front-slash').text('\\');
		$('.semi-colon').text(';');
		$('.apostrophe').text("'");
		$('.comma').text(',');
		$('.period').text('.');
		$('.back-slash').text('/');
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