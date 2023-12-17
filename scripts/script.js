$(function () {
  $('.input_cont>input').on('input', function () {
    $(this).siblings('.cross').addClass('_active');
  });

  $('.cross').on('click', function () {
    $(this).siblings('input').val('');
    $(this).removeClass('_active');
  });

  $('.loc_item').on('click', function () {
    $(this).parent().parent().parent().addClass('_active');
  });

  $('.drop_down_title').on('click', function () {
    $(this).siblings('.drop_down_body').toggleClass('_active');
  });

  $('._drop_close').on('click', function () {
    $(this).parent().parent().parent().removeClass('_active');
    $(this).parent().parent().siblings('.drop_down_body').removeClass('_active');
  });
});
