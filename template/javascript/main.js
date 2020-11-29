
var inp_as=document.getElementById('array_size');
var array_size=inp_as.value;


var array_generate=document.getElementById("array_generate");
var algo_speed=document.getElementById("algo_speed");
// container where block array is going to created 
var array_container=document.getElementById("array_container");
array_container.style="flex-direction:row";

//Array generation and updation.
var block=[]
var height=[]

// adding events to elements
array_generate.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

// var container_array_width=document.getElementById("array_container").offsetWidth;

function generate_array()
{
    array_container.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        block[i] =document.createElement("div");
        
        var margin_size=0.5;
        height[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        block[i].style=" margin:" + margin_size + "%; background-color:rgba(81, 105, 105, 0.91); width:" +(1000/(array_size-(2*margin_size))) + "px; height:" + (height[i]) + "%;";

        array_container.appendChild(block[i]);
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//list of algorithm button
var butts_algos=document.querySelectorAll(".algos button");


for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        // console.log(butts_algos[i].classList)
        butts_algos[i].classList=[];
        
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        array_generate.disabled=true;
        algo_speed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    var algo=this.innerHTML;
    if (algo=="Bubble")
    {
        Bubble() 
    }
    else if (algo=="Selection")
    {
        Selection_sort();
    }
    else if (algo=="Insertion")
    {
        // console.log("YE Console")
        Insertion();   
    }
    else if (algo=="Merge")
    {
        Merge();
    }
    else if(algo=="Quick")
    {
        Quick();
    }
    else if (algo=="Heap")
    {
        Heap();
    }
}


//// working with algorithm speed 


var speed =10000;
algo_speed.addEventListener('input',changeAlgoSpeed());

function changeAlgoSpeed()
{
    var l=algo_speed.value;
    if (l==1)
    {
        speed=1;
    }
    else if (l==2)
    {
        speed=10;
    }
    else if (l==3)
    {
        speed=100;
    }
    else if (l==4)
    {
        speed=1000;
    }
    else
    {
        speed=10000;
    }
    delay_time = 10000/(Math.floor(array_size/10)*speed);
}

var delay_time = 10000/(Math.floor(array_size/10)*speed);

var c_delay=0;

function div_update(block,height,color)
{
    window.setTimeout(()=>{
        var margin_size=0.5;
        block.style = " margin:" + margin_size + "%; background-color:"+color+"; width:" +(1000/(array_size-(2*margin_size))) + "px; height:" +height+ "%;";
    },c_delay+=delay_time)
}

function enable_buttons()
{
    window.setTimeout(()=>{
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            array_generate.disabled=false;
            algo_speed.disabled=false;
        }
    },c_delay+=delay_time);
}


