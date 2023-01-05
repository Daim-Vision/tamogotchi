const tamogotchi = {
    name: 'egg',
    meal: 8,
    energy: 8,
    mood: 8,

   getStatus() {
       if (this.meal >= 5 && this.energy >= 5 && this.mood >= 5) {
           console.log(`${this.name} счастлив.`);
           return;
       }
       
       if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
           console.log(`${this.name} умер.`);
           return;
       }
      
       
    if (this.meal < 3) {
      this.meal = `еда: Я голоден(${this.meal})`;
    } else {
        this.meal = `еда: Я не голоден(${this.meal}`;
    }
    
    if (this.energy < 3) {
        this.energy = `энергия: Я устал(${this.energy})`}
     else {
        this.energy = `энергия  Я не устал(${this.energy})`};
        
    if (this.mood < 3) {
        this.mood = `настроение: Мне грустно(${this.mood})`;
        
    } else 
        {this.mood = `настроение: Мне весело(${this.mood})`};
        
        
        
        console.log(`имя: ${this.name}, ${this.meal}, ${this.energy}, ${this.mood}`);
    },

    setName(n) {
        this.name = n; 
    },

    eat() {
        if(this.meal < 5) {
            this.meal++;
            this.mood--;
        }
    },

    sleep() {
        if (this.energy < 5) {
            this.energy++;
            this.meal--;
        }
    },

    play() {
        if (this.mood < 5) {
            this.mood++;
            this.energy--;
        }
    }
};


tamogotchi.setName('Jamic');

tamogotchi.eat();

tamogotchi.getStatus();