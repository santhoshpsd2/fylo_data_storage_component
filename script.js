const slider = document.querySelector('.gbdata');
const select_data = document.querySelector('.dataselect');
const remain_data = document.querySelector('.left_data');

slider.oninput = function(){
    select_data.innerText = `${this.value} GB`;
    remain_data.innerText = 1000 - this.value;
    let percent = (this.value/1000)*100;
    slider.style.background = `linear-gradient(90deg,hsl(6, 100%, 80%),hsl(335, 100%, 65%) ${percent}%,hsl(229, 57%, 11%) ${percent}%)`;    
    // slider.style.background = "red";
}