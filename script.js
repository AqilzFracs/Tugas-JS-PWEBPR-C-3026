document.getElementById("btn-yes").addEventListener("click", () => {
    document.getElementById("title").innerText = "Anda Berbohong!"
    document.getElementById("img").src = "assets/teknisi.svg"
    document.getElementById("box").style.backgroundColor = "#E12E2E"
    document.getElementById("text").innerText = "Anda adalah seorang Teknisi"
    document.getElementById("btn-group").style.visibility = "hidden"
})
document.getElementById("btn-no").addEventListener("click", () => {
    document.getElementById("title").innerText = "Anda Benar!"
    document.getElementById("img").src = "assets/mahasiswa.svg"
    document.getElementById("box").style.backgroundColor = "#6FD240"
    document.getElementById("text").innerText = "Anda adalah seorang Mahasiswa"
    document.getElementById("btn-group").style.visibility = "hidden"
})