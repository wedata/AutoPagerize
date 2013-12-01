$(function () {
  $.ajax('items.json', {
    type    : 'HEAD',
    success : function (data, textStatus, jqXHR) {
      var last_modified = jqXHR.getResponseHeader('Last-Modified');
      var $last_modified = $('#last_modified').append(new Date(last_modified));
    }
  });
});