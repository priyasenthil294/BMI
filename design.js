function div(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    b=b/100
    b=b*b
    bmi=a/b
    document.getElementById("result").textContent=(bmi).toFixed(1);

    if(bmi<16)
    {
        document.getElementById("con").textContent = "Severe Thinness";
    }
    else if(bmi>=16 && bmi<17)
    {
        document.getElementById("con").textContent = "Moderate Thinness";
    }
    else if(bmi>=17 && bmi<18.5)
    {
        document.getElementById("con").textContent = "Mild Thinness";
    }
    else if(bmi>=18.5 && bmi<25)
    {
        document.getElementById("con").textContent = "Normal";
    }
    else if(bmi>=25 && bmi<30)
    {
        document.getElementById("con").textContent = "Overweight";
    }
    else if(bmi>=30 && bmi<35)
    {
        document.getElementById("con").textContent = "Obese Class I";
    }
    else if(bmi>=35 && bmi<40)
    {
        document.getElementById("con").textContent = "Obese Class II";
    }
    else
    {
        document.getElementById("con").textContent = "Obese Class III"
    }

}