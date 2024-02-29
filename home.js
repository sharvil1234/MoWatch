function navigate() {
    query = document.getElementById("inpId").value;
    localStorage.setItem("query", query);
    window.location.replace = "https://sharvil1234.github.io/MoWatch/buffer.html";
}