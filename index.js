function BmiIndexCalculator (){
   const WeightRef = document.querySelector("#Weight");
   const HeightRef = document.querySelector("#Height");
   const resultDivRef = document.querySelector("#BmiIndex"); 


    let Weight = Number(WeightRef.value);
    let Height = Number(HeightRef.value);
    console.log(Weight);
    console.log(Height);


    const BmiIndex=Weight/(Height*Height)
    if (BmiIndex <= 18.5) {
        alert("you are under weight")
    }
    else if (BmiIndex > 18.5 && BmiIndex <= 24.9) {
        alert("you are normal weight")
    }
    else if (BmiIndex > 24.9 && BmiIndex <=29.9) {
       alert("you are overweight") 
    }
    else if (BmiIndex > 24.9) {
        alert ("you are obese")
    }
    resultDivRef.innerHTML =BmiIndex;
}