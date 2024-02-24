


(function(){
    "using script";
    console.log('reading js');


    let form =document.querySelector('body');
    let madlib =document.querySelector("#madlib");
    

 

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const noun1 =document.getElementById('noun1').value;
        const verb1 =document.getElementById('verb1').value;
        const adj =document.getElementById('adj').value;
        const sound =document.getElementById('sound').value;
        const adverb =document.getElementById('adverb').value;
        const noun2 =document.getElementById('noun2').value;
        const verb2 =document.getElementById('verb2').value;




        let text =`You’ve been lost in ${noun1.toUpperCase()} National Forest for the past 2 days due to you wandering off the track. 
        Today, you have ${verb1.toLowerCase()} all day without finding the exit causing you to be ${adj.toLowerCase()} for the rest of the night.
        As you are about to fall asleep you hear a ${sound.toLowerCase()} sound and you ${adverb.toLowerCase()} turn your head toward the direction. 
        In your view there seems to be some sort of light and a faint ${noun2.toLowerCase()} noises coming from it.\n
        You got up and ${verb2.toLowerCase()} towards the light and saw some campers where eventually in the morning you followed them towards the exit. `;



        madlib.innerHTML = text;
        document.querySelector('#overlay').className = "showing";
        document.querySelector('.showing').className = "hidden";


        
        
    });





   


   



    






})();

