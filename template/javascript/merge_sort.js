
function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;
    var n1=mid-start+1;
    var n2=end-mid;

    var Arr1=new Array(n1+1);
    var Arr2=new Array(n2+1);
    Arr1[n1]=100000;
    Arr2[n2]=100000;
    for (var i=0 ;i<n1 ;i++)
    {
        Arr1[i]=height[start+i];
    }
    for (var i=0 ;i<n2 ;i++)
    {
        Arr2[i]=height[mid+i+1];
    }
    var i=0;
    var j=0;
    for(var k=start ; k<=end ; k++)
    {   
        div_update(block[k],height[k],"red");
        if (Arr1[i] <= Arr2[j])
        {
            height[k]=Arr1[i];
            i++;
        }
        else
        {
            height[k]=Arr2[j];
            j++;
        }
        div_update(block[k],height[k],"red");
        
    }

    for(var t=start;t<=end;t++)
    {
        div_update(block[t],height[t],"brown");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(block[mid],height[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
