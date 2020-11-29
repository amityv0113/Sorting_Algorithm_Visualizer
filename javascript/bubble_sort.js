

function Bubble()
{
    c_delay=0;
    console.log('ye waala')
    for(var i=0;i<array_size-1;i++)
    {
        // console.log(height[i])
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(block[j],height[j],"yellow");//Color update

            if(height[j]<height[j+1])
            {
                console.log('YE if conditon')
                div_update(block[j],height[j], "red");//Color update
                div_update(block[j+1],height[j+1], "red");//Color update

                var temp=height[j];
                height[j]=height[j+1];
                height[j+1]=temp;

                div_update(block[j],height[j], "red");//Height update
                div_update(block[j+1],height[j+1], "red");//Height update
            }
            div_update(block[j],height[j], "rgba(81, 105, 105, 0.91)");//Color updat
        }
        div_update(block[j],height[j], "rgba(136, 65, 65, 0.911)");//Color update
    }
    div_update(block[0],height[0], "rgba(136, 65, 65, 0.911)");//Color update

    enable_buttons();
}
