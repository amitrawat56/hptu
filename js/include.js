$(function () {
    $("[include-html]").each(function () {
        var t = $(this).attr("include-html"),
            u = this.id;

        jQuery.ajax({
            url: t,
            success: function (response) {
                $("#" + u).html(response);
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ": " + xhr.statusText;
                $("#" + u).html(t + " - " + errorMessage);
            }
        });
    });
});
