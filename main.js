var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang="es-MX"

var Textbox = document.getElementById("textbox")


function start(){
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event){
    console.log(event);

    var Content = event.results[0][0].transcript
    console.log(Content)

    Textbox.innerHTML = Content;

    if(Content == "Viva Mexico"){
        console.log("lo lograste, Viva México")
        speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;

    //speak_data = Textbox.value;
    speak_data = "Tomando tu selfie";
     
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    
    setTimeout(function(){
        take_selfie();
        save();
    },5000);
}

camera=document.getElementById("camera");
Webcam.set({
    with: 360,
    height:250,
    image_format:"png",
    png_quality: 90
});

function take_selfie(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}