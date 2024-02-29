function navigate() {
    query = document.getElementById("inpId").value;
    localStorage.setItem("query", query);
    window.location.pathname = "/buffer.html";
}