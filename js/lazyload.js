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
        $(loadingId).show("slow");

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).fadeOut("slow");
                    $(loadingId).text("No more entries to load!");
                    return;
                }
                appendContests(response);
            },
            // error: function(response) {
            //     $(loadingId).text("Извините, произошла ошибка при обработке запроса. Пожалуйста, обновите страницу.");
            // }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show("slow");
        $(loadingId).hide("slow");

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);