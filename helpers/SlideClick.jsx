export function SlideLeft(slide) {
  var slider = document.getElementById(slide);
  slider.scrollLeft = slider.scrollLeft - 500;
}
export function SlideRight(slide) {
  var slider = document.getElementById(slide);
  slider.scrollLeft = slider.scrollLeft + 500;
}
