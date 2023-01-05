const tamogotchi = {
    name: 'egg',
    meal: 8,
    energy: 8,
    mood: 8,

    getStatus() {
        let meal = '';
        let energy = '';
        let mood = '';

        if (this.meal >= 5 && this.energy >= 5 && this.mood >= 5) {
            console.log(`${this.name} счастлив.`);
        }

        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер.`);
            return;
        }


        if (this.meal < 3) {
            meal = `еда: Я голоден(${this.meal})`;
        } else {
            meal = `еда: Я не голоден(${this.meal}`;
        }

        if (this.energy < 3) {
            energy = `энергия: Я устал(${this.energy})`
        }
        else {
            energy = `энергия  Я не устал(${this.energy})`
        };

        if (this.mood < 3) {
            mood = `настроение: Мне грустно(${this.mood})`;

        } else { mood = `настроение: Мне весело(${this.mood})` };



        console.log(`имя: ${this.name}, ${meal}, ${energy}, ${mood}`);
    },

    setName(n) {
        this.name = n;
    },

    eat() {
        if (this.meal < 5) {
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