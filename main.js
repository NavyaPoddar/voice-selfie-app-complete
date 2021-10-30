var SpeechRecognition = window.webkitSpeechRecognition;
// linked google speech recognition model//

var myselfietaker = new SpeechRecognition();
// made my speech recognition using googles modle//
function start(){

    document.getElementById("textbox").innerHTML = "";
    myselfietaker.start();

}
// understanding is a variable which stores whatever myselfietaker has understood//
 myselfietaker.onresult=function run (event){
     
    console.log(event);
    var myspeech = event.results[0][0].transcript; 
    
    console.log(myspeech);
    if (myspeech == "take my selfie"){
        console.log("taking selfie");
        speak();
        takingselfie();
        save();
    }

    document.getElementById("textbox").innerHTML = myspeech;
    

 }

 function speak(){

     texttospeechmodel = window.speechSynthesis;
     speakthis = "taking your selfie"
     myspeaker = new SpeechSynthesisUtterance(speakthis);
     texttospeechmodel.speak(myspeaker);

     Webcam.attach(camera);

 }

Webcam.set({

    width : 400 ,
    height : 260 ,
    image_format : "png" ,
    png_quality : 100 
});

camera = document.getElementById("mywebcam");

function takingselfie(){
    Webcam.snap(function(imgurl){
        document.getElementById("myselfie").innerHTML = '<img id="imgselfie" src ="' + imgurl + '">' ;
    });
}

function save() {
   ancorlink = document.getElementById("link");
   selfie = document.getElementById("imgselfie").src;
   ancorlink.href = selfie;
   ancorlink.click();
}