/**
 * Created by yang on 2015/10/15.
 */
angular.module('ng-notify', []).service('notify', function() {
    return function(options, cb) {
        var _opt = options;
        if (angular.isString(options)) {
            _opt = { body: options };

        }
        var notify = new Notification(_opt.title, {
            icon: _opt.icon,
            body: _opt.body
        });

        notify.onclick = cb;
    };
});