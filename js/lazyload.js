/**
 * @author Shaumik Daityari
 * @copyright Copyright © 2013 All rights reserved.
 */

var lazyload = lazyload || {};

(function($, lazyload) {

    "use strict";

    var page = 2,
        buttonId = "#fbtn",
        loadingId = "#loading-div",
        container = "#data-container";

    lazyload.load = function() {

        var url = "./" + page + ".html";

        $(buttonId).hide();
        $(loadingId).show(slow);

        $.ajax({
  url: url,
  beforeSend: function() {
    $(loadingId).text("Загрузка...");
  },
  success: function(response) {
    if (!response || typeof response === 'string' && response.trim() === "NONE") {
      $(buttonId).fadeOut("fast");
      $(loadingId).text("Больше записей для загрузки нет.");
      return;
    }
    appendContents(response); // Исправлено: Contests → Contents
    $(loadingId).text(""); // Очищаем сообщение после успешной загрузки
  },
  error: function(xhr, status, error) {
    console.error("AJAX error:", status, error);
    $(loadingId).text(
      "Извините, произошла ошибка при обработке запроса. Пожалуйста, обновите страницу."
    );
  },
  complete: function() {
    // Дополнительные действия после завершения запроса (успех/ошибка)
  }
});

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show(slow);
        $(loadingId).hide();

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);