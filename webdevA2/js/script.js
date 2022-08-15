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



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";

  if(slideIndex == 1)
  {
    slideDescription("Subgenre: TRPG (Tactics) \nGame: Fire Emblem Echoes")
  }
  else if(slideIndex == 2)
  {
    slideDescription("Subgenre: ARPG (Action) \nGame: Final Fantasy 7: Crisis Core")
  }
  else if(slideIndex == 3)
  {
    slideDescription("Subgenre: MMORPG (Massive Online Multiplayer) \nGame: Final Fantasy 14")
  }
  else if(slideIndex == 4)
  {
    slideDescription("Subgenre: ARPG (Adventure) \nGame: Fate Grand Order")
  }
}

function slideDescription(info)
{
    var temp = document.getElementsByClassName("slideinfo");

    for(var i = 0; i < temp.length; i++){
        temp[i].innerText=info;    // Change the content
        }
}

 
var enemyIndex = randomNum(3);
var enemyHP;
var playerDmg = 1


function randomNum(max)
{
    return Math.floor(Math.random() * max);
}

function attackEnemy()
{
    enemyHP -= playerDmg;

    if(enemyHP <= 0)
    {
        spawnEnemy();
    }
}

function spawnEnemy()
{
    var rand = randomNum(3);
    var x = document.getElementsByClassName("enemies");

    for (i = 0; i < x.length; i++) 
    {
        if(i != rand)
        {
            x[i].style.display = "none";  
        }
        else{
            x[i].style.display = "block";
        }
    }
    
    enemyHP = 2;
}

