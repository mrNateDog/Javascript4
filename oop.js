// ENCAPSULATION
//bad - old way that we're comfortable with
let hours = 20;
let rate = 15;
function weeklyWage(hours,rate){
    return hours *rate;
}

//should use objects instead - 
//best functions w/o parameters 
let employee1 ={
    hours = 40,
    rate =25,
    weeklyWage: function(){
        return this.hours * this.rate;
    }
}
employee1.weeklyWage(); //call call multiple employees here - 