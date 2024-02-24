(function(){
    "using script";
    console.log('reading js');



    const slideShowText = ['One of the three anchors use by the ship','Said to be a huanted piano located on the lobby', 'Red telephone booth', 'The ship captain quarter', 'Vintage radios'];
    let current_text =1;

    function changeText(){

        document.getElementById('slide_texts').textContent = slideShowText[current_text];

        current_text++;

        if(current_text >slideShowText.length-1){
            current_text = 0;
        }   
    }

  

    const slide =document.getElementById('slideshow')
    const myImage =['pic_1.png', 'pic_2.png', 'pic_3.png','pic_4.png','pic_5.png'];

    let currentImage =0;

    document.getElementById('next').addEventListener('click', nextPhoto);
    document.getElementById('previous').addEventListener('click', previousPhoto);


    function nextPhoto(){
        currentImage++;

        if (currentImage> myImage.length-1){
            currentImage =0;
        }
        slide.src = `images/${myImage[currentImage]}`;
        changeText();
    }


    // function previousPhoto(){
    //     currentImage--;
    //     if(currentImage<0){
    //         currentImage = myImage.length-1;
    //     }
    //     slide.src = `images/${myImage[currentImage]}`;
    //     changeBackText();
    
    // }






//ending 
})();