
  class Cars  {
      constructor(options) {
          this.model = options.model;
          this.color = options.color;
          this.wheels = options.wheels;
      }
       start()  {
           console.log('машина заведена')
       }

  }







  class SportsCars extends Cars{
      constructor(options) {
          super(options);
          this.max_speed = options.max_speed;
      }
  }

class  ElectricCar extends Cars {
    constructor(options) {
        super(options);
        this.battery_capacity  = options.battery_capacity
    }

  }
  class Truck extends Cars {
    constructor(options) {
        super(options);
        this.quantity = options.quantity
    }
  }
    const Car1 = new SportsCars( {
        model:"Porsche 911",
        color:'red',
        wheels: 4,
        max_speed:320,
    })
     const Car2 =   new ElectricCar({
         model:"Tesla Model 3",
         color:'blue',
        wheels: 4,
         battery_capacity:75,


     } )

     const Car3 = new Truck({
         model:"pickup",
         color: 'black',
         wheels: 4,
         quantity: 'good'

     })
  console.log(SportsCars);
  console.log(ElectricCar );
  console.log(Truck);


  class Traffic {
      constructor() {
          this.red = document.querySelector("#red");
          this.yellow = document.querySelector("#yellow");
          this.green = document.querySelector("#green");
      }


      turnOn(color) {
          this.resetLights();
          if (color === 'красный') {
              this.red.classList.add('active');
              this.red.textContent = 'Стоп';
          } else if (color === 'желтый') {
              this.yellow.classList.add('active');
              this.yellow.textContent = 'Жди';
          } else if (color === 'зеленый') {
              this.green.classList.add('active');
              this.green.textContent = 'Иди';
          } else {
              alert('красный, желтый , зеленый');
          }
      }


      resetLights() {
          this.red.classList.remove('active');
          this.red.innerHTML = '';
          this.yellow.classList.remove('active');
          this.yellow.innerHTML = '';
          this.green.classList.remove('active');
          this.green.innerHTML = '';
      }
  }


  const traffic = new Traffic();

  const Color = prompt('Введите цвет светофора: красный, желтый или зеленый').toLowerCase().trim();


  traffic.turnOn(Color);



