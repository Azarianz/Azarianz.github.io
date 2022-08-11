about_pageindex = 1;
history_pageindex = 1;

function about_nextPage(index)
{
    if(about_pageindex < 3)
    {
        about_pageindex++;
    }

    about_showpage();
}

function about_prevPage()
{
    if(about_pageindex > 1)
    {
        about_pageindex--;
    }

    about_showpage();
}

function about_showpage()
{
    var page1 = document.getElementById("aboutpage-1");
    var page2 = document.getElementById("aboutpage-2");
    var page3 = document.getElementById("aboutpage-3");


    if(about_pageindex == 1)
    {
        page1.style.visibility = "visible";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
    }
    else if(about_pageindex == 2)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "visible";
        page3.style.visibility = "hidden";
    }
    else if(about_pageindex == 3)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "visible";
        
    }
}

function history_nextPage(index)
{
    if(history_pageindex < 5)
    {
        history_pageindex++;
    }

    history_showpage();
}

function history_prevPage()
{
    if(history_pageindex > 1)
    {
        history_pageindex--;
    }

    history_showpage();
}

function history_showpage()
{
    var page1 = document.getElementById("historypage-1");
    var page2 = document.getElementById("historypage-2");
    var page3 = document.getElementById("historypage-3");
    var page4 = document.getElementById("historypage-4");
    var page5 = document.getElementById("historypage-5");


    if(history_pageindex == 1)
    {
        page1.style.visibility = "visible";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
    }
    else if(history_pageindex == 2)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "visible";
        page3.style.visibility = "hidden";
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
    }
    else if(history_pageindex == 3)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "visible"; 
        page4.style.visibility = "hidden";
        page5.style.visibility = "hidden";
    }
    else if(history_pageindex == 4)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden"; 
        page4.style.visibility = "visible";
        page5.style.visibility = "hidden";
    }
    else if(history_pageindex == 5)
    {
        page1.style.visibility = "hidden";
        page2.style.visibility = "hidden";
        page3.style.visibility = "hidden"; 
        page4.style.visibility = "hidden";
        page5.style.visibility = "visible";
    }
}