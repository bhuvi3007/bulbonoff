function togglebulb() {
    const bulbImage=document.getElementById("bulb");
    const toggleSwitch=document.getElementById("toggle");
    if(toggleSwitch.checked) {
        bulbImage.src ="bulb-on.png";
    }
    else{
        bulbImage.src ="bulb-off.jpg";
    }
}