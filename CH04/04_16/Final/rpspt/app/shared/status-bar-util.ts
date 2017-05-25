import * as application from "application";
import * as platform from 'platform';
import * as utils from "utils/utils";

declare var android: any;
declare var UIStatusBarStyle: any;
declare var UIApplication: any;

export function setStatusBarColors() {
    if (platform.isIOS) {
        application.on(application.launchEvent, () => {
            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
        });
    } else if (platform.isAndroid) {
        application.android.onActivityStarted = function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                const View = android.view.View;
                const window = application.android.startActivity.getWindow();
                window.setStatusBarColor(0x000000);

                const decorView = window.getDecorView();
                decorView.setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        };
    }
}