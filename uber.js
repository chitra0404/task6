
class Uber{

fareestimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
	var result = [];
    
this. ride_time = +ride_time;
	this.ride_distance = +ride_distance;
	this.cost_per_minute =+ cost_per_minute;
	this.cost_per_mile = +cost_per_mile;
	
	result = (ride_time * cost_per_minute + ride_distance * cost_per_mile).toFixed(2);
  return result;
}
}
var uber1=new Uber();

console.log(uber1.fareestimator(".30","3","2","10"));


