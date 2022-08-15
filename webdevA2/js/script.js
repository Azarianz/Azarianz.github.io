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

function randomNum(max)
{
    return Math.floor(Math.random() * max);
}

const menuBtn = document.querySelector('.menu-btn')
		const navlinks = document.querySelector('.nav-links')

		menuBtn.addEventListener('click',()=>{
			navlinks.classList.toggle('mobile-menu');
		})

		function spawnEnemy()
		{
			var rand = Math.floor(Math.random() * 3);
			var x = document.getElementsByClassName("enemies");

			for (i = 0; i < 3; i++) 
			{
				if(i == rand)
				{
					x[i].style.visibility = "visible";  
				}
				else
				{
					x[i].style.visibility = "hidden";
				}
			}
		}

		function move() 
		{
			var elem = document.getElementById("myBar");   
			var elem2 = document.getElementById("myBar2");  
			var elem3 = document.getElementById("myBar3");  
			var width = 100;
			var id = setInterval(frame, 10);
			function frame() 
			{
				if (width <= 0) 
				{
					clearInterval(id);
					spawnEnemy();
					width = 100;
					elem.style.width = width + '%'; 
					elem.innerText = width * 1  + '%';
					elem2.style.width = width + '%'; 
					elem2.innerText = width * 1  + '%';
					elem3.style.width = width + '%'; 
					elem3.innerText = width * 1  + '%';
				} 
				else 
				{
					width--; 
					elem.style.width = width + '%'; 
					elem.innerText = width * 1  + '%';
					elem2.style.width = width + '%'; 
					elem2.innerText = width * 1  + '%';
					elem3.style.width = width + '%'; 
					elem3.innerText = width * 1  + '%';
				}
			}
		}