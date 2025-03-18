function convert(){
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let temperature = parseFloat(document.getElementById('temperature').value);

    let convertedValue;
    let resultUnit;

    switch (fromUnit){
        case 'C':
            if (toUnit === 'F'){
                convertedValue = (temperature * 9/5) +32;
                resultUnit = 'F';
            } else if (toUnit === 'K'){
                convertedValue = temperature + 273.15;
                resultUnit = 'K';
            }else{
                convertedValue = temperature;
                resultUnit = 'C';
            }
            break;

            case 'F':
            if (toUnit === 'C'){
                convertedValue = (temperature -32) * 5/9;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertedValue = (temperature -32) * 5/9 + 273.15;
                resultUnit = 'K';
            }else{
                convertedValue = temperature;
                resultUnit = 'F';
            }
            break;

            case 'K':
            if (toUnit === 'C'){
                convertedValue = temperature - 273.15;
                resultUnit = 'C';
            } else if (toUnit === 'F'){
                convertedValue = (temperature - 273.15) * 9/5 +32;
                resultUnit = 'F';
            }else{
                convertedValue = temperature;
                resultUnit = 'K';
            }
            break;
    }

    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
    
};
let btn=document.querySelector("button");
btn.onclick=convert;
