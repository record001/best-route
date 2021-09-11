
form.addEventListener('submit', function calculte(val){

  val.preventDefault();

  const walker_speed_kmH = 3.6;
  const bicycle_speed_kmH = 20.1;
  const car_speed_kmH = 70;
  const plane_speed_kmH = 800;

  let input_speed = document.getElementById("distance");

  let walker_speed = document.getElementById("walker_info");
  let bicycle_speed = document.getElementById("bicycle_info");
  let car_speed = document.getElementById("car_info");
  let plane_speed = document.getElementById("plane_info");

  // t=s/v

  let w = (input_speed.value / walker_speed_kmH).toFixed(2) ;
  let b = (input_speed.value / bicycle_speed_kmH).toFixed(2);
  let c = (input_speed.value / car_speed_kmH).toFixed(2);
  let p = (input_speed.value / plane_speed_kmH).toFixed(2);


  walker_speed.textContent = w + " soat";
  bicycle_speed.textContent = b + " soat";
  car_speed.textContent = c + " soat";
  plane_speed.textContent = p + " soat";

  //end



})





