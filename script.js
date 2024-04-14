// Function to update the preview image and text
function upDate(previewPic) {
  // Log to check if the event is triggering
  console.log("Mouse over event triggered.");

  // Log information about the previewPic
  console.log("Alt: " + previewPic.alt);
  console.log("Source: " + previewPic.src);

  // Update the text of the element with the id of image
  document.getElementById("image").textContent = previewPic.alt;

  // Change the background image of the element with the id of image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

// Function to undo changes
function undo() {
  // Update the url for the background image back to the original value
  document.getElementById("image").style.backgroundImage = "url('')";
  
  // Update the text of the div with the id of image back to the original text
  document.getElementById("image").textContent = "Hover over an image below to display here.";
}
