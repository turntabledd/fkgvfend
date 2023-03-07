window.__require = function e(t, i, n) {
    function r(a, s) {
        if (!i[a]) {
            if (!t[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var f = "function" == typeof __require && __require;
                    if (!s && f) return f(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var h = i[a] = {
                exports: {}
            };
            t[a][0].call(h.exports, function(e) {
                return r(t[a][1][e] || e)
            }, h, h.exports, e, t, i, n)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
    return r
}({
    AdvertUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d5f10qs+OBKMZd2W7hkz7s7", "AdvertUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.AdvertUI = void 0;
        var o = e("../../base/common/MessageMgr"),
            a = e("../../base/common/SpecialFunc"),
            s = e("../config/Config"),
            c = e("../../base/SoundMgr"),
            f = e("../../base/common/view/PageView"),
            h = e("../../base/res/DyncLoadedBase"),
            u = e("../../base/res/DyncMgr"),
            d = e("../../base/res/LanguageMgr"),
            l = e("../../base/LogicMgr"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._guanggao = [], t
                }
                return r(t, e), t.prototype.resetParams = function(e) {
                    for (var t, i = this, n = [], r = function(e) {
                            var t = cc.instantiate(a.nodeInfo.root);
                            n.push(t), t.on(l.ConstDefine.click, function() {
                                i.pgClick(e)
                            })
                        }, a = this, c = 0; c < s.Config.guangGao.length; c++) r(c);
                    this.nodeInfo.root.active = !1;
                    var h = {
                        root: e,
                        contents: n,
                        audoPlay: !0
                    };
                    this._loopPgView = new f.LoopTogglePageView(h), (t = this._guanggao).push.apply(t, s.Config.guangGao);
                    var u = this._guanggao[0],
                        d = this._guanggao[this._guanggao.length - 1];
                    this._guanggao.unshift(d), this._guanggao.push(u), o.MessageMgr.on(o.MessageName.ChangeLang, this.changeLang, this), this.changeLang()
                }, t.prototype.pgClick = function(e) {
                    c.default.playEffect(l.ConstDefine.click), u.default.getResInfo("bigAdvertUI", e)
                }, t.prototype.changeLang = function() {
                    for (var e = s.Config.configPath + "lang/" + d.default.currLang + "/advert/", t = e + "tag/", i = 0; i < this._guanggao.length; i++) {
                        var n = this._loopPgView.contents[i],
                            r = this._guanggao[i],
                            o = n.getChildByName(l.ConstDefine.Background).getComponent(cc.Sprite);
                        a.default.setRemoteSpt(e, l.ConstDefine.ad, r, o);
                        var c = l.default.kpKeyCfg[r];
                        if (c && void 0 !== c.t) {
                            var f = n.getChildByName("tag").getComponent(cc.Sprite);
                            a.default.setRemoteSpt(t, l.ConstDefine.tag, c.t, f)
                        }
                    }
                }, t
            }(h.default);
        i.AdvertUI = p, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/PageView": "PageView",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/DyncMgr": "DyncMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "../config/Config": "Config"
    }],
    BigAdvertUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "23bf9jq1hJI2Lw1HidDp8d/", "BigAdvertUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../../base/common/view/PageView"),
            a = e("../../base/common/SpecialFunc"),
            s = e("../config/Config"),
            c = e("../../base/net/GameNet"),
            f = e("../../base/SoundMgr"),
            h = e("../../base/common/view/Tip"),
            u = e("../../base/LogicMgr"),
            d = e("../../base/common/Interface"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("close").on(u.ConstDefine.click, this.close, this);
                    var t = this._popupMethod.root.getChildByName("offsetX"),
                        i = t.getChildByName("title");
                    this._titleChildren = i.children;
                    for (var n = 0, r = this._titleChildren; n < r.length; n++) {
                        var o = r[n];
                        o.opacity = 0, o.active = !0
                    }
                    this._playNow = t.getChildByName("playNow"), this._playNow.active = !1, this._playNow.on(u.ConstDefine.click, this.playNowClick.bind(this)), this._pgNode = t.getChildByName("pageView");
                    for (var c = this._pgNode.getComponent(cc.PageView), f = this._pgNode.getChildByName("prefab"), h = 0; h < s.Config.guangGao.length; h++) {
                        var d = s.Config.guangGao[h],
                            l = cc.instantiate(f);
                        c.addPage(l), a.default.setRemoteSpt(s.Config.configPath + "bigAdvertUI/", u.ConstDefine.bad, d, l.getComponent(cc.Sprite))
                    }
                    f.destroy(), this.showInfo(0)
                }, t.prototype.resetParams = function(t) {
                    if (e.prototype.resetParams.call(this), ++t, this._togglePageView) this._nodeInfo.root.active = !0, this._togglePageView.toggleRoll(t, !1);
                    else {
                        var i = {
                            root: this._pgNode,
                            finishCall: function(e) {
                                e.toggleRoll(t, !1);
                                var i = e.pgView.content.children,
                                    n = i[0],
                                    r = i[i.length - 1];
                                a.default.setRemoteSpt(s.Config.configPath + "bigAdvertUI/", u.ConstDefine.bad, s.Config.guangGao[s.Config.guangGao.length - 1], n.getComponent(cc.Sprite)), a.default.setRemoteSpt(s.Config.configPath + "bigAdvertUI/", u.ConstDefine.bad, s.Config.guangGao[0], r.getComponent(cc.Sprite))
                            },
                            pgChangeCall: this.showInfo.bind(this)
                        };
                        this._togglePageView = new o.LoopTogglePageView(i)
                    }
                }, t.prototype.showInfo = function(e) {
                    if (this._lastIndex !== e) {
                        this._lastShowTitle && (this._lastShowTitle.opacity = 0), this._lastIndex = e;
                        var t = this.getKpCfg();
                        void 0 !== t ? void 0 !== t.t ? (this._lastShowTitle = this._titleChildren[t.t], this._lastShowTitle.opacity = 255, t.t < d.GameTag.comingSoon ? this._playNow.active = !0 : this._playNow.active = !1) : (this._lastShowTitle = null, this._playNow.active = !0) : (this._lastShowTitle = null, this._playNow.active = !1)
                    }
                }, t.prototype.playNowClick = function() {
                    f.default.playEffect(u.ConstDefine.click), c.default.startGame(this.getKpCfg())
                }, t.prototype.getKpCfg = function() {
                    var e = s.Config.guangGao[this._lastIndex],
                        t = u.default.kpKeyCfg[e];
                    return void 0 === t && (t = u.default.bigGG[e]), t
                }, t
            }(h.PopupBase);
        i.default = l, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Interface": "Interface",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/PageView": "PageView",
        "../../base/common/view/Tip": "Tip",
        "../../base/net/GameNet": "GameNet",
        "../config/Config": "Config"
    }],
    BufferPool: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e7b0346HrZBLaGZMODdtM5E", "BufferPool"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.BufferPool = void 0;
        var n = function() {
            function e(e) {
                this.buffer = new Array, this.using = new Array, this._createFunc = e
            }
            return e.prototype.allocate = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i = this.buffer.length > 0 ? this.buffer.pop() : this._createFunc.apply(this, e);
                return this.using.push(i), i
            }, e.prototype.fastRecycleByIndex = function(e) {
                this.buffer.push(this.using[e]), cc.js.array.fastRemoveAt(this.using, e)
            }, e.prototype.recycleByIndex = function(e) {
                this.buffer.push(this.using[e]), this.using.splice(e, 1)
            }, e.prototype.recycle = function(e) {
                var t = this.using.findIndex(function(t) {
                    return e === t
                });
                this.fastRecycleByIndex(t)
            }, e.prototype.clear = function() {
                var e;
                (e = this.buffer).push.apply(e, this.using), this.using.length = 0
            }, e
        }();
        i.BufferPool = n, cc._RF.pop()
    }, {}],
    CardUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4b3c8VGGd5K9I7dtrryIM78", "CardUI"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../../base/common/Func"),
            r = e("../config/Config"),
            o = e("../../base/net/GameNet"),
            a = e("../../base/res/DyncMgr"),
            s = e("../../base/res/LanguageMgr"),
            c = e("../../base/SoundMgr"),
            f = e("../../base/common/Interface"),
            h = e("../../base/common/MessageMgr"),
            u = e("../../base/LogicMgr"),
            d = function() {
                function e(e) {
                    this._loadIcon = !1, this._root = e, this._favNode = e.getChildByName("fav"), this._favNode.active = !1, this._favBgNode = this._favNode.getChildByName(u.ConstDefine.Background), this._toggle = this._favNode.getComponent(cc.Toggle), this._favNode.on("toggle", this.toggleClick.bind(this)), this._looseAnim = e.getChildByName("loose").getComponent(cc.Animation), this._looseAnim.play(this._looseAnim.defaultClip.name, n.default.randomNum(0, this._looseAnim.defaultClip.duration)), this._streamerAnim = e.getChildByName("streamer").getComponent(cc.Animation), this._tagChildren = e.getChildByName("tag").children;
                    for (var t = 0; t < this._tagChildren.length; t++) this._tagChildren[t].active = !1;
                    this._nameNode = e.getChildByName("name"), this._nameNode.active = !0, this._nameLabel = this._nameNode.getComponent(cc.Label), this._nameLabel.string = "";
                    var i = e.getChildByName("logo");
                    this._loadingNode = i.getChildByName("loading"), this._loadingNode.active = !0, i.on(u.ConstDefine.click, this.click.bind(this)), this._logoBgNode = i.getChildByName(u.ConstDefine.Background), this._logoAnim = this._logoBgNode.getComponent(cc.Animation), this._logoSpt = this._logoBgNode.getComponent(cc.Sprite);
                    var r = e.getChildByName("icon");
                    this._iconSpt = r.getComponent(cc.Sprite)
                }
                return Object.defineProperty(e.prototype, "cfg", {
                    get: function() {
                        return this._cfg
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.click = function() {
                    if (0 !== this._root.opacity) {
                        if (this._favNode.active) return this._toggle.isChecked ? this._toggle.uncheck() : this._toggle.check(), void this.toggleClick();
                        if (u.default.login.needReset) a.default.getResInfo(u.ConstDefine.msgTip, s.default.procLangText("changePwdTip"), 5);
                        else {
                            if (!r.Config.testAcccount) {
                                if (this._cfg.t === f.GameTag.comingSoon) return void a.default.getResInfo(u.ConstDefine.msgTip, s.default.procLangText("commingTip"));
                                if (-1 !== u.default.msgNotify.maintenance.indexOf(this._cfg.gid) || -1 !== u.default.msgNotify.maintenance.indexOf(-1)) return void a.default.getResInfo(u.ConstDefine.msgTip, s.default.procLangText("maintenanceTip"))
                            }
                            this._logoAnim.play(), o.default.startGame(this._cfg)
                        }
                    }
                }, e.prototype.toggleClick = function() {
                    0 !== this._root.opacity && (c.default.playEffect("favorite"), this._toggle.isChecked ? (e.FavCards.push(this.cfg), u.default.favArr.push(this.cfg.gid), this._favBgNode.active = !1) : (cc.js.array.remove(e.FavCards, this._cfg), cc.js.array.remove(u.default.favArr, this._cfg.gid), this._favBgNode.active = !0), this._cfg.fav = !this._favBgNode.active, h.MessageMgr.emit(h.MessageName.UpdateFavCards, this), localStorage.setItem(u.default.login.userID + "_favArrStr", JSON.stringify(u.default.favArr)))
                }, e.prototype.init = function(e) {
                    this.reset(e)
                }, e.prototype.reset = function(e) {
                    this._loadingNode.opacity = 255, e.card = this, this._cfg = e;
                    for (var t = 0; t < this._tagChildren.length; ++t) this._tagChildren[t].active = e.t == t;
                    if (r.Config.testAcccount) {
                        this._nameNode.opacity = 255;
                        var i = this.cfg.address ? "" : "\nNo Table";
                        this._nameLabel.string = this.cfg.title + i
                    } else this._nameNode.opacity = 0;
                    this.cfg.autoEnter && this.click(), e.fav ? (this._toggle.check(), this._favBgNode.active = !1) : (this._toggle.uncheck(), this._favBgNode.active = !0), this._iconSpt.spriteFrame = null, this._logoSpt.spriteFrame = null
                }, e.prototype.setFavActive = function(e) {
                    this._favNode.active = e
                }, e.prototype.setParent = function(e) {
                    this._root.setParent(e)
                }, e.prototype.setActive = function(e) {
                    e ? (this._root.opacity = 255, this._looseAnim.play(this._looseAnim.defaultClip.name, n.default.randomNum(0, this._looseAnim.defaultClip.duration)), this._streamerAnim.play()) : (this._root.opacity = 0, this._looseAnim.stop(), this._streamerAnim.stop())
                }, e.prototype.setLogoSpt = function() {
                    this._logoSpt.spriteFrame = this._cfg.logoSpt, this._loadingNode.opacity = 0
                }, e.prototype.setIconSpt = function() {
                    this._iconSpt.spriteFrame = this._cfg.iconSpt
                }, e
            }();
        i.default = d, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/Interface": "Interface",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/net/GameNet": "GameNet",
        "../../base/res/DyncMgr": "DyncMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "../config/Config": "Config"
    }],
    Config: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a5de3fnj6JL75w3b+3z86bZ", "Config"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.AdaptLevel = i.Config = void 0, i.Config = {
                debug: !0,
                autoLogin: !1,
                autoEnterGame: void 0,
                testAcFormat: void 0,
                testAcccount: !1,
                pcUseSoftKey: !0,
                iframe: !1,
                basePath: "",
                configPath: "",
                platName: "firekirin",
                version: "2.0.1",
                bsIp: "39.108.84.119",
                wsPort: 8600,
                wsUrl: "",
                bsPort: 8580,
                bsUrl: "",
                gmUrl: void 0,
                prizeNum: 20,
                prize1: [0, 3, 13, 50, 200, 0, 7, 20, 100, 400, 0, 5, 15, 75, 300, 0, 10, 25, 150, 500],
                jpRollVal: [
                    [15e4, 17e4, 26e4, 28e4],
                    [5e4, 6e4, 9e4, 1e5],
                    [1e4, 1e4, 5e4, 5e4],
                    [2e3, 2e3, 1e4, 1e4]
                ],
                wsProtocol: "wl",
                defaultLang: "en",
                usingLang: ["en"],
                decimalPlaces: 2,
                decimal: 100,
                accPwdMinLength: 6,
                accPwdMaxLength: 32,
                beginPage: "loginUI",
                outScreenPos: void 0,
                center: [640, 360],
                gameSize: [1280, 720],
                dyncBundleUrl: [{
                    url: "dync"
                }],
                dyncLoadDirIndex: {
                    headIcon: 0,
                    beautyLogo: 0,
                    loginUI: 0,
                    jackPot: 0,
                    hallUI: 0,
                    advert: 0
                },
                soundCfg: {
                    load: {
                        click: {
                            norecycle: !0
                        }
                    }
                },
                guangGao: [],
                bigGG: [],
                kapian: [],
                testGames: []
            },
            function(e) {
                e[e.hallUI = 0] = "hallUI", e[e.loginUI = 1] = "loginUI", e[e.jpUI = 2] = "jpUI", e[e.msgTip = 3] = "msgTip", e[e.msgTip2 = 4] = "msgTip2", e[e.clickTip = 5] = "clickTip", e[e.keyboardUI = 6] = "keyboardUI", e[e.loadTip = 7] = "loadTip", e[e.bounderyMask = 8] = "bounderyMask", e[e.debug = 9] = "debug", e[e.num = 10] = "num"
            }(i.AdaptLevel || (i.AdaptLevel = {})), i.Config.outScreenPos = cc.v2(12800, 7200), cc._RF.pop()
    }, {}],
    CustomScrollView: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "abb4cMq1jZPUZwG6hDCr2qt", "CustomScrollView"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.CustomScrollView = void 0;
        var n = function() {
            function e() {}
            return e.addScrollBarExtra = function(e) {
                var t = e.getComponent(cc.ScrollView),
                    i = e;
                i._bubblingListeners = i._capturingListeners, i._capturingListeners = void 0;
                var n = t.verticalScrollBar,
                    r = !1,
                    o = n.handle.node,
                    a = o.parent.getContentSize();

                function s(e) {
                    var t = e.getContentSize(),
                        i = 0,
                        n = 0;
                    return a.height > t.height && (i = a.height / 2 - t.height, n = -a.height / 2), {
                        minY: n,
                        maxY: i
                    }
                }
                o.on(cc.Node.EventType.TOUCH_START, function(e) {
                    r = !0, e.stopPropagation()
                }), o.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    if (r) {
                        var i = e.target,
                            n = s(i),
                            o = n.minY,
                            a = n.maxY;
                        i.y += e.getDeltaY(), i.y > a ? i.y = a : i.y < o && (i.y = o), e.stopPropagation();
                        var c = (i.y - o) / (a - o),
                            f = t.getMaxScrollOffset();
                        f.y *= 1 - c, f.y += t._topBoundary, t.setContentPosition(f)
                    }
                }), o.on(cc.Node.EventType.TOUCH_END, function(e) {
                    r = !1, e.stopPropagation()
                }), o.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    r = !1, e.stopPropagation()
                })
            }, e
        }();
        i.CustomScrollView = n, cc._RF.pop()
    }, {}],
    DebugMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e8f99efeudFLboa8n1x31iq", "DebugMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../common/MessageMgr"),
            a = e("../../my/config/Config"),
            s = e("../res/DyncLoadedBase"),
            c = e("../res/DyncMgr"),
            f = e("../net/EEvent"),
            h = e("../common/Func"),
            u = e("../LogicMgr"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._touchPos = cc.Vec2.ZERO, t
                }
                return r(t, e), t.prototype.initParams = function() {
                    this._rootNode = this.nodeInfo.root.getChildByName("root"), this._rootNode.getChildByName(u.ConstDefine.close).on("click", this.closeClick, this), this._rootNode.getChildByName("openDailyBonus").on(u.ConstDefine.click, function() {
                        c.default.getResInfo(u.ConstDefine.rollPrize)
                    }), this._rootNode.getChildByName("testDailyBonus").on(u.ConstDefine.click, function() {
                        var e = a.Config.prize1[h.default.randomInt(0, a.Config.prizeNum - 1)];
                        o.MessageMgr.emit(o.MessageName.NetMsg, {
                            mainID: f.Cmd.MDM_MB_LOGON,
                            subID: f.Cmd.SUB_MB_LOGON_CHOUJIANG_RESULT,
                            data: {
                                result: 0,
                                lotteryscore: e
                            }
                        })
                    }), o.MessageMgr.on(o.MessageName.TouchStart, this.touchStart, this), o.MessageMgr.on(o.MessageName.TouchEnd, this.touchEnd, this), this.closeClick()
                }, t.prototype.closeClick = function() {
                    cc.debug.setDisplayStats(!1), this._rootNode.active = !1, window.vConsole && (window.vConsole.$dom.style.display = "none")
                }, t.prototype.touchStart = function(e) {
                    a.Config.debug && this._touchPos.set(e.getLocation())
                }, t.prototype.touchEnd = function(e) {
                    a.Config.debug && this._touchPos.x < 10 && e.getLocation().x - this._touchPos.x > 30 && (this._rootNode.active = !0, cc.debug.setDisplayStats(!0), window.vConsole && (window.vConsole.$dom.style.display = "inline"))
                }, t
            }(s.default);
        i.default = d, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../LogicMgr": "LogicMgr",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr",
        "../net/EEvent": "EEvent",
        "../res/DyncLoadedBase": "DyncLoadedBase",
        "../res/DyncMgr": "DyncMgr"
    }],
    DyncAnimPlay: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6f4e6UBD7lDRYnvztavSTsI", "DyncAnimPlay");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.WebAnim = void 0;
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.initParams = function() {
                e.prototype.initParams.call(this), this._anims = this._nodeInfo.root.getComponentsInChildren(cc.Animation);
                for (var t = 0, i = 0, n = this._anims; i < n.length; i++) {
                    var r = n[i].defaultClip.duration;
                    r > t && (t = r)
                }
                this._playTime = 1e3 * (t + .2)
            }, t.prototype.resetParams = function(t, i, n) {
                var r = this;
                e.prototype.resetParams.call(this);
                for (var o = 0, a = this._anims; o < a.length; o++) a[o].play();
                this._nodeInfo.root.setPosition(t), null != i && (this._nodeInfo.root.scale = i), null != n && (this._nodeInfo.root.angle = n), setTimeout(function() {
                    r.hide()
                }, this._playTime)
            }, t
        }(e("./DyncLoadedBase").default);
        i.default = o;
        var a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.resetParams = function(t) {
                e.prototype.resetParams.call(this, t)
            }, t
        }(o);
        i.WebAnim = a, cc._RF.pop()
    }, {
        "./DyncLoadedBase": "DyncLoadedBase"
    }],
    DyncInfo: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8bf76NT3plNgoZbeWjHUKW2", "DyncInfo");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                var n = Array(e),
                    r = 0;
                for (t = 0; t < i; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.MulNodeInfo = i.SingleNodeInfo = i.DyncResInfo = i.DyncInstanceInfo = i.DyncNodeInfo = void 0;
        var a = e("../common/BufferPool"),
            s = e("../common/view/NodeHandle"),
            c = e("../LevelMgr"),
            f = e("../LogicMgr"),
            h = e("./DyncMgr"),
            u = e("./LanguageMgr"),
            d = function() {
                function e(e) {
                    this.cfg = e, this._nodeHanle = s.createNodeHandle(e.handle)
                }
                return e.prototype.init = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    e.active = !0, this.root = e, this.setParentNode()
                }, e.prototype.reset = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._nodeHanle.reset(this.root)
                }, e.prototype.clear = function() {
                    this._nodeHanle.clear(this.root)
                }, e.prototype.destory = function() {
                    cc.isValid(this.root) && (this.root.destroy(), this.root = null)
                }, e.prototype.setParentNode = function() {
                    void 0 !== this.cfg.layer && c.default.Instance.setLevel(this.root, this.cfg.layer)
                }, e
            }();
        i.DyncNodeInfo = d;
        var l = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n.dyncLoadedBase = new t.class(i, n), n
            }
            return r(t, e), t.prototype.init = function(t) {
                for (var i, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                e.prototype.init.call(this, t), this.dyncLoadedBase.initParams(), (i = this.dyncLoadedBase).resetParams.apply(i, n)
            }, t.prototype.reset = function() {
                for (var t, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                (this._nodeHanle.isReset(this.root) || this.dyncLoadedBase.isReset()) && (t = this.dyncLoadedBase).resetParams.apply(t, i), e.prototype.reset.call(this)
            }, t.prototype.clear = function() {
                e.prototype.clear.call(this), this.dyncLoadedBase.clear()
            }, t.prototype.destory = function() {
                e.prototype.destory.call(this), this.dyncLoadedBase.destroy()
            }, t
        }(d);

        function p(e, t) {
            return void 0 === e && (e = {}), e.class ? new l(e, t) : new d(e, t)
        }
        i.DyncInstanceInfo = l;
        var g = function() {
                function e() {}
                return e.prototype.load = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    return new Promise(function(i) {
                        h.default.bundles[e.cfg.loadIndex].load(e.cfg.path, e.cfg.loadType, function(n, r) {
                            e.cfg.loadingTip && h.default.hide(f.ConstDefine.loadingTip), n ? (console.warn("\u52a0\u8f7d\u8d44\u6e90\u5931\u8d25", e.name), i(null)) : (e.asset !== r ? (e.asset = r, r.addRef(), e.loadCall.apply(e, o([!0], t))) : e.loadCall.apply(e, o([!1], t)), i(e))
                        })
                    })
                }, e
            }(),
            b = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i._cfg = t, i._basePath = t.path, i
                }
                return r(t, e), t.prototype.changePath = function(e) {
                    this._lastLangName = e, this._cfg.path = "lang/" + this._lastLangName + "/" + this._basePath
                }, t.prototype.load = function(t) {
                    for (var i = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    return new Promise(function(r) {
                        i._lastLangName !== u.default.currLang && (i.changePath(u.default.currLang), t.destroy()), e.prototype.load.apply(i, o([t], n)).then(function(a) {
                            null === a ? (i.changePath(u.default.defaultLang), r(e.prototype.load.apply(i, o([t], n)))) : r(a)
                        })
                    })
                }, t
            }(g),
            m = function() {
                function e(e, t) {
                    this.name = t, this.cfg = e, this.asset = null, e.loadMode ? this.loadMode = new b(e) : this.loadMode = new g(e), void 0 === this.cfg.loadType && (this.cfg.loadType = cc.Prefab), void 0 === this.cfg.loadIndex && (this.cfg.loadIndex = 0)
                }
                return e.prototype.load = function() {
                    for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    return new Promise(function(i) {
                        var n;
                        e.asset ? i(e) : (e.cfg.loadingTip && h.default.getResInfo(f.ConstDefine.loadingTip), i((n = e.loadMode).load.apply(n, o([e], t))))
                    })
                }, e.prototype.loadCall = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    e && !this.canShow && h.default.hide(this.name)
                }, e.prototype.clear = function() {}, e.prototype.destroy = function() {
                    this.asset && (this.asset.decRef(), this.asset = null)
                }, e
            }();
        i.DyncResInfo = m;
        var y = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n.nodeInfo = p(t.nodeCfg, i), n
            }
            return r(t, e), t.prototype.load = function() {
                for (var t = this, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                return new Promise(function(n) {
                    var r;
                    t.asset ? ((r = t.nodeInfo).reset.apply(r, i), n(t)) : n(e.prototype.load.apply(t, i))
                })
            }, t.prototype.loadCall = function(t) {
                for (var i, n, r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
                t ? (i = this.nodeInfo).init.apply(i, o([cc.instantiate(this.asset)], r)) : (n = this.nodeInfo).reset.apply(n, r), e.prototype.loadCall.call(this, t)
            }, t.prototype.clear = function() {
                this.nodeInfo.clear()
            }, t.prototype.destroy = function() {
                this.nodeInfo.destory(), e.prototype.destroy.call(this)
            }, t
        }(m);
        i.SingleNodeInfo = y;
        var _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._invailNodeInfo = [], t._nodePoolMgr = new a.BufferPool(p), t
            }
            return r(t, e), t.prototype.load = function() {
                for (var t = this, i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                return new Promise(function(n) {
                    if (t.asset) {
                        var r = t._nodePoolMgr.allocate(t.cfg.nodeCfg, t.name);
                        r.root ? r.reset.apply(r, i) : r.init.apply(r, o([cc.instantiate(t.asset)], i)), n(t)
                    } else n(e.prototype.load.apply(t, i))
                })
            }, t.prototype.loadCall = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                var n = null;
                (n = this._invailNodeInfo.length > 0 ? this._invailNodeInfo.pop() : p(this.cfg.nodeCfg, this.name)).init.apply(n, o([cc.instantiate(this.asset)], t)), this._nodePoolMgr.using.push(n)
            }, t.prototype.clear = function(e) {
                this._nodePoolMgr.recycle(e), e.clear()
            }, t.prototype.destroy = function(t) {
                t.destory();
                var i = this._nodePoolMgr.using,
                    n = i.findIndex(function(e) {
                        return e === t
                    }); - 1 === n && (n = this._nodePoolMgr.buffer.findIndex(function(e) {
                    return e === t
                })), this._invailNodeInfo.push(i[n]), cc.js.array.fastRemoveAt(i, n), i.length <= 0 && this._nodePoolMgr.buffer.length <= 0 && e.prototype.destroy.call(this)
            }, t.prototype.getCurNodeInfo = function() {
                var e = this._nodePoolMgr.using;
                return e[e.length - 1]
            }, t
        }(m);
        i.MulNodeInfo = _, cc._RF.pop()
    }, {
        "../LevelMgr": "LevelMgr",
        "../LogicMgr": "LogicMgr",
        "../common/BufferPool": "BufferPool",
        "../common/view/NodeHandle": "NodeHandle",
        "./DyncMgr": "DyncMgr",
        "./LanguageMgr": "LanguageMgr"
    }],
    DyncLoadedBase: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3b3c6DwlLZIGr07l9dvroHP", "DyncLoadedBase");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.DyncLangNode = i.DyncLangSprite = i.DyncSetParent = i.DyncSetSprite = i.DyncScaleSmall = void 0;
        var o = e("../LogicMgr"),
            a = e("../ScreenMgr"),
            s = e("../SoundMgr"),
            c = e("./DyncMgr"),
            f = function() {
                function e(e, t) {
                    this._name = e, this._nodeInfo = t
                }
                return Object.defineProperty(e.prototype, "nodeInfo", {
                    get: function() {
                        return this._nodeInfo
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.initParams = function() {}, e.prototype.isReset = function() {
                    return !1
                }, e.prototype.resetParams = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }, e.prototype.clear = function() {}, e.prototype.destroy = function() {}, e.prototype.hide = function() {
                    c.default.hide(this._name, this._nodeInfo)
                }, e.prototype.close = function() {
                    s.default.playEffect(o.ConstDefine.click), this.hide()
                }, e
            }();
        i.default = f;
        var h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._scaleMode = a.ScreenMode.fitScreen, t
            }
            return r(t, e), t.prototype.initParams = function() {
                e.prototype.initParams.call(this), this._angleRoot = this._nodeInfo.root.children[0]
            }, t.prototype.resetParams = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.setScaleMode(a.default.Instance.curScale, a.default.Instance.screenMode)
            }, t.prototype.setScaleMode = function(e, t) {
                this._scaleMode != t && (this._nodeInfo.root.scaleX *= 1 / e.x, this._nodeInfo.root.scaleY *= 1 / e.y, this._scaleMode = t)
            }, t
        }(f);
        i.DyncScaleSmall = h;
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._spts = new Map, t
            }
            return r(t, e), t.prototype.initParams = function() {
                for (var e = 0, t = this._nodeInfo.root.children; e < t.length; e++) {
                    var i = t[e];
                    this._spts.set(i.name, i.getComponent(cc.Sprite).spriteFrame)
                }
                this._nodeInfo.root.active = !1
            }, t.prototype.resetParams = function(e, t) {
                e.getComponent(cc.Sprite).spriteFrame = this._spts.get(t || e.name)
            }, t.prototype.isReset = function() {
                return !0
            }, t
        }(f);
        i.DyncSetSprite = u;
        var d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.resetParams = function(e) {
                this._nodeInfo.root.setParent(e), this._nodeInfo.root.setPosition(o.ConstDefine.vec3ZERO)
            }, t
        }(f);
        i.DyncSetParent = d;
        var l = function() {
            function e(e) {
                e && this.init(e)
            }
            return e.prototype.init = function(e, t) {
                this._root = e, this._root.active = !1, this._spt = e.getComponent(cc.Sprite), this._resName = t || this._root.name
            }, e.prototype.start = function() {
                var e = this;
                this._root.active = !0, c.default.getResInfo(this._resName).then(function(t) {
                    !t && cc.error("\u83b7\u53d6\u8d44\u6e90\u5931\u8d25", e._resName), e._spt.spriteFrame = t.asset
                })
            }, e.prototype.end = function() {
                this._root && this._root.active && (this._root.active = !1, this._spt.spriteFrame = null, c.default.hide(this._resName))
            }, e.prototype.isShow = function() {
                return this._root.active
            }, e.prototype.playAnim = function() {
                this._root.getComponent(cc.Animation).play()
            }, e.prototype.setName = function(e) {
                this._resName = e
            }, e
        }();
        i.DyncLangSprite = l;
        var p = function() {
            function e(e) {
                this._initPos = e || o.ConstDefine.vec2ZERO
            }
            return Object.defineProperty(e.prototype, "root", {
                get: function() {
                    return this._root
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.start = function(e, t, i) {
                var n = this;
                c.default.getResInfo(e).then(function(e) {
                    e && (n._res = e.asset, n._root = cc.instantiate(e.asset), n._root.setParent(t), n._root.setPosition(n._initPos), i && i(n.root))
                })
            }, e.prototype.end = function() {
                this._root && (this._root.destroy(), this._root = null, c.default.hide(this._res.name))
            }, e
        }();
        i.DyncLangNode = p, cc._RF.pop()
    }, {
        "../LogicMgr": "LogicMgr",
        "../ScreenMgr": "ScreenMgr",
        "../SoundMgr": "SoundMgr",
        "./DyncMgr": "DyncMgr"
    }],
    DyncMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bca0adhH1BHXo2Y/BC5zVsN", "DyncMgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../../my/config/MutabResCfg"),
            r = e("../common/BufferPool"),
            o = e("../common/Func"),
            a = e("../common/MessageMgr"),
            s = e("../../my/config/Config"),
            c = e("../SoundMgr"),
            f = e("./DyncInfo"),
            h = e("./ResCfg"),
            u = e("../common/SpecialFunc"),
            d = function() {
                function e() {
                    this.timeoutHandle = -1
                }
                return e.prototype.init = function(e, t, i) {
                    this.resInfo = t, this.arg1 = i, this.reset(e)
                }, e.prototype.reset = function(e) {
                    var t = this;
                    this.clear(), this.timeoutHandle = setTimeout(function() {
                        t.resInfo.destroy(t.arg1), e(t)
                    }, 3e4)
                }, e.prototype.clear = function() {
                    clearInterval(this.timeoutHandle)
                }, e
            }(),
            l = function() {
                function e() {}
                return Object.defineProperty(e, "bundles", {
                    get: function() {
                        return this._bundles
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e, "resInfoMap", {
                    get: function() {
                        return this._resInfoMap
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.init = function() {
                    var t = this,
                        i = 0,
                        r = function(r) {
                            var c = s.Config.dyncBundleUrl[r];
                            cc.assetManager.loadBundle(c.url, {
                                version: c.version
                            }, function(d, l) {
                                if (d) console.error("\u83b7\u53d6\u52a8\u6001\u8d44\u6e90bundle\u51fa\u9519", c.url);
                                else if (t._bundles[r] = l, ++i >= s.Config.dyncBundleUrl.length) {
                                    for (var p in o.default.mergeJSON(s.Config.dyncResCfg, n.DyncResCfg), n.DyncResCfg) {
                                        var g = n.DyncResCfg[p],
                                            b = null;
                                        switch (g.type) {
                                            case h.DyncInfoType.singleNode:
                                                b = new f.SingleNodeInfo(g, p);
                                                break;
                                            case h.DyncInfoType.mulNode:
                                                b = new f.MulNodeInfo(g, p);
                                                break;
                                            default:
                                                b = new f.DyncResInfo(g, p)
                                        }
                                        t._resInfoMap.set(p, b)
                                    }
                                    t.preloadRes(), a.MessageMgr.emit(a.MessageName.LoadDyncResFinish), u.default.isRotateDev() || e.getResInfo("pcFullScreenUI")
                                }
                            })
                        };
                    for (var c in s.Config.dyncBundleUrl) r(c)
                }, e.preloadRes = function() {
                    var e = this;
                    this._resInfoMap.forEach(function(t) {
                        t.cfg.preLoad && (e._bundles[t.cfg.loadIndex].load(t.cfg.path), t.cfg.preLoad = null)
                    })
                }, e.getResByClick = function(e) {
                    for (var t = this, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                    return new Promise(function(n) {
                        c.default.playEffect("anniu"), n(t.getResInfo(e, i))
                    })
                }, e.getResInfo = function(e) {
                    for (var t = this, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                    return new Promise(function(n) {
                        var r = t._resInfoMap.get(e);
                        !r && cc.error("\u6ca1\u6709\u8fd9\u6837\u7684\u8d44\u6e90\u540d", e), r.canShow = !0;
                        var o = t._waitForPoolMgr.using,
                            a = o.findIndex(function(e) {
                                return e.resInfo === r
                            });
                        a >= 0 && (o[a].clear(), t._waitForPoolMgr.fastRecycleByIndex(a)), n(r.load.apply(r, i))
                    })
                }, e.hide = function(e, t) {
                    var i = this._resInfoMap.get(e);
                    if (console.assert(null !== i, "\u9690\u85cf\u8d44\u6e90\u540d\u5b57\u65e0\u6548", e), null !== i.asset) {
                        switch (i.cfg.resMode) {
                            case h.DyncResMode.Once:
                                i.destroy(t);
                                break;
                            case h.DyncResMode.Controlled:
                                break;
                            case h.DyncResMode.Destroy:
                                i.destroy(t), this._resInfoMap.delete(e);
                                break;
                            case h.DyncResMode.Wait:
                                i.clear(t);
                                var n = this._waitForPoolMgr.using,
                                    r = n.findIndex(function(e) {
                                        return e.resInfo === i && e.arg1 === t
                                    }),
                                    o = this._waitForPoolMgr.recycle.bind(this._waitForPoolMgr);
                                r >= 0 ? n[r].reset(o) : this._waitForPoolMgr.allocate().init(o, i, t);
                                break;
                            default:
                                i.clear(t)
                        }
                        i.canShow = !1
                    } else i.canShow ? setTimeout(this.hide.bind(this), 2e3, e) : console.log("\u8c03\u7528\u9690\u85cf\u8d44\u6e90\u8fd8\u6ca1\u52a0\u8f7d", i.name)
                }, e.isLoad = function(e) {
                    return this._resInfoMap.get(e).canShow
                }, e._bundles = [], e._resInfoMap = new Map, e._waitForPoolMgr = new r.BufferPool(function() {
                    return new d
                }), e
            }();
        i.default = l, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../../my/config/MutabResCfg": "MutabResCfg",
        "../SoundMgr": "SoundMgr",
        "../common/BufferPool": "BufferPool",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr",
        "../common/SpecialFunc": "SpecialFunc",
        "./DyncInfo": "DyncInfo",
        "./ResCfg": "ResCfg"
    }],
    EEvent: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c1642sE+YpBNYrM3N0vO5pS", "EEvent"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Cmd = i.EEvent = void 0, i.EEvent = {
            NetMsg: 1,
            Login: 5,
            SwitchProgress: 16,
            P2G: 23,
            G2P: 24,
            Exception: 25,
            Game3rdNet: 27,
            HandShaked: 30,
            NetWorkSate: 31,
            login: 32,
            login2: 33,
            AskSync: 34,
            Sync: 35,
            Shot: 36,
            ShotFish: 37,
            KillFish: 38,
            FinishShot: 39,
            RoomBroadCast: 42,
            ToSelf: 43,
            PlayerOnLine: 44,
            LeaveTable: 45,
            FrameDrive: 46,
            AdjustCredit: 47,
            DebugSuanfa: 48,
            DebugMode: 49,
            KickAll: 50,
            ClearCreditBuff: 51,
            OnShot: 52,
            MakeSureSync: 53,
            UpdateShotTypeState: 54,
            HeartBeat: 55,
            BroadCastTip: 80,
            RqRechargeRes: 82,
            RqGameTimeTag: 83,
            StartGame: 101,
            EndGame: 102
        }, i.Cmd = {
            MDM_MB_LOGON: 100,
            SUB_MB_LOGON_WEBSOCKET: 6,
            SUB_MB_LOGON_RESULT: 116,
            SUB_MB_LOGON_CHANGEPASSWORD: 7,
            SUB_MB_CHANGEPASSWORD_RESULT: 117,
            SUB_MB_LOGON_GETRANKITEM: 8,
            SUB_MB_GETITEMRANK_RESULT: 118,
            SUB_MB_LOGON_GETJPRECORD: 9,
            SUB_MB_GETJPRECORD_RESULT: 119,
            SUB_MB_LOGON_GETJPSCORE: 10,
            SUB_MB_GETJPSCORE_RESULT: 120,
            SUB_MB_LOGON_GETGAMESERVER: 11,
            SUB_MB_GETGAMESERVER_RESULT: 122,
            SUB_MB_LOGON_CHOUJIANG: 16,
            SUB_MB_LOGON_CHOUJIANG_RESULT: 131,
            MDM_GR_GAME: 1,
            SUB_GR_GAME_WEBSOCKET: 4,
            SUB_GR_GAME_RESULT: 104,
            SUB_GR_GAME_PING: 5,
            SUB_GR_GAME_PINGRESULT: 105,
            SUB_GR_GAME_GETJPSCORE: 6,
            SUB_GR_GAME_GETJPSCORE_RESULT: 106,
            SUB_GR_GAME_GETJPRECORD: 7,
            SUB_GR_GAME_GETJPRECORD_RESULT: 107,
            SUB_GR_GAME_JPRECHARGE_RESULT: 108,
            SUB_GR_GAME_MSG_RESULT: 110,
            SUB_GR_GAME_RECHARGE: 8,
            SUB_GR_GAME_RECHARGE_RESULT: 109,
            MDM_GR_MAINGAME: 200,
            MDM_GR_SUBGAME: 100
        }, cc._RF.pop()
    }, {}],
    EditboxDisplay: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "44a3eVl3FJMap+0srHAP39h", "EditboxDisplay");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.onLoad = function() {}, t
        }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    EffectBase: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "351eeA3+B1MhLBbeQvogia5", "EffectBase");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.LightFlashes = i.EffectMeetCondition = void 0;
        var o = e("../ScreenMgr"),
            a = function() {
                function e(e) {
                    this._state = 0, this._timer = 0, this.cfg = e, this._scaleMode = o.ScreenMode.fitScreen
                }
                return e.prototype.init = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._state = 1, this.setScaleMode(o.default.Instance.curScale, o.default.Instance.screenMode)
                }, e.prototype.update = function() {}, e.prototype.setState = function(e, t) {
                    void 0 === t && (t = 0), this._state = e, this._timer = t
                }, e.prototype.setScaleMode = function(e, t) {
                    this.cfg.node && this._scaleMode != t && this._root && (this._root.scaleX *= 1 / e.x, this._root.scaleY *= 1 / e.y, this._scaleMode = t)
                }, e.prototype.onPlayerLine = function() {}, e.prototype.isEnd = function() {
                    return !this._state
                }, e.prototype.onEnd = function() {
                    this._state = 0
                }, e.prototype.forceStop = function() {
                    this.onEnd()
                }, e
            }();
        i.default = a;
        var s = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return r(t, e), t.prototype.init = function(t, i, n) {
                e.prototype.init.call(this), this._timer = 0, this._interval = t, this._judgeCallFunc = i, this._executeCallFunc = n
            }, t.prototype.update = function(e) {
                for (this._timer += e; this._timer > this._interval;) {
                    if (this._judgeCallFunc()) return this._executeCallFunc(), void this.onEnd();
                    this._timer -= this._interval
                }
            }, t
        }(a);
        i.EffectMeetCondition = s;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.init = function(e) {
                this._timer = 0, this._normalNode = e.children[0], this._normalNode.active = !0, this._normalNode.opacity = 255, this._opacityNode = e.children[1], this._opacityNode.active = !0, this._opacityNode.opacity = 0
            }, t.prototype.update = function(e) {
                this._timer += e, this._timer
            }, t
        }(a);
        i.LightFlashes = c, cc._RF.pop()
    }, {
        "../ScreenMgr": "ScreenMgr"
    }],
    EffectCfg: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a4963U6GyRJ/bkdam3Ko6vq", "EffectCfg"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.EffectCfg = void 0;
        var n = e("../../my/config/MutabEffectCfg"),
            r = e("../common/Func"),
            o = e("../common/MessageMgr"),
            a = e("../../my/config/Config"),
            s = e("./EffectBase"),
            c = e("./EffectShake");
        i.EffectCfg = {
            varCfg: {
                type: {
                    EffectShake: {
                        bufferNum: 5,
                        class: c.default
                    },
                    EffectMeetCondition: {
                        bufferNum: 5,
                        class: s.EffectMeetCondition
                    }
                }
            }
        }, o.MessageMgr.once(o.MessageName.LoadDyncResFinish, function() {
            r.default.coverCfgFunc(i.EffectCfg.varCfg, n.MutabEffectCfg, a.Config.effectCfg)
        }), cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../../my/config/MutabEffectCfg": "MutabEffectCfg",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr",
        "./EffectBase": "EffectBase",
        "./EffectShake": "EffectShake"
    }],
    EffectMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "39fad/CWOxAUYI2P+yicO18", "EffectMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.EffectMgr = void 0;
        var a = e("../common/MessageMgr"),
            s = e("./EffectCfg"),
            c = cc._decorator.ccclass,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._materials = Object.create(null), t._effectUsing = [], t._effectBuffer = Object.create(null), t
                }
                var i;
                return r(t, e), i = t, t.prototype.onLoad = function() {
                    var e = this;
                    i.Instance = this, a.MessageMgr.on(a.MessageName.SetScaleMode, this.setEffectScale, this), a.MessageMgr.once(a.MessageName.LoadCfgFinish, function() {
                        var t = s.EffectCfg.varCfg.type;
                        for (var n in t) {
                            var r = t[n];
                            r.name = n, void 0 === r.bufferNum && (r.bufferNum = 0);
                            for (var o = [], a = 0; a < r.bufferNum; a++) o.push(e.create(r));
                            e._effectBuffer[r.name] = o
                        }
                        i.EffectType = t, s.EffectCfg.varCfg.type = null
                    })
                }, t.prototype.init = function() {
                    for (var e = this._effectUsing.length - 1; e >= 0; e--) {
                        var t = this._effectUsing[e];
                        t.forceStop(), this._effectBuffer[t.cfg.name].push(t), cc.js.array.fastRemoveAt(this._effectUsing, e)
                    }
                }, t.prototype.getMaterial = function(e) {
                    return this._materials[e]
                }, t.prototype.update = function(e) {
                    for (var t = this._effectUsing.length - 1; t >= 0; t--) {
                        var i = this._effectUsing[t];
                        i.update(e), i.isEnd() && (this._effectBuffer[i.cfg.name].push(i), cc.js.array.fastRemoveAt(this._effectUsing, t))
                    }
                }, t.prototype.trigger = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    var n = this.getEffect(e);
                    return n.init.apply(n, t), this._effectUsing[this._effectUsing.length] = n, n
                }, t.prototype.removeEffect = function(e) {
                    var t = this._effectUsing.indexOf(e);
                    t >= 0 && (this._effectBuffer[e.cfg.name].push(e), cc.js.array.fastRemoveAt(this._effectUsing, t))
                }, t.prototype.getEffect = function(e) {
                    if (null == e) return null;
                    var t = this._effectBuffer[e.name];
                    return t.length > 0 ? t.pop() : this.create(e)
                }, t.prototype.create = function(e) {
                    return new e.class(e)
                }, t.prototype.setEffectScale = function(e, t) {
                    for (var i in this._effectBuffer)
                        for (var n = 0, r = this._effectBuffer[i]; n < r.length; n++) r[n].setScaleMode(e, t);
                    for (var o = 0, a = this._effectUsing; o < a.length; o++) a[o].setScaleMode(e, t)
                }, t.Instance = null, t.EffectType = null, i = o([c], t)
            }(cc.Component);
        i.EffectMgr = f, cc._RF.pop()
    }, {
        "../common/MessageMgr": "MessageMgr",
        "./EffectCfg": "EffectCfg"
    }],
    EffectShake: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5f7feNq0e5L7Y8BKn0rlVAg", "EffectShake");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../common/Func"),
            a = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i._range = [], i._interval = [], i._shakeTime = [], i._initPos = cc.Vec2.ZERO, i
                }
                return r(t, e), t.getShakingIndex = function(e) {
                    return t.Shaking.findIndex(function(t) {
                        return t.root === e
                    })
                }, t.getShakingData = function(e) {
                    return t.Shaking.find(function(t) {
                        return t.root === e
                    })
                }, t.removeShakingData = function(e) {
                    cc.js.array.fastRemoveAt(t.Shaking, t.getShakingIndex(e))
                }, t.prototype.init = function(i, n, r, o, a) {
                    void 0 === o && (o = 5), void 0 === a && (a = .05);
                    var s = t.getShakingData(n);
                    if (s) {
                        var c = s.data;
                        c._shakeTime.push(r), c._shakeTime.sort(function(e, t) {
                            return e - t
                        });
                        var f = c._shakeTime.indexOf(r);
                        c._range.splice(f, 0, o), c._interval.splice(f, 0, a), this.onEnd()
                    } else t.Shaking.push({
                        data: this,
                        root: n
                    }), e.prototype.init.call(this), this._root = n, this._initPos.set(i), this._timer = 0, this._shakeTime = [], this._range = [], this._interval = [], this._shakeTime.push(r), this._range.push(o), this._interval.push(a)
                }, t.prototype.update = function(e) {
                    if (0 != this._shakeTime.length) {
                        for (var i = 0; i < this._shakeTime.length; i++) this._shakeTime[i] -= e, this._shakeTime[i] <= 0 && (this._shakeTime.splice(i, 1), this._range.splice(i, 1), this._interval.splice(i, 1), i--);
                        if (0 == this._shakeTime.length) return this._root.setPosition(this._initPos), t.removeShakingData(this._root), void this.onEnd();
                        var n = Math.min.apply(Math, this._interval),
                            r = Math.max.apply(Math, this._range);
                        this._timer += e, this._timer > n && (this._timer -= n, this._root.x = this._initPos.x + o.default.randomNum(-r, r), this._root.y = this._initPos.y + o.default.randomNum(-r, r))
                    }
                }, t.prototype.forceStop = function() {
                    o.default.clearArray(t.Shaking)
                }, t.Shaking = [], t
            }(e("./EffectBase").default);
        i.default = a, cc._RF.pop()
    }, {
        "../common/Func": "Func",
        "./EffectBase": "EffectBase"
    }],
    Effect_Circular_Bead: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "685e9UtOaFJfJXvjoR5hMca", "Effect_Circular_Bead");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._wRadius = .4, t._hRadius = .4, t
                }
                return r(t, e), Object.defineProperty(t.prototype, "wRadius", {
                    get: function() {
                        return this._wRadius
                    },
                    set: function(e) {
                        this._wRadius = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hRadius", {
                    get: function() {
                        return this._hRadius
                    },
                    set: function(e) {
                        this._hRadius = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.start = function() {
                    this.refreshMaterial()
                }, t.prototype.refreshMaterial = function() {
                    var e = this.getComponent(cc.Sprite),
                        t = e.getMaterial(0);
                    t && "circular_bead" == t.effectAsset.name && (null != this.wRadius && t.setProperty("w_radius", this.wRadius), null != this.hRadius && t.setProperty("h_radius", this.hRadius), e.setMaterial(0, t))
                }, o([c], t.prototype, "_wRadius", void 0), o([c], t.prototype, "wRadius", null), o([c], t.prototype, "_hRadius", void 0), o([c], t.prototype, "hRadius", null), o([s], t)
            }(cc.Component);
        i.default = f, cc._RF.pop()
    }, {}],
    Effect_Dibble: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "62aa2GvWBxNWLXVZJfmretd", "Effect_Dibble");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._hole0 = null, t._hole1 = null, t._round0 = -1, t._round1 = -1, t._direction = -1, t
                }
                return r(t, e), Object.defineProperty(t.prototype, "hole0", {
                    get: function() {
                        return this._hole0
                    },
                    set: function(e) {
                        this._hole0 = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hole1", {
                    get: function() {
                        return this._hole1
                    },
                    set: function(e) {
                        this._hole1 = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "round0", {
                    get: function() {
                        return this._round0
                    },
                    set: function(e) {
                        this._round0 = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "round1", {
                    get: function() {
                        return this._round1
                    },
                    set: function(e) {
                        this._round1 = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "direction", {
                    get: function() {
                        return this._direction
                    },
                    set: function(e) {
                        this._direction = e, this.refreshMaterial()
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.start = function() {
                    this.refreshMaterial()
                }, t.prototype.refreshMaterial = function() {
                    var e = this.getComponent(cc.Sprite),
                        t = (e = this.node.getComponent(cc.Sprite)).getMaterial(0);
                    t && "Effect_Dibble" == t.effectAsset.name && (t.setProperty("u_tex_size", [this.node.width, this.node.height]), null != this.hole0 && t.setProperty("u_hole0_lrbt", [this.hole0.x, this.hole0.y, this.hole0.z, this.hole0.w]), null != this.hole1 && t.setProperty("u_hole1_lrbt", [this.hole1.x, this.hole1.y, this.hole1.z, this.hole1.w]), null != this.direction && t.setProperty("u_direction", this.direction), null != this.round0 && t.setProperty("u_round0", this.round0), null != this.round1 && t.setProperty("u_round1", this.round1), e.setMaterial(0, t))
                }, o([c(cc.Vec4)], t.prototype, "_hole0", void 0), o([c(cc.Vec4)], t.prototype, "hole0", null), o([c(cc.Vec4)], t.prototype, "_hole1", void 0), o([c(cc.Vec4)], t.prototype, "hole1", null), o([c], t.prototype, "_round0", void 0), o([c], t.prototype, "round0", null), o([c], t.prototype, "_round1", void 0), o([c], t.prototype, "round1", null), o([c], t.prototype, "_direction", void 0), o([c], t.prototype, "direction", null), o([s], t)
            }(cc.Component);
        i.default = f, cc._RF.pop()
    }, {}],
    Func: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4dae8NJeWNNLoh/bNs5Qqvn", "Func"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc.Vec2.ZERO,
            r = cc.Vec3.ZERO,
            o = [],
            a = [0, 0],
            s = e("crypto"),
            c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g"],
            f = function() {
                function e() {}
                return e.randomNum = function(e, t) {
                    return Math.random() * (t - e + 1) + e
                }, e.randomInt = function(e, t) {
                    return Math.floor(this.randomNum(e, t))
                }, e.clearArray = function(e) {
                    e.splice(0, e.length)
                }, e.addClearArr = function(e, t) {
                    e.push.apply(e, t), this.clearArray(t)
                }, e.isJSON = function(e) {
                    return "object" == typeof e && e.constructor == Object
                }, e.isArray = function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }, e.mergeJSON = function(e, t) {
                    if (void 0 !== e)
                        for (var i in e) void 0 !== t[i] && this.isJSON(e[i]) ? this.mergeJSON(e[i], t[i]) : t[i] = e[i]
                }, e.coverCfgFunc = function(e, t, i) {
                    void 0 !== t && this.mergeJSON(t, e), void 0 !== i && this.mergeJSON(i, e)
                }, e.mergeJSONOnce = function(e, t) {
                    t.once && (this.mergeJSON(e, t), t.once = void 0)
                }, e.getMergeData = function(e, t) {
                    var i = this.deepMerge(t);
                    return e && this.mergeJSON(e, i), i
                }, e.arrayStr2ObjectVal = function(e) {
                    for (var t = Object.create(null), i = 0; i < e.length; i++) t[e[i]] = i;
                    return t
                }, e.arrayStr2ObjectStr = function(e) {
                    for (var t = Object.create(null), i = 0; i < e.length; i++) t[e[i]] = e[i];
                    return t
                }, e.stringToBytes = function(e) {
                    var t, i;
                    this.clearArray(o), t = e.length;
                    for (var n = 0; n < t; n++)(i = e.charCodeAt(n)) >= 65536 && i <= 1114111 ? (o[o.length] = i >> 18 & 7 | 240, o[o.length] = i >> 12 & 63 | 128, o[o.length] = i >> 6 & 63 | 128, o[o.length] = 63 & i | 128) : i >= 2048 && i <= 65535 ? (o[o.length] = i >> 12 & 15 | 224, o[o.length] = i >> 6 & 63 | 128, o[o.length] = 63 & i | 128) : i >= 128 && i <= 2047 ? (o[o.length] = i >> 6 & 31 | 192, o[o.length] = 63 & i | 128) : o[o.length] = 255 & i;
                    return o
                }, e.stringToHex = function(e) {
                    for (var t = "", i = 0; i < e.length; i++) "" == t ? t = e.charCodeAt(i).toString(16) : t += e.charCodeAt(i).toString(16);
                    return t + "0a"
                }, e.hexToString = function(e) {
                    for (var t = e.split(""), i = "", n = 0; n < t.length / 2; n++) {
                        var r = "0x" + t[2 * n] + t[2 * n + 1];
                        i += String.fromCharCode(parseInt(r))
                    }
                    return i
                }, e.fillZero = function(e) {
                    return e < 10 ? "0" + e : e.toString()
                }, e.bytesToString = function(e, t) {
                    var i, n, r, a;
                    null == t && (t = e.length), this.clearArray(o);
                    for (var s = 0; s < t; s++)
                        if ((a = (r = e[s].toString(2)).match(/^1+?(?=0)/)) && 8 == r.length) {
                            i = a[0].length, n = e[s].toString(2).slice(7 - i);
                            for (var c = 1; c < i; c++) n += e[c + s].toString(2).slice(2);
                            o[o.length] = parseInt(n, 2), s += i - 1
                        } else o[o.length] = e[s];
                    return String.fromCharCode.apply(String, o)
                }, e.utf16ToString = function(e, t) {
                    this.clearArray(o), null == t && (t = e.length);
                    for (var i, n, r, a = -1; a < t;)
                        if (i = e[++a], (n = (e[++a] << 8) + i) < 55296 || n >= 57344) {
                            if (0 === n) break;
                            o.push(n)
                        } else n >= 55296 && n < 56320 && a + 2 < t && (i = e[++a], (r = (e[++a] << 8) + i) >= 56320 && r < 57344 && (n &= 16368, n += 1023 & r, o.push(n)));
                    return String.fromCharCode.apply(String, o)
                }, e.bytesToString2 = function(e) {
                    this.clearArray(o);
                    for (var t = 0, i = e.length; t < i && 0 != e[t]; t++) o[o.length] = e[t];
                    return String.fromCharCode.apply(String, o)
                }, e.int16ToBytes = function(e) {
                    return this.clearArray(o), o[o.length] = e >>> 8 & 255, o[o.length] = 255 & e, o
                }, e.int32ToBytes = function(e) {
                    return this.clearArray(o), o[o.length] = 255 & e, o[o.length] = e >>> 8 & 255, o[o.length] = e >>> 16 & 255, o[o.length] = e >>> 24 & 255, o
                }, e.bytesToInt16 = function(e, t) {
                    return ((255 & e) << 8) + (255 & t)
                }, e.bytesArrToInt32 = function(e, t) {
                    return void 0 === t && (t = 0), this.bytesToInt32(e[t + 3], e[t + 2], e[t + 1], e[t])
                }, e.bytesToInt32 = function(e, t, i, n) {
                    return ((255 & e) << 24) + ((255 & t) << 16) + ((255 & i) << 8) + (255 & n)
                }, e.vec2ToArr = function(e) {
                    return a[0] = e.x, a[1] = e.y, a
                }, e.arrToVec2 = function(e, t) {
                    var i = t || n;
                    return cc.Vec2.set(i, e[0], e[1]), i
                }, e.numToVec2 = function(e, t) {
                    return cc.Vec2.set(n, e, t)
                }, e.encryMd5 = function(e) {
                    var t = s.createHash("md5");
                    return t.update(e), t.digest("hex")
                }, e.getSignature = function(e, t, i) {
                    var n = t + i + e + "RYSyncLoginKey";
                    return (n = this.encryMd5(n)).toUpperCase()
                }, e.customEncry = function(t) {
                    var i = e.stringToHex(t);
                    t = "";
                    for (var n = 0; n < i.length; ++n) {
                        var r = c.indexOf(i[n]);
                        t += c[r + 1]
                    }
                    return t
                }, e.customDecrypt = function(t) {
                    for (var i = "", n = 0; n < t.length; ++n) {
                        var r = c.indexOf(t[n]);
                        i += c[r - 1]
                    }
                    return e.hexToString(i)
                }, e.vec2ToVec3 = function(e) {
                    return r.x = e.x, r.y = e.y, r
                }, e.vec3ToVec2 = function(e) {
                    return n.x = e.x, n.y = e.y, n
                }, e.isMasterSide = function(e, t) {
                    return Math.floor(t / 2) == Math.floor(e / 2)
                }, e.setState = function(e, t, i) {
                    e.tim = i || 0, e.state = t
                }, e.bytesCopy = function(e, t, i, n, r) {
                    for (var o = 0; o < r; ++o) i[n + o] = e[t + o]
                }, e.replaceNodeFunc = function(e, t) {
                    var i = e.parent,
                        n = e.getSiblingIndex();
                    e.destroy(), t.parent = i, t.setSiblingIndex(n)
                }, e.createPosRoot = function(e) {
                    var t = new cc.Node;
                    return t.parent = e.parent, e.parent = t, t
                }, e.instanceMount = function(e, t) {
                    var i = cc.instantiate(e);
                    return i.setParent(t), i
                }, e.Logic2Device = function(e) {
                    return n.x = e.x / 1600, n.y = e.y / 900, n
                }, e.GetDeviceZoom = function() {
                    return (625e-6 + 1 / 900) / 2
                }, e.num2Str = function(e, t) {
                    for (var i = e.toString(); i.length < t;) i = "0" + i;
                    return i
                }, e.change2Time = function(e) {
                    var t = e.match(/\d+\/\d+ \d+:\d+/);
                    return t ? t[0] : e
                }, e.isPlainObject = function(e) {
                    return "[object Object]" === toString.call(e)
                }, e.removeAllComponents = function(e, t) {
                    for (var i = 0, n = e.getComponentsInChildren(t); i < n.length; i++) n[i].destroy()
                }, e.nodeZoomIn = function(e, t) {
                    e.setScale(0), cc.tween(e).to(t, {
                        scale: 1
                    }).start()
                }, e.deepMerge = function(e) {
                    if (null === e || "object" != typeof e) return e;
                    var t = e instanceof Array ? [] : {};
                    for (var i in e) t[i] = this.deepMerge(e[i]);
                    return t
                }, e.outPutJson = function(e, t, i) {
                    var n, r = this;
                    if (void 0 === t && (t = ""), void 0 === i && (i = 0), "object" == typeof e) {
                        for (var o = "\n", a = "\n", s = 0; s < i; s++) a += "\t", o += "\t";
                        o += "\t", i++, n = a, n += "" == t ? t : '"' + t + '": ';
                        var c = e instanceof Array,
                            f = c ? "]" : "}";
                        n += c ? "[" : "{", c ? e.forEach(function(t, a) {
                            var s = !0;
                            switch (typeof t) {
                                case "object":
                                    n += r.outPutJson(t, "", i);
                                    break;
                                case "string":
                                    n += o + '"' + t + '"';
                                    break;
                                case "boolean":
                                case "number":
                                    n += o + t;
                                    break;
                                default:
                                    s = !1
                            }
                            s && a < e.length - 1 && (n += ",")
                        }) : Object.keys(e).forEach(function(t, a, s) {
                            var c = !0,
                                f = e[t];
                            switch (typeof f) {
                                case "object":
                                    n += r.outPutJson(f, t, i);
                                    break;
                                case "string":
                                    n += o + '"' + t + '": "' + f + '"';
                                    break;
                                case "boolean":
                                case "number":
                                    n += o + '"' + t + '": ' + f;
                                    break;
                                default:
                                    c = !1
                            }
                            c && a < s.length - 1 && (n += ",")
                        }), n += a + f
                    }
                    return n
                }, e.editboxDisplay = function() {}, e.getStorage = function(e) {
                    return cc.sys.isBrowser ? sessionStorage.getItem(e) : cc.sys.localStorage.getItem(e)
                }, e.setStorage = function(e, t) {
                    return cc.sys.isBrowser ? sessionStorage.setItem(e, t) : cc.sys.localStorage.setItem(e, t)
                }, e.removeStorage = function(e) {
                    return cc.sys.isBrowser ? sessionStorage.removeItem(e) : cc.sys.localStorage.removeItem(e)
                }, e
            }();
        i.default = f, cc._RF.pop()
    }, {
        crypto: 75
    }],
    GameNet: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "22ec1L7J8BPELSWenmSLLak", "GameNet"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../common/Func"),
            r = e("../../my/config/Config"),
            o = e("../res/DyncMgr"),
            a = e("../res/LanguageMgr"),
            s = e("../SoundMgr"),
            c = e("./EEvent"),
            f = e("../LogicMgr"),
            h = function() {
                function e() {}
                return e.startGame = function(e) {
                    var t = this;
                    f.default.browsePage ? o.default.getResInfo(f.ConstDefine.loginUI) : f.default.login.succeed ? e.address ? (o.default.getResInfo(f.ConstDefine.loadingTip), null == this._socket || this._socket.readyState === WebSocket.CLOSED && navigator.onLine || this._socket.close(), this._realAddress = "ws://" + e.address, this._realPort = e.bsPort, void 0 !== r.Config.gmUrl && void 0 !== e.port && (this._realAddress = r.Config.gmUrl, this._realPort = e.port), this._socket = new WebSocket(this._realAddress + ":" + this._realPort, r.Config.wsProtocol), this._socket.onopen = function() {
                        var e = {
                            mainID: c.Cmd.MDM_GR_GAME,
                            subID: c.Cmd.SUB_GR_GAME_PING,
                            userid: f.default.login.userID,
                            password: f.default.login.dynamicPass
                        };
                        t._socket.send(JSON.stringify(e))
                    }, this._socket.onclose = this.onClose.bind(this), this._socket.onmessage = this.onMessage.bind(this), this._socket.onerror = this.onError.bind(this), this._curGameCfg = e, this._timeOutHandle = setTimeout(function() {
                        o.default.hide(f.ConstDefine.loadingTip), navigator.onLine ? o.default.getResInfo(f.ConstDefine.msgTip, a.default.procLangText("enterGameError")) : o.default.getResInfo(f.ConstDefine.msgTip, a.default.procLangText("badNetStatus")), t._socket.close()
                    }, 5e3)) : o.default.getResInfo(f.ConstDefine.msgTip, a.default.procLangText("enterGameError"), 5) : o.default.getResInfo(f.ConstDefine.msgTip, a.default.procLangText("badNetStatus"))
                }, e.onMessage = function(e) {
                    var t = JSON.parse(e.data),
                        i = t.data;
                    if (t.mainID == c.Cmd.MDM_GR_GAME && t.subID == c.Cmd.SUB_GR_GAME_PINGRESULT) {
                        if (0 == i.result) {
                            var a = {
                                    platName: r.Config.platName,
                                    cback: window.document.location.href,
                                    id: f.default.login.gameID,
                                    pwd: f.default.login.pwd,
                                    token: f.default.login.dynamicPass,
                                    ip: this._realAddress,
                                    port: this._realPort,
                                    lang: r.Config.usingLang,
                                    testAcc: r.Config.testAcccount,
                                    musicVol: s.default.getBGMVol().toFixed(2),
                                    effectVol: s.default.getEffectVol().toFixed(2)
                                },
                                h = n.default.customEncry(JSON.stringify(a)),
                                u = this._curGameCfg.url + "?params=" + h;
                            u.length > 2083 && console.error("\u8fde\u63a5\u957f\u5ea6\u8d85\u8fc7\u4e862083\u5b57\u7b26"), location.href = u
                        } else o.default.hide(f.ConstDefine.loadingTip), o.default.getResInfo(f.ConstDefine.msgTip, i.msg), this._socket.close();
                        clearTimeout(this._timeOutHandle)
                    }
                }, e.onError = function(e) {
                    cc.error("gameNetError", e)
                }, e.onClose = function() {}, e._socket = null, e
            }();
        i.default = h, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../LogicMgr": "LogicMgr",
        "../SoundMgr": "SoundMgr",
        "../common/Func": "Func",
        "../res/DyncMgr": "DyncMgr",
        "../res/LanguageMgr": "LanguageMgr",
        "./EEvent": "EEvent"
    }],
    GameProto: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d01d2fLlENAO439SiI+Y+DM", "GameProto"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.Proto = void 0,
            function(e) {
                e[e.json = 0] = "json", e[e.string = 1] = "string"
            }(i.Proto || (i.Proto = {})), cc._RF.pop()
    }, {}],
    HallUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "17dab4dFUVC7IUN+hXrmtBY", "HallUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o, a, s = e("../../base/common/Func"),
            c = e("../../base/common/MessageMgr"),
            f = e("../../base/common/SpecialFunc"),
            h = e("../../base/common/view/UIPicText"),
            u = e("../config/Config"),
            d = e("../../base/effect/EffectMgr"),
            l = e("../../base/net/EEvent"),
            p = e("../../base/net/NetMgr"),
            g = e("../../base/res/LanguageMgr"),
            b = e("../../base/SoundMgr"),
            m = e("./CardUI"),
            y = e("../../base/common/view/PageView"),
            _ = e("../../base/res/DyncLoadedBase"),
            v = e("../../base/res/DyncMgr"),
            w = e("../../base/LogicMgr");
        (function(e) {
            e[e.grand = 0] = "grand", e[e.major = 1] = "major", e[e.minor = 2] = "minor", e[e.mini = 3] = "mini", e[e.num = 4] = "num"
        })(o || (o = {})),
        function(e) {
            e[e.total = 0] = "total", e[e.all = 1] = "all", e[e.fav = 2] = "fav", e[e.fishing = 3] = "fishing", e[e.slot = 4] = "slot", e[e.other = 5] = "other", e[e.links = 6] = "links", e[e.num = 7] = "num"
        }(a || (a = {}));
        var M, S = cc.v3(0, 320),
            C = cc.v3(0, 258),
            E = function() {
                function e() {
                    this._takeTime = 0, this._eff = null, this._msg = [], this._broadTextPos = cc.Vec3.ZERO
                }
                return e.prototype.init = function(e) {
                    this._root = e, this._root.active = !0;
                    var t = e.getChildByName("mask");
                    this._broadLength = t.getContentSize().width, this._textNode = t.getChildByName("text"), this._text = this._textNode.getComponent(cc.Label), this.clear()
                }, e.prototype.clear = function() {
                    this._root.opacity = 0, this._takeTime = 0, this._msg.length = 0, this._text.string = "", this._root.setPosition(S), this._textNode.stopAllActions(), this._show && (this._show = !1, d.EffectMgr.Instance.removeEffect(this._eff))
                }, e.prototype.addMsg = function(e) {
                    this._msg.push(e), this._show || (this._show = !0, this._root.opacity = 255, cc.tween(this._root).to(.35, {
                        position: C
                    }).start(), this._eff = d.EffectMgr.Instance.trigger(d.EffectMgr.EffectType.EffectMeetCondition, 1, this.updateMsg.bind(this), this.end.bind(this)))
                }, e.prototype.updateMsg = function() {
                    if (this._takeTime < 0) {
                        this._text.string = this._msg.shift(), this._text._forceUpdateRenderData();
                        var e = this._text.node.getContentSize().width + this._broadLength;
                        this._broadTextPos.x = e / 2, this._textNode.setPosition(this._broadTextPos), this._takeTime = e / 50, this._textNode.stopAllActions(), this._broadTextPos.x -= e, cc.tween(this._textNode).to(this._takeTime, {
                            position: this._broadTextPos
                        }).start()
                    } else this._takeTime -= 1;
                    return 0 === this._msg.length
                }, e.prototype.end = function() {
                    var e = this;
                    cc.tween(this._root).to(.35, {
                        position: S,
                        opacity: 0
                    }).call(function() {
                        e._show = !1
                    }).start()
                }, e
            }();
        (function(e) {
            e[e.hour = 0] = "hour", e[e.minute = 1] = "minute", e[e.second = 2] = "second", e[e.num = 3] = "num"
        })(M || (M = {}));
        var k = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n._recTime = 0, n._recCnt = 0, n._movePos = cc.Vec3.ZERO, n._curPgIndex = 1, n._lastShowCategory = a.all, n._leftToggle = [], n._jackpotUIPic = [], n._cardCfg = [], n._cards = [], n._jpLangSpts = [], n._dayTimeArr = [0, 0, 0], n._hallLangSpts = [], n._finishLoad = !1, n._broadcast = new E, c.MessageMgr.on(c.MessageName.UserSocreInfo, n.updateUserSocreInfo, n), c.MessageMgr.on(c.MessageName.DayPrizeRep, n.dayPrizeResponse, n), c.MessageMgr.on(c.MessageName.ChangeHeadIcon, n.changeHeadIcon, n), c.MessageMgr.on(c.MessageName.UpdateFavCards, n.updateFavCards, n), c.MessageMgr.on(c.MessageName.LoginSucceeded, function() {
                    w.default.browsePage = !1, w.default.login.succeed = !0;
                    var e = localStorage.getItem("fold_" + w.default.login.userID);
                    e && (Number(e) ? n.hideAllGame() : n.showAllGame());
                    var t = localStorage.getItem("headIndex_" + w.default.login.userID);
                    t && (w.default.login.headIndex = Number(t)), !s.default.getStorage("showNotice") && w.default.login.mainContent && (v.default.getResInfo("noticeTip"), s.default.setStorage("showNotice", "0")), n._finishLoad && (p.NetMgr.reqDayPrizeInfo(), n.loginSucceed())
                }), n
            }
            return r(t, e), t.prototype.initParams = function() {
                var e = this;
                f.default.hideTextElem();
                var t = this.nodeInfo.root.getChildByName("top"),
                    i = t.getChildByName("favSwitch");
                this._favToggle = i.getComponent(cc.Toggle), this._favToggle.uncheck(), i.on("toggle", this.favToggle, this), this._broadcast.init(this.nodeInfo.root.getChildByName("broadcast"));
                var n = t.getChildByName("headIcon");
                n.on(w.ConstDefine.click, this.headIconClick, this), this._headIconSpt = n.getChildByName(w.ConstDefine.Background).getComponent(cc.Sprite), this._accountUIPic = new h.default("id", cc.find("id/account", t));
                var r = t.getChildByName("coinCountbar");
                this._creditUIPic = new h.default(w.ConstDefine.credit, r.getChildByName(w.ConstDefine.credit));
                var s = r.getChildByName("coin");
                w.default.singleCreditPos.set(r.convertToWorldSpaceAR(s.position)), w.default.doubleCreditPos.set(w.default.singleCreditPos);
                var u = this.nodeInfo.root.getChildByName("right");
                this._lastNode = u.getChildByName("last"), this._nextNode = u.getChildByName("next");
                var d = this.nodeInfo.root.getChildByName("bottom");
                d.getChildByName("quit").on(w.ConstDefine.click, this.quit, this), d.getChildByName("noticeTip").on(w.ConstDefine.click, function() {
                    b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("noticeTip")
                });
                var l = cc.find("jackpot/dikuang", d);
                l.getChildByName(w.ConstDefine.click).on(w.ConstDefine.click, function() {
                    b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("jpUI")
                });
                for (var g = cc.find("view/content", l).children, _ = 0; _ < w.default.jp.length; _++) {
                    var M = g[_];
                    this._jackpotUIPic[_] = new h.default(w.ConstDefine.credit, M.getChildByName(w.ConstDefine.credit)), this._jackpotUIPic[_].setSepValue(w.default.jp[_], w.default.creditPrefix), this._jpLangSpts[o[M.name]] = M.children[0].getComponent(cc.Sprite)
                }
                var S = {
                    root: l
                };
                this._loopPgView = new y.LoopTogglePageView(S), d.getChildByName(w.ConstDefine.password).on(w.ConstDefine.click, function() {
                    b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("modPwdBox")
                }), d.getChildByName("setting").on(w.ConstDefine.click, function() {
                    b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("settingBox")
                }), this._midNode = this.nodeInfo.root.getChildByName("mid");
                var C = this._midNode.getChildByName("left"),
                    E = C.getChildByName("allGames");
                E.on(w.ConstDefine.click, this.allGamesClick, this), this._inNode = E.getChildByName("in"), this._inNode.active = !0, this._outNode = E.getChildByName("out"), this._outNode.active = !0, this.allGamesClick();
                var k = function(t) {
                        var i = C.children[t];
                        P._leftToggle[t] = i.getComponent(cc.Toggle), i.on(w.ConstDefine.click, function() {
                            e.leftClick(t, 0)
                        })
                    },
                    P = this;
                for (_ = 1; _ < C.childrenCount; _++) k(_);
                u = this._midNode.getChildByName("right");
                var I = cc.find("view/content", u);
                this._contentChildren = I.children;
                var N = I.getChildByName("page1");
                N.active = !0, this._page1CardRoot = N.getChildByName("card");
                var R = N.getChildByName("ad");
                v.default.getResInfo("advert", R);
                var B = this.nodeInfo.root.getChildByName("dayPrize"),
                    x = B.getChildByName("btn");
                this._dayPrizeBtn = x.getComponent(cc.Button), x.on(w.ConstDefine.click, this.dayPrizeClick, this), this._dayPrizeAnim = x.getChildByName(w.ConstDefine.Background).getComponent(cc.Animation), this._dayPrizeTimeNode = B.getChildByName("time"), this._dayPrizeTimeLabel = this._dayPrizeTimeNode.getChildByName(w.ConstDefine.text).getComponent(cc.Label), this._dayPrizeTimeLabel.string = "", this._dayPrizeAnim.enabled = !1, this._dayPrizeBtn.interactable = !1, this._dayPrizeTimeNode.active = !0, this._pagePrefab = I.getChildByName("page2"), v.default.getResInfo("card").then(function(t) {
                    for (var i = t.nodeInfo.root, n = a.all; n < a.num - 1; n++) e._cardCfg[n] = [];
                    for (var r in m.default.FavCards = e._cardCfg[a.fav], w.default.kpKeyCfg) {
                        w.default.kpKeyCfg[r];
                        var o = cc.instantiate(i),
                            s = new m.default(o);
                        e._cards.push(s)
                    }
                    var c = u.getComponent(cc.PageView),
                        f = e._cards.length;
                    if (f <= 6)
                        for (c.removePage(e._pagePrefab), n = 0; n < f; ++n) e._cards[n].setParent(e._page1CardRoot);
                    else {
                        for (var h = 0; h < 6; ++h) e._cards[h].setParent(e._page1CardRoot);
                        var d = f - 6,
                            l = Math.ceil(d / 8) - 1;
                        for (n = 0; n < l; n++) c.addPage(cc.instantiate(e._pagePrefab));
                        for (; h < f; ++h) {
                            var g = e.calcPgIndex(h + 1);
                            e._cards[h].setParent(e._contentChildren[g])
                        }
                    }
                    var b = {
                        root: u,
                        leftNode: e._lastNode,
                        rightNode: e._nextNode,
                        pgChangeCall: e.pgChange.bind(e),
                        btnType: y.BtnControlType.rightShow,
                        finishCall: function() {
                            e._finishLoad = !0, w.default.login.succeed && (e.loginSucceed(), p.NetMgr.reqDayPrizeInfo())
                        },
                        toggleRoot: e.nodeInfo.root.getChildByName("toggleRoot")
                    };
                    e._togglePgView = new y.TogglePageView(b)
                }), c.MessageMgr.on(c.MessageName.NetMsg, this.onLogonNet, this), c.MessageMgr.on(c.MessageName.ChangeLang, this.changeLang, this), c.MessageMgr.on(c.MessageName.NetClose, this.netClose, this), this.changeLang()
            }, t.prototype.changeHeadIcon = function() {
                f.default.setDyncSpt(u.Config.dyncLoadDirIndex.headIcon, "headIcon/" + w.default.login.headIndex, this._headIconSpt)
            }, t.prototype.updateUserSocreInfo = function() {
                w.default.login.openWinScore ? this._creditUIPic.setSepValue(w.default.login.score + w.default.login.winScore) : this._creditUIPic.setSepValue(w.default.login.score)
            }, t.prototype.dayPrizeResponse = function(e) {
                if ("1" === e.bLottery) this._dayPrizeAnim.enabled = !0, this._dayPrizeBtn.interactable = !0, this._dayPrizeTimeNode.active = !1;
                else {
                    this._dayPrizeAnim.enabled = !1, this._dayPrizeBtn.interactable = !1, this._dayPrizeTimeNode.active = !0;
                    for (var t = e.RefreshTime || "23:59:59", i = t.match(/\d+/g), n = 0; n < M.num; ++n) this._dayTimeArr[n] = Number(i[n]);
                    this._dayLeftTime = 3600 * this._dayTimeArr[M.hour] + 60 * this._dayTimeArr[M.minute] + this._dayTimeArr[M.second], this._dayPrizeTimeLabel.string = t, clearInterval(this._dayPrizeInterval), this._dayPrizeInterval = setInterval(this.updateDayPrizeTime.bind(this), 1e3)
                }
            }, t.prototype.updateDayPrizeTime = function() {
                if (--this._dayLeftTime <= 0) clearInterval(this._dayPrizeInterval), p.NetMgr.reqDayPrizeInfo();
                else {
                    --this._dayTimeArr[M.second] < 0 && (this._dayTimeArr[M.second] = 59, --this._dayTimeArr[M.minute] < 0 && (this._dayTimeArr[M.minute] = 59, --this._dayTimeArr[M.hour] < 0 && (this._dayTimeArr[M.hour] = 11)));
                    var e = cc.js.formatStr("%s:%s:%s", s.default.fillZero(this._dayTimeArr[M.hour]), s.default.fillZero(this._dayTimeArr[M.minute]), s.default.fillZero(this._dayTimeArr[M.second]));
                    this._dayPrizeTimeLabel.string = e
                }
            }, t.prototype.dayPrizeClick = function() {
                b.default.playEffect("prize_2"), v.default.getResInfo(w.ConstDefine.rollPrize)
            }, t.prototype.changeLang = function() {
                f.default.setLangSptArr(u.Config.dyncLoadDirIndex.jackPot, this._jpLangSpts)
            }, t.prototype.netClose = function() {}, t.prototype.loginSucceed = function() {
                for (var e = a.all; e < a.num - 1; ++e) this._cardCfg[e].length = 0;
                for (var t = 0, i = w.default.kpSortGid; t < i.length; t++) {
                    var n = i[t];
                    (f = w.default.kpKeyCfg[n]).fav = !1, !u.Config.testAcccount && f.testGame || (this._cardCfg[a.all].push(f), this._cardCfg[a[f.fenlei]].push(f))
                }
                v.default.hide("noFavTip"), m.default.FavCards.length = 0;
                var r = localStorage.getItem(w.default.login.userID + "_favArrStr");
                if (r) {
                    w.default.favArr = JSON.parse(r);
                    for (var o = 0, c = w.default.favArr; o < c.length; o++) {
                        var f;
                        n = c[o], (f = w.default.kpKeyCfg[n]).fav = !0, m.default.FavCards.push(f)
                    }
                }
                var h = this._cardCfg[a.all];
                for (e = 0; e < h.length; ++e) this._cards[e].init(h[e]);
                var d = 0,
                    l = a.all;
                if (w.default.login.succeed) {
                    w.default.login.needReset && v.default.getResInfo(w.ConstDefine.msgTip, g.default.procLangText("changePwdTip"), 5), w.default.sendJpReq();
                    var p = s.default.getStorage("showCategory");
                    p && (l = parseInt(p));
                    var b = s.default.getStorage("pgIndex");
                    if (b && (d = parseInt(b)), this._accountUIPic.setStr(w.default.login.gameID.toString()), this.updateUserSocreInfo(), this._broadcast.clear(), w.default.login.noticMsg)
                        for (e = 0; e < 3; e++)
                            for (var y = 0, _ = w.default.login.noticMsg; y < _.length; y++) {
                                var M = _[y];
                                this._broadcast.addMsg(M.msg)
                            }
                    this.changeHeadIcon()
                }
                this._leftToggle[l].check(), this.leftClick(l, d)
            }, t.prototype.favToggle = function() {
                b.default.playEffect(w.ConstDefine.click);
                for (var e = this._cardCfg[this._lastShowCategory], t = 0; t < e.length; ++t) this._cards[t].setFavActive(this._favToggle.isChecked)
            }, t.prototype.recClick = function() {
                b.default.playEffect(w.ConstDefine.click);
                var e = performance.now();
                e - this._recTime < 500 ? ++this._recCnt : this._recCnt = 0, this._recTime = e, this._recCnt > 0 && (this._recCnt = 0, v.default.getResInfo(w.ConstDefine.msgTip, g.default.procLangText("replayAvailable")))
            }, t.prototype.allGamesClick = function() {
                b.default.playEffect(w.ConstDefine.click), this._movePos.set(w.ConstDefine.vec3ZERO), 255 === this._inNode.opacity ? this.hideAllGame() : this.showAllGame()
            }, t.prototype.moveMidNode = function() {
                cc.tween(this._midNode).to(.15, {
                    position: this._movePos
                }).start()
            }, t.prototype.showAllGame = function() {
                this._inNode.opacity = 255, this._outNode.opacity = 0, this._movePos.x = 0, this.moveMidNode()
            }, t.prototype.loadCfgTex = function(e) {
                e.loadLogo ? e.logoSpt && e.card.setLogoSpt() : f.default.loadRemoteSpt(u.Config.configPath + "kapai/", w.ConstDefine.kp, e.gid, function(t, i) {
                    e.loadLogo = !0, t || (e.logoSpt = new cc.SpriteFrame(i), e.card.setLogoSpt())
                }), e.loadIcon ? e.iconSpt && e.card.setIconSpt() : f.default.loadRemoteSpt(u.Config.configPath + "lang/" + g.default.currLang + "/kapai/", w.ConstDefine.kpl, e.gid, function(t, i) {
                    e.loadIcon = !0, t || (e.iconSpt = new cc.SpriteFrame(i), e.card.setIconSpt())
                })
            }, t.prototype.pgChange = function(e, t, i) {
                if (void 0 === t && (t = !1), void 0 === i && (i = !1), null != this._lastShowCategory) {
                    var n = this._cardCfg[this._lastShowCategory].length,
                        r = 0,
                        o = 14;
                    e > 0 && (r = 6 + 8 * (e - 1), o = 16, e > 1 ? (r -= 8, o += 8) : (r -= 6, o += 6)), r + o > n && (o = n - r);
                    for (var a = r; a < r + o; a++) this.loadCfgTex(this._cards[a].cfg);
                    this._curPgIndex !== e && (this._curPgIndex = e, t && (s.default.setStorage("pgIndex", this._curPgIndex.toString()), i || this.hideAllGame()))
                }
            }, t.prototype.hideAllGame = function() {
                0 !== this._inNode.opacity && (this._inNode.opacity = 0, this._outNode.opacity = 255, this._movePos.x = -178, this.moveMidNode())
            }, t.prototype.showCard = function(e, t) {
                var i = 0,
                    n = 0;
                void 0 !== this._lastShowCategory && (i = this._cardCfg[this._lastShowCategory].length, n = this.calcPgIndex(i) + 1);
                for (var r = this._cardCfg[e].length, o = this.calcPgIndex(r) + 1, c = n; c < o; c++) this._togglePgView.setVisible(c, !0);
                for (c = o; c < n; c++) this._togglePgView.setVisible(c, !1);
                for (this._togglePgView.resetPageCnt(o), this._nextNode.active = !1, this._lastNode.active = !1, c = r; c < i; c++) this._cards[c].setActive(!1);
                for (c = i; c < r; ++c) this._cards[c].setActive(!0);
                this._lastShowCategory = e, s.default.setStorage("showCategory", this._lastShowCategory.toString()), 0 !== r || e != a.fav ? (this.resetCard(e), this._togglePgView.toggleRoll(t, !1)) : v.default.getResInfo("noFavTip", g.default.procLangText("noFavTip"))
            }, t.prototype.leftClick = function(e, t) {
                this._togglePgView.pgView.stopAutoScroll(), this._lastShowCategory === e ? this._togglePgView.toggleRoll(t, !1) : (this._lastShowCategory == a.fav && v.default.hide("noFavTip"), this._favToggle.isChecked && (this._favToggle.uncheck(), this.favToggle()), this.showCard(e, t), this.pgChange(t, !0, !0))
            }, t.prototype.updateFavCards = function() {
                if (this._lastShowCategory === a.fav) {
                    var e = this._cardCfg[a.fav].length;
                    this._cards[e].setActive(!1), this.resetCard(a.fav);
                    var t = this.calcPgIndex(e) + 1,
                        i = this.calcPgIndex(e + 1) + 1;
                    t !== i && (this._togglePgView.setVisible(i - 1, !1), this._togglePgView.resetPageCnt(t), this._curPgIndex === i - 1 && this._curPgIndex >= 0 && (--this._curPgIndex, s.default.setStorage("pgIndex", this._curPgIndex.toString())), this._togglePgView.toggleRoll(this._curPgIndex, !1));
                    for (var n = 0, r = this._cardCfg[a.fav]; n < r.length; n++) {
                        var o = r[n];
                        this.loadCfgTex(o)
                    }
                }
            }, t.prototype.calcPgIndex = function(e) {
                return e <= 6 ? 0 : Math.ceil((e - 6) / 8)
            }, t.prototype.headIconClick = function() {
                b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("headUI")
            }, t.prototype.resetCard = function(e) {
                for (var t = this._cardCfg[e], i = 0; i < t.length; ++i) this._cards[i].reset(t[i])
            }, t.prototype.quit = function() {
                b.default.playEffect(w.ConstDefine.click), v.default.getResInfo("exitPromptBox", g.default.procLangText("exitLogin"))
            }, t.prototype.onLogonNet = function(e) {
                if (e.mainID === l.Cmd.MDM_MB_LOGON) switch (e.subID) {
                    case l.Cmd.SUB_MB_GETJPSCORE_RESULT:
                        var t = e.data;
                        w.default.jp[0] = t.grand, w.default.jp[1] = t.major, w.default.jp[2] = t.minor, w.default.jp[3] = t.mini;
                        for (var i = 0; i < w.default.jp.length; i++) this._jackpotUIPic[i].setSepValue(w.default.jp[i], w.default.creditPrefix);
                        v.default.isLoad("jpUI") || p.NetMgr.close()
                }
            }, t
        }(_.default);
        i.default = k, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/PageView": "PageView",
        "../../base/common/view/UIPicText": "UIPicText",
        "../../base/effect/EffectMgr": "EffectMgr",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/DyncMgr": "DyncMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "../config/Config": "Config",
        "./CardUI": "CardUI"
    }],
    HeadUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "37fe5mjPmFNPoggQD6/V/70", "HeadUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.HeadUI = void 0;
        var o = e("../../base/common/MessageMgr"),
            a = e("../config/Config"),
            s = e("../../base/SoundMgr"),
            c = e("../../base/common/view/PageView"),
            f = e("../../base/common/view/Tip"),
            h = e("../../base/res/DyncMgr"),
            u = e("../../base/LogicMgr"),
            d = function(e) {
                function t(t, i) {
                    return e.call(this, t, i) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    var t = this;
                    e.prototype.initParams.call(this), localStorage.getItem("head"), this._popupMethod.root.getChildByName(u.ConstDefine.close).on(u.ConstDefine.click, this.close, this);
                    var i = this._popupMethod.root.getChildByName("offsetX");
                    this._headSelectNode = i.getChildByName("headSelect"), this._headSelectNode.active = !1, cc.find("confirm", i).on(u.ConstDefine.click, this.confirmClick, this);
                    var n = i.getChildByName("pgView");
                    h.default.bundles[a.Config.dyncLoadDirIndex.headIcon].loadDir("headIcon", cc.SpriteFrame, function(e, i) {
                        if (e) console.error("\u52a0\u8f7d\u5934\u50cf\u8d44\u6e90\u51fa\u9519", e);
                        else {
                            var r = i.length;
                            i.sort(function(e, t) {
                                return e.name.length !== t.name.length ? e.name.length - t.name.length : e.name.localeCompare(t.name)
                            });
                            var o = cc.find("view/content", n),
                                a = n.getComponent(cc.PageView),
                                f = o.getChildByName("page");
                            f.active = !0, t._perPgNum = f.childrenCount;
                            for (var h = Math.ceil(r / t._perPgNum), d = 1; d < h; d++) {
                                var l = cc.instantiate(f);
                                a.addPage(l)
                            }
                            var p = h * t._perPgNum - r,
                                g = o.children[h - 1];
                            for (d = t._perPgNum - p; d < t._perPgNum; d++) g.children[d].destroy();
                            var b = function(e) {
                                for (var n = o.children[e].children, r = function(r) {
                                        var o = n[r],
                                            a = e * t._perPgNum + r;
                                        o.getChildByName(u.ConstDefine.Background).getComponent(cc.Sprite).spriteFrame = i[a], o.on(u.ConstDefine.click, function() {
                                            s.default.playEffect(u.ConstDefine.click), t.headClick(a, n[r])
                                        })
                                    }, a = 0; a < n.length; a++) r(a)
                            };
                            for (d = 0; d < h; d++) b(d);
                            t._headSelectNode.active = !0;
                            var m = {
                                root: n,
                                finishCall: t.resetHeadPage.bind(t),
                                btnType: c.BtnControlType.leftRightSeq
                            };
                            t._pgView = new c.TogglePageView(m)
                        }
                    })
                }, t.prototype.close = function() {
                    e.prototype.close.call(this), this.resetHeadPage()
                }, t.prototype.resetHeadPage = function() {
                    var e = Math.floor(u.default.login.headIndex / this._perPgNum),
                        t = u.default.login.headIndex % this._perPgNum;
                    this._pgView.toggleRoll(e, !1), this.headClick(u.default.login.headIndex, this._pgView.contents[e].children[t]), this._curHeadIndex = -1
                }, t.prototype.confirmClick = function() {
                    s.default.playEffect(u.ConstDefine.click), u.default.login.headIndex = this._curHeadIndex, o.MessageMgr.emit(o.MessageName.ChangeHeadIcon), localStorage.setItem("headIndex_" + u.default.login.userID, this._curHeadIndex.toString()), e.prototype.hide.call(this)
                }, t.prototype.headClick = function(e, t) {
                    e !== this._curHeadIndex && (this._curHeadIndex = e, this._headSelectNode.setParent(t), this._headSelectNode.setPosition(u.ConstDefine.vec3ZERO))
                }, t
            }(f.PopupBase);
        i.HeadUI = d, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/view/PageView": "PageView",
        "../../base/common/view/Tip": "Tip",
        "../../base/res/DyncMgr": "DyncMgr",
        "../config/Config": "Config"
    }],
    Interface: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "298e4HVs/9B4LkMTltVFsjK", "Interface"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.GameTag = void 0,
            function(e) {
                e[e.hot = 0] = "hot", e[e.new = 1] = "new", e[e.comingSoon = 2] = "comingSoon", e[e.newFeature = 3] = "newFeature", e[e.num = 4] = "num"
            }(i.GameTag || (i.GameTag = {})), cc._RF.pop()
    }, {}],
    JpRankUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1c06c7E4MdGI6UJrrPN+o2w", "JpRankUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o, a = e("../../base/common/Func"),
            s = e("../../base/common/MessageMgr"),
            c = e("../../base/common/SpecialFunc"),
            f = e("../../base/common/view/Tip"),
            h = e("../../base/common/view/UIPicText"),
            u = e("../../base/net/EEvent"),
            d = e("../../base/net/NetMgr"),
            l = e("../../base/res/LanguageMgr"),
            p = e("../../base/SoundMgr"),
            g = e("./CustomScrollView"),
            b = e("../../base/LogicMgr");
        (function(e) {
            e[e.num = 0] = "num"
        })(o || (o = {}));
        var m = ["grand", "major", "minor", "mini"],
            y = function() {
                function e(e, t) {
                    this._lastShowFrame = 0, this._root = e, this._frameChildren = e.getChildByName("frame").children;
                    for (var i = 0, n = this._frameChildren; i < n.length; i++) {
                        var r = n[i];
                        r.opacity = 0, r.active = !0
                    }
                    this._frameChildren[this._lastShowFrame].opacity = 255, this._orderUItext = new h.default("order", e.getChildByName("order")), this._orderUItext.setStr(t + 1), this._idLabel = cc.find("userID/id", e).getComponent(cc.Label), this._timeLabel = e.getChildByName("time").getComponent(cc.Label), this._creditUItext = new h.default(b.ConstDefine.credit, e.getChildByName(b.ConstDefine.credit))
                }
                return e.prototype.init = function(e) {
                    this._idLabel.string = e.gameid.toString(), this._timeLabel.string = e.date, this._creditUItext.setSepValue(e.score, b.default.creditPrefix), this._lastShowFrame !== e.jptype && (this._frameChildren[this._lastShowFrame].opacity = 0, this._lastShowFrame = e.jptype, this._frameChildren[this._lastShowFrame].opacity = 255), this.setActive(!0)
                }, e.prototype.setActive = function(e) {
                    this._root.active = e
                }, e
            }(),
            _ = function(e) {
                function t(t, i) {
                    var n = e.call(this, t, i) || this;
                    return n._awardCredit = [], n._rankItems = [], n
                }
                return r(t, e), t.prototype.initParams = function() {
                    var t = this;
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("close").on(b.ConstDefine.click, this.close, this);
                    var i = this._popupMethod.root.getChildByName("offsetX"),
                        n = i.getChildByName("showInfoFrame");
                    this._infoTip = n.getChildByName("info").getComponent(cc.Label), this._infoTip.string = "", this._noRecordNode = n.getChildByName("noRecordLst"), this._noRecordNode.opacity = 0;
                    for (var r = i.getChildByName("mid"), o = cc.find("left/award", r), a = function(e) {
                            s._awrdChildren = o.children, o.children[e].on("toggle", function() {
                                p.default.playEffect(b.ConstDefine.click), t.toggleClick(e)
                            })
                        }, s = this, c = 0; c < o.childrenCount; c++) a(c);
                    var f = r.getChildByName("right");
                    this._nodataNode = f.getChildByName("noData"), this._nodataNode.opacity = 0;
                    var h = f.getChildByName("rank");
                    g.CustomScrollView.addScrollBarExtra(h), this._contentNode = cc.find("view/content", h), this._itemPrefab = this._contentNode.getChildByName("prefab"), this._rankItems.length = 0, this._rankItems.push(new y(this._itemPrefab, this._rankItems.length)), this._rankItems[0].setActive(!1)
                }, t.prototype.resetParams = function(t) {
                    e.prototype.resetParams.call(this), this._laserIndexClick = -1, p.default.playEffect("jpEnter"), s.MessageMgr.on(s.MessageName.NetMsg, this.onLogonNet, this), this.nodeInfo.root.active = !0, this._awrdChildren[t].getComponent(cc.Toggle).check(), this.toggleClick(t)
                }, t.prototype.close = function() {
                    p.default.playEffect("jpClose"), this.hide(), s.MessageMgr.off(s.MessageName.NetMsg, this.onLogonNet, this)
                }, t.prototype.toggleClick = function(e) {
                    if (this._laserIndexClick !== e && (this._laserIndexClick = e, b.default.login.succeed)) {
                        var t = {
                            type: e - 1,
                            bossid: b.default.login.bossID
                        };
                        d.NetMgr.send(u.Cmd.MDM_MB_LOGON, u.Cmd.SUB_MB_LOGON_GETJPRECORD, t)
                    }
                }, t.prototype.onLogonNet = function(e) {
                    if (e.mainID === u.Cmd.MDM_MB_LOGON) switch (e.subID) {
                        case u.Cmd.SUB_MB_GETJPRECORD_RESULT:
                            var t = e.data;
                            if (this._infoTip.string = "", 0 === t.result)
                                if (null != t.item) {
                                    for (var i = this._rankItems.length; i < t.item.length; i++) {
                                        var n = cc.instantiate(this._itemPrefab);
                                        n.setParent(this._contentNode), this._rankItems.push(new y(n, i))
                                    }
                                    for (var r = t.item.length; r < this._rankItems.length; r++) this._rankItems[r].setActive(!1);
                                    this._nodataNode.opacity = 0, this._noRecordNode.opacity = 255;
                                    for (var o = 0; o < t.item.length; o++)
                                        if ((p = t.item[o]).date = a.default.change2Time(p.date), this._rankItems[o].init(p), 255 === this._noRecordNode.opacity && b.default.login.gameID === p.gameid) {
                                            this._noRecordNode.opacity = 0;
                                            var s = l.default.procLangText(m[p.jptype]);
                                            this._infoTip.string = cc.js.formatStr("I get %s prize with %s at %s", s, b.default.creditPrefix + c.default.convertDecimalNum(p.score), p.date)
                                        }
                                } else {
                                    this._nodataNode.opacity = 255, this._noRecordNode.opacity = 255;
                                    for (var f = 0; f < this._rankItems.length; f++) this._rankItems[f].setActive(!1)
                                }
                            else {
                                cc.warn(t.msg), this._nodataNode.opacity = 0;
                                for (var h = 0, d = this._rankItems; h < d.length; h++) {
                                    var p;
                                    (p = d[h]).setActive(!1)
                                }
                            }
                    }
                }, t
            }(f.PopupBase);
        i.default = _, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/Tip": "Tip",
        "../../base/common/view/UIPicText": "UIPicText",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "./CustomScrollView": "CustomScrollView"
    }],
    JpUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8ac3fWa2bdGsqd/HuJd5ISP", "JpUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.JpPrize = void 0;
        var o = e("../../base/common/MessageMgr"),
            a = e("../../base/common/view/UIPicText"),
            s = e("../../base/net/EEvent"),
            c = e("../../base/res/DyncLoadedBase"),
            f = e("../../base/res/DyncMgr"),
            h = e("../../base/SoundMgr"),
            u = e("../../base/LogicMgr"),
            d = e("../../base/net/NetMgr"),
            l = function() {
                function e(e, t) {
                    this._credit = new a.default("jp", t.getChildByName(u.ConstDefine.credit)), this._titleSpt = t.getChildByName("1_2").children[0].getComponent(cc.Sprite), this._commaNode = t.getChildByName(","), this.setStr(u.default.jp[e].toString())
                }
                return e.prototype.setCredit = function(e) {
                    this._credit.setSepValue(e, u.default.creditPrefix)
                }, e.prototype.setStr = function(e) {
                    this._commaNode.active = e.length > 5, this._credit.setStr(e, u.default.creditPrefix)
                }, e.prototype.changeLang = function() {}, e
            }(),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._awardBrand = [], t
                }
                return r(t, e), t.prototype.initParams = function() {
                    var e = this,
                        t = this.nodeInfo.root.getChildByName("menubar");
                    t.getChildByName("back").on(u.ConstDefine.click, this.close, this), t.getChildByName("record").on(u.ConstDefine.click, function() {
                        e.recordClick(0)
                    }, this);
                    for (var i = this.nodeInfo.root.getChildByName("award").children, n = function(t) {
                            var n = i[t];
                            n.on(u.ConstDefine.click, function() {
                                e.recordClick(t + 1)
                            }, r), r._awardBrand[t] = new l(t, n)
                        }, r = this, a = 0; a < i.length; a++) n(a);
                    o.MessageMgr.on(o.MessageName.NetClose, this.netClose, this)
                }, t.prototype.resetParams = function() {
                    h.default.playEffect("jpEnter"), this.changeLang(), u.default.login.succeed = !1, d.NetMgr.createWebSocket(), o.MessageMgr.on(o.MessageName.NetMsg, this.onLogonNet, this), this._reqInterval = setInterval(u.default.sendJpReq.bind(u.default), 1e4)
                }, t.prototype.close = function() {
                    h.default.playEffect("jpClose"), this.hide(), d.NetMgr.close(), o.MessageMgr.off(o.MessageName.NetMsg, this.onLogonNet, this), clearInterval(this._reqInterval)
                }, t.prototype.recordClick = function(e) {
                    h.default.playEffect(u.ConstDefine.click), f.default.getResInfo("jpRankUI", e)
                }, t.prototype.changeLang = function() {
                    for (var e = 0, t = this._awardBrand; e < t.length; e++) t[e].changeLang()
                }, t.prototype.netClose = function() {}, t.prototype.onLogonNet = function(e) {
                    if (e.mainID === s.Cmd.MDM_MB_LOGON) switch (e.subID) {
                        case s.Cmd.SUB_MB_GETJPSCORE_RESULT:
                            var t = e.data;
                            this._awardBrand[0].setStr(t.grand.toString()), this._awardBrand[1].setStr(t.major.toString()), this._awardBrand[2].setStr(t.minor.toString()), this._awardBrand[3].setStr(t.mini.toString())
                    }
                }, t
            }(c.default);
        i.default = p;
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._awardBrand = [], t
            }
            return r(t, e), t.prototype.initParams = function() {
                this.nodeInfo.root.getChildByName("collect").on(u.ConstDefine.click, this.collectClick, this);
                for (var e = this.nodeInfo.root.getChildByName("award").children, t = 0; t < e.length; t++) this._awardBrand[t] = new l(t, e[t])
            }, t.prototype.resetParams = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.changeLang()
            }, t.prototype.hide = function() {}, t.prototype.collectClick = function() {}, t.prototype.changeLang = function() {
                this._awardBrand[this._showBrandIndex].changeLang()
            }, t
        }(c.default);
        i.JpPrize = g, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/view/UIPicText": "UIPicText",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/DyncMgr": "DyncMgr"
    }],
    KeyboardUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9242enqXgRJ8JNODukHXJB2", "KeyboardUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../../base/LogicMgr"),
            a = e("../../base/res/DyncLoadedBase"),
            s = e("../../base/SoundMgr"),
            c = cc.Vec3.ZERO,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._patternMap = new Map, t._moveNodePos = cc.Vec3.ZERO, t
                }
                return r(t, e), t.prototype.initParams = function() {
                    var e = this;
                    this.nodeInfo.root.getChildByName("mask").on(o.ConstDefine.click, this.close, this), this._rootNode = this.nodeInfo.root.getChildByName("root"), this._patternNodes = this._rootNode.children, c.set(this._rootNode.position), c.y += this._patternNodes[0].height * this._patternNodes[0].anchorY * this._rootNode.scaleY, this._keyboardPos = this._rootNode.parent.convertToWorldSpaceAR(c);
                    for (var t = 0; t < this._patternNodes.length; t++) {
                        var i = this._patternNodes[t];
                        i.active = !1;
                        for (var n = i.children, r = function(t) {
                                var i = n[t];
                                i.on(o.ConstDefine.click, function() {
                                    e.keyClick(i.name)
                                })
                            }, a = 0; a < n.length; a++) r(a);
                        this._patternMap.set(i.name, t)
                    }
                    this._pattern = this._patternMap.get("lower"), this._patternNodes[this._pattern].active = !0
                }, t.prototype.resetParams = function(e, t) {
                    this._pattern !== this._patternMap.get("lower") && this.switchPattern(this._patternMap.get("lower")), this._curEdit = e.getComponent(cc.EditBox), this._moveNodePos.set(t.position), this._curMoveNode = t, c.set(e.position), c.y -= e.height * e.anchorY + 10;
                    var i = e.parent.convertToWorldSpaceAR(c);
                    if (i.y < this._keyboardPos.y) {
                        var n = this._keyboardPos.y - i.y,
                            r = n / 300;
                        r > .5 && (r = .5), cc.tween(t).by(r, {
                            y: n
                        }).start()
                    }
                }, t.prototype.close = function() {
                    s.default.playEffect("keyClick"), this._curMoveNode.setPosition(this._moveNodePos), this.hide()
                }, t.prototype.switchPattern = function(e) {
                    this._patternNodes[this._pattern].active = !1, this._pattern = e, this._patternNodes[this._pattern].active = !0
                }, t.prototype.keyClick = function(e) {
                    switch (s.default.playEffect("keyClick"), e) {
                        case "slash":
                            this._curEdit.string += "/";
                            break;
                        case "space":
                            this._curEdit.string += " ";
                            break;
                        case "del":
                            this._curEdit.string = this._curEdit.string.substring(0, this._curEdit.string.length - 1);
                            break;
                        case "stowed":
                        case "enter":
                            this.close();
                            break;
                        case "upper":
                        case "special":
                        case "special2":
                        case "lower":
                            this.switchPattern(this._patternMap.get(e));
                            break;
                        default:
                            this._curEdit.string += e
                    }
                }, t
            }(a.default);
        i.default = f, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase"
    }],
    LabelShader1: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7bfabfniA1MQawb4i/9/pab", "LabelShader1");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            f = a.menu,
            h = a.requireComponent,
            u = a.disallowMultiple,
            d = a.executeInEditMode,
            l = cc.Enum({
                None: 0,
                OneColor: 1,
                TwoColor: 2,
                TriColor: 3
            }),
            p = cc.Enum({
                None: 0,
                Lowp: 1,
                Mediump: 2,
                Highp: 3
            }),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shadowUse = !1, t.shadowOffset = cc.v2(1, 1), t.shadowColor = cc.color(0, 0, 0, 150), t.outlineUse = !1, t.outlineWidth = 1, t.outlineColor = cc.color(0, 0, 0, 255), t.olShadowUse = !1, t.olShadowOffset = cc.v2(1, 1), t.olShadowColor = cc.color(0, 0, 0, 150), t.flowLightUse = !1, t.flSpeed = 1, t.flRot = 0, t.flWidth = 15, t.flColor = cc.color(255, 255, 255, 255), t.gradient = l.None, t.color1 = cc.color(255, 0, 0, 255), t.color2 = cc.color(0, 255, 0, 255), t.color3 = cc.color(0, 0, 255, 255), t.glow = p.None, t.glowWidth = 10, t.glowDepth = 2, t.glowColor = cc.color(255, 255, 255, 255), t._mtl = null, t._time = 0, t
                }
                return r(t, e), t.prototype.onLoad = function() {
                    this.initMat()
                }, t.prototype.initMat = function() {
                    this._mtl = this.node.getComponent(cc.Label).getMaterial(0), this._mtl.define("USE_TEXTURE", !0, 0), this.node.getComponent(cc.Label).setMaterial(0, this._mtl), this.use()
                }, t.prototype.use = function() {
                    if (this._mtl) {
                        switch (this._mtl.setProperty("i_resolution", [this.node.width, this.node.height]), this._mtl.setProperty("i_shadow", this.shadowUse ? 1 : 0), this._mtl.setProperty("i_shadowOffset", [-this.shadowOffset.x / this.node.width, -this.shadowOffset.y / this.node.height]), this._mtl.setProperty("i_shadowColor", [this.shadowColor.r / 255, this.shadowColor.g / 255, this.shadowColor.b / 255, this.shadowColor.a / 255]), this._mtl.setProperty("i_outline", this.outlineUse ? 1 : 0), this._mtl.setProperty("i_outlineWidth", [this.outlineWidth / this.node.width, this.outlineWidth / this.node.height]), this._mtl.setProperty("i_outlineColor", [this.outlineColor.r / 255, this.outlineColor.g / 255, this.outlineColor.b / 255, this.outlineColor.a / 255]), this._mtl.setProperty("i_olShadow", this.olShadowUse ? 1 : 0), this._mtl.setProperty("i_olShadowOffset", [-this.olShadowOffset.x / this.node.width, -this.olShadowOffset.y / this.node.height]), this._mtl.setProperty("i_olShadowColor", [this.olShadowColor.r / 255, this.olShadowColor.g / 255, this.olShadowColor.b / 255, this.olShadowColor.a / 255]), this._mtl.setProperty("i_gradient", this.gradient - 1), this.gradient) {
                            case l.None:
                                this._mtl.setProperty("i_color1", [this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255]);
                                break;
                            case l.OneColor:
                            case l.TwoColor:
                            case l.TriColor:
                                this._mtl.setProperty("i_color1", [this.node.color.r / 255, this.node.color.g / 255, this.node.color.b / 255, this.node.color.a / 255]), this._mtl.setProperty("i_color1", [this.color1.r / 255, this.color1.g / 255, this.color1.b / 255, this.color1.a / 255]), this._mtl.setProperty("i_color2", [this.color2.r / 255, this.color2.g / 255, this.color2.b / 255, this.color2.a / 255]), this._mtl.setProperty("i_color3", [this.color3.r / 255, this.color3.g / 255, this.color3.b / 255, this.color3.a / 255])
                        }
                        this._mtl.setProperty("i_flowLight", this.flowLightUse ? 1 : 0), this._mtl.setProperty("i_flTime", this.flSpeed * this._time * 60 / this.node.width), this._mtl.setProperty("i_flRot", 180 * Math.atan(Math.tan(Math.PI * this.flRot / 180) * this.node.height / this.node.width) / Math.PI), this._mtl.setProperty("i_flWidth", this.flWidth / this.node.width), this._mtl.setProperty("i_flColor", [this.flColor.r / 255, this.flColor.g / 255, this.flColor.b / 255, this.flColor.a / 255]), this._mtl.setProperty("i_glow", this.glow), this._mtl.setProperty("i_glowWidth", [this.glowWidth / this.node.width, this.glowWidth / this.node.height]), this._mtl.setProperty("i_glowDepth", this.glowDepth), this._mtl.setProperty("i_glowColor", [this.glowColor.r / 255, this.glowColor.g / 255, this.glowColor.b / 255, this.glowColor.a / 255])
                    }
                }, t.prototype.update = function(e) {
                    this._time += e, this.use()
                }, o([c({
                    tooltip: "\u662f\u5426\u4f7f\u7528\u9634\u5f71"
                })], t.prototype, "shadowUse", void 0), o([c({
                    tooltip: "\u9634\u5f71\u504f\u79fb\uff08\u50cf\u7d20\uff09",
                    visible: function() {
                        return this.shadowUse
                    }
                })], t.prototype, "shadowOffset", void 0), o([c({
                    tooltip: "\u9634\u5f71\u989c\u8272",
                    visible: function() {
                        return this.shadowUse
                    }
                })], t.prototype, "shadowColor", void 0), o([c({
                    tooltip: "\u662f\u5426\u4f7f\u7528\u63cf\u8fb9"
                })], t.prototype, "outlineUse", void 0), o([c({
                    tooltip: "\u63cf\u8fb9\u5bbd\u5ea6\uff08\u50cf\u7d20\uff09",
                    min: 1,
                    visible: function() {
                        return this.outlineUse
                    }
                })], t.prototype, "outlineWidth", void 0), o([c({
                    tooltip: "\u63cf\u8fb9\u989c\u8272",
                    visible: function() {
                        return this.outlineUse
                    }
                })], t.prototype, "outlineColor", void 0), o([c({
                    tooltip: "\u662f\u5426\u4f7f\u7528\u63cf\u8fb9\u9634\u5f71",
                    visible: function() {
                        return this.outlineUse
                    }
                })], t.prototype, "olShadowUse", void 0), o([c({
                    tooltip: "\u63cf\u8fb9\u9634\u5f71\u504f\u79fb\uff08\u50cf\u7d20\uff09",
                    visible: function() {
                        return this.outlineUse && this.olShadowUse
                    }
                })], t.prototype, "olShadowOffset", void 0), o([c({
                    tooltip: "\u63cf\u8fb9\u9634\u5f71\u989c\u8272",
                    visible: function() {
                        return this.outlineUse && this.olShadowUse
                    }
                })], t.prototype, "olShadowColor", void 0), o([c({
                    tooltip: "\u662f\u5426\u4f7f\u7528\u626b\u5149\u52a8\u6548"
                })], t.prototype, "flowLightUse", void 0), o([c({
                    tooltip: "\u626b\u5149\u52a8\u6548\u901f\u5ea6\uff08\u50cf\u7d20\uff09",
                    visible: function() {
                        return this.flowLightUse
                    }
                })], t.prototype, "flSpeed", void 0), o([c({
                    tooltip: "\u626b\u5149\u52a8\u6548\u65cb\u8f6c\u89d2\u5ea6",
                    visible: function() {
                        return this.flowLightUse
                    }
                })], t.prototype, "flRot", void 0), o([c({
                    tooltip: "\u626b\u5149\u52a8\u6548\u5bbd\u5ea6\uff08\u50cf\u7d20\uff09",
                    min: 1,
                    visible: function() {
                        return this.flowLightUse
                    }
                })], t.prototype, "flWidth", void 0), o([c({
                    tooltip: "\u626b\u5149\u6548\u679c\u989c\u8272",
                    visible: function() {
                        return this.flowLightUse
                    }
                })], t.prototype, "flColor", void 0), o([c({
                    tooltip: "\u6587\u5b57\u989c\u8272\nNone 0\uff1a\u5355\u8272\uff0c\u4f7f\u7528\u8282\u70b9color\nOneColor 1\uff1a\u5355\u8272\uff0c\u4f7f\u7528color1\nTwoColor 2\uff1a\u6e10\u53d8\u8272-\u53cc\u8272\nTriColor 3\uff1a\u6e10\u53d8\u8272-\u4e09\u8272",
                    type: cc.Enum(l)
                })], t.prototype, "gradient", void 0), o([c({
                    visible: function() {
                        return this.gradient > l.None
                    }
                })], t.prototype, "color1", void 0), o([c({
                    visible: function() {
                        return this.gradient > l.OneColor
                    }
                })], t.prototype, "color2", void 0), o([c({
                    visible: function() {
                        return this.gradient > l.TwoColor
                    }
                })], t.prototype, "color3", void 0), o([c({
                    tooltip: "\u5916\u53d1\u5149\uff0c\u5916\u53d1\u5149\u8f83\u8017\u6027\u80fd\nNone 0\uff1a\u4e0d\u4f7f\u7528\nLowp 1\uff1a\u4f4e\u7cbe\u5ea6\uff08\u5efa\u8bae\uff09\nMediump 2: \u4e2d\u7b49\u7cbe\u5ea6\nHighp 3\uff1a\u9ad8\u7cbe\u5ea6",
                    type: cc.Enum(p)
                })], t.prototype, "glow", void 0), o([c({
                    tooltip: "\u5916\u53d1\u5149\u5bbd\u5ea6\uff08\u50cf\u7d20\uff09",
                    min: 1,
                    visible: function() {
                        return this.glow > p.None
                    }
                })], t.prototype, "glowWidth", void 0), o([c({
                    tooltip: "\u5916\u53d1\u5149\u989c\u8272\u6df1\u5ea6",
                    min: 1,
                    max: 32,
                    visible: function() {
                        return this.glow > p.None
                    }
                })], t.prototype, "glowDepth", void 0), o([c({
                    tooltip: "\u5916\u53d1\u5149\u989c\u8272",
                    visible: function() {
                        return this.glow > p.None
                    }
                })], t.prototype, "glowColor", void 0), o([s, f("UI/LabelShader1"), h(cc.Label), u(), d()], t)
            }(cc.Component);
        i.default = g, cc._RF.pop()
    }, {}],
    LanguageMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "54dd1hEGE1Bl7Ls3Nzlh/aI", "LanguageMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.LabelReplace = i.ResReplace = void 0;
        var o = e("../common/Func"),
            a = e("../../my/config/Config"),
            s = e("../../my/config/MutabTextDesc"),
            c = e("../common/MessageMgr"),
            f = e("./TextDesc"),
            h = function() {
                function e(e, t) {
                    this.type = e, this.name = t
                }
                return e.prototype.init = function() {}, e
            }();
        i.ResReplace = h;
        var u = function(e) {
            function t(t, i, n) {
                var r = e.call(this, t, i) || this;
                return r.label = n.getComponent(cc.Label), r
            }
            return r(t, e), t.prototype.init = function() {
                this.label.string = d.procLangText(this.name)
            }, t
        }(h);
        i.LabelReplace = u;
        var d = function() {
            function e() {}
            return e.confirmLang = function() {
                this.defaultLang = a.Config.defaultLang;
                var e = o.default.arrayStr2ObjectVal(a.Config.usingLang);
                this.currLang = this.getLang(), this.curLangIndex = e[this.currLang]
            }, e.getLang = function() {
                var e = localStorage.getItem("language");
                return null != e && a.Config.usingLang.find(function(t) {
                    return t == e
                }) || (e = this.defaultLang, localStorage.setItem("language", e)), e
            }, e.gameStart = function(e) {
                for (var t = 0, i = s.LangRes; t < i.length; t++) {
                    var n = i[t],
                        r = cc.find(n.path, e);
                    this.labelNodes.push(r)
                }
                this.showLang()
            }, e.showLang = function() {
                for (var e = 0, t = this.labelNodes; e < t.length; e++) {
                    var i = t[e];
                    i.getComponent(cc.Label).string = this.procLangText(i.name)
                }
                c.MessageMgr.emit(c.MessageName.ChangeLang)
            }, e.setLang = function(e) {
                null != e && e !== this.curLangIndex && (this.curLangIndex = e, this.currLang = a.Config.usingLang[e], localStorage.setItem("language", this.currLang), this.showLang())
            }, e.getLangNode = function(e) {
                if (e) {
                    for (var t = 0; t < e.childrenCount; t++) {
                        if ((i = e.children[t]).name == this.currLang) return i.active = !0, i;
                        i.active = !1
                    }
                    for (t = 0; t < e.childrenCount; t++) {
                        var i;
                        if ((i = e.children[t]).name == this.defaultLang) return i.active = !0, i;
                        i.active = !1
                    }
                    return console.assert(!1, "\u672a\u627e\u5230\u8bed\u8a00\u7684\u76f8\u5173\u8282\u70b9"), null
                }
            }, e.procPrizeText = function(e, t) {
                return cc.js.formatStr(f.LangText[this.currLang].awardsTip, e, f.LangText[this.currLang][t])
            }, e.procLangText = function(e) {
                return f.LangText[this.currLang][e] || f.LangText[this.defaultLang][e]
            }, e.procLangNode = function(t) {
                t.getComponent(cc.Label).string = e.procLangText(t.name)
            }, e.procLangNodeArr = function(e) {
                for (var t = 0, i = e; t < i.length; t++) {
                    var n = i[t];
                    this.procLangNode(n)
                }
            }, e.labelNodes = [], e
        }();
        i.default = d, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../../my/config/MutabTextDesc": "MutabTextDesc",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr",
        "./TextDesc": "TextDesc"
    }],
    LevelMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c079euVqZJOIoZSvuFBFIJd", "LevelMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = e("../my/config/Config"),
            s = e("./LogicMgr"),
            c = cc._decorator,
            f = c.ccclass,
            h = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return r(t, e), i = t, t.prototype.onLoad = function() {
                    i.Instance = this;
                    for (var e = 0; e < a.AdaptLevel.num; e++) this.addNode(e, a.AdaptLevel[e], this.node)
                }, t.prototype.setLevel = function(e, t) {
                    e.setParent(this.node.children[t])
                }, t.prototype.addNode = function(e, t, i) {
                    var n = new cc.Node(t);
                    i.addChild(n), n.setSiblingIndex(e), n.setPosition(s.ConstDefine.vec3ZERO)
                }, t.Instance = new i, i = o([f], t)
            }(cc.Component));
        i.default = h, cc._RF.pop()
    }, {
        "../my/config/Config": "Config",
        "./LogicMgr": "LogicMgr"
    }],
    LogicMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6d9d7SGokVJKofeuF8/zlOP", "LogicMgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ConstDefine = void 0, i.ConstDefine = {
            vec2ZERO: cc.Vec2.ZERO,
            vec3ZERO: cc.Vec3.ZERO,
            emptyFunc: function() {},
            trueFunc: function() {
                return !0
            },
            wsPrefix: "ws://",
            loadingTip: "loadingTip",
            click: "click",
            close: "close",
            rollPrize: "rollPrize",
            msgTip: "msgTip",
            credit: "credit",
            hallUI: "hallUI",
            loginUI: "loginUI",
            msgPromptBox: "msgPromptBox",
            textMgr: "textMgr",
            Background: "Background",
            account: "account",
            password: "password",
            savePwd: "pwd",
            musicName: "musicName",
            toggle: "toggle",
            text: "text",
            remember: "remember",
            singleToggle: "singleToggle",
            none: "none",
            logonData: "logonData",
            tag: "tag",
            ad: "ad",
            bad: "bad",
            kp: "kp",
            kpl: "kpl"
        };
        var n = function() {
            function e() {}
            return e.exitLogin = function() {
                o.default.removeStorage(i.ConstDefine.logonData), o.default.removeStorage(i.ConstDefine.account), a.MessageMgr.emit(a.MessageName.LoginFail), this.login.succeed = !1, s.NetMgr.close(), this.autoLogining = !1, f.default.hide(i.ConstDefine.loadingTip), f.default.getResInfo(i.ConstDefine.loginUI)
            }, e.loginFailTip = function(e, t, n) {
                this.exitLogin(), f.default.getResInfo(i.ConstDefine.msgTip, e, t, n)
            }, e.onLogonNet = function(e) {
                var t, n, c = e.data;
                if (e.mainID === u.Cmd.MDM_MB_LOGON) switch (e.subID) {
                    case u.Cmd.SUB_MB_LOGON_RESULT:
                        if (clearTimeout(this.loginTimeOut), 0 == c.result) {
                            this.login.userID = c.userid, this.login.gameID = c.gameid, this.login.bossID = c.bossid, this.login.score = c.score, this.login.dynamicPass = c.dynamicpass, this.login.noticMsg = c.noticmsg, this.login.winScore = c.winscore, this.login.openWinScore = c.openwinscore, this.login.openJp = c.openjp, this.login.mainContent = c.maincontent;
                            var d = {
                                userid: c.userid
                            };
                            s.NetMgr.send(u.Cmd.MDM_MB_LOGON, u.Cmd.SUB_MB_LOGON_GETGAMESERVER, d), !r.Config.testAcccount && c.needreset ? this.login.needReset = !0 : this.login.needReset = !1, c.opendollar && (this.creditPrefix = "$")
                        } else this.loginFailTip(c.msg, 3, !0);
                        break;
                    case u.Cmd.SUB_MB_GETGAMESERVER_RESULT:
                        if (clearTimeout(this.loginTimeOut), 0 == c.result) {
                            null === c.item && (c.item = {}), this.kpSortGid.length = 0;
                            var l = [],
                                p = [];
                            p.push.apply(p, this.allGid);
                            for (var g = 0; g < c.item.length; g++) {
                                var b = c.item[g],
                                    m = this.kpKeyCfg[b.gid];
                                m && (m.bsPort = b.port, m.tablecount = b.tablecount, m.address = b.address, m.testGame ? l.push(b.gid) : this.kpSortGid.push(b.gid), cc.js.array.remove(p, b.gid))
                            }(t = this.kpSortGid).push.apply(t, l), (n = this.kpSortGid).push.apply(n, p), f.default.hide(i.ConstDefine.loadingTip), a.MessageMgr.emit(a.MessageName.LoginSucceeded), r.Config.autoEnterGame && h.default.startGame(this.kpKeyCfg[r.Config.autoEnterGame]);
                            var y = localStorage.getItem("autoEnterGame");
                            if (y) {
                                var _ = Number(y);
                                this.kpKeyCfg[_] && h.default.startGame(this.kpKeyCfg[_])
                            }
                            if (r.Config.autoLogin) {
                                var v = {
                                    l: this.login,
                                    k: this.kpSortGid
                                };
                                o.default.setStorage(i.ConstDefine.logonData, o.default.customEncry(JSON.stringify(v)))
                            }
                        } else this.loginFailTip(c.msg, 3, !0)
                }
            }, e.connect = function(e, t) {
                var n = this;
                r.Config.testAcccount = !1, r.Config.debug && r.Config.testAcFormat && e.match(r.Config.testAcFormat) && (r.Config.testAcccount = !0), this.login.account = e, this.login.pwd = t, f.default.getResInfo(i.ConstDefine.loadingTip), s.NetMgr.createWebSocket(), this.autoLogining || (clearTimeout(this.loginTimeOut), this.loginTimeOut = setTimeout(function() {
                    n.loginFailTip(c.default.procLangText("badNetStatus"), 5, !0)
                }, 15e3))
            }, e.onTextLoad = function() {
                a.MessageMgr.on(a.MessageName.NetMsg, this.onLogonNet, this);
                var e = null;
                if (r.Config.autoLogin) {
                    var t = o.default.getStorage(i.ConstDefine.logonData);
                    if (t) {
                        f.default.getResInfo(i.ConstDefine.hallUI);
                        var n = o.default.customDecrypt(t);
                        e = JSON.parse(n), this.autoLogining = !0, this.browsePage = !1, this.login = e.l, this.kpSortGid = e.k, this.login.succeed = !1, this.connect(o.default.getStorage(i.ConstDefine.account), o.default.getStorage(i.ConstDefine.savePwd))
                    }
                }
                e || f.default.getResInfo(r.Config.beginPage)
            }, e.sendJpReq = function() {
                var e = {
                    bossid: this.login.bossID
                };
                s.NetMgr.send(u.Cmd.MDM_MB_LOGON, u.Cmd.SUB_MB_LOGON_GETJPSCORE, e)
            }, e.v2Tmp = cc.Vec3.ZERO, e.v3Tmp = cc.Vec3.ZERO, e.browsePage = !0, e.autoLogining = !1, e.bigGG = {}, e.kpKeyCfg = {}, e.kpSortGid = [], e.favArr = [], e.useSoftKeyboard = !0, e.allGid = [], e.msgNotify = {
                maintenance: []
            }, e.jp = [0, 0, 0, 0], e.jpTotalCredit = 0, e.singleCreditPos = cc.Vec3.ZERO, e.doubleCreditPos = cc.Vec3.ZERO, e.creditPrefix = "", e.login = {
                succeed: !1,
                account: "",
                userID: 0,
                gameID: 0,
                score: 0,
                bossID: 0,
                dynamicPass: "",
                openJp: 0,
                needReset: !1,
                winScore: 0,
                openWinScore: !1,
                noticMsg: void 0,
                mainContent: void 0,
                headIndex: 0,
                pwd: ""
            }, e
        }();
        i.default = n;
        var r = e("../my/config/Config"),
            o = e("./common/Func"),
            a = e("./common/MessageMgr"),
            s = e("./net/NetMgr"),
            c = e("./res/LanguageMgr"),
            f = e("./res/DyncMgr"),
            h = e("./net/GameNet"),
            u = e("./net/EEvent");
        cc._RF.pop()
    }, {
        "../my/config/Config": "Config",
        "./common/Func": "Func",
        "./common/MessageMgr": "MessageMgr",
        "./net/EEvent": "EEvent",
        "./net/GameNet": "GameNet",
        "./net/NetMgr": "NetMgr",
        "./res/DyncMgr": "DyncMgr",
        "./res/LanguageMgr": "LanguageMgr"
    }],
    LoginUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "40ea4Tr+EZP34t8n7ZEeWF4", "LoginUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.LoginUI = void 0;
        var o, a = e("../../base/common/Func"),
            s = e("../config/Config"),
            c = e("../../base/res/LanguageMgr"),
            f = e("../../base/common/MessageMgr"),
            h = e("../../base/common/SpecialFunc"),
            u = e("../../base/SoundMgr"),
            d = e("../../base/res/DyncLoadedBase"),
            l = e("../../base/res/DyncMgr"),
            p = e("../../base/LogicMgr");
        (function(e) {
            e[e.account = 0] = "account", e[e.password = 1] = "password", e[e.forget = 2] = "forget", e[e.loginBtn = 3] = "loginBtn", e[e.num = 4] = "num"
        })(o || (o = {}));
        var g = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n._beautyResInfo = [], n._accountEdit = null, n._pwdEdit = null, n
            }
            return r(t, e), t.prototype.initParams = function() {
                l.default.isLoad(p.ConstDefine.hallUI) || l.default.getResInfo(p.ConstDefine.hallUI), h.default.hideTextElem(), this._beautyLogoSpt = cc.find("bg/beautyLogo", this.nodeInfo.root).getComponent(cc.Sprite);
                var e = this.nodeInfo.root.getChildByName("root"),
                    t = e.getChildByName("login");
                this._loginBtn = t.getComponent(cc.Button), t.on(p.ConstDefine.click, this.loginClick, this);
                var i = e.getChildByName(p.ConstDefine.account);
                this._accountEdit = i.getComponent(cc.EditBox), h.default.editInput(i, e);
                var n = e.getChildByName(p.ConstDefine.password);
                this._pwdEdit = n.getComponent(cc.EditBox), h.default.editInput(n, e);
                var r = e.getChildByName("version").getComponent(cc.Label);
                r.string = s.Config.version, r.node.active = !1;
                var o = e.getChildByName("assist");
                o.getChildByName("forget").on(p.ConstDefine.click, this.forget, this);
                var a = o.getChildByName("rememberMe");
                a.active = !1, a.on(p.ConstDefine.toggle, this.rememberToggle, this), this._rememberToggle = a.getComponent(cc.Toggle), p.default.useSoftKeyboard || (this._accountEdit._impl._elem.autocomplete = "off", this._pwdEdit._impl._elem.autocomplete = "new-password", n.on("editing-return", this.returnKeyOn, this), i.on("editing-return", this.returnKeyOn, this))
            }, t.prototype.resetParams = function() {
                if (p.default.useSoftKeyboard || (this._accountEdit._impl._elem.style.visibility = "visible", this._pwdEdit._impl._elem.style.visibility = "visible"), this._accountEdit.string = "", this._pwdEdit.string = "", this._loginBtn.interactable = !0, this.changeLang(), f.MessageMgr.on(f.MessageName.ChangeLang, this.changeLang, this), f.MessageMgr.on(f.MessageName.TouchStart, this.touchStart, this), f.MessageMgr.on(f.MessageName.LoginSucceeded, this.loginSucceed, this), f.MessageMgr.on(f.MessageName.LoginFail, this.loginFail, this), Number(localStorage.getItem(p.ConstDefine.remember))) {
                    this._rememberToggle.check();
                    var e = localStorage.getItem(p.ConstDefine.account);
                    e && (this._accountEdit.string = e);
                    var t = localStorage.getItem(p.ConstDefine.savePwd);
                    t && (this._pwdEdit.string = window.atob(t))
                } else this._rememberToggle.uncheck()
            }, t.prototype.loginSucceed = function() {
                s.Config.autoLogin && (a.default.setStorage(p.ConstDefine.account, this._accountEdit.string), a.default.setStorage(p.ConstDefine.savePwd, p.default.login.pwd)), this._rememberToggle.isChecked ? (localStorage.setItem(p.ConstDefine.account, this._accountEdit.string), localStorage.setItem(p.ConstDefine.savePwd, window.btoa(this._pwdEdit.string))) : (localStorage.removeItem(p.ConstDefine.account), localStorage.removeItem(p.ConstDefine.savePwd), this._accountEdit.string = "", this._pwdEdit.string = ""), this.hide()
            }, t.prototype.loginFail = function() {
                this._loginBtn.interactable = !0
            }, t.prototype.hide = function() {
                p.default.useSoftKeyboard || (this._accountEdit._impl._elem.style.visibility = "hidden", this._pwdEdit._impl._elem.style.visibility = "hidden"), a.default.setStorage("id", this._accountEdit.string), f.MessageMgr.off(f.MessageName.ChangeLang, this.changeLang, this), f.MessageMgr.off(f.MessageName.TouchStart, this.touchStart, this), f.MessageMgr.off(f.MessageName.LoginSucceeded, this.loginSucceed, this), f.MessageMgr.off(f.MessageName.LoginFail, this.loginFail, this), e.prototype.hide.call(this)
            }, t.prototype.touchStart = function() {
                l.default.isLoad("keyboardUI") || u.default.playEffect(p.ConstDefine.click)
            }, t.prototype.returnKeyOn = function() {
                this._loginBtn.interactable && this.login()
            }, t.prototype.changeLang = function() {
                this._curLang !== c.default.currLang && (this._curLang = c.default.currLang, this._beautyResInfo.length = 0, h.default.getLangDir(s.Config.dyncLoadDirIndex.beautyLogo, "beautyLogo", cc.SpriteFrame, this._beautyResInfo), this.resetBeautyLogo(), this._accountEdit.placeholder = c.default.procLangText("inputAccoutTip"), this._pwdEdit.placeholder = c.default.procLangText("inputPwdTip"))
            }, t.prototype.resetBeautyLogo = function() {
                var e = this;
                if (this._beautyResInfo.length > 0) {
                    var t = a.default.randomInt(0, this._beautyResInfo.length - 1);
                    l.default.bundles[s.Config.dyncLoadDirIndex.beautyLogo].load(this._beautyResInfo[t].path, cc.SpriteFrame, function(t, i) {
                        e._beautyLogoSpt.spriteFrame && e._beautyLogoSpt.spriteFrame.decRef(), i.addRef(), e._beautyLogoSpt.spriteFrame = i
                    })
                }
            }, t.prototype.rememberToggle = function() {
                var e = "1";
                this._rememberToggle.isChecked || (this._accountEdit.string = "", this._pwdEdit.string = "", e = "0", localStorage.removeItem(p.ConstDefine.account), localStorage.removeItem(p.ConstDefine.savePwd)), localStorage.setItem(p.ConstDefine.remember, e)
            }, t.prototype.forget = function() {
                u.default.playEffect(p.ConstDefine.click), l.default.getResInfo(p.ConstDefine.msgPromptBox, c.default.procLangText("forgetTip"))
            }, t.prototype.loginClick = function() {
                u.default.playEffect(p.ConstDefine.click), this.login()
            }, t.prototype.login = function() {
                this.resetBeautyLogo();
                var e = this._accountEdit.string,
                    t = this._pwdEdit.string;
                switch (!0) {
                    case 0 === e.length:
                        l.default.getResInfo(p.ConstDefine.msgTip, c.default.procLangText("accountEmptyTip"), 2, !0);
                        break;
                    case 0 === t.length:
                        l.default.getResInfo(p.ConstDefine.msgTip, c.default.procLangText("pwdEmptyTip"), 2, !0);
                        break;
                    default:
                        this._loginBtn.interactable = !1, p.default.connect(e, a.default.encryMd5(t))
                }
            }, t
        }(d.default);
        i.LoginUI = g, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/DyncMgr": "DyncMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "../config/Config": "Config"
    }],
    Main: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3df069O4aRLa7UVXVrKUwvj", "Main");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = e("./common/Func"),
            s = e("./common/MessageMgr"),
            c = e("../my/config/Config"),
            f = e("./effect/EffectMgr"),
            h = e("./net/NetMgr"),
            u = e("./res/DyncMgr"),
            d = e("./res/LanguageMgr"),
            l = e("./common/SpecialFunc"),
            p = e("./LogicMgr"),
            g = e("./common/Interface"),
            b = cc._decorator,
            m = b.ccclass,
            y = (b.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return r(t, e), i = t, t.prototype.onLoad = function() {}, t.prototype.start = function() {
                    var e = this;
                    cc.debug.setDisplayStats(!1), cc.game.setFrameRate(30), i.frameSize = cc.view.getFrameSize();
                    var t = window.document.location.href,
                        n = t.indexOf("/hall");
                    if (c.Config.basePath = t, n >= 0 && (c.Config.basePath = t.substring(0, n + 1)), c.Config.configPath = c.Config.basePath + "plat/config/hall/" + c.Config.platName + "/", cc.game.canvas.style.cursor = "url('" + c.Config.configPath + "cursor.png'), pointer", cc.sys.isBrowser) {
                        var r = new Date,
                            o = c.Config.configPath + "config.json?=" + r.getTime();
                        h.NetMgr.sendHttpGet(o, this.quaryLoginConfigCB.bind(this)), this.quaryMsg()
                    } else this.quaryLoginConfigCB(void 0);
                    s.MessageMgr.once(s.MessageName.LoadDyncResFinish, function() {
                        f.EffectMgr.Instance.trigger(f.EffectMgr.EffectType.EffectMeetCondition, 20, e.quaryMsg.bind(e), p.ConstDefine.emptyFunc)
                    })
                }, t.prototype.quaryMsg = function() {
                    var e = new Date,
                        t = c.Config.configPath + "msg.json?=" + e.getTime();
                    h.NetMgr.sendHttpGet(t, function(e) {
                        p.default.msgNotify = e
                    })
                }, t.prototype.quaryLoginConfigCB = function(e) {
                    a.default.mergeJSON(e, c.Config), l.default.isRotateDev() ? p.default.useSoftKeyboard = !0 : p.default.useSoftKeyboard = c.Config.pcUseSoftKey;
                    for (var t = 0, i = c.Config.bigGG; t < i.length; t++) --(r = i[t]).t, p.default.bigGG[r.gid] = r;
                    for (var n in c.Config.bigGG = null, this.convertCardArrCfg(c.Config.kapian), c.Config.kapian = null, this.convertCardArrCfg(c.Config.testGames, !0), c.Config.testGames = null, c.Config.wsUrl = p.ConstDefine.wsPrefix + c.Config.bsIp + ":" + c.Config.wsPort, c.Config.bsUrl = "http://" + c.Config.bsIp + ":" + c.Config.bsPort, c.Config.debug ? "undefined" != typeof VConsole && (window.vConsole = new VConsole) : (console.log = p.ConstDefine.emptyFunc, console.warn = p.ConstDefine.emptyFunc), p.default.kpKeyCfg) {
                        var r; - 1 === (r = p.default.kpKeyCfg[n]).url.indexOf("http://") && (r.url = c.Config.basePath + r.url)
                    }
                    s.MessageMgr.emit(s.MessageName.LoadCfgFinish), d.default.confirmLang(), u.default.init()
                }, t.prototype.convertCardArrCfg = function(e, t) {
                    void 0 === t && (t = !1);
                    for (var i = 0, n = e; i < n.length; i++) {
                        var r = n[i]; - 1 !== p.default.allGid.indexOf(r.gid) ? console.error("\u6ce8\u610f\u5361\u7247\u914d\u7f6e\u4e2d\u6709\u91cd\u590d\u7684gid,\u7a0b\u5e8f\u9ed8\u8ba4\u9009\u53d6\u5148\u914d\u7f6e\u7684", r.gid) : (p.default.allGid.push(r.gid), p.default.kpKeyCfg[r.gid] = r, r.testGame = t, void 0 !== r.t && ((r.t > g.GameTag.num || r.t <= 0) && console.error("\u914d\u7f6e\u91cct\u8d4b\u503c\u8fc7\u5927\u8fc7\u5c0f", r), r.t -= 1), null == r.title && (r.title = r.gameName))
                    }
                }, t.prototype.registerEvent = function() {
                    l.default.isRotateDev() && (cc.game.canvas.addEventListener("blur", function() {
                        cc.game.isPaused() || cc.game.pause()
                    }), cc.game.canvas.addEventListener("focus", function() {
                        cc.game.isPaused() && cc.game.resume()
                    }))
                }, t.reSetScreenSize = !0, i = o([m], t)
            }(cc.Component));
        i.default = y, cc._RF.pop()
    }, {
        "../my/config/Config": "Config",
        "./LogicMgr": "LogicMgr",
        "./common/Func": "Func",
        "./common/Interface": "Interface",
        "./common/MessageMgr": "MessageMgr",
        "./common/SpecialFunc": "SpecialFunc",
        "./effect/EffectMgr": "EffectMgr",
        "./net/NetMgr": "NetMgr",
        "./res/DyncMgr": "DyncMgr",
        "./res/LanguageMgr": "LanguageMgr"
    }],
    MessageMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1bec6YFPxJItrDUe1BlFzER", "MessageMgr");
        var n, r = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
            var n = Array(e),
                r = 0;
            for (t = 0; t < i; t++)
                for (var o = arguments[t], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
            return n
        };
        Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.MessageMgr = i.MessageName = void 0,
            function(e) {
                e.LoginSucceeded = "LoginSucceeded", e.LoginFail = "LoginFail", e.LoadCfgFinish = "LoadCfgFinish", e.LoadDyncResFinish = "LoadDyncResFinish", e.TouchStart = "TouchStart", e.TouchMove = "TouchMove", e.TouchEnd = "TouchEnd", e.OnRevNetData = "OnRevNetData", e.FrameChange = "FrameChange", e.SetScaleMode = "SetScaleMode", e.ChangeLang = "ChangeLang", e.NetOpen = "NetOpen", e.NetClose = "NetClose", e.FixScore = "FixScore", e.PlayerInfo = "PlayerInfo", e.NetMsg = "NetMsg", e.DayPrizeRep = "DayPrizeRep", e.UserSocreInfo = "UserSocreInfo", e.ChangeHeadIcon = "ChangeHeadIcon", e.UpdateFavCards = "UpdateFavCards", e.ExitBrosePage = "ExitBrosePage"
            }(n || (n = {})), i.MessageName = n;
        var o = function() {
            function e() {}
            return e.once = function(e, t, i) {
                this.eventTarget.once(e, t, i)
            }, e.on = function(e, t, i) {
                this.eventTarget.on(e, t, i)
            }, e.emit = function(e) {
                for (var t, i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                (t = this.eventTarget).emit.apply(t, r([e], i))
            }, e.off = function(e, t, i) {
                this.eventTarget.off(e, t, i)
            }, e.eventTarget = new cc.EventTarget, e
        }();
        i.MessageMgr = o, cc._RF.pop()
    }, {}],
    ModPwdBox: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3de2aUVQ1RIfYqxR1cqoN2O", "ModPwdBox");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ModPwdBox = void 0;
        var o = e("../../base/res/LanguageMgr"),
            a = e("../../base/net/NetMgr"),
            s = e("../../base/net/EEvent"),
            c = e("../config/Config"),
            f = e("../../base/SoundMgr"),
            h = e("../../base/common/view/Tip"),
            u = e("../../base/res/DyncMgr"),
            d = e("../../base/common/Func"),
            l = e("../../base/common/MessageMgr"),
            p = e("../../base/common/SpecialFunc"),
            g = e("../../base/LogicMgr"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("close").on(g.ConstDefine.click, this.close, this);
                    var t = this._popupMethod.root.getChildByName("offsetX"),
                        i = t.getChildByName("old");
                    this._oldNodeEdit = i.getComponent(cc.EditBox), p.default.editInput(i, this._popupMethod.root);
                    var n = t.getChildByName("new");
                    this._newNodeEdit = n.getComponent(cc.EditBox), p.default.editInput(n, this._popupMethod.root);
                    var r = t.getChildByName("reEnter");
                    this._reEnterNodeEdit = r.getComponent(cc.EditBox), p.default.editInput(r, this._popupMethod.root);
                    var o = cc.find("singleBuntton/confirm", t);
                    this._cfmBtn = o.getComponent(cc.Button), o.on(g.ConstDefine.click, this.confirm, this), g.default.useSoftKeyboard || (this._oldNodeEdit._impl._elem.autocomplete = "new-password", this._newNodeEdit._impl._elem.autocomplete = "new-password", this._reEnterNodeEdit._impl._elem.autocomplete = "new-password", i.on("editing-return", this.confirm, this), n.on("editing-return", this.confirm, this), r.on("editing-return", this.confirm, this))
                }, t.prototype.resetParams = function() {
                    this._oldNodeEdit.string = "", this._newNodeEdit.string = "", this._reEnterNodeEdit.string = "", g.default.useSoftKeyboard || (this._oldNodeEdit._impl._elem.style.visibility = "visible", this._newNodeEdit._impl._elem.style.visibility = "visible", this._reEnterNodeEdit._impl._elem.style.visibility = "visible"), e.prototype.resetParams.call(this), l.MessageMgr.on(l.MessageName.NetMsg, this.onLogonNet, this)
                }, t.prototype.hide = function() {
                    g.default.useSoftKeyboard || (this._oldNodeEdit._impl._elem.style.visibility = "hidden", this._newNodeEdit._impl._elem.style.visibility = "hidden", this._reEnterNodeEdit._impl._elem.style.visibility = "hidden"), e.prototype.hide.call(this)
                }, t.prototype.close = function() {
                    e.prototype.close.call(this), l.MessageMgr.off(l.MessageName.NetMsg, this.onLogonNet, this)
                }, t.prototype.onLogonNet = function(e) {
                    if (e.mainID === s.Cmd.MDM_MB_LOGON && e.subID == s.Cmd.SUB_MB_CHANGEPASSWORD_RESULT) {
                        var t = e.data;
                        u.default.getResInfo(g.ConstDefine.msgTip, t.msg, 5, !0), 0 == t.result && (g.default.login.pwd = d.default.encryMd5(this._newPwdStr), c.Config.autoLogin && d.default.setStorage(g.ConstDefine.savePwd, g.default.login.pwd), "1" == localStorage.getItem(g.ConstDefine.remember) && localStorage.setItem(g.ConstDefine.savePwd, window.btoa(this._newPwdStr)), this.hide()), clearTimeout(this._cfmTimeOut), this._cfmBtn.interactable = !0, a.NetMgr.close()
                    }
                }, t.prototype.confirm = function() {
                    var e = this;
                    f.default.playEffect(g.ConstDefine.click);
                    var t = this._oldNodeEdit.string;
                    this._newPwdStr = this._newNodeEdit.string;
                    var i = this._reEnterNodeEdit.string;
                    if ("" !== t && "" !== this._newPwdStr && "" !== i) {
                        if (!c.Config.testAcccount) {
                            if (this._newPwdStr.length < c.Config.accPwdMinLength || this._newPwdStr.length > c.Config.accPwdMaxLength) return void u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("lengthTip"), 2, !0);
                            if (!new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])").test(this._newPwdStr)) return void u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("pwdFormatTip"), 2, !0)
                        }
                        this._newPwdStr === i ? t !== this._newPwdStr ? g.default.login.succeed && (l.MessageMgr.once(l.MessageName.NetOpen, this.netOpen, this), a.NetMgr.createWebSocket(), this._cfmBtn.interactable = !1, clearTimeout(this._cfmTimeOut), this._cfmTimeOut = setTimeout(function() {
                            clearTimeout(e._cfmTimeOut), e._cfmBtn.interactable = !0, u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("badNetStatus")), l.MessageMgr.off(l.MessageName.NetOpen, e.netOpen, e)
                        }, 5e3)) : u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("noSameTip"), 2, !0) : u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("pwdunlikeTip"), 2, !0)
                    } else u.default.getResInfo(g.ConstDefine.msgTip, o.default.procLangText("pwdNotEmptyTip"), 2, !0)
                }, t.prototype.netOpen = function() {
                    var e = {
                        userid: g.default.login.userID,
                        password: d.default.encryMd5(this._oldNodeEdit.string),
                        newpassword: d.default.encryMd5(this._newPwdStr),
                        dynamicpass: g.default.login.dynamicPass
                    };
                    a.NetMgr.send(s.Cmd.MDM_MB_LOGON, s.Cmd.SUB_MB_LOGON_CHANGEPASSWORD, e)
                }, t
            }(h.PopupBase);
        i.ModPwdBox = b, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/Tip": "Tip",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/DyncMgr": "DyncMgr",
        "../../base/res/LanguageMgr": "LanguageMgr",
        "../config/Config": "Config"
    }],
    MsgPromptBox: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "77abeXLtDVEs7UPB8dFdojm", "MsgPromptBox");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ExitPromptBox = void 0;
        var o = e("../../base/common/view/Tip"),
            a = e("../../base/LogicMgr"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    e.prototype.initParams.call(this);
                    var t = this._popupMethod.root.getChildByName("adjustX").getChildByName("tip");
                    this._textTip = t.getChildByName("text").getComponent(cc.Label), this.regeditBtn()
                }, t.prototype.resetParams = function(t) {
                    e.prototype.resetParams.call(this), this._textTip.string = t
                }, t.prototype.regeditBtn = function() {
                    this._popupMethod.root.getChildByName("close").on(a.ConstDefine.click, this.close, this), this._popupMethod.root.getChildByName("adjustX").getChildByName("btnConfirm").on(a.ConstDefine.click, this.close, this)
                }, t.prototype.isReset = function() {
                    return !0
                }, t
            }(o.PopupBase);
        i.default = s;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.regeditBtn = function() {
                this._popupMethod.root.getChildByName("close").on(a.ConstDefine.click, this.close, this), this._popupMethod.root.getChildByName("adjustX").getChildByName("btnConfirm").on(a.ConstDefine.click, this.exitConfirm, this)
            }, t.prototype.exitConfirm = function() {
                a.default.exitLogin(), this.close()
            }, t
        }(s);
        i.ExitPromptBox = c, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/common/view/Tip": "Tip"
    }],
    MutabEffectCfg: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "344e4047dpMtaUjpG6xOKdG", "MutabEffectCfg"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.TextCfg = i.MutabEffectCfg = void 0, i.MutabEffectCfg = {
            type: {}
        }, i.TextCfg = {
            weapon: {
                scale: .4
            },
            golden: {
                spacingX: -18
            },
            score: {
                spacingX: -10
            },
            zhadanxie: {
                spacingX: -10
            }
        }, cc._RF.pop()
    }, {}],
    MutabResCfg: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dbeeacVy9RNKq1fq3E685uc", "MutabResCfg"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.DyncResCfg = void 0;
        var n = e("../../base/common/view/NodeHandle"),
            r = e("./Config"),
            o = e("../../base/res/DyncAnimPlay"),
            a = e("../view/HallUI"),
            s = e("../view/LoginUI"),
            c = e("../../base/res/ResCfg"),
            f = e("../view/HeadUI"),
            h = e("../view/NoticeTip"),
            u = e("../view/ModPwdBox"),
            d = e("../view/SettingBox"),
            l = e("../view/JpUI"),
            p = e("../view/JpRankUI"),
            g = e("../../base/common/view/Tip"),
            b = e("../../base/res/ParticlePlay"),
            m = e("../../base/res/DyncLoadedBase"),
            y = e("../view/MsgPromptBox"),
            _ = e("../view/BigAdvertUI"),
            v = e("../view/AdvertUI"),
            w = e("../view/ShareUI"),
            M = e("../view/KeyboardUI"),
            S = e("../../base/debug/DebugMgr"),
            C = e("../view/PcFullScreenUI"),
            E = e("../view/RollPrize"),
            k = e("../../base/LogicMgr");
        i.DyncResCfg = {
            loadingTip: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/loadingTip",
                nodeCfg: {
                    handle: n.NodeHandleType.none,
                    layer: r.AdaptLevel.loadTip,
                    class: g.AutoHideTip
                }
            },
            loginUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/loginUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.loginUI,
                    class: s.LoginUI
                }
            },
            hallUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/hallUI",
                nodeCfg: {
                    layer: r.AdaptLevel.hallUI,
                    class: a.default
                }
            },
            rollPrize: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/rollPrize",
                nodeCfg: {
                    layer: r.AdaptLevel.msgTip,
                    class: E.default
                }
            },
            headUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/headUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: f.HeadUI
                }
            },
            keyboardUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/softKeyboard",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.keyboardUI,
                    class: M.default
                }
            },
            jpUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/jpUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.jpUI,
                    class: l.default
                }
            },
            msgTip: {
                preLoad: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/msgTip",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip2,
                    class: g.AutoHideTextTip
                }
            },
            noticeTip: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/noticeTip",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: h.NoticeTip
                }
            },
            jpRankUI: {
                loadingTip: !0,
                type: c.DyncInfoType.singleNode,
                path: "prefabs/jpRankUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.jpUI,
                    class: p.default
                }
            },
            noFavTip: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/noFavTip",
                nodeCfg: {
                    layer: r.AdaptLevel.hallUI,
                    class: g.TextTip
                }
            },
            msgPromptBox: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/msgPromptBox",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: y.default
                }
            },
            exitPromptBox: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/msgPromptBox",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: y.ExitPromptBox
                }
            },
            modPwdBox: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/modPwdBox",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: u.ModPwdBox
                }
            },
            settingBox: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/settingBox",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: d.SettingBox
                }
            },
            shareUI: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/shareUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: w.ShareUI
                }
            },
            advert: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/advert",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    class: v.AdvertUI
                }
            },
            pcFullScreenUI: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/pcFullScreenUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.jpUI,
                    class: C.default
                }
            },
            bigAdvertUI: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/bigAdvertUI",
                nodeCfg: {
                    handle: n.NodeHandleType.active,
                    layer: r.AdaptLevel.msgTip,
                    class: _.default
                }
            },
            click: {
                type: c.DyncInfoType.mulNode,
                path: "anim/click",
                nodeCfg: {
                    handle: n.NodeHandleType.opacity,
                    layer: r.AdaptLevel.clickTip,
                    class: o.default
                }
            },
            bounderyMask: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/bounderyMask",
                nodeCfg: {
                    layer: r.AdaptLevel.bounderyMask
                }
            },
            debugPanel: {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/debugPanel",
                nodeCfg: {
                    layer: r.AdaptLevel.debug,
                    class: S.default
                }
            }
        };
        for (var P = [], I = 0, N = P; I < N.length; I++) {
            var R = N[I];
            i.DyncResCfg[R] = {
                type: c.DyncInfoType.mulNode,
                path: "particle/" + R,
                nodeCfg: {
                    level: 1,
                    handle: n.NodeHandleType.active,
                    class: b.default
                }
            }
        }
        for (var B = 0, x = P = []; B < x.length; B++) {
            var T = x[B];
            i.DyncResCfg[T] = {
                type: c.DyncInfoType.singleNode,
                path: "prefabs/" + T
            }
        }
        for (var A = 0, L = P = []; A < L.length; A++) T = L[A], i.DyncResCfg[T] = {
            type: c.DyncInfoType.singleNode,
            loadIndex: 1,
            path: "prefabs/" + T,
            nodeCfg: {
                class: m.DyncSetParent
            }
        };
        for (var D = 0, O = P = ["card", "singleToggle", "singleToggleA", "singleToggleB", k.ConstDefine.textMgr]; D < O.length; D++) T = O[D], i.DyncResCfg[T] = {
            type: c.DyncInfoType.singleNode,
            path: "prefabs/" + T,
            nodeCfg: {
                handle: n.NodeHandleType.active
            }
        };
        for (var j = 0, U = P = []; j < U.length; j++) T = U[j], i.DyncResCfg[T] = {
            type: c.DyncInfoType.mulNode,
            path: "prefabs/" + T,
            nodeCfg: {
                handle: n.NodeHandleType.pos
            }
        };
        for (var F = 0, z = P = ["announcement", "music", "setting", "sound", "music1", "music2", "music3", "music4", "music5", "music6", "randomPlay", "binddevice", "unboundA", "unboundB", "jpRecord", "total", "grand", "major", "minor", "mini", "order", "userID", "jackpot", "time", "bounus", "noData", "noRecordLst", "ranking"]; F < z.length; F++) T = z[F], i.DyncResCfg[T] = {
            loadMode: c.DyncLoadMode.language,
            loadType: cc.SpriteFrame,
            path: T
        };
        for (var q = 0, G = P = []; q < G.length; q++) T = G[q], i.DyncResCfg[T] = {
            loadType: cc.Prefab,
            loadMode: c.DyncLoadMode.language,
            path: T
        };
        P = null, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/common/view/NodeHandle": "NodeHandle",
        "../../base/common/view/Tip": "Tip",
        "../../base/debug/DebugMgr": "DebugMgr",
        "../../base/res/DyncAnimPlay": "DyncAnimPlay",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/ParticlePlay": "ParticlePlay",
        "../../base/res/ResCfg": "ResCfg",
        "../view/AdvertUI": "AdvertUI",
        "../view/BigAdvertUI": "BigAdvertUI",
        "../view/HallUI": "HallUI",
        "../view/HeadUI": "HeadUI",
        "../view/JpRankUI": "JpRankUI",
        "../view/JpUI": "JpUI",
        "../view/KeyboardUI": "KeyboardUI",
        "../view/LoginUI": "LoginUI",
        "../view/ModPwdBox": "ModPwdBox",
        "../view/MsgPromptBox": "MsgPromptBox",
        "../view/NoticeTip": "NoticeTip",
        "../view/PcFullScreenUI": "PcFullScreenUI",
        "../view/RollPrize": "RollPrize",
        "../view/SettingBox": "SettingBox",
        "../view/ShareUI": "ShareUI",
        "./Config": "Config"
    }],
    MutabTextDesc: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8379aR0k1RIlKLtaAAnwPc7", "MutabTextDesc"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.TextCfg = i.MutabLangText = i.OptLangRes = i.LangRes = void 0, i.LangRes = [], i.OptLangRes = {
            fish: []
        }, i.MutabLangText = {
            ch: {
                jinchuanbuyu: "jinchuanbuyu",
                niaowangguilai: "niaowangguilai",
                wanhuixiji: "wanhuixiji",
                huoqilin: "huoqilin",
                likuipiyu: "likuipiyu",
                liuxingyu: "liuxingyu",
                yaoqianshu: "yaoqianshu",
                crabking: "crabking",
                zhangyuxiaozi: "zhangyuxiaozi",
                oceanmonster: "oceanmonster",
                yinyan: "yinyan",
                eyuchuanqi: "eyuchuanqi",
                longfeng: "longfeng",
                maxituan: "maxituan",
                mofachuan: "mofachuan",
                nuhaichicheng: "nuhaichicheng",
                shengtangwushi: "shengtangwushi",
                huoshanshou: "huoshanshou",
                luomajingji: "luomajingji",
                alashendeng: "alashendeng",
                caishenfafafa: "caishenfafafa",
                kenoball: "kenoball",
                penguins: "penguins",
                xibuyeniu: "xibuyeniu",
                shengdanlaoren: "shengdanlaoren",
                fruit777: "fruit777",
                haidao: "haidao",
                lucky777: "lucky777",
                aiji: "aiji",
                happyduck: "happyduck",
                fruitparty: "fruitparty",
                haidao_2: "haidao_2",
                wanshenjie: "wanshenjie",
                happyfarm: "happyfarm",
                beiou: "beiou",
                jixieniao: "jixieniao",
                maxituan_15: "maxituan_15",
                chinesestyle: "chinesestyle",
                thanksDay: "thanksDay",
                saima: "saima",
                game777China: "game777China",
                animalforest: "animalforest",
                summerfruit: "summerfruit",
                aiji_2: "aiji_2",
                huaxianzi: "huaxianzi",
                baoshikuangchang: "baoshikuangchang",
                labourDay: "labourDay",
                haidao_3: "haidao_3",
                shengpatelike: "shengpatelike",
                HaiYang: "HaiYang",
                YuanGuWenMing: "YuanGuWenMing",
                game777LasVegas: "game777LasVegas",
                FortuneGod: "FortuneGod",
                MonsterHunter: "MonsterHunter",
                BinGo: "BinGo",
                QingRenJie: "QingRenJie",
                ChaoJiWan: "ChaoJiWan",
                FuHuoJie: "FuHuoJie",
                XiFangZhuShen: "XiFangZhuShen",
                HuaShengDun: "HuaShengDun",
                RoyalKnight: "RoyalKnight",
                MuQinJie: "MuQinJie",
                MeiGuoZhiPai: "MeiGuoZhiPai",
                XiBuNiuZai: "XiBuNiuZai",
                MemorialDay: "MemorialDay",
                username: "\u7528\u6237\u540d",
                password: "\u5bc6\u7801",
                login: "\u767b\u5f55",
                loginTip: "\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef",
                homepage: "\u9996\u9875",
                games: "\u6e38\u620f",
                download: "\u4e0b\u8f7d",
                aboutUs: "\u5173\u4e8e",
                all_games: "\u5168\u90e8",
                fishing_games: "\u9c7c\u673a",
                slot_games: "\u8f6e\u7ebf"
            },
            en: {
                jinchuanbuyu: "jinchuanbuyu",
                niaowangguilai: "niaowangguilai",
                wanhuixiji: "wanhuixiji",
                huoqilin: "huoqilin",
                likuipiyu: "likuipiyu",
                liuxingyu: "liuxingyu",
                yaoqianshu: "yaoqianshu",
                crabking: "crabking",
                zhangyuxiaozi: "zhangyuxiaozi",
                oceanmonster: "oceanmonster",
                yinyan: "yinyan",
                eyuchuanqi: "eyuchuanqi",
                longfeng: "longfeng",
                maxituan: "maxituan",
                mofachuan: "mofachuan",
                nuhaichicheng: "nuhaichicheng",
                shengtangwushi: "shengtangwushi",
                huoshanshou: "huoshanshou",
                luomajingji: "luomajingji",
                alashendeng: "alashendeng",
                caishenfafafa: "caishenfafafa",
                kenoball: "kenoball",
                penguins: "penguins",
                xibuyeniu: "xibuyeniu",
                shengdanlaoren: "shengdanlaoren",
                fruit777: "fruit777",
                haidao: "haidao",
                lucky777: "lucky777",
                aiji: "aiji",
                happyduck: "happyduck",
                fruitparty: "fruitparty",
                haidao_2: "haidao_2",
                wanshenjie: "wanshenjie",
                happyfarm: "happyfarm",
                beiou: "beiou",
                jixieniao: "jixieniao",
                maxituan_15: "maxituan_15",
                chinesestyle: "chinesestyle",
                thanksDay: "thanksDay",
                saima: "saima",
                game777China: "game777China",
                animalforest: "animalforest",
                summerfruit: "summerfruit",
                aiji_2: "aiji_2",
                huaxianzi: "huaxianzi",
                baoshikuangchang: "baoshikuangchang",
                labourDay: "labourDay",
                haidao_3: "haidao_3",
                shengpatelike: "shengpatelike",
                HaiYang: "HaiYang",
                YuanGuWenMing: "YuanGuWenMing",
                game777LasVegas: "game777LasVegas",
                FortuneGod: "FortuneGod",
                MonsterHunter: "MonsterHunter",
                BinGo: "BinGo",
                QingRenJie: "QingRenJie",
                ChaoJiWan: "ChaoJiWan",
                FuHuoJie: "FuHuoJie",
                XiFangZhuShen: "XiFangZhuShen",
                HuaShengDun: "HuaShengDun",
                RoyalKnight: "RoyalKnight",
                MuQinJie: "MuQinJie",
                MeiGuoZhiPai: "MeiGuoZhiPai",
                XiBuNiuZai: "XiBuNiuZai",
                MemorialDay: "MemorialDay",
                username: "user name:",
                password: "password:",
                login: "login",
                loginTip: "Wrong user name or password",
                homepage: "HOME",
                games: "Games",
                download: "Download",
                aboutUs: "ABOUT",
                all_games: "ALL",
                new: "NEW",
                fishing_games: "FISHING",
                slot_games: "SLOT",
                others: "OTHERS",
                favorite: "FAVORITE",
                cancle: "cancle",
                sure: "ok",
                errorTip: "ERROR",
                required: "Required",
                notRunning: "The current game is not running",
                searchTip: "Find a game"
            }
        }, i.TextCfg = {
            weapon: {
                scale: .4
            },
            golden: {
                spacingX: -18
            },
            score: {
                spacingX: -10
            },
            zhadanxie: {
                spacingX: -10
            }
        }, cc._RF.pop()
    }, {}],
    NetMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9091dhAsSVLkLxhqEW+WOhW", "NetMgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.NetMgr = i.TipProExt = i.HttpGetProto = void 0;
        var n, r = e("../common/Func"),
            o = e("../common/MessageMgr"),
            a = e("../../my/config/Config"),
            s = e("../res/DyncMgr"),
            c = e("./EEvent"),
            f = e("../LogicMgr");
        (function(e) {
            e[e.json = 0] = "json", e[e.string = 1] = "string"
        })(n = i.HttpGetProto || (i.HttpGetProto = {})),
        function(e) {
            e[e.kick = 0] = "kick", e[e.stoppplay = 1] = "stoppplay", e[e.maintain = 2] = "maintain", e[e.keepGoing = 3] = "keepGoing", e[e.tip = 100] = "tip", e[e.bc = 101] = "bc"
        }(i.TipProExt || (i.TipProExt = {}));
        var h = function() {
            function e() {}
            return e.reconnect = function(e) {
                void 0 === e && (e = !1), s.default.getResInfo(f.ConstDefine.msgTip, "badNetStatus")
            }, e.createWebSocket = function() {
                if (this.close(), this._connect = !0, navigator.onLine) try {
                    this._socket = new WebSocket(a.Config.wsUrl, a.Config.wsProtocol), this._socket.onclose = this.onClose.bind(this), this._socket.onopen = this.onOpen.bind(this), this._socket.onmessage = this.onMessage.bind(this), this._socket.onerror = this.onError.bind(this)
                } catch (e) {
                    this.reconnect()
                } else this.reconnect()
            }, e.onMessage = function(e) {
                var t = JSON.parse(e.data);
                o.MessageMgr.emit(o.MessageName.NetMsg, t)
            }, e.clearConnectTimeOut = function() {
                null != this._connectTimeout && (clearTimeout(this._connectTimeout), this._connectTimeout = void 0)
            }, e.close = function() {
                this.clearConnectTimeOut(), this._connect = !1, console.log("NetMgr close "), this._socket && (this._socket.readyState === WebSocket.CLOSED && navigator.onLine || this._socket.close(), this._socket.onopen = null), this._socket = null
            }, e.onOpen = function() {
                if (!f.default.login.succeed) {
                    var e = {
                        account: f.default.login.account,
                        password: f.default.login.pwd,
                        version: a.Config.version
                    };
                    console.log("NetMgr onOpen"), this.send(c.Cmd.MDM_MB_LOGON, c.Cmd.SUB_MB_LOGON_WEBSOCKET, e)
                }
                o.MessageMgr.emit(o.MessageName.NetOpen)
            }, e.onClose = function() {
                this.clearConnectTimeOut(), o.MessageMgr.emit(o.MessageName.NetClose)
            }, e.onError = function(e) {
                console.log("\u7f51\u7edc\u53d1\u751f\u9519\u8bef\uff01", e)
            }, e.isOpen = function() {
                return !!this._socket && this._socket.readyState === WebSocket.OPEN
            }, e.send = function(e, t, i) {
                this.isOpen() ? (i.mainID = e, i.subID = t, this._socket.send(JSON.stringify(i))) : s.default.getResInfo(f.ConstDefine.msgTip, "badNetStatus")
            }, e.sendCmd = function(e, t) {
                this.send(e, t, {})
            }, e.reqBrowseInfo = function(t) {
                f.default.browsePage && e.sendHttpGet(a.Config.bsUrl + "/WS/MobileInterface.ashx?action=getgamelist&userid=1", t)
            }, e.reqDayPrizeInfo = function() {
                var t = (new Date).getTime(),
                    i = "userid=" + f.default.login.userID + "&time=" + t + "&signature=" + r.default.getSignature(t, f.default.login.userID, f.default.login.dynamicPass);
                e.sendHttpGet(a.Config.bsUrl + "/WS/MobileInterface.ashx?action=getlotteryinfo&" + i, function(e) {
                    o.MessageMgr.emit(o.MessageName.DayPrizeRep, e)
                })
            }, e.sendHttpGet = function(e, t, i) {
                void 0 === i && (i = n.json);
                var r = new XMLHttpRequest;
                r.open("GET", e, !0), r.onreadystatechange = function() {
                    if (4 == r.readyState && r.status >= 200 && r.status < 300) {
                        var e = r.responseText;
                        switch (i) {
                            case n.json:
                                t(JSON.parse(e));
                                break;
                            case n.string:
                                t(e)
                        }
                    }
                }, r.send()
            }, e._connectTimeout = void 0, e._connect = !1, e
        }();
        i.NetMgr = h, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../LogicMgr": "LogicMgr",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr",
        "../res/DyncMgr": "DyncMgr",
        "./EEvent": "EEvent"
    }],
    NodeHandle: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "edb303Cu01LN6uic5aJRPCn", "NodeHandle");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.createNodeHandle = i.NodeHandle = i.NodeHandleType = void 0;
        var o, a = e("../../../my/config/Config");
        (function(e) {
            e[e.none = 0] = "none", e[e.opacity = 1] = "opacity", e[e.active = 2] = "active", e[e.inactive = 3] = "inactive", e[e.pos = 4] = "pos"
        })(o = i.NodeHandleType || (i.NodeHandleType = {}));
        var s = function() {
            function e() {}
            return e.prototype.reset = function() {}, e.prototype.clear = function() {}, e.prototype.isReset = function() {
                return !1
            }, e
        }();
        i.NodeHandle = s;
        var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.reset = function(e) {
                    e.opacity = 255
                }, t.prototype.clear = function(e) {
                    e.opacity = 0
                }, t.prototype.isReset = function(e) {
                    return 0 === e.opacity
                }, t
            }(s),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.reset = function(e) {
                    e.active = !0
                }, t.prototype.clear = function(e) {
                    e.active = !1
                }, t.prototype.isReset = function(e) {
                    return !e.active
                }, t
            }(s),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.reset = function(e) {
                    e.active = !1
                }, t
            }(f),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._initPos = cc.Vec3.ZERO, t
                }
                return r(t, e), t.prototype.reset = function(e) {
                    e.setPosition(this._initPos), e.active = !0
                }, t.prototype.clear = function(e) {
                    this._initPos.set(e.position), e.setPosition(a.Config.outScreenPos)
                }, t.prototype.isReset = function(e) {
                    return e.position.equals(a.Config.outScreenPos)
                }, t
            }(s);
        i.createNodeHandle = function(e) {
            var t = null;
            switch (e) {
                case o.opacity:
                    t = new c;
                    break;
                case o.inactive:
                    t = new h;
                    break;
                case o.pos:
                    t = new u;
                    break;
                case o.none:
                    t = new s;
                    break;
                default:
                    t = new f
            }
            return t
        }, cc._RF.pop()
    }, {
        "../../../my/config/Config": "Config"
    }],
    NoticeTip: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3a2faMXhDNMvoNEh1ntHcuV", "NoticeTip");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.NoticeTip = void 0;
        var o = e("../../base/common/view/Tip"),
            a = e("../../base/LogicMgr"),
            s = e("../../base/SoundMgr"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    var t = this;
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("close").on(a.ConstDefine.click, this.close, this);
                    var i = this._popupMethod.root.getChildByName("offsetX").getChildByName("mid");
                    this._leftFrame = i.getChildByName("leftFrame"), this._toggleChildren = this._leftFrame.children;
                    for (var n = this._toggleChildren[0], r = 1; r < 5; r++) cc.instantiate(n).setParent(this._leftFrame);
                    var o = function(e) {
                            s._toggleChildren[e].on("toggle", function() {
                                t.toggleClick(e)
                            }, s)
                        },
                        s = this;
                    for (r = 0; r < this._toggleChildren.length; r++) o(r);
                    var c = i.getChildByName("rightFrame");
                    this._content = c.getChildByName("content").getComponent(cc.Label)
                }, t.prototype.resetParams = function() {
                    e.prototype.resetParams.call(this);
                    var t = a.default.login.mainContent;
                    if (t.length > 0) {
                        var i = 0;
                        for (i = 0; i < t.length; i++) {
                            var n = this._toggleChildren[i];
                            n.getChildByName("Background").getChildByName("text").getComponent(cc.Label).string = t[i].maintitle, n.getChildByName("checkmark").getChildByName("text").getComponent(cc.RichText).string = "<outline color=#FFD800 width=1><color=#ffffff>" + t[i].maintitle + "</color></outline>", n.active = !0
                        }
                        for (; i < this._toggleChildren.length; i++) this._leftFrame.children[i].active = !1;
                        this.setContent(0)
                    } else
                        for (var r = 0, o = this._leftFrame.children; r < o.length; r++) o[r].active = !1
                }, t.prototype.setContent = function(e) {
                    this._lastIndex = e, this._content.string = a.default.login.mainContent[this._lastIndex].maincontent
                }, t.prototype.toggleClick = function(e) {
                    s.default.playEffect(a.ConstDefine.click), e !== this._lastIndex && this.setContent(e)
                }, t
            }(o.PopupBase);
        i.NoticeTip = c, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/view/Tip": "Tip"
    }],
    PageView: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d5595HwvidDkJm6chwHhLpH", "PageView");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.LoopTogglePageView = i.TogglePageView = i.LeftRightDouble = i.RightShowBtn = i.LeftRightBtn = i.LeftRightOnly = i.BtnControl = i.BtnControlType = void 0;
        var o, a = e("../../effect/EffectMgr"),
            s = e("../../LogicMgr"),
            c = e("../../res/DyncMgr"),
            f = e("../../SoundMgr");
        (function(e) {
            e[e.normal = 0] = "normal", e[e.leftRightSeq = 1] = "leftRightSeq", e[e.rightShow = 2] = "rightShow", e[e.leftRightDouble = 3] = "leftRightDouble"
        })(o = i.BtnControlType || (i.BtnControlType = {}));
        var h = function() {
            function e(e) {
                this._pgView = e
            }
            return e.prototype.pageChange = function() {}, e.prototype.resetPageCnt = function() {}, e
        }();
        i.BtnControl = h;
        var u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t
        }(h);
        i.LeftRightOnly = u;
        var d = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n._leftBtnNode = i.root.getChildByName("leftBtn"), n._leftBtnNode.on(s.ConstDefine.click, n.leftClick, n), n._leftBtnNode.active = !0, n._rightBtnNode = i.root.getChildByName("rightBtn"), n._rightBtnNode.on(s.ConstDefine.click, n.rightClick, n), n._rightBtnNode.active = !0, n
            }
            return r(t, e), t.prototype.pageChange = function() {
                this._rightBtnNode.active = !0, this._leftBtnNode.active = !0, this._pgView.isBegin() && (this._leftBtnNode.active = !1), this._pgView.isEnd() && (this._rightBtnNode.active = !1)
            }, t.prototype.leftClick = function() {
                f.default.playEffect("winslide"), this._pgView.lastPg(), this._rightBtnNode.active = !0, this._pgView.isBegin() && (this._leftBtnNode.active = !1)
            }, t.prototype.rightClick = function() {
                f.default.playEffect("winslide"), this._pgView.nextPg(), this._leftBtnNode.active = !0, this._pgView.isEnd() && (this._rightBtnNode.active = !1)
            }, t
        }(u);
        i.LeftRightBtn = d;
        var l, p, g = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                return n._leftBtnNode = i.leftNode || i.root.getChildByName("leftBtn"), n._leftBtnNode.on(s.ConstDefine.click, n.leftClick, n), n._leftBtnNode.active = !1, n._rightBtnNode = i.rightNode || i.root.getChildByName("rightBtn"), n._rightBtnNode.on(s.ConstDefine.click, n.rightClick, n), n._rightBtnNode.active = !1, n
            }
            return r(t, e), t.prototype.resetPageCnt = function(e) {
                e <= 1 && (this._leftBtnNode.active = !1, this._rightBtnNode.active = !1)
            }, t.prototype.pageChange = function() {
                this._pgView.pageCount <= 1 || (this._pgView.isEnd() ? (this._rightBtnNode.active = !1, this._leftBtnNode.active = !0) : (this._rightBtnNode.active = !0, this._leftBtnNode.active = !1))
            }, t.prototype.leftClick = function() {
                f.default.playEffect("winslide"), this._pgView.lastPg(), this._pgView.isEnd() || (this._rightBtnNode.active = !0, this._leftBtnNode.active = !1)
            }, t.prototype.rightClick = function() {
                f.default.playEffect("winslide"), this._pgView.nextPg(), this._pgView.isEnd() && (this._rightBtnNode.active = !1, this._leftBtnNode.active = !0)
            }, t
        }(u);
        i.RightShowBtn = g,
            function(e) {
                e[e.last = 0] = "last", e[e.next = 1] = "next", e[e.num = 2] = "num"
            }(l || (l = {})),
            function(e) {
                e[e.last = 0] = "last", e[e.next = 1] = "next", e[e.num = 2] = "num"
            }(p || (p = {}));
        var b = function(e) {
            function t(t, i) {
                var n = e.call(this, t, i) || this;
                n._btnNode = [], n._defaultShowNode = [], n._defaultHideNode = [];
                for (var r = 0; r < l.num - 1; ++r) n._btnNode[r] = [];
                var o = i.leftNode || i.root.getChildByName("leftBtn");
                o.active = !0;
                var a = o.getChildByName("last");
                n._btnNode[l.last].push(a), n._defaultShowNode.push(a);
                var c = o.getChildByName("next");
                n._btnNode[l.next][p.last] = c, n._defaultHideNode.push(c);
                var f = i.rightNode || i.root.getChildByName("rightBtn");
                f.active = !0, a = f.getChildByName("last"), n._btnNode[l.last][p.next] = a, n._defaultHideNode.push(a), c = f.getChildByName("next"), n._btnNode[l.next][p.next] = c, n._defaultShowNode.push(c);
                var h = n._btnNode[l.last];
                for (r = 0; r < h.length; ++r) h[r].on(s.ConstDefine.click, n.lastClick, n), h[r].active = !1;
                var u = n._btnNode[l.next];
                for (r = 0; r < u.length; ++r) u[r].on(s.ConstDefine.click, n.nextClick, n), u[r].active = !1;
                return n
            }
            return r(t, e), t.prototype.resetPageCnt = function(e) {
                if (e <= 1)
                    for (var t = 0; t < l.num - 1; ++t)
                        for (var i = 0; i < p.num - 1; ++i) this._btnNode[t][i].active = !1
            }, t.prototype.pageChange = function() {
                if (!(this._pgView.pageCount <= 1))
                    if (this._pgView.isEnd()) {
                        for (var e = this._btnNode[l.last], t = 0; t < e.length; ++t) e[t].active = !0;
                        var i = this._btnNode[l.next];
                        for (t = 0; t < i.length; ++t) i[t].active = !1
                    } else this._pgView.isBegin()
            }, t.prototype.lastClick = function() {
                f.default.playEffect("winslide"), this._pgView.lastPg()
            }, t.prototype.nextClick = function() {
                f.default.playEffect("winslide"), this._pgView.nextPg(), this._pgView.isEnd() && (this._rightBtnNode.active = !1, this._leftBtnNode.active = !0)
            }, t
        }(h);
        i.LeftRightDouble = b;
        var m = function() {
                function e() {}
                return e.prototype.check = function() {}, e.prototype.setVisible = function() {}, e
            }(),
            y = function(e) {
                function t(t, i, n, r, o) {
                    var a = e.call(this) || this;
                    a._toggles = [], a._pgView = o;
                    for (var c = function(e) {
                            var n = cc.instantiate(t);
                            n.setParent(i), h._toggles.push(n.getComponent(cc.Toggle)), n.on("toggle", function() {
                                f.default.playEffect(s.ConstDefine.click), a._pgView.toggleRoll(e), a._pgView.btnControl.pageChange()
                            })
                        }, h = this, u = n; u < r; u++) c(u);
                    return a
                }
                return r(t, e), t.prototype.check = function(e) {
                    this._toggles[e].check()
                }, t.prototype.setVisible = function(e, t) {
                    this._toggles[e].node.active = t
                }, t
            }(m),
            _ = function() {
                function e(e) {
                    var t = this;
                    if (this._playEffect = !0, this._lastPgIndex = 0, this._pgView = e.root.getComponent(cc.PageView), this._pgChangeCall = e.pgChangeCall, e.contents) {
                        var i = [];
                        i.push.apply(i, e.contents);
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n];
                            r.setParent(null), r.active = !0, this._pgView.addPage(r)
                        }
                    }
                    switch (this.insertPage(e), this._contents = this._pgView.content.children, e.btnType) {
                        case o.leftRightSeq:
                            this._btnControl = new d(this, e);
                            break;
                        case o.rightShow:
                            this._btnControl = new g(this, e);
                            break;
                        default:
                            this._btnControl = new h(this, e)
                    }
                    var a = e.toggleRoot || e.root.getChildByName("toggleRoot");
                    a ? c.default.getResInfo(e.toggleName || s.ConstDefine.singleToggle).then(function(i) {
                        i || console.warn("\u6ca1\u6709\u8fd9\u6837\u7684toggle\u8d44\u6e90\u540d,\u662f\u4e0d\u662f\u914d\u7f6e\u9519\u8bef\u4e86", e.toggleName, s.ConstDefine.singleToggle), t._toggle = new y(i.nodeInfo.root, a, t._toggleBeginIndex, t._pageCount, t), c.default.hide(s.ConstDefine.singleToggle), t.toggleCreateFinish(e)
                    }) : (this._toggle = new m, this.toggleCreateFinish(e))
                }
                return Object.defineProperty(e.prototype, "pageCount", {
                    get: function() {
                        return this._pageCount
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "pgView", {
                    get: function() {
                        return this._pgView
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "contents", {
                    get: function() {
                        return this._contents
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "btnControl", {
                    get: function() {
                        return this._btnControl
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.resetPageCnt = function(e) {
                    this._pageCount = e, this._pgView.getPages().length = e, this._pgView._calculateBoundary(), this._btnControl.resetPageCnt(e)
                }, e.prototype.toggleCreateFinish = function(e) {
                    var t = this;
                    e.root.on("scroll-ended", this.pgScrollEnded.bind(this)), this.toggleRoll(this._toggleBeginIndex, !1), e.finishCall && e.finishCall(this), e.root.on("page-turning", function() {
                        t._playEffect ? f.default.playEffect("winslide") : t._playEffect = !0
                    })
                }, e.prototype.insertPage = function() {
                    this._toggleBeginIndex = 0, this._pageCount = this._pgView.getPages().length
                }, e.prototype.toggleRoll = function(e, t) {
                    void 0 === t && (t = !0), this.toggleOn(e), this.pgScrollEnded(t)
                }, e.prototype.toggleOn = function(e) {
                    this._pgView.scrollToPage(e, 0)
                }, e.prototype.pgScrollEnded = function(e) {
                    void 0 === e && (e = !0);
                    var t = this._pgView.getCurrentPageIndex();
                    this._toggle.check(t);
                    for (var i = 0; i < this._pageCount; ++i) this._contents[i].opacity = i < t - 1 || i > t + 1 ? 0 : 255;
                    this._btnControl.pageChange(), this._pgChangeCall && this._pgChangeCall(t, e)
                }, e.prototype.setVisible = function(e, t) {
                    this._toggle.setVisible(e, t), this._contents[e].active = t
                }, e.prototype.nextPg = function() {
                    var e = this._pgView.getCurrentPageIndex();
                    e = ++e >= this._pageCount ? this._toggleBeginIndex : e, this._pgView.scrollToPage(e, void 0)
                }, e.prototype.lastPg = function() {
                    var e = this._pgView.getCurrentPageIndex();
                    e = --e >= 0 ? e : this._pageCount - 1, this._pgView.scrollToPage(e, void 0)
                }, e.prototype.isEnd = function() {
                    return this._pgView.getCurrentPageIndex() === this._pageCount - 1
                }, e.prototype.isBegin = function() {
                    return this._pgView.getCurrentPageIndex() === this._toggleBeginIndex
                }, e
            }();
        i.TogglePageView = _;
        var v = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.insertPage = function(e) {
                var t = this._pgView.content.childrenCount;
                if (t > 1) {
                    var i = this._pgView.content.children[0],
                        n = this._pgView.content.children[t - 1];
                    this._pgView.insertPage(cc.instantiate(n), 0), this._pgView.addPage(cc.instantiate(i)), e.audoPlay && a.EffectMgr.Instance.trigger(a.EffectMgr.EffectType.EffectMeetCondition, 5, this.switchAd.bind(this), s.ConstDefine.emptyFunc)
                }
                this._toggleBeginIndex = 1, this._pageCount = this._pgView.getPages().length - 1
            }, t.prototype.pgScrollEnded = function(e) {
                void 0 === e && (e = !0);
                var t = this._pgView.getCurrentPageIndex();
                t === this._pageCount ? (t = 1, this.toggleOn(t)) : 0 === this._pgView.getCurrentPageIndex() && (t = this._pageCount - 1, this.toggleOn(t)), this._toggle.check(t - 1), this._pgChangeCall && this._pgChangeCall(t - 1, e)
            }, t.prototype.switchAd = function() {
                var e = this._pgView.getCurrentPageIndex();
                return e = ++e > this._pageCount ? this._toggleBeginIndex : e, this._playEffect = !1, this._pgView.scrollToPage(e, void 0), !1
            }, t
        }(_);
        i.LoopTogglePageView = v, cc._RF.pop()
    }, {
        "../../LogicMgr": "LogicMgr",
        "../../SoundMgr": "SoundMgr",
        "../../effect/EffectMgr": "EffectMgr",
        "../../res/DyncMgr": "DyncMgr"
    }],
    ParticlePlay: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "83dab9drO5Dm5Md+nTzB+33", "ParticlePlay");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.initParams = function() {
                e.prototype.initParams.call(this);
                var t = this._nodeInfo.root.getComponentsInChildren(cc.ParticleSystem3D);
                this._particle2Ds = this._nodeInfo.root.getComponentsInChildren(cc.ParticleSystem), this._playTime = 0;
                for (var i = 0, n = 0; n < this._particle2Ds.length; n++)(i = this._particle2Ds[n].duration) > this._playTime && (this._playTime = i);
                for (n = 0; n < t.length; n++)(i = this.getParTime(t[n])) > this._playTime && (this._playTime = i)
            }, t.prototype.resetParams = function(t, i, n) {
                for (var r = this, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e.prototype.resetParams.apply(this, o), this._nodeInfo.root.setPosition(t), this._nodeInfo.root.scale = i || 1, this._nodeInfo.root.angle = n || 0;
                for (var s = 0, c = this._particle2Ds; s < c.length; s++) {
                    var f = c[s];
                    f.resetSystem()
                }
                setTimeout(function() {
                    r.hide()
                }, 1e3 * (this._playTime + .1))
            }, t.prototype.hide = function() {
                e.prototype.hide.call(this);
                for (var t = 0, i = this._particle2Ds; t < i.length; t++) i[t].stopSystem()
            }, t.prototype.getParTime = function(e) {
                return e.duration + e.startLifetime.getMax() + e.startDelay.getMax()
            }, t
        }(e("./DyncLoadedBase").default);
        i.default = o, cc._RF.pop()
    }, {
        "./DyncLoadedBase": "DyncLoadedBase"
    }],
    PcFullScreenUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c6fc29Lx8BGl7s55wPI8H0o", "PcFullScreenUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../../base/LogicMgr"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    this._fullScreen = this.nodeInfo.root.getChildByName("fullScreen"), this._fullScreen.on(o.ConstDefine.click, this.fullScreenClick, this), this._normal = this.nodeInfo.root.getChildByName("normal"), this._normal.on(o.ConstDefine.click, this.normalClick, this), this.visibleFullScreen(!this.isFull()), window.onresize = this.resize.bind(this)
                }, t.prototype.fullScreenClick = function() {
                    this.reqFullScreen(), this.visibleFullScreen(!1), this._manual = !0
                }, t.prototype.normalClick = function() {
                    this.exitFullScreen(), this.visibleFullScreen(!0), this._manual = !0
                }, t.prototype.visibleFullScreen = function(e) {
                    this._fullScreen.active = e, this._normal.active = !e
                }, t.prototype.reqFullScreen = function() {
                    if (window.top.reqFullScreen) return window.top.reqFullScreen();
                    var e = window.top.document.documentElement;
                    e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                }, t.prototype.exitFullScreen = function() {
                    if (window.top.exitFullScreen) return window.top.exitFullScreen();
                    var e = window.top.document;
                    e.exitFullscreen ? e.exitFullscreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen()
                }, t.prototype.isFullScreen = function() {
                    if (window.top.isFullScreen) return window.top.isFullScreen();
                    var e = window.top.document;
                    return e.fullScreen || e.mozFullScreen || e.webkitIsFullScreen || e.msFullscreenElement || !1
                }, t.prototype.resize = function() {
                    this._manual ? this._manual = !1 : this.visibleFullScreen(!this.isFull())
                }, t.prototype.isFull = function() {
                    return Math.abs(window.screen.height - window.document.documentElement.clientHeight) <= 17
                }, t
            }(e("../../base/res/DyncLoadedBase").default);
        i.default = a, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase"
    }],
    RankUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7d281HJ5eZPtoG11GtQrdXW", "RankUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o, a = e("../../base/common/Func"),
            s = e("../../base/common/MessageMgr"),
            c = e("../../base/common/SpecialFunc"),
            f = e("../../base/common/view/UIPicText"),
            h = e("../../base/net/EEvent"),
            u = e("../../base/net/NetMgr"),
            d = e("../../base/res/DyncLoadedBase"),
            l = e("../../base/res/LanguageMgr"),
            p = e("../../base/LogicMgr");
        (function(e) {
            e[e.ranking = 0] = "ranking", e[e.total = 1] = "total", e[e.grand = 2] = "grand", e[e.major = 3] = "major", e[e.minor = 4] = "minor", e[e.mini = 5] = "mini", e[e.order = 6] = "order", e[e.userID = 7] = "userID", e[e.jackpot = 8] = "jackpot", e[e.time = 9] = "time", e[e.bounus = 10] = "bounus", e[e.noData = 11] = "noData", e[e.noRecordLst = 12] = "noRecordLst", e[e.num = 13] = "num"
        })(o || (o = {}));
        var g = ["grand", "major", "minor", "mini"],
            b = function() {
                function e(e, t) {
                    this._lastShowFrame = 0, this._root = e, this._frameChildren = e.getChildByName("frame").children;
                    for (var i = 0, n = this._frameChildren; i < n.length; i++) {
                        var r = n[i];
                        r.opacity = 0, r.active = !0
                    }
                    this._frameChildren[this._lastShowFrame].opacity = 255, this._orderUItext = new f.default("order", e.getChildByName("order")), this._orderUItext.setStr(t + 1), this._idLabel = cc.find("userID/id", e).getComponent(cc.Label), this._timeLabel = e.getChildByName("time").getComponent(cc.Label), this._creditUItext = new f.default(p.ConstDefine.credit, e.getChildByName(p.ConstDefine.credit))
                }
                return e.prototype.init = function(e) {
                    this._idLabel.string = e.gameid.toString(), this._timeLabel.string = e.date, this._creditUItext.setValue(e.score), this._lastShowFrame !== e.jptype && (this._frameChildren[this._lastShowFrame].opacity = 0, this._lastShowFrame = e.jptype, this._frameChildren[this._lastShowFrame].opacity = 255), this.setActive(!0)
                }, e.prototype.setActive = function(e) {
                    this._root.active = e
                }, e
            }(),
            m = function(e) {
                function t(t, i) {
                    var n = e.call(this, t, i) || this;
                    n._awardCredit = [], n._rankItems = [], n._langSpts = [];
                    for (var r = 0; r < o.num; r++) n._langSpts[r] = new d.DyncLangSprite;
                    return n
                }
                return r(t, e), t.prototype.initParams = function() {
                    var e = this,
                        t = this.nodeInfo.root.getChildByName("frame");
                    t.getChildByName("close").on(p.ConstDefine.click, this.hide, this);
                    var i = t.getChildByName("offsetX");
                    this._langSpts[o.ranking].init(i.getChildByName("ranking"));
                    var n = i.getChildByName("showInfoFrame");
                    this._infoTip = n.getChildByName("info").getComponent(cc.Label), this._infoTip.string = "", this._noRecordNode = n.getChildByName("noRecordLst"), this._noRecordNode.opacity = 0, this._langSpts[o.noRecordLst].init(this._noRecordNode);
                    for (var r = i.getChildByName("mid").getChildByName("firstCol"), a = function(t) {
                            r.children[t].on("toggle", function() {
                                e.firstColClick(t)
                            })
                        }, s = 0; s < r.childrenCount; s++) a(s);
                    for (s = 0; s < o.num; s++) this._langSpts[s].start()
                }, t.prototype.resetParams = function(e) {
                    s.MessageMgr.on(s.MessageName.NetMsg, this.onLogonNet, this), this._awrdChildren[e].getComponent(cc.Toggle).check(), this.toggleClick(e)
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), s.MessageMgr.off(s.MessageName.NetMsg, this.onLogonNet, this)
                }, t.prototype.firstColClick = function(e) {
                    if (p.default.login.succeed) {
                        var t = {
                            type: 100,
                            datetype: e
                        };
                        u.NetMgr.send(h.Cmd.MDM_MB_LOGON, h.Cmd.SUB_MB_LOGON_GETRANKITEM, t)
                    }
                }, t.prototype.toggleClick = function() {}, t.prototype.onLogonNet = function(e) {
                    if (e.mainID === h.Cmd.MDM_MB_LOGON) switch (e.subID) {
                        case h.Cmd.SUB_MB_GETJPRECORD_RESULT:
                            var t = e.data;
                            if (0 === t.result)
                                if (null != t.item) {
                                    for (var i = this._rankItems.length; i < t.item.length; i++) {
                                        var n = cc.instantiate(this._itemPrefab);
                                        n.setParent(this._contentNode), this._rankItems.push(new b(n, i))
                                    }
                                    for (var r = t.item.length; r < this._rankItems.length; r++) this._rankItems[r].setActive(!1);
                                    this._noRecordNode.opacity = 255;
                                    for (var o = 0; o < t.item.length; o++)
                                        if ((m = t.item[o]).date = a.default.change2Time(m.date), this._rankItems[o].init(m), 255 === this._noRecordNode.opacity && p.default.login.gameID === m.gameid) {
                                            this._noRecordNode.opacity = 0;
                                            var s = l.default.procLangText(g[m.jptype]),
                                                f = p.default.creditPrefix + cc.js.formatStr("I get %s prize with %s at %s", s, c.default.convertDecimalNum(m.score), m.date);
                                            this._infoTip.string = f
                                        }
                                } else this._infoTip.string = "", this._nodataNode.opacity = 255;
                            else {
                                cc.warn(t.msg), this._infoTip.string = "", this._nodataNode.opacity = 0;
                                for (var u = 0, d = this._rankItems; u < d.length; u++) {
                                    var m;
                                    (m = d[u]).setActive(!1)
                                }
                            }
                    }
                }, t
            }(d.default);
        i.default = m, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/UIPicText": "UIPicText",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/DyncLoadedBase": "DyncLoadedBase",
        "../../base/res/LanguageMgr": "LanguageMgr"
    }],
    ReconnectTip: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "073eertZB5Ggr4u/B01v24l", "ReconnectTip");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../../base/common/view/Tip"),
            a = e("../../base/LogicMgr"),
            s = e("../../base/net/NetMgr"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("cancel").on(a.ConstDefine.click, this.cancelClick, this)
                }, t.prototype.cancelClick = function() {
                    s.NetMgr.close()
                }, t
            }(o.PopupBase);
        i.default = c, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/common/view/Tip": "Tip",
        "../../base/net/NetMgr": "NetMgr"
    }],
    ResCfg: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7dc6c2andxEaZkef50r/oc3", "ResCfg"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.DyncInfoType = i.DyncLoadMode = i.ResType = i.DyncResMode = i.ResOpera = void 0,
            function(e) {
                e[e.NODE = 0] = "NODE", e[e.PROPERTY = 1] = "PROPERTY", e[e.RESSprite = 2] = "RESSprite", e[e.RESLabel = 3] = "RESLabel", e[e.Num = 4] = "Num"
            }(i.ResOpera || (i.ResOpera = {})),
            function(e) {
                e[e.Wait = 0] = "Wait", e[e.Once = 1] = "Once", e[e.Frequent = 2] = "Frequent", e[e.Controlled = 3] = "Controlled", e[e.Destroy = 4] = "Destroy"
            }(i.DyncResMode || (i.DyncResMode = {})),
            function(e) {
                e[e.Prefab = 0] = "Prefab", e[e.SpriteFrame = 1] = "SpriteFrame"
            }(i.ResType || (i.ResType = {})),
            function(e) {
                e[e.default = 0] = "default", e[e.language = 1] = "language"
            }(i.DyncLoadMode || (i.DyncLoadMode = {})),
            function(e) {
                e[e.asset = 0] = "asset", e[e.singleNode = 1] = "singleNode", e[e.mulNode = 2] = "mulNode"
            }(i.DyncInfoType || (i.DyncInfoType = {})), cc._RF.pop()
    }, {}],
    RollPrize: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "32b7ecUnJ1EB5I4ypd7PueQ", "RollPrize");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("../../base/common/MessageMgr"),
            a = e("../../base/common/SpecialFunc"),
            s = e("../../base/common/view/UIPicText"),
            c = e("../config/Config"),
            f = e("../../base/net/EEvent"),
            h = e("../../base/SoundMgr"),
            u = e("../../base/common/view/Tip"),
            d = e("../../base/common/Func"),
            l = e("../../base/net/NetMgr"),
            p = e("../../base/LogicMgr"),
            g = e("../../base/res/DyncMgr"),
            b = p.default.v3Tmp,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._effectInfo = {
                        id: 0,
                        name: ""
                    }, t
                }
                return r(t, e), t.prototype.initParams = function() {
                    var t = this;
                    e.prototype.initParams.call(this);
                    var i = this._popupMethod.root;
                    this._bg2Node = i.getChildByName("bg2"), this._bg2AnimState = this._bg2Node.getComponent(cc.Animation).getAnimationState("bg2"), this._closeNode = i.getChildByName(p.ConstDefine.close), this._closeNode.on(p.ConstDefine.click, this.close, this), this._panNode = i.getChildByName("pan"), this._panNode.getScale(b), this._panScale = b.x, this._panAnim = this._panNode.getComponent(cc.Animation), this._centerNode = this._panNode.getChildByName("center");
                    var n = this._centerNode.getChildByName("btnSpin");
                    this._spinBtn = n.getComponent(cc.Button), n.on(p.ConstDefine.click, function() {
                        l.NetMgr.createWebSocket(), t._spinBtn.enabled = !1, h.default.playEffect("prize_2"), o.MessageMgr.once(o.MessageName.NetOpen, t.netOpen, t)
                    }), this._rotateWaiNode = this._centerNode.getChildByName("rotateWai"), this._rotateWaiAnim = this._rotateWaiNode.getComponent(cc.Animation), this._rotateNode = this._centerNode.getChildByName("rotate"), this._tipNode = this._rotateNode.getChildByName("tip");
                    var r = this._rotateNode.getChildByName("prize"),
                        f = r.getChildByName("val");
                    f.getChildByName(p.ConstDefine.text).getComponent(cc.Label).string = "GOOD LUCK";
                    for (var u = c.Config.prize1.length; u < c.Config.prizeNum; ++u) c.Config.prize1.push(0);
                    for (this._perAngle = 360 / c.Config.prizeNum, u = 0; u < c.Config.prizeNum; ++u) {
                        var g = d.default.instanceMount(f, r);
                        g.angle = -this._perAngle * u;
                        var m = c.Config.prize1[u];
                        0 !== m && (g.getChildByName(p.ConstDefine.text).getComponent(cc.Label).string = a.default.convertDecimalNum(m))
                    }
                    f.destroy(), this._winTipNode = i.getChildByName("winTip");
                    var y = this._winTipNode.getChildByName("frame_bonus tip");
                    this._winText = new s.default(p.ConstDefine.credit, y.getChildByName("text"));
                    var _ = y.getChildByName("btn");
                    _.on(p.ConstDefine.click, this.getPrize, this), this._winBtn = _.getComponent(cc.Button), this._jinbiNode = this.nodeInfo.root.getChildByName("jinbi")
                }, t.prototype.resetParams = function() {
                    e.prototype.resetParams.call(this), this._bg2Node.active = !1, this._spinBtn.enabled = !0, this._closeNode.active = !0, this._winTipNode.active = !1, this._winBtn.enabled = !0, this._jinbiNode.setPosition(p.ConstDefine.vec3ZERO);
                    for (var t = 0, i = this._jinbiNode.children; t < i.length; t++) i[t].setScale(0);
                    this._tipNode.active = !1, this._rotateWaiNode.angle = 0, this._rotateNode.angle = 0, this._popupMethod.root.opacity = 255, this._panAnim.play(), o.MessageMgr.on(o.MessageName.NetMsg, this.onLogonNet, this), this._musicName = h.default.getCurBgName(), h.default.playBGM("prize_0", !0)
                }, t.prototype.hide = function() {
                    e.prototype.hide.call(this), h.default.playBGM(this._musicName), o.MessageMgr.off(o.MessageName.NetMsg, this.onLogonNet, this)
                }, t.prototype.jinbiMove = function() {
                    var e = this;
                    h.default.playEffect("prize_8"), cc.tween(this._popupMethod.root).to(1.5, {
                        opacity: 0
                    }).start();
                    for (var t = 0, i = this._jinbiNode.children; t < i.length; t++) {
                        var n = i[t];
                        cc.tween(n).to(1, {
                            scale: 1.5
                        }).start()
                    }
                    var r = p.default.login.openWinScore ? p.default.doubleCreditPos : p.default.singleCreditPos;
                    this._jinbiNode.parent.convertToNodeSpaceAR(r, b), cc.tween(this._jinbiNode).to(1.5, {
                        position: b
                    }).call(function() {
                        o.MessageMgr.emit(o.MessageName.UserSocreInfo), e.hide()
                    }).start()
                }, t.prototype.getPrize = function() {
                    h.default.playEffect("prize_2"), h.default.playEffect("prize_7"), this._winBtn.enabled = !1, this._jinbiNode.opacity = 255;
                    for (var e = 0, t = this._jinbiNode.children; e < t.length; e++) t[e].setScale(3);
                    setTimeout(this.jinbiMove.bind(this), 2e3)
                }, t.prototype.showWinTip = function() {
                    h.default.playEffect("prize_5"), h.default.playEffect("prize_6"), this._winTipNode.active = !0, this._winText.setValue(this._prizeVal), this._winTipNode.setScale(0), cc.tween(this._winTipNode).to(.3, {
                        scale: 1
                    }).start()
                }, t.prototype.rotateEnd = function() {
                    var e = this;
                    this._tipNode.active = !0, this._prizeVal > 0 ? setTimeout(this.showWinTip.bind(this), 1e3) : setTimeout(function() {
                        cc.tween(e._popupMethod.root).to(1.5, {
                            opacity: 0
                        }).call(e.hide, e).start()
                    }, 3e3), l.NetMgr.reqDayPrizeInfo(), h.default.stopEffect(this._effectInfo.id, this._effectInfo.name), h.default.playEffect("prize_4")
                }, t.prototype.netOpen = function() {
                    var e = {
                        userid: p.default.login.userID,
                        dynamicpass: p.default.login.dynamicPass
                    };
                    l.NetMgr.send(f.Cmd.MDM_MB_LOGON, f.Cmd.SUB_MB_LOGON_CHOUJIANG, e)
                }, t.prototype.onLogonNet = function(e) {
                    var t = this;
                    if (e.mainID === f.Cmd.MDM_MB_LOGON && e.subID === f.Cmd.SUB_MB_LOGON_CHOUJIANG_RESULT) {
                        var i = e.data;
                        if (0 != i.result) return "" != i.msg && g.default.getResInfo(p.ConstDefine.msgTip, i.msg, 5), void console.log("\u62bd\u5956\u5931\u8d25", i);
                        console.log(i);
                        for (var n = -1e3, r = 0; r < c.Config.prizeNum; ++r) c.Config.prize1[r] === i.lotteryscore && (this._prizeIndex = r, n = c.Config.prize1[r]);
                        if (n < -999) return void console.error("\u627e\u4e0d\u5230\u5408\u7406\u7684\u4e2d\u5956\u9879\u76ee!! ", i.lotteryscore);
                        this._prizeVal = n, p.default.login.score = i.score, h.default.playEffect("prize_3", this._effectInfo), this._closeNode.active = !1, cc.tween(this._panNode).to(.1, {
                            scale: 4
                        }).to(.3, {
                            scale: this._panScale
                        }).start(), this._bg2Node.active = !0;
                        var o = this._prizeIndex * this._perAngle + 90;
                        this._tipNode.angle = -o, o += 4320, cc.tween(this._rotateNode).to(12, {
                            angle: o
                        }, {
                            easing: "cubicOut",
                            onUpdate: function(e, i) {
                                var n = .1;
                                e.angle > 0 && (n = e.angle / o / i), t._bg2AnimState.speed = n
                            }
                        }).call(this.rotateEnd, this).start(), cc.tween(this._rotateWaiNode).to(12, {
                            angle: -o
                        }, {
                            easing: "cubicOut"
                        }).start(), l.NetMgr.close()
                    }
                }, t
            }(u.PopupBase);
        i.default = m, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/Func": "Func",
        "../../base/common/MessageMgr": "MessageMgr",
        "../../base/common/SpecialFunc": "SpecialFunc",
        "../../base/common/view/Tip": "Tip",
        "../../base/common/view/UIPicText": "UIPicText",
        "../../base/net/EEvent": "EEvent",
        "../../base/net/NetMgr": "NetMgr",
        "../../base/res/DyncMgr": "DyncMgr",
        "../config/Config": "Config"
    }],
    ScreenMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b431eQKy+lDsJ71rwWaKFza", "ScreenMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            o = this && this.__decorate || function(e, t, i, n) {
                var r, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
                return o > 3 && a && Object.defineProperty(t, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ScaleNode = i.Direction = i.ScaleType = i.ScreenMode = void 0;
        var a, s, c, f = e("./common/MessageMgr"),
            h = e("../my/config/Config"),
            u = e("./res/DyncMgr"),
            d = e("./common/SpecialFunc"),
            l = e("./LogicMgr");
        (function(e) {
            e[e.fitScreen = 0] = "fitScreen", e[e.fullScreen = 1] = "fullScreen"
        })(a = i.ScreenMode || (i.ScreenMode = {})),
        function(e) {
            e[e.ScaleBig = 0] = "ScaleBig", e[e.ScaleSmall = 1] = "ScaleSmall", e[e.UnScale = 2] = "UnScale"
        }(s = i.ScaleType || (i.ScaleType = {})),
        function(e) {
            e[e.DOWN = 0] = "DOWN", e[e.UP = 1] = "UP", e[e.LEFT = 2] = "LEFT", e[e.RIGHT = 3] = "RIGHT"
        }(c = i.Direction || (i.Direction = {}));
        var p = cc._decorator,
            g = p.ccclass,
            b = p.executionOrder,
            m = function() {
                function e(e, t, i) {
                    this.node = null, this.scaleType = s.UnScale, this.scaleMode = a.fitScreen, this.init(e, t, i)
                }
                return e.prototype.init = function(e, t, i) {
                    this.node = e, this.scaleType = t, this.padDir = i, this.scaleMode = y.Instance.screenMode
                }, e.prototype.setScaleMode = function(e, t) {
                    if (this.scaleMode != t) {
                        switch (this.scaleType) {
                            case s.ScaleBig:
                                this.node.scaleX *= e.x, this.node.scaleY *= e.y;
                                break;
                            case s.ScaleSmall:
                                this.node.scaleX *= 1 / e.x, this.node.scaleY *= 1 / e.y
                        }
                        if (this.padDir)
                            for (var i = this.node.parent.convertToWorldSpaceAR(this.node.position), n = y.Instance.ca.convertToNodeSpaceAR(i), r = 0, o = this.padDir; r < o.length; r++) {
                                var a = void 0,
                                    f = void 0;
                                switch (o[r]) {
                                    case c.UP:
                                        a = (h.Config.gameSize[1] / 2 - n.y) * (1 - 1 / e.y), f = n.addSelf(new cc.Vec3(0, a, 0));
                                        break;
                                    case c.DOWN:
                                        a = (h.Config.gameSize[1] / 2 + n.y) * (1 - 1 / e.y), f = n.subSelf(new cc.Vec3(0, a, 0));
                                        break;
                                    case c.RIGHT:
                                        a = (h.Config.gameSize[0] / 2 - n.x) * (1 - 1 / e.x), f = n.addSelf(new cc.Vec3(a, 0, 0));
                                        break;
                                    case c.LEFT:
                                        a = (h.Config.gameSize[0] / 2 + n.x) * (1 - 1 / e.x), f = n.subSelf(new cc.Vec3(a, 0, 0))
                                }
                                var u = y.Instance.ca.convertToWorldSpaceAR(f);
                                this.node.setPosition(this.node.parent.convertToNodeSpaceAR(u))
                            }
                        this.scaleMode = t
                    }
                }, e
            }();
        i.ScaleNode = m;
        var y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.nodes = [], t.variableID = 0, t.variableNode = [], t.screenMode = a.fitScreen, t.curScale = cc.Vec2.ONE, t
            }
            var i;
            return r(t, e), i = t, t.prototype.onLoad = function() {
                var e = this;
                this.ca = cc.find("Canvas"), i.Instance = this, f.MessageMgr.once(f.MessageName.LoadDyncResFinish, function() {
                    h.Config.debug && u.default.getResInfo("debugPanel"), u.default.getResInfo("bounderyMask").then(function(t) {
                        t.nodeInfo.root.on(cc.Node.EventType.TOUCH_START, e.touchStart, e), t.nodeInfo.root._touchListener.setSwallowTouches(!1), t.nodeInfo.root.on(cc.Node.EventType.TOUCH_END, e.touchEnd, e)
                    })
                })
            }, t.prototype.addNode = function(e, t) {
                if (d.default.isRotateDev())
                    if (e instanceof cc.Node) {
                        var i = new m(e, t);
                        this.nodes.push(i)
                    } else this.nodes = this.nodes.concat(e)
            }, t.prototype.addVariableNode = function(e) {
                if (d.default.isRotateDev()) {
                    for (var t = this.variableID, i = 0; i < e.length; i++) this.variableNode.push({
                        id: this.variableID++,
                        node: e[i]
                    });
                    return [t, this.variableID - 1]
                }
            }, t.prototype.decVariableNode = function(e) {
                var t = this;
                if (d.default.isRotateDev())
                    for (var i, n = function(e) {
                            r.variableNode.forEach(function(i, n) {
                                i.id == e && cc.js.array.fastRemoveAt(t.variableNode, n)
                            })
                        }, r = this, o = (i = "number" == typeof e ? [e, e] : e)[0]; o <= i[1]; o++) n(o)
            }, t.prototype.setScaleMode = function(e, t) {
                for (var i = 0; i < this.nodes.length;) cc.isValid(this.nodes[i].node) ? (this.nodes[i].setScaleMode(e, t), i++) : cc.js.array.fastRemoveAt(this.nodes, i);
                for (i = 0; i < this.variableNode.length; i++) this.variableNode[i].node.setScaleMode(e, t);
                f.MessageMgr.emit(f.MessageName.SetScaleMode, e, t)
            }, t.prototype.fitScreen = function() {
                d.default.isRotateDev() && (cc.view.setDesignResolutionSize(h.Config.gameSize[0], h.Config.gameSize[1], cc.ResolutionPolicy.SHOW_ALL), this.setScaleMode(new cc.Vec2(1 / this.curScale.x, 1 / this.curScale.y), a.fitScreen), cc.Vec2.set(this.curScale, 1, 1), this.screenMode = a.fitScreen)
            }, t.prototype.fullScreen = function() {
                if (d.default.isRotateDev()) {
                    cc.view.setDesignResolutionSize(h.Config.gameSize[0], h.Config.gameSize[1], cc.ResolutionPolicy.SHOW_ALL);
                    var e, t = cc.view.getFrameSize(),
                        i = cc.view.getDesignResolutionSize(),
                        n = t.width / t.height,
                        r = i.width / i.height,
                        o = 1,
                        s = 1;
                    n > r ? ((e = cc.Size.ZERO).height = t.height, e.width = e.height * r, o = t.width / e.width) : ((e = cc.Size.ZERO).width = t.width, e.height = e.width / r, s = t.height / e.height), cc.Vec2.set(this.curScale, o, s), this.setScaleMode(this.curScale, a.fullScreen), this.screenMode = a.fullScreen
                }
            }, t.prototype.updateScreenMode = function(e) {
                e == a.fitScreen ? this.fitScreen() : this.fullScreen()
            }, t.prototype.getScaleBig = function(e) {
                return new cc.Vec2(e.x * this.curScale.x, e.y * this.curScale.y)
            }, t.prototype.getScaleSmall = function(e) {
                return new cc.Vec2(e.x / this.curScale.x, e.y / this.curScale.y)
            }, t.prototype.touchStart = function(e) {
                u.default.isLoad("keyboardUI") || this.playClickAnim(e), f.MessageMgr.emit(f.MessageName.TouchStart, e)
            }, t.prototype.touchEnd = function(e) {
                f.MessageMgr.emit(f.MessageName.TouchEnd, e)
            }, t.prototype.playClickAnim = function(e) {
                var t = e.getLocation();
                u.default.getResInfo(l.ConstDefine.click, this.node.convertToNodeSpaceAR(t))
            }, i = o([g, b(-5)], t)
        }(cc.Component);
        i.default = y, cc._RF.pop()
    }, {
        "../my/config/Config": "Config",
        "./LogicMgr": "LogicMgr",
        "./common/MessageMgr": "MessageMgr",
        "./common/SpecialFunc": "SpecialFunc",
        "./res/DyncMgr": "DyncMgr"
    }],
    SettingBox: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "70b0dE6/NJP9Lm+RWMN4xgF", "SettingBox");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.SettingBox = void 0;
        var o, a = e("../../base/SoundMgr"),
            s = e("../../base/common/view/SliderProgress"),
            c = e("../../base/common/view/Tip"),
            f = e("../../base/LogicMgr");
        (function(e) {
            e[e.music = 0] = "music", e[e.sound = 1] = "sound", e[e.music1 = 2] = "music1", e[e.music2 = 3] = "music2", e[e.music3 = 4] = "music3", e[e.music4 = 5] = "music4", e[e.music5 = 6] = "music5", e[e.music6 = 7] = "music6", e[e.randomPlay = 8] = "randomPlay", e[e.binddevice = 9] = "binddevice", e[e.unboundA = 10] = "unboundA", e[e.unboundB = 11] = "unboundB", e[e.setting = 12] = "setting", e[e.num = 13] = "num"
        })(o || (o = {}));
        var h = function(e) {
            function t(t, i) {
                return e.call(this, t, i) || this
            }
            return r(t, e), t.prototype.initParams = function() {
                var t = this;
                e.prototype.initParams.call(this), this.nodeInfo.root.getChildByName("close").on(f.ConstDefine.click, this.close, this);
                var i = this._popupMethod.root.getChildByName("music");
                this._musicSP = new s.default(i, this.musicSlide.bind(this)), this._musicSP.setProgress(a.default.getBGMVol());
                var n = this._popupMethod.root.getChildByName("sound");
                this._soundSP = new s.default(n, this.soundSlide.bind(this)), this._soundSP.setProgress(a.default.getEffectVol());
                for (var r = this._popupMethod.root.getChildByName("offsetX"), c = (r.getChildByName("setting"), cc.find("musicSelectFrame/btnGroup", r).children), h = function(e) {
                        c[e].on("toggle", function() {
                            t.musicClick(e)
                        })
                    }, u = 0; u < o.randomPlay - o.music1 + 1; u++) h(u);
                var d = localStorage.getItem("musicSelect");
                if (d) {
                    var l = Number(d);
                    c[l].getComponent(cc.Toggle).check()
                } else c[0].getComponent(cc.Toggle).check()
            }, t.prototype.musicClick = function(e) {
                a.default.playEffect(f.ConstDefine.click), e < 6 ? a.default.playBGM("bg" + e) : a.default.playBGM("bg"), localStorage.setItem("musicSelect", e.toString())
            }, t.prototype.musicSlide = function(e) {
                a.default.setBGMVol(e)
            }, t.prototype.soundSlide = function(e) {
                a.default.setEffectVol(e)
            }, t
        }(c.PopupBase);
        i.SettingBox = h, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/SoundMgr": "SoundMgr",
        "../../base/common/view/SliderProgress": "SliderProgress",
        "../../base/common/view/Tip": "Tip"
    }],
    ShareUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "de350oijH1M1r2SdM+oy+Gy", "ShareUI");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ShareUI = void 0;
        var o = e("../../base/common/view/Tip"),
            a = e("../../base/LogicMgr"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    e.prototype.initParams.call(this), this._popupMethod.root.getChildByName("close").on(a.ConstDefine.click, this.close, this)
                }, t
            }(o.PopupBase);
        i.ShareUI = s, cc._RF.pop()
    }, {
        "../../base/LogicMgr": "LogicMgr",
        "../../base/common/view/Tip": "Tip"
    }],
    SliderProgress: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "83136jFLk5G7LNVyaf2uStd", "SliderProgress"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                var i = this;
                this._slider = e.getComponent(cc.Slider), this._barSptframe = e.getChildByName("progressBar").getChildByName("bar").getComponent(cc.Sprite), this._slider.node.on("slide", function() {
                    i._barSptframe.fillRange = i._slider.progress, t(i._slider.progress)
                }, this)
            }
            return e.prototype.setProgress = function(e) {
                this._slider.progress = e, this._barSptframe.fillRange = this._slider.progress
            }, e
        }();
        i.default = n, cc._RF.pop()
    }, {}],
    SoundMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "28020NzcKtAY7FrNSg0qhP2", "SoundMgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, r, o = e("./common/Func"),
            a = e("./common/MessageMgr"),
            s = e("../my/config/Config"),
            c = e("./effect/EffectMgr"),
            f = e("./res/DyncMgr"),
            h = e("./res/LanguageMgr"),
            u = e("./LogicMgr"),
            d = "",
            l = void 0,
            p = 1,
            g = 1,
            b = !0,
            m = function() {
                function e() {}
                return e.enabled = function() {
                    return b
                }, e.loadClip = function(e) {
                    return new Promise(function(t) {
                        e.asset ? t(e.asset) : f.default.bundles[e.loadIndex].load(e.path, cc.AudioClip, function(i, n) {
                            i ? (console.error("\u52a0\u8f7d\u97f3\u6548\u51fa\u9519", e.path, i), t(null)) : (e.asset = n, t(n))
                        })
                    })
                }, e.removeIdByCfg = function(e, t) {
                    var i = cc.audioEngine.getState(t);
                    (i > cc.audioEngine.AudioState.PLAYING || i < cc.audioEngine.AudioState.INITIALZING) && cc.audioEngine.stopEffect(t), cc.js.array.fastRemove(e.ids, t), e.ids.length <= 0 && this.releaseAsset(e)
                }, e.init = function() {
                    var e = this;
                    cc.resources.load("json/soundCfg", cc.JsonAsset, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            r = i.json;
                            var o = s.Config.soundCfg;
                            n = o.load, s.Config.soundCfg = null,
                                function(e) {
                                    for (var t in e)
                                        for (var i = 0, n = e[t]; i < n.length; i++) h(n[i].name, "sound/")
                                }(r);
                            var a = localStorage.getItem(u.ConstDefine.musicName);
                            a ? e.playBGMByCfg(r[a][0]) : e.playBGMByCfg(r.bg0[0]);
                            var c = localStorage.getItem("musicVol");
                            c ? e.setBGMVol(Number(c)) : e.setBGMVol(p);
                            var f = localStorage.getItem("soundVol");
                            f ? e.setEffectVol(Number(f)) : e.setEffectVol(g)
                        }

                        function h(e, t) {
                            n[e] ? void 0 === n[e].loadIndex && (n[e].loadIndex = 0) : n[e] = {
                                loadIndex: 0
                            }, n[e].path = t + e, n[e].latPlayTime = 0, n[e].ids = []
                        }
                    })
                }, e.getSoundCfgByName = function(e) {
                    var t = r[e];
                    if (t) return t[o.default.randomInt(0, t.length - 1)]
                }, e.showGame = function() {}, e.hideGame = function() {}, e.playBGM = function(e, t) {
                    void 0 === t && (t = !1), this.playBGMByCfg(this.getSoundCfgByName(e), t)
                }, e.playBGMByCfg = function(e, t) {
                    var i = this;
                    if (void 0 === t && (t = !1), d !== e.name) {
                        var r = d;
                        d = e.name, t || localStorage.setItem(u.ConstDefine.musicName, d);
                        var o = n[d];
                        this.loadClip(o).then(function(t) {
                            null !== t && (i.stopBGM(r), l = cc.audioEngine.play(o.asset, e.loop, 0), i.fade(l, d, 1, 0, e.vol * p))
                        })
                    }
                }, e.getCurBgName = function() {
                    return d
                }, e.stopEffect = function(e, t) {
                    var i = n[t];
                    i && (cc.audioEngine.stopEffect(e), !i.norecycle && this.removeIdByCfg(i, e))
                }, e.stopAll = function() {
                    for (var e in this.stopBGM(), cc.audioEngine.stopAllEffects(), n) {
                        var t = n[e];
                        t.ids.length = 0, this.releaseAsset(t)
                    }
                }, e.releaseAsset = function(e) {
                    e.norecycle || (cc.assetManager.releaseAsset(e.asset), e.asset = null)
                }, e.stopBGM = function(e) {
                    if (void 0 === e && (e = d), void 0 !== l) this.fade(l, e, 1, cc.audioEngine.getVolume(l), 0);
                    else {
                        var t = n[e];
                        t && t.asset && this.releaseAsset(t)
                    }
                }, e.setVol = function(e, t) {
                    this.setBGMVol(e), this.setEffectVol(t), b = 0 === e && 0 === t
                }, e.setBGMVol = function(e) {
                    p = e, localStorage.setItem("musicVol", e.toString());
                    var t = p * this.getSoundCfgByName(d).vol;
                    cc.audioEngine.setVolume(l, t)
                }, e.getBGMVol = function(e) {
                    return void 0 === e && (e = !0), p
                }, e.setEffectVol = function(e) {
                    g = e, localStorage.setItem("soundVol", e.toString())
                }, e.getEffectVol = function() {
                    return g
                }, e.playEffect = function(e, t) {
                    var i = this,
                        r = this.getSoundCfgByName(e);
                    if (void 0 !== r) {
                        var o = n[r.name];
                        if (null == o) return -2;
                        var a = performance.now();
                        o.latPlayTime < a && (o.latPlayTime = a + r.repeatInterval, this.loadClip(o).then(function(e) {
                            null !== e && (r.delayTime ? c.EffectMgr.Instance.trigger(c.EffectMgr.EffectType.EffectMeetCondition, r.delayTime, u.ConstDefine.trueFunc, function() {
                                i.playAsset(o, r, t)
                            }) : i.playAsset(o, r, t))
                        }))
                    }
                }, e.playAsset = function(e, t, i) {
                    var n = this,
                        r = cc.audioEngine.play(e.asset, t.loop, t.vol * g);
                    t.playTime > 0 && c.EffectMgr.Instance.trigger(c.EffectMgr.EffectType.EffectMeetCondition, t.playTime, u.ConstDefine.trueFunc, function() {
                        n.removeIdByCfg(e, r)
                    }), e.norecycle || (e.ids.push(r), !t.loop && t.playTime <= 0 && cc.audioEngine.setFinishCallback(r, function() {
                        n.removeIdByCfg(e, r)
                    })), i && (i.id = r, i.name = t.name)
                }, e.fade = function(e, t, i, n, r) {
                    var o = this,
                        a = (r - n) / i,
                        s = r > n;
                    c.EffectMgr.Instance.trigger(c.EffectMgr.EffectType.EffectMeetCondition, .05, function() {
                        if (n += a, s) {
                            if (!(n <= r)) return cc.audioEngine.setVolume(e, r), !0;
                            cc.audioEngine.setVolume(e, n)
                        } else {
                            if (!(n >= r)) return o.stopEffect(e, t), !0;
                            cc.audioEngine.setVolume(e, n)
                        }
                        return !1
                    }, u.ConstDefine.emptyFunc)
                }, e
            }();
        i.default = m, a.MessageMgr.once(a.MessageName.LoadDyncResFinish, m.init, m), a.MessageMgr.on(a.MessageName.ChangeLang, function() {
            o.default.mergeJSON(r[h.default.currLang], r)
        }), cc._RF.pop()
    }, {
        "../my/config/Config": "Config",
        "./LogicMgr": "LogicMgr",
        "./common/Func": "Func",
        "./common/MessageMgr": "MessageMgr",
        "./effect/EffectMgr": "EffectMgr",
        "./res/DyncMgr": "DyncMgr",
        "./res/LanguageMgr": "LanguageMgr"
    }],
    SpecialFunc: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "965b9RLdetJVoxgj/5uZ33Z", "SpecialFunc"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../../my/config/Config"),
            r = e("../LogicMgr"),
            o = e("../res/DyncMgr"),
            a = e("../res/LanguageMgr"),
            s = function() {
                function e() {}
                return e.convertDecimalNum = function(e, t) {
                    return 1 === (t = "number" == typeof t ? t : n.Config.decimalPlaces) && e % 10 != 0 && e >= 5 && (e -= 5), (e /= n.Config.decimal).toFixed(t)
                }, e.converSepValue = function(t, i) {
                    for (var n = e.convertDecimalNum(t, i);
                        /\d{4}(\.|,)/.test(n);) n = n.replace(/(\d)(\d{3}(\.|,))/, "$1,$2");
                    return n
                }, e.setLangSptArr = function(e, t, i) {
                    for (var n, r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.spriteFrame && o.spriteFrame.decRef(), n = o.node.name, i && (n = i + "/" + n), this.setLangSpt(e, n, o)
                    }
                }, e.setLangSpt = function(e, t, i) {
                    o.default.bundles[e].load("lang/" + a.default.currLang + "/" + t, cc.SpriteFrame, function(n, r) {
                        n ? o.default.bundles[e].load("lang/" + a.default.defaultLang + "/" + t, cc.SpriteFrame, function(e, t) {
                            e || (t.addRef(), i.spriteFrame = t)
                        }) : (r.addRef(), i.spriteFrame = r)
                    })
                }, e.loadRemoteSpt = function(e, t, i, r) {
                    void 0 === r && (r = void 0), e += i + (n.Config[t + i] || "") + ".png", cc.assetManager.loadRemote(e, r)
                }, e.setRemoteSpt = function(e, t, i, n, r) {
                    void 0 === r && (r = void 0), this.loadRemoteSpt(e, t, i, function(t, i) {
                        t ? cc.warn("\u52a0\u8f7d\u8fdc\u7a0b\u56fe\u7247\u51fa\u9519" + e) : n.spriteFrame = new cc.SpriteFrame(i), r && r(t)
                    })
                }, e.setDyncSpt = function(e, t, i, n) {
                    o.default.bundles[e].load(t, cc.SpriteFrame, function(e, r) {
                        e ? cc.error("\u52a0\u8f7d\u52a8\u6001\u7cbe\u7075\u5931\u8d25", t) : i.spriteFrame = r, n && n(!e)
                    })
                }, e.getLangDir = function(e, t, i, n) {
                    o.default.bundles[e].getDirWithPath("lang/" + a.default.currLang + "/" + t, i, n), 0 === n.lenght && o.default.bundles[e].getDirWithPath("lang/" + a.default.defaultLang + "/" + t, i, n)
                }, e.editInput = function(e, t) {
                    if (r.default.useSoftKeyboard) {
                        var i = e.getComponent(cc.EditBox);
                        e.getComponent(cc.EditBox).onDestroy(), i._impl = null, e.on(cc.Node.EventType.TOUCH_END, function(i) {
                            o.default.getResInfo("keyboardUI", e, t), i.stopPropagation()
                        })
                    }
                }, e.isRotateDev = function() {
                    return void 0 !== window.orientation
                }, e.hideTextElem = function() {
                    var e = document.getElementById("text");
                    e && (e.style.display = r.ConstDefine.none)
                }, e
            }();
        i.default = s, cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../LogicMgr": "LogicMgr",
        "../res/DyncMgr": "DyncMgr",
        "../res/LanguageMgr": "LanguageMgr"
    }],
    1: [function(e, t, i) {
        "use strict";
        const n = i;
        n.bignum = e("bn.js"), n.define = e("./asn1/api").define, n.base = e("./asn1/base"), n.constants = e("./asn1/constants"), n.decoders = e("./asn1/decoders"), n.encoders = e("./asn1/encoders")
    }, {
        "./asn1/api": 2,
        "./asn1/base": 4,
        "./asn1/constants": 8,
        "./asn1/decoders": 10,
        "./asn1/encoders": 13,
        "bn.js": 15
    }],
    2: [function(e, t, i) {
        "use strict";
        const n = e("./encoders"),
            r = e("./decoders"),
            o = e("inherits");

        function a(e, t) {
            this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
        }
        i.define = function(e, t) {
            return new a(e, t)
        }, a.prototype._createNamed = function(e) {
            const t = this.name;

            function i(e) {
                this._initNamed(e, t)
            }
            return o(i, e), i.prototype._initNamed = function(t, i) {
                e.call(this, t, i)
            }, new i(this)
        }, a.prototype._getDecoder = function(e) {
            return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(r[e])), this.decoders[e]
        }, a.prototype.decode = function(e, t, i) {
            return this._getDecoder(t).decode(e, i)
        }, a.prototype._getEncoder = function(e) {
            return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(n[e])), this.encoders[e]
        }, a.prototype.encode = function(e, t, i) {
            return this._getEncoder(t).encode(e, i)
        }
    }, {
        "./decoders": 10,
        "./encoders": 13,
        inherits: 138
    }],
    3: [function(e, t, i) {
        "use strict";
        const n = e("inherits"),
            r = e("../base/reporter").Reporter,
            o = e("safer-buffer").Buffer;

        function a(e, t) {
            r.call(this, t), o.isBuffer(e) ? (this.base = e, this.offset = 0, this.length = e.length) : this.error("Input not Buffer")
        }

        function s(e, t) {
            if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
                return s.isEncoderBuffer(e) || (e = new s(e, t)), this.length += e.length, e
            }, this);
            else if ("number" == typeof e) {
                if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                this.value = e, this.length = 1
            } else if ("string" == typeof e) this.value = e, this.length = o.byteLength(e);
            else {
                if (!o.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
                this.value = e, this.length = e.length
            }
        }
        n(a, r), i.DecoderBuffer = a, a.isDecoderBuffer = function(e) {
            return e instanceof a || "object" == typeof e && o.isBuffer(e.base) && "DecoderBuffer" === e.constructor.name && "number" == typeof e.offset && "number" == typeof e.length && "function" == typeof e.save && "function" == typeof e.restore && "function" == typeof e.isEmpty && "function" == typeof e.readUInt8 && "function" == typeof e.skip && "function" == typeof e.raw
        }, a.prototype.save = function() {
            return {
                offset: this.offset,
                reporter: r.prototype.save.call(this)
            }
        }, a.prototype.restore = function(e) {
            const t = new a(this.base);
            return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, r.prototype.restore.call(this, e.reporter), t
        }, a.prototype.isEmpty = function() {
            return this.offset === this.length
        }, a.prototype.readUInt8 = function(e) {
            return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
        }, a.prototype.skip = function(e, t) {
            if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
            const i = new a(this.base);
            return i._reporterState = this._reporterState, i.offset = this.offset, i.length = this.offset + e, this.offset += e, i
        }, a.prototype.raw = function(e) {
            return this.base.slice(e ? e.offset : this.offset, this.length)
        }, i.EncoderBuffer = s, s.isEncoderBuffer = function(e) {
            return e instanceof s || "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join
        }, s.prototype.join = function(e, t) {
            return e || (e = o.alloc(this.length)), t || (t = 0), 0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function(i) {
                i.join(e, t), t += i.length
            }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : o.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e)
        }
    }, {
        "../base/reporter": 6,
        inherits: 138,
        "safer-buffer": 184
    }],
    4: [function(e, t, i) {
        "use strict";
        const n = i;
        n.Reporter = e("./reporter").Reporter, n.DecoderBuffer = e("./buffer").DecoderBuffer, n.EncoderBuffer = e("./buffer").EncoderBuffer, n.Node = e("./node")
    }, {
        "./buffer": 3,
        "./node": 5,
        "./reporter": 6
    }],
    5: [function(e, t) {
        "use strict";
        const i = e("../base/reporter").Reporter,
            n = e("../base/buffer").EncoderBuffer,
            r = e("../base/buffer").DecoderBuffer,
            o = e("minimalistic-assert"),
            a = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
            s = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(a);

        function c(e, t, i) {
            const n = {};
            this._baseState = n, n.name = i, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap())
        }
        t.exports = c;
        const f = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        c.prototype.clone = function() {
            const e = this._baseState,
                t = {};
            f.forEach(function(i) {
                t[i] = e[i]
            });
            const i = new this.constructor(t.parent);
            return i._baseState = t, i
        }, c.prototype._wrap = function() {
            const e = this._baseState;
            s.forEach(function(t) {
                this[t] = function() {
                    const i = new this.constructor(this);
                    return e.children.push(i), i[t].apply(i, arguments)
                }
            }, this)
        }, c.prototype._init = function(e) {
            const t = this._baseState;
            o(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
                return e._baseState.parent === this
            }, this), o.equal(t.children.length, 1, "Root node can have only one child")
        }, c.prototype._useArgs = function(e) {
            const t = this._baseState,
                i = e.filter(function(e) {
                    return e instanceof this.constructor
                }, this);
            e = e.filter(function(e) {
                return !(e instanceof this.constructor)
            }, this), 0 !== i.length && (o(null === t.children), t.children = i, i.forEach(function(e) {
                e._baseState.parent = this
            }, this)), 0 !== e.length && (o(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
                if ("object" != typeof e || e.constructor !== Object) return e;
                const t = {};
                return Object.keys(e).forEach(function(i) {
                    i == (0 | i) && (i |= 0);
                    const n = e[i];
                    t[n] = i
                }), t
            }))
        }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
            c.prototype[e] = function() {
                const t = this._baseState;
                throw new Error(e + " not implemented for encoding: " + t.enc)
            }
        }), a.forEach(function(e) {
            c.prototype[e] = function() {
                const t = this._baseState,
                    i = Array.prototype.slice.call(arguments);
                return o(null === t.tag), t.tag = e, this._useArgs(i), this
            }
        }), c.prototype.use = function(e) {
            o(e);
            const t = this._baseState;
            return o(null === t.use), t.use = e, this
        }, c.prototype.optional = function() {
            return this._baseState.optional = !0, this
        }, c.prototype.def = function(e) {
            const t = this._baseState;
            return o(null === t.default), t.default = e, t.optional = !0, this
        }, c.prototype.explicit = function(e) {
            const t = this._baseState;
            return o(null === t.explicit && null === t.implicit), t.explicit = e, this
        }, c.prototype.implicit = function(e) {
            const t = this._baseState;
            return o(null === t.explicit && null === t.implicit), t.implicit = e, this
        }, c.prototype.obj = function() {
            const e = this._baseState,
                t = Array.prototype.slice.call(arguments);
            return e.obj = !0, 0 !== t.length && this._useArgs(t), this
        }, c.prototype.key = function(e) {
            const t = this._baseState;
            return o(null === t.key), t.key = e, this
        }, c.prototype.any = function() {
            return this._baseState.any = !0, this
        }, c.prototype.choice = function(e) {
            const t = this._baseState;
            return o(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
                return e[t]
            })), this
        }, c.prototype.contains = function(e) {
            const t = this._baseState;
            return o(null === t.use), t.contains = e, this
        }, c.prototype._decode = function(e, t) {
            const i = this._baseState;
            if (null === i.parent) return e.wrapResult(i.children[0]._decode(e, t));
            let n, o = i.default,
                a = !0,
                s = null;
            if (null !== i.key && (s = e.enterKey(i.key)), i.optional) {
                let n = null;
                if (null !== i.explicit ? n = i.explicit : null !== i.implicit ? n = i.implicit : null !== i.tag && (n = i.tag), null !== n || i.any) {
                    if (a = this._peekTag(e, n, i.any), e.isError(a)) return a
                } else {
                    const n = e.save();
                    try {
                        null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t), a = !0
                    } catch (c) {
                        a = !1
                    }
                    e.restore(n)
                }
            }
            if (i.obj && a && (n = e.enterObject()), a) {
                if (null !== i.explicit) {
                    const t = this._decodeTag(e, i.explicit);
                    if (e.isError(t)) return t;
                    e = t
                }
                const n = e.offset;
                if (null === i.use && null === i.choice) {
                    let t;
                    i.any && (t = e.save());
                    const n = this._decodeTag(e, null !== i.implicit ? i.implicit : i.tag, i.any);
                    if (e.isError(n)) return n;
                    i.any ? o = e.raw(t) : e = n
                }
                if (t && t.track && null !== i.tag && t.track(e.path(), n, e.length, "tagged"), t && t.track && null !== i.tag && t.track(e.path(), e.offset, e.length, "content"), i.any || (o = null === i.choice ? this._decodeGeneric(i.tag, e, t) : this._decodeChoice(e, t)), e.isError(o)) return o;
                if (i.any || null !== i.choice || null === i.children || i.children.forEach(function(i) {
                        i._decode(e, t)
                    }), i.contains && ("octstr" === i.tag || "bitstr" === i.tag)) {
                    const n = new r(o);
                    o = this._getUse(i.contains, e._reporterState.obj)._decode(n, t)
                }
            }
            return i.obj && a && (o = e.leaveObject(n)), null === i.key || null === o && !0 !== a ? null !== s && e.exitKey(s) : e.leaveKey(s, i.key, o), o
        }, c.prototype._decodeGeneric = function(e, t, i) {
            const n = this._baseState;
            return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0], i) : /str$/.test(e) ? this._decodeStr(t, e, i) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1], i) : "objid" === e ? this._decodeObjid(t, null, null, i) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, i) : "null_" === e ? this._decodeNull(t, i) : "bool" === e ? this._decodeBool(t, i) : "objDesc" === e ? this._decodeStr(t, e, i) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0], i) : null !== n.use ? this._getUse(n.use, t._reporterState.obj)._decode(t, i) : t.error("unknown tag: " + e)
        }, c.prototype._getUse = function(e, t) {
            const i = this._baseState;
            return i.useDecoder = this._use(e, t), o(null === i.useDecoder._baseState.parent), i.useDecoder = i.useDecoder._baseState.children[0], i.implicit !== i.useDecoder._baseState.implicit && (i.useDecoder = i.useDecoder.clone(), i.useDecoder._baseState.implicit = i.implicit), i.useDecoder
        }, c.prototype._decodeChoice = function(e, t) {
            const i = this._baseState;
            let n = null,
                r = !1;
            return Object.keys(i.choice).some(function(o) {
                const a = e.save(),
                    s = i.choice[o];
                try {
                    const i = s._decode(e, t);
                    if (e.isError(i)) return !1;
                    n = {
                        type: o,
                        value: i
                    }, r = !0
                } catch (c) {
                    return e.restore(a), !1
                }
                return !0
            }, this), r ? n : e.error("Choice not matched")
        }, c.prototype._createEncoderBuffer = function(e) {
            return new n(e, this.reporter)
        }, c.prototype._encode = function(e, t, i) {
            const n = this._baseState;
            if (null !== n.default && n.default === e) return;
            const r = this._encodeValue(e, t, i);
            return void 0 === r || this._skipDefault(r, t, i) ? void 0 : r
        }, c.prototype._encodeValue = function(e, t, n) {
            const r = this._baseState;
            if (null === r.parent) return r.children[0]._encode(e, t || new i);
            let o = null;
            if (this.reporter = t, r.optional && void 0 === e) {
                if (null === r.default) return;
                e = r.default
            }
            let a = null,
                s = !1;
            if (r.any) o = this._createEncoderBuffer(e);
            else if (r.choice) o = this._encodeChoice(e, t);
            else if (r.contains) a = this._getUse(r.contains, n)._encode(e, t), s = !0;
            else if (r.children) a = r.children.map(function(i) {
                if ("null_" === i._baseState.tag) return i._encode(null, t, e);
                if (null === i._baseState.key) return t.error("Child should have a key");
                const n = t.enterKey(i._baseState.key);
                if ("object" != typeof e) return t.error("Child expected, but input is not object");
                const r = i._encode(e[i._baseState.key], t, e);
                return t.leaveKey(n), r
            }, this).filter(function(e) {
                return e
            }), a = this._createEncoderBuffer(a);
            else if ("seqof" === r.tag || "setof" === r.tag) {
                if (!r.args || 1 !== r.args.length) return t.error("Too many args for : " + r.tag);
                if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
                const i = this.clone();
                i._baseState.implicit = null, a = this._createEncoderBuffer(e.map(function(i) {
                    const n = this._baseState;
                    return this._getUse(n.args[0], e)._encode(i, t)
                }, i))
            } else null !== r.use ? o = this._getUse(r.use, n)._encode(e, t) : (a = this._encodePrimitive(r.tag, e), s = !0);
            if (!r.any && null === r.choice) {
                const e = null !== r.implicit ? r.implicit : r.tag,
                    i = null === r.implicit ? "universal" : "context";
                null === e ? null === r.use && t.error("Tag could be omitted only for .use()") : null === r.use && (o = this._encodeComposite(e, s, i, a))
            }
            return null !== r.explicit && (o = this._encodeComposite(r.explicit, !1, "context", o)), o
        }, c.prototype._encodeChoice = function(e, t) {
            const i = this._baseState,
                n = i.choice[e.type];
            return n || o(!1, e.type + " not found in " + JSON.stringify(Object.keys(i.choice))), n._encode(e.value, t)
        }, c.prototype._encodePrimitive = function(e, t) {
            const i = this._baseState;
            if (/str$/.test(e)) return this._encodeStr(t, e);
            if ("objid" === e && i.args) return this._encodeObjid(t, i.reverseArgs[0], i.args[1]);
            if ("objid" === e) return this._encodeObjid(t, null, null);
            if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
            if ("null_" === e) return this._encodeNull();
            if ("int" === e || "enum" === e) return this._encodeInt(t, i.args && i.reverseArgs[0]);
            if ("bool" === e) return this._encodeBool(t);
            if ("objDesc" === e) return this._encodeStr(t, e);
            throw new Error("Unsupported tag: " + e)
        }, c.prototype._isNumstr = function(e) {
            return /^[0-9 ]*$/.test(e)
        }, c.prototype._isPrintstr = function(e) {
            return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)
        }
    }, {
        "../base/buffer": 3,
        "../base/reporter": 6,
        "minimalistic-assert": 143
    }],
    6: [function(e, t, i) {
        "use strict";
        const n = e("inherits");

        function r(e) {
            this._reporterState = {
                obj: null,
                path: [],
                options: e || {},
                errors: []
            }
        }

        function o(e, t) {
            this.path = e, this.rethrow(t)
        }
        i.Reporter = r, r.prototype.isError = function(e) {
            return e instanceof o
        }, r.prototype.save = function() {
            const e = this._reporterState;
            return {
                obj: e.obj,
                pathLen: e.path.length
            }
        }, r.prototype.restore = function(e) {
            const t = this._reporterState;
            t.obj = e.obj, t.path = t.path.slice(0, e.pathLen)
        }, r.prototype.enterKey = function(e) {
            return this._reporterState.path.push(e)
        }, r.prototype.exitKey = function(e) {
            const t = this._reporterState;
            t.path = t.path.slice(0, e - 1)
        }, r.prototype.leaveKey = function(e, t, i) {
            const n = this._reporterState;
            this.exitKey(e), null !== n.obj && (n.obj[t] = i)
        }, r.prototype.path = function() {
            return this._reporterState.path.join("/")
        }, r.prototype.enterObject = function() {
            const e = this._reporterState,
                t = e.obj;
            return e.obj = {}, t
        }, r.prototype.leaveObject = function(e) {
            const t = this._reporterState,
                i = t.obj;
            return t.obj = e, i
        }, r.prototype.error = function(e) {
            let t;
            const i = this._reporterState,
                n = e instanceof o;
            if (t = n ? e : new o(i.path.map(function(e) {
                    return "[" + JSON.stringify(e) + "]"
                }).join(""), e.message || e, e.stack), !i.options.partial) throw t;
            return n || i.errors.push(t), t
        }, r.prototype.wrapResult = function(e) {
            const t = this._reporterState;
            return t.options.partial ? {
                result: this.isError(e) ? null : e,
                errors: t.errors
            } : e
        }, n(o, Error), o.prototype.rethrow = function(e) {
            if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
                throw new Error(this.message)
            } catch (t) {
                this.stack = t.stack
            }
            return this
        }
    }, {
        inherits: 138
    }],
    7: [function(e, t, i) {
        "use strict";

        function n(e) {
            const t = {};
            return Object.keys(e).forEach(function(i) {
                (0 | i) == i && (i |= 0);
                const n = e[i];
                t[n] = i
            }), t
        }
        i.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, i.tagClassByName = n(i.tagClass), i.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        }, i.tagByName = n(i.tag)
    }, {}],
    8: [function(e, t, i) {
        "use strict";
        const n = i;
        n._reverse = function(e) {
            const t = {};
            return Object.keys(e).forEach(function(i) {
                (0 | i) == i && (i |= 0);
                const n = e[i];
                t[n] = i
            }), t
        }, n.der = e("./der")
    }, {
        "./der": 7
    }],
    9: [function(e, t) {
        "use strict";
        const i = e("inherits"),
            n = e("bn.js"),
            r = e("../base/buffer").DecoderBuffer,
            o = e("../base/node"),
            a = e("../constants/der");

        function s(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new c, this.tree._init(e.body)
        }

        function c(e) {
            o.call(this, "der", e)
        }

        function f(e, t) {
            let i = e.readUInt8(t);
            if (e.isError(i)) return i;
            const n = a.tagClass[i >> 6],
                r = 0 == (32 & i);
            if (31 == (31 & i)) {
                let n = i;
                for (i = 0; 128 == (128 & n);) {
                    if (n = e.readUInt8(t), e.isError(n)) return n;
                    i <<= 7, i |= 127 & n
                }
            } else i &= 31;
            return {
                cls: n,
                primitive: r,
                tag: i,
                tagStr: a.tag[i]
            }
        }

        function h(e, t, i) {
            let n = e.readUInt8(i);
            if (e.isError(n)) return n;
            if (!t && 128 === n) return null;
            if (0 == (128 & n)) return n;
            const r = 127 & n;
            if (r > 4) return e.error("length octect is too long");
            n = 0;
            for (let o = 0; o < r; o++) {
                n <<= 8;
                const t = e.readUInt8(i);
                if (e.isError(t)) return t;
                n |= t
            }
            return n
        }
        t.exports = s, s.prototype.decode = function(e, t) {
            return r.isDecoderBuffer(e) || (e = new r(e, t)), this.tree._decode(e, t)
        }, i(c, o), c.prototype._peekTag = function(e, t, i) {
            if (e.isEmpty()) return !1;
            const n = e.save(),
                r = f(e, 'Failed to peek tag: "' + t + '"');
            return e.isError(r) ? r : (e.restore(n), r.tag === t || r.tagStr === t || r.tagStr + "of" === t || i)
        }, c.prototype._decodeTag = function(e, t, i) {
            const n = f(e, 'Failed to decode tag of "' + t + '"');
            if (e.isError(n)) return n;
            let r = h(e, n.primitive, 'Failed to get length of "' + t + '"');
            if (e.isError(r)) return r;
            if (!i && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
            if (n.primitive || null !== r) return e.skip(r, 'Failed to match body of: "' + t + '"');
            const o = e.save(),
                a = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
            return e.isError(a) ? a : (r = e.offset - o.offset, e.restore(o), e.skip(r, 'Failed to match body of: "' + t + '"'))
        }, c.prototype._skipUntilEnd = function(e, t) {
            for (;;) {
                const i = f(e, t);
                if (e.isError(i)) return i;
                const n = h(e, i.primitive, t);
                if (e.isError(n)) return n;
                let r;
                if (r = i.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t), e.isError(r)) return r;
                if ("end" === i.tagStr) break
            }
        }, c.prototype._decodeList = function(e, t, i, n) {
            const r = [];
            for (; !e.isEmpty();) {
                const t = this._peekTag(e, "end");
                if (e.isError(t)) return t;
                const o = i.decode(e, "der", n);
                if (e.isError(o) && t) break;
                r.push(o)
            }
            return r
        }, c.prototype._decodeStr = function(e, t) {
            if ("bitstr" === t) {
                const t = e.readUInt8();
                return e.isError(t) ? t : {
                    unused: t,
                    data: e.raw()
                }
            }
            if ("bmpstr" === t) {
                const t = e.raw();
                if (t.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
                let i = "";
                for (let e = 0; e < t.length / 2; e++) i += String.fromCharCode(t.readUInt16BE(2 * e));
                return i
            }
            if ("numstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isNumstr(t) ? t : e.error("Decoding of string type: numstr unsupported characters")
            }
            if ("octstr" === t) return e.raw();
            if ("objDesc" === t) return e.raw();
            if ("printstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isPrintstr(t) ? t : e.error("Decoding of string type: printstr unsupported characters")
            }
            return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
        }, c.prototype._decodeObjid = function(e, t, i) {
            let n;
            const r = [];
            let o = 0,
                a = 0;
            for (; !e.isEmpty();) o <<= 7, o |= 127 & (a = e.readUInt8()), 0 == (128 & a) && (r.push(o), o = 0);
            128 & a && r.push(o);
            const s = r[0] / 40 | 0,
                c = r[0] % 40;
            if (n = i ? r : [s, c].concat(r.slice(1)), t) {
                let e = t[n.join(" ")];
                void 0 === e && (e = t[n.join(".")]), void 0 !== e && (n = e)
            }
            return n
        }, c.prototype._decodeTime = function(e, t) {
            const i = e.raw().toString();
            let n, r, o, a, s, c;
            if ("gentime" === t) n = 0 | i.slice(0, 4), r = 0 | i.slice(4, 6), o = 0 | i.slice(6, 8), a = 0 | i.slice(8, 10), s = 0 | i.slice(10, 12), c = 0 | i.slice(12, 14);
            else {
                if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
                n = 0 | i.slice(0, 2), r = 0 | i.slice(2, 4), o = 0 | i.slice(4, 6), a = 0 | i.slice(6, 8), s = 0 | i.slice(8, 10), c = 0 | i.slice(10, 12), n = n < 70 ? 2e3 + n : 1900 + n
            }
            return Date.UTC(n, r - 1, o, a, s, c, 0)
        }, c.prototype._decodeNull = function() {
            return null
        }, c.prototype._decodeBool = function(e) {
            const t = e.readUInt8();
            return e.isError(t) ? t : 0 !== t
        }, c.prototype._decodeInt = function(e, t) {
            const i = e.raw();
            let r = new n(i);
            return t && (r = t[r.toString(10)] || r), r
        }, c.prototype._use = function(e, t) {
            return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
        }
    }, {
        "../base/buffer": 3,
        "../base/node": 5,
        "../constants/der": 7,
        "bn.js": 15,
        inherits: 138
    }],
    10: [function(e, t, i) {
        "use strict";
        const n = i;
        n.der = e("./der"), n.pem = e("./pem")
    }, {
        "./der": 9,
        "./pem": 11
    }],
    11: [function(e, t) {
        "use strict";
        const i = e("inherits"),
            n = e("safer-buffer").Buffer,
            r = e("./der");

        function o(e) {
            r.call(this, e), this.enc = "pem"
        }
        i(o, r), t.exports = o, o.prototype.decode = function(e, t) {
            const i = e.toString().split(/[\r\n]+/g),
                o = t.label.toUpperCase(),
                a = /^-----(BEGIN|END) ([^-]+)-----$/;
            let s = -1,
                c = -1;
            for (let n = 0; n < i.length; n++) {
                const e = i[n].match(a);
                if (null !== e && e[2] === o) {
                    if (-1 !== s) {
                        if ("END" !== e[1]) break;
                        c = n;
                        break
                    }
                    if ("BEGIN" !== e[1]) break;
                    s = n
                }
            }
            if (-1 === s || -1 === c) throw new Error("PEM section not found for: " + o);
            const f = i.slice(s + 1, c).join("");
            f.replace(/[^a-z0-9+/=]+/gi, "");
            const h = n.from(f, "base64");
            return r.prototype.decode.call(this, h, t)
        }
    }, {
        "./der": 9,
        inherits: 138,
        "safer-buffer": 184
    }],
    12: [function(e, t) {
        "use strict";
        const i = e("inherits"),
            n = e("safer-buffer").Buffer,
            r = e("../base/node"),
            o = e("../constants/der");

        function a(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new s, this.tree._init(e.body)
        }

        function s(e) {
            r.call(this, "der", e)
        }

        function c(e) {
            return e < 10 ? "0" + e : e
        }

        function f(e, t, i, n) {
            let r;
            if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"), o.tagByName.hasOwnProperty(e)) r = o.tagByName[e];
            else {
                if ("number" != typeof e || (0 | e) !== e) return n.error("Unknown tag: " + e);
                r = e
            }
            return r >= 31 ? n.error("Multi-octet tag encoding unsupported") : (t || (r |= 32), r |= o.tagClassByName[i || "universal"] << 6)
        }
        t.exports = a, a.prototype.encode = function(e, t) {
            return this.tree._encode(e, t).join()
        }, i(s, r), s.prototype._encodeComposite = function(e, t, i, r) {
            const o = f(e, t, i, this.reporter);
            if (r.length < 128) {
                const e = n.alloc(2);
                return e[0] = o, e[1] = r.length, this._createEncoderBuffer([e, r])
            }
            let a = 1;
            for (let n = r.length; n >= 256; n >>= 8) a++;
            const s = n.alloc(2 + a);
            s[0] = o, s[1] = 128 | a;
            for (let n = 1 + a, c = r.length; c > 0; n--, c >>= 8) s[n] = 255 & c;
            return this._createEncoderBuffer([s, r])
        }, s.prototype._encodeStr = function(e, t) {
            if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
            if ("bmpstr" === t) {
                const t = n.alloc(2 * e.length);
                for (let i = 0; i < e.length; i++) t.writeUInt16BE(e.charCodeAt(i), 2 * i);
                return this._createEncoderBuffer(t)
            }
            return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
        }, s.prototype._encodeObjid = function(e, t, i) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("string objid given, but no values map found");
                if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
                e = t[e].split(/[\s.]+/g);
                for (let t = 0; t < e.length; t++) e[t] |= 0
            } else if (Array.isArray(e)) {
                e = e.slice();
                for (let t = 0; t < e.length; t++) e[t] |= 0
            }
            if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
            if (!i) {
                if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                e.splice(0, 2, 40 * e[0] + e[1])
            }
            let r = 0;
            for (let n = 0; n < e.length; n++) {
                let t = e[n];
                for (r++; t >= 128; t >>= 7) r++
            }
            const o = n.alloc(r);
            let a = o.length - 1;
            for (let n = e.length - 1; n >= 0; n--) {
                let t = e[n];
                for (o[a--] = 127 & t;
                    (t >>= 7) > 0;) o[a--] = 128 | 127 & t
            }
            return this._createEncoderBuffer(o)
        }, s.prototype._encodeTime = function(e, t) {
            let i;
            const n = new Date(e);
            return "gentime" === t ? i = [c(n.getUTCFullYear()), c(n.getUTCMonth() + 1), c(n.getUTCDate()), c(n.getUTCHours()), c(n.getUTCMinutes()), c(n.getUTCSeconds()), "Z"].join("") : "utctime" === t ? i = [c(n.getUTCFullYear() % 100), c(n.getUTCMonth() + 1), c(n.getUTCDate()), c(n.getUTCHours()), c(n.getUTCMinutes()), c(n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(i, "octstr")
        }, s.prototype._encodeNull = function() {
            return this._createEncoderBuffer("")
        }, s.prototype._encodeInt = function(e, t) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("String int or enum given, but no values map");
                if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
                e = t[e]
            }
            if ("number" != typeof e && !n.isBuffer(e)) {
                const t = e.toArray();
                !e.sign && 128 & t[0] && t.unshift(0), e = n.from(t)
            }
            if (n.isBuffer(e)) {
                let t = e.length;
                0 === e.length && t++;
                const i = n.alloc(t);
                return e.copy(i), 0 === e.length && (i[0] = 0), this._createEncoderBuffer(i)
            }
            if (e < 128) return this._createEncoderBuffer(e);
            if (e < 256) return this._createEncoderBuffer([0, e]);
            let i = 1;
            for (let n = e; n >= 256; n >>= 8) i++;
            const r = new Array(i);
            for (let n = r.length - 1; n >= 0; n--) r[n] = 255 & e, e >>= 8;
            return 128 & r[0] && r.unshift(0), this._createEncoderBuffer(n.from(r))
        }, s.prototype._encodeBool = function(e) {
            return this._createEncoderBuffer(e ? 255 : 0)
        }, s.prototype._use = function(e, t) {
            return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree
        }, s.prototype._skipDefault = function(e, t, i) {
            const n = this._baseState;
            let r;
            if (null === n.default) return !1;
            const o = e.join();
            if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, i).join()), o.length !== n.defaultBuffer.length) return !1;
            for (r = 0; r < o.length; r++)
                if (o[r] !== n.defaultBuffer[r]) return !1;
            return !0
        }
    }, {
        "../base/node": 5,
        "../constants/der": 7,
        inherits: 138,
        "safer-buffer": 184
    }],
    13: [function(e, t, i) {
        "use strict";
        const n = i;
        n.der = e("./der"), n.pem = e("./pem")
    }, {
        "./der": 12,
        "./pem": 14
    }],
    14: [function(e, t) {
        "use strict";
        const i = e("inherits"),
            n = e("./der");

        function r(e) {
            n.call(this, e), this.enc = "pem"
        }
        i(r, n), t.exports = r, r.prototype.encode = function(e, t) {
            const i = n.prototype.encode.call(this, e).toString("base64"),
                r = ["-----BEGIN " + t.label + "-----"];
            for (let n = 0; n < i.length; n += 64) r.push(i.slice(n, n + 64));
            return r.push("-----END " + t.label + "-----"), r.join("\n")
        }
    }, {
        "./der": 12,
        inherits: 138
    }],
    15: [function(e, t) {
        (function(t, i) {
            "use strict";

            function n(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }

            function r(e, t) {
                e.super_ = t;
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
            }

            function o(e, t, i) {
                if (o.isBN(e)) return e;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (i = t, t = 10), this._init(e || 0, t || 10, i || "be"))
            }
            var a;
            "object" == typeof t ? t.exports = o : i.BN = o, o.BN = o, o.wordSize = 26;
            try {
                a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e("buffer").Buffer
            } catch (P) {}

            function s(e, t) {
                var i = e.charCodeAt(t);
                return i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : i - 48 & 15
            }

            function c(e, t, i) {
                var n = s(e, i);
                return i - 1 >= t && (n |= s(e, i - 1) << 4), n
            }

            function f(e, t, i, n) {
                for (var r = 0, o = Math.min(e.length, i), a = t; a < o; a++) {
                    var s = e.charCodeAt(a) - 48;
                    r *= n, r += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return r
            }
            o.isBN = function(e) {
                return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
            }, o.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }, o.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }, o.prototype._init = function(e, t, i) {
                if ("number" == typeof e) return this._initNumber(e, t, i);
                if ("object" == typeof e) return this._initArray(e, t, i);
                "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                var r = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (r++, this.negative = 1), r < e.length && (16 === t ? this._parseHex(e, r, i) : (this._parseBase(e, t, r), "le" === i && this._initArray(this.toArray(), t, i)))
            }, o.prototype._initNumber = function(e, t, i) {
                e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), t, i)
            }, o.prototype._initArray = function(e, t, i) {
                if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++) this.words[r] = 0;
                var o, a, s = 0;
                if ("be" === i)
                    for (r = e.length - 1, o = 0; r >= 0; r -= 3) a = e[r] | e[r - 1] << 8 | e[r - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                else if ("le" === i)
                    for (r = 0, o = 0; r < e.length; r += 3) a = e[r] | e[r + 1] << 8 | e[r + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                return this.strip()
            }, o.prototype._parseHex = function(e, t, i) {
                this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                var r, o = 0,
                    a = 0;
                if ("be" === i)
                    for (n = e.length - 1; n >= t; n -= 2) r = c(e, t, n) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                else
                    for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) r = c(e, t, n) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                this.strip()
            }, o.prototype._parseBase = function(e, t, i) {
                this.words = [0], this.length = 1;
                for (var n = 0, r = 1; r <= 67108863; r *= t) n++;
                n--, r = r / t | 0;
                for (var o = e.length - i, a = o % n, s = Math.min(o, o - a) + i, c = 0, h = i; h < s; h += n) c = f(e, h, h + n, t), this.imuln(r), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                if (0 !== a) {
                    var u = 1;
                    for (c = f(e, h, e.length, t), h = 0; h < a; h++) u *= t;
                    this.imuln(u), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                }
                this.strip()
            }, o.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                e.length = this.length, e.negative = this.negative, e.red = this.red
            }, o.prototype.clone = function() {
                var e = new o(null);
                return this.copy(e), e
            }, o.prototype._expand = function(e) {
                for (; this.length < e;) this.words[this.length++] = 0;
                return this
            }, o.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                return this._normSign()
            }, o.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }, o.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

            function l(e) {
                for (var t = new Array(e.bitLength()), i = 0; i < t.length; i++) {
                    var n = i / 26 | 0,
                        r = i % 26;
                    t[i] = (e.words[n] & 1 << r) >>> r
                }
                return t
            }

            function p(e, t, i) {
                i.negative = t.negative ^ e.negative;
                var n = e.length + t.length | 0;
                i.length = n, n = n - 1 | 0;
                var r = 0 | e.words[0],
                    o = 0 | t.words[0],
                    a = r * o,
                    s = 67108863 & a,
                    c = a / 67108864 | 0;
                i.words[0] = s;
                for (var f = 1; f < n; f++) {
                    for (var h = c >>> 26, u = 67108863 & c, d = Math.min(f, t.length - 1), l = Math.max(0, f - e.length + 1); l <= d; l++) {
                        var p = f - l | 0;
                        h += (a = (r = 0 | e.words[p]) * (o = 0 | t.words[l]) + u) / 67108864 | 0, u = 67108863 & a
                    }
                    i.words[f] = 0 | u, c = 0 | h
                }
                return 0 !== c ? i.words[f] = 0 | c : i.length--, i.strip()
            }
            o.prototype.toString = function(e, t) {
                var i;
                if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                    i = "";
                    for (var r = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a],
                            c = (16777215 & (s << r | o)).toString(16);
                        i = 0 != (o = s >>> 24 - r & 16777215) || a !== this.length - 1 ? h[6 - c.length] + c + i : c + i, (r += 2) >= 26 && (r -= 26, a--)
                    }
                    for (0 !== o && (i = o.toString(16) + i); i.length % t != 0;) i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i), i
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var f = u[e],
                        l = d[e];
                    i = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero();) {
                        var g = p.modn(l).toString(e);
                        i = (p = p.idivn(l)).isZero() ? g + i : h[f - g.length] + g + i
                    }
                    for (this.isZero() && (i = "0" + i); i.length % t != 0;) i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i), i
                }
                n(!1, "Base should be between 2 and 36")
            }, o.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
            }, o.prototype.toJSON = function() {
                return this.toString(16)
            }, o.prototype.toBuffer = function(e, t) {
                return n(void 0 !== a), this.toArrayLike(a, e, t)
            }, o.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }, o.prototype.toArrayLike = function(e, t, i) {
                var r = this.byteLength(),
                    o = i || Math.max(1, r);
                n(r <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                var a, s, c = "le" === t,
                    f = new e(o),
                    h = this.clone();
                if (c) {
                    for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[s] = a;
                    for (; s < o; s++) f[s] = 0
                } else {
                    for (s = 0; s < o - r; s++) f[s] = 0;
                    for (s = 0; !h.isZero(); s++) a = h.andln(255), h.iushrn(8), f[o - s - 1] = a
                }
                return f
            }, Math.clz32 ? o.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            } : o.prototype._countBits = function(e) {
                var t = e,
                    i = 0;
                return t >= 4096 && (i += 13, t >>>= 13), t >= 64 && (i += 7, t >>>= 7), t >= 8 && (i += 4, t >>>= 4), t >= 2 && (i += 2, t >>>= 2), i + t
            }, o.prototype._zeroBits = function(e) {
                if (0 === e) return 26;
                var t = e,
                    i = 0;
                return 0 == (8191 & t) && (i += 13, t >>>= 13), 0 == (127 & t) && (i += 7, t >>>= 7), 0 == (15 & t) && (i += 4, t >>>= 4), 0 == (3 & t) && (i += 2, t >>>= 2), 0 == (1 & t) && i++, i
            }, o.prototype.bitLength = function() {
                var e = this.words[this.length - 1],
                    t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }, o.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var i = this._zeroBits(this.words[t]);
                    if (e += i, 26 !== i) break
                }
                return e
            }, o.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, o.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }, o.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }, o.prototype.isNeg = function() {
                return 0 !== this.negative
            }, o.prototype.neg = function() {
                return this.clone().ineg()
            }, o.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, o.prototype.iuor = function(e) {
                for (; this.length < e.length;) this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }, o.prototype.ior = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuor(e)
            }, o.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }, o.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }, o.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] & e.words[i];
                return this.length = t.length, this.strip()
            }, o.prototype.iand = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuand(e)
            }, o.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }, o.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }, o.prototype.iuxor = function(e) {
                var t, i;
                this.length > e.length ? (t = this, i = e) : (t = e, i = this);
                for (var n = 0; n < i.length; n++) this.words[n] = t.words[n] ^ i.words[n];
                if (this !== t)
                    for (; n < t.length; n++) this.words[n] = t.words[n];
                return this.length = t.length, this.strip()
            }, o.prototype.ixor = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuxor(e)
            }, o.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }, o.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }, o.prototype.inotn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26),
                    i = e % 26;
                this._expand(t), i > 0 && t--;
                for (var r = 0; r < t; r++) this.words[r] = 67108863 & ~this.words[r];
                return i > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - i), this.strip()
            }, o.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }, o.prototype.setn = function(e, t) {
                n("number" == typeof e && e >= 0);
                var i = e / 26 | 0,
                    r = e % 26;
                return this._expand(i + 1), this.words[i] = t ? this.words[i] | 1 << r : this.words[i] & ~(1 << r), this.strip()
            }, o.prototype.iadd = function(e) {
                var t, i, n;
                if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                this.length > e.length ? (i = this, n = e) : (i = e, n = this);
                for (var r = 0, o = 0; o < n.length; o++) t = (0 | i.words[o]) + (0 | n.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
                for (; 0 !== r && o < i.length; o++) t = (0 | i.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
                if (this.length = i.length, 0 !== r) this.words[this.length] = r, this.length++;
                else if (i !== this)
                    for (; o < i.length; o++) this.words[o] = i.words[o];
                return this
            }, o.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }, o.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1, t._normSign()
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                var i, n, r = this.cmp(e);
                if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                r > 0 ? (i = this, n = e) : (i = e, n = this);
                for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | i.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                for (; 0 !== o && a < i.length; a++) o = (t = (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                if (0 === o && a < i.length && i !== this)
                    for (; a < i.length; a++) this.words[a] = i.words[a];
                return this.length = Math.max(this.length, a), i !== this && (this.negative = 1), this.strip()
            }, o.prototype.sub = function(e) {
                return this.clone().isub(e)
            };
            var g = function(e, t, i) {
                var n, r, o, a = e.words,
                    s = t.words,
                    c = i.words,
                    f = 0,
                    h = 0 | a[0],
                    u = 8191 & h,
                    d = h >>> 13,
                    l = 0 | a[1],
                    p = 8191 & l,
                    g = l >>> 13,
                    b = 0 | a[2],
                    m = 8191 & b,
                    y = b >>> 13,
                    _ = 0 | a[3],
                    v = 8191 & _,
                    w = _ >>> 13,
                    M = 0 | a[4],
                    S = 8191 & M,
                    C = M >>> 13,
                    E = 0 | a[5],
                    k = 8191 & E,
                    P = E >>> 13,
                    I = 0 | a[6],
                    N = 8191 & I,
                    R = I >>> 13,
                    B = 0 | a[7],
                    x = 8191 & B,
                    T = B >>> 13,
                    A = 0 | a[8],
                    L = 8191 & A,
                    D = A >>> 13,
                    O = 0 | a[9],
                    j = 8191 & O,
                    U = O >>> 13,
                    F = 0 | s[0],
                    z = 8191 & F,
                    q = F >>> 13,
                    G = 0 | s[1],
                    V = 8191 & G,
                    H = G >>> 13,
                    W = 0 | s[2],
                    K = 8191 & W,
                    J = W >>> 13,
                    Z = 0 | s[3],
                    Y = 8191 & Z,
                    X = Z >>> 13,
                    Q = 0 | s[4],
                    $ = 8191 & Q,
                    ee = Q >>> 13,
                    te = 0 | s[5],
                    ie = 8191 & te,
                    ne = te >>> 13,
                    re = 0 | s[6],
                    oe = 8191 & re,
                    ae = re >>> 13,
                    se = 0 | s[7],
                    ce = 8191 & se,
                    fe = se >>> 13,
                    he = 0 | s[8],
                    ue = 8191 & he,
                    de = he >>> 13,
                    le = 0 | s[9],
                    pe = 8191 & le,
                    ge = le >>> 13;
                i.negative = e.negative ^ t.negative, i.length = 19;
                var be = (f + (n = Math.imul(u, z)) | 0) + ((8191 & (r = (r = Math.imul(u, q)) + Math.imul(d, z) | 0)) << 13) | 0;
                f = ((o = Math.imul(d, q)) + (r >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(p, z), r = (r = Math.imul(p, q)) + Math.imul(g, z) | 0, o = Math.imul(g, q);
                var me = (f + (n = n + Math.imul(u, V) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, H) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, H) | 0) + (r >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(m, z), r = (r = Math.imul(m, q)) + Math.imul(y, z) | 0, o = Math.imul(y, q), n = n + Math.imul(p, V) | 0, r = (r = r + Math.imul(p, H) | 0) + Math.imul(g, V) | 0, o = o + Math.imul(g, H) | 0;
                var ye = (f + (n = n + Math.imul(u, K) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, J) | 0) + Math.imul(d, K) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, J) | 0) + (r >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(v, z), r = (r = Math.imul(v, q)) + Math.imul(w, z) | 0, o = Math.imul(w, q), n = n + Math.imul(m, V) | 0, r = (r = r + Math.imul(m, H) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, K) | 0, r = (r = r + Math.imul(p, J) | 0) + Math.imul(g, K) | 0, o = o + Math.imul(g, J) | 0;
                var _e = (f + (n = n + Math.imul(u, Y) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, X) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, X) | 0) + (r >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(S, z), r = (r = Math.imul(S, q)) + Math.imul(C, z) | 0, o = Math.imul(C, q), n = n + Math.imul(v, V) | 0, r = (r = r + Math.imul(v, H) | 0) + Math.imul(w, V) | 0, o = o + Math.imul(w, H) | 0, n = n + Math.imul(m, K) | 0, r = (r = r + Math.imul(m, J) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, Y) | 0, r = (r = r + Math.imul(p, X) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, X) | 0;
                var ve = (f + (n = n + Math.imul(u, $) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ee) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ee) | 0) + (r >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(k, z), r = (r = Math.imul(k, q)) + Math.imul(P, z) | 0, o = Math.imul(P, q), n = n + Math.imul(S, V) | 0, r = (r = r + Math.imul(S, H) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, H) | 0, n = n + Math.imul(v, K) | 0, r = (r = r + Math.imul(v, J) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, J) | 0, n = n + Math.imul(m, Y) | 0, r = (r = r + Math.imul(m, X) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, $) | 0, r = (r = r + Math.imul(p, ee) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, ee) | 0;
                var we = (f + (n = n + Math.imul(u, ie) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ne) | 0) + Math.imul(d, ie) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ne) | 0) + (r >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(N, z), r = (r = Math.imul(N, q)) + Math.imul(R, z) | 0, o = Math.imul(R, q), n = n + Math.imul(k, V) | 0, r = (r = r + Math.imul(k, H) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(S, K) | 0, r = (r = r + Math.imul(S, J) | 0) + Math.imul(C, K) | 0, o = o + Math.imul(C, J) | 0, n = n + Math.imul(v, Y) | 0, r = (r = r + Math.imul(v, X) | 0) + Math.imul(w, Y) | 0, o = o + Math.imul(w, X) | 0, n = n + Math.imul(m, $) | 0, r = (r = r + Math.imul(m, ee) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, ie) | 0, r = (r = r + Math.imul(p, ne) | 0) + Math.imul(g, ie) | 0, o = o + Math.imul(g, ne) | 0;
                var Me = (f + (n = n + Math.imul(u, oe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ae) | 0) + Math.imul(d, oe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ae) | 0) + (r >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(x, z), r = (r = Math.imul(x, q)) + Math.imul(T, z) | 0, o = Math.imul(T, q), n = n + Math.imul(N, V) | 0, r = (r = r + Math.imul(N, H) | 0) + Math.imul(R, V) | 0, o = o + Math.imul(R, H) | 0, n = n + Math.imul(k, K) | 0, r = (r = r + Math.imul(k, J) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, J) | 0, n = n + Math.imul(S, Y) | 0, r = (r = r + Math.imul(S, X) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, X) | 0, n = n + Math.imul(v, $) | 0, r = (r = r + Math.imul(v, ee) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(m, ie) | 0, r = (r = r + Math.imul(m, ne) | 0) + Math.imul(y, ie) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, r = (r = r + Math.imul(p, ae) | 0) + Math.imul(g, oe) | 0, o = o + Math.imul(g, ae) | 0;
                var Se = (f + (n = n + Math.imul(u, ce) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, fe) | 0) + Math.imul(d, ce) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, fe) | 0) + (r >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(L, z), r = (r = Math.imul(L, q)) + Math.imul(D, z) | 0, o = Math.imul(D, q), n = n + Math.imul(x, V) | 0, r = (r = r + Math.imul(x, H) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, H) | 0, n = n + Math.imul(N, K) | 0, r = (r = r + Math.imul(N, J) | 0) + Math.imul(R, K) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(k, Y) | 0, r = (r = r + Math.imul(k, X) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(S, $) | 0, r = (r = r + Math.imul(S, ee) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(v, ie) | 0, r = (r = r + Math.imul(v, ne) | 0) + Math.imul(w, ie) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(m, oe) | 0, r = (r = r + Math.imul(m, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ce) | 0, r = (r = r + Math.imul(p, fe) | 0) + Math.imul(g, ce) | 0, o = o + Math.imul(g, fe) | 0;
                var Ce = (f + (n = n + Math.imul(u, ue) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, de) | 0) + Math.imul(d, ue) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, de) | 0) + (r >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(j, z), r = (r = Math.imul(j, q)) + Math.imul(U, z) | 0, o = Math.imul(U, q), n = n + Math.imul(L, V) | 0, r = (r = r + Math.imul(L, H) | 0) + Math.imul(D, V) | 0, o = o + Math.imul(D, H) | 0, n = n + Math.imul(x, K) | 0, r = (r = r + Math.imul(x, J) | 0) + Math.imul(T, K) | 0, o = o + Math.imul(T, J) | 0, n = n + Math.imul(N, Y) | 0, r = (r = r + Math.imul(N, X) | 0) + Math.imul(R, Y) | 0, o = o + Math.imul(R, X) | 0, n = n + Math.imul(k, $) | 0, r = (r = r + Math.imul(k, ee) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, ee) | 0, n = n + Math.imul(S, ie) | 0, r = (r = r + Math.imul(S, ne) | 0) + Math.imul(C, ie) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(v, oe) | 0, r = (r = r + Math.imul(v, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(m, ce) | 0, r = (r = r + Math.imul(m, fe) | 0) + Math.imul(y, ce) | 0, o = o + Math.imul(y, fe) | 0, n = n + Math.imul(p, ue) | 0, r = (r = r + Math.imul(p, de) | 0) + Math.imul(g, ue) | 0, o = o + Math.imul(g, de) | 0;
                var Ee = (f + (n = n + Math.imul(u, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ge) | 0) + Math.imul(d, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ge) | 0) + (r >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(j, V), r = (r = Math.imul(j, H)) + Math.imul(U, V) | 0, o = Math.imul(U, H), n = n + Math.imul(L, K) | 0, r = (r = r + Math.imul(L, J) | 0) + Math.imul(D, K) | 0, o = o + Math.imul(D, J) | 0, n = n + Math.imul(x, Y) | 0, r = (r = r + Math.imul(x, X) | 0) + Math.imul(T, Y) | 0, o = o + Math.imul(T, X) | 0, n = n + Math.imul(N, $) | 0, r = (r = r + Math.imul(N, ee) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(k, ie) | 0, r = (r = r + Math.imul(k, ne) | 0) + Math.imul(P, ie) | 0, o = o + Math.imul(P, ne) | 0, n = n + Math.imul(S, oe) | 0, r = (r = r + Math.imul(S, ae) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, ae) | 0, n = n + Math.imul(v, ce) | 0, r = (r = r + Math.imul(v, fe) | 0) + Math.imul(w, ce) | 0, o = o + Math.imul(w, fe) | 0, n = n + Math.imul(m, ue) | 0, r = (r = r + Math.imul(m, de) | 0) + Math.imul(y, ue) | 0, o = o + Math.imul(y, de) | 0;
                var ke = (f + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(p, ge) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(g, ge) | 0) + (r >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(j, K), r = (r = Math.imul(j, J)) + Math.imul(U, K) | 0, o = Math.imul(U, J), n = n + Math.imul(L, Y) | 0, r = (r = r + Math.imul(L, X) | 0) + Math.imul(D, Y) | 0, o = o + Math.imul(D, X) | 0, n = n + Math.imul(x, $) | 0, r = (r = r + Math.imul(x, ee) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(N, ie) | 0, r = (r = r + Math.imul(N, ne) | 0) + Math.imul(R, ie) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(k, oe) | 0, r = (r = r + Math.imul(k, ae) | 0) + Math.imul(P, oe) | 0, o = o + Math.imul(P, ae) | 0, n = n + Math.imul(S, ce) | 0, r = (r = r + Math.imul(S, fe) | 0) + Math.imul(C, ce) | 0, o = o + Math.imul(C, fe) | 0, n = n + Math.imul(v, ue) | 0, r = (r = r + Math.imul(v, de) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, de) | 0;
                var Pe = (f + (n = n + Math.imul(m, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(m, ge) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(y, ge) | 0) + (r >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(j, Y), r = (r = Math.imul(j, X)) + Math.imul(U, Y) | 0, o = Math.imul(U, X), n = n + Math.imul(L, $) | 0, r = (r = r + Math.imul(L, ee) | 0) + Math.imul(D, $) | 0, o = o + Math.imul(D, ee) | 0, n = n + Math.imul(x, ie) | 0, r = (r = r + Math.imul(x, ne) | 0) + Math.imul(T, ie) | 0, o = o + Math.imul(T, ne) | 0, n = n + Math.imul(N, oe) | 0, r = (r = r + Math.imul(N, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(k, ce) | 0, r = (r = r + Math.imul(k, fe) | 0) + Math.imul(P, ce) | 0, o = o + Math.imul(P, fe) | 0, n = n + Math.imul(S, ue) | 0, r = (r = r + Math.imul(S, de) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, de) | 0;
                var Ie = (f + (n = n + Math.imul(v, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(v, ge) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(w, ge) | 0) + (r >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(j, $), r = (r = Math.imul(j, ee)) + Math.imul(U, $) | 0, o = Math.imul(U, ee), n = n + Math.imul(L, ie) | 0, r = (r = r + Math.imul(L, ne) | 0) + Math.imul(D, ie) | 0, o = o + Math.imul(D, ne) | 0, n = n + Math.imul(x, oe) | 0, r = (r = r + Math.imul(x, ae) | 0) + Math.imul(T, oe) | 0, o = o + Math.imul(T, ae) | 0, n = n + Math.imul(N, ce) | 0, r = (r = r + Math.imul(N, fe) | 0) + Math.imul(R, ce) | 0, o = o + Math.imul(R, fe) | 0, n = n + Math.imul(k, ue) | 0, r = (r = r + Math.imul(k, de) | 0) + Math.imul(P, ue) | 0, o = o + Math.imul(P, de) | 0;
                var Ne = (f + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(S, ge) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(C, ge) | 0) + (r >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(j, ie), r = (r = Math.imul(j, ne)) + Math.imul(U, ie) | 0, o = Math.imul(U, ne), n = n + Math.imul(L, oe) | 0, r = (r = r + Math.imul(L, ae) | 0) + Math.imul(D, oe) | 0, o = o + Math.imul(D, ae) | 0, n = n + Math.imul(x, ce) | 0, r = (r = r + Math.imul(x, fe) | 0) + Math.imul(T, ce) | 0, o = o + Math.imul(T, fe) | 0, n = n + Math.imul(N, ue) | 0, r = (r = r + Math.imul(N, de) | 0) + Math.imul(R, ue) | 0, o = o + Math.imul(R, de) | 0;
                var Re = (f + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(k, ge) | 0) + Math.imul(P, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(P, ge) | 0) + (r >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(j, oe), r = (r = Math.imul(j, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(L, ce) | 0, r = (r = r + Math.imul(L, fe) | 0) + Math.imul(D, ce) | 0, o = o + Math.imul(D, fe) | 0, n = n + Math.imul(x, ue) | 0, r = (r = r + Math.imul(x, de) | 0) + Math.imul(T, ue) | 0, o = o + Math.imul(T, de) | 0;
                var Be = (f + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(N, ge) | 0) + Math.imul(R, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(R, ge) | 0) + (r >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(j, ce), r = (r = Math.imul(j, fe)) + Math.imul(U, ce) | 0, o = Math.imul(U, fe), n = n + Math.imul(L, ue) | 0, r = (r = r + Math.imul(L, de) | 0) + Math.imul(D, ue) | 0, o = o + Math.imul(D, de) | 0;
                var xe = (f + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(x, ge) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(T, ge) | 0) + (r >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(j, ue), r = (r = Math.imul(j, de)) + Math.imul(U, ue) | 0, o = Math.imul(U, de);
                var Te = (f + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(L, ge) | 0) + Math.imul(D, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(D, ge) | 0) + (r >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863;
                var Ae = (f + (n = Math.imul(j, pe)) | 0) + ((8191 & (r = (r = Math.imul(j, ge)) + Math.imul(U, pe) | 0)) << 13) | 0;
                return f = ((o = Math.imul(U, ge)) + (r >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, c[0] = be, c[1] = me, c[2] = ye, c[3] = _e, c[4] = ve, c[5] = we, c[6] = Me, c[7] = Se, c[8] = Ce, c[9] = Ee, c[10] = ke, c[11] = Pe, c[12] = Ie, c[13] = Ne, c[14] = Re, c[15] = Be, c[16] = xe, c[17] = Te, c[18] = Ae, 0 !== f && (c[19] = f, i.length++), i
            };

            function b(e, t, i) {
                i.negative = t.negative ^ e.negative, i.length = e.length + t.length;
                for (var n = 0, r = 0, o = 0; o < i.length - 1; o++) {
                    var a = r;
                    r = 0;
                    for (var s = 67108863 & n, c = Math.min(o, t.length - 1), f = Math.max(0, o - e.length + 1); f <= c; f++) {
                        var h = o - f,
                            u = (0 | e.words[h]) * (0 | t.words[f]),
                            d = 67108863 & u;
                        s = 67108863 & (d = d + s | 0), r += (a = (a = a + (u / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863
                    }
                    i.words[o] = s, n = a, a = r
                }
                return 0 !== n ? i.words[o] = n : i.length--, i.strip()
            }

            function m(e, t, i) {
                return (new y).mulp(e, t, i)
            }

            function y(e, t) {
                this.x = e, this.y = t
            }
            Math.imul || (g = p), o.prototype.mulTo = function(e, t) {
                var i = this.length + e.length;
                return 10 === this.length && 10 === e.length ? g(this, e, t) : i < 63 ? p(this, e, t) : i < 1024 ? b(this, e, t) : m(this, e, t)
            }, y.prototype.makeRBT = function(e) {
                for (var t = new Array(e), i = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, i, e);
                return t
            }, y.prototype.revBin = function(e, t, i) {
                if (0 === e || e === i - 1) return e;
                for (var n = 0, r = 0; r < t; r++) n |= (1 & e) << t - r - 1, e >>= 1;
                return n
            }, y.prototype.permute = function(e, t, i, n, r, o) {
                for (var a = 0; a < o; a++) n[a] = t[e[a]], r[a] = i[e[a]]
            }, y.prototype.transform = function(e, t, i, n, r, o) {
                this.permute(o, e, t, i, n, r);
                for (var a = 1; a < r; a <<= 1)
                    for (var s = a << 1, c = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < r; h += s)
                        for (var u = c, d = f, l = 0; l < a; l++) {
                            var p = i[h + l],
                                g = n[h + l],
                                b = i[h + l + a],
                                m = n[h + l + a],
                                y = u * b - d * m;
                            m = u * m + d * b, b = y, i[h + l] = p + b, n[h + l] = g + m, i[h + l + a] = p - b, n[h + l + a] = g - m, l !== s && (y = c * u - f * d, d = c * d + f * u, u = y)
                        }
            }, y.prototype.guessLen13b = function(e, t) {
                var i = 1 | Math.max(t, e),
                    n = 1 & i,
                    r = 0;
                for (i = i / 2 | 0; i; i >>>= 1) r++;
                return 1 << r + 1 + n
            }, y.prototype.conjugate = function(e, t, i) {
                if (!(i <= 1))
                    for (var n = 0; n < i / 2; n++) {
                        var r = e[n];
                        e[n] = e[i - n - 1], e[i - n - 1] = r, r = t[n], t[n] = -t[i - n - 1], t[i - n - 1] = -r
                    }
            }, y.prototype.normalize13b = function(e, t) {
                for (var i = 0, n = 0; n < t / 2; n++) {
                    var r = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + i;
                    e[n] = 67108863 & r, i = r < 67108864 ? 0 : r / 67108864 | 0
                }
                return e
            }, y.prototype.convert13b = function(e, t, i, r) {
                for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], i[2 * a] = 8191 & o, o >>>= 13, i[2 * a + 1] = 8191 & o, o >>>= 13;
                for (a = 2 * t; a < r; ++a) i[a] = 0;
                n(0 === o), n(0 == (-8192 & o))
            }, y.prototype.stub = function(e) {
                for (var t = new Array(e), i = 0; i < e; i++) t[i] = 0;
                return t
            }, y.prototype.mulp = function(e, t, i) {
                var n = 2 * this.guessLen13b(e.length, t.length),
                    r = this.makeRBT(n),
                    o = this.stub(n),
                    a = new Array(n),
                    s = new Array(n),
                    c = new Array(n),
                    f = new Array(n),
                    h = new Array(n),
                    u = new Array(n),
                    d = i.words;
                d.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, f, n), this.transform(a, o, s, c, n, r), this.transform(f, o, h, u, n, r);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * h[l] - c[l] * u[l];
                    c[l] = s[l] * u[l] + c[l] * h[l], s[l] = p
                }
                return this.conjugate(s, c, n), this.transform(s, c, d, o, n, r), this.conjugate(d, o, n), this.normalize13b(d, n), i.negative = e.negative ^ t.negative, i.length = e.length + t.length, i.strip()
            }, o.prototype.mul = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length), this.mulTo(e, t)
            }, o.prototype.mulf = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length), m(this, e, t)
            }, o.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }, o.prototype.imuln = function(e) {
                n("number" == typeof e), n(e < 67108864);
                for (var t = 0, i = 0; i < this.length; i++) {
                    var r = (0 | this.words[i]) * e,
                        o = (67108863 & r) + (67108863 & t);
                    t >>= 26, t += r / 67108864 | 0, t += o >>> 26, this.words[i] = 67108863 & o
                }
                return 0 !== t && (this.words[i] = t, this.length++), this
            }, o.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }, o.prototype.sqr = function() {
                return this.mul(this)
            }, o.prototype.isqr = function() {
                return this.imul(this.clone())
            }, o.prototype.pow = function(e) {
                var t = l(e);
                if (0 === t.length) return new o(1);
                for (var i = this, n = 0; n < t.length && 0 === t[n]; n++, i = i.sqr());
                if (++n < t.length)
                    for (var r = i.sqr(); n < t.length; n++, r = r.sqr()) 0 !== t[n] && (i = i.mul(r));
                return i
            }, o.prototype.iushln = function(e) {
                n("number" == typeof e && e >= 0);
                var t, i = e % 26,
                    r = (e - i) / 26,
                    o = 67108863 >>> 26 - i << 26 - i;
                if (0 !== i) {
                    var a = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & o,
                            c = (0 | this.words[t]) - s << i;
                        this.words[t] = c | a, a = s >>> 26 - i
                    }
                    a && (this.words[t] = a, this.length++)
                }
                if (0 !== r) {
                    for (t = this.length - 1; t >= 0; t--) this.words[t + r] = this.words[t];
                    for (t = 0; t < r; t++) this.words[t] = 0;
                    this.length += r
                }
                return this.strip()
            }, o.prototype.ishln = function(e) {
                return n(0 === this.negative), this.iushln(e)
            }, o.prototype.iushrn = function(e, t, i) {
                var r;
                n("number" == typeof e && e >= 0), r = t ? (t - t % 26) / 26 : 0;
                var o = e % 26,
                    a = Math.min((e - o) / 26, this.length),
                    s = 67108863 ^ 67108863 >>> o << o,
                    c = i;
                if (r -= a, r = Math.max(0, r), c) {
                    for (var f = 0; f < a; f++) c.words[f] = this.words[f];
                    c.length = a
                }
                if (0 === a);
                else if (this.length > a)
                    for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                else this.words[0] = 0, this.length = 1;
                var h = 0;
                for (f = this.length - 1; f >= 0 && (0 !== h || f >= r); f--) {
                    var u = 0 | this.words[f];
                    this.words[f] = h << 26 - o | u >>> o, h = u & s
                }
                return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
            }, o.prototype.ishrn = function(e, t, i) {
                return n(0 === this.negative), this.iushrn(e, t, i)
            }, o.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }, o.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }, o.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }, o.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }, o.prototype.testn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                    i = (e - t) / 26,
                    r = 1 << t;
                return !(this.length <= i || !(this.words[i] & r))
            }, o.prototype.imaskn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                    i = (e - t) / 26;
                if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                if (0 !== t && i++, this.length = Math.min(i, this.length), 0 !== t) {
                    var r = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= r
                }
                return this.strip()
            }, o.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }, o.prototype.iaddn = function(e) {
                return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
            }, o.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1), this
            }, o.prototype.isubn = function(e) {
                if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                return this.strip()
            }, o.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }, o.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }, o.prototype.iabs = function() {
                return this.negative = 0, this
            }, o.prototype.abs = function() {
                return this.clone().iabs()
            }, o.prototype._ishlnsubmul = function(e, t, i) {
                var r, o, a = e.length + i;
                this._expand(a);
                var s = 0;
                for (r = 0; r < e.length; r++) {
                    o = (0 | this.words[r + i]) + s;
                    var c = (0 | e.words[r]) * t;
                    s = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[r + i] = 67108863 & o
                }
                for (; r < this.length - i; r++) s = (o = (0 | this.words[r + i]) + s) >> 26, this.words[r + i] = 67108863 & o;
                if (0 === s) return this.strip();
                for (n(-1 === s), s = 0, r = 0; r < this.length; r++) s = (o = -(0 | this.words[r]) + s) >> 26, this.words[r] = 67108863 & o;
                return this.negative = 1, this.strip()
            }, o.prototype._wordDiv = function(e, t) {
                var i = (this.length, e.length),
                    n = this.clone(),
                    r = e,
                    a = 0 | r.words[r.length - 1];
                0 != (i = 26 - this._countBits(a)) && (r = r.ushln(i), n.iushln(i), a = 0 | r.words[r.length - 1]);
                var s, c = n.length - r.length;
                if ("mod" !== t) {
                    (s = new o(null)).length = c + 1, s.words = new Array(s.length);
                    for (var f = 0; f < s.length; f++) s.words[f] = 0
                }
                var h = n.clone()._ishlnsubmul(r, 1, c);
                0 === h.negative && (n = h, s && (s.words[c] = 1));
                for (var u = c - 1; u >= 0; u--) {
                    var d = 67108864 * (0 | n.words[r.length + u]) + (0 | n.words[r.length + u - 1]);
                    for (d = Math.min(d / a | 0, 67108863), n._ishlnsubmul(r, d, u); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(r, 1, u), n.isZero() || (n.negative ^= 1);
                    s && (s.words[u] = d)
                }
                return s && s.strip(), n.strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                    div: s || null,
                    mod: n
                }
            }, o.prototype.divmod = function(e, t, i) {
                return n(!e.isZero()), this.isZero() ? {
                    div: new o(0),
                    mod: new o(0)
                } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (r = s.div.neg()), "div" !== t && (a = s.mod.neg(), i && 0 !== a.negative && a.iadd(e)), {
                    div: r,
                    mod: a
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (r = s.div.neg()), {
                    div: r,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), i && 0 !== a.negative && a.isub(e)), {
                    div: s.div,
                    mod: a
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new o(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new o(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new o(this.modn(e.words[0]))
                } : this._wordDiv(e, t);
                var r, a, s
            }, o.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }, o.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }, o.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }, o.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero()) return t.div;
                var i = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                    n = e.ushrn(1),
                    r = e.andln(1),
                    o = i.cmp(n);
                return o < 0 || 1 === r && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }, o.prototype.modn = function(e) {
                n(e <= 67108863);
                for (var t = (1 << 26) % e, i = 0, r = this.length - 1; r >= 0; r--) i = (t * i + (0 | this.words[r])) % e;
                return i
            }, o.prototype.idivn = function(e) {
                n(e <= 67108863);
                for (var t = 0, i = this.length - 1; i >= 0; i--) {
                    var r = (0 | this.words[i]) + 67108864 * t;
                    this.words[i] = r / e | 0, t = r % e
                }
                return this.strip()
            }, o.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }, o.prototype.egcd = function(e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                    i = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r = new o(1), a = new o(0), s = new o(0), c = new o(1), f = 0; t.isEven() && i.isEven();) t.iushrn(1), i.iushrn(1), ++f;
                for (var h = i.clone(), u = t.clone(); !t.isZero();) {
                    for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1);
                    if (d > 0)
                        for (t.iushrn(d); d-- > 0;)(r.isOdd() || a.isOdd()) && (r.iadd(h), a.isub(u)), r.iushrn(1), a.iushrn(1);
                    for (var p = 0, g = 1; 0 == (i.words[0] & g) && p < 26; ++p, g <<= 1);
                    if (p > 0)
                        for (i.iushrn(p); p-- > 0;)(s.isOdd() || c.isOdd()) && (s.iadd(h), c.isub(u)), s.iushrn(1), c.iushrn(1);
                    t.cmp(i) >= 0 ? (t.isub(i), r.isub(s), a.isub(c)) : (i.isub(t), s.isub(r), c.isub(a))
                }
                return {
                    a: s,
                    b: c,
                    gcd: i.iushln(f)
                }
            }, o.prototype._invmp = function(e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                    i = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r, a = new o(1), s = new o(0), c = i.clone(); t.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                    for (var f = 0, h = 1; 0 == (t.words[0] & h) && f < 26; ++f, h <<= 1);
                    if (f > 0)
                        for (t.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                    for (var u = 0, d = 1; 0 == (i.words[0] & d) && u < 26; ++u, d <<= 1);
                    if (u > 0)
                        for (i.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                    t.cmp(i) >= 0 ? (t.isub(i), a.isub(s)) : (i.isub(t), s.isub(a))
                }
                return (r = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && r.iadd(e), r
            }, o.prototype.gcd = function(e) {
                if (this.isZero()) return e.abs();
                if (e.isZero()) return this.abs();
                var t = this.clone(),
                    i = e.clone();
                t.negative = 0, i.negative = 0;
                for (var n = 0; t.isEven() && i.isEven(); n++) t.iushrn(1), i.iushrn(1);
                for (;;) {
                    for (; t.isEven();) t.iushrn(1);
                    for (; i.isEven();) i.iushrn(1);
                    var r = t.cmp(i);
                    if (r < 0) {
                        var o = t;
                        t = i, i = o
                    } else if (0 === r || 0 === i.cmpn(1)) break;
                    t.isub(i)
                }
                return i.iushln(n)
            }, o.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }, o.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }, o.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }, o.prototype.andln = function(e) {
                return this.words[0] & e
            }, o.prototype.bincn = function(e) {
                n("number" == typeof e);
                var t = e % 26,
                    i = (e - t) / 26,
                    r = 1 << t;
                if (this.length <= i) return this._expand(i + 1), this.words[i] |= r, this;
                for (var o = r, a = i; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o, this.length++), this
            }, o.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }, o.prototype.cmpn = function(e) {
                var t, i = e < 0;
                if (0 !== this.negative && !i) return -1;
                if (0 === this.negative && i) return 1;
                if (this.strip(), this.length > 1) t = 1;
                else {
                    i && (e = -e), n(e <= 67108863, "Number is too big");
                    var r = 0 | this.words[0];
                    t = r === e ? 0 : r < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }, o.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative) return -1;
                if (0 === this.negative && 0 !== e.negative) return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }, o.prototype.ucmp = function(e) {
                if (this.length > e.length) return 1;
                if (this.length < e.length) return -1;
                for (var t = 0, i = this.length - 1; i >= 0; i--) {
                    var n = 0 | this.words[i],
                        r = 0 | e.words[i];
                    if (n !== r) {
                        n < r ? t = -1 : n > r && (t = 1);
                        break
                    }
                }
                return t
            }, o.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }, o.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }, o.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }, o.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }, o.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }, o.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }, o.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }, o.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }, o.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }, o.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }, o.red = function(e) {
                return new E(e)
            }, o.prototype.toRed = function(e) {
                return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
            }, o.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, o.prototype._forceRed = function(e) {
                return this.red = e, this
            }, o.prototype.forceRed = function(e) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
            }, o.prototype.redAdd = function(e) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
            }, o.prototype.redIAdd = function(e) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
            }, o.prototype.redSub = function(e) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
            }, o.prototype.redISub = function(e) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
            }, o.prototype.redShl = function(e) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
            }, o.prototype.redMul = function(e) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
            }, o.prototype.redIMul = function(e) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
            }, o.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, o.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, o.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, o.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, o.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, o.prototype.redPow = function(e) {
                return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
            };
            var _ = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function v(e, t) {
                this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }

            function w() {
                v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }

            function M() {
                v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }

            function S() {
                v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }

            function C() {
                v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }

            function E(e) {
                if ("string" == typeof e) {
                    var t = o._prime(e);
                    this.m = t.p, this.prime = t
                } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
            }

            function k(e) {
                E.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            v.prototype._tmp = function() {
                var e = new o(null);
                return e.words = new Array(Math.ceil(this.n / 13)), e
            }, v.prototype.ireduce = function(e) {
                var t, i = e;
                do {
                    this.split(i, this.tmp), t = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var n = t < this.n ? -1 : i.ucmp(this.p);
                return 0 === n ? (i.words[0] = 0, i.length = 1) : n > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
            }, v.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }, v.prototype.imulK = function(e) {
                return e.imul(this.k)
            }, r(w, v), w.prototype.split = function(e, t) {
                for (var i = Math.min(e.length, 9), n = 0; n < i; n++) t.words[n] = e.words[n];
                if (t.length = i, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                var r = e.words[9];
                for (t.words[t.length++] = 4194303 & r, n = 10; n < e.length; n++) {
                    var o = 0 | e.words[n];
                    e.words[n - 10] = (4194303 & o) << 4 | r >>> 22, r = o
                }
                r >>>= 22, e.words[n - 10] = r, 0 === r && e.length > 10 ? e.length -= 10 : e.length -= 9
            }, w.prototype.imulK = function(e) {
                e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                for (var t = 0, i = 0; i < e.length; i++) {
                    var n = 0 | e.words[i];
                    t += 977 * n, e.words[i] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
            }, r(M, v), r(S, v), r(C, v), C.prototype.imulK = function(e) {
                for (var t = 0, i = 0; i < e.length; i++) {
                    var n = 19 * (0 | e.words[i]) + t,
                        r = 67108863 & n;
                    n >>>= 26, e.words[i] = r, t = n
                }
                return 0 !== t && (e.words[e.length++] = t), e
            }, o._prime = function(e) {
                if (_[e]) return _[e];
                var t;
                if ("k256" === e) t = new w;
                else if ("p224" === e) t = new M;
                else if ("p192" === e) t = new S;
                else {
                    if ("p25519" !== e) throw new Error("Unknown prime " + e);
                    t = new C
                }
                return _[e] = t, t
            }, E.prototype._verify1 = function(e) {
                n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
            }, E.prototype._verify2 = function(e, t) {
                n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
            }, E.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }, E.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }, E.prototype.add = function(e, t) {
                this._verify2(e, t);
                var i = e.add(t);
                return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
            }, E.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var i = e.iadd(t);
                return i.cmp(this.m) >= 0 && i.isub(this.m), i
            }, E.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var i = e.sub(t);
                return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
            }, E.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var i = e.isub(t);
                return i.cmpn(0) < 0 && i.iadd(this.m), i
            }, E.prototype.shl = function(e, t) {
                return this._verify1(e), this.imod(e.ushln(t))
            }, E.prototype.imul = function(e, t) {
                return this._verify2(e, t), this.imod(e.imul(t))
            }, E.prototype.mul = function(e, t) {
                return this._verify2(e, t), this.imod(e.mul(t))
            }, E.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }, E.prototype.sqr = function(e) {
                return this.mul(e, e)
            }, E.prototype.sqrt = function(e) {
                if (e.isZero()) return e.clone();
                var t = this.m.andln(3);
                if (n(t % 2 == 1), 3 === t) {
                    var i = this.m.add(new o(1)).iushrn(2);
                    return this.pow(e, i)
                }
                for (var r = this.m.subn(1), a = 0; !r.isZero() && 0 === r.andln(1);) a++, r.iushrn(1);
                n(!r.isZero());
                var s = new o(1).toRed(this),
                    c = s.redNeg(),
                    f = this.m.subn(1).iushrn(1),
                    h = this.m.bitLength();
                for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(c);) h.redIAdd(c);
                for (var u = this.pow(h, r), d = this.pow(e, r.addn(1).iushrn(1)), l = this.pow(e, r), p = a; 0 !== l.cmp(s);) {
                    for (var g = l, b = 0; 0 !== g.cmp(s); b++) g = g.redSqr();
                    n(b < p);
                    var m = this.pow(u, new o(1).iushln(p - b - 1));
                    d = d.redMul(m), u = m.redSqr(), l = l.redMul(u), p = b
                }
                return d
            }, E.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
            }, E.prototype.pow = function(e, t) {
                if (t.isZero()) return new o(1).toRed(this);
                if (0 === t.cmpn(1)) return e.clone();
                var i = new Array(16);
                i[0] = new o(1).toRed(this), i[1] = e;
                for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], e);
                var r = i[0],
                    a = 0,
                    s = 0,
                    c = t.bitLength() % 26;
                for (0 === c && (c = 26), n = t.length - 1; n >= 0; n--) {
                    for (var f = t.words[n], h = c - 1; h >= 0; h--) {
                        var u = f >> h & 1;
                        r !== i[0] && (r = this.sqr(r)), 0 !== u || 0 !== a ? (a <<= 1, a |= u, (4 == ++s || 0 === n && 0 === h) && (r = this.mul(r, i[a]), s = 0, a = 0)) : s = 0
                    }
                    c = 26
                }
                return r
            }, E.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }, E.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null, t
            }, o.mont = function(e) {
                return new k(e)
            }, r(k, E), k.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }, k.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null, t
            }, k.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                var i = e.imul(t),
                    n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = i.isub(n).iushrn(this.shift),
                    o = r;
                return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this)
            }, k.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                var i = e.mul(t),
                    n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = i.isub(n).iushrn(this.shift),
                    a = r;
                return r.cmp(this.m) >= 0 ? a = r.isub(this.m) : r.cmpn(0) < 0 && (a = r.iadd(this.m)), a._forceRed(this)
            }, k.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        })(void 0 === t || t, this)
    }, {
        buffer: 19
    }],
    16: [function(e, t, i) {
        "use strict";
        i.byteLength = function(e) {
            var t = f(e),
                i = t[0],
                n = t[1];
            return 3 * (i + n) / 4 - n
        }, i.toByteArray = function(e) {
            var t, i, n = f(e),
                a = n[0],
                s = n[1],
                c = new o(h(0, a, s)),
                u = 0,
                d = s > 0 ? a - 4 : a;
            for (i = 0; i < d; i += 4) t = r[e.charCodeAt(i)] << 18 | r[e.charCodeAt(i + 1)] << 12 | r[e.charCodeAt(i + 2)] << 6 | r[e.charCodeAt(i + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
            return 2 === s && (t = r[e.charCodeAt(i)] << 2 | r[e.charCodeAt(i + 1)] >> 4, c[u++] = 255 & t), 1 === s && (t = r[e.charCodeAt(i)] << 10 | r[e.charCodeAt(i + 1)] << 4 | r[e.charCodeAt(i + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
        }, i.fromByteArray = function(e) {
            for (var t, i = e.length, r = i % 3, o = [], a = 0, s = i - r; a < s; a += 16383) o.push(u(e, a, a + 16383 > s ? s : a + 16383));
            return 1 === r ? (t = e[i - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === r && (t = (e[i - 2] << 8) + e[i - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), o.join("")
        };
        for (var n = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) n[s] = a[s], r[a.charCodeAt(s)] = s;

        function f(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var i = e.indexOf("=");
            return -1 === i && (i = t), [i, i === t ? 0 : 4 - i % 4]
        }

        function h(e, t, i) {
            return 3 * (t + i) / 4 - i
        }

        function u(e, t, i) {
            for (var r, o, a = [], s = t; s < i; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = r) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            return a.join("")
        }
        r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
    }, {}],
    17: [function(e, t) {
        (function(t, i) {
            "use strict";

            function n(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }

            function r(e, t) {
                e.super_ = t;
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
            }

            function o(e, t, i) {
                if (o.isBN(e)) return e;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (i = t, t = 10), this._init(e || 0, t || 10, i || "be"))
            }
            var a;
            "object" == typeof t ? t.exports = o : i.BN = o, o.BN = o, o.wordSize = 26;
            try {
                a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e("buffer").Buffer
            } catch (R) {}

            function s(e, t) {
                var i = e.charCodeAt(t);
                return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void n(!1, "Invalid character in " + e)
            }

            function c(e, t, i) {
                var n = s(e, i);
                return i - 1 >= t && (n |= s(e, i - 1) << 4), n
            }

            function f(e, t, i, r) {
                for (var o = 0, a = 0, s = Math.min(e.length, i), c = t; c < s; c++) {
                    var f = e.charCodeAt(c) - 48;
                    o *= r, a = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, n(f >= 0 && a < r, "Invalid character"), o += a
                }
                return o
            }

            function h(e, t) {
                e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red
            }
            if (o.isBN = function(e) {
                    return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                }, o.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, o.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t
                }, o.prototype._init = function(e, t, i) {
                    if ("number" == typeof e) return this._initNumber(e, t, i);
                    if ("object" == typeof e) return this._initArray(e, t, i);
                    "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                    var r = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (r++, this.negative = 1), r < e.length && (16 === t ? this._parseHex(e, r, i) : (this._parseBase(e, t, r), "le" === i && this._initArray(this.toArray(), t, i)))
                }, o.prototype._initNumber = function(e, t, i) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), t, i)
                }, o.prototype._initArray = function(e, t, i) {
                    if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var o, a, s = 0;
                    if ("be" === i)
                        for (r = e.length - 1, o = 0; r >= 0; r -= 3) a = e[r] | e[r - 1] << 8 | e[r - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === i)
                        for (r = 0, o = 0; r < e.length; r += 3) a = e[r] | e[r + 1] << 8 | e[r + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this._strip()
                }, o.prototype._parseHex = function(e, t, i) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var r, o = 0,
                        a = 0;
                    if ("be" === i)
                        for (n = e.length - 1; n >= t; n -= 2) r = c(e, t, n) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                    else
                        for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) r = c(e, t, n) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                    this._strip()
                }, o.prototype._parseBase = function(e, t, i) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, r = 1; r <= 67108863; r *= t) n++;
                    n--, r = r / t | 0;
                    for (var o = e.length - i, a = o % n, s = Math.min(o, o - a) + i, c = 0, h = i; h < s; h += n) c = f(e, h, h + n, t), this.imuln(r), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (0 !== a) {
                        var u = 1;
                        for (c = f(e, h, e.length, t), h = 0; h < a; h++) u *= t;
                        this.imuln(u), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                    }
                    this._strip()
                }, o.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, o.prototype._move = function(e) {
                    h(e, this)
                }, o.prototype.clone = function() {
                    var e = new o(null);
                    return this.copy(e), e
                }, o.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, o.prototype._strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                o.prototype[Symbol.for("nodejs.util.inspect.custom")] = u
            } catch (R) {
                o.prototype.inspect = u
            } else o.prototype.inspect = u;

            function u() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            o.prototype.toString = function(e, t) {
                var i;
                if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                    i = "";
                    for (var r = 0, o = 0, a = 0; a < this.length; a++) {
                        var s = this.words[a],
                            c = (16777215 & (s << r | o)).toString(16);
                        i = 0 != (o = s >>> 24 - r & 16777215) || a !== this.length - 1 ? d[6 - c.length] + c + i : c + i, (r += 2) >= 26 && (r -= 26, a--)
                    }
                    for (0 !== o && (i = o.toString(16) + i); i.length % t != 0;) i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i), i
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var f = l[e],
                        h = p[e];
                    i = "";
                    var u = this.clone();
                    for (u.negative = 0; !u.isZero();) {
                        var g = u.modrn(h).toString(e);
                        i = (u = u.idivn(h)).isZero() ? g + i : d[f - g.length] + g + i
                    }
                    for (this.isZero() && (i = "0" + i); i.length % t != 0;) i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i), i
                }
                n(!1, "Base should be between 2 and 36")
            }, o.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
            }, o.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, a && (o.prototype.toBuffer = function(e, t) {
                return this.toArrayLike(a, e, t)
            }), o.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            };
            var g = function(e, t) {
                return e.allocUnsafe ? e.allocUnsafe(t) : new e(t)
            };

            function b(e) {
                for (var t = new Array(e.bitLength()), i = 0; i < t.length; i++) {
                    var n = i / 26 | 0,
                        r = i % 26;
                    t[i] = e.words[n] >>> r & 1
                }
                return t
            }

            function m(e, t, i) {
                i.negative = t.negative ^ e.negative;
                var n = e.length + t.length | 0;
                i.length = n, n = n - 1 | 0;
                var r = 0 | e.words[0],
                    o = 0 | t.words[0],
                    a = r * o,
                    s = 67108863 & a,
                    c = a / 67108864 | 0;
                i.words[0] = s;
                for (var f = 1; f < n; f++) {
                    for (var h = c >>> 26, u = 67108863 & c, d = Math.min(f, t.length - 1), l = Math.max(0, f - e.length + 1); l <= d; l++) {
                        var p = f - l | 0;
                        h += (a = (r = 0 | e.words[p]) * (o = 0 | t.words[l]) + u) / 67108864 | 0, u = 67108863 & a
                    }
                    i.words[f] = 0 | u, c = 0 | h
                }
                return 0 !== c ? i.words[f] = 0 | c : i.length--, i._strip()
            }
            o.prototype.toArrayLike = function(e, t, i) {
                this._strip();
                var r = this.byteLength(),
                    o = i || Math.max(1, r);
                n(r <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                var a = g(e, o);
                return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](a, r), a
            }, o.prototype._toArrayLikeLE = function(e) {
                for (var t = 0, i = 0, n = 0, r = 0; n < this.length; n++) {
                    var o = this.words[n] << r | i;
                    e[t++] = 255 & o, t < e.length && (e[t++] = o >> 8 & 255), t < e.length && (e[t++] = o >> 16 & 255), 6 === r ? (t < e.length && (e[t++] = o >> 24 & 255), i = 0, r = 0) : (i = o >>> 24, r += 2)
                }
                if (t < e.length)
                    for (e[t++] = i; t < e.length;) e[t++] = 0
            }, o.prototype._toArrayLikeBE = function(e) {
                for (var t = e.length - 1, i = 0, n = 0, r = 0; n < this.length; n++) {
                    var o = this.words[n] << r | i;
                    e[t--] = 255 & o, t >= 0 && (e[t--] = o >> 8 & 255), t >= 0 && (e[t--] = o >> 16 & 255), 6 === r ? (t >= 0 && (e[t--] = o >> 24 & 255), i = 0, r = 0) : (i = o >>> 24, r += 2)
                }
                if (t >= 0)
                    for (e[t--] = i; t >= 0;) e[t--] = 0
            }, Math.clz32 ? o.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            } : o.prototype._countBits = function(e) {
                var t = e,
                    i = 0;
                return t >= 4096 && (i += 13, t >>>= 13), t >= 64 && (i += 7, t >>>= 7), t >= 8 && (i += 4, t >>>= 4), t >= 2 && (i += 2, t >>>= 2), i + t
            }, o.prototype._zeroBits = function(e) {
                if (0 === e) return 26;
                var t = e,
                    i = 0;
                return 0 == (8191 & t) && (i += 13, t >>>= 13), 0 == (127 & t) && (i += 7, t >>>= 7), 0 == (15 & t) && (i += 4, t >>>= 4), 0 == (3 & t) && (i += 2, t >>>= 2), 0 == (1 & t) && i++, i
            }, o.prototype.bitLength = function() {
                var e = this.words[this.length - 1],
                    t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }, o.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var i = this._zeroBits(this.words[t]);
                    if (e += i, 26 !== i) break
                }
                return e
            }, o.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, o.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }, o.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }, o.prototype.isNeg = function() {
                return 0 !== this.negative
            }, o.prototype.neg = function() {
                return this.clone().ineg()
            }, o.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, o.prototype.iuor = function(e) {
                for (; this.length < e.length;) this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                return this._strip()
            }, o.prototype.ior = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuor(e)
            }, o.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }, o.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }, o.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] & e.words[i];
                return this.length = t.length, this._strip()
            }, o.prototype.iand = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuand(e)
            }, o.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }, o.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }, o.prototype.iuxor = function(e) {
                var t, i;
                this.length > e.length ? (t = this, i = e) : (t = e, i = this);
                for (var n = 0; n < i.length; n++) this.words[n] = t.words[n] ^ i.words[n];
                if (this !== t)
                    for (; n < t.length; n++) this.words[n] = t.words[n];
                return this.length = t.length, this._strip()
            }, o.prototype.ixor = function(e) {
                return n(0 == (this.negative | e.negative)), this.iuxor(e)
            }, o.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }, o.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }, o.prototype.inotn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26),
                    i = e % 26;
                this._expand(t), i > 0 && t--;
                for (var r = 0; r < t; r++) this.words[r] = 67108863 & ~this.words[r];
                return i > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - i), this._strip()
            }, o.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }, o.prototype.setn = function(e, t) {
                n("number" == typeof e && e >= 0);
                var i = e / 26 | 0,
                    r = e % 26;
                return this._expand(i + 1), this.words[i] = t ? this.words[i] | 1 << r : this.words[i] & ~(1 << r), this._strip()
            }, o.prototype.iadd = function(e) {
                var t, i, n;
                if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                this.length > e.length ? (i = this, n = e) : (i = e, n = this);
                for (var r = 0, o = 0; o < n.length; o++) t = (0 | i.words[o]) + (0 | n.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
                for (; 0 !== r && o < i.length; o++) t = (0 | i.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26;
                if (this.length = i.length, 0 !== r) this.words[this.length] = r, this.length++;
                else if (i !== this)
                    for (; o < i.length; o++) this.words[o] = i.words[o];
                return this
            }, o.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }, o.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1, t._normSign()
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                var i, n, r = this.cmp(e);
                if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                r > 0 ? (i = this, n = e) : (i = e, n = this);
                for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | i.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                for (; 0 !== o && a < i.length; a++) o = (t = (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                if (0 === o && a < i.length && i !== this)
                    for (; a < i.length; a++) this.words[a] = i.words[a];
                return this.length = Math.max(this.length, a), i !== this && (this.negative = 1), this._strip()
            }, o.prototype.sub = function(e) {
                return this.clone().isub(e)
            };
            var y = function(e, t, i) {
                var n, r, o, a = e.words,
                    s = t.words,
                    c = i.words,
                    f = 0,
                    h = 0 | a[0],
                    u = 8191 & h,
                    d = h >>> 13,
                    l = 0 | a[1],
                    p = 8191 & l,
                    g = l >>> 13,
                    b = 0 | a[2],
                    m = 8191 & b,
                    y = b >>> 13,
                    _ = 0 | a[3],
                    v = 8191 & _,
                    w = _ >>> 13,
                    M = 0 | a[4],
                    S = 8191 & M,
                    C = M >>> 13,
                    E = 0 | a[5],
                    k = 8191 & E,
                    P = E >>> 13,
                    I = 0 | a[6],
                    N = 8191 & I,
                    R = I >>> 13,
                    B = 0 | a[7],
                    x = 8191 & B,
                    T = B >>> 13,
                    A = 0 | a[8],
                    L = 8191 & A,
                    D = A >>> 13,
                    O = 0 | a[9],
                    j = 8191 & O,
                    U = O >>> 13,
                    F = 0 | s[0],
                    z = 8191 & F,
                    q = F >>> 13,
                    G = 0 | s[1],
                    V = 8191 & G,
                    H = G >>> 13,
                    W = 0 | s[2],
                    K = 8191 & W,
                    J = W >>> 13,
                    Z = 0 | s[3],
                    Y = 8191 & Z,
                    X = Z >>> 13,
                    Q = 0 | s[4],
                    $ = 8191 & Q,
                    ee = Q >>> 13,
                    te = 0 | s[5],
                    ie = 8191 & te,
                    ne = te >>> 13,
                    re = 0 | s[6],
                    oe = 8191 & re,
                    ae = re >>> 13,
                    se = 0 | s[7],
                    ce = 8191 & se,
                    fe = se >>> 13,
                    he = 0 | s[8],
                    ue = 8191 & he,
                    de = he >>> 13,
                    le = 0 | s[9],
                    pe = 8191 & le,
                    ge = le >>> 13;
                i.negative = e.negative ^ t.negative, i.length = 19;
                var be = (f + (n = Math.imul(u, z)) | 0) + ((8191 & (r = (r = Math.imul(u, q)) + Math.imul(d, z) | 0)) << 13) | 0;
                f = ((o = Math.imul(d, q)) + (r >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(p, z), r = (r = Math.imul(p, q)) + Math.imul(g, z) | 0, o = Math.imul(g, q);
                var me = (f + (n = n + Math.imul(u, V) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, H) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, H) | 0) + (r >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(m, z), r = (r = Math.imul(m, q)) + Math.imul(y, z) | 0, o = Math.imul(y, q), n = n + Math.imul(p, V) | 0, r = (r = r + Math.imul(p, H) | 0) + Math.imul(g, V) | 0, o = o + Math.imul(g, H) | 0;
                var ye = (f + (n = n + Math.imul(u, K) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, J) | 0) + Math.imul(d, K) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, J) | 0) + (r >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(v, z), r = (r = Math.imul(v, q)) + Math.imul(w, z) | 0, o = Math.imul(w, q), n = n + Math.imul(m, V) | 0, r = (r = r + Math.imul(m, H) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, H) | 0, n = n + Math.imul(p, K) | 0, r = (r = r + Math.imul(p, J) | 0) + Math.imul(g, K) | 0, o = o + Math.imul(g, J) | 0;
                var _e = (f + (n = n + Math.imul(u, Y) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, X) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, X) | 0) + (r >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(S, z), r = (r = Math.imul(S, q)) + Math.imul(C, z) | 0, o = Math.imul(C, q), n = n + Math.imul(v, V) | 0, r = (r = r + Math.imul(v, H) | 0) + Math.imul(w, V) | 0, o = o + Math.imul(w, H) | 0, n = n + Math.imul(m, K) | 0, r = (r = r + Math.imul(m, J) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, Y) | 0, r = (r = r + Math.imul(p, X) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, X) | 0;
                var ve = (f + (n = n + Math.imul(u, $) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ee) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ee) | 0) + (r >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(k, z), r = (r = Math.imul(k, q)) + Math.imul(P, z) | 0, o = Math.imul(P, q), n = n + Math.imul(S, V) | 0, r = (r = r + Math.imul(S, H) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, H) | 0, n = n + Math.imul(v, K) | 0, r = (r = r + Math.imul(v, J) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, J) | 0, n = n + Math.imul(m, Y) | 0, r = (r = r + Math.imul(m, X) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, $) | 0, r = (r = r + Math.imul(p, ee) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, ee) | 0;
                var we = (f + (n = n + Math.imul(u, ie) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ne) | 0) + Math.imul(d, ie) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ne) | 0) + (r >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(N, z), r = (r = Math.imul(N, q)) + Math.imul(R, z) | 0, o = Math.imul(R, q), n = n + Math.imul(k, V) | 0, r = (r = r + Math.imul(k, H) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, H) | 0, n = n + Math.imul(S, K) | 0, r = (r = r + Math.imul(S, J) | 0) + Math.imul(C, K) | 0, o = o + Math.imul(C, J) | 0, n = n + Math.imul(v, Y) | 0, r = (r = r + Math.imul(v, X) | 0) + Math.imul(w, Y) | 0, o = o + Math.imul(w, X) | 0, n = n + Math.imul(m, $) | 0, r = (r = r + Math.imul(m, ee) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, ie) | 0, r = (r = r + Math.imul(p, ne) | 0) + Math.imul(g, ie) | 0, o = o + Math.imul(g, ne) | 0;
                var Me = (f + (n = n + Math.imul(u, oe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ae) | 0) + Math.imul(d, oe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ae) | 0) + (r >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(x, z), r = (r = Math.imul(x, q)) + Math.imul(T, z) | 0, o = Math.imul(T, q), n = n + Math.imul(N, V) | 0, r = (r = r + Math.imul(N, H) | 0) + Math.imul(R, V) | 0, o = o + Math.imul(R, H) | 0, n = n + Math.imul(k, K) | 0, r = (r = r + Math.imul(k, J) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, J) | 0, n = n + Math.imul(S, Y) | 0, r = (r = r + Math.imul(S, X) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, X) | 0, n = n + Math.imul(v, $) | 0, r = (r = r + Math.imul(v, ee) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(m, ie) | 0, r = (r = r + Math.imul(m, ne) | 0) + Math.imul(y, ie) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, r = (r = r + Math.imul(p, ae) | 0) + Math.imul(g, oe) | 0, o = o + Math.imul(g, ae) | 0;
                var Se = (f + (n = n + Math.imul(u, ce) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, fe) | 0) + Math.imul(d, ce) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, fe) | 0) + (r >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(L, z), r = (r = Math.imul(L, q)) + Math.imul(D, z) | 0, o = Math.imul(D, q), n = n + Math.imul(x, V) | 0, r = (r = r + Math.imul(x, H) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, H) | 0, n = n + Math.imul(N, K) | 0, r = (r = r + Math.imul(N, J) | 0) + Math.imul(R, K) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(k, Y) | 0, r = (r = r + Math.imul(k, X) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, X) | 0, n = n + Math.imul(S, $) | 0, r = (r = r + Math.imul(S, ee) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(v, ie) | 0, r = (r = r + Math.imul(v, ne) | 0) + Math.imul(w, ie) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(m, oe) | 0, r = (r = r + Math.imul(m, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ce) | 0, r = (r = r + Math.imul(p, fe) | 0) + Math.imul(g, ce) | 0, o = o + Math.imul(g, fe) | 0;
                var Ce = (f + (n = n + Math.imul(u, ue) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, de) | 0) + Math.imul(d, ue) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, de) | 0) + (r >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(j, z), r = (r = Math.imul(j, q)) + Math.imul(U, z) | 0, o = Math.imul(U, q), n = n + Math.imul(L, V) | 0, r = (r = r + Math.imul(L, H) | 0) + Math.imul(D, V) | 0, o = o + Math.imul(D, H) | 0, n = n + Math.imul(x, K) | 0, r = (r = r + Math.imul(x, J) | 0) + Math.imul(T, K) | 0, o = o + Math.imul(T, J) | 0, n = n + Math.imul(N, Y) | 0, r = (r = r + Math.imul(N, X) | 0) + Math.imul(R, Y) | 0, o = o + Math.imul(R, X) | 0, n = n + Math.imul(k, $) | 0, r = (r = r + Math.imul(k, ee) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, ee) | 0, n = n + Math.imul(S, ie) | 0, r = (r = r + Math.imul(S, ne) | 0) + Math.imul(C, ie) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(v, oe) | 0, r = (r = r + Math.imul(v, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(m, ce) | 0, r = (r = r + Math.imul(m, fe) | 0) + Math.imul(y, ce) | 0, o = o + Math.imul(y, fe) | 0, n = n + Math.imul(p, ue) | 0, r = (r = r + Math.imul(p, de) | 0) + Math.imul(g, ue) | 0, o = o + Math.imul(g, de) | 0;
                var Ee = (f + (n = n + Math.imul(u, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(u, ge) | 0) + Math.imul(d, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ge) | 0) + (r >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(j, V), r = (r = Math.imul(j, H)) + Math.imul(U, V) | 0, o = Math.imul(U, H), n = n + Math.imul(L, K) | 0, r = (r = r + Math.imul(L, J) | 0) + Math.imul(D, K) | 0, o = o + Math.imul(D, J) | 0, n = n + Math.imul(x, Y) | 0, r = (r = r + Math.imul(x, X) | 0) + Math.imul(T, Y) | 0, o = o + Math.imul(T, X) | 0, n = n + Math.imul(N, $) | 0, r = (r = r + Math.imul(N, ee) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(k, ie) | 0, r = (r = r + Math.imul(k, ne) | 0) + Math.imul(P, ie) | 0, o = o + Math.imul(P, ne) | 0, n = n + Math.imul(S, oe) | 0, r = (r = r + Math.imul(S, ae) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, ae) | 0, n = n + Math.imul(v, ce) | 0, r = (r = r + Math.imul(v, fe) | 0) + Math.imul(w, ce) | 0, o = o + Math.imul(w, fe) | 0, n = n + Math.imul(m, ue) | 0, r = (r = r + Math.imul(m, de) | 0) + Math.imul(y, ue) | 0, o = o + Math.imul(y, de) | 0;
                var ke = (f + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(p, ge) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(g, ge) | 0) + (r >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(j, K), r = (r = Math.imul(j, J)) + Math.imul(U, K) | 0, o = Math.imul(U, J), n = n + Math.imul(L, Y) | 0, r = (r = r + Math.imul(L, X) | 0) + Math.imul(D, Y) | 0, o = o + Math.imul(D, X) | 0, n = n + Math.imul(x, $) | 0, r = (r = r + Math.imul(x, ee) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(N, ie) | 0, r = (r = r + Math.imul(N, ne) | 0) + Math.imul(R, ie) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(k, oe) | 0, r = (r = r + Math.imul(k, ae) | 0) + Math.imul(P, oe) | 0, o = o + Math.imul(P, ae) | 0, n = n + Math.imul(S, ce) | 0, r = (r = r + Math.imul(S, fe) | 0) + Math.imul(C, ce) | 0, o = o + Math.imul(C, fe) | 0, n = n + Math.imul(v, ue) | 0, r = (r = r + Math.imul(v, de) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, de) | 0;
                var Pe = (f + (n = n + Math.imul(m, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(m, ge) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(y, ge) | 0) + (r >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(j, Y), r = (r = Math.imul(j, X)) + Math.imul(U, Y) | 0, o = Math.imul(U, X), n = n + Math.imul(L, $) | 0, r = (r = r + Math.imul(L, ee) | 0) + Math.imul(D, $) | 0, o = o + Math.imul(D, ee) | 0, n = n + Math.imul(x, ie) | 0, r = (r = r + Math.imul(x, ne) | 0) + Math.imul(T, ie) | 0, o = o + Math.imul(T, ne) | 0, n = n + Math.imul(N, oe) | 0, r = (r = r + Math.imul(N, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(k, ce) | 0, r = (r = r + Math.imul(k, fe) | 0) + Math.imul(P, ce) | 0, o = o + Math.imul(P, fe) | 0, n = n + Math.imul(S, ue) | 0, r = (r = r + Math.imul(S, de) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, de) | 0;
                var Ie = (f + (n = n + Math.imul(v, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(v, ge) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(w, ge) | 0) + (r >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(j, $), r = (r = Math.imul(j, ee)) + Math.imul(U, $) | 0, o = Math.imul(U, ee), n = n + Math.imul(L, ie) | 0, r = (r = r + Math.imul(L, ne) | 0) + Math.imul(D, ie) | 0, o = o + Math.imul(D, ne) | 0, n = n + Math.imul(x, oe) | 0, r = (r = r + Math.imul(x, ae) | 0) + Math.imul(T, oe) | 0, o = o + Math.imul(T, ae) | 0, n = n + Math.imul(N, ce) | 0, r = (r = r + Math.imul(N, fe) | 0) + Math.imul(R, ce) | 0, o = o + Math.imul(R, fe) | 0, n = n + Math.imul(k, ue) | 0, r = (r = r + Math.imul(k, de) | 0) + Math.imul(P, ue) | 0, o = o + Math.imul(P, de) | 0;
                var Ne = (f + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(S, ge) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(C, ge) | 0) + (r >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(j, ie), r = (r = Math.imul(j, ne)) + Math.imul(U, ie) | 0, o = Math.imul(U, ne), n = n + Math.imul(L, oe) | 0, r = (r = r + Math.imul(L, ae) | 0) + Math.imul(D, oe) | 0, o = o + Math.imul(D, ae) | 0, n = n + Math.imul(x, ce) | 0, r = (r = r + Math.imul(x, fe) | 0) + Math.imul(T, ce) | 0, o = o + Math.imul(T, fe) | 0, n = n + Math.imul(N, ue) | 0, r = (r = r + Math.imul(N, de) | 0) + Math.imul(R, ue) | 0, o = o + Math.imul(R, de) | 0;
                var Re = (f + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(k, ge) | 0) + Math.imul(P, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(P, ge) | 0) + (r >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(j, oe), r = (r = Math.imul(j, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(L, ce) | 0, r = (r = r + Math.imul(L, fe) | 0) + Math.imul(D, ce) | 0, o = o + Math.imul(D, fe) | 0, n = n + Math.imul(x, ue) | 0, r = (r = r + Math.imul(x, de) | 0) + Math.imul(T, ue) | 0, o = o + Math.imul(T, de) | 0;
                var Be = (f + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(N, ge) | 0) + Math.imul(R, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(R, ge) | 0) + (r >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(j, ce), r = (r = Math.imul(j, fe)) + Math.imul(U, ce) | 0, o = Math.imul(U, fe), n = n + Math.imul(L, ue) | 0, r = (r = r + Math.imul(L, de) | 0) + Math.imul(D, ue) | 0, o = o + Math.imul(D, de) | 0;
                var xe = (f + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(x, ge) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(T, ge) | 0) + (r >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(j, ue), r = (r = Math.imul(j, de)) + Math.imul(U, ue) | 0, o = Math.imul(U, de);
                var Te = (f + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(L, ge) | 0) + Math.imul(D, pe) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(D, ge) | 0) + (r >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863;
                var Ae = (f + (n = Math.imul(j, pe)) | 0) + ((8191 & (r = (r = Math.imul(j, ge)) + Math.imul(U, pe) | 0)) << 13) | 0;
                return f = ((o = Math.imul(U, ge)) + (r >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, c[0] = be, c[1] = me, c[2] = ye, c[3] = _e, c[4] = ve, c[5] = we, c[6] = Me, c[7] = Se, c[8] = Ce, c[9] = Ee, c[10] = ke, c[11] = Pe, c[12] = Ie, c[13] = Ne, c[14] = Re, c[15] = Be, c[16] = xe, c[17] = Te, c[18] = Ae, 0 !== f && (c[19] = f, i.length++), i
            };

            function _(e, t, i) {
                i.negative = t.negative ^ e.negative, i.length = e.length + t.length;
                for (var n = 0, r = 0, o = 0; o < i.length - 1; o++) {
                    var a = r;
                    r = 0;
                    for (var s = 67108863 & n, c = Math.min(o, t.length - 1), f = Math.max(0, o - e.length + 1); f <= c; f++) {
                        var h = o - f,
                            u = (0 | e.words[h]) * (0 | t.words[f]),
                            d = 67108863 & u;
                        s = 67108863 & (d = d + s | 0), r += (a = (a = a + (u / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863
                    }
                    i.words[o] = s, n = a, a = r
                }
                return 0 !== n ? i.words[o] = n : i.length--, i._strip()
            }

            function v(e, t, i) {
                return _(e, t, i)
            }

            function w(e, t) {
                this.x = e, this.y = t
            }
            Math.imul || (y = m), o.prototype.mulTo = function(e, t) {
                var i = this.length + e.length;
                return 10 === this.length && 10 === e.length ? y(this, e, t) : i < 63 ? m(this, e, t) : i < 1024 ? _(this, e, t) : v(this, e, t)
            }, w.prototype.makeRBT = function(e) {
                for (var t = new Array(e), i = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, i, e);
                return t
            }, w.prototype.revBin = function(e, t, i) {
                if (0 === e || e === i - 1) return e;
                for (var n = 0, r = 0; r < t; r++) n |= (1 & e) << t - r - 1, e >>= 1;
                return n
            }, w.prototype.permute = function(e, t, i, n, r, o) {
                for (var a = 0; a < o; a++) n[a] = t[e[a]], r[a] = i[e[a]]
            }, w.prototype.transform = function(e, t, i, n, r, o) {
                this.permute(o, e, t, i, n, r);
                for (var a = 1; a < r; a <<= 1)
                    for (var s = a << 1, c = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < r; h += s)
                        for (var u = c, d = f, l = 0; l < a; l++) {
                            var p = i[h + l],
                                g = n[h + l],
                                b = i[h + l + a],
                                m = n[h + l + a],
                                y = u * b - d * m;
                            m = u * m + d * b, b = y, i[h + l] = p + b, n[h + l] = g + m, i[h + l + a] = p - b, n[h + l + a] = g - m, l !== s && (y = c * u - f * d, d = c * d + f * u, u = y)
                        }
            }, w.prototype.guessLen13b = function(e, t) {
                var i = 1 | Math.max(t, e),
                    n = 1 & i,
                    r = 0;
                for (i = i / 2 | 0; i; i >>>= 1) r++;
                return 1 << r + 1 + n
            }, w.prototype.conjugate = function(e, t, i) {
                if (!(i <= 1))
                    for (var n = 0; n < i / 2; n++) {
                        var r = e[n];
                        e[n] = e[i - n - 1], e[i - n - 1] = r, r = t[n], t[n] = -t[i - n - 1], t[i - n - 1] = -r
                    }
            }, w.prototype.normalize13b = function(e, t) {
                for (var i = 0, n = 0; n < t / 2; n++) {
                    var r = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + i;
                    e[n] = 67108863 & r, i = r < 67108864 ? 0 : r / 67108864 | 0
                }
                return e
            }, w.prototype.convert13b = function(e, t, i, r) {
                for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], i[2 * a] = 8191 & o, o >>>= 13, i[2 * a + 1] = 8191 & o, o >>>= 13;
                for (a = 2 * t; a < r; ++a) i[a] = 0;
                n(0 === o), n(0 == (-8192 & o))
            }, w.prototype.stub = function(e) {
                for (var t = new Array(e), i = 0; i < e; i++) t[i] = 0;
                return t
            }, w.prototype.mulp = function(e, t, i) {
                var n = 2 * this.guessLen13b(e.length, t.length),
                    r = this.makeRBT(n),
                    o = this.stub(n),
                    a = new Array(n),
                    s = new Array(n),
                    c = new Array(n),
                    f = new Array(n),
                    h = new Array(n),
                    u = new Array(n),
                    d = i.words;
                d.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, f, n), this.transform(a, o, s, c, n, r), this.transform(f, o, h, u, n, r);
                for (var l = 0; l < n; l++) {
                    var p = s[l] * h[l] - c[l] * u[l];
                    c[l] = s[l] * u[l] + c[l] * h[l], s[l] = p
                }
                return this.conjugate(s, c, n), this.transform(s, c, d, o, n, r), this.conjugate(d, o, n), this.normalize13b(d, n), i.negative = e.negative ^ t.negative, i.length = e.length + t.length, i._strip()
            }, o.prototype.mul = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length), this.mulTo(e, t)
            }, o.prototype.mulf = function(e) {
                var t = new o(null);
                return t.words = new Array(this.length + e.length), v(this, e, t)
            }, o.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }, o.prototype.imuln = function(e) {
                var t = e < 0;
                t && (e = -e), n("number" == typeof e), n(e < 67108864);
                for (var i = 0, r = 0; r < this.length; r++) {
                    var o = (0 | this.words[r]) * e,
                        a = (67108863 & o) + (67108863 & i);
                    i >>= 26, i += o / 67108864 | 0, i += a >>> 26, this.words[r] = 67108863 & a
                }
                return 0 !== i && (this.words[r] = i, this.length++), t ? this.ineg() : this
            }, o.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }, o.prototype.sqr = function() {
                return this.mul(this)
            }, o.prototype.isqr = function() {
                return this.imul(this.clone())
            }, o.prototype.pow = function(e) {
                var t = b(e);
                if (0 === t.length) return new o(1);
                for (var i = this, n = 0; n < t.length && 0 === t[n]; n++, i = i.sqr());
                if (++n < t.length)
                    for (var r = i.sqr(); n < t.length; n++, r = r.sqr()) 0 !== t[n] && (i = i.mul(r));
                return i
            }, o.prototype.iushln = function(e) {
                n("number" == typeof e && e >= 0);
                var t, i = e % 26,
                    r = (e - i) / 26,
                    o = 67108863 >>> 26 - i << 26 - i;
                if (0 !== i) {
                    var a = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & o,
                            c = (0 | this.words[t]) - s << i;
                        this.words[t] = c | a, a = s >>> 26 - i
                    }
                    a && (this.words[t] = a, this.length++)
                }
                if (0 !== r) {
                    for (t = this.length - 1; t >= 0; t--) this.words[t + r] = this.words[t];
                    for (t = 0; t < r; t++) this.words[t] = 0;
                    this.length += r
                }
                return this._strip()
            }, o.prototype.ishln = function(e) {
                return n(0 === this.negative), this.iushln(e)
            }, o.prototype.iushrn = function(e, t, i) {
                var r;
                n("number" == typeof e && e >= 0), r = t ? (t - t % 26) / 26 : 0;
                var o = e % 26,
                    a = Math.min((e - o) / 26, this.length),
                    s = 67108863 ^ 67108863 >>> o << o,
                    c = i;
                if (r -= a, r = Math.max(0, r), c) {
                    for (var f = 0; f < a; f++) c.words[f] = this.words[f];
                    c.length = a
                }
                if (0 === a);
                else if (this.length > a)
                    for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                else this.words[0] = 0, this.length = 1;
                var h = 0;
                for (f = this.length - 1; f >= 0 && (0 !== h || f >= r); f--) {
                    var u = 0 | this.words[f];
                    this.words[f] = h << 26 - o | u >>> o, h = u & s
                }
                return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
            }, o.prototype.ishrn = function(e, t, i) {
                return n(0 === this.negative), this.iushrn(e, t, i)
            }, o.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }, o.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }, o.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }, o.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }, o.prototype.testn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                    i = (e - t) / 26,
                    r = 1 << t;
                return !(this.length <= i || !(this.words[i] & r))
            }, o.prototype.imaskn = function(e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                    i = (e - t) / 26;
                if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                if (0 !== t && i++, this.length = Math.min(i, this.length), 0 !== t) {
                    var r = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= r
                }
                return this._strip()
            }, o.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }, o.prototype.iaddn = function(e) {
                return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
            }, o.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1), this
            }, o.prototype.isubn = function(e) {
                if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                return this._strip()
            }, o.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }, o.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }, o.prototype.iabs = function() {
                return this.negative = 0, this
            }, o.prototype.abs = function() {
                return this.clone().iabs()
            }, o.prototype._ishlnsubmul = function(e, t, i) {
                var r, o, a = e.length + i;
                this._expand(a);
                var s = 0;
                for (r = 0; r < e.length; r++) {
                    o = (0 | this.words[r + i]) + s;
                    var c = (0 | e.words[r]) * t;
                    s = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[r + i] = 67108863 & o
                }
                for (; r < this.length - i; r++) s = (o = (0 | this.words[r + i]) + s) >> 26, this.words[r + i] = 67108863 & o;
                if (0 === s) return this._strip();
                for (n(-1 === s), s = 0, r = 0; r < this.length; r++) s = (o = -(0 | this.words[r]) + s) >> 26, this.words[r] = 67108863 & o;
                return this.negative = 1, this._strip()
            }, o.prototype._wordDiv = function(e, t) {
                var i = (this.length, e.length),
                    n = this.clone(),
                    r = e,
                    a = 0 | r.words[r.length - 1];
                0 != (i = 26 - this._countBits(a)) && (r = r.ushln(i), n.iushln(i), a = 0 | r.words[r.length - 1]);
                var s, c = n.length - r.length;
                if ("mod" !== t) {
                    (s = new o(null)).length = c + 1, s.words = new Array(s.length);
                    for (var f = 0; f < s.length; f++) s.words[f] = 0
                }
                var h = n.clone()._ishlnsubmul(r, 1, c);
                0 === h.negative && (n = h, s && (s.words[c] = 1));
                for (var u = c - 1; u >= 0; u--) {
                    var d = 67108864 * (0 | n.words[r.length + u]) + (0 | n.words[r.length + u - 1]);
                    for (d = Math.min(d / a | 0, 67108863), n._ishlnsubmul(r, d, u); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(r, 1, u), n.isZero() || (n.negative ^= 1);
                    s && (s.words[u] = d)
                }
                return s && s._strip(), n._strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                    div: s || null,
                    mod: n
                }
            }, o.prototype.divmod = function(e, t, i) {
                return n(!e.isZero()), this.isZero() ? {
                    div: new o(0),
                    mod: new o(0)
                } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (r = s.div.neg()), "div" !== t && (a = s.mod.neg(), i && 0 !== a.negative && a.iadd(e)), {
                    div: r,
                    mod: a
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (r = s.div.neg()), {
                    div: r,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), i && 0 !== a.negative && a.isub(e)), {
                    div: s.div,
                    mod: a
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new o(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new o(this.modrn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new o(this.modrn(e.words[0]))
                } : this._wordDiv(e, t);
                var r, a, s
            }, o.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }, o.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }, o.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }, o.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero()) return t.div;
                var i = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                    n = e.ushrn(1),
                    r = e.andln(1),
                    o = i.cmp(n);
                return o < 0 || 1 === r && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }, o.prototype.modrn = function(e) {
                var t = e < 0;
                t && (e = -e), n(e <= 67108863);
                for (var i = (1 << 26) % e, r = 0, o = this.length - 1; o >= 0; o--) r = (i * r + (0 | this.words[o])) % e;
                return t ? -r : r
            }, o.prototype.modn = function(e) {
                return this.modrn(e)
            }, o.prototype.idivn = function(e) {
                var t = e < 0;
                t && (e = -e), n(e <= 67108863);
                for (var i = 0, r = this.length - 1; r >= 0; r--) {
                    var o = (0 | this.words[r]) + 67108864 * i;
                    this.words[r] = o / e | 0, i = o % e
                }
                return this._strip(), t ? this.ineg() : this
            }, o.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }, o.prototype.egcd = function(e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                    i = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r = new o(1), a = new o(0), s = new o(0), c = new o(1), f = 0; t.isEven() && i.isEven();) t.iushrn(1), i.iushrn(1), ++f;
                for (var h = i.clone(), u = t.clone(); !t.isZero();) {
                    for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1);
                    if (d > 0)
                        for (t.iushrn(d); d-- > 0;)(r.isOdd() || a.isOdd()) && (r.iadd(h), a.isub(u)), r.iushrn(1), a.iushrn(1);
                    for (var p = 0, g = 1; 0 == (i.words[0] & g) && p < 26; ++p, g <<= 1);
                    if (p > 0)
                        for (i.iushrn(p); p-- > 0;)(s.isOdd() || c.isOdd()) && (s.iadd(h), c.isub(u)), s.iushrn(1), c.iushrn(1);
                    t.cmp(i) >= 0 ? (t.isub(i), r.isub(s), a.isub(c)) : (i.isub(t), s.isub(r), c.isub(a))
                }
                return {
                    a: s,
                    b: c,
                    gcd: i.iushln(f)
                }
            }, o.prototype._invmp = function(e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                    i = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var r, a = new o(1), s = new o(0), c = i.clone(); t.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                    for (var f = 0, h = 1; 0 == (t.words[0] & h) && f < 26; ++f, h <<= 1);
                    if (f > 0)
                        for (t.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                    for (var u = 0, d = 1; 0 == (i.words[0] & d) && u < 26; ++u, d <<= 1);
                    if (u > 0)
                        for (i.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                    t.cmp(i) >= 0 ? (t.isub(i), a.isub(s)) : (i.isub(t), s.isub(a))
                }
                return (r = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && r.iadd(e), r
            }, o.prototype.gcd = function(e) {
                if (this.isZero()) return e.abs();
                if (e.isZero()) return this.abs();
                var t = this.clone(),
                    i = e.clone();
                t.negative = 0, i.negative = 0;
                for (var n = 0; t.isEven() && i.isEven(); n++) t.iushrn(1), i.iushrn(1);
                for (;;) {
                    for (; t.isEven();) t.iushrn(1);
                    for (; i.isEven();) i.iushrn(1);
                    var r = t.cmp(i);
                    if (r < 0) {
                        var o = t;
                        t = i, i = o
                    } else if (0 === r || 0 === i.cmpn(1)) break;
                    t.isub(i)
                }
                return i.iushln(n)
            }, o.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }, o.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }, o.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }, o.prototype.andln = function(e) {
                return this.words[0] & e
            }, o.prototype.bincn = function(e) {
                n("number" == typeof e);
                var t = e % 26,
                    i = (e - t) / 26,
                    r = 1 << t;
                if (this.length <= i) return this._expand(i + 1), this.words[i] |= r, this;
                for (var o = r, a = i; 0 !== o && a < this.length; a++) {
                    var s = 0 | this.words[a];
                    o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                }
                return 0 !== o && (this.words[a] = o, this.length++), this
            }, o.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }, o.prototype.cmpn = function(e) {
                var t, i = e < 0;
                if (0 !== this.negative && !i) return -1;
                if (0 === this.negative && i) return 1;
                if (this._strip(), this.length > 1) t = 1;
                else {
                    i && (e = -e), n(e <= 67108863, "Number is too big");
                    var r = 0 | this.words[0];
                    t = r === e ? 0 : r < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }, o.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative) return -1;
                if (0 === this.negative && 0 !== e.negative) return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }, o.prototype.ucmp = function(e) {
                if (this.length > e.length) return 1;
                if (this.length < e.length) return -1;
                for (var t = 0, i = this.length - 1; i >= 0; i--) {
                    var n = 0 | this.words[i],
                        r = 0 | e.words[i];
                    if (n !== r) {
                        n < r ? t = -1 : n > r && (t = 1);
                        break
                    }
                }
                return t
            }, o.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }, o.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }, o.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }, o.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }, o.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }, o.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }, o.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }, o.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }, o.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }, o.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }, o.red = function(e) {
                return new I(e)
            }, o.prototype.toRed = function(e) {
                return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
            }, o.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, o.prototype._forceRed = function(e) {
                return this.red = e, this
            }, o.prototype.forceRed = function(e) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
            }, o.prototype.redAdd = function(e) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
            }, o.prototype.redIAdd = function(e) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
            }, o.prototype.redSub = function(e) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
            }, o.prototype.redISub = function(e) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
            }, o.prototype.redShl = function(e) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
            }, o.prototype.redMul = function(e) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
            }, o.prototype.redIMul = function(e) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
            }, o.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, o.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, o.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, o.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, o.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, o.prototype.redPow = function(e) {
                return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
            };
            var M = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function S(e, t) {
                this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }

            function C() {
                S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }

            function E() {
                S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }

            function k() {
                S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }

            function P() {
                S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }

            function I(e) {
                if ("string" == typeof e) {
                    var t = o._prime(e);
                    this.m = t.p, this.prime = t
                } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
            }

            function N(e) {
                I.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            S.prototype._tmp = function() {
                var e = new o(null);
                return e.words = new Array(Math.ceil(this.n / 13)), e
            }, S.prototype.ireduce = function(e) {
                var t, i = e;
                do {
                    this.split(i, this.tmp), t = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var n = t < this.n ? -1 : i.ucmp(this.p);
                return 0 === n ? (i.words[0] = 0, i.length = 1) : n > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
            }, S.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }, S.prototype.imulK = function(e) {
                return e.imul(this.k)
            }, r(C, S), C.prototype.split = function(e, t) {
                for (var i = Math.min(e.length, 9), n = 0; n < i; n++) t.words[n] = e.words[n];
                if (t.length = i, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                var r = e.words[9];
                for (t.words[t.length++] = 4194303 & r, n = 10; n < e.length; n++) {
                    var o = 0 | e.words[n];
                    e.words[n - 10] = (4194303 & o) << 4 | r >>> 22, r = o
                }
                r >>>= 22, e.words[n - 10] = r, 0 === r && e.length > 10 ? e.length -= 10 : e.length -= 9
            }, C.prototype.imulK = function(e) {
                e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                for (var t = 0, i = 0; i < e.length; i++) {
                    var n = 0 | e.words[i];
                    t += 977 * n, e.words[i] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
            }, r(E, S), r(k, S), r(P, S), P.prototype.imulK = function(e) {
                for (var t = 0, i = 0; i < e.length; i++) {
                    var n = 19 * (0 | e.words[i]) + t,
                        r = 67108863 & n;
                    n >>>= 26, e.words[i] = r, t = n
                }
                return 0 !== t && (e.words[e.length++] = t), e
            }, o._prime = function(e) {
                if (M[e]) return M[e];
                var t;
                if ("k256" === e) t = new C;
                else if ("p224" === e) t = new E;
                else if ("p192" === e) t = new k;
                else {
                    if ("p25519" !== e) throw new Error("Unknown prime " + e);
                    t = new P
                }
                return M[e] = t, t
            }, I.prototype._verify1 = function(e) {
                n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
            }, I.prototype._verify2 = function(e, t) {
                n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
            }, I.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : (h(e, e.umod(this.m)._forceRed(this)), e)
            }, I.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }, I.prototype.add = function(e, t) {
                this._verify2(e, t);
                var i = e.add(t);
                return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
            }, I.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var i = e.iadd(t);
                return i.cmp(this.m) >= 0 && i.isub(this.m), i
            }, I.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var i = e.sub(t);
                return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
            }, I.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var i = e.isub(t);
                return i.cmpn(0) < 0 && i.iadd(this.m), i
            }, I.prototype.shl = function(e, t) {
                return this._verify1(e), this.imod(e.ushln(t))
            }, I.prototype.imul = function(e, t) {
                return this._verify2(e, t), this.imod(e.imul(t))
            }, I.prototype.mul = function(e, t) {
                return this._verify2(e, t), this.imod(e.mul(t))
            }, I.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }, I.prototype.sqr = function(e) {
                return this.mul(e, e)
            }, I.prototype.sqrt = function(e) {
                if (e.isZero()) return e.clone();
                var t = this.m.andln(3);
                if (n(t % 2 == 1), 3 === t) {
                    var i = this.m.add(new o(1)).iushrn(2);
                    return this.pow(e, i)
                }
                for (var r = this.m.subn(1), a = 0; !r.isZero() && 0 === r.andln(1);) a++, r.iushrn(1);
                n(!r.isZero());
                var s = new o(1).toRed(this),
                    c = s.redNeg(),
                    f = this.m.subn(1).iushrn(1),
                    h = this.m.bitLength();
                for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(c);) h.redIAdd(c);
                for (var u = this.pow(h, r), d = this.pow(e, r.addn(1).iushrn(1)), l = this.pow(e, r), p = a; 0 !== l.cmp(s);) {
                    for (var g = l, b = 0; 0 !== g.cmp(s); b++) g = g.redSqr();
                    n(b < p);
                    var m = this.pow(u, new o(1).iushln(p - b - 1));
                    d = d.redMul(m), u = m.redSqr(), l = l.redMul(u), p = b
                }
                return d
            }, I.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
            }, I.prototype.pow = function(e, t) {
                if (t.isZero()) return new o(1).toRed(this);
                if (0 === t.cmpn(1)) return e.clone();
                var i = new Array(16);
                i[0] = new o(1).toRed(this), i[1] = e;
                for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], e);
                var r = i[0],
                    a = 0,
                    s = 0,
                    c = t.bitLength() % 26;
                for (0 === c && (c = 26), n = t.length - 1; n >= 0; n--) {
                    for (var f = t.words[n], h = c - 1; h >= 0; h--) {
                        var u = f >> h & 1;
                        r !== i[0] && (r = this.sqr(r)), 0 !== u || 0 !== a ? (a <<= 1, a |= u, (4 == ++s || 0 === n && 0 === h) && (r = this.mul(r, i[a]), s = 0, a = 0)) : s = 0
                    }
                    c = 26
                }
                return r
            }, I.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }, I.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null, t
            }, o.mont = function(e) {
                return new N(e)
            }, r(N, I), N.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }, N.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null, t
            }, N.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                var i = e.imul(t),
                    n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = i.isub(n).iushrn(this.shift),
                    o = r;
                return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this)
            }, N.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                var i = e.mul(t),
                    n = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = i.isub(n).iushrn(this.shift),
                    a = r;
                return r.cmp(this.m) >= 0 ? a = r.isub(this.m) : r.cmpn(0) < 0 && (a = r.iadd(this.m)), a._forceRed(this)
            }, N.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        })(void 0 === t || t, this)
    }, {
        buffer: 19
    }],
    18: [function(e, t) {
        var i;

        function n(e) {
            this.rand = e
        }
        if (t.exports = function(e) {
                return i || (i = new n(null)), i.generate(e)
            }, t.exports.Rand = n, n.prototype.generate = function(e) {
                return this._rand(e)
            }, n.prototype._rand = function(e) {
                if (this.rand.getBytes) return this.rand.getBytes(e);
                for (var t = new Uint8Array(e), i = 0; i < t.length; i++) t[i] = this.rand.getByte();
                return t
            }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? n.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t), t
        } : self.msCrypto && self.msCrypto.getRandomValues ? n.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t), t
        } : "object" == typeof window && (n.prototype._rand = function() {
            throw new Error("Not implemented yet")
        });
        else try {
            var r = e("crypto");
            if ("function" != typeof r.randomBytes) throw new Error("Not supported");
            n.prototype._rand = function(e) {
                return r.randomBytes(e)
            }
        } catch (o) {}
    }, {
        crypto: 19
    }],
    19: [function() {}, {}],
    20: [function(e, t) {
        var i = e("safe-buffer").Buffer;

        function n(e) {
            i.isBuffer(e) || (e = i.from(e));
            for (var t = e.length / 4 | 0, n = new Array(t), r = 0; r < t; r++) n[r] = e.readUInt32BE(4 * r);
            return n
        }

        function r(e) {
            for (; 0 < e.length; e++) e[0] = 0
        }

        function o(e, t, i, n, r) {
            for (var o, a, s, c, f = i[0], h = i[1], u = i[2], d = i[3], l = e[0] ^ t[0], p = e[1] ^ t[1], g = e[2] ^ t[2], b = e[3] ^ t[3], m = 4, y = 1; y < r; y++) o = f[l >>> 24] ^ h[p >>> 16 & 255] ^ u[g >>> 8 & 255] ^ d[255 & b] ^ t[m++], a = f[p >>> 24] ^ h[g >>> 16 & 255] ^ u[b >>> 8 & 255] ^ d[255 & l] ^ t[m++], s = f[g >>> 24] ^ h[b >>> 16 & 255] ^ u[l >>> 8 & 255] ^ d[255 & p] ^ t[m++], c = f[b >>> 24] ^ h[l >>> 16 & 255] ^ u[p >>> 8 & 255] ^ d[255 & g] ^ t[m++], l = o, p = a, g = s, b = c;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[g >>> 8 & 255] << 8 | n[255 & b]) ^ t[m++], a = (n[p >>> 24] << 24 | n[g >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & l]) ^ t[m++], s = (n[g >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[m++], c = (n[b >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & g]) ^ t[m++], [o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0]
        }
        var a = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            s = function() {
                for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                for (var i = [], n = [], r = [
                        [],
                        [],
                        [],
                        []
                    ], o = [
                        [],
                        [],
                        [],
                        []
                    ], a = 0, s = 0, c = 0; c < 256; ++c) {
                    var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                    f = f >>> 8 ^ 255 & f ^ 99, i[a] = f, n[f] = a;
                    var h = e[a],
                        u = e[h],
                        d = e[u],
                        l = 257 * e[f] ^ 16843008 * f;
                    r[0][a] = l << 24 | l >>> 8, r[1][a] = l << 16 | l >>> 16, r[2][a] = l << 8 | l >>> 24, r[3][a] = l, l = 16843009 * d ^ 65537 * u ^ 257 * h ^ 16843008 * a, o[0][f] = l << 24 | l >>> 8, o[1][f] = l << 16 | l >>> 16, o[2][f] = l << 8 | l >>> 24, o[3][f] = l, 0 === a ? a = s = 1 : (a = h ^ e[e[e[d ^ h]]], s ^= e[e[s]])
                }
                return {
                    SBOX: i,
                    INV_SBOX: n,
                    SUB_MIX: r,
                    INV_SUB_MIX: o
                }
            }();

        function c(e) {
            this._key = n(e), this._reset()
        }
        c.blockSize = 16, c.keySize = 32, c.prototype.blockSize = c.blockSize, c.prototype.keySize = c.keySize, c.prototype._reset = function() {
            for (var e = this._key, t = e.length, i = t + 6, n = 4 * (i + 1), r = [], o = 0; o < t; o++) r[o] = e[o];
            for (o = t; o < n; o++) {
                var c = r[o - 1];
                o % t == 0 ? (c = c << 8 | c >>> 24, c = s.SBOX[c >>> 24] << 24 | s.SBOX[c >>> 16 & 255] << 16 | s.SBOX[c >>> 8 & 255] << 8 | s.SBOX[255 & c], c ^= a[o / t | 0] << 24) : t > 6 && o % t == 4 && (c = s.SBOX[c >>> 24] << 24 | s.SBOX[c >>> 16 & 255] << 16 | s.SBOX[c >>> 8 & 255] << 8 | s.SBOX[255 & c]), r[o] = r[o - t] ^ c
            }
            for (var f = [], h = 0; h < n; h++) {
                var u = n - h,
                    d = r[u - (h % 4 ? 0 : 4)];
                f[h] = h < 4 || u <= 4 ? d : s.INV_SUB_MIX[0][s.SBOX[d >>> 24]] ^ s.INV_SUB_MIX[1][s.SBOX[d >>> 16 & 255]] ^ s.INV_SUB_MIX[2][s.SBOX[d >>> 8 & 255]] ^ s.INV_SUB_MIX[3][s.SBOX[255 & d]]
            }
            this._nRounds = i, this._keySchedule = r, this._invKeySchedule = f
        }, c.prototype.encryptBlockRaw = function(e) {
            return o(e = n(e), this._keySchedule, s.SUB_MIX, s.SBOX, this._nRounds)
        }, c.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e),
                n = i.allocUnsafe(16);
            return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n
        }, c.prototype.decryptBlock = function(e) {
            var t = (e = n(e))[1];
            e[1] = e[3], e[3] = t;
            var r = o(e, this._invKeySchedule, s.INV_SUB_MIX, s.INV_SBOX, this._nRounds),
                a = i.allocUnsafe(16);
            return a.writeUInt32BE(r[0], 0), a.writeUInt32BE(r[3], 4), a.writeUInt32BE(r[2], 8), a.writeUInt32BE(r[1], 12), a
        }, c.prototype.scrub = function() {
            r(this._keySchedule), r(this._invKeySchedule), r(this._key)
        }, t.exports.AES = c
    }, {
        "safe-buffer": 183
    }],
    21: [function(e, t) {
        var i = e("./aes"),
            n = e("safe-buffer").Buffer,
            r = e("cipher-base"),
            o = e("inherits"),
            a = e("./ghash"),
            s = e("buffer-xor"),
            c = e("./incr32");

        function f(e, t) {
            var i = 0;
            e.length !== t.length && i++;
            for (var n = Math.min(e.length, t.length), r = 0; r < n; ++r) i += e[r] ^ t[r];
            return i
        }

        function h(e, t, i) {
            if (12 === t.length) return e._finID = n.concat([t, n.from([0, 0, 0, 1])]), n.concat([t, n.from([0, 0, 0, 2])]);
            var r = new a(i),
                o = t.length,
                s = o % 16;
            r.update(t), s && (s = 16 - s, r.update(n.alloc(s, 0))), r.update(n.alloc(8, 0));
            var f = 8 * o,
                h = n.alloc(8);
            h.writeUIntBE(f, 0, 8), r.update(h), e._finID = r.state;
            var u = n.from(e._finID);
            return c(u), u
        }

        function u(e, t, o, s) {
            r.call(this);
            var c = n.alloc(4, 0);
            this._cipher = new i.AES(t);
            var f = this._cipher.encryptBlock(c);
            this._ghash = new a(f), o = h(this, o, f), this._prev = n.from(o), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = s, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
        }
        o(u, r), u.prototype._update = function(e) {
            if (!this._called && this._alen) {
                var t = 16 - this._alen % 16;
                t < 16 && (t = n.alloc(t, 0), this._ghash.update(t))
            }
            this._called = !0;
            var i = this._mode.encrypt(this, e);
            return this._decrypt ? this._ghash.update(e) : this._ghash.update(i), this._len += e.length, i
        }, u.prototype._final = function() {
            if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
            var e = s(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && f(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = e, this._cipher.scrub()
        }, u.prototype.getAuthTag = function() {
            if (this._decrypt || !n.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag
        }, u.prototype.setAuthTag = function(e) {
            if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = e
        }, u.prototype.setAAD = function(e) {
            if (this._called) throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(e), this._alen += e.length
        }, t.exports = u
    }, {
        "./aes": 20,
        "./ghash": 25,
        "./incr32": 26,
        "buffer-xor": 64,
        "cipher-base": 67,
        inherits: 138,
        "safe-buffer": 183
    }],
    22: [function(e, t, i) {
        var n = e("./encrypter"),
            r = e("./decrypter"),
            o = e("./modes/list.json");
        i.createCipher = i.Cipher = n.createCipher, i.createCipheriv = i.Cipheriv = n.createCipheriv, i.createDecipher = i.Decipher = r.createDecipher, i.createDecipheriv = i.Decipheriv = r.createDecipheriv, i.listCiphers = i.getCiphers = function() {
            return Object.keys(o)
        }
    }, {
        "./decrypter": 23,
        "./encrypter": 24,
        "./modes/list.json": 34
    }],
    23: [function(e, t, i) {
        var n = e("./authCipher"),
            r = e("safe-buffer").Buffer,
            o = e("./modes"),
            a = e("./streamCipher"),
            s = e("cipher-base"),
            c = e("./aes"),
            f = e("evp_bytestokey");

        function h(e, t, i) {
            s.call(this), this._cache = new u, this._last = void 0, this._cipher = new c.AES(t), this._prev = r.from(i), this._mode = e, this._autopadding = !0
        }

        function u() {
            this.cache = r.allocUnsafe(0)
        }

        function d(e) {
            var t = e[15];
            if (t < 1 || t > 16) throw new Error("unable to decrypt data");
            for (var i = -1; ++i < t;)
                if (e[i + (16 - t)] !== t) throw new Error("unable to decrypt data");
            if (16 !== t) return e.slice(0, 16 - t)
        }

        function l(e, t, i) {
            var s = o[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof i && (i = r.from(i)), "GCM" !== s.mode && i.length !== s.iv) throw new TypeError("invalid iv length " + i.length);
            if ("string" == typeof t && (t = r.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            return "stream" === s.type ? new a(s.module, t, i, !0) : "auth" === s.type ? new n(s.module, t, i, !0) : new h(s.module, t, i)
        }
        e("inherits")(h, s), h.prototype._update = function(e) {
            var t, i;
            this._cache.add(e);
            for (var n = []; t = this._cache.get(this._autopadding);) i = this._mode.decrypt(this, t), n.push(i);
            return r.concat(n)
        }, h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) return d(this._mode.decrypt(this, e));
            if (e) throw new Error("data not multiple of block length")
        }, h.prototype.setAutoPadding = function(e) {
            return this._autopadding = !!e, this
        }, u.prototype.add = function(e) {
            this.cache = r.concat([this.cache, e])
        }, u.prototype.get = function(e) {
            var t;
            if (e) {
                if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
            } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
            return null
        }, u.prototype.flush = function() {
            if (this.cache.length) return this.cache
        }, i.createDecipher = function(e, t) {
            var i = o[e.toLowerCase()];
            if (!i) throw new TypeError("invalid suite type");
            var n = f(t, !1, i.key, i.iv);
            return l(e, n.key, n.iv)
        }, i.createDecipheriv = l
    }, {
        "./aes": 20,
        "./authCipher": 21,
        "./modes": 33,
        "./streamCipher": 36,
        "cipher-base": 67,
        evp_bytestokey: 105,
        inherits: 138,
        "safe-buffer": 183
    }],
    24: [function(e, t, i) {
        var n = e("./modes"),
            r = e("./authCipher"),
            o = e("safe-buffer").Buffer,
            a = e("./streamCipher"),
            s = e("cipher-base"),
            c = e("./aes"),
            f = e("evp_bytestokey");

        function h(e, t, i) {
            s.call(this), this._cache = new d, this._cipher = new c.AES(t), this._prev = o.from(i), this._mode = e, this._autopadding = !0
        }
        e("inherits")(h, s), h.prototype._update = function(e) {
            var t, i;
            this._cache.add(e);
            for (var n = []; t = this._cache.get();) i = this._mode.encrypt(this, t), n.push(i);
            return o.concat(n)
        };
        var u = o.alloc(16, 16);

        function d() {
            this.cache = o.allocUnsafe(0)
        }

        function l(e, t, i) {
            var s = n[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof t && (t = o.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            if ("string" == typeof i && (i = o.from(i)), "GCM" !== s.mode && i.length !== s.iv) throw new TypeError("invalid iv length " + i.length);
            return "stream" === s.type ? new a(s.module, t, i) : "auth" === s.type ? new r(s.module, t, i) : new h(s.module, t, i)
        }
        h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
            if (!e.equals(u)) throw this._cipher.scrub(), new Error("data not multiple of block length")
        }, h.prototype.setAutoPadding = function(e) {
            return this._autopadding = !!e, this
        }, d.prototype.add = function(e) {
            this.cache = o.concat([this.cache, e])
        }, d.prototype.get = function() {
            if (this.cache.length > 15) {
                var e = this.cache.slice(0, 16);
                return this.cache = this.cache.slice(16), e
            }
            return null
        }, d.prototype.flush = function() {
            for (var e = 16 - this.cache.length, t = o.allocUnsafe(e), i = -1; ++i < e;) t.writeUInt8(e, i);
            return o.concat([this.cache, t])
        }, i.createCipheriv = l, i.createCipher = function(e, t) {
            var i = n[e.toLowerCase()];
            if (!i) throw new TypeError("invalid suite type");
            var r = f(t, !1, i.key, i.iv);
            return l(e, r.key, r.iv)
        }
    }, {
        "./aes": 20,
        "./authCipher": 21,
        "./modes": 33,
        "./streamCipher": 36,
        "cipher-base": 67,
        evp_bytestokey: 105,
        inherits: 138,
        "safe-buffer": 183
    }],
    25: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = i.alloc(16, 0);

        function r(e) {
            var t = i.allocUnsafe(16);
            return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
        }

        function o(e) {
            this.h = e, this.state = i.alloc(16, 0), this.cache = i.allocUnsafe(0)
        }
        o.prototype.ghash = function(e) {
            for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
            this._multiply()
        }, o.prototype._multiply = function() {
            for (var e, t, i, n = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], o = [0, 0, 0, 0], a = -1; ++a < 128;) {
                for (0 != (this.state[~~(a / 8)] & 1 << 7 - a % 8) && (o[0] ^= n[0], o[1] ^= n[1], o[2] ^= n[2], o[3] ^= n[3]), i = 0 != (1 & n[3]), t = 3; t > 0; t--) n[t] = n[t] >>> 1 | (1 & n[t - 1]) << 31;
                n[0] = n[0] >>> 1, i && (n[0] = n[0] ^ 225 << 24)
            }
            this.state = r(o)
        }, o.prototype.update = function(e) {
            var t;
            for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
        }, o.prototype.final = function(e, t) {
            return this.cache.length && this.ghash(i.concat([this.cache, n], 16)), this.ghash(r([0, e, 0, t])), this.state
        }, t.exports = o
    }, {
        "safe-buffer": 183
    }],
    26: [function(e, t) {
        t.exports = function(e) {
            for (var t, i = e.length; i--;) {
                if (255 !== (t = e.readUInt8(i))) {
                    t++, e.writeUInt8(t, i);
                    break
                }
                e.writeUInt8(0, i)
            }
        }
    }, {}],
    27: [function(e, t, i) {
        var n = e("buffer-xor");
        i.encrypt = function(e, t) {
            var i = n(t, e._prev);
            return e._prev = e._cipher.encryptBlock(i), e._prev
        }, i.decrypt = function(e, t) {
            var i = e._prev;
            e._prev = t;
            var r = e._cipher.decryptBlock(t);
            return n(r, i)
        }
    }, {
        "buffer-xor": 64
    }],
    28: [function(e, t, i) {
        var n = e("safe-buffer").Buffer,
            r = e("buffer-xor");

        function o(e, t, i) {
            var o = t.length,
                a = r(t, e._cache);
            return e._cache = e._cache.slice(o), e._prev = n.concat([e._prev, i ? t : a]), a
        }
        i.encrypt = function(e, t, i) {
            for (var r, a = n.allocUnsafe(0); t.length;) {
                if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = n.allocUnsafe(0)), !(e._cache.length <= t.length)) {
                    a = n.concat([a, o(e, t, i)]);
                    break
                }
                r = e._cache.length, a = n.concat([a, o(e, t.slice(0, r), i)]), t = t.slice(r)
            }
            return a
        }
    }, {
        "buffer-xor": 64,
        "safe-buffer": 183
    }],
    29: [function(e, t, i) {
        var n = e("safe-buffer").Buffer;

        function r(e, t, i) {
            for (var n, r, a = -1, s = 0; ++a < 8;) n = t & 1 << 7 - a ? 128 : 0, s += (128 & (r = e._cipher.encryptBlock(e._prev)[0] ^ n)) >> a % 8, e._prev = o(e._prev, i ? n : r);
            return s
        }

        function o(e, t) {
            var i = e.length,
                r = -1,
                o = n.allocUnsafe(e.length);
            for (e = n.concat([e, n.from([t])]); ++r < i;) o[r] = e[r] << 1 | e[r + 1] >> 7;
            return o
        }
        i.encrypt = function(e, t, i) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o;) a[s] = r(e, t[s], i);
            return a
        }
    }, {
        "safe-buffer": 183
    }],
    30: [function(e, t, i) {
        var n = e("safe-buffer").Buffer;

        function r(e, t, i) {
            var r = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return e._prev = n.concat([e._prev.slice(1), n.from([i ? t : r])]), r
        }
        i.encrypt = function(e, t, i) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o;) a[s] = r(e, t[s], i);
            return a
        }
    }, {
        "safe-buffer": 183
    }],
    31: [function(e, t, i) {
        var n = e("buffer-xor"),
            r = e("safe-buffer").Buffer,
            o = e("../incr32");

        function a(e) {
            var t = e._cipher.encryptBlockRaw(e._prev);
            return o(e._prev), t
        }
        i.encrypt = function(e, t) {
            var i = Math.ceil(t.length / 16),
                o = e._cache.length;
            e._cache = r.concat([e._cache, r.allocUnsafe(16 * i)]);
            for (var s = 0; s < i; s++) {
                var c = a(e),
                    f = o + 16 * s;
                e._cache.writeUInt32BE(c[0], f + 0), e._cache.writeUInt32BE(c[1], f + 4), e._cache.writeUInt32BE(c[2], f + 8), e._cache.writeUInt32BE(c[3], f + 12)
            }
            var h = e._cache.slice(0, t.length);
            return e._cache = e._cache.slice(t.length), n(t, h)
        }
    }, {
        "../incr32": 26,
        "buffer-xor": 64,
        "safe-buffer": 183
    }],
    32: [function(e, t, i) {
        i.encrypt = function(e, t) {
            return e._cipher.encryptBlock(t)
        }, i.decrypt = function(e, t) {
            return e._cipher.decryptBlock(t)
        }
    }, {}],
    33: [function(e, t) {
        var i = {
                ECB: e("./ecb"),
                CBC: e("./cbc"),
                CFB: e("./cfb"),
                CFB8: e("./cfb8"),
                CFB1: e("./cfb1"),
                OFB: e("./ofb"),
                CTR: e("./ctr"),
                GCM: e("./ctr")
            },
            n = e("./list.json");
        for (var r in n) n[r].module = i[n[r].mode];
        t.exports = n
    }, {
        "./cbc": 27,
        "./cfb": 28,
        "./cfb1": 29,
        "./cfb8": 30,
        "./ctr": 31,
        "./ecb": 32,
        "./list.json": 34,
        "./ofb": 35
    }],
    34: [function(e, t) {
        t.exports = {
            "aes-128-ecb": {
                cipher: "AES",
                key: 128,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-192-ecb": {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-256-ecb": {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-128-cbc": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-192-cbc": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-256-cbc": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes128: {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes192: {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes256: {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-128-cfb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-192-cfb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-256-cfb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-128-cfb8": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-192-cfb8": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-256-cfb8": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-128-cfb1": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-192-cfb1": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-256-cfb1": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-128-ofb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-192-ofb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-256-ofb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-128-ctr": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-192-ctr": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-256-ctr": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-128-gcm": {
                cipher: "AES",
                key: 128,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-192-gcm": {
                cipher: "AES",
                key: 192,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-256-gcm": {
                cipher: "AES",
                key: 256,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }
        }
    }, {}],
    35: [function(e, t, i) {
        (function(t) {
            var n = e("buffer-xor");

            function r(e) {
                return e._prev = e._cipher.encryptBlock(e._prev), e._prev
            }
            i.encrypt = function(e, i) {
                for (; e._cache.length < i.length;) e._cache = t.concat([e._cache, r(e)]);
                var o = e._cache.slice(0, i.length);
                return e._cache = e._cache.slice(i.length), n(i, o)
            }
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 65,
        "buffer-xor": 64
    }],
    36: [function(e, t) {
        var i = e("./aes"),
            n = e("safe-buffer").Buffer,
            r = e("cipher-base");

        function o(e, t, o, a) {
            r.call(this), this._cipher = new i.AES(t), this._prev = n.from(o), this._cache = n.allocUnsafe(0), this._secCache = n.allocUnsafe(0), this._decrypt = a, this._mode = e
        }
        e("inherits")(o, r), o.prototype._update = function(e) {
            return this._mode.encrypt(this, e, this._decrypt)
        }, o.prototype._final = function() {
            this._cipher.scrub()
        }, t.exports = o
    }, {
        "./aes": 20,
        "cipher-base": 67,
        inherits: 138,
        "safe-buffer": 183
    }],
    37: [function(e, t, i) {
        var n = e("browserify-des"),
            r = e("browserify-aes/browser"),
            o = e("browserify-aes/modes"),
            a = e("browserify-des/modes"),
            s = e("evp_bytestokey");

        function c(e, t, i) {
            if (e = e.toLowerCase(), o[e]) return r.createCipheriv(e, t, i);
            if (a[e]) return new n({
                key: t,
                iv: i,
                mode: e
            });
            throw new TypeError("invalid suite type")
        }

        function f(e, t, i) {
            if (e = e.toLowerCase(), o[e]) return r.createDecipheriv(e, t, i);
            if (a[e]) return new n({
                key: t,
                iv: i,
                mode: e,
                decrypt: !0
            });
            throw new TypeError("invalid suite type")
        }
        i.createCipher = i.Cipher = function(e, t) {
            var i, n;
            if (e = e.toLowerCase(), o[e]) i = o[e].key, n = o[e].iv;
            else {
                if (!a[e]) throw new TypeError("invalid suite type");
                i = 8 * a[e].key, n = a[e].iv
            }
            var r = s(t, !1, i, n);
            return c(e, r.key, r.iv)
        }, i.createCipheriv = i.Cipheriv = c, i.createDecipher = i.Decipher = function(e, t) {
            var i, n;
            if (e = e.toLowerCase(), o[e]) i = o[e].key, n = o[e].iv;
            else {
                if (!a[e]) throw new TypeError("invalid suite type");
                i = 8 * a[e].key, n = a[e].iv
            }
            var r = s(t, !1, i, n);
            return f(e, r.key, r.iv)
        }, i.createDecipheriv = i.Decipheriv = f, i.listCiphers = i.getCiphers = function() {
            return Object.keys(a).concat(r.getCiphers())
        }
    }, {
        "browserify-aes/browser": 22,
        "browserify-aes/modes": 33,
        "browserify-des": 38,
        "browserify-des/modes": 39,
        evp_bytestokey: 105
    }],
    38: [function(e, t) {
        var i = e("cipher-base"),
            n = e("des.js"),
            r = e("inherits"),
            o = e("safe-buffer").Buffer,
            a = {
                "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                "des-ede3": n.EDE,
                "des-ede-cbc": n.CBC.instantiate(n.EDE),
                "des-ede": n.EDE,
                "des-cbc": n.CBC.instantiate(n.DES),
                "des-ecb": n.DES
            };

        function s(e) {
            i.call(this);
            var t, n = e.mode.toLowerCase(),
                r = a[n];
            t = e.decrypt ? "decrypt" : "encrypt";
            var s = e.key;
            o.isBuffer(s) || (s = o.from(s)), "des-ede" !== n && "des-ede-cbc" !== n || (s = o.concat([s, s.slice(0, 8)]));
            var c = e.iv;
            o.isBuffer(c) || (c = o.from(c)), this._des = r.create({
                key: s,
                iv: c,
                type: t
            })
        }
        a.des = a["des-cbc"], a.des3 = a["des-ede3-cbc"], t.exports = s, r(s, i), s.prototype._update = function(e) {
            return o.from(this._des.update(e))
        }, s.prototype._final = function() {
            return o.from(this._des.final())
        }
    }, {
        "cipher-base": 67,
        "des.js": 76,
        inherits: 138,
        "safe-buffer": 183
    }],
    39: [function(e, t, i) {
        i["des-ecb"] = {
            key: 8,
            iv: 0
        }, i["des-cbc"] = i.des = {
            key: 8,
            iv: 8
        }, i["des-ede3-cbc"] = i.des3 = {
            key: 24,
            iv: 8
        }, i["des-ede3"] = {
            key: 24,
            iv: 0
        }, i["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, i["des-ede"] = {
            key: 16,
            iv: 0
        }
    }, {}],
    40: [function(e, t) {
        (function(i) {
            var n = e("bn.js"),
                r = e("randombytes");

            function o(e) {
                var t = a(e);
                return {
                    blinder: t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),
                    unblinder: t.invm(e.modulus)
                }
            }

            function a(e) {
                var t, i = e.modulus.byteLength();
                do {
                    t = new n(r(i))
                } while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
                return t
            }

            function s(e, t) {
                var r = o(t),
                    a = t.modulus.byteLength(),
                    s = new n(e).mul(r.blinder).umod(t.modulus),
                    c = s.toRed(n.mont(t.prime1)),
                    f = s.toRed(n.mont(t.prime2)),
                    h = t.coefficient,
                    u = t.prime1,
                    d = t.prime2,
                    l = c.redPow(t.exponent1).fromRed(),
                    p = f.redPow(t.exponent2).fromRed(),
                    g = l.isub(p).imul(h).umod(u).imul(d);
                return p.iadd(g).imul(r.unblinder).umod(t.modulus).toArrayLike(i, "be", a)
            }
            s.getr = a, t.exports = s
        }).call(this, e("buffer").Buffer)
    }, {
        "bn.js": 17,
        buffer: 65,
        randombytes: 165
    }],
    41: [function(e, t) {
        t.exports = e("./browser/algorithms.json")
    }, {
        "./browser/algorithms.json": 42
    }],
    42: [function(e, t) {
        t.exports = {
            sha224WithRSAEncryption: {
                sign: "rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            "RSA-SHA224": {
                sign: "ecdsa/rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            sha256WithRSAEncryption: {
                sign: "rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            "RSA-SHA256": {
                sign: "ecdsa/rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            sha384WithRSAEncryption: {
                sign: "rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            "RSA-SHA384": {
                sign: "ecdsa/rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            sha512WithRSAEncryption: {
                sign: "rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA512": {
                sign: "ecdsa/rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA1": {
                sign: "rsa",
                hash: "sha1",
                id: "3021300906052b0e03021a05000414"
            },
            "ecdsa-with-SHA1": {
                sign: "ecdsa",
                hash: "sha1",
                id: ""
            },
            sha256: {
                sign: "ecdsa",
                hash: "sha256",
                id: ""
            },
            sha224: {
                sign: "ecdsa",
                hash: "sha224",
                id: ""
            },
            sha384: {
                sign: "ecdsa",
                hash: "sha384",
                id: ""
            },
            sha512: {
                sign: "ecdsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-SHA1": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            DSA: {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-WITH-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-WITH-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-WITH-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-WITH-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-RIPEMD160": {
                sign: "dsa",
                hash: "rmd160",
                id: ""
            },
            ripemd160WithRSA: {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            "RSA-RIPEMD160": {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            md5WithRSAEncryption: {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            },
            "RSA-MD5": {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            }
        }
    }, {}],
    43: [function(e, t) {
        t.exports = {
            "1.3.132.0.10": "secp256k1",
            "1.3.132.0.33": "p224",
            "1.2.840.10045.3.1.1": "p192",
            "1.2.840.10045.3.1.7": "p256",
            "1.3.132.0.34": "p384",
            "1.3.132.0.35": "p521"
        }
    }, {}],
    44: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = e("create-hash"),
            r = e("readable-stream"),
            o = e("inherits"),
            a = e("./sign"),
            s = e("./verify"),
            c = e("./algorithms.json");

        function f(e) {
            r.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            this._hashType = t.hash, this._hash = n(t.hash), this._tag = t.id, this._signType = t.sign
        }

        function h(e) {
            r.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            this._hash = n(t.hash), this._tag = t.id, this._signType = t.sign
        }

        function u(e) {
            return new f(e)
        }

        function d(e) {
            return new h(e)
        }
        Object.keys(c).forEach(function(e) {
            c[e].id = i.from(c[e].id, "hex"), c[e.toLowerCase()] = c[e]
        }), o(f, r.Writable), f.prototype._write = function(e, t, i) {
            this._hash.update(e), i()
        }, f.prototype.update = function(e, t) {
            return "string" == typeof e && (e = i.from(e, t)), this._hash.update(e), this
        }, f.prototype.sign = function(e, t) {
            this.end();
            var i = this._hash.digest(),
                n = a(i, e, this._hashType, this._signType, this._tag);
            return t ? n.toString(t) : n
        }, o(h, r.Writable), h.prototype._write = function(e, t, i) {
            this._hash.update(e), i()
        }, h.prototype.update = function(e, t) {
            return "string" == typeof e && (e = i.from(e, t)), this._hash.update(e), this
        }, h.prototype.verify = function(e, t, n) {
            "string" == typeof t && (t = i.from(t, n)), this.end();
            var r = this._hash.digest();
            return s(t, r, e, this._signType, this._tag)
        }, t.exports = {
            Sign: u,
            Verify: d,
            createSign: u,
            createVerify: d
        }
    }, {
        "./algorithms.json": 42,
        "./sign": 45,
        "./verify": 46,
        "create-hash": 71,
        inherits: 138,
        "readable-stream": 61,
        "safe-buffer": 62
    }],
    45: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = e("create-hmac"),
            r = e("browserify-rsa"),
            o = e("elliptic").ec,
            a = e("bn.js"),
            s = e("parse-asn1"),
            c = e("./curves.json");

        function f(e, t) {
            var n = c[t.curve.join(".")];
            if (!n) throw new Error("unknown curve " + t.curve.join("."));
            var r = new o(n).keyFromPrivate(t.privateKey).sign(e);
            return i.from(r.toDER())
        }

        function h(e, t, i) {
            for (var n, r = t.params.priv_key, o = t.params.p, s = t.params.q, c = t.params.g, f = new a(0), h = l(e, s).mod(s), p = !1, m = d(r, s, e, i); !1 === p;) f = b(c, n = g(s, m, i), o, s), 0 === (p = n.invm(s).imul(h.add(r.mul(f))).mod(s)).cmpn(0) && (p = !1, f = new a(0));
            return u(f, p)
        }

        function u(e, t) {
            e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
            var n = [48, e.length + t.length + 4, 2, e.length];
            return n = n.concat(e, [2, t.length], t), i.from(n)
        }

        function d(e, t, r, o) {
            if ((e = i.from(e.toArray())).length < t.byteLength()) {
                var a = i.alloc(t.byteLength() - e.length);
                e = i.concat([a, e])
            }
            var s = r.length,
                c = p(r, t),
                f = i.alloc(s);
            f.fill(1);
            var h = i.alloc(s);
            return h = n(o, h).update(f).update(i.from([0])).update(e).update(c).digest(), f = n(o, h).update(f).digest(), {
                k: h = n(o, h).update(f).update(i.from([1])).update(e).update(c).digest(),
                v: f = n(o, h).update(f).digest()
            }
        }

        function l(e, t) {
            var i = new a(e),
                n = (e.length << 3) - t.bitLength();
            return n > 0 && i.ishrn(n), i
        }

        function p(e, t) {
            e = (e = l(e, t)).mod(t);
            var n = i.from(e.toArray());
            if (n.length < t.byteLength()) {
                var r = i.alloc(t.byteLength() - n.length);
                n = i.concat([r, n])
            }
            return n
        }

        function g(e, t, r) {
            var o, a;
            do {
                for (o = i.alloc(0); 8 * o.length < e.bitLength();) t.v = n(r, t.k).update(t.v).digest(), o = i.concat([o, t.v]);
                a = l(o, e), t.k = n(r, t.k).update(t.v).update(i.from([0])).digest(), t.v = n(r, t.k).update(t.v).digest()
            } while (-1 !== a.cmp(e));
            return a
        }

        function b(e, t, i, n) {
            return e.toRed(a.mont(i)).redPow(t).fromRed().mod(n)
        }
        t.exports = function(e, t, n, o, a) {
            var c = s(t);
            if (c.curve) {
                if ("ecdsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong private key type");
                return f(e, c)
            }
            if ("dsa" === c.type) {
                if ("dsa" !== o) throw new Error("wrong private key type");
                return h(e, c, n)
            }
            if ("rsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong private key type");
            e = i.concat([a, e]);
            for (var u = c.modulus.byteLength(), d = [0, 1]; e.length + d.length + 1 < u;) d.push(255);
            d.push(0);
            for (var l = -1; ++l < e.length;) d.push(e[l]);
            return r(d, c)
        }, t.exports.getKey = d, t.exports.makeKey = g
    }, {
        "./curves.json": 43,
        "bn.js": 17,
        "browserify-rsa": 40,
        "create-hmac": 73,
        elliptic: 87,
        "parse-asn1": 149,
        "safe-buffer": 62
    }],
    46: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = e("bn.js"),
            r = e("elliptic").ec,
            o = e("parse-asn1"),
            a = e("./curves.json");

        function s(e, t, i) {
            var n = a[i.data.algorithm.curve.join(".")];
            if (!n) throw new Error("unknown curve " + i.data.algorithm.curve.join("."));
            var o = new r(n),
                s = i.data.subjectPrivateKey.data;
            return o.verify(t, e, s)
        }

        function c(e, t, i) {
            var r = i.data.p,
                a = i.data.q,
                s = i.data.g,
                c = i.data.pub_key,
                h = o.signature.decode(e, "der"),
                u = h.s,
                d = h.r;
            f(u, a), f(d, a);
            var l = n.mont(r),
                p = u.invm(a);
            return 0 === s.toRed(l).redPow(new n(t).mul(p).mod(a)).fromRed().mul(c.toRed(l).redPow(d.mul(p).mod(a)).fromRed()).mod(r).mod(a).cmp(d)
        }

        function f(e, t) {
            if (e.cmpn(0) <= 0) throw new Error("invalid sig");
            if (e.cmp(t) >= t) throw new Error("invalid sig")
        }
        t.exports = function(e, t, r, a, f) {
            var h = o(r);
            if ("ec" === h.type) {
                if ("ecdsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong public key type");
                return s(e, t, h)
            }
            if ("dsa" === h.type) {
                if ("dsa" !== a) throw new Error("wrong public key type");
                return c(e, t, h)
            }
            if ("rsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong public key type");
            t = i.concat([f, t]);
            for (var u = h.modulus.byteLength(), d = [1], l = 0; t.length + d.length + 2 < u;) d.push(255), l++;
            d.push(0);
            for (var p = -1; ++p < t.length;) d.push(t[p]);
            d = i.from(d);
            var g = n.mont(h.modulus);
            e = (e = new n(e).toRed(g)).redPow(new n(h.publicExponent)), e = i.from(e.fromRed().toArray());
            var b = l < 8 ? 1 : 0;
            for (u = Math.min(e.length, d.length), e.length !== d.length && (b = 1), p = -1; ++p < u;) b |= e[p] ^ d[p];
            return 0 === b
        }
    }, {
        "./curves.json": 43,
        "bn.js": 17,
        elliptic: 87,
        "parse-asn1": 149,
        "safe-buffer": 62
    }],
    47: [function(e, t) {
        "use strict";
        var i = {};

        function n(e, t, n) {
            function r(e, i, n) {
                return "string" == typeof t ? t : t(e, i, n)
            }
            n || (n = Error);
            var o = function(e) {
                var t, i;

                function n(t, i, n) {
                    return e.call(this, r(t, i, n)) || this
                }
                return i = e, (t = n).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, n
            }(n);
            o.prototype.name = n.name, o.prototype.code = e, i[e] = o
        }

        function r(e, t) {
            if (Array.isArray(e)) {
                var i = e.length;
                return e = e.map(function(e) {
                    return String(e)
                }), i > 2 ? "one of ".concat(t, " ").concat(e.slice(0, i - 1).join(", "), ", or ") + e[i - 1] : 2 === i ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }

        function o(e, t, i) {
            return (void 0 === i || i > e.length) && (i = e.length), e.substring(i - t.length, i) === t
        }

        function a(e, t, i) {
            return "number" != typeof i && (i = 0), !(i + t.length > e.length) && -1 !== e.indexOf(t, i)
        }
        n("ERR_INVALID_OPT_VALUE", function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }, TypeError), n("ERR_INVALID_ARG_TYPE", function(e, t, i) {
            var n, s;
            if ("string" == typeof t && ("not ", "not " === t.substr(0, "not ".length)) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", o(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(r(t, "type"));
            else {
                var c = a(e, ".") ? "property" : "argument";
                s = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(r(t, "type"))
            }
            return s + ". Received type ".concat(typeof i)
        }, TypeError), n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), n("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
            return "The " + e + " method is not implemented"
        }), n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), n("ERR_STREAM_DESTROYED", function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }), n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), n("ERR_STREAM_WRITE_AFTER_END", "write after end"), n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), n("ERR_UNKNOWN_ENCODING", function(e) {
            return "Unknown encoding: " + e
        }, TypeError), n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = i
    }, {}],
    48: [function(e, t) {
        (function(i) {
            "use strict";
            var n = Object.keys || function(e) {
                var t = [];
                for (var i in e) t.push(i);
                return t
            };
            t.exports = f;
            var r = e("./_stream_readable"),
                o = e("./_stream_writable");
            e("inherits")(f, r);
            for (var a = n(o.prototype), s = 0; s < a.length; s++) {
                var c = a[s];
                f.prototype[c] || (f.prototype[c] = o.prototype[c])
            }

            function f(e) {
                if (!(this instanceof f)) return new f(e);
                r.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", h)))
            }

            function h() {
                this._writableState.ended || i.nextTick(u, this)
            }

            function u(e) {
                e.end()
            }
            Object.defineProperty(f.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(f.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(f.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(f.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            })
        }).call(this, e("_process"))
    }, {
        "./_stream_readable": 50,
        "./_stream_writable": 52,
        _process: 157,
        inherits: 138
    }],
    49: [function(e, t) {
        "use strict";
        t.exports = n;
        var i = e("./_stream_transform");

        function n(e) {
            if (!(this instanceof n)) return new n(e);
            i.call(this, e)
        }
        e("inherits")(n, i), n.prototype._transform = function(e, t, i) {
            i(null, e)
        }
    }, {
        "./_stream_transform": 51,
        inherits: 138
    }],
    50: [function(e, t) {
        (function(i, n) {
            "use strict";
            var r;
            t.exports = P, P.ReadableState = k, e("events").EventEmitter;
            var o = function(e, t) {
                    return e.listeners(t).length
                },
                a = e("./internal/streams/stream"),
                s = e("buffer").Buffer,
                c = n.Uint8Array || function() {};

            function f(e) {
                return s.from(e)
            }
            var h, u = e("util");
            h = u && u.debuglog ? u.debuglog("stream") : function() {};
            var d, l, p, g = e("./internal/streams/buffer_list"),
                b = e("./internal/streams/destroy"),
                m = e("./internal/streams/state").getHighWaterMark,
                y = e("../errors").codes,
                _ = y.ERR_INVALID_ARG_TYPE,
                v = y.ERR_STREAM_PUSH_AFTER_EOF,
                w = y.ERR_METHOD_NOT_IMPLEMENTED,
                M = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            e("inherits")(P, a);
            var S = b.errorOrDestroy,
                C = ["error", "close", "destroy", "pause", "resume"];

            function E(e, t, i) {
                if ("function" == typeof e.prependListener) return e.prependListener(t, i);
                e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i)
            }

            function k(t, i, n) {
                r = r || e("./_stream_duplex"), t = t || {}, "boolean" != typeof n && (n = i instanceof r), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = m(this, t, "readableHighWaterMark", n), this.buffer = new g, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = e("string_decoder/").StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding)
            }

            function P(t) {
                if (r = r || e("./_stream_duplex"), !(this instanceof P)) return new P(t);
                var i = this instanceof r;
                this._readableState = new k(t, this, i), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), a.call(this)
            }

            function I(e, t, i, n, r) {
                h("readableAddChunk", t);
                var o, a = e._readableState;
                if (null === t) a.reading = !1, A(e, a);
                else if (r || (o = R(a, t)), o) S(e, o);
                else if (a.objectMode || t && t.length > 0)
                    if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = f(t)), n) a.endEmitted ? S(e, new M) : N(e, a, t, !0);
                    else if (a.ended) S(e, new v);
                else {
                    if (a.destroyed) return !1;
                    a.reading = !1, a.decoder && !i ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? N(e, a, t, !1) : O(e, a)) : N(e, a, t, !1)
                } else n || (a.reading = !1, O(e, a));
                return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
            }

            function N(e, t, i, n) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", i)) : (t.length += t.objectMode ? 1 : i.length, n ? t.buffer.unshift(i) : t.buffer.push(i), t.needReadable && L(e)), O(e, t)
            }

            function R(e, t) {
                var i, n;
                return n = t, s.isBuffer(n) || n instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (i = new _("chunk", ["string", "Buffer", "Uint8Array"], t)), i
            }
            Object.defineProperty(P.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), P.prototype.destroy = b.destroy, P.prototype._undestroy = b.undestroy, P.prototype._destroy = function(e, t) {
                t(e)
            }, P.prototype.push = function(e, t) {
                var i, n = this._readableState;
                return n.objectMode ? i = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), i = !0), I(this, e, t, !1, i)
            }, P.prototype.unshift = function(e) {
                return I(this, e, null, !0, !1)
            }, P.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, P.prototype.setEncoding = function(t) {
                d || (d = e("string_decoder/").StringDecoder);
                var i = new d(t);
                this._readableState.decoder = i, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var n = this._readableState.buffer.head, r = ""; null !== n;) r += i.write(n.data), n = n.next;
                return this._readableState.buffer.clear(), "" !== r && this._readableState.buffer.push(r), this._readableState.length = r.length, this
            };
            var B = 1073741824;

            function x(e) {
                return e >= B ? e = B : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function T(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = x(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function A(e, t) {
                if (h("onEofChunk"), !t.ended) {
                    if (t.decoder) {
                        var i = t.decoder.end();
                        i && i.length && (t.buffer.push(i), t.length += t.objectMode ? 1 : i.length)
                    }
                    t.ended = !0, t.sync ? L(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, D(e)))
                }
            }

            function L(e) {
                var t = e._readableState;
                h("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (h("emitReadable", t.flowing), t.emittedReadable = !0, i.nextTick(D, e))
            }

            function D(e) {
                var t = e._readableState;
                h("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, V(e)
            }

            function O(e, t) {
                t.readingMore || (t.readingMore = !0, i.nextTick(j, e, t))
            }

            function j(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var i = t.length;
                    if (h("maybeReadMore read 0"), e.read(0), i === t.length) break
                }
                t.readingMore = !1
            }

            function U(e) {
                return function() {
                    var t = e._readableState;
                    h("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, V(e))
                }
            }

            function F(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function z(e) {
                h("readable nexttick read 0"), e.read(0)
            }

            function q(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(G, e, t))
            }

            function G(e, t) {
                h("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), V(e), t.flowing && !t.reading && e.read(0)
            }

            function V(e) {
                var t = e._readableState;
                for (h("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function H(e, t) {
                return 0 === t.length ? null : (t.objectMode ? i = t.buffer.shift() : !e || e >= t.length ? (i = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : i = t.buffer.consume(e, t.decoder), i);
                var i
            }

            function W(e) {
                var t = e._readableState;
                h("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, i.nextTick(K, t, e))
            }

            function K(e, t) {
                if (h("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                    var i = t._writableState;
                    (!i || i.autoDestroy && i.finished) && t.destroy()
                }
            }

            function J(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            }
            P.prototype.read = function(e) {
                h("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    i = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return h("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? W(this) : L(this), null;
                if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && W(this), null;
                var n, r = t.needReadable;
                return h("need readable", r), (0 === t.length || t.length - e < t.highWaterMark) && h("length less than watermark", r = !0), t.ended || t.reading ? h("reading or ended", r = !1) : r && (h("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(i, t))), null === (n = e > 0 ? H(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), i !== e && t.ended && W(this)), null !== n && this.emit("data", n), n
            }, P.prototype._read = function() {
                S(this, new w("_read()"))
            }, P.prototype.pipe = function(e, t) {
                var n = this,
                    r = this._readableState;
                switch (r.pipesCount) {
                    case 0:
                        r.pipes = e;
                        break;
                    case 1:
                        r.pipes = [r.pipes, e];
                        break;
                    default:
                        r.pipes.push(e)
                }
                r.pipesCount += 1, h("pipe count=%d opts=%j", r.pipesCount, t);
                var a = t && !1 === t.end || e === i.stdout || e === i.stderr ? b : c;

                function s(t, i) {
                    h("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, h("cleanup"), e.removeListener("close", p), e.removeListener("finish", g), e.removeListener("drain", f), e.removeListener("error", l), e.removeListener("unpipe", s), n.removeListener("end", c), n.removeListener("end", b), n.removeListener("data", d), u = !0, !r.awaitDrain || e._writableState && !e._writableState.needDrain || f())
                }

                function c() {
                    h("onend"), e.end()
                }
                r.endEmitted ? i.nextTick(a) : n.once("end", a), e.on("unpipe", s);
                var f = U(n);
                e.on("drain", f);
                var u = !1;

                function d(t) {
                    h("ondata");
                    var i = e.write(t);
                    h("dest.write", i), !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== J(r.pipes, e)) && !u && (h("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause())
                }

                function l(t) {
                    h("onerror", t), b(), e.removeListener("error", l), 0 === o(e, "error") && S(e, t)
                }

                function p() {
                    e.removeListener("finish", g), b()
                }

                function g() {
                    h("onfinish"), e.removeListener("close", p), b()
                }

                function b() {
                    h("unpipe"), n.unpipe(e)
                }
                return n.on("data", d), E(e, "error", l), e.once("close", p), e.once("finish", g), e.emit("pipe", n), r.flowing || (h("pipe resume"), n.resume()), e
            }, P.prototype.unpipe = function(e) {
                var t = this._readableState,
                    i = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, i), this);
                if (!e) {
                    var n = t.pipes,
                        r = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < r; o++) n[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var a = J(t.pipes, e);
                return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, i), this)
            }, P.prototype.on = function(e, t) {
                var n = a.prototype.on.call(this, e, t),
                    r = this._readableState;
                return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, h("on readable", r.length, r.reading), r.length ? L(this) : r.reading || i.nextTick(z, this))), n
            }, P.prototype.addListener = P.prototype.on, P.prototype.removeListener = function(e, t) {
                var n = a.prototype.removeListener.call(this, e, t);
                return "readable" === e && i.nextTick(F, this), n
            }, P.prototype.removeAllListeners = function(e) {
                var t = a.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || i.nextTick(F, this), t
            }, P.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (h("resume"), e.flowing = !e.readableListening, q(this, e)), e.paused = !1, this
            }, P.prototype.pause = function() {
                return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, P.prototype.wrap = function(e) {
                var t = this,
                    i = this._readableState,
                    n = !1;
                for (var r in e.on("end", function() {
                        if (h("wrapped end"), i.decoder && !i.ended) {
                            var e = i.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(r) {
                        h("wrapped data"), i.decoder && (r = i.decoder.write(r)), i.objectMode && null == r || (i.objectMode || r && r.length) && (t.push(r) || (n = !0, e.pause()))
                    }), e) void 0 === this[r] && "function" == typeof e[r] && (this[r] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(r));
                for (var o = 0; o < C.length; o++) e.on(C[o], this.emit.bind(this, C[o]));
                return this._read = function(t) {
                    h("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, "function" == typeof Symbol && (P.prototype[Symbol.asyncIterator] = function() {
                return void 0 === l && (l = e("./internal/streams/async_iterator")), l(this)
            }), Object.defineProperty(P.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(P.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(P.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), P._fromList = H, Object.defineProperty(P.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (P.from = function(t, i) {
                return void 0 === p && (p = e("./internal/streams/from")), p(P, t, i)
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 47,
        "./_stream_duplex": 48,
        "./internal/streams/async_iterator": 53,
        "./internal/streams/buffer_list": 54,
        "./internal/streams/destroy": 55,
        "./internal/streams/from": 57,
        "./internal/streams/state": 59,
        "./internal/streams/stream": 60,
        _process: 157,
        buffer: 65,
        events: 104,
        inherits: 138,
        "string_decoder/": 63,
        util: 19
    }],
    51: [function(e, t) {
        "use strict";
        t.exports = f;
        var i = e("../errors").codes,
            n = i.ERR_METHOD_NOT_IMPLEMENTED,
            r = i.ERR_MULTIPLE_CALLBACK,
            o = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            a = i.ERR_TRANSFORM_WITH_LENGTH_0,
            s = e("./_stream_duplex");

        function c(e, t) {
            var i = this._transformState;
            i.transforming = !1;
            var n = i.writecb;
            if (null === n) return this.emit("error", new r);
            i.writechunk = null, i.writecb = null, null != t && this.push(t), n(e);
            var o = this._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
        }

        function f(e) {
            if (!(this instanceof f)) return new f(e);
            s.call(this, e), this._transformState = {
                afterTransform: c.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
        }

        function h() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed ? u(this, null, null) : this._flush(function(t, i) {
                u(e, t, i)
            })
        }

        function u(e, t, i) {
            if (t) return e.emit("error", t);
            if (null != i && e.push(i), e._writableState.length) throw new a;
            if (e._transformState.transforming) throw new o;
            return e.push(null)
        }
        e("inherits")(f, s), f.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t)
        }, f.prototype._transform = function(e, t, i) {
            i(new n("_transform()"))
        }, f.prototype._write = function(e, t, i) {
            var n = this._transformState;
            if (n.writecb = i, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var r = this._readableState;
                (n.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
            }
        }, f.prototype._read = function() {
            var e = this._transformState;
            null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
        }, f.prototype._destroy = function(e, t) {
            s.prototype._destroy.call(this, e, function(e) {
                t(e)
            })
        }
    }, {
        "../errors": 47,
        "./_stream_duplex": 48,
        inherits: 138
    }],
    52: [function(e, t) {
        (function(i, n) {
            "use strict";

            function r(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    G(t, e)
                }
            }
            var o;
            t.exports = k, k.WritableState = E;
            var a = {
                    deprecate: e("util-deprecate")
                },
                s = e("./internal/streams/stream"),
                c = e("buffer").Buffer,
                f = n.Uint8Array || function() {};

            function h(e) {
                return c.from(e)
            }
            var u, d = e("./internal/streams/destroy"),
                l = e("./internal/streams/state").getHighWaterMark,
                p = e("../errors").codes,
                g = p.ERR_INVALID_ARG_TYPE,
                b = p.ERR_METHOD_NOT_IMPLEMENTED,
                m = p.ERR_MULTIPLE_CALLBACK,
                y = p.ERR_STREAM_CANNOT_PIPE,
                _ = p.ERR_STREAM_DESTROYED,
                v = p.ERR_STREAM_NULL_VALUES,
                w = p.ERR_STREAM_WRITE_AFTER_END,
                M = p.ERR_UNKNOWN_ENCODING,
                S = d.errorOrDestroy;

            function C() {}

            function E(t, i, n) {
                o = o || e("./_stream_duplex"), t = t || {}, "boolean" != typeof n && (n = i instanceof o), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = l(this, t, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var a = !1 === t.decodeStrings;
                this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    A(i, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this)
            }

            function k(t) {
                var i = this instanceof(o = o || e("./_stream_duplex"));
                if (!i && !u.call(k, this)) return new k(t);
                this._writableState = new E(t, this, i), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), s.call(this)
            }

            function P(e, t) {
                var n = new w;
                S(e, n), i.nextTick(t, n)
            }

            function I(e, t, n, r) {
                var o;
                return null === n ? o = new v : "string" == typeof n || t.objectMode || (o = new g("chunk", ["string", "Buffer"], n)), !o || (S(e, o), i.nextTick(r, o), !1)
            }

            function N(e, t, i) {
                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = c.from(t, i)), t
            }

            function R(e, t, i, n, r, o) {
                if (!i) {
                    var a = N(t, n, r);
                    n !== a && (i = !0, r = "buffer", n = a)
                }
                var s = t.objectMode ? 1 : n.length;
                t.length += s;
                var c = t.length < t.highWaterMark;
                if (c || (t.needDrain = !0), t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: r,
                        isBuf: i,
                        callback: o,
                        next: null
                    }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else B(e, t, !1, s, n, r, o);
                return c
            }

            function B(e, t, i, n, r, o, a) {
                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new _("write")) : i ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite), t.sync = !1
            }

            function x(e, t, n, r, o) {
                --t.pendingcb, n ? (i.nextTick(o, r), i.nextTick(z, e, t), e._writableState.errorEmitted = !0, S(e, r)) : (o(r), e._writableState.errorEmitted = !0, S(e, r), z(e, t))
            }

            function T(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function A(e, t) {
                var n = e._writableState,
                    r = n.sync,
                    o = n.writecb;
                if ("function" != typeof o) throw new m;
                if (T(n), t) x(e, n, r, t, o);
                else {
                    var a = j(n) || e.destroyed;
                    a || n.corked || n.bufferProcessing || !n.bufferedRequest || O(e, n), r ? i.nextTick(L, e, n, a, o) : L(e, n, a, o)
                }
            }

            function L(e, t, i, n) {
                i || D(e, t), t.pendingcb--, n(), z(e, t)
            }

            function D(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function O(e, t) {
                t.bufferProcessing = !0;
                var i = t.bufferedRequest;
                if (e._writev && i && i.next) {
                    var n = t.bufferedRequestCount,
                        o = new Array(n),
                        a = t.corkedRequestsFree;
                    a.entry = i;
                    for (var s = 0, c = !0; i;) o[s] = i, i.isBuf || (c = !1), i = i.next, s += 1;
                    o.allBuffers = c, B(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new r(t), t.bufferedRequestCount = 0
                } else {
                    for (; i;) {
                        var f = i.chunk,
                            h = i.encoding,
                            u = i.callback;
                        if (B(e, t, !1, t.objectMode ? 1 : f.length, f, h, u), i = i.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === i && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = i, t.bufferProcessing = !1
            }

            function j(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function U(e, t) {
                e._final(function(i) {
                    t.pendingcb--, i && S(e, i), t.prefinished = !0, e.emit("prefinish"), z(e, t)
                })
            }

            function F(e, t) {
                t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, i.nextTick(U, e, t)))
            }

            function z(e, t) {
                var i = j(t);
                if (i && (F(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                    var n = e._readableState;
                    (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                }
                return i
            }

            function q(e, t, n) {
                t.ending = !0, z(e, t), n && (t.finished ? i.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
            }

            function G(e, t, i) {
                var n = e.entry;
                for (e.entry = null; n;) {
                    var r = n.callback;
                    t.pendingcb--, r(i), n = n.next
                }
                t.corkedRequestsFree.next = e
            }
            e("inherits")(k, s), E.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(E.prototype, "buffer", {
                            get: a.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (u = Function.prototype[Symbol.hasInstance], Object.defineProperty(k, Symbol.hasInstance, {
                    value: function(e) {
                        return !!u.call(this, e) || this === k && e && e._writableState instanceof E
                    }
                })) : u = function(e) {
                    return e instanceof this
                }, k.prototype.pipe = function() {
                    S(this, new y)
                }, k.prototype.write = function(e, t, i) {
                    var n, r = this._writableState,
                        o = !1,
                        a = !r.objectMode && (n = e, c.isBuffer(n) || n instanceof f);
                    return a && !c.isBuffer(e) && (e = h(e)), "function" == typeof t && (i = t, t = null), a ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof i && (i = C), r.ending ? P(this, i) : (a || I(this, r, e, i)) && (r.pendingcb++, o = R(this, r, a, e, t, i)), o
                }, k.prototype.cork = function() {
                    this._writableState.corked++
                }, k.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || O(this, e))
                }, k.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new M(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(k.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(k.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), k.prototype._write = function(e, t, i) {
                    i(new b("_write()"))
                }, k.prototype._writev = null, k.prototype.end = function(e, t, i) {
                    var n = this._writableState;
                    return "function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || q(this, n, i), this
                }, Object.defineProperty(k.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(k.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), k.prototype.destroy = d.destroy, k.prototype._undestroy = d.undestroy, k.prototype._destroy = function(e, t) {
                    t(e)
                }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 47,
        "./_stream_duplex": 48,
        "./internal/streams/destroy": 55,
        "./internal/streams/state": 59,
        "./internal/streams/stream": 60,
        _process: 157,
        buffer: 65,
        inherits: 138,
        "util-deprecate": 195
    }],
    53: [function(e, t) {
        (function(i) {
            "use strict";
            var n;

            function r(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            var o = e("./end-of-stream"),
                a = Symbol("lastResolve"),
                s = Symbol("lastReject"),
                c = Symbol("error"),
                f = Symbol("ended"),
                h = Symbol("lastPromise"),
                u = Symbol("handlePromise"),
                d = Symbol("stream");

            function l(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function p(e) {
                var t = e[a];
                if (null !== t) {
                    var i = e[d].read();
                    null !== i && (e[h] = null, e[a] = null, e[s] = null, t(l(i, !1)))
                }
            }

            function g(e) {
                i.nextTick(p, e)
            }

            function b(e, t) {
                return function(i, n) {
                    e.then(function() {
                        t[f] ? i(l(void 0, !0)) : t[u](i, n)
                    }, n)
                }
            }
            var m = Object.getPrototypeOf(function() {}),
                y = Object.setPrototypeOf((r(n = {
                    get stream() {
                        return this[d]
                    },
                    next: function() {
                        var e = this,
                            t = this[c];
                        if (null !== t) return Promise.reject(t);
                        if (this[f]) return Promise.resolve(l(void 0, !0));
                        if (this[d].destroyed) return new Promise(function(t, n) {
                            i.nextTick(function() {
                                e[c] ? n(e[c]) : t(l(void 0, !0))
                            })
                        });
                        var n, r = this[h];
                        if (r) n = new Promise(b(r, this));
                        else {
                            var o = this[d].read();
                            if (null !== o) return Promise.resolve(l(o, !1));
                            n = new Promise(this[u])
                        }
                        return this[h] = n, n
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), r(n, "return", function() {
                    var e = this;
                    return new Promise(function(t, i) {
                        e[d].destroy(null, function(e) {
                            e ? i(e) : t(l(void 0, !0))
                        })
                    })
                }), n), m);
            t.exports = function(e) {
                var t, i = Object.create(y, (r(t = {}, d, {
                    value: e,
                    writable: !0
                }), r(t, a, {
                    value: null,
                    writable: !0
                }), r(t, s, {
                    value: null,
                    writable: !0
                }), r(t, c, {
                    value: null,
                    writable: !0
                }), r(t, f, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }), r(t, u, {
                    value: function(e, t) {
                        var n = i[d].read();
                        n ? (i[h] = null, i[a] = null, i[s] = null, e(l(n, !1))) : (i[a] = e, i[s] = t)
                    },
                    writable: !0
                }), t));
                return i[h] = null, o(e, function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = i[s];
                        return null !== t && (i[h] = null, i[a] = null, i[s] = null, t(e)), void(i[c] = e)
                    }
                    var n = i[a];
                    null !== n && (i[h] = null, i[a] = null, i[s] = null, n(l(void 0, !0))), i[f] = !0
                }), e.on("readable", g.bind(null, i)), i
            }
        }).call(this, e("_process"))
    }, {
        "./end-of-stream": 56,
        _process: 157
    }],
    54: [function(e, t) {
        "use strict";

        function i(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)
            }
            return i
        }

        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function r(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = e("buffer").Buffer,
            c = e("util").inspect,
            f = c && c.custom || "inspect";
        t.exports = function() {
            function e() {
                o(this, e), this.head = null, this.tail = null, this.length = 0
            }
            var t, i;
            return t = e, (i = [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null, this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, i = "" + t.data; t = t.next;) i += e + t.data;
                    return i
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length) return s.alloc(0);
                    for (var t, i, n, r = s.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, i = r, n = a, s.prototype.copy.call(t, i, n), a += o.data.length, o = o.next;
                    return r
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var i;
                    return e < this.head.data.length ? (i = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : i = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), i
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head,
                        i = 1,
                        n = t.data;
                    for (e -= n.length; t = t.next;) {
                        var r = t.data,
                            o = e > r.length ? r.length : e;
                        if (o === r.length ? n += r : n += r.slice(0, e), 0 == (e -= o)) {
                            o === r.length ? (++i, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = r.slice(o));
                            break
                        }++i
                    }
                    return this.length -= i, n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = s.allocUnsafe(e),
                        i = this.head,
                        n = 1;
                    for (i.data.copy(t), e -= i.data.length; i = i.next;) {
                        var r = i.data,
                            o = e > r.length ? r.length : e;
                        if (r.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                            o === r.length ? (++n, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = r.slice(o));
                            break
                        }++n
                    }
                    return this.length -= n, t
                }
            }, {
                key: f,
                value: function(e, t) {
                    return c(this, n({}, t, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && a(t.prototype, i), e
        }()
    }, {
        buffer: 65,
        util: 19
    }],
    55: [function(e, t) {
        (function(e) {
            "use strict";

            function i(e, t) {
                r(e, t), n(e)
            }

            function n(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function r(e, t) {
                e.emit("error", t)
            }
            t.exports = {
                destroy: function(t, o) {
                    var a = this,
                        s = this._readableState && this._readableState.destroyed,
                        c = this._writableState && this._writableState.destroyed;
                    return s || c ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(r, this, t)) : e.nextTick(r, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                        !o && t ? a._writableState ? a._writableState.errorEmitted ? e.nextTick(n, a) : (a._writableState.errorEmitted = !0, e.nextTick(i, a, t)) : e.nextTick(i, a, t) : o ? (e.nextTick(n, a), o(t)) : e.nextTick(n, a)
                    }), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(e, t) {
                    var i = e._readableState,
                        n = e._writableState;
                    i && i.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                }
            }
        }).call(this, e("_process"))
    }, {
        _process: 157
    }],
    56: [function(e, t) {
        "use strict";
        var i = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

        function n(e) {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    e.apply(this, n)
                }
            }
        }

        function r() {}

        function o(e) {
            return e.setHeader && "function" == typeof e.abort
        }
        t.exports = function e(t, a, s) {
            if ("function" == typeof a) return e(t, null, a);
            a || (a = {}), s = n(s || r);
            var c = a.readable || !1 !== a.readable && t.readable,
                f = a.writable || !1 !== a.writable && t.writable,
                h = function() {
                    t.writable || d()
                },
                u = t._writableState && t._writableState.finished,
                d = function() {
                    f = !1, u = !0, c || s.call(t)
                },
                l = t._readableState && t._readableState.endEmitted,
                p = function() {
                    c = !1, l = !0, f || s.call(t)
                },
                g = function(e) {
                    s.call(t, e)
                },
                b = function() {
                    var e;
                    return c && !l ? (t._readableState && t._readableState.ended || (e = new i), s.call(t, e)) : f && !u ? (t._writableState && t._writableState.ended || (e = new i), s.call(t, e)) : void 0
                },
                m = function() {
                    t.req.on("finish", d)
                };
            return o(t) ? (t.on("complete", d), t.on("abort", b), t.req ? m() : t.on("request", m)) : f && !t._writableState && (t.on("end", h), t.on("close", h)), t.on("end", p), t.on("finish", d), !1 !== a.error && t.on("error", g), t.on("close", b),
                function() {
                    t.removeListener("complete", d), t.removeListener("abort", b), t.removeListener("request", m), t.req && t.req.removeListener("finish", d), t.removeListener("end", h), t.removeListener("close", h), t.removeListener("finish", d), t.removeListener("end", p), t.removeListener("error", g), t.removeListener("close", b)
                }
        }
    }, {
        "../../../errors": 47
    }],
    57: [function(e, t) {
        t.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    }, {}],
    58: [function(e, t) {
        "use strict";
        var i;

        function n(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(void 0, arguments))
            }
        }
        var r = e("../../../errors").codes,
            o = r.ERR_MISSING_ARGS,
            a = r.ERR_STREAM_DESTROYED;

        function s(e) {
            if (e) throw e
        }

        function c(e) {
            return e.setHeader && "function" == typeof e.abort
        }

        function f(t, r, o, s) {
            s = n(s);
            var f = !1;
            t.on("close", function() {
                f = !0
            }), void 0 === i && (i = e("./end-of-stream")), i(t, {
                readable: r,
                writable: o
            }, function(e) {
                if (e) return s(e);
                f = !0, s()
            });
            var h = !1;
            return function(e) {
                if (!f && !h) return h = !0, c(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void s(e || new a("pipe"))
            }
        }

        function h(e) {
            e()
        }

        function u(e, t) {
            return e.pipe(t)
        }

        function d(e) {
            return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s
        }
        t.exports = function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var n, r = d(t);
            if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
            var a = t.map(function(e, i) {
                var o = i < t.length - 1;
                return f(e, o, i > 0, function(e) {
                    n || (n = e), e && a.forEach(h), o || (a.forEach(h), r(n))
                })
            });
            return t.reduce(u)
        }
    }, {
        "../../../errors": 47,
        "./end-of-stream": 56
    }],
    59: [function(e, t) {
        "use strict";
        var i = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;

        function n(e, t, i) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[i] : null
        }
        t.exports = {
            getHighWaterMark: function(e, t, r, o) {
                var a = n(t, o, r);
                if (null != a) {
                    if (!isFinite(a) || Math.floor(a) !== a || a < 0) throw new i(o ? r : "highWaterMark", a);
                    return Math.floor(a)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    }, {
        "../../../errors": 47
    }],
    60: [function(e, t) {
        t.exports = e("events").EventEmitter
    }, {
        events: 104
    }],
    61: [function(e, t, i) {
        (i = t.exports = e("./lib/_stream_readable.js")).Stream = i, i.Readable = i, i.Writable = e("./lib/_stream_writable.js"), i.Duplex = e("./lib/_stream_duplex.js"), i.Transform = e("./lib/_stream_transform.js"), i.PassThrough = e("./lib/_stream_passthrough.js"), i.finished = e("./lib/internal/streams/end-of-stream.js"), i.pipeline = e("./lib/internal/streams/pipeline.js")
    }, {
        "./lib/_stream_duplex.js": 48,
        "./lib/_stream_passthrough.js": 49,
        "./lib/_stream_readable.js": 50,
        "./lib/_stream_transform.js": 51,
        "./lib/_stream_writable.js": 52,
        "./lib/internal/streams/end-of-stream.js": 56,
        "./lib/internal/streams/pipeline.js": 58
    }],
    62: [function(e, t, i) {
        var n = e("buffer"),
            r = n.Buffer;

        function o(e, t) {
            for (var i in e) t[i] = e[i]
        }

        function a(e, t, i) {
            return r(e, t, i)
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = n : (o(n, i), i.Buffer = a), a.prototype = Object.create(r.prototype), o(r, a), a.from = function(e, t, i) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return r(e, t, i)
        }, a.alloc = function(e, t, i) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var n = r(e);
            return void 0 !== t ? "string" == typeof i ? n.fill(t, i) : n.fill(t) : n.fill(0), n
        }, a.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return r(e)
        }, a.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }, {
        buffer: 65
    }],
    63: [function(e, t, i) {
        "use strict";
        var n = e("safe-buffer").Buffer,
            r = n.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function o(e) {
            if (!e) return "utf8";
            for (var t;;) switch (e) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return e;
                default:
                    if (t) return;
                    e = ("" + e).toLowerCase(), t = !0
            }
        }

        function a(e) {
            var t = o(e);
            if ("string" != typeof t && (n.isEncoding === r || !r(e))) throw new Error("Unknown encoding: " + e);
            return t || e
        }

        function s(e) {
            var t;
            switch (this.encoding = a(e), this.encoding) {
                case "utf16le":
                    this.text = d, this.end = l, t = 4;
                    break;
                case "utf8":
                    this.fillLast = u, t = 4;
                    break;
                case "base64":
                    this.text = p, this.end = g, t = 3;
                    break;
                default:
                    return this.write = b, void(this.end = m)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
        }

        function c(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function f(e, t, i) {
            var n = t.length - 1;
            if (n < i) return 0;
            var r = c(t[n]);
            return r >= 0 ? (r > 0 && (e.lastNeed = r - 1), r) : --n < i || -2 === r ? 0 : (r = c(t[n])) >= 0 ? (r > 0 && (e.lastNeed = r - 2), r) : --n < i || -2 === r ? 0 : (r = c(t[n])) >= 0 ? (r > 0 && (2 === r ? r = 0 : e.lastNeed = r - 3), r) : 0
        }

        function h(e, t) {
            if (128 != (192 & t[0])) return e.lastNeed = 0, "\ufffd";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return e.lastNeed = 1, "\ufffd";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "\ufffd"
            }
        }

        function u(e) {
            var t = this.lastTotal - this.lastNeed,
                i = h(this, e);
            return void 0 !== i ? i : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function d(e, t) {
            if ((e.length - t) % 2 == 0) {
                var i = e.toString("utf16le", t);
                if (i) {
                    var n = i.charCodeAt(i.length - 1);
                    if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], i.slice(0, -1)
                }
                return i
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var i = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, i)
            }
            return t
        }

        function p(e, t) {
            var i = (e.length - t) % 3;
            return 0 === i ? e.toString("base64", t) : (this.lastNeed = 3 - i, this.lastTotal = 3, 1 === i ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - i))
        }

        function g(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function b(e) {
            return e.toString(this.encoding)
        }

        function m(e) {
            return e && e.length ? this.write(e) : ""
        }
        i.StringDecoder = s, s.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, i;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                i = this.lastNeed, this.lastNeed = 0
            } else i = 0;
            return i < e.length ? t ? t + this.text(e, i) : this.text(e, i) : t || ""
        }, s.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "\ufffd" : t
        }, s.prototype.text = function(e, t) {
            var i = f(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = i;
            var n = e.length - (i - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
        }, s.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, {
        "safe-buffer": 62
    }],
    64: [function(e, t) {
        (function(e) {
            t.exports = function(t, i) {
                for (var n = Math.min(t.length, i.length), r = new e(n), o = 0; o < n; ++o) r[o] = t[o] ^ i[o];
                return r
            }
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 65
    }],
    65: [function(e, t, i) {
        (function(t) {
            "use strict";
            var n = e("base64-js"),
                r = e("ieee754"),
                o = e("isarray");

            function a() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
            }

            function c(e, t, i) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, i);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return d(this, e)
                }
                return f(this, e, t, i)
            }

            function f(e, t, i, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? g(e, t, i, n) : "string" == typeof t ? l(e, t, i) : b(e, t)
            }

            function h(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function u(e, t, i, n) {
                return h(t), t <= 0 ? s(e, t) : void 0 !== i ? "string" == typeof n ? s(e, t).fill(i, n) : s(e, t).fill(i) : s(e, t)
            }

            function d(e, t) {
                if (h(t), e = s(e, t < 0 ? 0 : 0 | m(t)), !c.TYPED_ARRAY_SUPPORT)
                    for (var i = 0; i < t; ++i) e[i] = 0;
                return e
            }

            function l(e, t, i) {
                if ("string" == typeof i && "" !== i || (i = "utf8"), !c.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | y(t, i),
                    r = (e = s(e, n)).write(t, i);
                return r !== n && (e = e.slice(0, r)), e
            }

            function p(e, t) {
                var i = t.length < 0 ? 0 : 0 | m(t.length);
                e = s(e, i);
                for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
                return e
            }

            function g(e, t, i, n) {
                if (t.byteLength, i < 0 || t.byteLength < i) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, i) : new Uint8Array(t, i, n), c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = p(e, t), e
            }

            function b(e, t) {
                if (c.isBuffer(t)) {
                    var i = 0 | m(t.length);
                    return 0 === (e = s(e, i)).length ? e : (t.copy(e, 0, 0, i), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : p(e, t);
                    if ("Buffer" === t.type && o(t.data)) return p(e, t.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function m(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function y(e, t) {
                if (c.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var i = e.length;
                if (0 === i) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return i;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * i;
                    case "hex":
                        return i >>> 1;
                    case "base64":
                        return Y(e).length;
                    default:
                        if (n) return K(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function _(e, t, i) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
                if ((i >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return L(this, t, i);
                    case "utf8":
                    case "utf-8":
                        return R(this, t, i);
                    case "ascii":
                        return T(this, t, i);
                    case "latin1":
                    case "binary":
                        return A(this, t, i);
                    case "base64":
                        return N(this, t, i);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return D(this, t, i);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function v(e, t, i) {
                var n = e[t];
                e[t] = e[i], e[i] = n
            }

            function w(e, t, i, n, r) {
                if (0 === e.length) return -1;
                if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = r ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
                    if (r) return -1;
                    i = e.length - 1
                } else if (i < 0) {
                    if (!r) return -1;
                    i = 0
                }
                if ("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)) return 0 === t.length ? -1 : M(e, t, i, n, r);
                if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : M(e, [t], i, n, r);
                throw new TypeError("val must be string, number or Buffer")
            }

            function M(e, t, i, n, r) {
                var o, a = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, c /= 2, i /= 2
                }

                function f(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (r) {
                    var h = -1;
                    for (o = i; o < s; o++)
                        if (f(e, o) === f(t, -1 === h ? 0 : o - h)) {
                            if (-1 === h && (h = o), o - h + 1 === c) return h * a
                        } else -1 !== h && (o -= o - h), h = -1
                } else
                    for (i + c > s && (i = s - c), o = i; o >= 0; o--) {
                        for (var u = !0, d = 0; d < c; d++)
                            if (f(e, o + d) !== f(t, d)) {
                                u = !1;
                                break
                            }
                        if (u) return o
                    }
                return -1
            }

            function S(e, t, i, n) {
                i = Number(i) || 0;
                var r = e.length - i;
                n ? (n = Number(n)) > r && (n = r) : n = r;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var a = 0; a < n; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[i + a] = s
                }
                return a
            }

            function C(e, t, i, n) {
                return X(K(t, e.length - i), e, i, n)
            }

            function E(e, t, i, n) {
                return X(J(t), e, i, n)
            }

            function k(e, t, i, n) {
                return E(e, t, i, n)
            }

            function P(e, t, i, n) {
                return X(Y(t), e, i, n)
            }

            function I(e, t, i, n) {
                return X(Z(t, e.length - i), e, i, n)
            }

            function N(e, t, i) {
                return 0 === t && i === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, i))
            }

            function R(e, t, i) {
                i = Math.min(e.length, i);
                for (var n = [], r = t; r < i;) {
                    var o, a, s, c, f = e[r],
                        h = null,
                        u = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (r + u <= i) switch (u) {
                        case 1:
                            f < 128 && (h = f);
                            break;
                        case 2:
                            128 == (192 & (o = e[r + 1])) && (c = (31 & f) << 6 | 63 & o) > 127 && (h = c);
                            break;
                        case 3:
                            o = e[r + 1], a = e[r + 2], 128 == (192 & o) && 128 == (192 & a) && (c = (15 & f) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (h = c);
                            break;
                        case 4:
                            o = e[r + 1], a = e[r + 2], s = e[r + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & f) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (h = c)
                    }
                    null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), r += u
                }
                return x(n)
            }
            i.Buffer = c, i.SlowBuffer = function(e) {
                return +e != e && (e = 0), c.alloc(+e)
            }, i.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), i.kMaxLength = a(), c.poolSize = 8192, c._augment = function(e) {
                return e.__proto__ = c.prototype, e
            }, c.from = function(e, t, i) {
                return f(null, e, t, i)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function(e, t, i) {
                return u(null, e, t, i)
            }, c.allocUnsafe = function(e) {
                return d(null, e)
            }, c.allocUnsafeSlow = function(e) {
                return d(null, e)
            }, c.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, c.compare = function(e, t) {
                if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var i = e.length, n = t.length, r = 0, o = Math.min(i, n); r < o; ++r)
                    if (e[r] !== t[r]) {
                        i = e[r], n = t[r];
                        break
                    }
                return i < n ? -1 : n < i ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                var i;
                if (void 0 === t)
                    for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
                var n = c.allocUnsafe(t),
                    r = 0;
                for (i = 0; i < e.length; ++i) {
                    var a = e[i];
                    if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, r), r += a.length
                }
                return n
            }, c.byteLength = y, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) v(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : _.apply(this, arguments)
            }, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                var e = "",
                    t = i.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, c.prototype.compare = function(e, t, i, n, r) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === i && (i = e ? e.length : 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), t < 0 || i > e.length || n < 0 || r > this.length) throw new RangeError("out of range index");
                if (n >= r && t >= i) return 0;
                if (n >= r) return -1;
                if (t >= i) return 1;
                if (this === e) return 0;
                for (var o = (r >>>= 0) - (n >>>= 0), a = (i >>>= 0) - (t >>>= 0), s = Math.min(o, a), f = this.slice(n, r), h = e.slice(t, i), u = 0; u < s; ++u)
                    if (f[u] !== h[u]) {
                        o = f[u], a = h[u];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }, c.prototype.includes = function(e, t, i) {
                return -1 !== this.indexOf(e, t, i)
            }, c.prototype.indexOf = function(e, t, i) {
                return w(this, e, t, i, !0)
            }, c.prototype.lastIndexOf = function(e, t, i) {
                return w(this, e, t, i, !1)
            }, c.prototype.write = function(e, t, i, n) {
                if (void 0 === t) n = "utf8", i = this.length, t = 0;
                else if (void 0 === i && "string" == typeof t) n = t, i = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(i) ? (i |= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
                }
                var r = this.length - t;
                if ((void 0 === i || i > r) && (i = r), e.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return S(this, e, t, i);
                    case "utf8":
                    case "utf-8":
                        return C(this, e, t, i);
                    case "ascii":
                        return E(this, e, t, i);
                    case "latin1":
                    case "binary":
                        return k(this, e, t, i);
                    case "base64":
                        return P(this, e, t, i);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, e, t, i);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var B = 4096;

            function x(e) {
                var t = e.length;
                if (t <= B) return String.fromCharCode.apply(String, e);
                for (var i = "", n = 0; n < t;) i += String.fromCharCode.apply(String, e.slice(n, n += B));
                return i
            }

            function T(e, t, i) {
                var n = "";
                i = Math.min(e.length, i);
                for (var r = t; r < i; ++r) n += String.fromCharCode(127 & e[r]);
                return n
            }

            function A(e, t, i) {
                var n = "";
                i = Math.min(e.length, i);
                for (var r = t; r < i; ++r) n += String.fromCharCode(e[r]);
                return n
            }

            function L(e, t, i) {
                var n, r = e.length;
                (!t || t < 0) && (t = 0), (!i || i < 0 || i > r) && (i = r);
                for (var o = "", a = t; a < i; ++a) o += (n = e[a]) < 16 ? "0" + n.toString(16) : n.toString(16);
                return o
            }

            function D(e, t, i) {
                for (var n = e.slice(t, i), r = "", o = 0; o < n.length; o += 2) r += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return r
            }

            function O(e, t, i) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > i) throw new RangeError("Trying to access beyond buffer length")
            }

            function j(e, t, i, n, r, o) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
                if (i + n > e.length) throw new RangeError("Index out of range")
            }

            function U(e, t, i, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var r = 0, o = Math.min(e.length - i, 2); r < o; ++r) e[i + r] = (t & 255 << 8 * (n ? r : 1 - r)) >>> 8 * (n ? r : 1 - r)
            }

            function F(e, t, i, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var r = 0, o = Math.min(e.length - i, 4); r < o; ++r) e[i + r] = t >>> 8 * (n ? r : 3 - r) & 255
            }

            function z(e, t, i, n) {
                if (i + n > e.length) throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("Index out of range")
            }

            function q(e, t, i, n, o) {
                return o || z(e, 0, i, 4), r.write(e, t, i, n, 23, 4), i + 4
            }

            function G(e, t, i, n, o) {
                return o || z(e, 0, i, 8), r.write(e, t, i, n, 52, 8), i + 8
            }
            c.prototype.slice = function(e, t) {
                var i, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(i = this.subarray(e, t)).__proto__ = c.prototype;
                else {
                    var r = t - e;
                    i = new c(r, void 0);
                    for (var o = 0; o < r; ++o) i[o] = this[o + e]
                }
                return i
            }, c.prototype.readUIntLE = function(e, t, i) {
                e |= 0, t |= 0, i || O(e, t, this.length);
                for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256);) n += this[e + o] * r;
                return n
            }, c.prototype.readUIntBE = function(e, t, i) {
                e |= 0, t |= 0, i || O(e, t, this.length);
                for (var n = this[e + --t], r = 1; t > 0 && (r *= 256);) n += this[e + --t] * r;
                return n
            }, c.prototype.readUInt8 = function(e, t) {
                return t || O(e, 1, this.length), this[e]
            }, c.prototype.readUInt16LE = function(e, t) {
                return t || O(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUInt16BE = function(e, t) {
                return t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUInt32LE = function(e, t) {
                return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUInt32BE = function(e, t) {
                return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function(e, t, i) {
                e |= 0, t |= 0, i || O(e, t, this.length);
                for (var n = this[e], r = 1, o = 0; ++o < t && (r *= 256);) n += this[e + o] * r;
                return n >= (r *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, c.prototype.readIntBE = function(e, t, i) {
                e |= 0, t |= 0, i || O(e, t, this.length);
                for (var n = t, r = 1, o = this[e + --n]; n > 0 && (r *= 256);) o += this[e + --n] * r;
                return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, c.prototype.readInt8 = function(e, t) {
                return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                t || O(e, 2, this.length);
                var i = this[e] | this[e + 1] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, c.prototype.readInt16BE = function(e, t) {
                t || O(e, 2, this.length);
                var i = this[e + 1] | this[e] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, c.prototype.readInt32LE = function(e, t) {
                return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function(e, t) {
                return t || O(e, 4, this.length), r.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return t || O(e, 4, this.length), r.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return t || O(e, 8, this.length), r.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return t || O(e, 8, this.length), r.read(this, e, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(e, t, i, n) {
                e = +e, t |= 0, i |= 0, n || j(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
                var r = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < i && (r *= 256);) this[t + o] = e / r & 255;
                return t + i
            }, c.prototype.writeUIntBE = function(e, t, i, n) {
                e = +e, t |= 0, i |= 0, n || j(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
                var r = i - 1,
                    o = 1;
                for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
                return t + i
            }, c.prototype.writeUInt8 = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, c.prototype.writeUInt16LE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, c.prototype.writeUInt16BE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, c.prototype.writeUInt32LE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : F(this, e, t, !0), t + 4
            }, c.prototype.writeUInt32BE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : F(this, e, t, !1), t + 4
            }, c.prototype.writeIntLE = function(e, t, i, n) {
                if (e = +e, t |= 0, !n) {
                    var r = Math.pow(2, 8 * i - 1);
                    j(this, e, t, i, r - 1, -r)
                }
                var o = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++o < i && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + i
            }, c.prototype.writeIntBE = function(e, t, i, n) {
                if (e = +e, t |= 0, !n) {
                    var r = Math.pow(2, 8 * i - 1);
                    j(this, e, t, i, r - 1, -r)
                }
                var o = i - 1,
                    a = 1,
                    s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + i
            }, c.prototype.writeInt8 = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, c.prototype.writeInt16BE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, c.prototype.writeInt32LE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : F(this, e, t, !0), t + 4
            }, c.prototype.writeInt32BE = function(e, t, i) {
                return e = +e, t |= 0, i || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : F(this, e, t, !1), t + 4
            }, c.prototype.writeFloatLE = function(e, t, i) {
                return q(this, e, t, !0, i)
            }, c.prototype.writeFloatBE = function(e, t, i) {
                return q(this, e, t, !1, i)
            }, c.prototype.writeDoubleLE = function(e, t, i) {
                return G(this, e, t, !0, i)
            }, c.prototype.writeDoubleBE = function(e, t, i) {
                return G(this, e, t, !1, i)
            }, c.prototype.copy = function(e, t, i, n) {
                if (i || (i = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < i && (n = i), n === i) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i);
                var r, o = n - i;
                if (this === e && i < t && t < n)
                    for (r = o - 1; r >= 0; --r) e[r + t] = this[r + i];
                else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (r = 0; r < o; ++r) e[r + t] = this[r + i];
                else Uint8Array.prototype.set.call(e, this.subarray(i, i + o), t);
                return o
            }, c.prototype.fill = function(e, t, i, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === e.length) {
                        var r = e.charCodeAt(0);
                        r < 256 && (e = r)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
                if (i <= t) return this;
                var o;
                if (t >>>= 0, i = void 0 === i ? this.length : i >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < i; ++o) this[o] = e;
                else {
                    var a = c.isBuffer(e) ? e : K(new c(e, n).toString()),
                        s = a.length;
                    for (o = 0; o < i - t; ++o) this[o + t] = a[o % s]
                }
                return this
            };
            var V = /[^+\/0-9A-Za-z-_]/g;

            function H(e) {
                if ((e = W(e).replace(V, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }

            function W(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function K(e, t) {
                var i;
                t = t || 1 / 0;
                for (var n = e.length, r = null, o = [], a = 0; a < n; ++a) {
                    if ((i = e.charCodeAt(a)) > 55295 && i < 57344) {
                        if (!r) {
                            if (i > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            r = i;
                            continue
                        }
                        if (i < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), r = i;
                            continue
                        }
                        i = 65536 + (r - 55296 << 10 | i - 56320)
                    } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (r = null, i < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(i)
                    } else if (i < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(i >> 6 | 192, 63 & i | 128)
                    } else if (i < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                    } else {
                        if (!(i < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                    }
                }
                return o
            }

            function J(e) {
                for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
                return t
            }

            function Z(e, t) {
                for (var i, n, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (i = e.charCodeAt(a)) >> 8, r = i % 256, o.push(r), o.push(n);
                return o
            }

            function Y(e) {
                return n.toByteArray(H(e))
            }

            function X(e, t, i, n) {
                for (var r = 0; r < n && !(r + i >= t.length || r >= e.length); ++r) t[r + i] = e[r];
                return r
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 16,
        ieee754: 137,
        isarray: 66
    }],
    66: [function(e, t) {
        var i = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == i.call(e)
        }
    }, {}],
    67: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = e("stream").Transform,
            r = e("string_decoder").StringDecoder;

        function o(e) {
            n.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
        }
        e("inherits")(o, n), o.prototype.update = function(e, t, n) {
            "string" == typeof e && (e = i.from(e, t));
            var r = this._update(e);
            return this.hashMode ? this : (n && (r = this._toString(r, n)), r)
        }, o.prototype.setAutoPadding = function() {}, o.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state")
        }, o.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state")
        }, o.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state")
        }, o.prototype._transform = function(e, t, i) {
            var n;
            try {
                this.hashMode ? this._update(e) : this.push(this._update(e))
            } catch (r) {
                n = r
            } finally {
                i(n)
            }
        }, o.prototype._flush = function(e) {
            var t;
            try {
                this.push(this.__final())
            } catch (i) {
                t = i
            }
            e(t)
        }, o.prototype._finalOrDigest = function(e) {
            var t = this.__final() || i.alloc(0);
            return e && (t = this._toString(t, e, !0)), t
        }, o.prototype._toString = function(e, t, i) {
            if (this._decoder || (this._decoder = new r(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
            var n = this._decoder.write(e);
            return i && (n += this._decoder.end()), n
        }, t.exports = o
    }, {
        inherits: 138,
        "safe-buffer": 183,
        stream: 193,
        string_decoder: 194
    }],
    68: [function(e, t, i) {
        (function(e) {
            function t(e) {
                return Object.prototype.toString.call(e)
            }
            i.isArray = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
            }, i.isBoolean = function(e) {
                return "boolean" == typeof e
            }, i.isNull = function(e) {
                return null === e
            }, i.isNullOrUndefined = function(e) {
                return null == e
            }, i.isNumber = function(e) {
                return "number" == typeof e
            }, i.isString = function(e) {
                return "string" == typeof e
            }, i.isSymbol = function(e) {
                return "symbol" == typeof e
            }, i.isUndefined = function(e) {
                return void 0 === e
            }, i.isRegExp = function(e) {
                return "[object RegExp]" === t(e)
            }, i.isObject = function(e) {
                return "object" == typeof e && null !== e
            }, i.isDate = function(e) {
                return "[object Date]" === t(e)
            }, i.isError = function(e) {
                return "[object Error]" === t(e) || e instanceof Error
            }, i.isFunction = function(e) {
                return "function" == typeof e
            }, i.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, i.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        })
    }, {
        "../../is-buffer/index.js": 139
    }],
    69: [function(e, t) {
        (function(i) {
            var n = e("elliptic"),
                r = e("bn.js");
            t.exports = function(e) {
                return new a(e)
            };
            var o = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };

            function a(e) {
                this.curveType = o[e], this.curveType || (this.curveType = {
                    name: e
                }), this.curve = new n.ec(this.curveType.name), this.keys = void 0
            }

            function s(e, t, n) {
                Array.isArray(e) || (e = e.toArray());
                var r = new i(e);
                if (n && r.length < n) {
                    var o = new i(n - r.length);
                    o.fill(0), r = i.concat([o, r])
                }
                return t ? r.toString(t) : r
            }
            o.p224 = o.secp224r1, o.p256 = o.secp256r1 = o.prime256v1, o.p192 = o.secp192r1 = o.prime192v1, o.p384 = o.secp384r1, o.p521 = o.secp521r1, a.prototype.generateKeys = function(e, t) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t)
            }, a.prototype.computeSecret = function(e, t, n) {
                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength)
            }, a.prototype.getPublicKey = function(e, t) {
                var i = this.keys.getPublic("compressed" === t, !0);
                return "hybrid" === t && (i[i.length - 1] % 2 ? i[0] = 7 : i[0] = 6), s(i, e)
            }, a.prototype.getPrivateKey = function(e) {
                return s(this.keys.getPrivate(), e)
            }, a.prototype.setPublicKey = function(e, t) {
                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this.keys._importPublic(e), this
            }, a.prototype.setPrivateKey = function(e, t) {
                t = t || "utf8", i.isBuffer(e) || (e = new i(e, t));
                var n = new r(e);
                return n = n.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(n), this
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "bn.js": 70,
        buffer: 65,
        elliptic: 87
    }],
    70: [function(e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }, {
        buffer: 19,
        dup: 15
    }],
    71: [function(e, t) {
        "use strict";
        var i = e("inherits"),
            n = e("md5.js"),
            r = e("ripemd160"),
            o = e("sha.js"),
            a = e("cipher-base");

        function s(e) {
            a.call(this, "digest"), this._hash = e
        }
        i(s, a), s.prototype._update = function(e) {
            this._hash.update(e)
        }, s.prototype._final = function() {
            return this._hash.digest()
        }, t.exports = function(e) {
            return "md5" === (e = e.toLowerCase()) ? new n : "rmd160" === e || "ripemd160" === e ? new r : new s(o(e))
        }
    }, {
        "cipher-base": 67,
        inherits: 138,
        "md5.js": 140,
        ripemd160: 182,
        "sha.js": 186
    }],
    72: [function(e, t) {
        var i = e("md5.js");
        t.exports = function(e) {
            return (new i).update(e).digest()
        }
    }, {
        "md5.js": 140
    }],
    73: [function(e, t) {
        "use strict";
        var i = e("inherits"),
            n = e("./legacy"),
            r = e("cipher-base"),
            o = e("safe-buffer").Buffer,
            a = e("create-hash/md5"),
            s = e("ripemd160"),
            c = e("sha.js"),
            f = o.alloc(128);

        function h(e, t) {
            r.call(this, "digest"), "string" == typeof t && (t = o.from(t));
            var i = "sha512" === e || "sha384" === e ? 128 : 64;
            this._alg = e, this._key = t, t.length > i ? t = ("rmd160" === e ? new s : c(e)).update(t).digest() : t.length < i && (t = o.concat([t, f], i));
            for (var n = this._ipad = o.allocUnsafe(i), a = this._opad = o.allocUnsafe(i), h = 0; h < i; h++) n[h] = 54 ^ t[h], a[h] = 92 ^ t[h];
            this._hash = "rmd160" === e ? new s : c(e), this._hash.update(n)
        }
        i(h, r), h.prototype._update = function(e) {
            this._hash.update(e)
        }, h.prototype._final = function() {
            var e = this._hash.digest();
            return ("rmd160" === this._alg ? new s : c(this._alg)).update(this._opad).update(e).digest()
        }, t.exports = function(e, t) {
            return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new h("rmd160", t) : "md5" === e ? new n(a, t) : new h(e, t)
        }
    }, {
        "./legacy": 74,
        "cipher-base": 67,
        "create-hash/md5": 72,
        inherits: 138,
        ripemd160: 182,
        "safe-buffer": 183,
        "sha.js": 186
    }],
    74: [function(e, t) {
        "use strict";
        var i = e("inherits"),
            n = e("safe-buffer").Buffer,
            r = e("cipher-base"),
            o = n.alloc(128),
            a = 64;

        function s(e, t) {
            r.call(this, "digest"), "string" == typeof t && (t = n.from(t)), this._alg = e, this._key = t, t.length > a ? t = e(t) : t.length < a && (t = n.concat([t, o], a));
            for (var i = this._ipad = n.allocUnsafe(a), s = this._opad = n.allocUnsafe(a), c = 0; c < a; c++) i[c] = 54 ^ t[c], s[c] = 92 ^ t[c];
            this._hash = [i]
        }
        i(s, r), s.prototype._update = function(e) {
            this._hash.push(e)
        }, s.prototype._final = function() {
            var e = this._alg(n.concat(this._hash));
            return this._alg(n.concat([this._opad, e]))
        }, t.exports = s
    }, {
        "cipher-base": 67,
        inherits: 138,
        "safe-buffer": 183
    }],
    75: [function(e, t, i) {
        "use strict";
        i.randomBytes = i.rng = i.pseudoRandomBytes = i.prng = e("randombytes"), i.createHash = i.Hash = e("create-hash"), i.createHmac = i.Hmac = e("create-hmac");
        var n = e("browserify-sign/algos"),
            r = Object.keys(n),
            o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(r);
        i.getHashes = function() {
            return o
        };
        var a = e("pbkdf2");
        i.pbkdf2 = a.pbkdf2, i.pbkdf2Sync = a.pbkdf2Sync;
        var s = e("browserify-cipher");
        i.Cipher = s.Cipher, i.createCipher = s.createCipher, i.Cipheriv = s.Cipheriv, i.createCipheriv = s.createCipheriv, i.Decipher = s.Decipher, i.createDecipher = s.createDecipher, i.Decipheriv = s.Decipheriv, i.createDecipheriv = s.createDecipheriv, i.getCiphers = s.getCiphers, i.listCiphers = s.listCiphers;
        var c = e("diffie-hellman");
        i.DiffieHellmanGroup = c.DiffieHellmanGroup, i.createDiffieHellmanGroup = c.createDiffieHellmanGroup, i.getDiffieHellman = c.getDiffieHellman, i.createDiffieHellman = c.createDiffieHellman, i.DiffieHellman = c.DiffieHellman;
        var f = e("browserify-sign");
        i.createSign = f.createSign, i.Sign = f.Sign, i.createVerify = f.createVerify, i.Verify = f.Verify, i.createECDH = e("create-ecdh");
        var h = e("public-encrypt");
        i.publicEncrypt = h.publicEncrypt, i.privateEncrypt = h.privateEncrypt, i.publicDecrypt = h.publicDecrypt, i.privateDecrypt = h.privateDecrypt;
        var u = e("randomfill");
        i.randomFill = u.randomFill, i.randomFillSync = u.randomFillSync, i.createCredentials = function() {
            throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
        }, i.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        }
    }, {
        "browserify-cipher": 37,
        "browserify-sign": 44,
        "browserify-sign/algos": 41,
        "create-ecdh": 69,
        "create-hash": 71,
        "create-hmac": 73,
        "diffie-hellman": 82,
        pbkdf2: 150,
        "public-encrypt": 158,
        randombytes: 165,
        randomfill: 166
    }],
    76: [function(e, t, i) {
        "use strict";
        i.utils = e("./des/utils"), i.Cipher = e("./des/cipher"), i.DES = e("./des/des"), i.CBC = e("./des/cbc"), i.EDE = e("./des/ede")
    }, {
        "./des/cbc": 77,
        "./des/cipher": 78,
        "./des/des": 79,
        "./des/ede": 80,
        "./des/utils": 81
    }],
    77: [function(e, t, i) {
        "use strict";
        var n = e("minimalistic-assert"),
            r = e("inherits"),
            o = {};

        function a(e) {
            n.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8);
            for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
        }
        i.instantiate = function(e) {
            function t(t) {
                e.call(this, t), this._cbcInit()
            }
            r(t, e);
            for (var i = Object.keys(o), n = 0; n < i.length; n++) {
                var a = i[n];
                t.prototype[a] = o[a]
            }
            return t.create = function(e) {
                return new t(e)
            }, t
        }, o._cbcInit = function() {
            var e = new a(this.options.iv);
            this._cbcState = e
        }, o._update = function(e, t, i, n) {
            var r = this._cbcState,
                o = this.constructor.super_.prototype,
                a = r.iv;
            if ("encrypt" === this.type) {
                for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
                for (o._update.call(this, a, 0, i, n), s = 0; s < this.blockSize; s++) a[s] = i[n + s]
            } else {
                for (o._update.call(this, e, t, i, n), s = 0; s < this.blockSize; s++) i[n + s] ^= a[s];
                for (s = 0; s < this.blockSize; s++) a[s] = e[t + s]
            }
        }
    }, {
        inherits: 138,
        "minimalistic-assert": 143
    }],
    78: [function(e, t) {
        "use strict";
        var i = e("minimalistic-assert");

        function n(e) {
            this.options = e, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
        }
        t.exports = n, n.prototype._init = function() {}, n.prototype.update = function(e) {
            return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
        }, n.prototype._buffer = function(e, t) {
            for (var i = Math.min(this.buffer.length - this.bufferOff, e.length - t), n = 0; n < i; n++) this.buffer[this.bufferOff + n] = e[t + n];
            return this.bufferOff += i, i
        }, n.prototype._flushBuffer = function(e, t) {
            return this._update(this.buffer, 0, e, t), this.bufferOff = 0, this.blockSize
        }, n.prototype._updateEncrypt = function(e) {
            var t = 0,
                i = 0,
                n = (this.bufferOff + e.length) / this.blockSize | 0,
                r = new Array(n * this.blockSize);
            0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (i += this._flushBuffer(r, i)));
            for (var o = e.length - (e.length - t) % this.blockSize; t < o; t += this.blockSize) this._update(e, t, r, i), i += this.blockSize;
            for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
            return r
        }, n.prototype._updateDecrypt = function(e) {
            for (var t = 0, i = 0, n = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, r = new Array(n * this.blockSize); n > 0; n--) t += this._buffer(e, t), i += this._flushBuffer(r, i);
            return t += this._buffer(e, t), r
        }, n.prototype.final = function(e) {
            var t, i;
            return e && (t = this.update(e)), i = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), t ? t.concat(i) : i
        }, n.prototype._pad = function(e, t) {
            if (0 === t) return !1;
            for (; t < e.length;) e[t++] = 0;
            return !0
        }, n.prototype._finalEncrypt = function() {
            if (!this._pad(this.buffer, this.bufferOff)) return [];
            var e = new Array(this.blockSize);
            return this._update(this.buffer, 0, e, 0), e
        }, n.prototype._unpad = function(e) {
            return e
        }, n.prototype._finalDecrypt = function() {
            i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var e = new Array(this.blockSize);
            return this._flushBuffer(e, 0), this._unpad(e)
        }
    }, {
        "minimalistic-assert": 143
    }],
    79: [function(e, t) {
        "use strict";
        var i = e("minimalistic-assert"),
            n = e("inherits"),
            r = e("./utils"),
            o = e("./cipher");

        function a() {
            this.tmp = new Array(2), this.keys = null
        }

        function s(e) {
            o.call(this, e);
            var t = new a;
            this._desState = t, this.deriveKeys(t, e.key)
        }
        n(s, o), t.exports = s, s.create = function(e) {
            return new s(e)
        };
        var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        s.prototype.deriveKeys = function(e, t) {
            e.keys = new Array(32), i.equal(t.length, this.blockSize, "Invalid key length");
            var n = r.readUInt32BE(t, 0),
                o = r.readUInt32BE(t, 4);
            r.pc1(n, o, e.tmp, 0), n = e.tmp[0], o = e.tmp[1];
            for (var a = 0; a < e.keys.length; a += 2) {
                var s = c[a >>> 1];
                n = r.r28shl(n, s), o = r.r28shl(o, s), r.pc2(n, o, e.keys, a)
            }
        }, s.prototype._update = function(e, t, i, n) {
            var o = this._desState,
                a = r.readUInt32BE(e, t),
                s = r.readUInt32BE(e, t + 4);
            r.ip(a, s, o.tmp, 0), a = o.tmp[0], s = o.tmp[1], "encrypt" === this.type ? this._encrypt(o, a, s, o.tmp, 0) : this._decrypt(o, a, s, o.tmp, 0), a = o.tmp[0], s = o.tmp[1], r.writeUInt32BE(i, a, n), r.writeUInt32BE(i, s, n + 4)
        }, s.prototype._pad = function(e, t) {
            for (var i = e.length - t, n = t; n < e.length; n++) e[n] = i;
            return !0
        }, s.prototype._unpad = function(e) {
            for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) i.equal(e[n], t);
            return e.slice(0, e.length - t)
        }, s.prototype._encrypt = function(e, t, i, n, o) {
            for (var a = t, s = i, c = 0; c < e.keys.length; c += 2) {
                var f = e.keys[c],
                    h = e.keys[c + 1];
                r.expand(s, e.tmp, 0), f ^= e.tmp[0], h ^= e.tmp[1];
                var u = r.substitute(f, h),
                    d = s;
                s = (a ^ r.permute(u)) >>> 0, a = d
            }
            r.rip(s, a, n, o)
        }, s.prototype._decrypt = function(e, t, i, n, o) {
            for (var a = i, s = t, c = e.keys.length - 2; c >= 0; c -= 2) {
                var f = e.keys[c],
                    h = e.keys[c + 1];
                r.expand(a, e.tmp, 0), f ^= e.tmp[0], h ^= e.tmp[1];
                var u = r.substitute(f, h),
                    d = a;
                a = (s ^ r.permute(u)) >>> 0, s = d
            }
            r.rip(a, s, n, o)
        }
    }, {
        "./cipher": 78,
        "./utils": 81,
        inherits: 138,
        "minimalistic-assert": 143
    }],
    80: [function(e, t) {
        "use strict";
        var i = e("minimalistic-assert"),
            n = e("inherits"),
            r = e("./cipher"),
            o = e("./des");

        function a(e, t) {
            i.equal(t.length, 24, "Invalid key length");
            var n = t.slice(0, 8),
                r = t.slice(8, 16),
                a = t.slice(16, 24);
            this.ciphers = "encrypt" === e ? [o.create({
                type: "encrypt",
                key: n
            }), o.create({
                type: "decrypt",
                key: r
            }), o.create({
                type: "encrypt",
                key: a
            })] : [o.create({
                type: "decrypt",
                key: a
            }), o.create({
                type: "encrypt",
                key: r
            }), o.create({
                type: "decrypt",
                key: n
            })]
        }

        function s(e) {
            r.call(this, e);
            var t = new a(this.type, this.options.key);
            this._edeState = t
        }
        n(s, r), t.exports = s, s.create = function(e) {
            return new s(e)
        }, s.prototype._update = function(e, t, i, n) {
            var r = this._edeState;
            r.ciphers[0]._update(e, t, i, n), r.ciphers[1]._update(i, n, i, n), r.ciphers[2]._update(i, n, i, n)
        }, s.prototype._pad = o.prototype._pad, s.prototype._unpad = o.prototype._unpad
    }, {
        "./cipher": 78,
        "./des": 79,
        inherits: 138,
        "minimalistic-assert": 143
    }],
    81: [function(e, t, i) {
        "use strict";
        i.readUInt32BE = function(e, t) {
            return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
        }, i.writeUInt32BE = function(e, t, i) {
            e[0 + i] = t >>> 24, e[1 + i] = t >>> 16 & 255, e[2 + i] = t >>> 8 & 255, e[3 + i] = 255 & t
        }, i.ip = function(e, t, i, n) {
            for (var r = 0, o = 0, a = 6; a >= 0; a -= 2) {
                for (var s = 0; s <= 24; s += 8) r <<= 1, r |= t >>> s + a & 1;
                for (s = 0; s <= 24; s += 8) r <<= 1, r |= e >>> s + a & 1
            }
            for (a = 6; a >= 0; a -= 2) {
                for (s = 1; s <= 25; s += 8) o <<= 1, o |= t >>> s + a & 1;
                for (s = 1; s <= 25; s += 8) o <<= 1, o |= e >>> s + a & 1
            }
            i[n + 0] = r >>> 0, i[n + 1] = o >>> 0
        }, i.rip = function(e, t, i, n) {
            for (var r = 0, o = 0, a = 0; a < 4; a++)
                for (var s = 24; s >= 0; s -= 8) r <<= 1, r |= t >>> s + a & 1, r <<= 1, r |= e >>> s + a & 1;
            for (a = 4; a < 8; a++)
                for (s = 24; s >= 0; s -= 8) o <<= 1, o |= t >>> s + a & 1, o <<= 1, o |= e >>> s + a & 1;
            i[n + 0] = r >>> 0, i[n + 1] = o >>> 0
        }, i.pc1 = function(e, t, i, n) {
            for (var r = 0, o = 0, a = 7; a >= 5; a--) {
                for (var s = 0; s <= 24; s += 8) r <<= 1, r |= t >> s + a & 1;
                for (s = 0; s <= 24; s += 8) r <<= 1, r |= e >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8) r <<= 1, r |= t >> s + a & 1;
            for (a = 1; a <= 3; a++) {
                for (s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1;
                for (s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1;
            i[n + 0] = r >>> 0, i[n + 1] = o >>> 0
        }, i.r28shl = function(e, t) {
            return e << t & 268435455 | e >>> 28 - t
        };
        var n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        i.pc2 = function(e, t, i, r) {
            for (var o = 0, a = 0, s = n.length >>> 1, c = 0; c < s; c++) o <<= 1, o |= e >>> n[c] & 1;
            for (c = s; c < n.length; c++) a <<= 1, a |= t >>> n[c] & 1;
            i[r + 0] = o >>> 0, i[r + 1] = a >>> 0
        }, i.expand = function(e, t, i) {
            var n = 0,
                r = 0;
            n = (1 & e) << 5 | e >>> 27;
            for (var o = 23; o >= 15; o -= 4) n <<= 6, n |= e >>> o & 63;
            for (o = 11; o >= 3; o -= 4) r |= e >>> o & 63, r <<= 6;
            r |= (31 & e) << 1 | e >>> 31, t[i + 0] = n >>> 0, t[i + 1] = r >>> 0
        };
        var r = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        i.substitute = function(e, t) {
            for (var i = 0, n = 0; n < 4; n++) i <<= 4, i |= r[64 * n + (e >>> 18 - 6 * n & 63)];
            for (n = 0; n < 4; n++) i <<= 4, i |= r[256 + 64 * n + (t >>> 18 - 6 * n & 63)];
            return i >>> 0
        };
        var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        i.permute = function(e) {
            for (var t = 0, i = 0; i < o.length; i++) t <<= 1, t |= e >>> o[i] & 1;
            return t >>> 0
        }, i.padSplit = function(e, t, i) {
            for (var n = e.toString(2); n.length < t;) n = "0" + n;
            for (var r = [], o = 0; o < t; o += i) r.push(n.slice(o, o + i));
            return r.join(" ")
        }
    }, {}],
    82: [function(e, t, i) {
        (function(t) {
            var n = e("./lib/generatePrime"),
                r = e("./lib/primes.json"),
                o = e("./lib/dh"),
                a = {
                    binary: !0,
                    hex: !0,
                    base64: !0
                };
            i.DiffieHellmanGroup = i.createDiffieHellmanGroup = i.getDiffieHellman = function(e) {
                var i = new t(r[e].prime, "hex"),
                    n = new t(r[e].gen, "hex");
                return new o(i, n)
            }, i.createDiffieHellman = i.DiffieHellman = function e(i, r, s, c) {
                return t.isBuffer(r) || void 0 === a[r] ? e(i, "binary", r, s) : (r = r || "binary", c = c || "binary", s = s || new t([2]), t.isBuffer(s) || (s = new t(s, c)), "number" == typeof i ? new o(n(i, s), s, !0) : (t.isBuffer(i) || (i = new t(i, r)), new o(i, s, !0)))
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./lib/dh": 83,
        "./lib/generatePrime": 84,
        "./lib/primes.json": 85,
        buffer: 65
    }],
    83: [function(e, t) {
        (function(i) {
            var n = e("bn.js"),
                r = new(e("miller-rabin")),
                o = new n(24),
                a = new n(11),
                s = new n(10),
                c = new n(3),
                f = new n(7),
                h = e("./generatePrime"),
                u = e("randombytes");

            function d(e, t) {
                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this._pub = new n(e), this
            }

            function l(e, t) {
                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this._priv = new n(e), this
            }
            t.exports = b;
            var p = {};

            function g(e, t) {
                var i = t.toString("hex"),
                    n = [i, e.toString(16)].join("_");
                if (n in p) return p[n];
                var u, d = 0;
                if (e.isEven() || !h.simpleSieve || !h.fermatTest(e) || !r.test(e)) return d += 1, d += "02" === i || "05" === i ? 8 : 4, p[n] = d, d;
                switch (r.test(e.shrn(1)) || (d += 2), i) {
                    case "02":
                        e.mod(o).cmp(a) && (d += 8);
                        break;
                    case "05":
                        (u = e.mod(s)).cmp(c) && u.cmp(f) && (d += 8);
                        break;
                    default:
                        d += 4
                }
                return p[n] = d, d
            }

            function b(e, t, i) {
                this.setGenerator(t), this.__prime = new n(e), this._prime = n.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, i ? (this.setPublicKey = d, this.setPrivateKey = l) : this._primeCode = 8
            }

            function m(e, t) {
                var n = new i(e.toArray());
                return t ? n.toString(t) : n
            }
            Object.defineProperty(b.prototype, "verifyError", {
                enumerable: !0,
                get: function() {
                    return "number" != typeof this._primeCode && (this._primeCode = g(this.__prime, this.__gen)), this._primeCode
                }
            }), b.prototype.generateKeys = function() {
                return this._priv || (this._priv = new n(u(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, b.prototype.computeSecret = function(e) {
                var t = (e = (e = new n(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
                    r = new i(t.toArray()),
                    o = this.getPrime();
                if (r.length < o.length) {
                    var a = new i(o.length - r.length);
                    a.fill(0), r = i.concat([a, r])
                }
                return r
            }, b.prototype.getPublicKey = function(e) {
                return m(this._pub, e)
            }, b.prototype.getPrivateKey = function(e) {
                return m(this._priv, e)
            }, b.prototype.getPrime = function(e) {
                return m(this.__prime, e)
            }, b.prototype.getGenerator = function(e) {
                return m(this._gen, e)
            }, b.prototype.setGenerator = function(e, t) {
                return t = t || "utf8", i.isBuffer(e) || (e = new i(e, t)), this.__gen = e, this._gen = new n(e), this
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./generatePrime": 84,
        "bn.js": 86,
        buffer: 65,
        "miller-rabin": 141,
        randombytes: 165
    }],
    84: [function(e, t) {
        var i = e("randombytes");
        t.exports = m, m.simpleSieve = g, m.fermatTest = b;
        var n = e("bn.js"),
            r = new n(24),
            o = new(e("miller-rabin")),
            a = new n(1),
            s = new n(2),
            c = new n(5),
            f = (new n(16), new n(8), new n(10)),
            h = new n(3),
            u = (new n(7), new n(11)),
            d = new n(4),
            l = (new n(12), null);

        function p() {
            if (null !== l) return l;
            var e = [];
            e[0] = 2;
            for (var t = 1, i = 3; i < 1048576; i += 2) {
                for (var n = Math.ceil(Math.sqrt(i)), r = 0; r < t && e[r] <= n && i % e[r] != 0; r++);
                t !== r && e[r] <= n || (e[t++] = i)
            }
            return l = e, e
        }

        function g(e) {
            for (var t = p(), i = 0; i < t.length; i++)
                if (0 === e.modn(t[i])) return 0 === e.cmpn(t[i]);
            return !0
        }

        function b(e) {
            var t = n.mont(e);
            return 0 === s.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
        }

        function m(e, t) {
            if (e < 16) return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
            var l, p;
            for (t = new n(t);;) {
                for (l = new n(i(Math.ceil(e / 8))); l.bitLength() > e;) l.ishrn(1);
                if (l.isEven() && l.iadd(a), l.testn(1) || l.iadd(s), t.cmp(s)) {
                    if (!t.cmp(c))
                        for (; l.mod(f).cmp(h);) l.iadd(d)
                } else
                    for (; l.mod(r).cmp(u);) l.iadd(d);
                if (g(p = l.shrn(1)) && g(l) && b(p) && b(l) && o.test(p) && o.test(l)) return l
            }
        }
    }, {
        "bn.js": 86,
        "miller-rabin": 141,
        randombytes: 165
    }],
    85: [function(e, t) {
        t.exports = {
            modp1: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
            },
            modp2: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
            },
            modp5: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
            },
            modp14: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
            },
            modp15: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
            },
            modp16: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
            },
            modp17: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
            },
            modp18: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
            }
        }
    }, {}],
    86: [function(e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }, {
        buffer: 19,
        dup: 15
    }],
    87: [function(e, t, i) {
        "use strict";
        var n = i;
        n.version = e("../package.json").version, n.utils = e("./elliptic/utils"), n.rand = e("brorand"), n.curve = e("./elliptic/curve"), n.curves = e("./elliptic/curves"), n.ec = e("./elliptic/ec"), n.eddsa = e("./elliptic/eddsa")
    }, {
        "../package.json": 103,
        "./elliptic/curve": 90,
        "./elliptic/curves": 93,
        "./elliptic/ec": 94,
        "./elliptic/eddsa": 97,
        "./elliptic/utils": 101,
        brorand: 18
    }],
    88: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("../utils"),
            r = n.getNAF,
            o = n.getJSF,
            a = n.assert;

        function s(e, t) {
            this.type = e, this.p = new i(t.p, 16), this.red = t.prime ? i.red(t.prime) : i.mont(this.p), this.zero = new i(0).toRed(this.red), this.one = new i(1).toRed(this.red), this.two = new i(2).toRed(this.red), this.n = t.n && new i(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
            var n = this.n && this.p.div(this.n);
            !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
        }

        function c(e, t) {
            this.curve = e, this.type = t, this.precomputed = null
        }
        t.exports = s, s.prototype.point = function() {
            throw new Error("Not implemented")
        }, s.prototype.validate = function() {
            throw new Error("Not implemented")
        }, s.prototype._fixedNafMul = function(e, t) {
            a(e.precomputed);
            var i = e._getDoubles(),
                n = r(t, 1, this._bitLength),
                o = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
            o /= 3;
            var s, c, f = [];
            for (s = 0; s < n.length; s += i.step) {
                c = 0;
                for (var h = s + i.step - 1; h >= s; h--) c = (c << 1) + n[h];
                f.push(c)
            }
            for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = o; l > 0; l--) {
                for (s = 0; s < f.length; s++)(c = f[s]) === l ? d = d.mixedAdd(i.points[s]) : c === -l && (d = d.mixedAdd(i.points[s].neg()));
                u = u.add(d)
            }
            return u.toP()
        }, s.prototype._wnafMul = function(e, t) {
            var i = 4,
                n = e._getNAFPoints(i);
            i = n.wnd;
            for (var o = n.points, s = r(t, i, this._bitLength), c = this.jpoint(null, null, null), f = s.length - 1; f >= 0; f--) {
                for (var h = 0; f >= 0 && 0 === s[f]; f--) h++;
                if (f >= 0 && h++, c = c.dblp(h), f < 0) break;
                var u = s[f];
                a(0 !== u), c = "affine" === e.type ? u > 0 ? c.mixedAdd(o[u - 1 >> 1]) : c.mixedAdd(o[-u - 1 >> 1].neg()) : u > 0 ? c.add(o[u - 1 >> 1]) : c.add(o[-u - 1 >> 1].neg())
            }
            return "affine" === e.type ? c.toP() : c
        }, s.prototype._wnafMulAdd = function(e, t, i, n, a) {
            var s, c, f, h = this._wnafT1,
                u = this._wnafT2,
                d = this._wnafT3,
                l = 0;
            for (s = 0; s < n; s++) {
                var p = (f = t[s])._getNAFPoints(e);
                h[s] = p.wnd, u[s] = p.points
            }
            for (s = n - 1; s >= 1; s -= 2) {
                var g = s - 1,
                    b = s;
                if (1 === h[g] && 1 === h[b]) {
                    var m = [t[g], null, null, t[b]];
                    0 === t[g].y.cmp(t[b].y) ? (m[1] = t[g].add(t[b]), m[2] = t[g].toJ().mixedAdd(t[b].neg())) : 0 === t[g].y.cmp(t[b].y.redNeg()) ? (m[1] = t[g].toJ().mixedAdd(t[b]), m[2] = t[g].add(t[b].neg())) : (m[1] = t[g].toJ().mixedAdd(t[b]), m[2] = t[g].toJ().mixedAdd(t[b].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        _ = o(i[g], i[b]);
                    for (l = Math.max(_[0].length, l), d[g] = new Array(l), d[b] = new Array(l), c = 0; c < l; c++) {
                        var v = 0 | _[0][c],
                            w = 0 | _[1][c];
                        d[g][c] = y[3 * (v + 1) + (w + 1)], d[b][c] = 0, u[g] = m
                    }
                } else d[g] = r(i[g], h[g], this._bitLength), d[b] = r(i[b], h[b], this._bitLength), l = Math.max(d[g].length, l), l = Math.max(d[b].length, l)
            }
            var M = this.jpoint(null, null, null),
                S = this._wnafT4;
            for (s = l; s >= 0; s--) {
                for (var C = 0; s >= 0;) {
                    var E = !0;
                    for (c = 0; c < n; c++) S[c] = 0 | d[c][s], 0 !== S[c] && (E = !1);
                    if (!E) break;
                    C++, s--
                }
                if (s >= 0 && C++, M = M.dblp(C), s < 0) break;
                for (c = 0; c < n; c++) {
                    var k = S[c];
                    0 !== k && (k > 0 ? f = u[c][k - 1 >> 1] : k < 0 && (f = u[c][-k - 1 >> 1].neg()), M = "affine" === f.type ? M.mixedAdd(f) : M.add(f))
                }
            }
            for (s = 0; s < n; s++) u[s] = null;
            return a ? M : M.toP()
        }, s.BasePoint = c, c.prototype.eq = function() {
            throw new Error("Not implemented")
        }, c.prototype.validate = function() {
            return this.curve.validate(this)
        }, s.prototype.decodePoint = function(e, t) {
            e = n.toArray(e, t);
            var i = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * i) return 6 === e[0] ? a(e[e.length - 1] % 2 == 0) : 7 === e[0] && a(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + i), e.slice(1 + i, 1 + 2 * i));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === i) return this.pointFromX(e.slice(1, 1 + i), 3 === e[0]);
            throw new Error("Unknown point format")
        }, c.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }, c.prototype._encode = function(e) {
            var t = this.curve.p.byteLength(),
                i = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", t))
        }, c.prototype.encode = function(e, t) {
            return n.encode(this._encode(t), e)
        }, c.prototype.precompute = function(e) {
            if (this.precomputed) return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
        }, c.prototype._hasDoubles = function(e) {
            if (!this.precomputed) return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }, c.prototype._getDoubles = function(e, t) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            for (var i = [this], n = this, r = 0; r < t; r += e) {
                for (var o = 0; o < e; o++) n = n.dbl();
                i.push(n)
            }
            return {
                step: e,
                points: i
            }
        }, c.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            for (var t = [this], i = (1 << e) - 1, n = 1 === i ? null : this.dbl(), r = 1; r < i; r++) t[r] = t[r - 1].add(n);
            return {
                wnd: e,
                points: t
            }
        }, c.prototype._getBeta = function() {
            return null
        }, c.prototype.dblp = function(e) {
            for (var t = this, i = 0; i < e; i++) t = t.dbl();
            return t
        }
    }, {
        "../utils": 101,
        "bn.js": 102
    }],
    89: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("bn.js"),
            r = e("inherits"),
            o = e("./base"),
            a = i.assert;

        function s(e) {
            this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, o.call(this, "edwards", e), this.a = new n(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new n(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new n(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), a(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
        }

        function c(e, t, i, r, a) {
            o.BasePoint.call(this, e, "projective"), null === t && null === i && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new n(t, 16), this.y = new n(i, 16), this.z = r ? new n(r, 16) : this.curve.one, this.t = a && new n(a, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        r(s, o), t.exports = s, s.prototype._mulA = function(e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }, s.prototype._mulC = function(e) {
            return this.oneC ? e : this.c.redMul(e)
        }, s.prototype.jpoint = function(e, t, i, n) {
            return this.point(e, t, i, n)
        }, s.prototype.pointFromX = function(e, t) {
            (e = new n(e, 16)).red || (e = e.toRed(this.red));
            var i = e.redSqr(),
                r = this.c2.redSub(this.a.redMul(i)),
                o = this.one.redSub(this.c2.redMul(this.d).redMul(i)),
                a = r.redMul(o.redInvm()),
                s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
            var c = s.fromRed().isOdd();
            return (t && !c || !t && c) && (s = s.redNeg()), this.point(e, s)
        }, s.prototype.pointFromY = function(e, t) {
            (e = new n(e, 16)).red || (e = e.toRed(this.red));
            var i = e.redSqr(),
                r = i.redSub(this.c2),
                o = i.redMul(this.d).redMul(this.c2).redSub(this.a),
                a = r.redMul(o.redInvm());
            if (0 === a.cmp(this.zero)) {
                if (t) throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
            return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
        }, s.prototype.validate = function(e) {
            if (e.isInfinity()) return !0;
            e.normalize();
            var t = e.x.redSqr(),
                i = e.y.redSqr(),
                n = t.redMul(this.a).redAdd(i),
                r = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(i)));
            return 0 === n.cmp(r)
        }, r(c, o.BasePoint), s.prototype.pointFromJSON = function(e) {
            return c.fromJSON(this, e)
        }, s.prototype.point = function(e, t, i, n) {
            return new c(this, e, t, i, n)
        }, c.fromJSON = function(e, t) {
            return new c(e, t[0], t[1], t[2])
        }, c.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, c.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }, c.prototype._extDbl = function() {
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                i = this.z.redSqr();
            i = i.redIAdd(i);
            var n = this.curve._mulA(e),
                r = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                o = n.redAdd(t),
                a = o.redSub(i),
                s = n.redSub(t),
                c = r.redMul(a),
                f = o.redMul(s),
                h = r.redMul(s),
                u = a.redMul(o);
            return this.curve.point(c, f, u, h)
        }, c.prototype._projDbl = function() {
            var e, t, i, n, r, o, a = this.x.redAdd(this.y).redSqr(),
                s = this.x.redSqr(),
                c = this.y.redSqr();
            if (this.curve.twisted) {
                var f = (n = this.curve._mulA(s)).redAdd(c);
                this.zOne ? (e = a.redSub(s).redSub(c).redMul(f.redSub(this.curve.two)), t = f.redMul(n.redSub(c)), i = f.redSqr().redSub(f).redSub(f)) : (r = this.z.redSqr(), o = f.redSub(r).redISub(r), e = a.redSub(s).redISub(c).redMul(o), t = f.redMul(n.redSub(c)), i = f.redMul(o))
            } else n = s.redAdd(c), r = this.curve._mulC(this.z).redSqr(), o = n.redSub(r).redSub(r), e = this.curve._mulC(a.redISub(n)).redMul(o), t = this.curve._mulC(n).redMul(s.redISub(c)), i = n.redMul(o);
            return this.curve.point(e, t, i)
        }, c.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }, c.prototype._extAdd = function(e) {
            var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                i = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                n = this.t.redMul(this.curve.dd).redMul(e.t),
                r = this.z.redMul(e.z.redAdd(e.z)),
                o = i.redSub(t),
                a = r.redSub(n),
                s = r.redAdd(n),
                c = i.redAdd(t),
                f = o.redMul(a),
                h = s.redMul(c),
                u = o.redMul(c),
                d = a.redMul(s);
            return this.curve.point(f, h, d, u)
        }, c.prototype._projAdd = function(e) {
            var t, i, n = this.z.redMul(e.z),
                r = n.redSqr(),
                o = this.x.redMul(e.x),
                a = this.y.redMul(e.y),
                s = this.curve.d.redMul(o).redMul(a),
                c = r.redSub(s),
                f = r.redAdd(s),
                h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
                u = n.redMul(c).redMul(h);
            return this.curve.twisted ? (t = n.redMul(f).redMul(a.redSub(this.curve._mulA(o))), i = c.redMul(f)) : (t = n.redMul(f).redMul(a.redSub(o)), i = this.curve._mulC(c).redMul(f)), this.curve.point(u, t, i)
        }, c.prototype.add = function(e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }, c.prototype.mul = function(e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }, c.prototype.mulAdd = function(e, t, i) {
            return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !1)
        }, c.prototype.jmulAdd = function(e, t, i) {
            return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !0)
        }, c.prototype.normalize = function() {
            if (this.zOne) return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
        }, c.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }, c.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }, c.prototype.getY = function() {
            return this.normalize(), this.y.fromRed()
        }, c.prototype.eq = function(e) {
            return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
        }, c.prototype.eqXToP = function(e) {
            var t = e.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t)) return !0;
            for (var i = e.clone(), n = this.curve.redN.redMul(this.z);;) {
                if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
            }
        }, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add
    }, {
        "../utils": 101,
        "./base": 88,
        "bn.js": 102,
        inherits: 138
    }],
    90: [function(e, t, i) {
        "use strict";
        var n = i;
        n.base = e("./base"), n.short = e("./short"), n.mont = e("./mont"), n.edwards = e("./edwards")
    }, {
        "./base": 88,
        "./edwards": 89,
        "./mont": 91,
        "./short": 92
    }],
    91: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("inherits"),
            r = e("./base"),
            o = e("../utils");

        function a(e) {
            r.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }

        function s(e, t, n) {
            r.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        n(a, r), t.exports = a, a.prototype.validate = function(e) {
            var t = e.normalize().x,
                i = t.redSqr(),
                n = i.redMul(t).redAdd(i.redMul(this.a)).redAdd(t);
            return 0 === n.redSqrt().redSqr().cmp(n)
        }, n(s, r.BasePoint), a.prototype.decodePoint = function(e, t) {
            return this.point(o.toArray(e, t), 1)
        }, a.prototype.point = function(e, t) {
            return new s(this, e, t)
        }, a.prototype.pointFromJSON = function(e) {
            return s.fromJSON(this, e)
        }, s.prototype.precompute = function() {}, s.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }, s.fromJSON = function(e, t) {
            return new s(e, t[0], t[1] || e.one)
        }, s.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, s.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }, s.prototype.dbl = function() {
            var e = this.x.redAdd(this.z).redSqr(),
                t = this.x.redSub(this.z).redSqr(),
                i = e.redSub(t),
                n = e.redMul(t),
                r = i.redMul(t.redAdd(this.curve.a24.redMul(i)));
            return this.curve.point(n, r)
        }, s.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }, s.prototype.diffAdd = function(e, t) {
            var i = this.x.redAdd(this.z),
                n = this.x.redSub(this.z),
                r = e.x.redAdd(e.z),
                o = e.x.redSub(e.z).redMul(i),
                a = r.redMul(n),
                s = t.z.redMul(o.redAdd(a).redSqr()),
                c = t.x.redMul(o.redISub(a).redSqr());
            return this.curve.point(s, c)
        }, s.prototype.mul = function(e) {
            for (var t = e.clone(), i = this, n = this.curve.point(null, null), r = []; 0 !== t.cmpn(0); t.iushrn(1)) r.push(t.andln(1));
            for (var o = r.length - 1; o >= 0; o--) 0 === r[o] ? (i = i.diffAdd(n, this), n = n.dbl()) : (n = i.diffAdd(n, this), i = i.dbl());
            return n
        }, s.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }, s.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }, s.prototype.eq = function(e) {
            return 0 === this.getX().cmp(e.getX())
        }, s.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
        }, s.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }
    }, {
        "../utils": 101,
        "./base": 88,
        "bn.js": 102,
        inherits: 138
    }],
    92: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("bn.js"),
            r = e("inherits"),
            o = e("./base"),
            a = i.assert;

        function s(e) {
            o.call(this, "short", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
        }

        function c(e, t, i, r) {
            o.BasePoint.call(this, e, "affine"), null === t && null === i ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n(t, 16), this.y = new n(i, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
        }

        function f(e, t, i, r) {
            o.BasePoint.call(this, e, "jacobian"), null === t && null === i && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n(0)) : (this.x = new n(t, 16), this.y = new n(i, 16), this.z = new n(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
        }
        r(s, o), t.exports = s, s.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, i;
                if (e.beta) t = new n(e.beta, 16).toRed(this.red);
                else {
                    var r = this._getEndoRoots(this.p);
                    t = (t = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red)
                }
                if (e.lambda) i = new n(e.lambda, 16);
                else {
                    var o = this._getEndoRoots(this.n);
                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? i = o[0] : (i = o[1], a(0 === this.g.mul(i).x.cmp(this.g.x.redMul(t))))
                }
                return {
                    beta: t,
                    lambda: i,
                    basis: e.basis ? e.basis.map(function(e) {
                        return {
                            a: new n(e.a, 16),
                            b: new n(e.b, 16)
                        }
                    }) : this._getEndoBasis(i)
                }
            }
        }, s.prototype._getEndoRoots = function(e) {
            var t = e === this.p ? this.red : n.mont(e),
                i = new n(2).toRed(t).redInvm(),
                r = i.redNeg(),
                o = new n(3).toRed(t).redNeg().redSqrt().redMul(i);
            return [r.redAdd(o).fromRed(), r.redSub(o).fromRed()]
        }, s.prototype._getEndoBasis = function(e) {
            for (var t, i, r, o, a, s, c, f, h, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, l = this.n.clone(), p = new n(1), g = new n(0), b = new n(0), m = new n(1), y = 0; 0 !== d.cmpn(0);) {
                var _ = l.div(d);
                f = l.sub(_.mul(d)), h = b.sub(_.mul(p));
                var v = m.sub(_.mul(g));
                if (!r && f.cmp(u) < 0) t = c.neg(), i = p, r = f.neg(), o = h;
                else if (r && 2 == ++y) break;
                c = f, l = d, d = f, b = p, p = h, m = g, g = v
            }
            a = f.neg(), s = h;
            var w = r.sqr().add(o.sqr());
            return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t, s = i), r.negative && (r = r.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
                a: r,
                b: o
            }, {
                a: a,
                b: s
            }]
        }, s.prototype._endoSplit = function(e) {
            var t = this.endo.basis,
                i = t[0],
                n = t[1],
                r = n.b.mul(e).divRound(this.n),
                o = i.b.neg().mul(e).divRound(this.n),
                a = r.mul(i.a),
                s = o.mul(n.a),
                c = r.mul(i.b),
                f = o.mul(n.b);
            return {
                k1: e.sub(a).sub(s),
                k2: c.add(f).neg()
            }
        }, s.prototype.pointFromX = function(e, t) {
            (e = new n(e, 16)).red || (e = e.toRed(this.red));
            var i = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                r = i.redSqrt();
            if (0 !== r.redSqr().redSub(i).cmp(this.zero)) throw new Error("invalid point");
            var o = r.fromRed().isOdd();
            return (t && !o || !t && o) && (r = r.redNeg()), this.point(e, r)
        }, s.prototype.validate = function(e) {
            if (e.inf) return !0;
            var t = e.x,
                i = e.y,
                n = this.a.redMul(t),
                r = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
            return 0 === i.redSqr().redISub(r).cmpn(0)
        }, s.prototype._endoWnafMulAdd = function(e, t, i) {
            for (var n = this._endoWnafT1, r = this._endoWnafT2, o = 0; o < e.length; o++) {
                var a = this._endoSplit(t[o]),
                    s = e[o],
                    c = s._getBeta();
                a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), c = c.neg(!0)), n[2 * o] = s, n[2 * o + 1] = c, r[2 * o] = a.k1, r[2 * o + 1] = a.k2
            }
            for (var f = this._wnafMulAdd(1, n, r, 2 * o, i), h = 0; h < 2 * o; h++) n[h] = null, r[h] = null;
            return f
        }, r(c, o.BasePoint), s.prototype.point = function(e, t, i) {
            return new c(this, e, t, i)
        }, s.prototype.pointFromJSON = function(e, t) {
            return c.fromJSON(this, e, t)
        }, c.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta) return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var i = this.curve,
                        n = function(e) {
                            return i.point(e.x.redMul(i.endo.beta), e.y)
                        };
                    e.beta = t, t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(n)
                        }
                    }
                }
                return t
            }
        }, c.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }, c.fromJSON = function(e, t, i) {
            "string" == typeof t && (t = JSON.parse(t));
            var n = e.point(t[0], t[1], i);
            if (!t[2]) return n;

            function r(t) {
                return e.point(t[0], t[1], i)
            }
            var o = t[2];
            return n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [n].concat(o.doubles.points.map(r))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [n].concat(o.naf.points.map(r))
                }
            }, n
        }, c.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }, c.prototype.isInfinity = function() {
            return this.inf
        }, c.prototype.add = function(e) {
            if (this.inf) return e;
            if (e.inf) return this;
            if (this.eq(e)) return this.dbl();
            if (this.neg().eq(e)) return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var i = t.redSqr().redISub(this.x).redISub(e.x),
                n = t.redMul(this.x.redSub(i)).redISub(this.y);
            return this.curve.point(i, n)
        }, c.prototype.dbl = function() {
            if (this.inf) return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0)) return this.curve.point(null, null);
            var t = this.curve.a,
                i = this.x.redSqr(),
                n = e.redInvm(),
                r = i.redAdd(i).redIAdd(i).redIAdd(t).redMul(n),
                o = r.redSqr().redISub(this.x.redAdd(this.x)),
                a = r.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, a)
        }, c.prototype.getX = function() {
            return this.x.fromRed()
        }, c.prototype.getY = function() {
            return this.y.fromRed()
        }, c.prototype.mul = function(e) {
            return e = new n(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }, c.prototype.mulAdd = function(e, t, i) {
            var n = [this, t],
                r = [e, i];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, r) : this.curve._wnafMulAdd(1, n, r, 2)
        }, c.prototype.jmulAdd = function(e, t, i) {
            var n = [this, t],
                r = [e, i];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, r, !0) : this.curve._wnafMulAdd(1, n, r, 2, !0)
        }, c.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }, c.prototype.neg = function(e) {
            if (this.inf) return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var i = this.precomputed,
                    n = function(e) {
                        return e.neg()
                    };
                t.precomputed = {
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: i.naf.points.map(n)
                    },
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: i.doubles.points.map(n)
                    }
                }
            }
            return t
        }, c.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }, r(f, o.BasePoint), s.prototype.jpoint = function(e, t, i) {
            return new f(this, e, t, i)
        }, f.prototype.toP = function() {
            if (this.isInfinity()) return this.curve.point(null, null);
            var e = this.z.redInvm(),
                t = e.redSqr(),
                i = this.x.redMul(t),
                n = this.y.redMul(t).redMul(e);
            return this.curve.point(i, n)
        }, f.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }, f.prototype.add = function(e) {
            if (this.isInfinity()) return e;
            if (e.isInfinity()) return this;
            var t = e.z.redSqr(),
                i = this.z.redSqr(),
                n = this.x.redMul(t),
                r = e.x.redMul(i),
                o = this.y.redMul(t.redMul(e.z)),
                a = e.y.redMul(i.redMul(this.z)),
                s = n.redSub(r),
                c = o.redSub(a);
            if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var f = s.redSqr(),
                h = f.redMul(s),
                u = n.redMul(f),
                d = c.redSqr().redIAdd(h).redISub(u).redISub(u),
                l = c.redMul(u.redISub(d)).redISub(o.redMul(h)),
                p = this.z.redMul(e.z).redMul(s);
            return this.curve.jpoint(d, l, p)
        }, f.prototype.mixedAdd = function(e) {
            if (this.isInfinity()) return e.toJ();
            if (e.isInfinity()) return this;
            var t = this.z.redSqr(),
                i = this.x,
                n = e.x.redMul(t),
                r = this.y,
                o = e.y.redMul(t).redMul(this.z),
                a = i.redSub(n),
                s = r.redSub(o);
            if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = a.redSqr(),
                f = c.redMul(a),
                h = i.redMul(c),
                u = s.redSqr().redIAdd(f).redISub(h).redISub(h),
                d = s.redMul(h.redISub(u)).redISub(r.redMul(f)),
                l = this.z.redMul(a);
            return this.curve.jpoint(u, d, l)
        }, f.prototype.dblp = function(e) {
            if (0 === e) return this;
            if (this.isInfinity()) return this;
            if (!e) return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
                var i = this;
                for (t = 0; t < e; t++) i = i.dbl();
                return i
            }
            var n = this.curve.a,
                r = this.curve.tinv,
                o = this.x,
                a = this.y,
                s = this.z,
                c = s.redSqr().redSqr(),
                f = a.redAdd(a);
            for (t = 0; t < e; t++) {
                var h = o.redSqr(),
                    u = f.redSqr(),
                    d = u.redSqr(),
                    l = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(c)),
                    p = o.redMul(u),
                    g = l.redSqr().redISub(p.redAdd(p)),
                    b = p.redISub(g),
                    m = l.redMul(b);
                m = m.redIAdd(m).redISub(d);
                var y = f.redMul(s);
                t + 1 < e && (c = c.redMul(d)), o = g, s = y, f = m
            }
            return this.curve.jpoint(o, f.redMul(r), s)
        }, f.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }, f.prototype._zeroDbl = function() {
            var e, t, i;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    r = this.y.redSqr(),
                    o = r.redSqr(),
                    a = this.x.redAdd(r).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n),
                    c = s.redSqr().redISub(a).redISub(a),
                    f = o.redIAdd(o);
                f = (f = f.redIAdd(f)).redIAdd(f), e = c, t = s.redMul(a.redISub(c)).redISub(f), i = this.y.redAdd(this.y)
            } else {
                var h = this.x.redSqr(),
                    u = this.y.redSqr(),
                    d = u.redSqr(),
                    l = this.x.redAdd(u).redSqr().redISub(h).redISub(d);
                l = l.redIAdd(l);
                var p = h.redAdd(h).redIAdd(h),
                    g = p.redSqr(),
                    b = d.redIAdd(d);
                b = (b = b.redIAdd(b)).redIAdd(b), e = g.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(b), i = (i = this.y.redMul(this.z)).redIAdd(i)
            }
            return this.curve.jpoint(e, t, i)
        }, f.prototype._threeDbl = function() {
            var e, t, i;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    r = this.y.redSqr(),
                    o = r.redSqr(),
                    a = this.x.redAdd(r).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                    c = s.redSqr().redISub(a).redISub(a);
                e = c;
                var f = o.redIAdd(o);
                f = (f = f.redIAdd(f)).redIAdd(f), t = s.redMul(a.redISub(c)).redISub(f), i = this.y.redAdd(this.y)
            } else {
                var h = this.z.redSqr(),
                    u = this.y.redSqr(),
                    d = this.x.redMul(u),
                    l = this.x.redSub(h).redMul(this.x.redAdd(h));
                l = l.redAdd(l).redIAdd(l);
                var p = d.redIAdd(d),
                    g = (p = p.redIAdd(p)).redAdd(p);
                e = l.redSqr().redISub(g), i = this.y.redAdd(this.z).redSqr().redISub(u).redISub(h);
                var b = u.redSqr();
                b = (b = (b = b.redIAdd(b)).redIAdd(b)).redIAdd(b), t = l.redMul(p.redISub(e)).redISub(b)
            }
            return this.curve.jpoint(e, t, i)
        }, f.prototype._dbl = function() {
            var e = this.curve.a,
                t = this.x,
                i = this.y,
                n = this.z,
                r = n.redSqr().redSqr(),
                o = t.redSqr(),
                a = i.redSqr(),
                s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(r)),
                c = t.redAdd(t),
                f = (c = c.redIAdd(c)).redMul(a),
                h = s.redSqr().redISub(f.redAdd(f)),
                u = f.redISub(h),
                d = a.redSqr();
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = s.redMul(u).redISub(d),
                p = i.redAdd(i).redMul(n);
            return this.curve.jpoint(h, l, p)
        }, f.prototype.trpl = function() {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                i = this.z.redSqr(),
                n = t.redSqr(),
                r = e.redAdd(e).redIAdd(e),
                o = r.redSqr(),
                a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
                c = n.redIAdd(n);
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var f = r.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c),
                h = t.redMul(f);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var u = this.x.redMul(s).redISub(h);
            u = (u = u.redIAdd(u)).redIAdd(u);
            var d = this.y.redMul(f.redMul(c.redISub(f)).redISub(a.redMul(s)));
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = this.z.redAdd(a).redSqr().redISub(i).redISub(s);
            return this.curve.jpoint(u, d, l)
        }, f.prototype.mul = function(e, t) {
            return e = new n(e, t), this.curve._wnafMul(this, e)
        }, f.prototype.eq = function(e) {
            if ("affine" === e.type) return this.eq(e.toJ());
            if (this === e) return !0;
            var t = this.z.redSqr(),
                i = e.z.redSqr();
            if (0 !== this.x.redMul(i).redISub(e.x.redMul(t)).cmpn(0)) return !1;
            var n = t.redMul(this.z),
                r = i.redMul(e.z);
            return 0 === this.y.redMul(r).redISub(e.y.redMul(n)).cmpn(0)
        }, f.prototype.eqXToP = function(e) {
            var t = this.z.redSqr(),
                i = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(i)) return !0;
            for (var n = e.clone(), r = this.curve.redN.redMul(t);;) {
                if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                if (i.redIAdd(r), 0 === this.x.cmp(i)) return !0
            }
        }, f.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }, f.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    }, {
        "../utils": 101,
        "./base": 88,
        "bn.js": 102,
        inherits: 138
    }],
    93: [function(e, t, i) {
        "use strict";
        var n, r = i,
            o = e("hash.js"),
            a = e("./curve"),
            s = e("./utils").assert;

        function c(e) {
            "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function f(e, t) {
            Object.defineProperty(r, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var i = new c(t);
                    return Object.defineProperty(r, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: i
                    }), i
                }
            })
        }
        r.PresetCurve = c, f("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: o.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), f("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: o.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), f("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: o.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), f("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: o.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), f("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: o.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), f("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: o.sha256,
            gRed: !1,
            g: ["9"]
        }), f("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: o.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            n = e("./precomputed/secp256k1")
        } catch (h) {
            n = void 0
        }
        f("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: o.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
        })
    }, {
        "./curve": 90,
        "./precomputed/secp256k1": 100,
        "./utils": 101,
        "hash.js": 124
    }],
    94: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("hmac-drbg"),
            r = e("../utils"),
            o = e("../curves"),
            a = e("brorand"),
            s = r.assert,
            c = e("./key"),
            f = e("./signature");

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            "string" == typeof e && (s(Object.prototype.hasOwnProperty.call(o, e), "Unknown curve " + e), e = o[e]), e instanceof o.PresetCurve && (e = {
                curve: e
            }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
        }
        t.exports = h, h.prototype.keyPair = function(e) {
            return new c(this, e)
        }, h.prototype.keyFromPrivate = function(e, t) {
            return c.fromPrivate(this, e, t)
        }, h.prototype.keyFromPublic = function(e, t) {
            return c.fromPublic(this, e, t)
        }, h.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var t = new n({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || "utf8",
                    entropy: e.entropy || a(this.hash.hmacStrength),
                    entropyEnc: e.entropy && e.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), o = this.n.sub(new i(2));;) {
                var s = new i(t.generate(r));
                if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
            }
        }, h.prototype._truncateToN = function(e, t) {
            var i = 8 * e.byteLength() - this.n.bitLength();
            return i > 0 && (e = e.ushrn(i)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }, h.prototype.sign = function(e, t, r, o) {
            "object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new i(e, 16));
            for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), c = e.toArray("be", a), h = new n({
                    hash: this.hash,
                    entropy: s,
                    nonce: c,
                    pers: o.pers,
                    persEnc: o.persEnc || "utf8"
                }), u = this.n.sub(new i(1)), d = 0;; d++) {
                var l = o.k ? o.k(d) : new i(h.generate(this.n.byteLength()));
                if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)) {
                    var p = this.g.mul(l);
                    if (!p.isInfinity()) {
                        var g = p.getX(),
                            b = g.umod(this.n);
                        if (0 !== b.cmpn(0)) {
                            var m = l.invm(this.n).mul(b.mul(t.getPrivate()).iadd(e));
                            if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                var y = (p.getY().isOdd() ? 1 : 0) | (0 !== g.cmp(b) ? 2 : 0);
                                return o.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), y ^= 1), new f({
                                    r: b,
                                    s: m,
                                    recoveryParam: y
                                })
                            }
                        }
                    }
                }
            }
        }, h.prototype.verify = function(e, t, n, r) {
            e = this._truncateToN(new i(e, 16)), n = this.keyFromPublic(n, r);
            var o = (t = new f(t, "hex")).r,
                a = t.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
            var s, c = a.invm(this.n),
                h = c.mul(e).umod(this.n),
                u = c.mul(o).umod(this.n);
            return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(h, n.getPublic(), u)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(h, n.getPublic(), u)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
        }, h.prototype.recoverPubKey = function(e, t, n, r) {
            s((3 & n) === n, "The recovery param is more than two bits"), t = new f(t, r);
            var o = this.n,
                a = new i(e),
                c = t.r,
                h = t.s,
                u = 1 & n,
                d = n >> 1;
            if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
            c = d ? this.curve.pointFromX(c.add(this.curve.n), u) : this.curve.pointFromX(c, u);
            var l = t.r.invm(o),
                p = o.sub(a).mul(l).umod(o),
                g = h.mul(l).umod(o);
            return this.g.mulAdd(p, c, g)
        }, h.prototype.getKeyRecoveryParam = function(e, t, i, n) {
            if (null !== (t = new f(t, n)).recoveryParam) return t.recoveryParam;
            for (var r = 0; r < 4; r++) {
                var o;
                try {
                    o = this.recoverPubKey(e, t, r)
                } catch (e) {
                    continue
                }
                if (o.eq(i)) return r
            }
            throw new Error("Unable to find valid recovery factor")
        }
    }, {
        "../curves": 93,
        "../utils": 101,
        "./key": 95,
        "./signature": 96,
        "bn.js": 102,
        brorand: 18,
        "hmac-drbg": 136
    }],
    95: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("../utils").assert;

        function r(e, t) {
            this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        t.exports = r, r.fromPublic = function(e, t, i) {
            return t instanceof r ? t : new r(e, {
                pub: t,
                pubEnc: i
            })
        }, r.fromPrivate = function(e, t, i) {
            return t instanceof r ? t : new r(e, {
                priv: t,
                privEnc: i
            })
        }, r.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }, r.prototype.getPublic = function(e, t) {
            return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
        }, r.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }, r.prototype._importPrivate = function(e, t) {
            this.priv = new i(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
        }, r.prototype._importPublic = function(e, t) {
            if (e.x || e.y) return "mont" === this.ec.curve.type ? n(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || n(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }, r.prototype.derive = function(e) {
            return e.validate() || n(e.validate(), "public point not validated"), e.mul(this.priv).getX()
        }, r.prototype.sign = function(e, t, i) {
            return this.ec.sign(e, this, t, i)
        }, r.prototype.verify = function(e, t) {
            return this.ec.verify(e, t, this)
        }, r.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    }, {
        "../utils": 101,
        "bn.js": 102
    }],
    96: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("../utils"),
            r = n.assert;

        function o(e, t) {
            if (e instanceof o) return e;
            this._importDER(e, t) || (r(e.r && e.s, "Signature without r or s"), this.r = new i(e.r, 16), this.s = new i(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }

        function a() {
            this.place = 0
        }

        function s(e, t) {
            var i = e[t.place++];
            if (!(128 & i)) return i;
            var n = 15 & i;
            if (0 === n || n > 4) return !1;
            for (var r = 0, o = 0, a = t.place; o < n; o++, a++) r <<= 8, r |= e[a], r >>>= 0;
            return !(r <= 127) && (t.place = a, r)
        }

        function c(e) {
            for (var t = 0, i = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < i;) t++;
            return 0 === t ? e : e.slice(t)
        }

        function f(e, t) {
            if (t < 128) e.push(t);
            else {
                var i = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | i); --i;) e.push(t >>> (i << 3) & 255);
                e.push(t)
            }
        }
        t.exports = o, o.prototype._importDER = function(e, t) {
            e = n.toArray(e, t);
            var r = new a;
            if (48 !== e[r.place++]) return !1;
            var o = s(e, r);
            if (!1 === o) return !1;
            if (o + r.place !== e.length) return !1;
            if (2 !== e[r.place++]) return !1;
            var c = s(e, r);
            if (!1 === c) return !1;
            var f = e.slice(r.place, c + r.place);
            if (r.place += c, 2 !== e[r.place++]) return !1;
            var h = s(e, r);
            if (!1 === h) return !1;
            if (e.length !== h + r.place) return !1;
            var u = e.slice(r.place, h + r.place);
            if (0 === f[0]) {
                if (!(128 & f[1])) return !1;
                f = f.slice(1)
            }
            if (0 === u[0]) {
                if (!(128 & u[1])) return !1;
                u = u.slice(1)
            }
            return this.r = new i(f), this.s = new i(u), this.recoveryParam = null, !0
        }, o.prototype.toDER = function(e) {
            var t = this.r.toArray(),
                i = this.s.toArray();
            for (128 & t[0] && (t = [0].concat(t)), 128 & i[0] && (i = [0].concat(i)), t = c(t), i = c(i); !(i[0] || 128 & i[1]);) i = i.slice(1);
            var r = [2];
            f(r, t.length), (r = r.concat(t)).push(2), f(r, i.length);
            var o = r.concat(i),
                a = [48];
            return f(a, o.length), a = a.concat(o), n.encode(a, e)
        }
    }, {
        "../utils": 101,
        "bn.js": 102
    }],
    97: [function(e, t) {
        "use strict";
        var i = e("hash.js"),
            n = e("../curves"),
            r = e("../utils"),
            o = r.assert,
            a = r.parseBytes,
            s = e("./key"),
            c = e("./signature");

        function f(e) {
            if (o("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof f)) return new f(e);
            e = n[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = i.sha512
        }
        t.exports = f, f.prototype.sign = function(e, t) {
            e = a(e);
            var i = this.keyFromSecret(t),
                n = this.hashInt(i.messagePrefix(), e),
                r = this.g.mul(n),
                o = this.encodePoint(r),
                s = this.hashInt(o, i.pubBytes(), e).mul(i.priv()),
                c = n.add(s).umod(this.curve.n);
            return this.makeSignature({
                R: r,
                S: c,
                Rencoded: o
            })
        }, f.prototype.verify = function(e, t, i) {
            e = a(e), t = this.makeSignature(t);
            var n = this.keyFromPublic(i),
                r = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                o = this.g.mul(t.S());
            return t.R().add(n.pub().mul(r)).eq(o)
        }, f.prototype.hashInt = function() {
            for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
            return r.intFromLE(e.digest()).umod(this.curve.n)
        }, f.prototype.keyFromPublic = function(e) {
            return s.fromPublic(this, e)
        }, f.prototype.keyFromSecret = function(e) {
            return s.fromSecret(this, e)
        }, f.prototype.makeSignature = function(e) {
            return e instanceof c ? e : new c(this, e)
        }, f.prototype.encodePoint = function(e) {
            var t = e.getY().toArray("le", this.encodingLength);
            return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
        }, f.prototype.decodePoint = function(e) {
            var t = (e = r.parseBytes(e)).length - 1,
                i = e.slice(0, t).concat(-129 & e[t]),
                n = 0 != (128 & e[t]),
                o = r.intFromLE(i);
            return this.curve.pointFromY(o, n)
        }, f.prototype.encodeInt = function(e) {
            return e.toArray("le", this.encodingLength)
        }, f.prototype.decodeInt = function(e) {
            return r.intFromLE(e)
        }, f.prototype.isPoint = function(e) {
            return e instanceof this.pointClass
        }
    }, {
        "../curves": 93,
        "../utils": 101,
        "./key": 98,
        "./signature": 99,
        "hash.js": 124
    }],
    98: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = i.assert,
            r = i.parseBytes,
            o = i.cachedProperty;

        function a(e, t) {
            this.eddsa = e, this._secret = r(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = r(t.pub)
        }
        a.fromPublic = function(e, t) {
            return t instanceof a ? t : new a(e, {
                pub: t
            })
        }, a.fromSecret = function(e, t) {
            return t instanceof a ? t : new a(e, {
                secret: t
            })
        }, a.prototype.secret = function() {
            return this._secret
        }, o(a, "pubBytes", function() {
            return this.eddsa.encodePoint(this.pub())
        }), o(a, "pub", function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }), o(a, "privBytes", function() {
            var e = this.eddsa,
                t = this.hash(),
                i = e.encodingLength - 1,
                n = t.slice(0, e.encodingLength);
            return n[0] &= 248, n[i] &= 127, n[i] |= 64, n
        }), o(a, "priv", function() {
            return this.eddsa.decodeInt(this.privBytes())
        }), o(a, "hash", function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }), o(a, "messagePrefix", function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }), a.prototype.sign = function(e) {
            return n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
        }, a.prototype.verify = function(e, t) {
            return this.eddsa.verify(e, t, this)
        }, a.prototype.getSecret = function(e) {
            return n(this._secret, "KeyPair is public only"), i.encode(this.secret(), e)
        }, a.prototype.getPublic = function(e) {
            return i.encode(this.pubBytes(), e)
        }, t.exports = a
    }, {
        "../utils": 101
    }],
    99: [function(e, t) {
        "use strict";
        var i = e("bn.js"),
            n = e("../utils"),
            r = n.assert,
            o = n.cachedProperty,
            a = n.parseBytes;

        function s(e, t) {
            this.eddsa = e, "object" != typeof t && (t = a(t)), Array.isArray(t) && (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }), r(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof i && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
        }
        o(s, "S", function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }), o(s, "R", function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }), o(s, "Rencoded", function() {
            return this.eddsa.encodePoint(this.R())
        }), o(s, "Sencoded", function() {
            return this.eddsa.encodeInt(this.S())
        }), s.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }, s.prototype.toHex = function() {
            return n.encode(this.toBytes(), "hex").toUpperCase()
        }, t.exports = s
    }, {
        "../utils": 101,
        "bn.js": 102
    }],
    100: [function(e, t) {
        t.exports = {
            doubles: {
                step: 4,
                points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ]
            }
        }
    }, {}],
    101: [function(e, t, i) {
        "use strict";
        var n = i,
            r = e("bn.js"),
            o = e("minimalistic-assert"),
            a = e("minimalistic-crypto-utils");
        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function(e, t, i) {
            var n = new Array(Math.max(e.bitLength(), i) + 1);
            n.fill(0);
            for (var r = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
                var s, c = o.andln(r - 1);
                o.isOdd() ? (s = c > (r >> 1) - 1 ? (r >> 1) - c : c, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1)
            }
            return n
        }, n.getJSF = function(e, t) {
            var i = [
                [],
                []
            ];
            e = e.clone(), t = t.clone();
            for (var n, r = 0, o = 0; e.cmpn(-r) > 0 || t.cmpn(-o) > 0;) {
                var a, s, c = e.andln(3) + r & 3,
                    f = t.andln(3) + o & 3;
                3 === c && (c = -1), 3 === f && (f = -1), a = 0 == (1 & c) ? 0 : 3 != (n = e.andln(7) + r & 7) && 5 !== n || 2 !== f ? c : -c, i[0].push(a), s = 0 == (1 & f) ? 0 : 3 != (n = t.andln(7) + o & 7) && 5 !== n || 2 !== c ? f : -f, i[1].push(s), 2 * r === a + 1 && (r = 1 - r), 2 * o === s + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1)
            }
            return i
        }, n.cachedProperty = function(e, t, i) {
            var n = "_" + t;
            e.prototype[t] = function() {
                return void 0 !== this[n] ? this[n] : this[n] = i.call(this)
            }
        }, n.parseBytes = function(e) {
            return "string" == typeof e ? n.toArray(e, "hex") : e
        }, n.intFromLE = function(e) {
            return new r(e, "hex", "le")
        }
    }, {
        "bn.js": 102,
        "minimalistic-assert": 143,
        "minimalistic-crypto-utils": 144
    }],
    102: [function(e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }, {
        buffer: 19,
        dup: 15
    }],
    103: [function(e, t) {
        t.exports = {
            _from: "elliptic@^6.5.3",
            _id: "elliptic@6.5.4",
            _inBundle: !1,
            _integrity: "sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==",
            _location: "/elliptic",
            _phantomChildren: {},
            _requested: {
                type: "range",
                registry: !0,
                raw: "elliptic@^6.5.3",
                name: "elliptic",
                escapedName: "elliptic",
                rawSpec: "^6.5.3",
                saveSpec: null,
                fetchSpec: "^6.5.3"
            },
            _requiredBy: ["/browserify-sign", "/create-ecdh"],
            _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.5.4.tgz",
            _shasum: "da37cebd31e79a1367e941b592ed1fbebd58abbb",
            _spec: "elliptic@^6.5.3",
            _where: "C:\\Users\\nantas\\fireball-x\\fireball_2.4.5\\dist\\resources\\app\\node_modules\\browserify-sign",
            author: {
                name: "Fedor Indutny",
                email: "fedor@indutny.com"
            },
            bugs: {
                url: "https://github.com/indutny/elliptic/issues"
            },
            bundleDependencies: !1,
            dependencies: {
                "bn.js": "^4.11.9",
                brorand: "^1.1.0",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.1",
                inherits: "^2.0.4",
                "minimalistic-assert": "^1.0.1",
                "minimalistic-crypto-utils": "^1.0.1"
            },
            deprecated: !1,
            description: "EC cryptography",
            devDependencies: {
                brfs: "^2.0.2",
                coveralls: "^3.1.0",
                eslint: "^7.6.0",
                grunt: "^1.2.1",
                "grunt-browserify": "^5.3.0",
                "grunt-cli": "^1.3.2",
                "grunt-contrib-connect": "^3.0.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-uglify": "^5.0.0",
                "grunt-mocha-istanbul": "^5.0.2",
                "grunt-saucelabs": "^9.0.1",
                istanbul: "^0.4.5",
                mocha: "^8.0.1"
            },
            files: ["lib"],
            homepage: "https://github.com/indutny/elliptic",
            keywords: ["EC", "Elliptic", "curve", "Cryptography"],
            license: "MIT",
            main: "lib/elliptic.js",
            name: "elliptic",
            repository: {
                type: "git",
                url: "git+ssh://git@github.com/indutny/elliptic.git"
            },
            scripts: {
                lint: "eslint lib test",
                "lint:fix": "npm run lint -- --fix",
                test: "npm run lint && npm run unit",
                unit: "istanbul test _mocha --reporter=spec test/index.js",
                version: "grunt dist && git add dist/"
            },
            version: "6.5.4"
        }
    }, {}],
    104: [function(e, t) {
        function i() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function n(e) {
            return "function" == typeof e
        }

        function r(e) {
            return "object" == typeof e && null !== e
        }

        function o(e) {
            return void 0 === e
        }
        t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, i.prototype.emit = function(e) {
            var t, i, a, s, c, f;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw h.context = t, h
            }
            if (o(i = this._events[e])) return !1;
            if (n(i)) switch (arguments.length) {
                case 1:
                    i.call(this);
                    break;
                case 2:
                    i.call(this, arguments[1]);
                    break;
                case 3:
                    i.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), i.apply(this, s)
            } else if (r(i))
                for (s = Array.prototype.slice.call(arguments, 1), a = (f = i.slice()).length, c = 0; c < a; c++) f[c].apply(this, s);
            return !0
        }, i.prototype.addListener = function(e, t) {
            var a;
            if (!n(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? r(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, r(this._events[e]) && !this._events[e].warned && (a = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
            if (!n(t)) throw TypeError("listener must be a function");
            var i = !1;

            function r() {
                this.removeListener(e, r), i || (i = !0, t.apply(this, arguments))
            }
            return r.listener = t, this.on(e, r), this
        }, i.prototype.removeListener = function(e, t) {
            var i, o, a, s;
            if (!n(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (a = (i = this._events[e]).length, o = -1, i === t || n(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (r(i)) {
                for (s = a; s-- > 0;)
                    if (i[s] === t || i[s].listener && i[s].listener === t) {
                        o = s;
                        break
                    }
                if (o < 0) return this;
                1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, i.prototype.removeAllListeners = function(e) {
            var t, i;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n(i = this._events[e])) this.removeListener(e, i);
            else if (i)
                for (; i.length;) this.removeListener(e, i[i.length - 1]);
            return delete this._events[e], this
        }, i.prototype.listeners = function(e) {
            return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, i.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (n(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, i.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, {}],
    105: [function(e, t) {
        var i = e("safe-buffer").Buffer,
            n = e("md5.js");
        t.exports = function(e, t, r, o) {
            if (i.isBuffer(e) || (e = i.from(e, "binary")), t && (i.isBuffer(t) || (t = i.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length");
            for (var a = r / 8, s = i.alloc(a), c = i.alloc(o || 0), f = i.alloc(0); a > 0 || o > 0;) {
                var h = new n;
                h.update(f), h.update(e), t && h.update(t), f = h.digest();
                var u = 0;
                if (a > 0) {
                    var d = s.length - a;
                    u = Math.min(a, f.length), f.copy(s, d, 0, u), a -= u
                }
                if (u < f.length && o > 0) {
                    var l = c.length - o,
                        p = Math.min(o, f.length - u);
                    f.copy(c, l, u, u + p), o -= p
                }
            }
            return f.fill(0), {
                key: s,
                iv: c
            }
        }
    }, {
        "md5.js": 140,
        "safe-buffer": 183
    }],
    106: [function(e, t) {
        "use strict";
        var i = e("safe-buffer").Buffer,
            n = e("readable-stream").Transform;

        function r(e, t) {
            if (!i.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
        }

        function o(e) {
            n.call(this), this._block = i.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
        }
        e("inherits")(o, n), o.prototype._transform = function(e, t, i) {
            var n = null;
            try {
                this.update(e, t)
            } catch (r) {
                n = r
            }
            i(n)
        }, o.prototype._flush = function(e) {
            var t = null;
            try {
                this.push(this.digest())
            } catch (i) {
                t = i
            }
            e(t)
        }, o.prototype.update = function(e, t) {
            if (r(e, "Data"), this._finalized) throw new Error("Digest already called");
            i.isBuffer(e) || (e = i.from(e, t));
            for (var n = this._block, o = 0; this._blockOffset + e.length - o >= this._blockSize;) {
                for (var a = this._blockOffset; a < this._blockSize;) n[a++] = e[o++];
                this._update(), this._blockOffset = 0
            }
            for (; o < e.length;) n[this._blockOffset++] = e[o++];
            for (var s = 0, c = 8 * e.length; c > 0; ++s) this._length[s] += c, (c = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * c);
            return this
        }, o.prototype._update = function() {
            throw new Error("_update is not implemented")
        }, o.prototype.digest = function(e) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0;
            var t = this._digest();
            void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
            for (var i = 0; i < 4; ++i) this._length[i] = 0;
            return t
        }, o.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }, t.exports = o
    }, {
        inherits: 138,
        "readable-stream": 121,
        "safe-buffer": 122
    }],
    107: [function(e, t, i) {
        arguments[4][47][0].apply(i, arguments)
    }, {
        dup: 47
    }],
    108: [function(e, t, i) {
        arguments[4][48][0].apply(i, arguments)
    }, {
        "./_stream_readable": 110,
        "./_stream_writable": 112,
        _process: 157,
        dup: 48,
        inherits: 138
    }],
    109: [function(e, t, i) {
        arguments[4][49][0].apply(i, arguments)
    }, {
        "./_stream_transform": 111,
        dup: 49,
        inherits: 138
    }],
    110: [function(e, t, i) {
        arguments[4][50][0].apply(i, arguments)
    }, {
        "../errors": 107,
        "./_stream_duplex": 108,
        "./internal/streams/async_iterator": 113,
        "./internal/streams/buffer_list": 114,
        "./internal/streams/destroy": 115,
        "./internal/streams/from": 117,
        "./internal/streams/state": 119,
        "./internal/streams/stream": 120,
        _process: 157,
        buffer: 65,
        dup: 50,
        events: 104,
        inherits: 138,
        "string_decoder/": 123,
        util: 19
    }],
    111: [function(e, t, i) {
        arguments[4][51][0].apply(i, arguments)
    }, {
        "../errors": 107,
        "./_stream_duplex": 108,
        dup: 51,
        inherits: 138
    }],
    112: [function(e, t, i) {
        arguments[4][52][0].apply(i, arguments)
    }, {
        "../errors": 107,
        "./_stream_duplex": 108,
        "./internal/streams/destroy": 115,
        "./internal/streams/state": 119,
        "./internal/streams/stream": 120,
        _process: 157,
        buffer: 65,
        dup: 52,
        inherits: 138,
        "util-deprecate": 195
    }],
    113: [function(e, t, i) {
        arguments[4][53][0].apply(i, arguments)
    }, {
        "./end-of-stream": 116,
        _process: 157,
        dup: 53
    }],
    114: [function(e, t, i) {
        arguments[4][54][0].apply(i, arguments)
    }, {
        buffer: 65,
        dup: 54,
        util: 19
    }],
    115: [function(e, t, i) {
        arguments[4][55][0].apply(i, arguments)
    }, {
        _process: 157,
        dup: 55
    }],
    116: [function(e, t, i) {
        arguments[4][56][0].apply(i, arguments)
    }, {
        "../../../errors": 107,
        dup: 56
    }],
    117: [function(e, t, i) {
        arguments[4][57][0].apply(i, arguments)
    }, {
        dup: 57
    }],
    118: [function(e, t, i) {
        arguments[4][58][0].apply(i, arguments)
    }, {
        "../../../errors": 107,
        "./end-of-stream": 116,
        dup: 58
    }],
    119: [function(e, t, i) {
        arguments[4][59][0].apply(i, arguments)
    }, {
        "../../../errors": 107,
        dup: 59
    }],
    120: [function(e, t, i) {
        arguments[4][60][0].apply(i, arguments)
    }, {
        dup: 60,
        events: 104
    }],
    121: [function(e, t, i) {
        arguments[4][61][0].apply(i, arguments)
    }, {
        "./lib/_stream_duplex.js": 108,
        "./lib/_stream_passthrough.js": 109,
        "./lib/_stream_readable.js": 110,
        "./lib/_stream_transform.js": 111,
        "./lib/_stream_writable.js": 112,
        "./lib/internal/streams/end-of-stream.js": 116,
        "./lib/internal/streams/pipeline.js": 118,
        dup: 61
    }],
    122: [function(e, t, i) {
        arguments[4][62][0].apply(i, arguments)
    }, {
        buffer: 65,
        dup: 62
    }],
    123: [function(e, t, i) {
        arguments[4][63][0].apply(i, arguments)
    }, {
        dup: 63,
        "safe-buffer": 122
    }],
    124: [function(e, t, i) {
        var n = i;
        n.utils = e("./hash/utils"), n.common = e("./hash/common"), n.sha = e("./hash/sha"), n.ripemd = e("./hash/ripemd"), n.hmac = e("./hash/hmac"), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
    }, {
        "./hash/common": 125,
        "./hash/hmac": 126,
        "./hash/ripemd": 127,
        "./hash/sha": 128,
        "./hash/utils": 135
    }],
    125: [function(e, t, i) {
        "use strict";
        var n = e("./utils"),
            r = e("minimalistic-assert");

        function o() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
        }
        i.BlockHash = o, o.prototype.update = function(e, t) {
            if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                var i = (e = this.pending).length % this._delta8;
                this.pending = e.slice(e.length - i, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - i, this.endian);
                for (var r = 0; r < e.length; r += this._delta32) this._update(e, r, r + this._delta32)
            }
            return this
        }, o.prototype.digest = function(e) {
            return this.update(this._pad()), r(null === this.pending), this._digest(e)
        }, o.prototype._pad = function() {
            var e = this.pendingTotal,
                t = this._delta8,
                i = t - (e + this.padLength) % t,
                n = new Array(i + this.padLength);
            n[0] = 128;
            for (var r = 1; r < i; r++) n[r] = 0;
            if (e <<= 3, "big" === this.endian) {
                for (var o = 8; o < this.padLength; o++) n[r++] = 0;
                n[r++] = 0, n[r++] = 0, n[r++] = 0, n[r++] = 0, n[r++] = e >>> 24 & 255, n[r++] = e >>> 16 & 255, n[r++] = e >>> 8 & 255, n[r++] = 255 & e
            } else
                for (n[r++] = 255 & e, n[r++] = e >>> 8 & 255, n[r++] = e >>> 16 & 255, n[r++] = e >>> 24 & 255, n[r++] = 0, n[r++] = 0, n[r++] = 0, n[r++] = 0, o = 8; o < this.padLength; o++) n[r++] = 0;
            return n
        }
    }, {
        "./utils": 135,
        "minimalistic-assert": 143
    }],
    126: [function(e, t) {
        "use strict";
        var i = e("./utils"),
            n = e("minimalistic-assert");

        function r(e, t, n) {
            if (!(this instanceof r)) return new r(e, t, n);
            this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(t, n))
        }
        t.exports = r, r.prototype._init = function(e) {
            e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), n(e.length <= this.blockSize);
            for (var t = e.length; t < this.blockSize; t++) e.push(0);
            for (t = 0; t < e.length; t++) e[t] ^= 54;
            for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
            this.outer = (new this.Hash).update(e)
        }, r.prototype.update = function(e, t) {
            return this.inner.update(e, t), this
        }, r.prototype.digest = function(e) {
            return this.outer.update(this.inner.digest()), this.outer.digest(e)
        }
    }, {
        "./utils": 135,
        "minimalistic-assert": 143
    }],
    127: [function(e, t, i) {
        "use strict";
        var n = e("./utils"),
            r = e("./common"),
            o = n.rotl32,
            a = n.sum32,
            s = n.sum32_3,
            c = n.sum32_4,
            f = r.BlockHash;

        function h() {
            if (!(this instanceof h)) return new h;
            f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
        }

        function u(e, t, i, n) {
            return e <= 15 ? t ^ i ^ n : e <= 31 ? t & i | ~t & n : e <= 47 ? (t | ~i) ^ n : e <= 63 ? t & n | i & ~n : t ^ (i | ~n)
        }

        function d(e) {
            return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
        }

        function l(e) {
            return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
        }
        n.inherits(h, f), i.ripemd160 = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 192, h.padLength = 64, h.prototype._update = function(e, t) {
            for (var i = this.h[0], n = this.h[1], r = this.h[2], f = this.h[3], h = this.h[4], y = i, _ = n, v = r, w = f, M = h, S = 0; S < 80; S++) {
                var C = a(o(c(i, u(S, n, r, f), e[p[S] + t], d(S)), b[S]), h);
                i = h, h = f, f = o(r, 10), r = n, n = C, C = a(o(c(y, u(79 - S, _, v, w), e[g[S] + t], l(S)), m[S]), M), y = M, M = w, w = o(v, 10), v = _, _ = C
            }
            C = s(this.h[1], r, w), this.h[1] = s(this.h[2], f, M), this.h[2] = s(this.h[3], h, y), this.h[3] = s(this.h[4], i, _), this.h[4] = s(this.h[0], n, v), this.h[0] = C
        }, h.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
        };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            g = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    }, {
        "./common": 125,
        "./utils": 135
    }],
    128: [function(e, t, i) {
        "use strict";
        i.sha1 = e("./sha/1"), i.sha224 = e("./sha/224"), i.sha256 = e("./sha/256"), i.sha384 = e("./sha/384"), i.sha512 = e("./sha/512")
    }, {
        "./sha/1": 129,
        "./sha/224": 130,
        "./sha/256": 131,
        "./sha/384": 132,
        "./sha/512": 133
    }],
    129: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("../common"),
            r = e("./common"),
            o = i.rotl32,
            a = i.sum32,
            s = i.sum32_5,
            c = r.ft_1,
            f = n.BlockHash,
            h = [1518500249, 1859775393, 2400959708, 3395469782];

        function u() {
            if (!(this instanceof u)) return new u;
            f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
        }
        i.inherits(u, f), t.exports = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(e, t) {
            for (var i = this.W, n = 0; n < 16; n++) i[n] = e[t + n];
            for (; n < i.length; n++) i[n] = o(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
            var r = this.h[0],
                f = this.h[1],
                u = this.h[2],
                d = this.h[3],
                l = this.h[4];
            for (n = 0; n < i.length; n++) {
                var p = ~~(n / 20),
                    g = s(o(r, 5), c(p, f, u, d), l, i[n], h[p]);
                l = d, d = u, u = o(f, 30), f = r, r = g
            }
            this.h[0] = a(this.h[0], r), this.h[1] = a(this.h[1], f), this.h[2] = a(this.h[2], u), this.h[3] = a(this.h[3], d), this.h[4] = a(this.h[4], l)
        }, u.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
        }
    }, {
        "../common": 125,
        "../utils": 135,
        "./common": 134
    }],
    130: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("./256");

        function r() {
            if (!(this instanceof r)) return new r;
            n.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        i.inherits(r, n), t.exports = r, r.blockSize = 512, r.outSize = 224, r.hmacStrength = 192, r.padLength = 64, r.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
        }
    }, {
        "../utils": 135,
        "./256": 131
    }],
    131: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("../common"),
            r = e("./common"),
            o = e("minimalistic-assert"),
            a = i.sum32,
            s = i.sum32_4,
            c = i.sum32_5,
            f = r.ch32,
            h = r.maj32,
            u = r.s0_256,
            d = r.s1_256,
            l = r.g0_256,
            p = r.g1_256,
            g = n.BlockHash,
            b = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function m() {
            if (!(this instanceof m)) return new m;
            g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = b, this.W = new Array(64)
        }
        i.inherits(m, g), t.exports = m, m.blockSize = 512, m.outSize = 256, m.hmacStrength = 192, m.padLength = 64, m.prototype._update = function(e, t) {
            for (var i = this.W, n = 0; n < 16; n++) i[n] = e[t + n];
            for (; n < i.length; n++) i[n] = s(p(i[n - 2]), i[n - 7], l(i[n - 15]), i[n - 16]);
            var r = this.h[0],
                g = this.h[1],
                b = this.h[2],
                m = this.h[3],
                y = this.h[4],
                _ = this.h[5],
                v = this.h[6],
                w = this.h[7];
            for (o(this.k.length === i.length), n = 0; n < i.length; n++) {
                var M = c(w, d(y), f(y, _, v), this.k[n], i[n]),
                    S = a(u(r), h(r, g, b));
                w = v, v = _, _ = y, y = a(m, M), m = b, b = g, g = r, r = a(M, S)
            }
            this.h[0] = a(this.h[0], r), this.h[1] = a(this.h[1], g), this.h[2] = a(this.h[2], b), this.h[3] = a(this.h[3], m), this.h[4] = a(this.h[4], y), this.h[5] = a(this.h[5], _), this.h[6] = a(this.h[6], v), this.h[7] = a(this.h[7], w)
        }, m.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
        }
    }, {
        "../common": 125,
        "../utils": 135,
        "./common": 134,
        "minimalistic-assert": 143
    }],
    132: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("./512");

        function r() {
            if (!(this instanceof r)) return new r;
            n.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        i.inherits(r, n), t.exports = r, r.blockSize = 1024, r.outSize = 384, r.hmacStrength = 192, r.padLength = 128, r.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
        }
    }, {
        "../utils": 135,
        "./512": 133
    }],
    133: [function(e, t) {
        "use strict";
        var i = e("../utils"),
            n = e("../common"),
            r = e("minimalistic-assert"),
            o = i.rotr64_hi,
            a = i.rotr64_lo,
            s = i.shr64_hi,
            c = i.shr64_lo,
            f = i.sum64,
            h = i.sum64_hi,
            u = i.sum64_lo,
            d = i.sum64_4_hi,
            l = i.sum64_4_lo,
            p = i.sum64_5_hi,
            g = i.sum64_5_lo,
            b = n.BlockHash,
            m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function y() {
            if (!(this instanceof y)) return new y;
            b.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160)
        }

        function _(e, t, i, n, r) {
            var o = e & i ^ ~e & r;
            return o < 0 && (o += 4294967296), o
        }

        function v(e, t, i, n, r, o) {
            var a = t & n ^ ~t & o;
            return a < 0 && (a += 4294967296), a
        }

        function w(e, t, i, n, r) {
            var o = e & i ^ e & r ^ i & r;
            return o < 0 && (o += 4294967296), o
        }

        function M(e, t, i, n, r, o) {
            var a = t & n ^ t & o ^ n & o;
            return a < 0 && (a += 4294967296), a
        }

        function S(e, t) {
            var i = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
            return i < 0 && (i += 4294967296), i
        }

        function C(e, t) {
            var i = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
            return i < 0 && (i += 4294967296), i
        }

        function E(e, t) {
            var i = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
            return i < 0 && (i += 4294967296), i
        }

        function k(e, t) {
            var i = o(e, t, 1) ^ o(e, t, 8) ^ s(e, t, 7);
            return i < 0 && (i += 4294967296), i
        }

        function P(e, t) {
            var i = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7);
            return i < 0 && (i += 4294967296), i
        }

        function I(e, t) {
            var i = a(e, t, 19) ^ a(t, e, 29) ^ c(e, t, 6);
            return i < 0 && (i += 4294967296), i
        }
        i.inherits(y, b), t.exports = y, y.blockSize = 1024, y.outSize = 512, y.hmacStrength = 192, y.padLength = 128, y.prototype._prepareBlock = function(e, t) {
            for (var i = this.W, n = 0; n < 32; n++) i[n] = e[t + n];
            for (; n < i.length; n += 2) {
                var r = (b = i[n - 4], m = i[n - 3], y = void 0, (y = o(b, m, 19) ^ o(m, b, 29) ^ s(b, m, 6)) < 0 && (y += 4294967296), y),
                    a = I(i[n - 4], i[n - 3]),
                    c = i[n - 14],
                    f = i[n - 13],
                    h = k(i[n - 30], i[n - 29]),
                    u = P(i[n - 30], i[n - 29]),
                    p = i[n - 32],
                    g = i[n - 31];
                i[n] = d(r, a, c, f, h, u, p, g), i[n + 1] = l(r, a, c, f, h, u, p, g)
            }
            var b, m, y
        }, y.prototype._update = function(e, t) {
            this._prepareBlock(e, t);
            var i, n, a, s = this.W,
                c = this.h[0],
                d = this.h[1],
                l = this.h[2],
                b = this.h[3],
                m = this.h[4],
                y = this.h[5],
                k = this.h[6],
                P = this.h[7],
                I = this.h[8],
                N = this.h[9],
                R = this.h[10],
                B = this.h[11],
                x = this.h[12],
                T = this.h[13],
                A = this.h[14],
                L = this.h[15];
            r(this.k.length === s.length);
            for (var D = 0; D < s.length; D += 2) {
                var O = A,
                    j = L,
                    U = (a = void 0, (a = o(i = I, n = N, 14) ^ o(i, n, 18) ^ o(n, i, 9)) < 0 && (a += 4294967296), a),
                    F = E(I, N),
                    z = _(I, 0, R, 0, x),
                    q = v(0, N, 0, B, 0, T),
                    G = this.k[D],
                    V = this.k[D + 1],
                    H = s[D],
                    W = s[D + 1],
                    K = p(O, j, U, F, z, q, G, V, H, W),
                    J = g(O, j, U, F, z, q, G, V, H, W);
                O = S(c, d), j = C(c, d), U = w(c, 0, l, 0, m), F = M(0, d, 0, b, 0, y);
                var Z = h(O, j, U, F),
                    Y = u(O, j, U, F);
                A = x, L = T, x = R, T = B, R = I, B = N, I = h(k, P, K, J), N = u(P, P, K, J), k = m, P = y, m = l, y = b, l = c, b = d, c = h(K, J, Z, Y), d = u(K, J, Z, Y)
            }
            f(this.h, 0, c, d), f(this.h, 2, l, b), f(this.h, 4, m, y), f(this.h, 6, k, P), f(this.h, 8, I, N), f(this.h, 10, R, B), f(this.h, 12, x, T), f(this.h, 14, A, L)
        }, y.prototype._digest = function(e) {
            return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
        }
    }, {
        "../common": 125,
        "../utils": 135,
        "minimalistic-assert": 143
    }],
    134: [function(e, t, i) {
        "use strict";
        var n = e("../utils").rotr32;

        function r(e, t, i) {
            return e & t ^ ~e & i
        }

        function o(e, t, i) {
            return e & t ^ e & i ^ t & i
        }

        function a(e, t, i) {
            return e ^ t ^ i
        }
        i.ft_1 = function(e, t, i, n) {
            return 0 === e ? r(t, i, n) : 1 === e || 3 === e ? a(t, i, n) : 2 === e ? o(t, i, n) : void 0
        }, i.ch32 = r, i.maj32 = o, i.p32 = a, i.s0_256 = function(e) {
            return n(e, 2) ^ n(e, 13) ^ n(e, 22)
        }, i.s1_256 = function(e) {
            return n(e, 6) ^ n(e, 11) ^ n(e, 25)
        }, i.g0_256 = function(e) {
            return n(e, 7) ^ n(e, 18) ^ e >>> 3
        }, i.g1_256 = function(e) {
            return n(e, 17) ^ n(e, 19) ^ e >>> 10
        }
    }, {
        "../utils": 135
    }],
    135: [function(e, t, i) {
        "use strict";
        var n = e("minimalistic-assert"),
            r = e("inherits");

        function o(e, t) {
            return 55296 == (64512 & e.charCodeAt(t)) && !(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1))
        }

        function a(e) {
            return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
        }

        function s(e) {
            return 1 === e.length ? "0" + e : e
        }

        function c(e) {
            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
        }
        i.inherits = r, i.toArray = function(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var i = [];
            if ("string" == typeof e)
                if (t) {
                    if ("hex" === t)
                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), r = 0; r < e.length; r += 2) i.push(parseInt(e[r] + e[r + 1], 16))
                } else
                    for (var n = 0, r = 0; r < e.length; r++) {
                        var a = e.charCodeAt(r);
                        a < 128 ? i[n++] = a : a < 2048 ? (i[n++] = a >> 6 | 192, i[n++] = 63 & a | 128) : o(e, r) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r)), i[n++] = a >> 18 | 240, i[n++] = a >> 12 & 63 | 128, i[n++] = a >> 6 & 63 | 128, i[n++] = 63 & a | 128) : (i[n++] = a >> 12 | 224, i[n++] = a >> 6 & 63 | 128, i[n++] = 63 & a | 128)
                    } else
                        for (r = 0; r < e.length; r++) i[r] = 0 | e[r];
            return i
        }, i.toHex = function(e) {
            for (var t = "", i = 0; i < e.length; i++) t += s(e[i].toString(16));
            return t
        }, i.htonl = a, i.toHex32 = function(e, t) {
            for (var i = "", n = 0; n < e.length; n++) {
                var r = e[n];
                "little" === t && (r = a(r)), i += c(r.toString(16))
            }
            return i
        }, i.zero2 = s, i.zero8 = c, i.join32 = function(e, t, i, r) {
            var o = i - t;
            n(o % 4 == 0);
            for (var a = new Array(o / 4), s = 0, c = t; s < a.length; s++, c += 4) {
                var f;
                f = "big" === r ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], a[s] = f >>> 0
            }
            return a
        }, i.split32 = function(e, t) {
            for (var i = new Array(4 * e.length), n = 0, r = 0; n < e.length; n++, r += 4) {
                var o = e[n];
                "big" === t ? (i[r] = o >>> 24, i[r + 1] = o >>> 16 & 255, i[r + 2] = o >>> 8 & 255, i[r + 3] = 255 & o) : (i[r + 3] = o >>> 24, i[r + 2] = o >>> 16 & 255, i[r + 1] = o >>> 8 & 255, i[r] = 255 & o)
            }
            return i
        }, i.rotr32 = function(e, t) {
            return e >>> t | e << 32 - t
        }, i.rotl32 = function(e, t) {
            return e << t | e >>> 32 - t
        }, i.sum32 = function(e, t) {
            return e + t >>> 0
        }, i.sum32_3 = function(e, t, i) {
            return e + t + i >>> 0
        }, i.sum32_4 = function(e, t, i, n) {
            return e + t + i + n >>> 0
        }, i.sum32_5 = function(e, t, i, n, r) {
            return e + t + i + n + r >>> 0
        }, i.sum64 = function(e, t, i, n) {
            var r = e[t],
                o = n + e[t + 1] >>> 0,
                a = (o < n ? 1 : 0) + i + r;
            e[t] = a >>> 0, e[t + 1] = o
        }, i.sum64_hi = function(e, t, i, n) {
            return (t + n >>> 0 < t ? 1 : 0) + e + i >>> 0
        }, i.sum64_lo = function(e, t, i, n) {
            return t + n >>> 0
        }, i.sum64_4_hi = function(e, t, i, n, r, o, a, s) {
            var c = 0,
                f = t;
            return c += (f = f + n >>> 0) < t ? 1 : 0, c += (f = f + o >>> 0) < o ? 1 : 0, e + i + r + a + (c += (f = f + s >>> 0) < s ? 1 : 0) >>> 0
        }, i.sum64_4_lo = function(e, t, i, n, r, o, a, s) {
            return t + n + o + s >>> 0
        }, i.sum64_5_hi = function(e, t, i, n, r, o, a, s, c, f) {
            var h = 0,
                u = t;
            return h += (u = u + n >>> 0) < t ? 1 : 0, h += (u = u + o >>> 0) < o ? 1 : 0, h += (u = u + s >>> 0) < s ? 1 : 0, e + i + r + a + c + (h += (u = u + f >>> 0) < f ? 1 : 0) >>> 0
        }, i.sum64_5_lo = function(e, t, i, n, r, o, a, s, c, f) {
            return t + n + o + s + f >>> 0
        }, i.rotr64_hi = function(e, t, i) {
            return (t << 32 - i | e >>> i) >>> 0
        }, i.rotr64_lo = function(e, t, i) {
            return (e << 32 - i | t >>> i) >>> 0
        }, i.shr64_hi = function(e, t, i) {
            return e >>> i
        }, i.shr64_lo = function(e, t, i) {
            return (e << 32 - i | t >>> i) >>> 0
        }
    }, {
        inherits: 138,
        "minimalistic-assert": 143
    }],
    136: [function(e, t) {
        "use strict";
        var i = e("hash.js"),
            n = e("minimalistic-crypto-utils"),
            r = e("minimalistic-assert");

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
                i = n.toArray(e.nonce, e.nonceEnc || "hex"),
                a = n.toArray(e.pers, e.persEnc || "hex");
            r(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, i, a)
        }
        t.exports = o, o.prototype._init = function(e, t, i) {
            var n = e.concat(t).concat(i);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var r = 0; r < this.V.length; r++) this.K[r] = 0, this.V[r] = 1;
            this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
        }, o.prototype._hmac = function() {
            return new i.hmac(this.hash, this.K)
        }, o.prototype._update = function(e) {
            var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
        }, o.prototype.reseed = function(e, t, i, o) {
            "string" != typeof t && (o = i, i = t, t = null), e = n.toArray(e, t), i = n.toArray(i, o), r(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(i || [])), this._reseed = 1
        }, o.prototype.generate = function(e, t, i, r) {
            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
            "string" != typeof t && (r = i, i = t, t = null), i && (i = n.toArray(i, r || "hex"), this._update(i));
            for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
            var a = o.slice(0, e);
            return this._update(i), this._reseed++, n.encode(a, t)
        }
    }, {
        "hash.js": 124,
        "minimalistic-assert": 143,
        "minimalistic-crypto-utils": 144
    }],
    137: [function(e, t, i) {
        i.read = function(e, t, i, n, r) {
            var o, a, s = 8 * r - n - 1,
                c = (1 << s) - 1,
                f = c >> 1,
                h = -7,
                u = i ? r - 1 : 0,
                d = i ? -1 : 1,
                l = e[t + u];
            for (u += d, o = l & (1 << -h) - 1, l >>= -h, h += s; h > 0; o = 256 * o + e[t + u], u += d, h -= 8);
            for (a = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; a = 256 * a + e[t + u], u += d, h -= 8);
            if (0 === o) o = 1 - f;
            else {
                if (o === c) return a ? NaN : 1 / 0 * (l ? -1 : 1);
                a += Math.pow(2, n), o -= f
            }
            return (l ? -1 : 1) * a * Math.pow(2, o - n)
        }, i.write = function(e, t, i, n, r, o) {
            var a, s, c, f = 8 * o - r - 1,
                h = (1 << f) - 1,
                u = h >> 1,
                d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = n ? 0 : o - 1,
                p = n ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + u >= 1 ? d / c : d * Math.pow(2, 1 - u)) * c >= 2 && (a++, c /= 2), a + u >= h ? (s = 0, a = h) : a + u >= 1 ? (s = (t * c - 1) * Math.pow(2, r), a += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, r), a = 0)); r >= 8; e[i + l] = 255 & s, l += p, s /= 256, r -= 8);
            for (a = a << r | s, f += r; f > 0; e[i + l] = 255 & a, l += p, a /= 256, f -= 8);
            e[i + l - p] |= 128 * g
        }
    }, {}],
    138: [function(e, t) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
            }
        }
    }, {}],
    139: [function(e, t) {
        function i(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function n(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }
        t.exports = function(e) {
            return null != e && (i(e) || n(e) || !!e._isBuffer)
        }
    }, {}],
    140: [function(e, t) {
        "use strict";
        var i = e("inherits"),
            n = e("hash-base"),
            r = e("safe-buffer").Buffer,
            o = new Array(16);

        function a() {
            n.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
        }

        function s(e, t) {
            return e << t | e >>> 32 - t
        }

        function c(e, t, i, n, r, o, a) {
            return s(e + (t & i | ~t & n) + r + o | 0, a) + t | 0
        }

        function f(e, t, i, n, r, o, a) {
            return s(e + (t & n | i & ~n) + r + o | 0, a) + t | 0
        }

        function h(e, t, i, n, r, o, a) {
            return s(e + (t ^ i ^ n) + r + o | 0, a) + t | 0
        }

        function u(e, t, i, n, r, o, a) {
            return s(e + (i ^ (t | ~n)) + r + o | 0, a) + t | 0
        }
        i(a, n), a.prototype._update = function() {
            for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
            var i = this._a,
                n = this._b,
                r = this._c,
                a = this._d;
            i = c(i, n, r, a, e[0], 3614090360, 7), a = c(a, i, n, r, e[1], 3905402710, 12), r = c(r, a, i, n, e[2], 606105819, 17), n = c(n, r, a, i, e[3], 3250441966, 22), i = c(i, n, r, a, e[4], 4118548399, 7), a = c(a, i, n, r, e[5], 1200080426, 12), r = c(r, a, i, n, e[6], 2821735955, 17), n = c(n, r, a, i, e[7], 4249261313, 22), i = c(i, n, r, a, e[8], 1770035416, 7), a = c(a, i, n, r, e[9], 2336552879, 12), r = c(r, a, i, n, e[10], 4294925233, 17), n = c(n, r, a, i, e[11], 2304563134, 22), i = c(i, n, r, a, e[12], 1804603682, 7), a = c(a, i, n, r, e[13], 4254626195, 12), r = c(r, a, i, n, e[14], 2792965006, 17), i = f(i, n = c(n, r, a, i, e[15], 1236535329, 22), r, a, e[1], 4129170786, 5), a = f(a, i, n, r, e[6], 3225465664, 9), r = f(r, a, i, n, e[11], 643717713, 14), n = f(n, r, a, i, e[0], 3921069994, 20), i = f(i, n, r, a, e[5], 3593408605, 5), a = f(a, i, n, r, e[10], 38016083, 9), r = f(r, a, i, n, e[15], 3634488961, 14), n = f(n, r, a, i, e[4], 3889429448, 20), i = f(i, n, r, a, e[9], 568446438, 5), a = f(a, i, n, r, e[14], 3275163606, 9), r = f(r, a, i, n, e[3], 4107603335, 14), n = f(n, r, a, i, e[8], 1163531501, 20), i = f(i, n, r, a, e[13], 2850285829, 5), a = f(a, i, n, r, e[2], 4243563512, 9), r = f(r, a, i, n, e[7], 1735328473, 14), i = h(i, n = f(n, r, a, i, e[12], 2368359562, 20), r, a, e[5], 4294588738, 4), a = h(a, i, n, r, e[8], 2272392833, 11), r = h(r, a, i, n, e[11], 1839030562, 16), n = h(n, r, a, i, e[14], 4259657740, 23), i = h(i, n, r, a, e[1], 2763975236, 4), a = h(a, i, n, r, e[4], 1272893353, 11), r = h(r, a, i, n, e[7], 4139469664, 16), n = h(n, r, a, i, e[10], 3200236656, 23), i = h(i, n, r, a, e[13], 681279174, 4), a = h(a, i, n, r, e[0], 3936430074, 11), r = h(r, a, i, n, e[3], 3572445317, 16), n = h(n, r, a, i, e[6], 76029189, 23), i = h(i, n, r, a, e[9], 3654602809, 4), a = h(a, i, n, r, e[12], 3873151461, 11), r = h(r, a, i, n, e[15], 530742520, 16), i = u(i, n = h(n, r, a, i, e[2], 3299628645, 23), r, a, e[0], 4096336452, 6), a = u(a, i, n, r, e[7], 1126891415, 10), r = u(r, a, i, n, e[14], 2878612391, 15), n = u(n, r, a, i, e[5], 4237533241, 21), i = u(i, n, r, a, e[12], 1700485571, 6), a = u(a, i, n, r, e[3], 2399980690, 10), r = u(r, a, i, n, e[10], 4293915773, 15), n = u(n, r, a, i, e[1], 2240044497, 21), i = u(i, n, r, a, e[8], 1873313359, 6), a = u(a, i, n, r, e[15], 4264355552, 10), r = u(r, a, i, n, e[6], 2734768916, 15), n = u(n, r, a, i, e[13], 1309151649, 21), i = u(i, n, r, a, e[4], 4149444226, 6), a = u(a, i, n, r, e[11], 3174756917, 10), r = u(r, a, i, n, e[2], 718787259, 15), n = u(n, r, a, i, e[9], 3951481745, 21), this._a = this._a + i | 0, this._b = this._b + n | 0, this._c = this._c + r | 0, this._d = this._d + a | 0
        }, a.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var e = r.allocUnsafe(16);
            return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
        }, t.exports = a
    }, {
        "hash-base": 106,
        inherits: 138,
        "safe-buffer": 183
    }],
    141: [function(e, t) {
        var i = e("bn.js"),
            n = e("brorand");

        function r(e) {
            this.rand = e || new n.Rand
        }
        t.exports = r, r.create = function(e) {
            return new r(e)
        }, r.prototype._randbelow = function(e) {
            var t = e.bitLength(),
                n = Math.ceil(t / 8);
            do {
                var r = new i(this.rand.generate(n))
            } while (r.cmp(e) >= 0);
            return r
        }, r.prototype._randrange = function(e, t) {
            var i = t.sub(e);
            return e.add(this._randbelow(i))
        }, r.prototype.test = function(e, t, n) {
            var r = e.bitLength(),
                o = i.mont(e),
                a = new i(1).toRed(o);
            t || (t = Math.max(1, r / 48 | 0));
            for (var s = e.subn(1), c = 0; !s.testn(c); c++);
            for (var f = e.shrn(c), h = s.toRed(o); t > 0; t--) {
                var u = this._randrange(new i(2), s);
                n && n(u);
                var d = u.toRed(o).redPow(f);
                if (0 !== d.cmp(a) && 0 !== d.cmp(h)) {
                    for (var l = 1; l < c; l++) {
                        if (0 === (d = d.redSqr()).cmp(a)) return !1;
                        if (0 === d.cmp(h)) break
                    }
                    if (l === c) return !1
                }
            }
            return !0
        }, r.prototype.getDivisor = function(e, t) {
            var n = e.bitLength(),
                r = i.mont(e),
                o = new i(1).toRed(r);
            t || (t = Math.max(1, n / 48 | 0));
            for (var a = e.subn(1), s = 0; !a.testn(s); s++);
            for (var c = e.shrn(s), f = a.toRed(r); t > 0; t--) {
                var h = this._randrange(new i(2), a),
                    u = e.gcd(h);
                if (0 !== u.cmpn(1)) return u;
                var d = h.toRed(r).redPow(c);
                if (0 !== d.cmp(o) && 0 !== d.cmp(f)) {
                    for (var l = 1; l < s; l++) {
                        if (0 === (d = d.redSqr()).cmp(o)) return d.fromRed().subn(1).gcd(e);
                        if (0 === d.cmp(f)) break
                    }
                    if (l === s) return (d = d.redSqr()).fromRed().subn(1).gcd(e)
                }
            }
            return !1
        }
    }, {
        "bn.js": 142,
        brorand: 18
    }],
    142: [function(e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }, {
        buffer: 19,
        dup: 15
    }],
    143: [function(e, t) {
        function i(e, t) {
            if (!e) throw new Error(t || "Assertion failed")
        }
        t.exports = i, i.equal = function(e, t, i) {
            if (e != t) throw new Error(i || "Assertion failed: " + e + " != " + t)
        }
    }, {}],
    144: [function(e, t, i) {
        "use strict";
        var n = i;

        function r(e) {
            return 1 === e.length ? "0" + e : e
        }

        function o(e) {
            for (var t = "", i = 0; i < e.length; i++) t += r(e[i].toString(16));
            return t
        }
        n.toArray = function(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var i = [];
            if ("string" != typeof e) {
                for (var n = 0; n < e.length; n++) i[n] = 0 | e[n];
                return i
            }
            if ("hex" === t)
                for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) i.push(parseInt(e[n] + e[n + 1], 16));
            else
                for (n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n),
                        o = r >> 8,
                        a = 255 & r;
                    o ? i.push(o, a) : i.push(a)
                }
            return i
        }, n.zero2 = r, n.toHex = o, n.encode = function(e, t) {
            return "hex" === t ? o(e) : e
        }
    }, {}],
    145: [function(e, t) {
        t.exports = {
            "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
            "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
            "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
            "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
            "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
            "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
            "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
            "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
            "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
            "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
            "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
            "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
        }
    }, {}],
    146: [function(e, t, i) {
        "use strict";
        var n = e("asn1.js");
        i.certificate = e("./certificate");
        var r = n.define("RSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
        });
        i.RSAPrivateKey = r;
        var o = n.define("RSAPublicKey", function() {
            this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
        });
        i.RSAPublicKey = o;
        var a = n.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
        });
        i.PublicKey = a;
        var s = n.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
            }),
            c = n.define("PrivateKeyInfo", function() {
                this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
            });
        i.PrivateKey = c;
        var f = n.define("EncryptedPrivateKeyInfo", function() {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
        });
        i.EncryptedPrivateKey = f;
        var h = n.define("DSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
        });
        i.DSAPrivateKey = h, i.DSAparam = n.define("DSAparam", function() {
            this.int()
        });
        var u = n.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(d), this.key("publicKey").optional().explicit(1).bitstr())
        });
        i.ECPrivateKey = u;
        var d = n.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            })
        });
        i.signature = n.define("signature", function() {
            this.seq().obj(this.key("r").int(), this.key("s").int())
        })
    }, {
        "./certificate": 147,
        "asn1.js": 1
    }],
    147: [function(e, t) {
        "use strict";
        var i = e("asn1.js"),
            n = i.define("Time", function() {
                this.choice({
                    utcTime: this.utctime(),
                    generalTime: this.gentime()
                })
            }),
            r = i.define("AttributeTypeValue", function() {
                this.seq().obj(this.key("type").objid(), this.key("value").any())
            }),
            o = i.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
            }),
            a = i.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
            }),
            s = i.define("RelativeDistinguishedName", function() {
                this.setof(r)
            }),
            c = i.define("RDNSequence", function() {
                this.seqof(s)
            }),
            f = i.define("Name", function() {
                this.choice({
                    rdnSequence: this.use(c)
                })
            }),
            h = i.define("Validity", function() {
                this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n))
            }),
            u = i.define("Extension", function() {
                this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
            }),
            d = i.define("TBSCertificate", function() {
                this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(o), this.key("issuer").use(f), this.key("validity").use(h), this.key("subject").use(f), this.key("subjectPublicKeyInfo").use(a), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(u).optional())
            }),
            l = i.define("X509Certificate", function() {
                this.seq().obj(this.key("tbsCertificate").use(d), this.key("signatureAlgorithm").use(o), this.key("signatureValue").bitstr())
            });
        t.exports = l
    }, {
        "asn1.js": 1
    }],
    148: [function(e, t) {
        var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
            n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
            r = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
            o = e("evp_bytestokey"),
            a = e("browserify-aes"),
            s = e("safe-buffer").Buffer;
        t.exports = function(e, t) {
            var c, f = e.toString(),
                h = f.match(i);
            if (h) {
                var u = "aes" + h[1],
                    d = s.from(h[2], "hex"),
                    l = s.from(h[3].replace(/[\r\n]/g, ""), "base64"),
                    p = o(t, d.slice(0, 8), parseInt(h[1], 10)).key,
                    g = [],
                    b = a.createDecipheriv(u, p, d);
                g.push(b.update(l)), g.push(b.final()), c = s.concat(g)
            } else {
                var m = f.match(r);
                c = s.from(m[2].replace(/[\r\n]/g, ""), "base64")
            }
            return {
                tag: f.match(n)[1],
                data: c
            }
        }
    }, {
        "browserify-aes": 22,
        evp_bytestokey: 105,
        "safe-buffer": 183
    }],
    149: [function(e, t) {
        var i = e("./asn1"),
            n = e("./aesid.json"),
            r = e("./fixProc"),
            o = e("browserify-aes"),
            a = e("pbkdf2"),
            s = e("safe-buffer").Buffer;

        function c(e) {
            var t;
            "object" != typeof e || s.isBuffer(e) || (t = e.passphrase, e = e.key), "string" == typeof e && (e = s.from(e));
            var n, o, a = r(e, t),
                c = a.tag,
                h = a.data;
            switch (c) {
                case "CERTIFICATE":
                    o = i.certificate.decode(h, "der").tbsCertificate.subjectPublicKeyInfo;
                case "PUBLIC KEY":
                    switch (o || (o = i.PublicKey.decode(h, "der")), n = o.algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return i.RSAPublicKey.decode(o.subjectPublicKey.data, "der");
                        case "1.2.840.10045.2.1":
                            return o.subjectPrivateKey = o.subjectPublicKey, {
                                type: "ec",
                                data: o
                            };
                        case "1.2.840.10040.4.1":
                            return o.algorithm.params.pub_key = i.DSAparam.decode(o.subjectPublicKey.data, "der"), {
                                type: "dsa",
                                data: o.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + n)
                    }
                case "ENCRYPTED PRIVATE KEY":
                    h = f(h = i.EncryptedPrivateKey.decode(h, "der"), t);
                case "PRIVATE KEY":
                    switch (n = (o = i.PrivateKey.decode(h, "der")).algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return i.RSAPrivateKey.decode(o.subjectPrivateKey, "der");
                        case "1.2.840.10045.2.1":
                            return {
                                curve: o.algorithm.curve,
                                privateKey: i.ECPrivateKey.decode(o.subjectPrivateKey, "der").privateKey
                            };
                        case "1.2.840.10040.4.1":
                            return o.algorithm.params.priv_key = i.DSAparam.decode(o.subjectPrivateKey, "der"), {
                                type: "dsa",
                                params: o.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + n)
                    }
                case "RSA PUBLIC KEY":
                    return i.RSAPublicKey.decode(h, "der");
                case "RSA PRIVATE KEY":
                    return i.RSAPrivateKey.decode(h, "der");
                case "DSA PRIVATE KEY":
                    return {
                        type: "dsa",
                        params: i.DSAPrivateKey.decode(h, "der")
                    };
                case "EC PRIVATE KEY":
                    return {
                        curve: (h = i.ECPrivateKey.decode(h, "der")).parameters.value,
                        privateKey: h.privateKey
                    };
                default:
                    throw new Error("unknown key type " + c)
            }
        }

        function f(e, t) {
            var i = e.algorithm.decrypt.kde.kdeparams.salt,
                r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                c = n[e.algorithm.decrypt.cipher.algo.join(".")],
                f = e.algorithm.decrypt.cipher.iv,
                h = e.subjectPrivateKey,
                u = parseInt(c.split("-")[1], 10) / 8,
                d = a.pbkdf2Sync(t, i, r, u, "sha1"),
                l = o.createDecipheriv(c, d, f),
                p = [];
            return p.push(l.update(h)), p.push(l.final()), s.concat(p)
        }
        t.exports = c, c.signature = i.signature
    }, {
        "./aesid.json": 145,
        "./asn1": 146,
        "./fixProc": 148,
        "browserify-aes": 22,
        pbkdf2: 150,
        "safe-buffer": 183
    }],
    150: [function(e, t, i) {
        i.pbkdf2 = e("./lib/async"), i.pbkdf2Sync = e("./lib/sync")
    }, {
        "./lib/async": 151,
        "./lib/sync": 154
    }],
    151: [function(e, t) {
        (function(i) {
            var n, r, o = e("safe-buffer").Buffer,
                a = e("./precondition"),
                s = e("./default-encoding"),
                c = e("./sync"),
                f = e("./to-buffer"),
                h = i.crypto && i.crypto.subtle,
                u = {
                    sha: "SHA-1",
                    "sha-1": "SHA-1",
                    sha1: "SHA-1",
                    sha256: "SHA-256",
                    "sha-256": "SHA-256",
                    sha384: "SHA-384",
                    "sha-384": "SHA-384",
                    "sha-512": "SHA-512",
                    sha512: "SHA-512"
                },
                d = [];

            function l(e) {
                if (i.process && !i.process.browser) return Promise.resolve(!1);
                if (!h || !h.importKey || !h.deriveBits) return Promise.resolve(!1);
                if (void 0 !== d[e]) return d[e];
                var t = g(n = n || o.alloc(8), n, 10, 128, e).then(function() {
                    return !0
                }).catch(function() {
                    return !1
                });
                return d[e] = t, t
            }

            function p() {
                return r || (r = i.process && i.process.nextTick ? i.process.nextTick : i.queueMicrotask ? i.queueMicrotask : i.setImmediate ? i.setImmediate : i.setTimeout)
            }

            function g(e, t, i, n, r) {
                return h.importKey("raw", e, {
                    name: "PBKDF2"
                }, !1, ["deriveBits"]).then(function(e) {
                    return h.deriveBits({
                        name: "PBKDF2",
                        salt: t,
                        iterations: i,
                        hash: {
                            name: r
                        }
                    }, e, n << 3)
                }).then(function(e) {
                    return o.from(e)
                })
            }

            function b(e, t) {
                e.then(function(e) {
                    p()(function() {
                        t(null, e)
                    })
                }, function(e) {
                    p()(function() {
                        t(e)
                    })
                })
            }
            t.exports = function(e, t, n, r, o, h) {
                "function" == typeof o && (h = o, o = void 0);
                var d = u[(o = o || "sha1").toLowerCase()];
                if (d && "function" == typeof i.Promise) {
                    if (a(n, r), e = f(e, s, "Password"), t = f(t, s, "Salt"), "function" != typeof h) throw new Error("No callback provided to pbkdf2");
                    b(l(d).then(function(i) {
                        return i ? g(e, t, n, r, d) : c(e, t, n, r, o)
                    }), h)
                } else p()(function() {
                    var i;
                    try {
                        i = c(e, t, n, r, o)
                    } catch (a) {
                        return h(a)
                    }
                    h(null, i)
                })
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./default-encoding": 152,
        "./precondition": 153,
        "./sync": 154,
        "./to-buffer": 155,
        "safe-buffer": 183
    }],
    152: [function(e, t) {
        (function(e, i) {
            var n;
            n = i.process && i.process.browser ? "utf-8" : i.process && i.process.version ? parseInt(e.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary" : "utf-8", t.exports = n
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 157
    }],
    153: [function(e, t) {
        var i = Math.pow(2, 30) - 1;
        t.exports = function(e, t) {
            if ("number" != typeof e) throw new TypeError("Iterations not a number");
            if (e < 0) throw new TypeError("Bad iterations");
            if ("number" != typeof t) throw new TypeError("Key length not a number");
            if (t < 0 || t > i || t != t) throw new TypeError("Bad key length")
        }
    }, {}],
    154: [function(e, t) {
        var i = e("create-hash/md5"),
            n = e("ripemd160"),
            r = e("sha.js"),
            o = e("safe-buffer").Buffer,
            a = e("./precondition"),
            s = e("./default-encoding"),
            c = e("./to-buffer"),
            f = o.alloc(128),
            h = {
                md5: 16,
                sha1: 20,
                sha224: 28,
                sha256: 32,
                sha384: 48,
                sha512: 64,
                rmd160: 20,
                ripemd160: 20
            };

        function u(e, t, i) {
            var n = d(e),
                r = "sha512" === e || "sha384" === e ? 128 : 64;
            t.length > r ? t = n(t) : t.length < r && (t = o.concat([t, f], r));
            for (var a = o.allocUnsafe(r + h[e]), s = o.allocUnsafe(r + h[e]), c = 0; c < r; c++) a[c] = 54 ^ t[c], s[c] = 92 ^ t[c];
            var u = o.allocUnsafe(r + i + 4);
            a.copy(u, 0, 0, r), this.ipad1 = u, this.ipad2 = a, this.opad = s, this.alg = e, this.blocksize = r, this.hash = n, this.size = h[e]
        }

        function d(e) {
            return "rmd160" === e || "ripemd160" === e ? function(e) {
                return (new n).update(e).digest()
            } : "md5" === e ? i : function(t) {
                return r(e).update(t).digest()
            }
        }
        u.prototype.run = function(e, t) {
            return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad)
        }, t.exports = function(e, t, i, n, r) {
            a(i, n);
            var f = new u(r = r || "sha1", e = c(e, s, "Password"), (t = c(t, s, "Salt")).length),
                d = o.allocUnsafe(n),
                l = o.allocUnsafe(t.length + 4);
            t.copy(l, 0, 0, t.length);
            for (var p = 0, g = h[r], b = Math.ceil(n / g), m = 1; m <= b; m++) {
                l.writeUInt32BE(m, t.length);
                for (var y = f.run(l, f.ipad1), _ = y, v = 1; v < i; v++) {
                    _ = f.run(_, f.ipad2);
                    for (var w = 0; w < g; w++) y[w] ^= _[w]
                }
                y.copy(d, p), p += g
            }
            return d
        }
    }, {
        "./default-encoding": 152,
        "./precondition": 153,
        "./to-buffer": 155,
        "create-hash/md5": 72,
        ripemd160: 182,
        "safe-buffer": 183,
        "sha.js": 186
    }],
    155: [function(e, t) {
        var i = e("safe-buffer").Buffer;
        t.exports = function(e, t, n) {
            if (i.isBuffer(e)) return e;
            if ("string" == typeof e) return i.from(e, t);
            if (ArrayBuffer.isView(e)) return i.from(e.buffer);
            throw new TypeError(n + " must be a string, a Buffer, a typed array or a DataView")
        }
    }, {
        "safe-buffer": 183
    }],
    156: [function(e, t) {
        (function(e) {
            "use strict";
            void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                nextTick: function(t, i, n, r) {
                    if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                    var o, a, s = arguments.length;
                    switch (s) {
                        case 0:
                        case 1:
                            return e.nextTick(t);
                        case 2:
                            return e.nextTick(function() {
                                t.call(null, i)
                            });
                        case 3:
                            return e.nextTick(function() {
                                t.call(null, i, n)
                            });
                        case 4:
                            return e.nextTick(function() {
                                t.call(null, i, n, r)
                            });
                        default:
                            for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                            return e.nextTick(function() {
                                t.apply(null, o)
                            })
                    }
                }
            } : t.exports = e
        }).call(this, e("_process"))
    }, {
        _process: 157
    }],
    157: [function(e, t) {
        var i, n, r = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }

        function c(e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
                return n(e)
            } catch (t) {
                try {
                    return n.call(null, e)
                } catch (t) {
                    return n.call(this, e)
                }
            }
        }(function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                i = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        })();
        var f, h = [],
            u = !1,
            d = -1;

        function l() {
            u && f && (u = !1, f.length ? h = f.concat(h) : d = -1, h.length && p())
        }

        function p() {
            if (!u) {
                var e = s(l);
                u = !0;
                for (var t = h.length; t;) {
                    for (f = h, h = []; ++d < t;) f && f[d].run();
                    d = -1, t = h.length
                }
                f = null, u = !1, c(e)
            }
        }

        function g(e, t) {
            this.fun = e, this.array = t
        }

        function b() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            h.push(new g(e, t)), 1 !== h.length || u || s(p)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = b, r.addListener = b, r.once = b, r.off = b, r.removeListener = b, r.removeAllListeners = b, r.emit = b, r.prependListener = b, r.prependOnceListener = b, r.listeners = function() {
            return []
        }, r.binding = function() {
            throw new Error("process.binding is not supported")
        }, r.cwd = function() {
            return "/"
        }, r.chdir = function() {
            throw new Error("process.chdir is not supported")
        }, r.umask = function() {
            return 0
        }
    }, {}],
    158: [function(e, t, i) {
        i.publicEncrypt = e("./publicEncrypt"), i.privateDecrypt = e("./privateDecrypt"), i.privateEncrypt = function(e, t) {
            return i.publicEncrypt(e, t, !0)
        }, i.publicDecrypt = function(e, t) {
            return i.privateDecrypt(e, t, !0)
        }
    }, {
        "./privateDecrypt": 161,
        "./publicEncrypt": 162
    }],
    159: [function(e, t) {
        var i = e("create-hash"),
            n = e("safe-buffer").Buffer;

        function r(e) {
            var t = n.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t
        }
        t.exports = function(e, t) {
            for (var o, a = n.alloc(0), s = 0; a.length < t;) o = r(s++), a = n.concat([a, i("sha1").update(e).update(o).digest()]);
            return a.slice(0, t)
        }
    }, {
        "create-hash": 71,
        "safe-buffer": 183
    }],
    160: [function(e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }, {
        buffer: 19,
        dup: 15
    }],
    161: [function(e, t) {
        var i = e("parse-asn1"),
            n = e("./mgf"),
            r = e("./xor"),
            o = e("bn.js"),
            a = e("browserify-rsa"),
            s = e("create-hash"),
            c = e("./withPublic"),
            f = e("safe-buffer").Buffer;

        function h(e, t) {
            var i = e.modulus.byteLength(),
                o = s("sha1").update(f.alloc(0)).digest(),
                a = o.length;
            if (0 !== t[0]) throw new Error("decryption error");
            var c = t.slice(1, a + 1),
                h = t.slice(a + 1),
                u = r(c, n(h, a)),
                l = r(h, n(u, i - a - 1));
            if (d(o, l.slice(0, a))) throw new Error("decryption error");
            for (var p = a; 0 === l[p];) p++;
            if (1 !== l[p++]) throw new Error("decryption error");
            return l.slice(p)
        }

        function u(e, t, i) {
            for (var n = t.slice(0, 2), r = 2, o = 0; 0 !== t[r++];)
                if (r >= t.length) {
                    o++;
                    break
                }
            var a = t.slice(2, r - 1);
            if (("0002" !== n.toString("hex") && !i || "0001" !== n.toString("hex") && i) && o++, a.length < 8 && o++, o) throw new Error("decryption error");
            return t.slice(r)
        }

        function d(e, t) {
            e = f.from(e), t = f.from(t);
            var i = 0,
                n = e.length;
            e.length !== t.length && (i++, n = Math.min(e.length, t.length));
            for (var r = -1; ++r < n;) i += e[r] ^ t[r];
            return i
        }
        t.exports = function(e, t, n) {
            var r;
            r = e.padding ? e.padding : n ? 1 : 4;
            var s, d = i(e),
                l = d.modulus.byteLength();
            if (t.length > l || new o(t).cmp(d.modulus) >= 0) throw new Error("decryption error");
            s = n ? c(new o(t), d) : a(t, d);
            var p = f.alloc(l - s.length);
            if (s = f.concat([p, s], l), 4 === r) return h(d, s);
            if (1 === r) return u(0, s, n);
            if (3 === r) return s;
            throw new Error("unknown padding")
        }
    }, {
        "./mgf": 159,
        "./withPublic": 163,
        "./xor": 164,
        "bn.js": 160,
        "browserify-rsa": 40,
        "create-hash": 71,
        "parse-asn1": 149,
        "safe-buffer": 183
    }],
    162: [function(e, t) {
        var i = e("parse-asn1"),
            n = e("randombytes"),
            r = e("create-hash"),
            o = e("./mgf"),
            a = e("./xor"),
            s = e("bn.js"),
            c = e("./withPublic"),
            f = e("browserify-rsa"),
            h = e("safe-buffer").Buffer;

        function u(e, t) {
            var i = e.modulus.byteLength(),
                c = t.length,
                f = r("sha1").update(h.alloc(0)).digest(),
                u = f.length,
                d = 2 * u;
            if (c > i - d - 2) throw new Error("message too long");
            var l = h.alloc(i - c - d - 2),
                p = i - u - 1,
                g = n(u),
                b = a(h.concat([f, l, h.alloc(1, 1), t], p), o(g, p)),
                m = a(g, o(b, u));
            return new s(h.concat([h.alloc(1), m, b], i))
        }

        function d(e, t, i) {
            var n, r = t.length,
                o = e.modulus.byteLength();
            if (r > o - 11) throw new Error("message too long");
            return n = i ? h.alloc(o - r - 3, 255) : l(o - r - 3), new s(h.concat([h.from([0, i ? 1 : 2]), n, h.alloc(1), t], o))
        }

        function l(e) {
            for (var t, i = h.allocUnsafe(e), r = 0, o = n(2 * e), a = 0; r < e;) a === o.length && (o = n(2 * e), a = 0), (t = o[a++]) && (i[r++] = t);
            return i
        }
        t.exports = function(e, t, n) {
            var r;
            r = e.padding ? e.padding : n ? 1 : 4;
            var o, a = i(e);
            if (4 === r) o = u(a, t);
            else if (1 === r) o = d(a, t, n);
            else {
                if (3 !== r) throw new Error("unknown padding");
                if ((o = new s(t)).cmp(a.modulus) >= 0) throw new Error("data too long for modulus")
            }
            return n ? f(o, a) : c(o, a)
        }
    }, {
        "./mgf": 159,
        "./withPublic": 163,
        "./xor": 164,
        "bn.js": 160,
        "browserify-rsa": 40,
        "create-hash": 71,
        "parse-asn1": 149,
        randombytes: 165,
        "safe-buffer": 183
    }],
    163: [function(e, t) {
        var i = e("bn.js"),
            n = e("safe-buffer").Buffer;
        t.exports = function(e, t) {
            return n.from(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray())
        }
    }, {
        "bn.js": 160,
        "safe-buffer": 183
    }],
    164: [function(e, t) {
        t.exports = function(e, t) {
            for (var i = e.length, n = -1; ++n < i;) e[n] ^= t[n];
            return e
        }
    }, {}],
    165: [function(e, t) {
        (function(i, n) {
            "use strict";
            var r = e("safe-buffer").Buffer,
                o = n.crypto || n.msCrypto;
            o && o.getRandomValues ? t.exports = function(e, t) {
                if (e > 4294967295) throw new RangeError("requested too many random bytes");
                var n = r.allocUnsafe(e);
                if (e > 0)
                    if (e > 65536)
                        for (var a = 0; a < e; a += 65536) o.getRandomValues(n.slice(a, a + 65536));
                    else o.getRandomValues(n);
                return "function" == typeof t ? i.nextTick(function() {
                    t(null, n)
                }) : n
            } : t.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 157,
        "safe-buffer": 183
    }],
    166: [function(e, t, i) {
        (function(t, n) {
            "use strict";

            function r() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            var o = e("safe-buffer"),
                a = e("randombytes"),
                s = o.Buffer,
                c = o.kMaxLength,
                f = n.crypto || n.msCrypto,
                h = Math.pow(2, 32) - 1;

            function u(e, t) {
                if ("number" != typeof e || e != e) throw new TypeError("offset must be a number");
                if (e > h || e < 0) throw new TypeError("offset must be a uint32");
                if (e > c || e > t) throw new RangeError("offset out of range")
            }

            function d(e, t, i) {
                if ("number" != typeof e || e != e) throw new TypeError("size must be a number");
                if (e > h || e < 0) throw new TypeError("size must be a uint32");
                if (e + t > i || e > c) throw new RangeError("buffer too small")
            }

            function l(e, i, n, r) {
                if (t.browser) {
                    var o = e.buffer,
                        s = new Uint8Array(o, i, n);
                    return f.getRandomValues(s), r ? void t.nextTick(function() {
                        r(null, e)
                    }) : e
                }
                if (!r) return a(n).copy(e, i), e;
                a(n, function(t, n) {
                    if (t) return r(t);
                    n.copy(e, i), r(null, e)
                })
            }
            f && f.getRandomValues || !t.browser ? (i.randomFill = function(e, t, i, r) {
                if (!(s.isBuffer(e) || e instanceof n.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof t) r = t, t = 0, i = e.length;
                else if ("function" == typeof i) r = i, i = e.length - t;
                else if ("function" != typeof r) throw new TypeError('"cb" argument must be a function');
                return u(t, e.length), d(i, t, e.length), l(e, t, i, r)
            }, i.randomFillSync = function(e, t, i) {
                if (void 0 === t && (t = 0), !(s.isBuffer(e) || e instanceof n.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                return u(t, e.length), void 0 === i && (i = e.length - t), d(i, t, e.length), l(e, t, i)
            }) : (i.randomFill = r, i.randomFillSync = r)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 157,
        randombytes: 165,
        "safe-buffer": 183
    }],
    167: [function(e, t) {
        t.exports = e("./lib/_stream_duplex.js")
    }, {
        "./lib/_stream_duplex.js": 168
    }],
    168: [function(e, t) {
        "use strict";
        var i = e("process-nextick-args"),
            n = Object.keys || function(e) {
                var t = [];
                for (var i in e) t.push(i);
                return t
            };
        t.exports = h;
        var r = Object.create(e("core-util-is"));
        r.inherits = e("inherits");
        var o = e("./_stream_readable"),
            a = e("./_stream_writable");
        r.inherits(h, o);
        for (var s = n(a.prototype), c = 0; c < s.length; c++) {
            var f = s[c];
            h.prototype[f] || (h.prototype[f] = a.prototype[f])
        }

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            o.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", u)
        }

        function u() {
            this.allowHalfOpen || this._writableState.ended || i.nextTick(d, this)
        }

        function d(e) {
            e.end()
        }
        Object.defineProperty(h.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), Object.defineProperty(h.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
            }
        }), h.prototype._destroy = function(e, t) {
            this.push(null), this.end(), i.nextTick(t, e)
        }
    }, {
        "./_stream_readable": 170,
        "./_stream_writable": 172,
        "core-util-is": 68,
        inherits: 138,
        "process-nextick-args": 156
    }],
    169: [function(e, t) {
        "use strict";
        t.exports = r;
        var i = e("./_stream_transform"),
            n = Object.create(e("core-util-is"));

        function r(e) {
            if (!(this instanceof r)) return new r(e);
            i.call(this, e)
        }
        n.inherits = e("inherits"), n.inherits(r, i), r.prototype._transform = function(e, t, i) {
            i(null, e)
        }
    }, {
        "./_stream_transform": 171,
        "core-util-is": 68,
        inherits: 138
    }],
    170: [function(e, t) {
        (function(i, n) {
            "use strict";
            var r = e("process-nextick-args");
            t.exports = w;
            var o, a = e("isarray");
            w.ReadableState = v, e("events").EventEmitter;
            var s = function(e, t) {
                    return e.listeners(t).length
                },
                c = e("./internal/streams/stream"),
                f = e("safe-buffer").Buffer,
                h = n.Uint8Array || function() {};

            function u(e) {
                return f.from(e)
            }
            var d = Object.create(e("core-util-is"));
            d.inherits = e("inherits");
            var l = e("util"),
                p = void 0;
            p = l && l.debuglog ? l.debuglog("stream") : function() {};
            var g, b = e("./internal/streams/BufferList"),
                m = e("./internal/streams/destroy");
            d.inherits(w, c);
            var y = ["error", "close", "destroy", "pause", "resume"];

            function _(e, t, i) {
                if ("function" == typeof e.prependListener) return e.prependListener(t, i);
                e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i)
            }

            function v(t, i) {
                t = t || {};
                var n = i instanceof(o = o || e("./_stream_duplex"));
                this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var r = t.highWaterMark,
                    a = t.readableHighWaterMark,
                    s = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (g || (g = e("string_decoder/").StringDecoder), this.decoder = new g(t.encoding), this.encoding = t.encoding)
            }

            function w(t) {
                if (o = o || e("./_stream_duplex"), !(this instanceof w)) return new w(t);
                this._readableState = new v(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
            }

            function M(e, t, i, n, r) {
                var o, a = e._readableState;
                return null === t ? (a.reading = !1, N(e, a)) : (r || (o = C(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === f.prototype || (t = u(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : S(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !i ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? S(e, a, t, !1) : x(e, a)) : S(e, a, t, !1))) : n || (a.reading = !1)), E(a)
            }

            function S(e, t, i, n) {
                t.flowing && 0 === t.length && !t.sync ? (e.emit("data", i), e.read(0)) : (t.length += t.objectMode ? 1 : i.length, n ? t.buffer.unshift(i) : t.buffer.push(i), t.needReadable && R(e)), x(e, t)
            }

            function C(e, t) {
                var i, n;
                return n = t, f.isBuffer(n) || n instanceof h || "string" == typeof t || void 0 === t || e.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")), i
            }

            function E(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }
            Object.defineProperty(w.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), w.prototype.destroy = m.destroy, w.prototype._undestroy = m.undestroy, w.prototype._destroy = function(e, t) {
                this.push(null), t(e)
            }, w.prototype.push = function(e, t) {
                var i, n = this._readableState;
                return n.objectMode ? i = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = f.from(e, t), t = ""), i = !0), M(this, e, t, !1, i)
            }, w.prototype.unshift = function(e) {
                return M(this, e, null, !0, !1)
            }, w.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, w.prototype.setEncoding = function(t) {
                return g || (g = e("string_decoder/").StringDecoder), this._readableState.decoder = new g(t), this._readableState.encoding = t, this
            };
            var k = 8388608;

            function P(e) {
                return e >= k ? e = k : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function I(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = P(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function N(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var i = t.decoder.end();
                        i && i.length && (t.buffer.push(i), t.length += t.objectMode ? 1 : i.length)
                    }
                    t.ended = !0, R(e)
                }
            }

            function R(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (p("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? r.nextTick(B, e) : B(e))
            }

            function B(e) {
                p("emit readable"), e.emit("readable"), j(e)
            }

            function x(e, t) {
                t.readingMore || (t.readingMore = !0, r.nextTick(T, e, t))
            }

            function T(e, t) {
                for (var i = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"), e.read(0), i !== t.length);) i = t.length;
                t.readingMore = !1
            }

            function A(e) {
                return function() {
                    var t = e._readableState;
                    p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, j(e))
                }
            }

            function L(e) {
                p("readable nexttick read 0"), e.read(0)
            }

            function D(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(O, e, t))
            }

            function O(e, t) {
                t.reading || (p("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), j(e), t.flowing && !t.reading && e.read(0)
            }

            function j(e) {
                var t = e._readableState;
                for (p("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function U(e, t) {
                return 0 === t.length ? null : (t.objectMode ? i = t.buffer.shift() : !e || e >= t.length ? (i = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : i = F(e, t.buffer, t.decoder), i);
                var i
            }

            function F(e, t, i) {
                var n;
                return e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : i ? z(e, t) : q(e, t), n
            }

            function z(e, t) {
                var i = t.head,
                    n = 1,
                    r = i.data;
                for (e -= r.length; i = i.next;) {
                    var o = i.data,
                        a = e > o.length ? o.length : e;
                    if (a === o.length ? r += o : r += o.slice(0, e), 0 == (e -= a)) {
                        a === o.length ? (++n, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(a));
                        break
                    }++n
                }
                return t.length -= n, r
            }

            function q(e, t) {
                var i = f.allocUnsafe(e),
                    n = t.head,
                    r = 1;
                for (n.data.copy(i), e -= n.data.length; n = n.next;) {
                    var o = n.data,
                        a = e > o.length ? o.length : e;
                    if (o.copy(i, i.length - e, 0, a), 0 == (e -= a)) {
                        a === o.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                        break
                    }++r
                }
                return t.length -= r, i
            }

            function G(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, r.nextTick(V, t, e))
            }

            function V(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function H(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            }
            w.prototype.read = function(e) {
                p("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    i = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? G(this) : R(this), null;
                if (0 === (e = I(e, t)) && t.ended) return 0 === t.length && G(this), null;
                var n, r = t.needReadable;
                return p("need readable", r), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", r = !0), t.ended || t.reading ? p("reading or ended", r = !1) : r && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = I(i, t))), null === (n = e > 0 ? U(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), i !== e && t.ended && G(this)), null !== n && this.emit("data", n), n
            }, w.prototype._read = function() {
                this.emit("error", new Error("_read() is not implemented"))
            }, w.prototype.pipe = function(e, t) {
                var n = this,
                    o = this._readableState;
                switch (o.pipesCount) {
                    case 0:
                        o.pipes = e;
                        break;
                    case 1:
                        o.pipes = [o.pipes, e];
                        break;
                    default:
                        o.pipes.push(e)
                }
                o.pipesCount += 1, p("pipe count=%d opts=%j", o.pipesCount, t);
                var a = t && !1 === t.end || e === i.stdout || e === i.stderr ? y : f;

                function c(t, i) {
                    p("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, p("cleanup"), e.removeListener("close", b), e.removeListener("finish", m), e.removeListener("drain", h), e.removeListener("error", g), e.removeListener("unpipe", c), n.removeListener("end", f), n.removeListener("end", y), n.removeListener("data", l), u = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h())
                }

                function f() {
                    p("onend"), e.end()
                }
                o.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", c);
                var h = A(n);
                e.on("drain", h);
                var u = !1;
                var d = !1;

                function l(t) {
                    p("ondata"), d = !1, !1 !== e.write(t) || d || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== H(o.pipes, e)) && !u && (p("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, d = !0), n.pause())
                }

                function g(t) {
                    p("onerror", t), y(), e.removeListener("error", g), 0 === s(e, "error") && e.emit("error", t)
                }

                function b() {
                    e.removeListener("finish", m), y()
                }

                function m() {
                    p("onfinish"), e.removeListener("close", b), y()
                }

                function y() {
                    p("unpipe"), n.unpipe(e)
                }
                return n.on("data", l), _(e, "error", g), e.once("close", b), e.once("finish", m), e.emit("pipe", n), o.flowing || (p("pipe resume"), n.resume()), e
            }, w.prototype.unpipe = function(e) {
                var t = this._readableState,
                    i = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, i), this);
                if (!e) {
                    var n = t.pipes,
                        r = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < r; o++) n[o].emit("unpipe", this, i);
                    return this
                }
                var a = H(t.pipes, e);
                return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, i), this)
            }, w.prototype.on = function(e, t) {
                var i = c.prototype.on.call(this, e, t);
                if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) {
                    var n = this._readableState;
                    n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && R(this) : r.nextTick(L, this))
                }
                return i
            }, w.prototype.addListener = w.prototype.on, w.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (p("resume"), e.flowing = !0, D(this, e)), this
            }, w.prototype.pause = function() {
                return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, w.prototype.wrap = function(e) {
                var t = this,
                    i = this._readableState,
                    n = !1;
                for (var r in e.on("end", function() {
                        if (p("wrapped end"), i.decoder && !i.ended) {
                            var e = i.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(r) {
                        p("wrapped data"), i.decoder && (r = i.decoder.write(r)), i.objectMode && null == r || (i.objectMode || r && r.length) && (t.push(r) || (n = !0, e.pause()))
                    }), e) void 0 === this[r] && "function" == typeof e[r] && (this[r] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(r));
                for (var o = 0; o < y.length; o++) e.on(y[o], this.emit.bind(this, y[o]));
                return this._read = function(t) {
                    p("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, Object.defineProperty(w.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), w._fromList = U
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./_stream_duplex": 168,
        "./internal/streams/BufferList": 173,
        "./internal/streams/destroy": 174,
        "./internal/streams/stream": 175,
        _process: 157,
        "core-util-is": 68,
        events: 104,
        inherits: 138,
        isarray: 176,
        "process-nextick-args": 156,
        "safe-buffer": 183,
        "string_decoder/": 177,
        util: 19
    }],
    171: [function(e, t) {
        "use strict";
        t.exports = o;
        var i = e("./_stream_duplex"),
            n = Object.create(e("core-util-is"));

        function r(e, t) {
            var i = this._transformState;
            i.transforming = !1;
            var n = i.writecb;
            if (!n) return this.emit("error", new Error("write callback called multiple times"));
            i.writechunk = null, i.writecb = null, null != t && this.push(t), n(e);
            var r = this._readableState;
            r.reading = !1, (r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            i.call(this, e), this._transformState = {
                afterTransform: r.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", a)
        }

        function a() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function(t, i) {
                s(e, t, i)
            }) : s(this, null, null)
        }

        function s(e, t, i) {
            if (t) return e.emit("error", t);
            if (null != i && e.push(i), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        n.inherits = e("inherits"), n.inherits(o, i), o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, i.prototype.push.call(this, e, t)
        }, o.prototype._transform = function() {
            throw new Error("_transform() is not implemented")
        }, o.prototype._write = function(e, t, i) {
            var n = this._transformState;
            if (n.writecb = i, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var r = this._readableState;
                (n.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
            }
        }, o.prototype._read = function() {
            var e = this._transformState;
            null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
        }, o.prototype._destroy = function(e, t) {
            var n = this;
            i.prototype._destroy.call(this, e, function(e) {
                t(e), n.emit("close")
            })
        }
    }, {
        "./_stream_duplex": 168,
        "core-util-is": 68,
        inherits: 138
    }],
    172: [function(e, t) {
        (function(i, n) {
            "use strict";
            var r = e("process-nextick-args");

            function o(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    L(t, e)
                }
            }
            t.exports = y;
            var a, s = !i.browser && ["v0.10", "v0.9."].indexOf(i.version.slice(0, 5)) > -1 ? setImmediate : r.nextTick;
            y.WritableState = m;
            var c = Object.create(e("core-util-is"));
            c.inherits = e("inherits");
            var f = {
                    deprecate: e("util-deprecate")
                },
                h = e("./internal/streams/stream"),
                u = e("safe-buffer").Buffer,
                d = n.Uint8Array || function() {};

            function l(e) {
                return u.from(e)
            }
            var p, g = e("./internal/streams/destroy");

            function b() {}

            function m(t, i) {
                a = a || e("./_stream_duplex"), t = t || {};
                var n = i instanceof a;
                this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var r = t.highWaterMark,
                    s = t.writableHighWaterMark,
                    c = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : n && (s || 0 === s) ? s : c, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var f = !1 === t.decodeStrings;
                this.decodeStrings = !f, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    k(i, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
            }

            function y(t) {
                if (a = a || e("./_stream_duplex"), !(p.call(y, this) || this instanceof a)) return new y(t);
                this._writableState = new m(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), h.call(this)
            }

            function _(e, t) {
                var i = new Error("write after end");
                e.emit("error", i), r.nextTick(t, i)
            }

            function v(e, t, i, n) {
                var o = !0,
                    a = !1;
                return null === i ? a = new TypeError("May not write null values to stream") : "string" == typeof i || void 0 === i || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), r.nextTick(n, a), o = !1), o
            }

            function w(e, t, i) {
                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, i)), t
            }

            function M(e, t, i, n, r, o) {
                if (!i) {
                    var a = w(t, n, r);
                    n !== a && (i = !0, r = "buffer", n = a)
                }
                var s = t.objectMode ? 1 : n.length;
                t.length += s;
                var c = t.length < t.highWaterMark;
                if (c || (t.needDrain = !0), t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: r,
                        isBuf: i,
                        callback: o,
                        next: null
                    }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else S(e, t, !1, s, n, r, o);
                return c
            }

            function S(e, t, i, n, r, o, a) {
                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, i ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite), t.sync = !1
            }

            function C(e, t, i, n, o) {
                --t.pendingcb, i ? (r.nextTick(o, n), r.nextTick(T, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (o(n), e._writableState.errorEmitted = !0, e.emit("error", n), T(e, t))
            }

            function E(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function k(e, t) {
                var i = e._writableState,
                    n = i.sync,
                    r = i.writecb;
                if (E(i), t) C(e, i, n, t, r);
                else {
                    var o = R(i);
                    o || i.corked || i.bufferProcessing || !i.bufferedRequest || N(e, i), n ? s(P, e, i, o, r) : P(e, i, o, r)
                }
            }

            function P(e, t, i, n) {
                i || I(e, t), t.pendingcb--, n(), T(e, t)
            }

            function I(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function N(e, t) {
                t.bufferProcessing = !0;
                var i = t.bufferedRequest;
                if (e._writev && i && i.next) {
                    var n = t.bufferedRequestCount,
                        r = new Array(n),
                        a = t.corkedRequestsFree;
                    a.entry = i;
                    for (var s = 0, c = !0; i;) r[s] = i, i.isBuf || (c = !1), i = i.next, s += 1;
                    r.allBuffers = c, S(e, t, !0, t.length, r, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0
                } else {
                    for (; i;) {
                        var f = i.chunk,
                            h = i.encoding,
                            u = i.callback;
                        if (S(e, t, !1, t.objectMode ? 1 : f.length, f, h, u), i = i.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === i && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = i, t.bufferProcessing = !1
            }

            function R(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function B(e, t) {
                e._final(function(i) {
                    t.pendingcb--, i && e.emit("error", i), t.prefinished = !0, e.emit("prefinish"), T(e, t)
                })
            }

            function x(e, t) {
                t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, r.nextTick(B, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
            }

            function T(e, t) {
                var i = R(t);
                return i && (x(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), i
            }

            function A(e, t, i) {
                t.ending = !0, T(e, t), i && (t.finished ? r.nextTick(i) : e.once("finish", i)), t.ended = !0, e.writable = !1
            }

            function L(e, t, i) {
                var n = e.entry;
                for (e.entry = null; n;) {
                    var r = n.callback;
                    t.pendingcb--, r(i), n = n.next
                }
                t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
            }
            c.inherits(y, h), m.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(m.prototype, "buffer", {
                            get: f.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, {
                    value: function(e) {
                        return !!p.call(this, e) || this === y && e && e._writableState instanceof m
                    }
                })) : p = function(e) {
                    return e instanceof this
                }, y.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }, y.prototype.write = function(e, t, i) {
                    var n, r = this._writableState,
                        o = !1,
                        a = !r.objectMode && (n = e, u.isBuffer(n) || n instanceof d);
                    return a && !u.isBuffer(e) && (e = l(e)), "function" == typeof t && (i = t, t = null), a ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof i && (i = b), r.ended ? _(this, i) : (a || v(this, r, e, i)) && (r.pendingcb++, o = M(this, r, a, e, t, i)), o
                }, y.prototype.cork = function() {
                    this._writableState.corked++
                }, y.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || N(this, e))
                }, y.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(y.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), y.prototype._write = function(e, t, i) {
                    i(new Error("_write() is not implemented"))
                }, y.prototype._writev = null, y.prototype.end = function(e, t, i) {
                    var n = this._writableState;
                    "function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || A(this, n, i)
                }, Object.defineProperty(y.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), y.prototype.destroy = g.destroy, y.prototype._undestroy = g.undestroy, y.prototype._destroy = function(e, t) {
                    this.end(), t(e)
                }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./_stream_duplex": 168,
        "./internal/streams/destroy": 174,
        "./internal/streams/stream": 175,
        _process: 157,
        "core-util-is": 68,
        inherits: 138,
        "process-nextick-args": 156,
        "safe-buffer": 183,
        "util-deprecate": 195
    }],
    173: [function(e, t) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var n = e("safe-buffer").Buffer,
            r = e("util");
        t.exports = function() {
            function e() {
                i(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, e.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, e.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, i = "" + t.data; t = t.next;) i += e + t.data;
                return i
            }, e.prototype.concat = function(e) {
                if (0 === this.length) return n.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t, i, r = n.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = r, i = a, o.data.copy(t, i), a += o.data.length, o = o.next;
                return r
            }, e
        }(), r && r.inspect && r.inspect.custom && (t.exports.prototype[r.inspect.custom] = function() {
            var e = r.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    }, {
        "safe-buffer": 183,
        util: 19
    }],
    174: [function(e, t) {
        "use strict";
        var i = e("process-nextick-args");

        function n(e, t) {
            e.emit("error", t)
        }
        t.exports = {
            destroy: function(e, t) {
                var r = this,
                    o = this._readableState && this._readableState.destroyed,
                    a = this._writableState && this._writableState.destroyed;
                return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || i.nextTick(n, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                    !t && e ? (i.nextTick(n, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                }), this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
            }
        }
    }, {
        "process-nextick-args": 156
    }],
    175: [function(e, t, i) {
        arguments[4][60][0].apply(i, arguments)
    }, {
        dup: 60,
        events: 104
    }],
    176: [function(e, t, i) {
        arguments[4][66][0].apply(i, arguments)
    }, {
        dup: 66
    }],
    177: [function(e, t, i) {
        arguments[4][63][0].apply(i, arguments)
    }, {
        dup: 63,
        "safe-buffer": 183
    }],
    178: [function(e, t) {
        t.exports = e("./readable").PassThrough
    }, {
        "./readable": 179
    }],
    179: [function(e, t, i) {
        (i = t.exports = e("./lib/_stream_readable.js")).Stream = i, i.Readable = i, i.Writable = e("./lib/_stream_writable.js"), i.Duplex = e("./lib/_stream_duplex.js"), i.Transform = e("./lib/_stream_transform.js"), i.PassThrough = e("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_duplex.js": 168,
        "./lib/_stream_passthrough.js": 169,
        "./lib/_stream_readable.js": 170,
        "./lib/_stream_transform.js": 171,
        "./lib/_stream_writable.js": 172
    }],
    180: [function(e, t) {
        t.exports = e("./readable").Transform
    }, {
        "./readable": 179
    }],
    181: [function(e, t) {
        t.exports = e("./lib/_stream_writable.js")
    }, {
        "./lib/_stream_writable.js": 172
    }],
    182: [function(e, t) {
        "use strict";
        var i = e("buffer").Buffer,
            n = e("inherits"),
            r = e("hash-base"),
            o = new Array(16),
            a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            s = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            u = [1352829926, 1548603684, 1836072691, 2053994217, 0];

        function d() {
            r.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
        }

        function l(e, t) {
            return e << t | e >>> 32 - t
        }

        function p(e, t, i, n, r, o, a, s) {
            return l(e + (t ^ i ^ n) + o + a | 0, s) + r | 0
        }

        function g(e, t, i, n, r, o, a, s) {
            return l(e + (t & i | ~t & n) + o + a | 0, s) + r | 0
        }

        function b(e, t, i, n, r, o, a, s) {
            return l(e + ((t | ~i) ^ n) + o + a | 0, s) + r | 0
        }

        function m(e, t, i, n, r, o, a, s) {
            return l(e + (t & n | i & ~n) + o + a | 0, s) + r | 0
        }

        function y(e, t, i, n, r, o, a, s) {
            return l(e + (t ^ (i | ~n)) + o + a | 0, s) + r | 0
        }
        n(d, r), d.prototype._update = function() {
            for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
            for (var i = 0 | this._a, n = 0 | this._b, r = 0 | this._c, d = 0 | this._d, _ = 0 | this._e, v = 0 | this._a, w = 0 | this._b, M = 0 | this._c, S = 0 | this._d, C = 0 | this._e, E = 0; E < 80; E += 1) {
                var k, P;
                E < 16 ? (k = p(i, n, r, d, _, e[a[E]], h[0], c[E]), P = y(v, w, M, S, C, e[s[E]], u[0], f[E])) : E < 32 ? (k = g(i, n, r, d, _, e[a[E]], h[1], c[E]), P = m(v, w, M, S, C, e[s[E]], u[1], f[E])) : E < 48 ? (k = b(i, n, r, d, _, e[a[E]], h[2], c[E]), P = b(v, w, M, S, C, e[s[E]], u[2], f[E])) : E < 64 ? (k = m(i, n, r, d, _, e[a[E]], h[3], c[E]), P = g(v, w, M, S, C, e[s[E]], u[3], f[E])) : (k = y(i, n, r, d, _, e[a[E]], h[4], c[E]), P = p(v, w, M, S, C, e[s[E]], u[4], f[E])), i = _, _ = d, d = l(r, 10), r = n, n = k, v = C, C = S, S = l(M, 10), M = w, w = P
            }
            var I = this._b + r + S | 0;
            this._b = this._c + d + C | 0, this._c = this._d + _ + v | 0, this._d = this._e + i + w | 0, this._e = this._a + n + M | 0, this._a = I
        }, d.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var e = i.alloc ? i.alloc(20) : new i(20);
            return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
        }, t.exports = d
    }, {
        buffer: 65,
        "hash-base": 106,
        inherits: 138
    }],
    183: [function(e, t, i) {
        var n = e("buffer"),
            r = n.Buffer;

        function o(e, t) {
            for (var i in e) t[i] = e[i]
        }

        function a(e, t, i) {
            return r(e, t, i)
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = n : (o(n, i), i.Buffer = a), o(r, a), a.from = function(e, t, i) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return r(e, t, i)
        }, a.alloc = function(e, t, i) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var n = r(e);
            return void 0 !== t ? "string" == typeof i ? n.fill(t, i) : n.fill(t) : n.fill(0), n
        }, a.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return r(e)
        }, a.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }, {
        buffer: 65
    }],
    184: [function(e, t) {
        (function(i) {
            "use strict";
            var n, r = e("buffer"),
                o = r.Buffer,
                a = {};
            for (n in r) r.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (a[n] = r[n]);
            var s = a.Buffer = {};
            for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (s[n] = o[n]);
            if (a.Buffer.prototype = o.prototype, s.from && s.from !== Uint8Array.from || (s.from = function(e, t, i) {
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
                    if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    return o(e, t, i)
                }), s.alloc || (s.alloc = function(e, t, i) {
                    if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
                    if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    var n = o(e);
                    return t && 0 !== t.length ? "string" == typeof i ? n.fill(t, i) : n.fill(t) : n.fill(0), n
                }), !a.kStringMaxLength) try {
                a.kStringMaxLength = i.binding("buffer").kStringMaxLength
            } catch (c) {}
            a.constants || (a.constants = {
                MAX_LENGTH: a.kMaxLength
            }, a.kStringMaxLength && (a.constants.MAX_STRING_LENGTH = a.kStringMaxLength)), t.exports = a
        }).call(this, e("_process"))
    }, {
        _process: 157,
        buffer: 65
    }],
    185: [function(e, t) {
        var i = e("safe-buffer").Buffer;

        function n(e, t) {
            this._block = i.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
        }
        n.prototype.update = function(e, t) {
            "string" == typeof e && (t = t || "utf8", e = i.from(e, t));
            for (var n = this._block, r = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) {
                for (var c = a % r, f = Math.min(o - s, r - c), h = 0; h < f; h++) n[c + h] = e[s + h];
                s += f, (a += f) % r == 0 && this._update(n)
            }
            return this._len += o, this
        }, n.prototype.digest = function(e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var i = 8 * this._len;
            if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
            else {
                var n = (4294967295 & i) >>> 0,
                    r = (i - n) / 4294967296;
                this._block.writeUInt32BE(r, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
            }
            this._update(this._block);
            var o = this._hash();
            return e ? o.toString(e) : o
        }, n.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, t.exports = n
    }, {
        "safe-buffer": 183
    }],
    186: [function(e, t, i) {
        (i = t.exports = function(e) {
            e = e.toLowerCase();
            var t = i[e];
            if (!t) throw new Error(e + " is not supported (we accept pull requests)");
            return new t
        }).sha = e("./sha"), i.sha1 = e("./sha1"), i.sha224 = e("./sha224"), i.sha256 = e("./sha256"), i.sha384 = e("./sha384"), i.sha512 = e("./sha512")
    }, {
        "./sha": 187,
        "./sha1": 188,
        "./sha224": 189,
        "./sha256": 190,
        "./sha384": 191,
        "./sha512": 192
    }],
    187: [function(e, t) {
        var i = e("inherits"),
            n = e("./hash"),
            r = e("safe-buffer").Buffer,
            o = [1518500249, 1859775393, -1894007588, -899497514],
            a = new Array(80);

        function s() {
            this.init(), this._w = a, n.call(this, 64, 56)
        }

        function c(e) {
            return e << 30 | e >>> 2
        }

        function f(e, t, i, n) {
            return 0 === e ? t & i | ~t & n : 2 === e ? t & i | t & n | i & n : t ^ i ^ n
        }
        i(s, n), s.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, s.prototype._update = function(e) {
            for (var t, i = this._w, n = 0 | this._a, r = 0 | this._b, a = 0 | this._c, s = 0 | this._d, h = 0 | this._e, u = 0; u < 16; ++u) i[u] = e.readInt32BE(4 * u);
            for (; u < 80; ++u) i[u] = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
            for (var d = 0; d < 80; ++d) {
                var l = ~~(d / 20),
                    p = 0 | ((t = n) << 5 | t >>> 27) + f(l, r, a, s) + h + i[d] + o[l];
                h = s, s = a, a = c(r), r = n, n = p
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = a + this._c | 0, this._d = s + this._d | 0, this._e = h + this._e | 0
        }, s.prototype._hash = function() {
            var e = r.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, t.exports = s
    }, {
        "./hash": 185,
        inherits: 138,
        "safe-buffer": 183
    }],
    188: [function(e, t) {
        var i = e("inherits"),
            n = e("./hash"),
            r = e("safe-buffer").Buffer,
            o = [1518500249, 1859775393, -1894007588, -899497514],
            a = new Array(80);

        function s() {
            this.init(), this._w = a, n.call(this, 64, 56)
        }

        function c(e) {
            return e << 5 | e >>> 27
        }

        function f(e) {
            return e << 30 | e >>> 2
        }

        function h(e, t, i, n) {
            return 0 === e ? t & i | ~t & n : 2 === e ? t & i | t & n | i & n : t ^ i ^ n
        }
        i(s, n), s.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, s.prototype._update = function(e) {
            for (var t, i = this._w, n = 0 | this._a, r = 0 | this._b, a = 0 | this._c, s = 0 | this._d, u = 0 | this._e, d = 0; d < 16; ++d) i[d] = e.readInt32BE(4 * d);
            for (; d < 80; ++d) i[d] = (t = i[d - 3] ^ i[d - 8] ^ i[d - 14] ^ i[d - 16]) << 1 | t >>> 31;
            for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20),
                    g = c(n) + h(p, r, a, s) + u + i[l] + o[p] | 0;
                u = s, s = a, a = f(r), r = n, n = g
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = a + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0
        }, s.prototype._hash = function() {
            var e = r.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, t.exports = s
    }, {
        "./hash": 185,
        inherits: 138,
        "safe-buffer": 183
    }],
    189: [function(e, t) {
        var i = e("inherits"),
            n = e("./sha256"),
            r = e("./hash"),
            o = e("safe-buffer").Buffer,
            a = new Array(64);

        function s() {
            this.init(), this._w = a, r.call(this, 64, 56)
        }
        i(s, n), s.prototype.init = function() {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
        }, s.prototype._hash = function() {
            var e = o.allocUnsafe(28);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
        }, t.exports = s
    }, {
        "./hash": 185,
        "./sha256": 190,
        inherits: 138,
        "safe-buffer": 183
    }],
    190: [function(e, t) {
        var i = e("inherits"),
            n = e("./hash"),
            r = e("safe-buffer").Buffer,
            o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            a = new Array(64);

        function s() {
            this.init(), this._w = a, n.call(this, 64, 56)
        }

        function c(e, t, i) {
            return i ^ e & (t ^ i)
        }

        function f(e, t, i) {
            return e & t | i & (e | t)
        }

        function h(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
        }

        function u(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
        }

        function d(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
        }
        i(s, n), s.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
        }, s.prototype._update = function(e) {
            for (var t, i = this._w, n = 0 | this._a, r = 0 | this._b, a = 0 | this._c, s = 0 | this._d, l = 0 | this._e, p = 0 | this._f, g = 0 | this._g, b = 0 | this._h, m = 0; m < 16; ++m) i[m] = e.readInt32BE(4 * m);
            for (; m < 64; ++m) i[m] = 0 | (((t = i[m - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + i[m - 7] + d(i[m - 15]) + i[m - 16];
            for (var y = 0; y < 64; ++y) {
                var _ = b + u(l) + c(l, p, g) + o[y] + i[y] | 0,
                    v = h(n) + f(n, r, a) | 0;
                b = g, g = p, p = l, l = s + _ | 0, s = a, a = r, r = n, n = _ + v | 0
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = a + this._c | 0, this._d = s + this._d | 0, this._e = l + this._e | 0, this._f = p + this._f | 0, this._g = g + this._g | 0, this._h = b + this._h | 0
        }, s.prototype._hash = function() {
            var e = r.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
        }, t.exports = s
    }, {
        "./hash": 185,
        inherits: 138,
        "safe-buffer": 183
    }],
    191: [function(e, t) {
        var i = e("inherits"),
            n = e("./sha512"),
            r = e("./hash"),
            o = e("safe-buffer").Buffer,
            a = new Array(160);

        function s() {
            this.init(), this._w = a, r.call(this, 128, 112)
        }
        i(s, n), s.prototype.init = function() {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
        }, s.prototype._hash = function() {
            var e = o.allocUnsafe(48);

            function t(t, i, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(i, n + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
        }, t.exports = s
    }, {
        "./hash": 185,
        "./sha512": 192,
        inherits: 138,
        "safe-buffer": 183
    }],
    192: [function(e, t) {
        var i = e("inherits"),
            n = e("./hash"),
            r = e("safe-buffer").Buffer,
            o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            a = new Array(160);

        function s() {
            this.init(), this._w = a, n.call(this, 128, 112)
        }

        function c(e, t, i) {
            return i ^ e & (t ^ i)
        }

        function f(e, t, i) {
            return e & t | i & (e | t)
        }

        function h(e, t) {
            return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
        }

        function u(e, t) {
            return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
        }

        function d(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
        }

        function l(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
        }

        function p(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
        }

        function g(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
        }

        function b(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0
        }
        i(s, n), s.prototype.init = function() {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
        }, s.prototype._update = function(e) {
            for (var t = this._w, i = 0 | this._ah, n = 0 | this._bh, r = 0 | this._ch, a = 0 | this._dh, s = 0 | this._eh, m = 0 | this._fh, y = 0 | this._gh, _ = 0 | this._hh, v = 0 | this._al, w = 0 | this._bl, M = 0 | this._cl, S = 0 | this._dl, C = 0 | this._el, E = 0 | this._fl, k = 0 | this._gl, P = 0 | this._hl, I = 0; I < 32; I += 2) t[I] = e.readInt32BE(4 * I), t[I + 1] = e.readInt32BE(4 * I + 4);
            for (; I < 160; I += 2) {
                var N = t[I - 30],
                    R = t[I - 30 + 1],
                    B = d(N, R),
                    x = l(R, N),
                    T = p(N = t[I - 4], R = t[I - 4 + 1]),
                    A = g(R, N),
                    L = t[I - 14],
                    D = t[I - 14 + 1],
                    O = t[I - 32],
                    j = t[I - 32 + 1],
                    U = x + D | 0,
                    F = B + L + b(U, x) | 0;
                F = (F = F + T + b(U = U + A | 0, A) | 0) + O + b(U = U + j | 0, j) | 0, t[I] = F, t[I + 1] = U
            }
            for (var z = 0; z < 160; z += 2) {
                F = t[z], U = t[z + 1];
                var q = f(i, n, r),
                    G = f(v, w, M),
                    V = h(i, v),
                    H = h(v, i),
                    W = u(s, C),
                    K = u(C, s),
                    J = o[z],
                    Z = o[z + 1],
                    Y = c(s, m, y),
                    X = c(C, E, k),
                    Q = P + K | 0,
                    $ = _ + W + b(Q, P) | 0;
                $ = ($ = ($ = $ + Y + b(Q = Q + X | 0, X) | 0) + J + b(Q = Q + Z | 0, Z) | 0) + F + b(Q = Q + U | 0, U) | 0;
                var ee = H + G | 0,
                    te = V + q + b(ee, H) | 0;
                _ = y, P = k, y = m, k = E, m = s, E = C, s = a + $ + b(C = S + Q | 0, S) | 0, a = r, S = M, r = n, M = w, n = i, w = v, i = $ + te + b(v = Q + ee | 0, Q) | 0
            }
            this._al = this._al + v | 0, this._bl = this._bl + w | 0, this._cl = this._cl + M | 0, this._dl = this._dl + S | 0, this._el = this._el + C | 0, this._fl = this._fl + E | 0, this._gl = this._gl + k | 0, this._hl = this._hl + P | 0, this._ah = this._ah + i + b(this._al, v) | 0, this._bh = this._bh + n + b(this._bl, w) | 0, this._ch = this._ch + r + b(this._cl, M) | 0, this._dh = this._dh + a + b(this._dl, S) | 0, this._eh = this._eh + s + b(this._el, C) | 0, this._fh = this._fh + m + b(this._fl, E) | 0, this._gh = this._gh + y + b(this._gl, k) | 0, this._hh = this._hh + _ + b(this._hl, P) | 0
        }, s.prototype._hash = function() {
            var e = r.allocUnsafe(64);

            function t(t, i, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(i, n + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
        }, t.exports = s
    }, {
        "./hash": 185,
        inherits: 138,
        "safe-buffer": 183
    }],
    193: [function(e, t) {
        t.exports = n;
        var i = e("events").EventEmitter;

        function n() {
            i.call(this)
        }
        e("inherits")(n, i), n.Readable = e("readable-stream/readable.js"), n.Writable = e("readable-stream/writable.js"), n.Duplex = e("readable-stream/duplex.js"), n.Transform = e("readable-stream/transform.js"), n.PassThrough = e("readable-stream/passthrough.js"), n.Stream = n, n.prototype.pipe = function(e, t) {
            var n = this;

            function r(t) {
                e.writable && !1 === e.write(t) && n.pause && n.pause()
            }

            function o() {
                n.readable && n.resume && n.resume()
            }
            n.on("data", r), e.on("drain", o), e._isStdio || t && !1 === t.end || (n.on("end", s), n.on("close", c));
            var a = !1;

            function s() {
                a || (a = !0, e.end())
            }

            function c() {
                a || (a = !0, "function" == typeof e.destroy && e.destroy())
            }

            function f(e) {
                if (h(), 0 === i.listenerCount(this, "error")) throw e
            }

            function h() {
                n.removeListener("data", r), e.removeListener("drain", o), n.removeListener("end", s), n.removeListener("close", c), n.removeListener("error", f), e.removeListener("error", f), n.removeListener("end", h), n.removeListener("close", h), e.removeListener("close", h)
            }
            return n.on("error", f), e.on("error", f), n.on("end", h), n.on("close", h), e.on("close", h), e.emit("pipe", n), e
        }
    }, {
        events: 104,
        inherits: 138,
        "readable-stream/duplex.js": 167,
        "readable-stream/passthrough.js": 178,
        "readable-stream/readable.js": 179,
        "readable-stream/transform.js": 180,
        "readable-stream/writable.js": 181
    }],
    194: [function(e, t, i) {
        var n = e("buffer").Buffer,
            r = n.isEncoding || function(e) {
                switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function o(e) {
            if (e && !r(e)) throw new Error("Unknown encoding: " + e)
        }
        var a = i.StringDecoder = function(e) {
            switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), o(e), this.encoding) {
                case "utf8":
                    this.surrogateSize = 3;
                    break;
                case "ucs2":
                case "utf16le":
                    this.surrogateSize = 2, this.detectIncompleteChar = c;
                    break;
                case "base64":
                    this.surrogateSize = 3, this.detectIncompleteChar = f;
                    break;
                default:
                    return void(this.write = s)
            }
            this.charBuffer = new n(6), this.charReceived = 0, this.charLength = 0
        };

        function s(e) {
            return e.toString(this.encoding)
        }

        function c(e) {
            this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
        }

        function f(e) {
            this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
        }
        a.prototype.write = function(e) {
            for (var t = ""; this.charLength;) {
                var i = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                if (e.copy(this.charBuffer, this.charReceived, 0, i), this.charReceived += i, this.charReceived < this.charLength) return "";
                if (e = e.slice(i, e.length), !((n = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && n <= 56319)) {
                    if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                    break
                }
                this.charLength += this.surrogateSize, t = ""
            }
            this.detectIncompleteChar(e);
            var n, r = e.length;
            if (this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), r -= this.charReceived), r = (t += e.toString(this.encoding, 0, r)).length - 1, (n = t.charCodeAt(r)) >= 55296 && n <= 56319) {
                var o = this.surrogateSize;
                return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, r)
            }
            return t
        }, a.prototype.detectIncompleteChar = function(e) {
            for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                var i = e[e.length - t];
                if (1 == t && i >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (t <= 2 && i >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (t <= 3 && i >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = t
        }, a.prototype.end = function(e) {
            var t = "";
            if (e && e.length && (t = this.write(e)), this.charReceived) {
                var i = this.charReceived,
                    n = this.charBuffer,
                    r = this.encoding;
                t += n.slice(0, i).toString(r)
            }
            return t
        }
    }, {
        buffer: 65
    }],
    195: [function(e, t) {
        (function(e) {
            function i(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (n) {
                    return !1
                }
                var i = e.localStorage[t];
                return null != i && "true" === String(i).toLowerCase()
            }
            t.exports = function(e, t) {
                if (i("noDeprecation")) return e;
                var n = !1;
                return function() {
                    if (!n) {
                        if (i("throwDeprecation")) throw new Error(t);
                        i("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    TextDesc: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "04b08CNj9pP96XODiJV6tVF", "TextDesc"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.LangText = void 0;
        var n = e("../../my/config/MutabTextDesc"),
            r = e("../common/Func"),
            o = e("../common/MessageMgr"),
            a = e("../../my/config/Config");
        i.LangText = {
            ch: {
                forgetTip: "\u8bf7\u8054\u7cfb\u60a8\u7684\u5ba2\u6237\u4e13\u5458\u627e\u56de\u5bc6\u7801.",
                changePwdTip: "\u65b0\u5bc6\u7801\u9700\u8981\u4fee\u6539",
                jinchuanbuyu: "jinchuanbuyu",
                niaowangguilai: "niaowangguilai",
                wanhuixiji: "wanhuixiji",
                huoqilin: "huoqilin",
                likuipiyu: "likuipiyu",
                liuxingyu: "liuxingyu",
                yaoqianshu: "yaoqianshu",
                crabking: "crabking",
                zhangyuxiaozi: "zhangyuxiaozi",
                oceanmonster: "oceanmonster",
                yinyan: "yinyan",
                eyuchuanqi: "eyuchuanqi",
                longfeng: "longfeng",
                maxituan: "maxituan",
                mofachuan: "mofachuan",
                nuhaichicheng: "nuhaichicheng",
                shengtangwushi: "shengtangwushi",
                huoshanshou: "huoshanshou",
                luomajingji: "luomajingji",
                alashendeng: "alashendeng",
                caishenfafafa: "caishenfafafa",
                kenoball: "kenoball",
                penguins: "penguins",
                xibuyeniu: "xibuyeniu",
                shengdanlaoren: "shengdanlaoren",
                fruit777: "fruit777",
                haidao: "haidao",
                lucky777: "lucky777",
                aiji: "aiji",
                happyduck: "happyduck",
                fruitparty: "fruitparty",
                haidao_2: "haidao_2",
                wanshenjie: "wanshenjie",
                happyfarm: "happyfarm",
                beiou: "beiou",
                jixieniao: "jixieniao",
                maxituan_15: "maxituan_15",
                chinesestyle: "chinesestyle",
                thanksDay: "thanksDay",
                saima: "saima",
                game777China: "game777China",
                animalforest: "animalforest",
                summerfruit: "summerfruit",
                aiji_2: "aiji_2",
                huaxianzi: "huaxianzi",
                baoshikuangchang: "baoshikuangchang",
                labourDay: "labourDay",
                haidao_3: "haidao_3",
                shengpatelike: "shengpatelike",
                HaiYang: "HaiYang",
                YuanGuWenMing: "YuanGuWenMing",
                game777LasVegas: "game777LasVegas",
                FortuneGod: "FortuneGod",
                MonsterHunter: "MonsterHunter",
                BinGo: "BinGo",
                QingRenJie: "QingRenJie",
                ChaoJiWan: "ChaoJiWan",
                FuHuoJie: "FuHuoJie",
                XiFangZhuShen: "XiFangZhuShen",
                HuaShengDun: "HuaShengDun",
                RoyalKnight: "RoyalKnight",
                MuQinJie: "MuQinJie",
                MeiGuoZhiPai: "MeiGuoZhiPai",
                XiBuNiuZai: "XiBuNiuZai",
                MemorialDay: "MemorialDay",
                username: "\u7528\u6237\u540d",
                password: "\u5bc6\u7801",
                login: "\u767b\u5f55",
                loginTip: "\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef",
                homepage: "\u9996\u9875",
                games: "\u6e38\u620f",
                download: "\u4e0b\u8f7d",
                aboutUs: "\u5173\u4e8e",
                all_games: "\u5168\u90e8",
                fishing_games: "\u9c7c\u673a",
                slot_games: "\u8f6e\u7ebf",
                WS: {
                    ws3: "\u957f\u65f6\u95f4\u672a\u8fdb\u5165\u6e38\u620f\uff0c \u81ea\u52a8\u65ad\u5f00\u8fde\u63a5",
                    ws4: "\u670d\u52a1\u5668\u6b63\u5728\u7ef4\u62a4\u4e2d\uff0c\u8bf7\u7a0d\u7b49\u5c1d\u8bd5",
                    ws5: "\u8bf7\u6c42\u51fa\u95191\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165",
                    ws6: "\u672c\u8d26\u53f7\u5df2\u5728\u6e38\u620f\u4e2d\uff0c\u8bf7\u786e\u8ba4\u8d26\u53f7\u5b89\u5168",
                    ws7: "\u8d26\u53f7\u5f02\u5e38",
                    ws8: "\u6e38\u620f\u5df2\u6ee1\u5ea7\uff0c\u65e0\u6cd5\u8fdb\u5165.",
                    ws9: "\u8bf7\u6c42\u51fa\u95192\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165.",
                    ws10: "\u8d26\u53f7\u5f02\u5e38",
                    ws11: "\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e20\u79d2\u91cd\u8bd5",
                    ws12: "\u672c\u670d\u5c06\u8fdb\u5165\u7ef4\u62a4\u72b6\u6001\uff0c\u8bf7\u60a8\u6682\u505c\u6e38\u620f",
                    ws13: "\u5360\u5ea7\u5931\u8d25",
                    ws14: "\u5360\u5ea7\u9519\u8bef",
                    ws15: "\u767b\u5f55\u6210\u529f",
                    ws16: "\u6b64\u73a9\u5bb6\u88ab\u7981\u6b62\u767b\u5f55"
                },
                HTTP: {
                    http1: "\u73a9\u5bb6\u4e0d\u5b58\u5728",
                    http2: "\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef1",
                    http3: "\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef2",
                    http4: "\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef3",
                    http5: "\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef4",
                    http6: "\u65e7\u5bc6\u7801\u9519\u8bef1",
                    http7: "\u65e7\u5bc6\u7801\u9519\u8bef2",
                    http8: "\u65b0\u5bc6\u7801\u683c\u5f0f\u4e0d\u5bf9",
                    http9: "\u4fee\u6539\u5931\u8d25",
                    http10: "\u8d26\u53f7\u6709\u8bef",
                    http11: "\u975e\u7cfb\u7edf\u7ba1\u7406\u5458\u65e0\u6743\u9650",
                    http12: "\u8bf7\u91cd\u65b0\u767b\u5f55",
                    http13: "\u767b\u5f55\u65f6\u95f4\u8d85\u65f6",
                    http14: "\u8d26\u53f7\u683c\u5f0f\u4e0d\u5bf9",
                    http15: "\u9a8c\u8bc1\u5931\u6548,\u8bf7\u91cd\u65b0\u767b\u5f55",
                    http16: "\u6ca1\u6743\u9650",
                    http17: "\u521b\u5efa\u6570\u91cf\u8d85\u8fc7\u9650\u5236",
                    http18: "\u6b64\u8d26\u53f7\u5df2\u5b58\u5728",
                    http19: "\u64cd\u4f5c\u5931\u8d25",
                    http20: "\u4f59\u989d\u4e0d\u8db3",
                    http21: "\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\uff0c\u9650\u5236\u6b64\u64cd\u4f5c",
                    http22: "\u8d26\u53f7\u88ab\u7981\u7528",
                    http201: "\u975e\u7cfb\u7edf\u5546,\u65e0\u6743\u9650",
                    http202: "\u7cfb\u7edf\u5546\u88ab\u7981\u7528\u4e86",
                    http203: "\u521b\u5efa\u5931\u8d25",
                    http204: "\u521b\u5efa\u6210\u529f",
                    http205: "\u7ba1\u7406\u5458\u7981\u6b62\u73a9\u5bb6\u767b\u5f55",
                    http206: "\u767b\u9646\u5931\u8d251",
                    http207: "\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\uff0c\u7a0d\u540e\u518d\u8bd5",
                    http208: "usertoken\u975e\u6cd5",
                    http209: "vendorid\u4e0d\u4e00\u81f4",
                    http210: "\u6e38\u620f\u4e0d\u5b58\u5728",
                    http211: "\u8d26\u53f7\u6216\u5bc6\u7801\u4e0d\u5b58\u5728",
                    http212: "\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u7a0d\u540e\u518d\u53d6",
                    http213: "\u5145\u503c\u5931\u8d25",
                    http214: "\u8d26\u53f7\u4e0d\u5b58\u5728",
                    http215: "\u8d26\u53f7\u6216\u5bc6\u7801\u4e0d\u5b58\u5728",
                    http216: "\u53c2\u6570\u4e0d\u8db3",
                    http217: "\u73a9\u5bb6\u4e0d\u5b58\u5728",
                    http218: "\u8d77\u59cb\u65f6\u95f4\u672a\u6307\u5b9a",
                    http219: "\u8d26\u53f7\u6216\u5bc6\u7801\u4e0d\u5bf9",
                    http220: "\u672c\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\u591a\u6b21\u88ab\u9501\u5b9a\uff0c\u8bf7\u660e\u5929\u518d\u8bd5",
                    http221: "\u8d26\u53f7\u5df2\u5b58\u5728",
                    http222: "\u8d26\u53f7\u683c\u5f0f\u4e0d\u5bf9",
                    http223: "\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef",
                    http224: "\u65b0\u5bc6\u7801\u683c\u5f0f\u4e0d\u5bf9",
                    http225: "\u4fee\u6539\u6210\u529f",
                    http226: "\u4fee\u6539\u5931\u8d25",
                    http227: "\u73a9\u5bb6\u88ab\u7981",
                    http228: "\u4ee3\u7406\u88ab\u7981",
                    http229: "\u6ca1\u6709\u8981\u8865\u7684\u5206",
                    http230: "\u8865\u5206\u5931\u8d25",
                    http231: "\u670d\u52a11\u7e41\u5fd9",
                    http301: "Server busy, Please wait a minute.",
                    http302: "Request Fail"
                }
            },
            en: {
                forgetTip: "Please contact the customer service to retrieve the password",
                commingTip: "The game is coming online, Please look forward to it\uff01",
                enterGameError: "No table",
                pwdFormatTip: "New password must include one letter and one number.",
                badNetStatus: "The server is busy, Please try again later.",
                exitLogin: "Exit the login?",
                changePwdTip: "Please change your password at first login.",
                jinchuanbuyu: "jinchuanbuyu",
                niaowangguilai: "niaowangguilai",
                wanhuixiji: "wanhuixiji",
                huoqilin: "huoqilin",
                likuipiyu: "likuipiyu",
                liuxingyu: "liuxingyu",
                yaoqianshu: "yaoqianshu",
                crabking: "crabking",
                zhangyuxiaozi: "zhangyuxiaozi",
                oceanmonster: "oceanmonster",
                yinyan: "yinyan",
                eyuchuanqi: "eyuchuanqi",
                longfeng: "longfeng",
                maxituan: "maxituan",
                mofachuan: "mofachuan",
                nuhaichicheng: "nuhaichicheng",
                shengtangwushi: "shengtangwushi",
                huoshanshou: "huoshanshou",
                luomajingji: "luomajingji",
                alashendeng: "alashendeng",
                caishenfafafa: "caishenfafafa",
                kenoball: "kenoball",
                penguins: "penguins",
                xibuyeniu: "xibuyeniu",
                shengdanlaoren: "shengdanlaoren",
                fruit777: "fruit777",
                haidao: "haidao",
                lucky777: "lucky777",
                aiji: "aiji",
                happyduck: "happyduck",
                fruitparty: "fruitparty",
                haidao_2: "haidao_2",
                wanshenjie: "wanshenjie",
                happyfarm: "happyfarm",
                beiou: "beiou",
                jixieniao: "jixieniao",
                maxituan_15: "maxituan_15",
                chinesestyle: "chinesestyle",
                thanksDay: "thanksDay",
                saima: "saima",
                game777China: "game777China",
                animalforest: "animalforest",
                summerfruit: "summerfruit",
                aiji_2: "aiji_2",
                huaxianzi: "huaxianzi",
                baoshikuangchang: "baoshikuangchang",
                labourDay: "labourDay",
                haidao_3: "haidao_3",
                shengpatelike: "shengpatelike",
                HaiYang: "HaiYang",
                YuanGuWenMing: "YuanGuWenMing",
                game777LasVegas: "game777LasVegas",
                FortuneGod: "FortuneGod",
                MonsterHunter: "MonsterHunter",
                BinGo: "BinGo",
                QingRenJie: "QingRenJie",
                ChaoJiWan: "ChaoJiWan",
                FuHuoJie: "FuHuoJie",
                XiFangZhuShen: "XiFangZhuShen",
                HuaShengDun: "HuaShengDun",
                RoyalKnight: "RoyalKnight",
                MuQinJie: "MuQinJie",
                MeiGuoZhiPai: "MeiGuoZhiPai",
                XiBuNiuZai: "XiBuNiuZai",
                MemorialDay: "MemorialDay",
                username: "user name:",
                password: "password:",
                login: "login",
                loginTip: "Wrong user name or password",
                homepage: "HOME",
                games: "Games",
                download: "Download",
                aboutUs: "ABOUT",
                all_games: "ALL",
                new: "NEW",
                fishing_games: "FISHING",
                slot_games: "SLOT",
                others: "OTHERS",
                favorite: "FAVORITE",
                grand: "grand",
                major: "major",
                minor: "minor",
                mini: "mini",
                cancle: "cancle",
                sure: "ok",
                inputAccoutTip: "Please Input Account",
                inputPwdTip: "Please Input Password",
                accountEmptyTip: "User name cannot be empty!",
                pwdEmptyTip: "Password cannot be empty!",
                pwdNotEmptyTip: "The password cannot be empty!!!",
                lengthTip: "The length of the account or password should be 6-32 bits",
                pwdLengthTip: "The length of password should be 6-32 bits",
                errorTip: "ERROR",
                required: "Required",
                notRunning: "The current game is not running",
                searchTip: "Find a game",
                pwdunlikeTip: "The two passwords you entered were inconsistent.",
                noSameTip: "New password should be different from old one",
                noFavTip: "You didn't pick any game into the favourite list.",
                maintenanceTip: "The game is under maintenance. Please try again later.",
                replayAvailable: "Video replay is not available now.",
                WS: {
                    ws3: "Have not enter the game for a long time, Automatically disconnected.",
                    ws4: "The server is under maintenance, Please try again later.",
                    ws5: "Request error 1, Please re-enter.",
                    ws6: "This account is in game already, Please confirm account security.",
                    ws7: "Account exception.",
                    ws8: "The game is full and cannot be entered.",
                    ws9: "Request error 2, Please re -enter.",
                    ws10: "Account exception.",
                    ws11: "The server is busy, Please try again later in 20 seconds.",
                    ws12: " This server is about to enter the maintenance state, Please pause the game.",
                    ws13: "Seat taking failed.",
                    ws14: "Seat taking error.",
                    ws15: "Login successful.",
                    ws16: "This player is banned from logging in."
                },
                HTTP: {
                    http1: "Player does not exist.",
                    http2: "Incorrect account number or password 1.",
                    http3: "Incorrect account number or password 2.",
                    http4: "Incorrect account number or password 3.",
                    http5: "Incorrect account number or password 4.",
                    http6: "Incorrect old password 1.",
                    http7: "Incorrect old password 2.",
                    http8: "The new password format is incorrect.",
                    http9: "Modification failed.",
                    http10: "Incorrect account number.",
                    http11: " Non-system administrators have no permissions.",
                    http12: "Please login again.",
                    http13: "Login time expire.",
                    http14: "The account number format is incorrect.",
                    http15: "Verification failed, please login again.",
                    http16: "No permission.",
                    http17: "The number of the creation exceeds the limit.",
                    http18: "This account already exists.",
                    http19: "operation failed.",
                    http20: "Insufficient balance.",
                    http21: "The players is in game, Operation limited.",
                    http22: "Account is disabled.",
                    http201: "Non-Distributor have no permissions.",
                    http202: "Distributor is disabled.",
                    http203: "Creation failed.",
                    http204: "Created successfully.",
                    http205: "The administrator prohibits players from logging in.",
                    http206: "Login failed.",
                    http207: "Players in game, please try again later.",
                    http208: "Iillegal usertoken.",
                    http209: "Inconsistent vendorid.",
                    http210: "Game does not exist.",
                    http211: "Account number or password does not exist.",
                    http212: "Players will take it later in the game.",
                    http213: "Top up failed.",
                    http214: "Account number does not exist.",
                    http215: "Account number or password does not exist.",
                    http216: "Insufficient parameters.",
                    http217: "Player does not exist.",
                    http218: "Start time not specified.",
                    http219: "Incorrect account number or password.",
                    http220: "This account is locked due to incorrect password multiple times, Please try again tomorrow.",
                    http221: "Account number already exists.",
                    http222: "Incorrect account format.",
                    http223: "Incorrect account number or password.",
                    http224: "Incorrect new password format.",
                    http225: "Modified successfully.",
                    http226: "Fail to modify.",
                    http227: "Player is banned.",
                    http228: "Agent is banned.",
                    http229: "No points to make up.",
                    http230: "Failed to make up points.",
                    http231: "Server 1 busy.",
                    http301: "Server busy, Please wait a minute.",
                    http302: "Request Fail"
                }
            }
        }, o.MessageMgr.once(o.MessageName.LoadDyncResFinish, function() {
            r.default.coverCfgFunc(i.LangText, n.MutabLangText, a.Config.langText)
        }), cc._RF.pop()
    }, {
        "../../my/config/Config": "Config",
        "../../my/config/MutabTextDesc": "MutabTextDesc",
        "../common/Func": "Func",
        "../common/MessageMgr": "MessageMgr"
    }],
    Tip: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e19cdQK00dDXKulY9wV7fX3", "Tip");
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                })(e, t)
        }, function(e, t) {
            function i() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        });
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.PopupBase = i.PopupMethod = i.AutoHideTip = i.AutoHideTextTip = i.TextTip = void 0;
        var o = e("../../common/Func"),
            a = e("../../LogicMgr"),
            s = e("../../res/DyncLoadedBase"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.initParams = function() {
                    this._textTip = this.nodeInfo.root.getChildByName("tip").getComponent(cc.Label)
                }, t.prototype.resetParams = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    this._textTip.string = e
                }, t
            }(s.default);
        i.TextTip = c;
        var f = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.initParams = function() {
                var t = this;
                e.prototype.initParams.call(this), this._mask = this.nodeInfo.root.getChildByName("mask"), this._mask.on(a.ConstDefine.click, function() {
                    clearTimeout(t._timeHandle), t.hide()
                })
            }, t.prototype.resetParams = function(t, i, n) {
                var r = this;
                void 0 === i && (i = 2), void 0 === n && (n = !0);
                for (var o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
                e.prototype.resetParams.call(this, t), this._mask.active = n, clearTimeout(this._timeHandle), this._timeHandle = setTimeout(function() {
                    r.hide()
                }, 1e3 * i)
            }, t.prototype.isReset = function() {
                return !0
            }, t
        }(c);
        i.AutoHideTextTip = f;
        var h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._callTimes = 0, t
            }
            return r(t, e), t.prototype.resetParams = function(t) {
                void 0 === t && (t = -1), this.nodeInfo.root.active = !0, e.prototype.resetParams.call(this), ++this._callTimes, console.log("AutoHideTip resetParams", this._callTimes), t > 0 && setTimeout(this.clear.bind(this), 1e3 * t)
            }, t.prototype.isReset = function() {
                return !0
            }, t.prototype.clear = function() {
                --this._callTimes <= 0 && (this._callTimes = 0, e.prototype.clear.call(this), this.nodeInfo.root.active = !1)
            }, t
        }(s.default);
        i.AutoHideTip = h;
        var u = function() {
            function e(e) {
                this._root = e
            }
            return Object.defineProperty(e.prototype, "root", {
                get: function() {
                    return this._root
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.start = function() {
                o.default.nodeZoomIn(this._root, .2)
            }, e
        }();
        i.PopupMethod = u;
        var d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.initParams = function() {
                var e = this.nodeInfo.root.getChildByName("root");
                this._popupMethod = new u(e)
            }, t.prototype.resetParams = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._popupMethod.start()
            }, t
        }(s.default);
        i.PopupBase = d, cc._RF.pop()
    }, {
        "../../LogicMgr": "LogicMgr",
        "../../common/Func": "Func",
        "../../res/DyncLoadedBase": "DyncLoadedBase"
    }],
    UIPicText: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "55860iOpn5NdJlFLMModVyf", "UIPicText"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, r = e("../../../my/config/MutabTextDesc"),
            o = e("../../res/DyncMgr"),
            a = e("../MessageMgr"),
            s = e("../SpecialFunc"),
            c = e("../../LogicMgr"),
            f = null,
            h = null;

        function u(e) {
            for (var t = Object.create(null), i = 0; i < e.childrenCount; ++i) {
                var o = e.children[i],
                    a = {
                        size: o.getContentSize(),
                        spt: o.getComponent(cc.Sprite).spriteFrame
                    };
                t[o.name] = a
            }
            n.push(t), r.TextCfg[e.name] || (r.TextCfg[e.name] = {}), r.TextCfg[e.name].type = n.length - 1
        }
        a.MessageMgr.once(a.MessageName.LoadDyncResFinish, function() {
            o.default.getResInfo(c.ConstDefine.textMgr).then(function(e) {
                var t = e.nodeInfo.root;
                n = [];
                for (var i = t.getChildByName("uiPicText"), r = 0; r < i.childrenCount; ++r) u(i.children[r]);
                i.destroy(), f = t.getChildByName("spritePrefab"), h = t.getChildByName("uiTextPrefab"), c.default.onTextLoad()
            })
        });
        var d = function() {
            function e(e, t) {
                this.value = 0, t || (t = cc.instantiate(h));
                var i = r.TextCfg[e];
                this._showNum = 0, this._type = i.type, this.root = t, this._sprites = [], this._dir = t.getComponent(cc.Layout).horizontalDirection;
                for (var n = 0; n < t.childrenCount; ++n) t.children[n].destroy();
                var o = t.getComponent(cc.Layout);
                i.spacingX && (o.spacingX = i.spacingX), i.scale && t.setScale(i.scale)
            }
            return e.insertTextCfg = function(e, t) {
                e && (t && (e.name = t), u(e))
            }, e.getTextSpriteFrame = function(e, t) {
                var i = r.TextCfg[e].type;
                return n[i][t].spt
            }, e.prototype.setValue = function(e, t, i) {
                void 0 === t && (t = ""), this.value = e;
                var n = t + s.default.convertDecimalNum(e, i);
                this.setStr(n)
            }, e.prototype.setSepValue = function(e, t, i) {
                void 0 === t && (t = ""), this.value = e;
                var n = s.default.converSepValue(e, i);
                this.setStr(n, t)
            }, e.prototype.setStr = function(e, t) {
                var i;
                void 0 === t && (t = "");
                var r, o = (i = "number" == typeof e ? t + e.toString() : t + e).length;
                this.initImage(o);
                for (var a = 0; a < o; ++a) {
                    var s = n[this._type][i.charAt(a)];
                    r = this._dir ? o - a - 1 : a, this._sprites[r].setContentSize(s.size), this._sprites[r].getComponent(cc.Sprite).spriteFrame = s.spt
                }
            }, e.prototype.setDir = function(e) {
                var t = !1,
                    i = this.root.getComponent(cc.Layout);
                null == e ? (t = !0, this._dir = i.horizontalDirection ? cc.Layout.HorizontalDirection.LEFT_TO_RIGHT : cc.Layout.HorizontalDirection.RIGHT_TO_LEFT) : this._dir != e && (t = !0, this._dir = e), t && (i.horizontalDirection = this._dir, this.setValue(this.value))
            }, e.prototype.setActive = function(e) {
                this.root.active = e
            }, e.prototype.initImage = function(e) {
                var t = this._sprites.length;
                if (t < e && this.addImage(e - t), this._showNum > e)
                    for (var i = e; i < this._showNum; ++i) this._sprites[i].active = !1;
                else
                    for (i = this._showNum; i < e; ++i) this._sprites[i].active = !0;
                this._showNum = e
            }, e.prototype.addImage = function(e) {
                for (var t = 0; t < e; ++t) {
                    var i = cc.instantiate(f);
                    i.parent = this.root, this._sprites.push(i)
                }
            }, e
        }();
        i.default = d, cc._RF.pop()
    }, {
        "../../../my/config/MutabTextDesc": "MutabTextDesc",
        "../../LogicMgr": "LogicMgr",
        "../../res/DyncMgr": "DyncMgr",
        "../MessageMgr": "MessageMgr",
        "../SpecialFunc": "SpecialFunc"
    }]
}, {}, ["LevelMgr", "LogicMgr", "Main", "ScreenMgr", "SoundMgr", "BufferPool", "Func", "Interface", "MessageMgr", "SpecialFunc", "EditboxDisplay", "NodeHandle", "PageView", "SliderProgress", "Tip", "UIPicText", "DebugMgr", "EffectBase", "EffectCfg", "EffectMgr", "EffectShake", "EEvent", "GameNet", "GameProto", "NetMgr", "DyncAnimPlay", "DyncInfo", "DyncLoadedBase", "DyncMgr", "LanguageMgr", "ParticlePlay", "ResCfg", "TextDesc", "Effect_Circular_Bead", "Effect_Dibble", "LabelShader1", "Config", "MutabEffectCfg", "MutabResCfg", "MutabTextDesc", "AdvertUI", "BigAdvertUI", "CardUI", "CustomScrollView", "HallUI", "HeadUI", "JpRankUI", "JpUI", "KeyboardUI", "LoginUI", "ModPwdBox", "MsgPromptBox", "NoticeTip", "PcFullScreenUI", "RankUI", "ReconnectTip", "RollPrize", "SettingBox", "ShareUI"]);