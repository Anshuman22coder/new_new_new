let player1="";
let player2="";
let l1=[];
let l2=[];
let player1_El=document.getElementById("player1-el");
let player2_El=document.getElementById("player2-el");
let player_El=document.getElementById("player-el");
function startGame()
{
  player1_El.textContent="Player1:";
  player2_El.textContent="Player2:";
  player_El.textContent="Relationship:::";
  l1=[];
  l2=[];
  
  player1=prompt("Enter the name of the 1st player all in lower case");
  player2=prompt("Enter the name of the 2nd player");

  /*to check only for developer*/
  console.log("the length of player1 name is:"+player1.length);
  console.log("the length of player1 name is:"+player2.length);

  for (let i=0;i<player1.length;i++)
  {
    l1.push(player1[i]);

  }
  /*to check only for developer*/
  console.log("the length of player1 list is :"+l1.length);

  for(let i=0;i<player2.length;i++)
  {
    l2.push(player2[i]);
  }
  /*to check only for developer*/
  console.log("the length of player2 list is :"+l2.length);

  player1_El.textContent+=" "+player1;
  player2_El.textContent+=" "+player2;
  
  let i=0;
  let j=0;
  let count=0;
  let arr=new Array(l2.length).fill(0);
  let slow=l1[0];
  let fast=l2[0];
  while(i<l1.length)
  {
    slow=l1[i];
    
    j=0;
    while(j<l2.length)
    { fast=l2[j];
      if(slow==fast &&arr[j]==0)
      {
           count+=2;
           arr[j]=1;
                                        /*to check only for developer*/
           console.log("matched");
           break;
          
      }
      j++;
    }
      i++;
    }
                       /*to check only for developer*/
    console.log("count :"+count);
    let len_rem=l1.length+l2.length-count;
    let str="";
                       /*to check only for developer*/              
    console.log("len_rem:"+len_rem);
    switch(len_rem)
    {
      case 1 :
      case 7:
          str="u are friends forever🤝🤙🙏";
          break
      case 2:
      case 8:
          str="Ur love is like spring blossom --so so sweet!!!!!😍🥰😘🫶🤭";
          break;
      case 3:
      case 9:
           str="yeah!! now I know the truth u have affection 😇🤩🤫";
           break
      case 4:
      case 10:
          str="we will be comming to ur marriage🥳🤞🤌";
          break
      case 5:
      case 11:
           str="u are hardcore Enemiess 😉🖕👿";
           break;
      case 6:
      case 12:
          str=" u are siblings 🥲🤣💀";
          break;
      default:
        str=" what the heck!! try again";
           
    }

    player_El.textContent+=" "+str;
  }
    
  

function newGame()
{
  l1=[];
  l2=[];
  startGame();
}