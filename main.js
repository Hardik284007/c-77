var images=["dad.jpg","bache.png","girl.jpg","mother image.jpg"]
var names=["John Parker","Peter Parker","Mary Parker","Niki Parker"]
var i = 0;
function update() {
i++;
var number_family_array=4;
if(i>number_family_array)
{
    i=0;
} 
var updated_image=images[i];
var updated_name=names[i];
document.getElementById("image").src=updated_image;
document.getElementById("name").innerHTML=updated_name;
}