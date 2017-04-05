
sliderId.counter = 0;
function sliderId(){return sliderId.counter++;}

function Slider(containerId){
  // Init
  this.id = sliderId();
  this.rootElement = document.getElementById(containerId);
  let panel = this.rootElement.getElementsByClassName('panel')[0],
      modalBody = this.rootElement.firstElementChild,
      controls = this.rootElement.getElementsByClassName('controls')[0],
      scene = this.rootElement.getElementsByClassName('scene')[0],
      imageContainer = panel.getElementsByClassName('mouseslider')[0],
      currentImage,
      containerNaturalHeight = modalBody.clientHeight+'px',
      containerNaturalTop = modalBody.offsetTop+'px',
      timeStamp = 0; // False animation action prevent

  // Linkback
  panel.linkback =
  controls.linkback =
  window['slider_'+this.id] = this;

  // Crutches
  imageContainer.style.width = Array.from(imageContainer.children).reduce((sum, x) => sum += x.clientWidth, 0)+'px';


  // Actions
  this.activate = function(){
    modalBody.style.height =
    this.rootElement.style.height = containerNaturalHeight;
    modalBody.style.top = containerNaturalTop;
    eval('setTimeout(function(){ let block = window.slider_'+this.id+'.rootElement; block.classList.add("active"); block.firstElementChild.style.top = 0+"px"; block.firstElementChild.style.height = 100+"vh" }, 10);');
  }
  this.deactivate = function(){
    modalBody.style.height =
    this.rootElement.style.height = containerNaturalHeight;
    modalBody.style.top = containerNaturalTop;
    this.rootElement.classList.remove('active');
  }
  this.setSceneImage = function(targetImage){
    if ((timeStamp+3) > UnixTimeStamp() || ( scene.firstElementChild && targetImage.src == scene.firstElementChild.src || targetImage.localName != 'img')) return;
    timeStamp = UnixTimeStamp();
    currentImage = targetImage;
    Array.from(imageContainer.children).forEach(function(item){
      item.className = (item.src == targetImage.src) ? 'selected' : '';
    })
    let image = createExtendedElement('img', {
      classList:'new',
      src: targetImage.src
    });
    if (scene.firstElementChild) {
      scene.firstElementChild.className = 'old';
      window.removeElement = scene.firstElementChild;
      setTimeout(function(){window.removeElement.remove()}, 300);
    }
    scene.appendChild(image);
  }
  this.nextSceneImage = function(e){
    this.setSceneImage(currentImage.nextElementSibling);
  }
  this.prevSceneImage = function(e){
    this.setSceneImage(currentImage.previousElementSibling);
  }

  // Creating eventcontrollers
  panel.onmousemove = function(e){
    let move = (imageContainer.clientWidth > this.clientWidth)
      ? (imageContainer.clientWidth - this.clientWidth)*e.pageX/this.clientWidth*-1
      : (this.clientWidth - imageContainer.clientWidth)/2;
    imageContainer.style.transform = 'translateX('+move+'px)';
  }
  panel.onclick = function(e){
    // ModalMode off
    if(!this.linkback.rootElement.classList.contains('active')){
      this.linkback.activate();
    }
    this.linkback.setSceneImage(e.target);
  }
  // ControlPanel events
  controls.getElementsByClassName('prev')[0].onclick = function(){this.parentElement.linkback.prevSceneImage()};
  controls.getElementsByClassName('next')[0].onclick = function(){this.parentElement.linkback.nextSceneImage()};
  controls.getElementsByClassName('close')[0].onclick = function(){this.parentElement.linkback.deactivate()};

}
