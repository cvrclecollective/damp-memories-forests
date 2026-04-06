let pendingText = null;

function activateText() {
  const val = document.getElementById("textInput").value;
  if (val) {
    pendingText = val;
    mode = "text";
  }
}
