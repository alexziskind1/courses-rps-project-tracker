import * as application from "application";
import * as platform from 'platform';
import * as utils from "utils/utils";

declare var UIStatusBarStyle: any;
declare var UIApplication: any;


export function setStatusBarColors() {
    if (platform.isIOS) {
        application.on(application.launchEvent, () => {
            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
        });
    } else if (platform.isAndroid) {

    }
}
