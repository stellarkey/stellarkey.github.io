var image_num = 1;
var src="/images/emoji/0.jpg";
function changeImage()
{
	
    src="./images/emoji/"+ image_num.toString() +".jpg";
    console.log(src);
    image_num = (image_num + 1) % 50;
}

changeImage();
changeImage();
changeImage();
changeImage();
changeImage();
