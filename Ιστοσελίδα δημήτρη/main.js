const my_window = document.getElementById("window");


let start_x = 0
let start_y = 0;
let is_dragging = false;
let window_x;
let window_y;
let first_time = true;

my_window.addEventListener("mousedown", e => {
	is_dragging = true;
	start_x = e.pageX;
	start_y = e.pageY;

	window_x = Number(my_window.style.left.replace("px", "")) + 10;
	window_y =  Number(my_window.style.top.replace("px", "")) + 10;

	if (
	( (e.pageX >= window_x + my_window.offsetWidth - 30) && (e.pageX <= window_x + my_window.offsetWidth) ) && 
	( (e.pageY >= window_y) && (e.pageY <=  window_y + 20))
	)
	{

		my_window.style.visibility = 'hidden';
	}	
})

document.addEventListener("mousemove", e => {

	window_x = Number(my_window.style.left.replace("px", ""));
	window_y =  Number(my_window.style.top.replace("px", ""));

	if (!is_dragging) return;

	if(window_x + my_window.offsetWidth >= window.innerWidth - 50) { my_window.style.left = `${window.innerWidth - my_window.offsetWidth - 50}px` };
	if(window_x <= 20) { my_window.style.left = "20px" };
	if(window_y <= 20) { my_window.style.top = "20px"};

	if ((window_x + my_window.offsetwidth >= window.offsetwidth || e.pageY < 0)) {

		my_window.style.left = '${window.offsetwidth - my_window.offsetwidth} + "px"}';
		return;

	}


	if (first_time && (e.pageY >= window_y && e.pageY <= window_y + 45)){

	my_window.style.left = `${Number(my_window.style.left.replace("px", "")) + e.pageX - start_x}px`;
	my_window.style.top = `${Number(my_window.style.top.replace("px", "")) + e.pageY - start_y}px`;

	start_x = e.pageX;
	start_y = e.pageY;
	}


	first_time = true;

})

document.addEventListener("mouseup", () => {
	is_dragging = false;
})