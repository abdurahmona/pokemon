
//Masala-3:


let salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
  }
  const  sum = []

  const calcPay = function(pay){

      let paySalaries = 0
      for(let p of pay){
          paySalaries += p
      }
      sum.push(paySalaries)

      return sum
  }

  console.log(calcPay(Object.values(salaries)));
