// (function() {

	$(document).ready(function() {
		determineKeyValue();
		listenForKeyPress();
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

	function listenForKeyPress() {
		$('.display').keydown(function(e) {
			var code = e.keyCode.toString();
			console.log(code);
			keycodes[code]();
		});
		$('.display').keyup(function(e) {
			var code = e.keyCode;
			keycodes[code]();
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
		$('.back-slash').text('|');
		$('.semi-colon').text(':');
		$('.apostrophe').text('"');
		$('.comma').text('<');
		$('.period').text('>');
		$('.front-slash').text('?');
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
		$('.back-slash').text('\\');
		$('.semi-colon').text(';');
		$('.apostrophe').text("'");
		$('.comma').text(',');
		$('.period').text('.');
		$('.front-slash').text('/');
	}

	var keycodes = {
	  '8': function() {
	  	$('.delete').toggleClass('pressed');
	  },
	  '9': function() {
	  	$('.tab').toggleClass('pressed');
	  },
	  '13': function() {
	  	$('.return').toggleClass('pressed');
	  },
	  '16': function() {
	  	$('.shift').toggleClass('pressed');
	  },
	  '20': function() {
	  	$('.caps').toggleClass('pressed');
	  },
	  '48': function() {
	  	$('.zero').toggleClass('pressed');
	  },
	  '49': function() {
	  	$('.one').toggleClass('pressed');
	  },
	  '50': function() {
	  	$('.two').toggleClass('pressed');
	  },
	  '51': function() {
	  	$('.three').toggleClass('pressed');
	  },
	  '52': function() {
	  	$('.four').toggleClass('pressed');
	  },
	  '53': function() {
	  	$('.five').toggleClass('pressed');
	  },
	  '54': function() {
	  	$('.six').toggleClass('pressed');
	  },
	  '55': function() {
	  	$('.seven').toggleClass('pressed');
	  },
	  '56': function() {
	  	$('.eight').toggleClass('pressed');
	  },
	  '57': function() {
	  	$('.nine').toggleClass('pressed');
	  },
	  '65': function() {
	  	$('.a').toggleClass('pressed');
	  },
	  '66': function() {
	  	$('.b').toggleClass('pressed');
	  },
	  '67': function() {
	  	$('.c').toggleClass('pressed');
	  },
	  '68': function() {
	  	$('.d').toggleClass('pressed');
	  },
	  '69': function() {
	  	$('.e').toggleClass('pressed');
	  },
	  '70': function() {
	  	$('.f').toggleClass('pressed');
	  },
	  '71': function() {
	  	$('.g').toggleClass('pressed');
	  },
	  '72': function() {
	  	$('.h').toggleClass('pressed');
	  },
	  '73': function() {
	  	$('.i').toggleClass('pressed');
	  },
	  '74': function() {
	  	$('.j').toggleClass('pressed');
	  },
	  '75': function() {
	  	$('.k').toggleClass('pressed');
	  },
	  '76': function() {
	  	$('.l').toggleClass('pressed');
	  },
	  '77': function() {
	  	$('.m').toggleClass('pressed');
	  },
	  '78': function() {
	  	$('.n').toggleClass('pressed');
	  },
	  '79': function() {
	  	$('.o').toggleClass('pressed');
	  },
	  '80': function() {
	  	$('.p').toggleClass('pressed');
	  },
	  '81': function() {
	  	$('.q').toggleClass('pressed');
	  },
	  '82': function() {
	  	$('.r').toggleClass('pressed');
	  },
	  '83': function() {
	  	$('.s').toggleClass('pressed');
	  },
	  '84': function() {
	  	$('.t').toggleClass('pressed');
	  },
	  '85': function() {
	  	$('.u').toggleClass('pressed');
	  },
	  '86': function() {
	  	$('.v').toggleClass('pressed');
	  },
	  '87': function() {
	  	$('.w').toggleClass('pressed');
	  },
	  '88': function() {
	  	$('.x').toggleClass('pressed');
	  },
	  '89': function() {
	  	$('.y').toggleClass('pressed');
	  },
	  '90': function() {
	  	$('.z').toggleClass('pressed');
	  },
	  '189': function() {
	  	$('.minus').toggleClass('pressed');
	  },
	  '190': function() {
	  	$('.period').toggleClass('pressed');
	  },
	  '220': function() {
	  	$('.back-slash').toggleClass('pressed');
	  },
	  '186': function() {
	  	$('.semi-colon').toggleClass('pressed');
	  },
	  '187': function() {
	  	$('.equals').toggleClass('pressed');
	  },
	  '188': function() {
	  	$('.comma').toggleClass('pressed');
	  },
	  '192': function() {
	  	$('.back-tick').toggleClass('pressed');
	  },
	  '219': function() {
	  	$('.left-bracket').toggleClass('pressed');
	  },
	  '191': function() {
	  	$('.front-slash').toggleClass('pressed');
	  },
	  '221': function() {
	  	$('.right-bracket').toggleClass('pressed');
	  },
	  '222': function() {
	  	$('.apostrophe').toggleClass('pressed');
	  },
	  '32': function() {
	  	$('.space').toggleClass('pressed');
	  }
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