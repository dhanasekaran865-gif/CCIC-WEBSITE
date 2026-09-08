// CCIC Website Interactive Scripts

function initCCICMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-dropdown-menu");

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("is-open");
  };

  const openMenu = () => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.classList.add("is-open");
  };

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (menu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !menu.hidden &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCCICMobileMenu);
} else {
  initCCICMobileMenu();
}

$(document).ready(function() {
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
