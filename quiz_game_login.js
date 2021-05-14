function log_in() {
    var player1 = document.getElementById("n2").value;
    localStorage.setItem("name1", player1);
    var player2 = document.getElementById("n1").value;
    localStorage.setItem("name2", player2);
    window.location = "game_page.html";
}