// ==UserScript==
// @name         Blum Autoclicker
// @version      3.9
// @namespace    Violentmonkey Scripts9
// @author       Chathura Sudaraka
// @homepage     https://github.com/ChathuraSudaraka/Blum-Auto-Clicker
// ==/UserScript==

const SCRIPT_VERSION = "3.9";

var _0xodm = "jsjiami.com.v7";
const _0x38aed6 = _0x41f6;
function _0x41f6(_0x1feabc, _0x1b96e4) {
  const _0x293bfc = _0x293b();
  return (
    (_0x41f6 = function (_0x41f6cf, _0x363372) {
      _0x41f6cf = _0x41f6cf - 0x84;
      let _0x3ae0b9 = _0x293bfc[_0x41f6cf];
      if (_0x41f6["GnNqHE"] === undefined) {
        var _0x446c23 = function (_0x49eebd) {
          const _0x346223 =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let _0x13d35f = "",
            _0x27ce07 = "";
          for (
            let _0x1fe167 = 0x0, _0x59bf06, _0x50a266, _0x40f71c = 0x0;
            (_0x50a266 = _0x49eebd["charAt"](_0x40f71c++));
            ~_0x50a266 &&
            ((_0x59bf06 =
              _0x1fe167 % 0x4 ? _0x59bf06 * 0x40 + _0x50a266 : _0x50a266),
            _0x1fe167++ % 0x4)
              ? (_0x13d35f += String["fromCharCode"](
                  0xff & (_0x59bf06 >> ((-0x2 * _0x1fe167) & 0x6))
                ))
              : 0x0
          ) {
            _0x50a266 = _0x346223["indexOf"](_0x50a266);
          }
          for (
            let _0x49e053 = 0x0, _0x39c638 = _0x13d35f["length"];
            _0x49e053 < _0x39c638;
            _0x49e053++
          ) {
            _0x27ce07 +=
              "%" +
              ("00" + _0x13d35f["charCodeAt"](_0x49e053)["toString"](0x10))[
                "slice"
              ](-0x2);
          }
          return decodeURIComponent(_0x27ce07);
        };
        const _0x3187c6 = function (_0x3e6ccd, _0xeaa47a) {
          let _0x117bac = [],
            _0x2808eb = 0x0,
            _0x7f390c,
            _0x432405 = "";
          _0x3e6ccd = _0x446c23(_0x3e6ccd);
          let _0x25e986;
          for (_0x25e986 = 0x0; _0x25e986 < 0x100; _0x25e986++) {
            _0x117bac[_0x25e986] = _0x25e986;
          }
          for (_0x25e986 = 0x0; _0x25e986 < 0x100; _0x25e986++) {
            (_0x2808eb =
              (_0x2808eb +
                _0x117bac[_0x25e986] +
                _0xeaa47a["charCodeAt"](_0x25e986 % _0xeaa47a["length"])) %
              0x100),
              (_0x7f390c = _0x117bac[_0x25e986]),
              (_0x117bac[_0x25e986] = _0x117bac[_0x2808eb]),
              (_0x117bac[_0x2808eb] = _0x7f390c);
          }
          (_0x25e986 = 0x0), (_0x2808eb = 0x0);
          for (
            let _0x587aef = 0x0;
            _0x587aef < _0x3e6ccd["length"];
            _0x587aef++
          ) {
            (_0x25e986 = (_0x25e986 + 0x1) % 0x100),
              (_0x2808eb = (_0x2808eb + _0x117bac[_0x25e986]) % 0x100),
              (_0x7f390c = _0x117bac[_0x25e986]),
              (_0x117bac[_0x25e986] = _0x117bac[_0x2808eb]),
              (_0x117bac[_0x2808eb] = _0x7f390c),
              (_0x432405 += String["fromCharCode"](
                _0x3e6ccd["charCodeAt"](_0x587aef) ^
                  _0x117bac[
                    (_0x117bac[_0x25e986] + _0x117bac[_0x2808eb]) % 0x100
                  ]
              ));
          }
          return _0x432405;
        };
        (_0x41f6["mNwRJB"] = _0x3187c6),
          (_0x1feabc = arguments),
          (_0x41f6["GnNqHE"] = !![]);
      }
      const _0x59002a = _0x293bfc[0x0],
        _0x56c701 = _0x41f6cf + _0x59002a,
        _0x424a4a = _0x1feabc[_0x56c701];
      return (
        !_0x424a4a
          ? (_0x41f6["cTNJVD"] === undefined && (_0x41f6["cTNJVD"] = !![]),
            (_0x3ae0b9 = _0x41f6["mNwRJB"](_0x3ae0b9, _0x363372)),
            (_0x1feabc[_0x56c701] = _0x3ae0b9))
          : (_0x3ae0b9 = _0x424a4a),
        _0x3ae0b9
      );
    }),
    _0x41f6(_0x1feabc, _0x1b96e4)
  );
}
((function (
  _0x2abcd2,
  _0xe4b2bf,
  _0x13c99c,
  _0xa26a3e,
  _0x533b01,
  _0x55eeba,
  _0x291c29
) {
  return (
    (_0x2abcd2 = _0x2abcd2 >> 0x2),
    (_0x55eeba = "hs"),
    (_0x291c29 = "hs"),
    (function (_0xa28264, _0x292210, _0x232627, _0x453032, _0x2509c9) {
      const _0x404367 = _0x41f6;
      (_0x453032 = "tfi"),
        (_0x55eeba = _0x453032 + _0x55eeba),
        (_0x2509c9 = "up"),
        (_0x291c29 += _0x2509c9),
        (_0x55eeba = _0x232627(_0x55eeba)),
        (_0x291c29 = _0x232627(_0x291c29)),
        (_0x232627 = 0x0);
      const _0x5c6b37 = _0xa28264();
      while (!![] && --_0xa26a3e + _0x292210) {
        try {
          _0x453032 =
            parseInt(_0x404367(0x8a, "N3g&")) / 0x1 +
            (parseInt(_0x404367(0x93, "clOW")) / 0x2) *
              (-parseInt(_0x404367(0x8d, "K[^S")) / 0x3) +
            (parseInt(_0x404367(0x86, "E6tj")) / 0x4) *
              (-parseInt(_0x404367(0x8c, "wuTE")) / 0x5) +
            -parseInt(_0x404367(0x8b, "E5J)")) / 0x6 +
            -parseInt(_0x404367(0x8e, "%pS3")) / 0x7 +
            parseInt(_0x404367(0x84, "7(bw")) / 0x8 +
            parseInt(_0x404367(0x89, ")rkI")) / 0x9;
        } catch (_0x173ead) {
          _0x453032 = _0x232627;
        } finally {
          _0x2509c9 = _0x5c6b37[_0x55eeba]();
          if (_0x2abcd2 <= _0xa26a3e)
            _0x232627
              ? _0x533b01
                ? (_0x453032 = _0x2509c9)
                : (_0x533b01 = _0x2509c9)
              : (_0x232627 = _0x2509c9);
          else {
            if (
              _0x232627 ==
              _0x533b01["replace"](/[IwYtxGbfTFyOpVXqJeUQuB=]/g, "")
            ) {
              if (_0x453032 === _0x292210) {
                _0x5c6b37["un" + _0x55eeba](_0x2509c9);
                break;
              }
              _0x5c6b37[_0x291c29](_0x2509c9);
            }
          }
        }
      }
    })(
      _0x13c99c,
      _0xe4b2bf,
      function (
        _0x450602,
        _0xf1d107,
        _0x24e9ea,
        _0x5c8feb,
        _0x5c9362,
        _0x2b3254,
        _0x579efa
      ) {
        return (
          (_0xf1d107 = "\x73\x70\x6c\x69\x74"),
          (_0x450602 = arguments[0x0]),
          (_0x450602 = _0x450602[_0xf1d107]("")),
          (_0x24e9ea = "\x72\x65\x76\x65\x72\x73\x65"),
          (_0x450602 = _0x450602[_0x24e9ea]("\x76")),
          (_0x5c8feb = "\x6a\x6f\x69\x6e"),
          (0x18e1fd, _0x450602[_0x5c8feb](""))
        );
      }
    )
  );
})(0x328, 0x8a858, _0x293b, 0xcc),
_0x293b) && (_0xodm = `\x469`);
const SCRIPT_URL = _0x38aed6(0x88, ")rkI");
function _0x293b() {
  const _0x14e508 = (function () {
    return [
      _0xodm,
      "GjTUsFYjuwVitaJFmBiO.ycfoempb.GXqvQ7JqIx==",
      "WOuPDselih8U",
      "WONcM8kiWRjigWBcN8oYzCkf",
      "W6lcNwDBBSoBWRVdSfZcKmoc",
      "cSocW4jrWR0xs8kcsJ1Njq",
      "W5/cRdddTSobW7ZdUrpcTHv3wWK",
    ].concat(
      (function () {
        return [
          "WPJcTa1VhCkHWP/dKKDBWQ7cV8oxWOK",
          "W6GNWPHeW4uupSk7dq",
          "tL8ZE8o6amkEr0BcH8op",
          "WOWBW73dLNqGW4FdRSkvtqRcUSkwmNpcOuBcVCorFSkilheQW4qVWR97B8odwLRcOW/cVHBcT8oosGFdL1xcTGlcRSoKfSkDWOVdV1TcgwtdGx3dQmo4BCoPq8klzCkxWQRdTmk6EcVcVdFcJapcUSozvKG",
          "W5vEWRNcLtuIW5NdS8kMBItdH8k0hG",
          "W7/cOZtdOdCwW5xdOKRcLmoNga",
          "lvVdNNZdT8oaW5tdNLahW77dVmoY",
        ].concat(
          (function () {
            return [
              "W4y1WQ3cI8oNvYq4W6BdLCoN",
              "kSk8W5jLW7FdPmkapq",
              "xc3cLK7cHcxcJXj2WQeAWOpcMq",
              "vIVcLuRcIIpcIdPfWPy7WPdcKW",
              "kmk/WPb3W4tdSmkngCkq",
            ];
          })()
        );
      })()
    );
  })();
  _0x293b = function () {
    return _0x14e508;
  };
  return _0x293b();
}
var version_ = "jsjiami.com.v7";

