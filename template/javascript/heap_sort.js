
function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(block[i],height[i],"red");//Color update
    div_update(block[j],height[j],"red");//Color update

    var temp=height[i];
    height[i]=height[j];
    height[j]=temp;

    div_update(block[i],height[i],"rgba(81, 105, 105, 0.91)");//Height update
    div_update(block[j],height[j],"rgba(81, 105, 105, 0.91)");//Height update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && height[l]>height[largest])
    {
        largest=l;
    }

    if(r<n && height[r]>height[largest])
    {
        largest=r;
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(block[i],height[i],"brown");
        max_heapify(i,0);
        
        // div_update(block[i],height[i],"brown");  
    }
    div_update(block[i],height[i],"brown"); 
}



