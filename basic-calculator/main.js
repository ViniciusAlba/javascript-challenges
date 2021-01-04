function calculate(type, value) {

    if (type === 'action') {

        //Conditional to clear all the screen.
        if (value === 'c') {
            document.getElementById('result').value = ''
        }

        //Conditional to clear a thing at time.
        if (value === 'backspace') {
            document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
        }

        //Conditional to pass the operators to screen.
        if (value === '+' || value === '-' || value === '*' || value === '/' || value == '.') {
            document.getElementById('result').value += value;
        }

        //Putting the result on the screen.
        if (value === '=') {
            var field_value = eval(document.getElementById('result').value).toFixed(9).replace(/(\.0+|0+)$/, '');
            document.getElementById('result').value = field_value;
        }
    
    //Getting numbers and concatenating these numbers on the screen.
    } else if (type === 'value') {
        document.getElementById('result').value += value;
    }
    
}