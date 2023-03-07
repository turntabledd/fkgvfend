function parseParameters(e, r, o) {
    if (void 0 === o) {
        var n = "function" == typeof e;
        r ? (o = r, n || (r = null)) : void 0 === r && n && (o = e, e = null, r = null), void 0 !== r && n && (r = e, e = null)
    }
    return {
        options: e = e || Object.create(null),
        onProgress: r,
        onComplete: o
    }
}

function downloadFile(e, r, o, n) {
    var {
        options: r,
        onProgress: o,
        onComplete: n
    } = parseParameters(r, o, n), s = new XMLHttpRequest, t = "download failed: " + e + ", status: ";
    if (s.open("GET", e, !0), void 0 !== r.responseType && (s.responseType = r.responseType), void 0 !== r.withCredentials && (s.withCredentials = r.withCredentials), void 0 !== r.mimeType && s.overrideMimeType && s.overrideMimeType(r.mimeType), void 0 !== r.timeout && (s.timeout = r.timeout), r.header)
        for (var i in r.header) s.setRequestHeader(i, r.header[i]);
    return s.onload = function() {
        if (200 === s.status || 0 === s.status) {
            var o = "@@@ADW@@@%%";
            if ("blob" == r.responseType) {
                var i = new FileReader;
                i.onload = function() {
                    var t = i.result;
                    if (o == t) {
                        var a = s.response.slice(o.length);
                        cc.sys.capabilities.imageBitmap && cc.macro.ALLOW_IMAGE_BITMAP ? n && n(null, a) : downloadDomImage(window.URL.createObjectURL(a), r, n)
                    } else cc.sys.capabilities.imageBitmap && cc.macro.ALLOW_IMAGE_BITMAP ? n && n(null, s.response) : downloadDomImage(e, r, n)
                }, i.readAsText(s.response.slice(0, o.length))
            }
            if ("arraybuffer" == r.responseType) {
                var a = s.response.slice(0, o.length);
                if (a = String.fromCharCode.apply(null, new Uint8Array(a)), o == a) {
                    var l = s.response.slice(o.length),
                        p = new Uint8Array(l);
                    for (k in p) p[k] = 1 ^ p[k];
                    n && n(null, p.buffer)
                } else n && n(null, s.response)
            }
        } else n && n(new Error(t + s.status + "(no response)"))
    }, o && (s.onprogress = function(e) {
        e.lengthComputable && o(e.loaded, e.total)
    }), s.onerror = function() {
        n && n(new Error(t + s.status + "(error)"))
    }, s.ontimeout = function() {
        n && n(new Error(t + s.status + "(time out)"))
    }, s.onabort = function() {
        n && n(new Error(t + s.status + "(abort)"))
    }, s.send(null), s
}

function downloadDomImage(e, r, o) {
    var {
        options: r,
        onComplete: o
    } = parseParameters(r, void 0, o), n = new Image;

    function s() {
        n.removeEventListener("load", s), n.removeEventListener("error", t), o && o(null, n)
    }

    function t() {
        n.removeEventListener("load", s), n.removeEventListener("error", t), o && o(new Error(cc.debug.getError(4930, e)))
    }
    return "file:" !== window.location.protocol && (n.crossOrigin = "anonymous"), n.addEventListener("load", s), n.addEventListener("error", t), n.src = e, n
}
if (cc.sys.isBrowser) {
    let e = cc.assetManager.downloader;

    function unzipFile(e, r, o) {
        r.responseType = "arraybuffer";
        let n = null;
        n = -1 !== e.indexOf(".pkm") ? e.replace(".pkm", ".aaa") : e.replace(".pvr", ".iii"), cc.assetManager.downloader.downloadFile(n, r, r.onFileProgress, function(e, r) {
            JSZip.loadAsync(r).then(e => {
                for (var r in e.files) {
                    e.files[r].async("uint8array").then(e => o(null, e));
                    break
                }
            })
        })
    }
    e.register(".png", (e, r, o) => {
        r.responseType = "blob", downloadFile(e, r, r.onFileProgress, o)
    }), e.register(".mp3", (e, r, o) => {
        r.responseType = "arraybuffer", downloadFile(e, r, r.onFileProgress, o)
    });
    let r = [".pvr", ".pkm"];
    for (let o of r) e.register(o, unzipFile)
}