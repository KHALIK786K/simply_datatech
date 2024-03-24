try { 
	webengage.onReady(function () {
            webengage.notification.onOpen(function (data) {
                if (data.notificationId === '3177671c' || data.notificationId === '22a357335') {
                    webengage.util.withWeJquery(function () {
                        $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.promoCode').click(function (e) {

                            $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('.promoCode').removeClass('offerCodeDisabled');
                            e.target.classList.add('offerCodeDisabled');
                           e.target.innerText = "COPIED";
                            var data = e.target.parentElement;
                            var el = data.getElementsByClassName('dealName');
                            var dealText = el[0].innerText;
                            navigator.clipboard.writeText(dealText);

                        });
                    });
                }

            });
        });
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '8eda483');
	 }
 }
