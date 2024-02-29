srcId = localStorage.getItem("srcId");
console.log(srcId);
alert("SHARVIL SAYS : CANCEL OUT ANY ADS THAT MIGHT POP IN THE PLAYER UP BY CLICKING ON THE X IN THE CORNER OF THE PLAYER...");
alert("CLOSE ANY TABS THAT MIGHT OPEN AFTER CLICKING ON THE VIDEO PLAYER ELEMENTS...");
document.getElementById("watchframe").src = "https://vidsrc.xyz/embed/movie/" + srcId;