let GAME_SETTINGS = {
  minBombHits: Math.floor(Math.random() * 2),
  minIceHits: Math.floor(Math.random() * 2) + 2,
  flowerSkipPercentage: Math.floor(Math.random() * 11) + 15,
  minDelayMs: 500,
  maxDelayMs: 999,
  autoClickPlay: false,
  dogsProbability: (98 + Math.random()) / 100,
  checkForUpdates: true,
  autoVideoTask: true,
  autoVerifyCode: false,
  autoClaimTask: true,
};

const answers = {
  "How to Analyze Crypto": "VALUE",
  "What’s DAO?": "N/A",
  "Ton voices live": "I LOVE BLUM",
  "Forks Explained": "GO GET",
  "Secure your Crypto!": "BEST PROJECT EVER",
  "Navigating Crypto": "HEYBLUM",
  "What are Telegram Mini Apps?": "CRYPTOBLUM",
  "Say No to Rug Pull!": "SUPERBLUM",
  "Liquidity Pools Guide": "BLUMERSSS",
  "$2.5M+ DOGS Airdrop": "HAPPYDOGS",
  "Doxxing? What's that?": "NODOXXING",
  "Pre-Market Trading?": "WOWBLUM",
  "Play Track and Type Track Name": "BLUM – BIG CITY LIFE",
  "How to Memecoin?": "MEMEBLUM",
  "Token Burning: How & Why?": "ONFIRE",
  "Bitcoin Rainbow Chart": "SOBLUM",
  "Crypto Terms. Part 1": "BLUMEXPLORER",
  "How to Trade Perps?": "CRYPTOFAN",
  "Sharding Explained": "BLUMTASTIC",
  "DeFi Explained": "BLUMFORCE",
  "How To Find Altcoins?": "ULTRABLUM",
  "Crypto Slang. Part 1": "BLUMSTORM",
  "What is On-chain Analysis?": "BLUMEXTRA",
  "Pumptober Special": "PUMPIT",
  "DeFi Risks: Key Insights": "BLUMHELPS",
  "Crypto Slang. Part 2": "FOMOOO",
  "What’s Crypto DEX?": "DEXXX",
  "Choosing a Crypto Exchange": "CRYPTOZONE",
  "Node Sales in Crypto": "BLUMIFY",
  "Understanding Gas Fees": "CRYPTOGAS",
  "What is Slippage?": "CRYPTOBUZZ",
  "What’s Next for DeFi?": "BLUMNOW",
  "Smart Contracts 101": "SMARTBLUM",
  "Crypto Slang. Part 3": "BOOBLUM",
  "Regulation: Yay or Nay?": "BLUMSSS",
  "DEX History": "GODEX",
  "Crypto Regulations #2": "BLUMRULES",
  "P2P Trading Safety Tips": "BLUMTIPS",
  "Crypto Communities": "BLUMMUNITY",
  "Dec 6 Crypto News": "HUNDRED",
  "Dex Evolution": "BLUMSPARK",
  "Crypto Slang. Part 4": "LAMBOBLUM",
  "What Are AMMs?": "CRYPTOSMART",
  "Memepad Tutorial": "MEMEPAD",
  "DEX History #3": "LOVEBLUM",
  "Blum CMO @ Blockchain Life": "BLUMISLIFE",
  "Is Binance a DEX?": "BLUMIES",
};

