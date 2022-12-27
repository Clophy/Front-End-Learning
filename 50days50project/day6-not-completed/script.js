const BOX = document.querySelectorAll(".box")

/*BURADA SCROLL AŞAĞIYA DOĞRU GİTTİĞİNDE İÇERİKLER LİSTELENECEK YUKARIYA DOĞRU GİTTİĞİNDE İÇERİKLER KAYBOLACAK */
window.addEventListener("scroll", e=>{
    BOX.forEach(item => item.classList.add("show"))
})