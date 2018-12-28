// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', onModelReady);

function modelPredict(img){
  // The result tag in the HTML
  const result = document.getElementById('result');
  // The probability tag in the HTML
  const probability = document.getElementById('probability');
  
  // Make a prediction with the selected image
  // This will return an array with a default of 10 options with their probabilities
  classifier.predict(img, gotResults);
}

function gotResults(err, results){
  if(err){
    console.error(err);
  }
  
  //The results are in an array ordered by probability
  result.textContent = results[0].className;
  probability.textContent = (results[0].probability * 100).toFixed(1);
  //probability.textContent += "%";
}
  
function onModelReady(){
  console.log('Model Loaded!');
}

function uploadImage(){
  var input = document.querySelector("input");
  var img = input.files[0];
  
  var reader = new FileReader();
  reader.onload = function(e){
    var image = document.createElement("img");
    image.src = e.target.result;
    image.style.width="50%";
    image.style.height= "auto";
    document.body.appendChild(image);
  }
  reader.readAsDataURL(img);
  
  var file = IO.newFile(img);
  
  modelPredict(img);
}