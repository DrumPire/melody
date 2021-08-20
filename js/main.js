$(document).ready(function () {

  let currentFloor = 2;
  const floorPath = $('.home-image path');
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const modal = $('.modal');
  const modalCloseButton = $('.modal-close-button');
  const viewFlatsButton = $('.view-flats');

  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

  counterUp.on('click', function () {
    if(currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on('click', function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  function toggleModal() {
    modal.toggleClass('is-open');
  };

});