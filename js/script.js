var imagePaths = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png", "images/image6.png", "images/image7.png", "images/image8.png", "images/image9.png", "images/image10.png"];

var num = Math.floor(Math.random()*10);

$(document).ready(
function()
{
 populateImages();
 
 $('#next_btn').on("click",function()
 {
  showImage();
 }
 );
});



function populateImages()
{
 var table = $('<table></table>');

 var rowNum = 0;

 while(rowNum < 10)
  {
    var row = $('<tr></tr>');
    var colNum = 0;
    while(colNum < 10)
     {
       if((rowNum*10+colNum) % 9 == 0)
        {
          imageId = num;
        }
       else
        {
          var imageId = Math.floor(Math.random()*10);
        }

       var data =  $('<td></td>').html((rowNum*10+colNum)+'<br>'+'<img src="'+imagePaths[imageId]+'">');		
       row.append(data);	
       colNum++;
     }	 
    table.append(row);
    rowNum++;
  } 
 
 $('#pics').append(table);
}

function showImage()
{
 $('#pics').html("");
 $('#pics').removeClass(); 
 $('#pics').addClass('center');
 $('#next_btn').removeClass();

 $('#next_btn').addClass("hideMe"); 
 $('#rules').addClass("hideMe"); 
 $('#pics').html('The image you obtained is: <br>'+'<img src="'+imagePaths[num]+'">');
}