async function fetchAndUpdateCodes() {
  try {
    const updatedSecretCodes = await fetch(
      "https://raw.githubusercontent.com/mudachyo/Blum/refs/heads/main/answers/codes.json"
    ).then((res) => {
      if (!res.ok) return {};
      try {
        return res.json();
      } catch {
        return {};
      }
    });

    for (let code in updatedSecretCodes) {
      answers[code] = updatedSecretCodes[code];
    }
  } catch (error) {
    console.error("Failed to fetch or update codes:", error);
  }
}

fetchAndUpdateCodes();

let isGameToolPaused = false;

function claimDailyReward() {
  const widget = document.querySelector(".widget.has-radius");

  if (widget) {
    const claimButton = widget.querySelector(".kit-pill-claim.is-state-claim");

    if (claimButton) {
      claimButton.click();
      console.log("Ежедневная награда забрана!");
    } else {
    }
  } else {
  }
}

setInterval(claimDailyReward, Math.random() * 2000 + 5000);

try {
  let gameStats = {
    score: 0,
    bombHits: 0,
    iceHits: 0,
    dogsHits: 0,
    flowersSkipped: 0,
    isGameOver: false,
  };

  const originalArrayPush = Array.prototype.push;
  Array.prototype.push = function (...items) {
    items.forEach((item) => handleGameElement(item));
    return originalArrayPush.apply(this, items);
  };

  function handleGameElement(item) {
    if (!item || !item.asset) return;

    const { assetType } = item.asset;
    switch (assetType) {
      case "CLOVER":
        processFlower(item);
        break;
      case "BOMB":
        processBomb(item);
        break;
      case "FREEZE":
        processIce(item);
        break;
      case "DOGS":
        processDogs(item);
        break;
    }
  }

  function processFlower(item) {
    const shouldSkip = Math.random() < GAME_SETTINGS.flowerSkipPercentage / 100;
    if (shouldSkip) {
      gameStats.flowersSkipped++;
    } else {
      gameStats.score++;
      clickElement(item);
    }
  }

  function processBomb(item) {
    if (gameStats.bombHits < GAME_SETTINGS.minBombHits) {
      gameStats.score = 0;
      clickElement(item);
      gameStats.bombHits++;
    }
  }

  function processIce(item) {
    if (gameStats.iceHits < GAME_SETTINGS.minIceHits) {
      clickElement(item);
      gameStats.iceHits++;
    }
  }

  function processDogs(item) {
    if (Math.random() < GAME_SETTINGS.dogsProbability) {
      clickElement(item);
      gameStats.dogsHits++;
    }
  }

  function clickElement(item) {
    if (isGameToolPaused) return;
    const createEvent = (type, EventClass) =>
      new EventClass(type, {
        bubbles: true,
        cancelable: true,
        pointerId: 1,
        isPrimary: true,
        pressure: type === "pointerdown" ? 0.5 : 0,
      });

    setTimeout(() => {
      if (typeof item.onClick === "function") {
        if (item.element) {
          ["pointerdown", "mousedown", "pointerup", "mouseup", "click"].forEach(
            (type) => {
              item.element.dispatchEvent(
                createEvent(
                  type,
                  type.startsWith("pointer") ? PointerEvent : MouseEvent
                )
              );
            }
          );
        }
        item.onClick(item);
      }

      item.isExplosion = true;
      item.addedAt = performance.now();
    }, getClickDelay());
  }

  // Функция проверки обновлений скрипта
  async function checkForUpdates() {
    if (!GAME_SETTINGS.checkForUpdates) {
      console.log("Checking for updates is disabled.");
      return;
    }

    try {
      const response = await fetch(SCRIPT_URL);
      if (!response.ok) {
        console.warn("Failed to get the script file to check for updates.");
        return;
      }

      const scriptText = await response.text();
      const remoteVersionMatch = scriptText.match(/@version\s+([\d.]+)/);

      if (!remoteVersionMatch || remoteVersionMatch.length < 2) {
        console.warn("Failed to detect the deleted version.");
        return;
      }

      const remoteVersion = remoteVersionMatch[1];

      if (compareVersions(remoteVersion, SCRIPT_VERSION) > 0) {
        alert(
          `A new version of the script is available: ${remoteVersion}. Please update the script at: ${SCRIPT_URL}`
        );
      } else {
        console.log("The script has been updated to the latest version.");
      }
    } catch (error) {
      console.error("Error when checking for updates:", error);
    }
  }

  // Сравнение версий
  function compareVersions(v1, v2) {
    const v1Parts = v1.split(".").map(Number);
    const v2Parts = v2.split(".").map(Number);

    for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
      const part1 = v1Parts[i] || 0;
      const part2 = v2Parts[i] || 0;
      if (part1 > part2) return 1;
      if (part1 < part2) return -1;
    }
    return 0;
  }

  checkForUpdates();

  // Функция для расчета задержки между кликами
  function getClickDelay() {
    const minDelay = GAME_SETTINGS.minDelayMs || 500;
    const maxDelay = GAME_SETTINGS.maxDelayMs || 1000;
    return Math.random() * (maxDelay - minDelay) + minDelay;
  }

  // Функция проверки завершилась ли игра
  function checkGameCompletion() {
    const rewardElement = document.querySelector(
      "#app > div > div > div.content > div.reward"
    );
    if (rewardElement && !gameStats.isGameOver) {
      gameStats.isGameOver = true;
      resetGameStats();
    }
  }

  // Функция для сброса статистики после завершения игры
  function resetGameStats() {
    gameStats = {
      score: 0,
      bombHits: 0,
      iceHits: 0,
      dogsHits: 0,
      flowersSkipped: 0,
      isGameOver: false,
    };
  }

  function getNewGameDelay() {
    return Math.floor(
      Math.random() *
        (GAME_SETTINGS.maxDelayMs - GAME_SETTINGS.minDelayMs + 1) +
        GAME_SETTINGS.minDelayMs
    );
  }

  // Функция AutoPlay
  function checkAndClickPlayButton() {
    const playButtons = document.querySelectorAll(
      "button.kit-button.is-large.is-primary, button.kit-pill.reset.is-type-white.pill"
    );

    playButtons.forEach((button) => {
      if (
        !isGameToolPaused &&
        GAME_SETTINGS.autoClickPlay &&
        button.textContent.trim().length > 0
      ) {
        setTimeout(() => {
          gameStats.isGameOver = true;
          resetGameStats();
          button.click();
        }, getNewGameDelay());
      }
    });
  }

  // Функция обновления страницы в случае ошибки
  function checkAndClickResetButton() {
    const errorPage = document.querySelector(
      "div[data-v-26af7de6].error.page.wrapper"
    );
    if (errorPage) {
      const resetButton = errorPage.querySelector("button.reset");
      if (resetButton) {
        resetButton.click();
      }
    }
  }

  function continuousErrorCheck() {
    checkAndClickResetButton();
    const delay = Math.floor(Math.random() * 3000) + 5000;
    setTimeout(continuousErrorCheck, delay);
  }

  continuousErrorCheck();

  function continuousPlayButtonCheck() {
    checkAndClickPlayButton();
    setTimeout(continuousPlayButtonCheck, 1000);
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        checkGameCompletion();
      }
    }
  });

  const appElement = document.querySelector("#app");
  if (appElement) {
    observer.observe(appElement, {
      childList: true,
      subtree: true,
    });
  }

  continuousPlayButtonCheck();

  const settingsMenu = document.createElement("div");
  settingsMenu.className = "settings-menu";
  settingsMenu.style.display = "none";

  const menuTitle = document.createElement("h3");
  menuTitle.className = "settings-title";
  menuTitle.textContent = "Blum Autoclicker";

  const closeButton = document.createElement("button");
  closeButton.className = "settings-close-button";
  closeButton.textContent = "×";
  closeButton.onclick = () => {
    settingsMenu.style.display = "none";
  };

  menuTitle.appendChild(closeButton);
  settingsMenu.appendChild(menuTitle);

  function answerQuestion() {
    try {
      const questionElement = document.querySelector(
        "div.kit-overlay > div > div > div.heading > div.title"
      );
      if (!questionElement) {
        return;
      }

      const question = questionElement.innerText.trim().toLowerCase();

      const normalizedAnswers = Object.fromEntries(
        Object.entries(answers).map(([key, value]) => [
          key.toLowerCase(),
          value,
        ])
      );

      const answer = normalizedAnswers[question];
      if (!answer) {
        return console.warn(
          `The answer for the question "${question}" not found!`
        );
      }

      const inputElement = document.querySelector("div.input-container input");

      if (!inputElement) {
        console.warn("The field for entering an answer was not found!");
        return;
      }

      inputElement.value = answer;

      inputElement.dispatchEvent(new Event("input", { bubbles: true }));

      console.log(`Answer "${answer}" entered for question "${question}".`);

      const submitButton = document.querySelector(
        "div.kit-overlay > div > div > div.kit-fixed-wrapper.no-layout-tabs > button"
      );

      if (!submitButton) {
        console.warn("The button to send was not found!");
        return;
      }
      submitButton.click();
      console.log("Button pressed.");
    } catch (error) {
      console.error("There's been a mistake:", error);
    }
  }

  setInterval(answerQuestion, Math.random() * 1000 + 2000);

  function videoTaskCompletion() {
    if (isGameToolPaused) return;
    if (GAME_SETTINGS.autoVideoTask) {
      Array.from(
        document.querySelectorAll(
          ".pages-tasks-item:has(>*>*>button.is-status-ready-for-verify) .details"
        )
      )
        .filter(
          (verifyBtn) => verifyBtn.childNodes[0].textContent in answers
        )[0]
        ?.parentElement?.lastChild?.click();
    }
    if (GAME_SETTINGS.autoVerifyCode) {
      document
        .querySelectorAll(".tasks-list button[class*=not-started]")
        .forEach((e) => {
          e.click();
        });
    }
    if (GAME_SETTINGS.autoClaimTask) {
      document
        .querySelectorAll("button.is-status-ready-for-claim")
        .forEach((e) => {
          e.click();
        });
    }
  }

  setInterval(videoTaskCompletion, Math.random() * 1000 + 3000);

  const setting_inputs = [
    // label, id, type, min, max, step, tooltipText
    [
      "Flower Skip (%)",
      "flowerSkipPercentage",
      "range",
      0,
      100,
      1,
      "EN: Percentage probability of skipping a flower.<br>RU: Вероятность пропуска цветка в процентах.",
    ],
    [
      "Min Freeze Hits",
      "minIceHits",
      "range",
      1,
      10,
      1,
      "EN: Minimum number of clicks per freeze.<br>RU: Минимальное количество кликов на заморозку.",
    ],
    [
      "Min Bomb Hits",
      "minBombHits",
      "range",
      0,
      10,
      1,
      "EN: Minimum number of clicks per bomb.<br>RU: Минимальное количество кликов на бомбу.",
    ],
    [
      "Min Delay (ms)",
      "minDelayMs",
      "range",
      10,
      10000,
      10,
      "EN: Minimum delay between clicks.<br>RU: Минимальная задержка между кликами.",
    ],
    [
      "Max Delay (ms)",
      "maxDelayMs",
      "range",
      10,
      10000,
      10,
      "EN: Maximum delay between clicks.<br>RU: Максимальная задержка между кликами.",
    ],
    [
      "Auto Click Play",
      "autoClickPlay",
      "checkbox",
      null,
      null,
      null,
      "EN: Automatically start the next game at the end of.<br>RU: Автоматически начинать следующую игру по окончании.",
    ],
    [
      "Auto Claim Task",
      "autoClaimTask",
      "checkbox",
      null,
      null,
      null,
      "EN: Automatically claim completed tasks.<br>RU: Автоматически принимать выполненные задачи.",
    ],
    [
      "Auto Video Task",
      "autoVideoTask",
      "checkbox",
      null,
      null,
      null,
      "EN: Automatically start the next youtube video then verify.<br>RU: Автоматически запускать следующее видео на YouTube, а затем проверять.",
    ],
    [
      "Auto Verify Code",
      "autoVerifyCode",
      "checkbox",
      null,
      null,
      null,
      "EN: Automatically verify started youtube task and. (If key is present)<br>RU: Автоматически проверять запущенную задачу на YouTube. (Если есть ответ)",
    ],
  ];

  function updateSettingsMenu() {
    const setting_params = setting_inputs.map((params) => params[1]);
    setting_params.forEach(function (id) {
      const elem = document.getElementById(id);
      elem.type != "checkbox"
        ? (elem.value = GAME_SETTINGS[id])
        : (elem.checked = GAME_SETTINGS[id]);
    });
  }
  setting_inputs.forEach(function (setting_input_params) {
    settingsMenu.appendChild(createSettingElement(...setting_input_params));
  });

  const pauseResumeButton = document.createElement("button");
  pauseResumeButton.textContent = "Pause";
  pauseResumeButton.className = "pause-resume-btn";
  pauseResumeButton.onclick = toggleGamePause;
  settingsMenu.appendChild(pauseResumeButton);

  document.body.appendChild(settingsMenu);
  const settingsButton = document.createElement("button");
  settingsButton.className = "settings-button";
  settingsButton.textContent = "⚙️";
  settingsButton.onclick = () => {
    settingsMenu.style.display =
      settingsMenu.style.display === "block" ? "none" : "block";
  };
  document.body.appendChild(settingsButton);

  const style = document.createElement("style");
  style.textContent = `
		.settings-menu {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: rgba(17, 17, 17, 0.95);
			border-radius: 16px;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
			color: #ffffff;
			font-family: 'Inter', sans-serif;
			z-index: 10000;
			padding: 16px;
			width: 340px;
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}

		.settings-title {
			color: #ffffff;
			font-size: 16px;
			font-weight: 600;
			margin-bottom: 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 8px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}

		.settings-close-button {
			background: rgba(255, 255, 255, 0.1);
			border: none;
			color: #ffffff;
			font-size: 16px;
			cursor: pointer;
			padding: 4px 8px;
			border-radius: 8px;
			transition: all 0.2s;
		}

		.setting-item {
			background: rgba(255, 255, 255, 0.05);
			padding: 10px;
			border-radius: 12px;
			margin-bottom: 6px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
		}

		.setting-label {
			display: flex;
			align-items: center;
			width: 110px;
		}

		.setting-label-text {
			color: #ffffff;
			font-size: 12px;
			font-weight: 500;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.help-icon {
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			background: rgba(255, 255, 255, 0.1);
			padding: 2px 6px;
			border-radius: 6px;
			margin-left: auto;
			font-size: 10px;
			cursor: help;
			z-index: 1;
			width: 14px;
			height: 14px;
			flex-shrink: 0;
		}

		.help-icon .tooltiptext {
			visibility: hidden;
			width: 200px;
			background-color: #000000;
			color: #ffffff;
			text-align: left;
			border-radius: 8px;
			padding: 8px;
			position: absolute;
			z-index: 99999;
			left: 24px;
			top: 50%;
			transform: translateY(-50%);
			opacity: 0;
			transition: opacity 0.3s;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
			border: 1px solid rgba(255, 255, 255, 0.2);
			font-size: 11px;
			line-height: 1.4;
			white-space: normal;
			pointer-events: none;
		}

		.help-icon .tooltiptext::after {
			content: "";
			position: absolute;
			top: 50%;
			left: -10px;
			margin-top: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: transparent #000000 transparent transparent;
		}

		.help-icon:hover .tooltiptext {
			visibility: visible;
			opacity: 1;
		}

		.setting-input {
			display: flex;
			align-items: center;
			gap: 8px;
			width: 166px;
			flex-shrink: 0;
			justify-content: flex-end;
		}

		.setting-slider {
			-webkit-appearance: none;
			width: 100%;
			height: 4px;
			background: rgba(255, 255, 255, 0.1);
			border-radius: 2px;
			outline: none;
		}

		.setting-slider::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 14px;
			height: 14px;
			background: #ffffff;
			border-radius: 50%;
			cursor: pointer;
			transition: all 0.2s;
		}

		.setting-value {
			min-width: 30px;
			text-align: right;
			font-size: 12px;
		}

		.pause-resume-btn {
			width: 100%;
			padding: 8px;
			background: rgba(255, 255, 255, 0.1);
			border: none;
			border-radius: 12px;
			color: #ffffff;
			font-weight: 600;
			font-size: 12px;
			cursor: pointer;
			transition: all 0.2s;
			margin-top: 12px;
		}

		.settings-button {
			position: fixed;
			bottom: 150px; /* for little higher so app navigarion don't get disturbed*/
			right: 30px;
			background: #227725e6;
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 16px;
			width: 50px;
			height: 50px;
			font-size: 24px;
			cursor: pointer;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
			transition: all 0.3s;
			z-index: 999999;
		}

		.settings-button:hover {
			transform: translateY(-2px);
			box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
		}

		.switch {
			position: relative;
			display: inline-block;
			width: 50px;
			height: 24px;
			margin-left: auto;
		}

		.switch input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(255, 255, 255, 0.1);
			transition: .4s;
			border-radius: 24px;
		}

		.slider:before {
			position: absolute;
			content: "";
			height: 20px;
			width: 20px;
			left: 2px;
			bottom: 2px;
			background-color: white;
			transition: .4s;
			border-radius: 50%;
		}

		input:checked + .slider {
			background-color: #227725;
		}

		input:checked + .slider:before {
			transform: translateX(26px);
		}
	`;
  document.head.appendChild(style);

  function createSettingElement(label, id, type, min, max, step, tooltipText) {
    const container = document.createElement("div");
    container.className = "setting-item";

    const labelContainer = document.createElement("div");
    labelContainer.className = "setting-label";

    const labelElement = document.createElement("span");
    labelElement.className = "setting-label-text";
    labelElement.textContent = label;

    const helpIcon = document.createElement("span");
    helpIcon.textContent = "?";
    helpIcon.className = "help-icon";

    const tooltipSpan = document.createElement("span");
    tooltipSpan.className = "tooltiptext";
    tooltipSpan.innerHTML = tooltipText;
    helpIcon.appendChild(tooltipSpan);

    labelContainer.appendChild(labelElement);
    labelContainer.appendChild(helpIcon);

    const inputContainer = document.createElement("div");
    inputContainer.className = "setting-input";

    function AutoClaimAndStart() {
      setInterval(() => {
        const claimButton = document.querySelector(
          "#app > div.index-page.page > div.pages-index-points > div > div:nth-child(2) > div.right-slot > div > button"
        );
        const startFarmingButton = document.querySelector(
          "button.kit-button.is-large.is-primary.is-fill.button"
        );
        const continueButton = document.querySelector(
          "button.kit-button.is-large.is-primary.is-fill.btn"
        );
        if (claimButton) {
          claimButton.click();
        } else if (startFarmingButton) {
          startFarmingButton.click();
        } else if (continueButton) {
          continueButton.click();
        }
      }, Math.floor(Math.random() * 5000) + 5000);
    }

    AutoClaimAndStart();

    let input;
    if (type === "checkbox") {
      const switchLabel = document.createElement("label");
      switchLabel.className = "switch";

      input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      input.checked = GAME_SETTINGS[id];
      input.addEventListener("change", (e) => {
        GAME_SETTINGS[id] = e.target.checked;
        saveSettings();
      });

      const slider = document.createElement("span");
      slider.className = "slider";

      switchLabel.appendChild(input);
      switchLabel.appendChild(slider);
      inputContainer.appendChild(switchLabel);
    } else {
      input = document.createElement("input");
      input.type = type;
      input.id = id;
      input.min = min;
      input.max = max;
      input.step = step;
      input.value = GAME_SETTINGS[id];
      input.className = "setting-slider";

      const valueDisplay = document.createElement("span");
      valueDisplay.id = `${id}Display`;
      valueDisplay.textContent = GAME_SETTINGS[id];
      valueDisplay.className = "setting-value";

      input.addEventListener("input", (e) => {
        GAME_SETTINGS[id] = parseFloat(e.target.value);
        valueDisplay.textContent = e.target.value;
        saveSettings();
      });

      inputContainer.appendChild(input);
      inputContainer.appendChild(valueDisplay);
    }

    container.appendChild(labelContainer);
    container.appendChild(inputContainer);
    return container;
  }

  function saveSettings() {
    localStorage.setItem(
      "BlumAutoclickerSettings",
      JSON.stringify(GAME_SETTINGS)
    );
  }

  function loadSettings() {
    const savedSettings = localStorage.getItem("BlumAutoclickerSettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      GAME_SETTINGS = {
        ...GAME_SETTINGS,
        ...parsedSettings,
      };
    }
  }

  loadSettings();
  updateSettingsMenu();

  function toggleGamePause() {
    isGameToolPaused = !isGameToolPaused;
    pauseResumeButton.textContent = isGameToolPaused ? "Resume" : "Pause";
  }
} catch (e) {
  console.error("Blum Autoclicker error:", e);
}
