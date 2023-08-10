
const button = document.getElementById('Button');
const output = document.getElementById('result');

button.addEventListener('click', () => {
    const userInput = document.getElementById('input').value;

    let remainingTime = 2000; 
    const intervalID = setInterval(() => {  //The setInterval() function returns an interval ID that serves as a unique identifier for the interval.
        output.textContent = remainingTime;
        remainingTime -= 10 

        if (remainingTime < 0) {
            clearInterval(intervalID); 
        }
        console.log(intervalID);
    }, 10); // repeat interval after 10 milli second

    setTimeout(() => {
        clearInterval(intervalID); // Clear the interval when setTimeout is over

        let reversedString = userInput.split('').reverse().join('');
        output.innerHTML = reversedString;
    }, 2000);
});

