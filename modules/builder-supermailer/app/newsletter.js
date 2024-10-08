/**
 * @package   Meral YOOtheme Pro SuperMailer
 * @author    Necati Meral https://meral.cloud
 * @source    https://meral.cloud
 * @copyright Copyright (C) Meral IT, DE
 * @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
 */

(function (e) {
    "use strict";
    e.on("body", "submit", ".js-form-supermailer", (r) => {
        r.preventDefault();
        const t = r.target,
            n = e.$(".message", t);
        e.addClass(n, "uk-hidden"),
            fetch(t.action, { method: "post", body: new FormData(t) }).then((s) => {
                s.json().then(
                    (a) => {
                        if (s.ok) {
                            const { message: d, redirect: c } = a;
                            d ? (o(d), t.reset()) : c ? (window.location.href = c) : o("Invalid response.", !0);
                        } else o(a, !0);
                    },
                    () => o(s.statusText, !0)
                );
            });
        function o(s, a) {
            e.removeClass(n, "uk-hidden uk-text-danger"), e.addClass(n, `uk-text-${a ? "danger" : "success"}`), (n.innerText = s);
        }
    });
})(UIkit.util);

