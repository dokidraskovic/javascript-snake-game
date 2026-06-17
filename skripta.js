$(document).ready(function()
{
    var poeni=0;
    var z =[
        {
        x:0,
        y:0
        }
    ];
    let smer=0;
    var crvena =
    {
        x:0,
        y:0
    };
    var ljubicasta=
    {
        x:0,
        y:0
    };
    var napravihranu;
    napravitabelu();
    generisizmijicu();
    generisihranu("red");
    let igra=setInterval(pokrenizmijicu,100);


    function napravitabelu()
    {
        for(let i=0;i<10;i++)
        {
            let red=$("<tr></tr>");
            for(let j=0;j<10;j++)
            {
                let polje=$("<td></td>");
                if((i + j) % 2 == 0)
                    polje.addClass("parno").attr("id",""+i+j).css(
                        {
                            "width" : "30px",
                            "height" : "30px",
                            "background-color": "#505D85"
                        }
                    );
                else 
                    polje.addClass("neparno").attr("id",""+i+j).css(
                        {
                            "width" : "30px",
                            "height" : "30px",
                            "background-color": "#1A143E"    
                        }
                    );
                red.append(polje);
                
            }
            $("#tabla").append(red);
        }
    }



   function generisizmijicu()
    {
        let x1 = Math.floor(Math.random()*10);
        let y1= Math.floor(Math.random()*10);
        z.unshift(
            {
                x:x1,
                y:y1
            }
         );
        $("#"+y1+x1).css( {"background-color" : "#2E5CEA"});
        z.pop();
    }

    function generisihranu(color)
    {
        let flag=true;
        while(flag)
        {
            x1 = Math.floor(Math.random()*10);
            y1= Math.floor(Math.random()*10);
            for(let i=0;i<z.length;i++)
            {
                flag=false;
                if(z[i].x==x1 && z[i].y==y1)
                {
                    flag=true;
                    break;
                }
            }
        }
        $("#"+y1+x1).append($("<span></span>").css( {"display":"block","width":"20px","height":"20px","background-color" : color,"border-radius":"50%","margin":"auto"}));
       if(color=="red") crvena =
        {
            x:x1,
            y:y1
        };
        else 
            ljubicasta=
            {
                x:x1,
                y:y1
            };

    }



    $(document).keydown(function(event)
    {
        if(smer==0)
            napravihranu=setInterval(generisiBoljuHranu,10000);
        let novismer=event.keyCode;
        if(smer==0 || z.length==1)
            smer=novismer;
        else if(smer==38 && novismer!=40)
            smer=novismer;
        else if(smer==40 && novismer!=38)
            smer=novismer;
        else if(smer==39 && novismer!=37)
            smer=novismer;
        else if(smer==37 && novismer!=39)
            smer=novismer;
    })   


    function pokrenizmijicu()
    {
        
        let color="red";
        let color1="purple";
        let pom=({x:z[z.length-1].x,y:z[z.length-1].y});
        for(let i=z.length-1;i>0;i--)
        {
            z[i].x=z[i-1].x;
            z[i].y=z[i-1].y;
        }
        if(smer==38)
            z[0].y--;
        else if(smer==40)
            z[0].y++;
        else if(smer==39)
            z[0].x++;
        else if(smer==37)
            z[0].x--; 
       
        let crtaj=false;
        if(z[0].x==10)
            {
                clearInterval(igra);
                z[0].x=9;
                crtaj=true;
            }
        else if(z[0].x==-1)
            {
                clearInterval(igra);
                z[0].x=0;
                crtaj=true;
            }
        else if(z[0].y==10)
            {
                clearInterval(igra);
                z[0].y=9;
                crtaj=true;
            }
        else if(z[0].y==-1)
            {
                clearInterval(igra);
                z[0].y=0;
                crtaj=true;
            }
        if(crtaj)
            $("#"+z[0].y+z[0].x).css({"background-color" : "#2E5CEA"});
        if((z[0].x==crvena.x && z[0].y==crvena.y) || (z[0].x==ljubicasta.x && z[0].y==ljubicasta.y))
        {
            z.push({x:pom.x,y:pom.y});
            if($("#"+z[0].y+z[0].x).find("span").css("background-color")=="rgb(255, 0, 0)") 
            {
                generisihranu("red");
            }
            else
            {
                ljubicasta={
                    x:-1,
                    y:-1
                };
            }
            $("#"+pom.y+pom.x).css({"background-color" : "#2E5CEA"});
            $("#"+z[0].y+z[0].x).find("span").css({"display":"none"});
        }
        for(let i=0;i<10;i++)
        {
            for(let j=0;j<10;j++)
                {
                    let boja = $("#"+i+j).css("background-color");
                    if($("#"+i+j).hasClass("parno") && (boja != color || boja!=color1))
                        $("#"+i+j).css( {"background-color": "#505D85"});
                    else if( boja != color || boja!=color1)
                         $("#"+i+j).css( {"background-color": "#1A143E"});
                
                        
                }
        }
        for(let i=1;i<z.length;i++)
            if(z[0].x==z[i].x && z[0].y==z[i].y)
                {
                    clearInterval(igra);
                }
        for(let i=0;i<z.length;i++)
            $("#"+z[i].y+z[i].x).css({"background-color" : "#2E5CEA"});

    }   

    function generisiBoljuHranu()
    {
        generisihranu("purple");
        setTimeout(() => {
            $("#"+ljubicasta.y+ljubicasta.x).find("span").css({"display":"none"});
            ljubicasta={
                x:-1,
                y:-1
            };
        }, 
            5000);
    }
});