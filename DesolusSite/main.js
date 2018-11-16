// parallax

window.addEventListener('scroll', function(event) {
    const topDistance = this.pageYOffset; 
    const layers = document.querySelectorAll("[data-type='parallax']");
    
    for (let layer of Array.from(layers)) {
      const depth = layer.getAttribute('data-depth');
      const movement = -(topDistance * depth);
      const translate3d = `translate3d(0, ${movement}px, 0)`;
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

  // navigation

window.onscroll = function(){
    scrollFunction()
}
function scrollFunction(){
    var sn = document.getElementById("sticky_nav");
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            sn.style.top = "0"
        }
        else{
            sn.style.top = "-45px"
        }
}

function openList(x){
    var cL = document.getElementsByClassName("content_list");
    var i;
        for(i = 0; i < cL.length; i++){
            var OcL = cL[i];
              if(cL[i] != document.getElementById("thisList_" + x)){
                  OcL.classList.remove("show_list")
              }
        }
    document.getElementById("thisList_" + x).classList.toggle("show_list")
}


function openMenu(){
    document.getElementById("thisMenu").classList.toggle("show_menu");
    document.getElementById("btnMenu").getElementsByTagName("i")[0].classList.toggle("hidden");
    document.getElementById("btnMenu").getElementsByTagName("i")[1].classList.toggle("visible")
}

// gallery 

(function () {
    var galleryLightbox = document.querySelector('.gallery-lightbox');
    var galleryItems = document.querySelectorAll('.gallery-item');
    var closeButton = document.querySelector('.gallery-button-close');
    var nextButton = document.querySelector('.gallery-button-next');
    var previousButton = document.querySelector('.gallery-button-previous');
  
    var galleryItemIndex = 0;
  
    function createGalleryNavigation() {
      var navigationItemHtml = '<li class="gallery-navigation-item"><a class="gallery-navigation-button"></a></li>';
    
      var navigation = document.querySelector('.gallery-navigation');
    
      for(var i = 0; i < galleryItems.length; i++) {
      navigation.innerHTML += navigationItemHtml;
      }
    }
  
    createGalleryNavigation();
  
    var navItems = document.querySelectorAll('.gallery-navigation-button');
  
    function showGallery() {
      galleryLightbox.style.display = 'block';
    }
  
    function hideGallery() {
      galleryLightbox.style.display = 'none';
    }
  
    function updateNavigation() {
      for(var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
      }
    
      navItems[galleryItemIndex].classList.add('active');
    }
  
    function showImage() {
      var imageUrl = galleryItems[galleryItemIndex].getAttribute('gallery-full-image');
    
      var img = document.createElement('img');
      img.src = imageUrl;
      img.className = 'openItem';
    
      var galleryContent = document.querySelector('.gallery-content');
      var oldImage = galleryContent.querySelector('img');
      if (oldImage) {
        galleryContent.removeChild(oldImage);
      }
    
      galleryContent.appendChild(img);
    
      updateNavigation();
    }
  
    function getItemIndex(items, item) {
      return Array.from(items).indexOf(item);
    }
  
    function onGalleryItemClick(event) {
      var clickedGalleryItem = event.currentTarget;
    
      showGallery();
      galleryItemIndex = getItemIndex(galleryItems, clickedGalleryItem);
      showImage();
    }
  
    for(var i = 0; i < galleryItems.length; i++) {
      galleryItems[i].addEventListener('click', onGalleryItemClick);
    }
  
    function onCloseButtonClick() {
      hideGallery();
    }
  
    closeButton.addEventListener('click', onCloseButtonClick);
  
    function onNextButtonClick() {
      galleryItemIndex++;
      if (galleryItemIndex === galleryItems.length) {
        galleryItemIndex = 0;
      }
      showImage();
    }
  
    nextButton.addEventListener('click', onNextButtonClick);
  
  
    function onPreviousButtonClick() {
      galleryItemIndex--;
      if (galleryItemIndex === -1) {
        galleryItemIndex = galleryItems.length - 1;
      }
      showImage();
    }
  
    previousButton.addEventListener('click', onPreviousButtonClick);
  
    function onNavigationButtonClick(event) {
      var clickedNavigationItem = event.currentTarget;
    
      galleryItemIndex = getItemIndex(navItems, clickedNavigationItem);
      showImage();
    }
  
    for(var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener('click', onNavigationButtonClick);
    }
    
    
    function onKeyUp(event) {
      if (event.which === 27) {
        //Escape key up
        hideGallery();
        
      } else if (event.which === 39) {
        //Arrow right key up
        onNextButtonClick();
        
      } else if (event.which === 37) {
        //Arrow left key up
        onPreviousButtonClick();
        
      }
    }
    
    
    
    document.body.addEventListener('keyup', onKeyUp);
  
  }());
  
  


  
  