
const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const result = document.querySelector('.result');

button.addEventListener('click', function() {
	if (input.value === '3') {
		result.innerHTML = 'Your answer is correct!';
		result.style.color = '#008000';
	} else {
		result.innerHTML = 'Sorry, your answer is incorrect.';
		result.style.color = '#ff0000';
	}
});
