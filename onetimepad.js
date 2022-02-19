
/**
 * Simulation of a one-time pad in javascript
 *
 * Key generation done using Math.random, which is seeded with current time
 * Hence, key generation is not actually uniformly random
 **/

var OneTimePad = {

	// Generate a key of given length using Math.random
	gen: function(length) {

		var key = "";

		for(var i=0;i<length;i++) {
			key = key.concat(String.fromCharCode(Math.floor(Math.random()*95) + 32));
		}

		return key;
	},

	// Encrypt a message by xoring it with the key
	enc: function(key, message) {

		if(key.length != message.length) return false;


		var cipher = "";
		for(var i=0;i<message.length;i++) {

			// XOR each character together and build cipher
			var code = ((key.charCodeAt(i)-32) ^ (message.charCodeAt(i)-32)) + 32;
			cipher = cipher.concat(String.fromCharCode(code));

		}
		return cipher;

	},

	// Note that encryption and decryption are the exact same routine
	dec: function(key, cipher) {
		this.enc(key, cipher);
	}


};

// Bind button to this
function generate() {

	var msg = document.getElementById("message").value;
	document.getElementById("message").value = msg;

	var key = document.getElementById("key").value;

	// If key length is longer than the message, concat the key
	if(msg.length < key.length) {
		key = key.substring(0,msg.length);
		document.getElementById("key").value = key;
	}

	// If the key length is shorter than the message, re-generate the key
	if(msg.length != key.length) {
		key = OneTimePad.gen(msg.length);
		document.getElementById("key").value = key;
	}

	var cipher = OneTimePad.enc(key, msg);

	if(cipher) {
		document.getElementById("cipher").value = cipher;
	}

}
// clean data
function clean() {

	var msg = document.getElementById("message").value;
	document.getElementById("message").value = '';

	var key = document.getElementById("key").value;
  document.getElementById("key").value = '';

  var key = document.getElementById("cipher").value;
  document.getElementById("cipher").value = '';



}
function mydarkfunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
