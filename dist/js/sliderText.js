function SelectedOffice(a) {
  var label = a.value;


    if (label=="OpenOfice2") {
       document.getElementById("BlockOfice2").style.display='block';
   		document.getElementById("BlockOfice1").style.display='none';
   		} else {

   		document.getElementById("BlockOfice1").style.display='block';
   		document.getElementById("BlockOfice2").style.display='none';
   	}


}

function SelectedApartment(a) {
  var label = a.value;


    if (label=="Open1") {
       document.getElementById("Block1").style.display='block';
   		document.getElementById("Block2").style.display='none';
   		document.getElementById("Block3").style.display='none';}

    else if (label=="Open2"){
       document.getElementById("Block2").style.display='block';
   		document.getElementById("Block1").style.display='none';
   		document.getElementById("Block3").style.display='none';}

   	else if (label=="Open3"){
       document.getElementById("Block3").style.display='block';
   		document.getElementById("Block1").style.display='none';
   		document.getElementById("Block2").style.display='none';}
}



function SelectedIam(a) {
  var label=a.value;
  if (label=="myEntity") {
      document.getElementById("Work2").style.display='block';
      document.getElementById("Work1").style.display='none';
  }
  else{
      document.getElementById("Work1").style.display='block';
      document.getElementById("Work2").style.display='none';
  }
}

function SelectedProfession(a) {
  var label=a.value;
  if (label=="prof1") {
       document.getElementById("profession1").style.display='block';
      document.getElementById("profession2").style.display='none';
      document.getElementById("profession3").style.display='none';}

    else if (label=="prof2"){
       document.getElementById("profession2").style.display='block';
      document.getElementById("profession1").style.display='none';
      document.getElementById("profession3").style.display='none';}

    else if (label=="prof3"){
       document.getElementById("profession3").style.display='block';
      document.getElementById("profession1").style.display='none';
      document.getElementById("profession2").style.display='none';}
}