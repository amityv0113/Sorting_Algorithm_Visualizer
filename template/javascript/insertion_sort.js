
function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size ;j++)
    {
        div_update(block[j],height[j],"yellow");//Color update

        var key= height[j];
        var i=j-1;
        while( i>=0 && height[i]>key)
        {
            div_update(block[i],height[i],"red");//Color update
            div_update(block[i+1],height[i+1],"red");//Color update

            height[i+1]=height[i];

            div_update(block[i],height[i],"red");//Height update
            div_update(block[i+1],height[i+1],"red");//Height update
    
            div_update(block[i],height[i],"rgba(81, 105, 105, 0.91)");//Color update
            div_update(block[i+1],height[i+1],"rgba(81, 105, 105, 0.91)");//Color update
            i-=1;
        }
        height[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(block[t],height[t],"rgba(136, 65, 65, 0.911)");//Color update
        }
    }
    div_update(block[array_size-1],height[array_size-1],"rgba(136, 65, 65, 0.911)");//Color update

    enable_buttons();
}
