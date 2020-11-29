

function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var x=height[end];
    div_update(block[end],height[end],"yellow");
    var j=start-1;
    for (var i=start ;i<end ;i++)
    {
        if (height[i]<x)
        {
            j++;
            div_update(block[i],height[i],"red");
            div_update(block[j],height[j],"red"); 
            var temp=height[j];
            height[j]=height[i];
            height[i]=temp;
            div_update(block[i],height[i],"rgba(81, 105, 105, 0.91)");
            div_update(block[j],height[j],"rgba(81, 105, 105, 0.91)");
        }
    }
    div_update(block[end],height[end],"red");
    div_update(block[j+1],height[j+1],"red");
    height[end]=height[j+1];
    height[j+1]=x;
    div_update(block[j+1],height[j+1],"brown");
    return j+1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
        for (var i=start ;i<=end ;i++)
        {
            div_update(block[i],height[i],"brown");
        }
    }
 }

