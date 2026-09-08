// CCIC Website Interactive Scripts
$(document).ready(function() {
  // Mobile Dropdown Navigation Menu Controls
  function toggleMobileDropdown() {
    var $menu = $('#mobile-dropdown-menu');
    var $btn = $('#mobile-menu-btn');
    var isVisible = $menu.is(':visible');

    if (isVisible) {
      $menu.stop(true, true).slideUp(220);
      $btn.removeClass('open').attr('aria-expanded', 'false');
    } else {
      $menu.stop(true, true).slideDown(220);
      $btn.addClass('open').attr('aria-expanded', 'true');
    }
  }

  function closeMobileDropdown() {
    var $menu = $('#mobile-dropdown-menu');
    var $btn = $('#mobile-menu-btn');
    if ($menu.is(':visible')) {
      $menu.stop(true, true).slideUp(200);
      $btn.removeClass('open').attr('aria-expanded', 'false');
    }
  }

  $(document).on('click', '#mobile-menu-btn, .mobile-menu-btn-left', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileDropdown();
  });

  // Close dropdown when clicking outside of mobile menu bar
  $(document).on('click', function(e) {
    if (!$(e.target).closest('#mobile-menu-bar').length) {
      closeMobileDropdown();
    }
  });

  // Close dropdown on Escape key
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeMobileDropdown();
    }
  });

  // Close dropdown when clicking any navigation link inside it
  $(document).on('click', '#mobile-dropdown-menu .mobile-dropdown-nav a', function() {
    closeMobileDropdown();
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
