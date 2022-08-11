let info_pageindex = 1;

function info_nextPage()
{
    if(info_pageindex < 3)
    {
        info_pageindex++;
    }

    info_showpage();
}

function info_prevPage()
{
    if(info_pageindex > 1)
    {
        info_pageindex--;
    }

    info_showpage();
}

function info_showpage()
{
    var page1 = document.getElementById("infopage-1");
    var page2 = document.getElementById("infopage-2");
    var page3 = document.getElementById("infopage-3");


    if(info_pageindex == 1)
    {
        page1.style.visibility = "visible";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
    }
    else if(info_pageindex == 2)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "visible";
        page3.style.visibility = "hidden";
    }
    else if(info_pageindex == 3)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "visible";
        
    }
}
