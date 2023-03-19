


class Battle {
    constructor(){
        
    }
}
class Spaceship extends Battle{
    constructor(){
    super()
    
    this.hulu=20,
    this.firepower=5,
    this.accuracy=.7;
    }
    targetAlienship(alShipobj){
  /*if(this.accuracy>alShipobj.accuracy)
  {
    console.log("Alien Ship Got Attacked ")
    console.log(alShipobj.hulu - alShipobj.firepower);
  }else { }*/
    console.log(alShipobj.name + " got destroyed");
 }
}


class Alienships extends Battle {
    constructor(name){
        super();
        this.name=name;
        this.hulu=Math.floor(Math.random()*2)+4;
        this.firepower=Math.floor(Math.random()*2)+3;
        this.accuracy=(Math.random()*.2)+.6;
    }
   targetSpaceship(spceShip){
    if(this.accuracy>spceShip.accuracy)
    {
        console.log("Alien ship Attack Back to Spaceship")
        spaceship1.hulu = spaceship1.hulu- this.firepower;
    }else{

        console.log(this.name + " got destroyed")
        return;
    }
    this.accuracy = (Math.random()*.2)+.6;
    this.targetSpaceship(spceShip);
   }
    
}
let spaceship1=new Spaceship();
let alienship1=new Alienships("Ship1")

for(let i =0; i<6; i++){
    
    console.log("Space Ship Hulu: "+spaceship1.hulu);
    console.log("Space Ship Fire Power: "+spaceship1.firepower);
    console.log("Space Ship Accuracy: "+spaceship1.accuracy);

    j = i +1;
    let alienship1=new Alienships("Alien Ship"+j);
    console.log(alienship1.name+" Hulu: "+alienship1.hulu);
    console.log(alienship1.name+" Fire Power: "+alienship1.firepower);
    console.log(alienship1.name+" Accuracy: "+alienship1.accuracy);
    if(alienship1.accuracy > spaceship1.accuracy){
        alienship1.targetSpaceship(spaceship1);
    }
    else {
        spaceship1.targetAlienship(alienship1);
    }
}

if(spaceship1.hulu <= 0){
    console.log("Space Ship destroyed, You lost")
}else {
    console.log("Alien Ships destroyed, You Won")
}



