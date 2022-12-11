let result = "";

let button = document.getElementsByClassName("button");

for (let i = 0;i<button.length;i++) {
	button[i].addEventListener('click', function () {
		result = result + this.id;
		document.getElementById('result').innerText = result;
	});
}
let operator = document.getElementsByClassName("operator")
for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", function () {
		if (this.id == "clearall") {
			document.getElementById('result').innerText = ""
			result = ""
		}
		else if (this.id == "backspace") {
			result = result.substr(0, result.length - 1)
			document.getElementById('result').innerText = result;
		}
		else if (this.id == "sign") {
			if (result[0] != "-") {
				result = "-" + result;
				document.getElementById('result').innerText = result;
			}
		}
		else if (result[0] == "-") {
			result = result.substr(1, result.length);
			document.getElementById('result').innerText = result;
		}
		else if (this.id == "=") {

			document.getElementById('result').innerText = eval(result);
			result=""
		}
	});
}