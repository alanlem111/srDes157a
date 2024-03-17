(function(){

    "using script";
    console.log('reading js');



    //Variables 
    const slideShowText = ['One of the three anchors use by the ship','Said to be a huanted piano located on the lobby', 'Red telephone booth', 'The ship captain quarter', 'Vintage radios'];
    let current_text =1;


    //Text change function
    function changeText(){
        document.getElementById('slide_texts').textContent = slideShowText[current_text];

        current_text++;

        if(current_text >slideShowText.length-1){ //go through the texts in the array
            current_text = 0;
        }   
    }


        
        //Variables 
        const slide =document.getElementById('gallery_highlight');
        const myImage =['picture1.png', 'picture2.png', 'picture3.png','picture4.png','picture5.png'];
        let currentImage =0;

        document.getElementById('next').addEventListener('click', nextPhoto);


        //next button
        function nextPhoto(){
            currentImage++;

            if (currentImage> myImage.length-1){
                currentImage =0; //go through the images in the array
            }

            slide.src = `images/${myImage[currentImage]}`;
            changeText(); //add text change function

        }








//end start
})();