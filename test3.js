var console_origin_log = window.console.log;
var json_data = localStorage.getItem('json_rules');
window.guest_count = 0;
window.host_count = 0;
window.default_threshold = 1;
window.console.log = function (ele) {
    origin = '';
    let code_origin = new Error().stack.match(/https?:\/\/[^:]+/g);
    if (code_origin && code_origin.length) {
        origin = new URL(code_origin[0]).host;
        if (origin === 'cdn.jsdelivr.net') {
            if (window.guest_count < 2) {
                console_origin_log.apply(this, [ele]);
                window.guest_count++;
            } else {
                if (origin === 'test.localhost.com' && window.host_count < 4) {
                    console_origin_log.apply(this, [ele]);
                    window.host_count++;
                }
            }

        } else {
            if (origin === 'test.localhost.com' && window.host_count < 4) {
                console_origin_log.apply(this, [ele]);
                window.host_count++;
            }
        }
    }
}
console.log('Hello World from host 1');

console.log('Hello World from host 2');

console.log('Hello World from host 3');

console.log('Hello World from host 4');

console.log('Hello World from host 5');
