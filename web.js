
/*so this is for image slider............*/


var images = ["img/product1.jpg","img/image2.jpg","img/catagory3.jpg","img/category2.jpg","img/slider (1).jpg"];

var x = 0;
var imgs = document.getElementById('img');
setInterval(slider, 2000);

function slider() {

  if (x < images.length) 
  {
    x = x + 1;
  } 

  else 
  {
    x =0;
  }


  imgs.innerHTML = "<img src=" + images[x-1] + ">";
}

/*....................this is for form validataion................*/


function validateForm(){
  var password = document.getElementById('password').value;



  if (password.length <=6){
    alert("too short password");
  }

}
/*..........................this is for Research page..................*/






