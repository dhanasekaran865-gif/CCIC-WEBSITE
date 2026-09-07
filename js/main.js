// CCIC Website Interactive Scripts
$(document).ready(function() {
  // Mobile drawer toggle
  $('#mobile-menu-btn').on('click', function() {
    $('.mobile-nav-drawer').slideToggle(200);
  });

  // Smooth scroll to top
  $('#top-link-block a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // Show/hide back-to-top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#top-link-block').fadeIn();
    } else {
      $('#top-link-block').fadeOut();
    }
  });

  // Cohort filter tabs on Magic Members page
  $('.cohort-tab-btn').on('click', function() {
    $('.cohort-tab-btn').removeClass('active');
    $(this).addClass('active');
    var target = $(this).data('filter');
    
    if (target === 'all') {
      $('.cohort-group').fadeIn(250);
    } else {
      $('.cohort-group').hide();
      $('#cohort-' + target).fadeIn(250);
    }
  });

  // Interactive contact form submission simulation
  $('#ccicContactForm').on('submit', function(e) {
    e.preventDefault();
    var btn = $(this).find('button[type="submit"]');
    var originalText = btn.html();
    btn.html('<i class="fa fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
    setTimeout(function() {
      $('#formSuccessAlert').slideDown();
      btn.html('<i class="fa fa-check"></i> Message Sent!').removeClass('btn-ccic').addClass('btn-success');
      $('#ccicContactForm')[0].reset();
      setTimeout(function() {
        btn.html(originalText).removeClass('btn-success').addClass('btn-ccic').prop('disabled', false);
      }, 4000);
    }, 1000);
  });
});

function openBrochureModal(imgSrc, title) {
  $('#brochureModalImg').attr('src', imgSrc);
  $('#brochureModalTitle').text(title);
  $('#downloadBrochureBtn').attr('href', imgSrc);
  $('#brochureModal').modal('show');
}
