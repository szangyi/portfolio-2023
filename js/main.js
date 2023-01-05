// SIDEMENU
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});




// FLIP
document.getElementById('flip-card').addEventListener('click', function() {
    document.getElementById('flip-card').classList.toggle('flipped');
});




// NAME TEXT ANIMATION
function moveName() {
    var textWrapper = document.querySelector('.namep .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    setTimeout(() => {
        anime.timeline({ loop: false })
            .add({
                targets: '.namep .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            })
    }, 2000);
}

moveName(); 
setInterval(moveName, 10000);  // every 1 minute




// PROJECT TILES
var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});



// TRUNCATE PROJECT DESC

// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.substring(0, maxLength) + '...';
//   }
//   return str;


// }