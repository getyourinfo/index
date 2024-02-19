(function () {
    document.querySelector('#browser').textContent = (function () {
        const browsers = [
            [/OPR/i, 'Opera'],
            [/Flock/i, 'Flock'],
            [/Edge/i, 'Edge'],
            [/Edg/i, 'Edge'],
            [/Chrome/i, 'Chrome'],
            [/Opera.*?Version/i, 'Opera'],
            [/Opera/i, 'Opera'],
            [/MSIE/i, 'Internet Explorer'],
            [/Internet Explorer/i, 'Internet Explorer'],
            [/Trident.* rv/i, 'Internet Explorer'],
            [/trident/i, 'Internet Explorer'],
            [/Shiira/i, 'Shiira'],
            [/Firefox/i, 'Firefox'],
            [/Chimera/i, 'Chimera'],
            [/Phoenix/i, 'Phoenix'],
            [/Firebird/i, 'Firebird'],
            [/Camino/i, 'Camino'],
            [/Netscape/i, 'Netscape'],
            [/OmniWeb/i, 'OmniWeb'],
            [/Safari/i, 'Safari'],
            [/Mozilla/i, 'Mozilla'],
            [/Konqueror/i, 'Konqueror'],
            [/icab/i, 'iCab'],
            [/Lynx/i, 'Lynx'],
            [/Links/i, 'Links'],
            [/hotjava/i, 'HotJava'],
            [/amaya/i, 'Amaya'],
            [/IBrowse/i, 'IBrowse'],
            [/Maxthon/i, 'Maxthon'],
            [/Ubuntu/i, 'Ubuntu Web Browser'],
            [/mobile/i, 'Handheld Browser']
        ];
        for (let i = 0; i < browsers.length; i++) {
            if ((browsers[i][0]).test(navigator.userAgent)) return browsers[i][1];
        }
        return 'Unknown Browser';
    })();
    document.querySelector('#os').textContent = (function () {
        const platforms = [
            [/windows nt 10.0/i, 'Windows 10'],
            [/windows nt 10/i, 'Windows 10'],
            [/windows nt 6.3/i, 'Windows 8.1'],
            [/windows nt 6.2/i, 'Windows 8'],
            [/windows nt 6.1/i, 'Windows 7'],
            [/windows nt 6.0/i, 'Windows Vista'],
            [/windows nt 5.2/i, 'Windows 2003'],
            [/windows nt 5.1/i, 'Windows XP'],
            [/windows xp/i, 'Windows XP'],
            [/windows nt 5.0/i, 'Windows 2000'],
            [/windows me/i, 'Windows ME'],
            [/windows nt 4.0/i, 'Windows NT 4.0'],
            [/winnt4.0/i, 'Windows NT 4.0'],
            [/winnt 4.0/i, 'Windows NT'],
            [/winnt/i, 'Windows NT'],
            [/windows 98/i, 'Windows 98'],
            [/win98/i, 'Windows 98'],
            [/windows 95/i, 'Windows 95'],
            [/win95/i, 'Windows 95'],
            [/win16/i, 'Windows 3.11'],
            [/windows phone/i, 'Windows Phone'],
            [/windows/i, 'Unknown Windows OS'],
            [/android/i, 'Android'],
            [/blackberry/i, 'BlackBerry'],
            [/iphone/i, 'iOS Iphone'],
            [/ipad/i, 'iOS Ipad'],
            [/ipod/i, 'iOS Ipod'],
            [/os x/i, 'Mac OS X'],
            [/ppc mac/i, 'Power PC Mac'],
            [/freebsd/i, 'FreeBSD'],
            [/mac_powerpc/i, 'Mac OS 9'],
            [/ppc/i, 'Macintosh'],
            [/linux/i, 'Linux'],
            [/debian/i, 'Debian'],
            [/sunos/i, 'Sun Solaris'],
            [/beos/i, 'BeOS'],
            [/apachebench/i, 'ApacheBench'],
            [/aix/i, 'AIX'],
            [/irix/i, 'Irix'],
            [/osf/i, 'DEC OSF'],
            [/hp-ux/i, 'HP-UX'],
            [/netbsd/i, 'NetBSD'],
            [/bsdi/i, 'BSDi'],
            [/openbsd/i, 'OpenBSD'],
            [/gnu/i, 'GNU/Linux'],
            [/unix/i, 'Unknown Unix OS'],
            [/symbian/i, 'Symbian OS'],
            [/webos/i, 'webOS']
        ];
        for (let i = 0; i < platforms.length; i++) {
            if ((platforms[i][0]).test(navigator.userAgent)) return platforms[i][1];
        }
        return 'Unknown OS';
    })();
    (function (canvas) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width = document.body.offsetWidth;
        const h = canvas.height = document.body.offsetHeight;
        const ypos = Array(Math.floor(w / 20) + 1).fill(0);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
        setInterval(() => {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';
            ypos.forEach((y, ind) => {
                ctx.fillText(String.fromCharCode(Math.random() * 128), ind * 20, y);
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                else ypos[ind] = y + 20;
            });
        }, 50);
    })(document.querySelector('canvas'));
    if (document.referrer !== '') document.querySelector('#referer').textContent = document.referrer;
    function e8ufo_m3() {
        document.querySelector('#ip').parentElement.remove();
        document.querySelector('#country').parentElement.remove();
        document.querySelector('#region').parentElement.remove();
        document.querySelector('#city').parentElement.remove();
    }
    fetch('https://ipwhois.app/json/').then(e => e.json()).then(data => {
        if (data.success === false) {
            return e8ufo_m3();
        }
        document.querySelector('#ip').textContent = data.ip;
        document.querySelector('#country').textContent = data.country;
        document.querySelector('#region').textContent = data.region;
        document.querySelector('#city').textContent = data.city;
    }).catch(e => {
        e8ufo_m3();
    });
})();