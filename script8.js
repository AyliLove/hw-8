//Задание 1

const names = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 names.sort((a, b) => a.age - b.age);
 
 console.log(names);

//Задание 2

function filter(arr, ruleFunction) {
    var result = [];
    
    arr.forEach(function(element) {
      if (ruleFunction(element)) {
        result.push(element);
      }
    });
    
    return result;
  }

  function isPositive(number) {
    return number > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); 
  
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  console.log(filter(people, isMale)); 

  
//Задание 3

function printDate() {
    console.log(new Date());
  }
  
  function countdown() {
    let counter = 0;
    const interval = setInterval(() => {
      printDate();
      counter += 3;
      if (counter >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
      }
    }, 3000);
  }
  
  countdown();


//Задание 4

function delayForSecond(callback) { 
    setTimeout(callback, 1000); }

delayForSecond(function () { 
    console.log('Привет, Глеб!'); 
});

//Задание 5 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));


//Задание 
//Задание 
