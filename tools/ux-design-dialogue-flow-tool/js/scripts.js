$( document ).ready(function() {
  // Add a new user row when user clicks on #new-user-row button
  $("#new-user-row").click(function() {
    $('<div class="row row-user" draggable="false"><div class="col-md-8 col-md-offset-2"><a class="toggle toggle-neutral"><i class="fa fa-users"></i></a><span class="avatar avatar-user neutral"></span><p class="message message-user" contenteditable="true"></p><a class="delete"><i class="fa fa-close"></i></a></div></div>').appendTo("#user-flow");
    $('html, body').animate({
      scrollTop: '+=1500px'
    }, 600);
  });

  // Add a new app row when user clicks on #new-app-row button
  $("#new-app-row").click(function() {
    $('<div class="row row-app"  draggable="false"><div class="col-md-8 col-md-offset-2"><p class="message message-app" contenteditable="true"></p><a class="toggle toggle-neutral"><i class="fa fa-users"></i></a><span class="avatar avatar-app neutral"></span><a class="delete"><i class="fa fa-close"></i></a></div></div>').appendTo("#user-flow");
    $('html, body').animate({
      scrollTop: '+=1500px'
    }, 600);
  });

  // Remove row when user clicks .delete
  $('#user-flow').on('click', '.delete', function() {
    $(this).closest('.row').remove();
  });

  // Activate tooltip
  $('body').tooltip({
    selector: '[rel=tooltip]'
  });

  // Toggle the avatar when clicking the .toggle button
  $('#user-flow').on('click', '.toggle.toggle-positive', function() {
    event.preventDefault();
    $(this).addClass('toggle-negative').removeClass('toggle-positive');
    $(this).next('.avatar.positive').addClass('.negative').removeClass('.positive');
  });
  $('#user-flow').on('click', '.toggle.toggle-negative', function() {
    event.preventDefault();
    $(this).addClass('toggle-neutral').removeClass('toggle-negative');
    $(this).next('.avatar.negative').addClass('.neutral').removeClass('.negative');
  });
  $('#user-flow').on('click', '.toggle.toggle-neutral', function() {
    event.preventDefault();
    $(this).addClass('toggle-positive').removeClass('toggle-neutral');
    $(this).next('.avatar.neutral').addClass('.positive').removeClass('.neutral');
  });
});
