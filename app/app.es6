// move index.html to output folder
import main from './components/Main/main.es6';
import menu from './components/Menu/menu.es6';
import histogram from './components/histogram/histogram.es6';
import coverflow from './components/coverflow/coverflow.es6';
import splitView from './components/splitView/splitView.es6';

let active = 0;

// do this when page loads
window.onload = () => {
  init();
  setNavigation();
};


function init() {
  // Initial setup

  // Load main view
  $('.main_container').load('components/Main/main.html', () => {
    main();
  });

  // Load menu
  /*$('.menu_container').load('components/Menu/menu.html', () => {
    menu();
  });*/
}


function setNavigation() {
  // navigate to home. Replace all html in main_container.
  // id for home is 0
  $('#home-nav').on('click', () => {
    if(active != 0) {
      removeActiveClasses();
      $('#home-nav').addClass('active');
      $('.main_container').empty();
      $('.main_container').load('components/Main/main.html', () => {
        main();
      });
      active = 0;   // set this as active
    }
  });

  // navigate to histogram. Replace all html in main_container
  // id for histogram is 2
  $('#histogram-nav').on('click', () => {
    if(active != 2) {
      removeActiveClasses();
      $('#histogram-nav').addClass('active');
      $('.main_container').empty();
      $('.main_container').load('components/histogram/histogram.html', () => {
        	histogram();
      });
      active = 2;  // set this as active
    }
  });

  // navigate to coverflow x-ray. Replace all html in main_container
  // id for coverflow is 3
  $('#coverflow-nav').on('click', () => {
    if(active != 3) {
      removeActiveClasses();
      $('#coverflow-nav').addClass('active');
      $('.main_container').empty();
      $('.main_container').load('components/coverflow/coverflow.html', () => {
        coverflow();
      });
      active = 3;
    }
  });

  // navigate to splitView rendering. Replace all html in main_container
  // id for splitView is 4
  $('#splitView-nav').on('click', () => {
    if(active != 4) {
      removeActiveClasses();
      $('#splitView-nav').addClass('active');
      $('.main_container').empty();
      $('.main_container').load('components/splitView/splitView.html', () => {
        splitView();
      });
      active = 4;
    }
  });
}


function removeActiveClasses() {
  $('#home-nav').removeClass('active');
  $('#histogram-nav').removeClass('active');
  $('#coverflow-nav').removeClass('active');
  $('#splitView-nav').removeClass('active');
}
