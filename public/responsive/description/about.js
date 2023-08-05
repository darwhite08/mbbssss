function  moreLessfunctionKey() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var moreLessLink = document.getElementById("showMoreLess");
    var btnArrow = document.getElementById("aboutUsTrigger"); 

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreLessLink.innerHTML = "Read More"
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        moreLessLink.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
}