// CCIC Website Interactive Scripts
$(document).ready(function() {
  // Left-Side Navigation Drawer Controls
  function openLeftDrawer() {
    $('#left-nav-drawer').addClass('open');
    $('#left-drawer-backdrop').addClass('open');
    $('body').addClass('drawer-open');
  }

  function closeLeftDrawer() {
    $('#left-nav-drawer').removeClass('open');
    $('#left-drawer-backdrop').removeClass('open');
    $('body').removeClass('drawer-open');
  }

  $(document).on('click', '#mobile-menu-btn, .mobile-menu-btn-left, .open-left-drawer', function(e) {
    e.preventDefault();
    openLeftDrawer();
  });

  $(document).on('click', '#close-drawer-btn, #left-drawer-backdrop', function(e) {
    e.preventDefault();
    closeLeftDrawer();
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeLeftDrawer();
    }
  });

  // Close drawer when clicking any link inside it
  $('#left-nav-drawer a').on('click', function() {
    closeLeftDrawer();
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

  // Gallery category filter tabs
  $('.gallery-filter-btn').on('click', function() {
    $('.gallery-filter-btn').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).data('filter');
    
    if (filter === 'all') {
      $('.gallery-item-col').fadeIn(250);
    } else {
      $('.gallery-item-col').hide();
      $('.gallery-item-col[data-category="' + filter + '"]').fadeIn(250);
    }
  });

  // Gallery image preview modal click
  $('.gallery-card').on('click', function(e) {
    var imgSrc = $(this).find('img').attr('src');
    var title = $(this).find('.gallery-card-title').text();
    var badge = $(this).find('.gallery-badge').text();
    var desc = $(this).attr('data-description') || '';
    
    $('#galleryModalImg').attr('src', imgSrc);
    $('#galleryModalTitle').text(title);
    $('#galleryModalBadge').text(badge);
    $('#galleryModalDesc').text(desc);
    $('#galleryModal').modal('show');
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
