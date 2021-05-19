

    // var myImages = new Array("assets/iceland.jpg",
    //                         "assets/japan.jpg",
    //                         "assets/nepal.jpg", 
    //                         "assets/newZealand.jpg", 
    //                         "assets/oman", 
    //                         "assets/paris", 
    //                         "assets/peru", 
    //                         "assets/russia", 
    //                         "assets/tanzania", 
    //                         "assets/yosemite");

    // function generateImage() {
    //     var randomNum = Math.floor(Math.random() * myImages.length);
    //     document.getElementById("myPicture").src = myImages[randomNum];
    // }



//     function display_random_image() 
// {
//      var theImages = [{
//         src: "assets/iceland.jpg",
//         width: "240",
//         height: "160"
//     }, {
//         src: "assets/japan.jpg",
//         width: "320",
//         height: "195"
//     }, {
//         src: "assets/nepal.jpg",
//         width: "500",
//         height: "343"
//     }];
    
//     var preBuffer = [];
//     for (var i = 0, j = theImages.length; i < j; i++) {
//         preBuffer[i] = new Image();
//         preBuffer[i].src = theImages[i].src;
//         preBuffer[i].width = theImages[i].width;
//         preBuffer[i].height = theImages[i].height;
//     }
   
// // create random image number
//   function getRandomInt(min,max) 
//     {
//       //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
// imn = Math.floor(Math.random() * (max - min + 1)) + min;
//     return preBuffer[imn];
//     }  

// // 0 is first image,   preBuffer.length - 1) is  last image
  
// var newImage = getRandomInt(0, preBuffer.length - 1);
 
// // remove the previous images
// var images = document.getElementsByTagName('img');
// var l = images.length;
// for (var p = 0; p < l; p++) {
//     images[0].parentNode.removeChild(images[0]);
// }
// // display the image  
// document.body.appendChild(newImage);
// }
