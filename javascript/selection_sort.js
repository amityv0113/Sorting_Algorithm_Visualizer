
function Selection_sort()
{
    c_delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        div_update(block[i],height[i],"yellow");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            

            if(height[j]<height[index_min])
            {
                if(index_min!=i)
                {
                    // div_update(block[index_min],height[index_min],"red");//Color update
                }
                index_min=j;
                //Color update
            }
        }
        
        if(index_min!=i)
        {
            div_update(block[index_min],height[index_min],"red");

            var temp=height[index_min];
            height[index_min]=height[i];
            height[i]=temp;

            div_update(block[index_min],height[index_min],"red");//Height update
            div_update(block[i],height[i],"red");//Height update
            div_update(block[index_min],height[index_min],"rgba(81, 105, 105, 0.91)");//Color update
        }
        div_update(block[i],height[i],"rgba(136, 65, 65, 0.911)");//Color update
    }
    div_update(block[array_size-1],height[array_size-1],"rgba(136, 65, 65, 0.911)");//Color update

    enable_buttons();
}

