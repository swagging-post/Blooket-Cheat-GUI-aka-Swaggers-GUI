/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) SC0TT 2024
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    const cheat = (async () => {
        let n = document.createElement('iframe');
        document.body.append(n);
        if (String(Function.prototype.call).includes('native')) {
            let call = Function.prototype.call;
            let iframe = document.createElement("iframe");
            document.body.append(iframe);
            iframe.style.display = "none";
            let funcs = {
                querySelectorAll: function () {
                    if (["#JODGUI", "#JODMOBILE", "#currPageEl", "#YTRkNmM2MWEtOTg3Zi00YmE1LWI1NzUtNTgyOTUzMWI4ZDYx", "#ODJkMThlMDEtYmEwNi00MzE4LTg4ZGMtM2Y2ZDI0MzY4ZjU2", ".cheatList", ".cheatName", "bG1mYW8=", "#aXQncyBjYXQgYW5kIG1vdXNlIGF0IHRoaXMgcG9pbnQ"].includes(arguments[0]))
                        return [];
                    return iframe.contentDocument.querySelectorAll.apply(document, arguments);
                },
                querySelector: iframe.contentDocument.querySelector.bind(document),
                includes: function () {
                    if (["Cheats", "Global", "Global Cheats", "Discord - oneminesraft2", "Auto Answer (Toggle)", "Auto Sell Dupes On Open", "Spam Buy Blooks", "Food Game", "Change Blook Ingame", "Get Daily Rewards", "Remove Name Limit", "Simulate Unlock", "Cheat ESP", "Gold Quest Cheats", "Cafe Cheats", "Crypto Hack Cheats", "Deceptive Dinos Cheats", "Tower Defense Cheats", "Tower Defense2 Cheats", "Factory Cheats", "Fishing Frenzy Cheats", "Flappy Blook Cheats", "Tower of Doom Cheats", "Crazy Kingdom Cheats", "Racing Cheats", "Battle Royale Cheats", "Blook Rush Cheats", "Monster Brawl Cheats", "Santa's Workshop Cheats"].includes(arguments[0]))
                        return false;
                    return iframe.contentWindow.String.prototype.call(this, arguments);
                },
                fetch: iframe.contentWindow.fetch.bind(window),
                btoa: iframe.contentWindow.btoa.bind(window),
                getItem: iframe.contentWindow.localStorage.getItem.bind(window.localStorage)
            }, funcNames = Object.keys(funcs);
            Function.prototype.call = function () {
                if (funcNames.includes(this.name)) return call.apply(funcs[this.name], arguments);
                return call.apply(this, arguments)
            }
                ; (new Image).src = "https://gui-logger.onrender.com/gui/0?" + Date.now();
        }
        window.alert = n.contentWindow.alert.bind(window);
        window.prompt = n.contentWindow.prompt.bind(window);
        window.confirm = n.contentWindow.confirm.bind(window);
        n.remove();
        const addStyles = (element, styles = {}) => Object.entries(styles).forEach(([key, value]) => element.style[key] = value);
        let style = document.createElement('style');
        style.innerHTML = (`details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }`);
        
        const GUI = document.createElement('div');
        GUI.appendChild(style);
        addStyles(GUI, {
            width: '400px',
            background: 'hsl(0, 0%, 10%)',
            borderRadius: '10px',
            position: 'absolute',
            textAlign: 'center',
            fontFamily: 'Nunito',
            color: 'white',
            overflow: 'hidden',
            top: '50px',
            left: '50px'
        });
        
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        GUI.onpointerdown = ((e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onpointerup = (() => {
                document.onpointerup = null;
                document.onpointermove = null;
            });
            document.onpointermove = ((e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                GUI.style.top = (GUI.offsetTop - pos2) + "px";
                GUI.style.left = (GUI.offsetLeft - pos1) + "px";
            });
        });
        
        let header = document.createElement('div');
        GUI.appendChild(header);
        addStyles(header, {
            width: '100%',
            height: '35px',
            paddingTop: '2px',
            fontSize: '1.5rem',
            textAlign: 'center'
        });
        header.innerHTML = `Blooket Cheats <span style="font-size: 0.75rem">v3.16.24</span>`;
        
        let close = document.createElement('button');
        header.appendChild(close);
        addStyles(close, {
            background: 'red',
            height: '45px',
            width: '45px',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            fontSize: '1.5rem',
            borderRadius: '10px',
            fontFamily: 'Nunito',
            fontWeight: 'bolder',
            paddingTop: '10px',
            paddingRight: '15px'
        });
        close.innerText = 'X';
        close.onclick = () => {
            offLocationChange();
            GUI.remove();
            removeEventListener('keypress', toggleHidden)
        }
        
        let minimize = document.createElement('button');
        header.appendChild(minimize);
        addStyles(minimize, {
            background: '#444444',
            height: '45px',
            width: '45px',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            fontSize: '1.5rem',
            borderRadius: '10px',
            fontFamily: 'Nunito',
            fontWeight: 'bolder',
            paddingTop: '10px',
            paddingLeft: '15px',
        })
        minimize.innerText = '-';
        minimize.onclick = () => bodyDiv.hidden = !bodyDiv.hidden;
        let bodyDiv = document.createElement('div');
        let body = document.createElement('div');
        bodyDiv.appendChild(body);
        GUI.appendChild(bodyDiv);
        
        body.innerHTML = (`<span id="curPageEl">${getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected'}</span><br><span>(Press E to hide)</span><br>`);
        body.style.display = 'block';
        body.style.margin = '10px';
        
        document.body.append(GUI);
        
        let footer = document.createElement('div');
        bodyDiv.appendChild(footer);
        footer.style.fontSize = '0.9rem';
        footer.style.paddingBottom = '5px';
        footer.innerHTML = (`<span><a target="blank" href="https://discord.gg/e2UXEwjcsg">Discord</a><br/><a target="blank" href="https://github.com/swagging-post/Blooket-Cheat-GUI/">GitHub - SC0TT</a></span>`);
        
        let cheats = ({
            global: [
                {
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                try {
                                    if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                    else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                    else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                                } catch { }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Highlight Answers (Toggle)",
                    description: "Toggles highlight answers on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                    if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                    else answer.style.backgroundColor = "rgb(189, 15, 38)";
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Subtle Highlight Answers (Toggle)",
                    description: "Toggles subtle highlight answers on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                    if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i]))
                                        answer.style.boxShadow = "unset";
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Percent Auto Answer",
                    description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            let target = parseFloat(prompt("What grade do you want to get from this set? (0-100)"));
                            while (typeof target != "number" || isNaN(target)) target = parseFloat(prompt("What grade do you want to get from this set? (0-100)\nInvalid Number"));
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            this.data = setInterval(TARGET => {
                                try {
                                    const question = stateNode.state.question || stateNode.props.client.question;
                                    if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                    else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                        let correct = 0, total = 0;
                                        for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                                        for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                                        total += correct;
                                        const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                                        if (stateNode.state.question.qType != "typing") {
                                            const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                                            for (let i = 0; i < answerContainers.length; i++) {
                                                const contains = question.correctAnswers.includes(question.answers[i]);
                                                if (yes && contains || !yes && !contains) return answerContainers[i]?.click?.();
                                            }
                                            answerContainers[0].click();
                                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                                    }
                                } catch { }
                            }, 100, (target ?? 100) / 100);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Auto Answer",
                    description: "Click the correct answer for you",
                    run: function () {
                        const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        try {
                            if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                            else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                            else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                        } catch { }
                    }
                },
                {
                    name: "Highlight Answers",
                    description: "Colors answers to be red or green highlighting the correct ones",
                    run: function () {
                        const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                            if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                            else answer.style.backgroundColor = "rgb(189, 15, 38)";
                        });
                    }
                },
                {
                    name: "Subtle Highlight Answers",
                    description: "Removes the shadow from correct answers",
                    run: function () {
                        const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                            if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i]))
                                answer.style.boxShadow = "unset";
                        });
                    }
                },
                {
                    name: "Spam Buy Blooks",
                    description: "Opens a box an amount of times",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let prices = Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((a, b) => {
                            b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                            return a;
                        }, {});
                        let box = prompt("Which box do you want to open? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                        const cost = prices[box];
                        if (!cost) return alert("I couldn't find that box!");
        
                        let amount = Math.min(Math.floor(stateNode.state.tokens / cost), parseInt(`0${prompt("How many boxes do you want to open?")}`));
                        if (amount == 0) return alert("You do not have enough tokens!");
        
                        let alertBlooks = confirm("Would you like to show blooks as unlocking?");
                        let blooks = {};
                        let now = Date.now();
        
                        for (let i = 0; i < amount; i++) {
                            await stateNode.buyPack(true, box);
        
                            blooks[stateNode.state.unlockedBlook] ||= 0;
                            blooks[stateNode.state.unlockedBlook]++;
        
                            let before = Date.now();
        
                            now += Date.now() - before;
        
                            stateNode.setState({ canOpen: true, currentPack: "", opening: alertBlooks, doneOpening: alertBlooks, openPack: alertBlooks });
                            clearTimeout(stateNode.canOpenTimeout);
                        }
                        await new Promise(r => setTimeout(r));
                        alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                    }
                },
                {
                    name: "Remove Name Limit",
                    description: "Sets the name limit to 120, which is the actual max name length limit",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                        alert("Removed name length limit");
                    }
                },
                {
                    name: "Remove Random Name",
                    description: "Allows you to put a custom name",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
                        document.querySelector('[class*="nameInput"]')?.focus?.();
                    }
                },
                {
                    name: "Sell Duplicate Blooks",
                    description: "Sell all duplicate blooks leaving you with 1 each",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.confirm = i.contentWindow.confirm.bind(window);
                        i.remove();
                        if (/dashboard.*\/blooks/.test(window.location.href)) {
                            if (confirm(`Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)`)) {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                let now = Date.now(), results = "";
                                for (const blook in stateNode.state.blookData) if (stateNode.state.blookData[blook] > 1) {
                                    stateNode.setState({ blook, numToSell: stateNode.state.blookData[blook] - 1 });
                                    if (["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                    results += `    ${blook} ${stateNode.state.blookData[blook] - 1}\n`;
                                    await stateNode.sellBlook({ preventDefault: () => { } }, true);
                                }
                                alert(`(${Date.now() - now}ms) Results:\n${results.trim()}`);
                            }
                        } else alert("This can only be ran in the Blooks page.");
                    }
                },
                {
                    name: "Every Answer Correct",
                    description: "Sets every answer to be correct",
                    run: function () {
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.freeQuestions = stateNode.freeQuestions?.map?.(q => ({ ...q, correctAnswers: q.answers }));
                        stateNode.questions = stateNode.questions?.map?.(q => ({ ...q, correctAnswers: q.answers }));
                        stateNode.props.client.questions = stateNode.props.client.questions.map(q => ({ ...q, correctAnswers: q.answers }));
                    }
                },
        
        
                {
                    name: "Host Any Gamemode",
                    description: "Change the selected gamemode on the host settings page",
                    run: function (type) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        if (location.pathname == "/host/settings") {
                            const gamemodes = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"],
                                type = prompt(`Which gamemode do you want to switch to? (Case sensitive)\n${gamemodes.slice(0, gamemodes.length - 1).join(", ")} or ${gamemodes[gamemodes.length - 1]}`);
                            if (gamemodes.includes(type)) {
                                const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                stateNode.setState({ settings: { type } });
                            } else alert("Gamemode not found, make sure you spelled and capitalized it right.");
                        } else alert("Run this script on the host settings page");
                    }
                },
                {
                    name: "Change Blook Ingame",
                    description: "Changes your blook",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let { props } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
                        props.client.blook = prompt("Blook Name: (Case Sensitive)");;
                        props.liveGameController.setVal({ path: `c/${props.client.name}/b`, val: props.client.blook });
                    }
                },
                {
                    name: "Get Daily Rewards",
                    description: "Gets max daily tokens and xp",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                        else {
                            const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({
                                    gameMode: "Factory",
                                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                                }),
                                credentials: "include",
                                method: "POST"
                            }).then(x => x.json());
                            await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({ t }),
                                credentials: "include",
                                method: "POST"
                            });
                            await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, { credentials: "include" });
                            const { name, blook: { name: blookUsed } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.props.user.data;
                            await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({
                                    blookUsed, t, name,
                                    cash: Math.floor(Math.random() * 90000000) + 10000000,
                                    correctAnswers: Math.floor(Math.random() * 500) + 500,
                                    upgrades: Math.floor(Math.random() * 300) + 300,
                                    mode: "Time-Solo",
                                    nameUsed: "You",
                                    place: 1,
                                    playersDefeated: 0,
                                }),
                                credentials: "include",
                                method: "PUT"
                            });
                            fetch("https://play.blooket.com/api/users/add-rewards", {
                                body: JSON.stringify({ t, name, addedTokens: 500, addedXp: 300 }),
                                credentials: "include",
                                method: "PUT"
                            }).then(x => x.json())
                                .then(({ dailyReward }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                .catch(() => alert('There was an error when adding rewards.'));
                        }
                    }
                },
            ],
            voyage: [
                {
                    name: "Max Levels",
                    description: "Maxes out all islands and your boat",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ islandLevels: new Array(stateNode.state.islandLevels.length).fill(5) }, stateNode.updateBoatLevel);
                    }
                },
                {
                    name: "Set Doubloons",
                    description: "Sets Doubloons",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let doubloons = parseInt(prompt("How many doubloons do you want?")) || 0;
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ doubloons });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/d`,
                            val: doubloons
                        });
                    }
                },
                {
                    name: "Start Heist",
                    description: "Starts a heist on someone",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        
                        stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                            const players = Object.entries(val || {}).reduce((a, [name, c]) => (name != stateNode.props.client.name && a.push({ name, blook: c.b, doubloons: c.d || 0 }), a), []);
                            if (players.length === 0) {
                                stateNode.questionsToAnswer = 1;
                                return void stateNode.randomQ();
                            }
                            const { name, blook, doubloons } = players.find(x => x.name == prompt("Who would you like to heist? (Defaults to top player if no one found)")) || players.sort((a, b) => b.doubloons - a.doubloons)[0];
                            stateNode.setState({
                                stage: "heist",
                                heistInfo: { name, blook },
                                prizeAmount: Math.max(1000, doubloons)
                            });
                        });
                    }
                },
                {
                    name: "Swap Doubloons",
                    description: "Swaps Doubloons with someone",
                    run: async function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", r))).sort((a, b) => b[1].d - a[1].d).filter(x => x[0] != stateNode.props.client.name),
                            target = players.find(x => x[0] == prompt("Who would you like to swap with? (Defaults to top player if no one found)")) || players[0];
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                d: target[1].d,
                                tat: `${target[0]}:${target[1].d - stateNode.state.doubloons}`
                            }
                        });
                        stateNode.setState({ doubloons: target[1].d });
                    }
                },
                {
                    name: "Take Doubloons",
                    description: "Takes Doubloons from someone",
                    run: async function (player) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", r))).sort((a, b) => b[1].d - a[1].d).filter(x => x[0] != stateNode.props.client.name),
                            target = players.find(x => x[0] == prompt("Who would you like to take from? (Defaults to top player if no one found)")) || players[0];
                        stateNode.setState({ doubloons: stateNode.state.doubloons + target[1].d });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                d: target[1].d,
                                tat: `${target[0]}:${target[1].d}`
                            }
                        });
                    }
                }
            ],
            brawl: [
                {
                    name: "Double Enemy XP",
                    description: "Doubles enemy XP drop value",
                    run: function () {
                        for (const collider of Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('dmgCd'))) {
                            const enemies = collider.object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.val *= 2 }
                            enemies.children.entries.forEach(e => e.val *= 2);
                        }
                    }
                },
                {
                    name: "Half Enemy Speed",
                    description: "Makes enemies move 2x slower",
                    run: function () {
                        for (const collider of Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('dmgCd'))) {
                            const enemies = collider.object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.speed *= .5 }
                            enemies.children.entries.forEach(e => e.speed *= .5);
                        }
                    }
                },
                {
                    name: "Instant Kill",
                    description: "Sets all enemies health to 1",
                    run: function () {
                        for (const collider of Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('dmgCd'))) {
                            const enemies = collider.object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.hp = 1 }
                            enemies.children.entries.forEach(e => e.hp = 1);
                        }
                    }
                },
                {
                    name: "Invincibility",
                    description: "Makes you invincible",
                    run: function () {
                        for (const collider of Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime') || x.callbackContext?.toString().includes('dmgCd'))) collider.collideCallback = () => { };
                    }
                },
                {
                    name: "Magnet",
                    description: "Pulls all xp towards you",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('0x5dc)')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
                    }
                },
                {
                    name: "Max Current Abilities",
                    description: "Maxes out all your current abilities",
                    run: function () {
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.state.game.scene.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                        stateNode.setState({
                            level: stateNode.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
                        });
                    }
                },
                {
                    name: "Next Level",
                    description: "Skips to the next level",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let { object1: player, object2: xp } = stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes("emit']('xp"));
                        xp.get().spawn(player.x, player.y, ((e) => 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100)(stateNode.state.level) - stateNode.xp);
                    }
                },
                {
                    name: "Remove Obstacles",
                    description: "Removes all rocks and obstacles",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(body => {
                            try {
                                if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy();
                            } catch { }
                        });
                    }
                },
                {
                    name: "Kill Enemies",
                    description: "Kills all current enemies",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                    }
                },
                {
                    name: "Reset Health",
                    description: "Resets health and gives invincibility for 3 seconds",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn();
                    }
                }
            ],
            cafe: [
                {
                    name: "Max Items",
                    description: "Maxes out items in the shop (Only usable in the shop)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                        else {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
                        }
                    }
                },
                {
                    name: "Remove Customers",
                    description: "Skips the current customers (Not usable in the shop)",
                    run: function () {
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.state.customers.forEach((customer, i) => Object.keys(customer).length && stateNode.removeCustomer(i, true));
                    }
                },
                {
                    name: "Reset Abilities",
                    description: "Resets used abilities in shop (Only usable in the shop)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                        else {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.setState({ abilities: Object.fromEntries(Object.entries(stateNode.state.abilities).map(x => [x[0], 5])) });
                        }
                    }
                },
                {
                    name: "Set Cash",
                    description: "Sets cafe cash",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let cafeCash = Number(parseInt(prompt("How much cash would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ cafeCash });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                ca: cafeCash
                            }
                        });
                    }
                },
                {
                    name: "Stock Food",
                    description: "Stocks all food to 99 (Not usable in the shop)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                        else {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
                        }
                    }
                }
            ],
            hack: [
                {
                    name: "Choice ESP",
                    description: "Shows what each choice will give you",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                let { text } = stateNode.state.choices[0];
                                let chest = document.querySelector('[class^=styles__feedbackContainer___]');
                                if (chest.children.length <= 4) {
                                    let choice = document.createElement('div')
                                    choice.style.color = "white";
                                    choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                    choice.style.fontSize = "2em";
                                    choice.style.display = "flex";
                                    choice.style.justifyContent = "center";
                                    choice.style.marginTop = "675px";
                                    choice.innerText = text;
                                    chest.append(choice);
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Password ESP",
                    description: "Highlights the correct password",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { state } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
                                if (state.stage == "hack") [...document.querySelector('div[class^=styles__buttonContainer]').children].forEach(button => {
                                    if (button.innerText == state.correctPassword) return;
                                    button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                    button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                    button.style.textShadow = "0 0 1px #f33";
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Always Triple",
                    description: "Always get triple crypto",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ choices: [{ type: "mult", val: 3, rate: .075, blook: "Brainy Bot", text: "Triple Crypto" }] }), 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Auto Guess",
                    description: "Automatically guess the correct password",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { state } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
                                if (state.stage == "hack") for (const button of document.querySelector('div[class^=styles__buttonContainer]').children) button.innerText == state.correctPassword && button.click();
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Remove Hack",
                    description: "",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ hack: "" });
                    }
                },
                {
                    name: "Set Crypto",
                    description: "Sets crypto",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let amount = Number(parseInt(prompt("How much crypto would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ crypto: amount, crypto2: amount });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                p: stateNode.state.password,
                                cr: amount
                            }
                        });
                    }
                },
                {
                    name: "Set Password",
                    description: "Sets hacking password",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let password = prompt("What do you want to set your password to?");
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ password });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                p: password,
                                cr: stateNode.state.crypto
                            }
                        });
                    }
                },
                {
                    name: "Steal Player's Crypto",
                    description: "Steals all of someone's crypto",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let target = prompt("Who's crypto would you like to steal?");
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                console.log(!!players, players, player, cr, stateNode.state)
                                stateNode.setState({
                                    crypto: stateNode.state.crypto + cr,
                                    crypto2: stateNode.state.crypto + cr
                                });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        p: stateNode.state.password,
                                        cr: stateNode.state.crypto + cr,
                                        tat: `${player}:${cr}`
                                    }
                                });
                                console.log('done')
                            }
                        })
                    }
                }
            ],
            defense: [
                {
                    name: "Earthquake",
                    description: "Shuffles around towers",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({
                            eventName: "Earthquake",
                            event: {
                                short: "e",
                                color: "#805500",
                                icon: "fas fa-mountain",
                                desc: "All of your towers get mixed up",
                                rate: .02
                            },
                            buyTowerName: "",
                            buyTower: {}
                        }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
                        stateNode.tiles.forEach(row => row.forEach((col, i) => col === 3 && (row[i] = 0)));
                        let tiles = stateNode.tiles.flatMap((_, y) => _.map((__, x) => __ === 0 && ({ x, y }))).filter(Boolean).sort(() => .5 - Math.random());
                        stateNode.towers.forEach(tower => {
                            let { x, y } = tiles.shift();
                            tower.move(x, y, stateNode.tileSize);
                            stateNode.tiles[y][x] = 3;
                        });
                    }
                },
                {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.towers.forEach(tower => {
                            tower.range = 100;
                            tower.fullCd = tower.cd = 0;
                            tower.damage = 1e6;
                        });
                    }
                },
                {
                    name: "Remove Ducks",
                    description: "Removes ducks",
                    run: function () {
                        let { stateNode: { ducks, tiles } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        ducks.forEach(x => { tiles[x.y][x.x] = 0; });
                        ducks.length = 0;
                    }
                },
                {
                    name: "Remove Enemies",
                    description: "Removes all the enemies",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.enemies = stateNode.futureEnemies = [];
                    }
                },
                {
                    name: "Remove Obstacles",
                    description: "Lets you place towers anywhere",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.tiles = stateNode.tiles.map(row => row.fill(0));
                    }
                },
                {
                    name: "Set Damage",
                    description: "Sets damage",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.dmg = Number(parseInt(prompt("How much dmg would you like?")));
                    }
                },
                {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ round: Number(parseInt(prompt("What round do you want to set to?"))) })
                    }
                },
                {
                    name: "Set Tokens",
                    description: "Sets the amount of tokens you have",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ tokens: Number(parseInt(prompt("How many tokens would you like?"))) })
                    }
                }
            ],
            defense2: [
                {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
                            tower.stats.dmg = 1e6;
                            tower.stats.fireRate = 50;
                            tower.stats.ghostDetect = true;
                            tower.stats.maxTargets = 1e6;
                            tower.stats.numProjectiles &&= 100;
                            tower.stats.range = 100;
                            if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                        });
                    }
                },
                {
                    name: "Kill Enemies",
                    description: "Kills all the enemies",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.state.game.scene.enemyQueue.length = 0;
                        stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                    }
                },
                {
                    name: "Set Coins",
                    description: "Sets coins",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ coins: Number(parseInt(prompt("How many tokens would you like?"))) })
                    }
                },
                {
                    name: "Set Health",
                    description: "Sets the amount of health you have",
                    run: function (health) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ health: Number(parseInt(prompt("How much health do you want?"))) });
                    }
                },
                {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function (round) {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ round: Number(parseInt(prompt("What round do you want to set to?"))) })
                    }
                },
            ],
            dinos: [
                {
                    name: "Auto Choose",
                    description: "Automatically choose the best fossil when excavating",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    rand(e, t) {
                        const s = [];
                        while (s.length < t) {
                            const i = Math.random();
                            let r = 0, g = null;
                            for (let o = 0; o < e.length; o++) {
                                r += e[o].rate;
                                if (r >= i) {
                                    g = e[o];
                                    break;
                                }
                            }
                            g && !s.includes(g) && s.push(g)
                        }
                        return s;
                    },
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            const getFossils = () => this.rand([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                            this.data = setInterval(() => {
                                try {
                                    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                    if (stateNode.state.stage === "excavate") {
                                        stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                        let max = 0, index = -1;
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const { type, val } = stateNode.state.choices[i];
                                            const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                            if (value <= max && type != "mult") continue;
                                            max = value, index = i + 1;
                                        }
                                        document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                    }
                                } catch { }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Rock ESP",
                    description: "Shows what is under the rocks",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                        const getExpAscii = (num) => {
                            let res = "";
                            while (num > 0) {
                                res = exps[num % 10] + res;;
                                num = ~~(num / 10);
                            }
                            return res;
                        };
        
                        const shortNum = (value) => {
                            let newValue = value.toString();
                            if (value >= 1000) {
                                const suffixes = ["", "K", "M", "B", "T"];
                                const suffixNum = ~~((digits(value) - 1) / 3);
                                if (suffixNum < suffixes.length) {
                                    let shortValue = "";
                                    for (let precision = 3; precision >= 1; precision--) {
                                        shortValue = parseFloat((suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(precision)).toString();
                                        const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
                                        if (dotLessShortValue.length <= 3) break;
                                    }
                                    if (Number(shortValue) % 1 !== 0) shortValue = Number(shortValue).toFixed(1);
                                    newValue = shortValue + suffixes[suffixNum];
                                } else {
                                    let num = value;
                                    let exp = 0;
                                    while (num >= 100) {
                                        num = Math.floor(num / 10);
                                        exp += 1;
                                    }
                                    newValue = `${num / 10} × 10${getExpAscii(exp + 1)}`;
                                }
                            }
                            return newValue;
                        };
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                    choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                }, () => {
                                    rocks.forEach((element, index) => {
                                        const rock = stateNode.state.choices[index];
                                        if (element.querySelector('div')) element.querySelector('div').remove();
                                        const choice = document.createElement("div");
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Macondo";
                                        choice.style.fontSize = "1em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(25px)";
                                        choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                        element.append(choice);
                                    });
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Set Fossils",
                    description: "Sets the amount of fossils you have",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let fossils = Number(parseInt(prompt("How many fossils would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ fossils });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                f: fossils,
                                ic: stateNode.state.isCheating
                            }
                        });
                    }
                },
                {
                    name: "Set Multiplier",
                    description: "Sets fossil multiplier",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let fossilMult = Number(parseInt(prompt("What do you want your multiplier to be?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ fossilMult });
                    }
                },
                {
                    name: "Stop Cheating",
                    description: "Undoes cheating so that you can't be caught",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ isCheating: false });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/ic`,
                            val: false
                        });
                    }
                }
            ],
            doom: [
                {
                    name: "Fill Deck",
                    description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/map") {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|");
                            stateNode.props.tower.cards = 'Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰'.split("|").map(x => {
                                const [blook, c] = x.split(",");
                                return { strength: 20, charisma: 20, wisdom: 20, class: c, blook };
                            });
                            try { stateNode.props.addTowerNode(); } catch { }
                            stateNode.setState({ showDeck: false });
                        } else alert("You need to be on the map to run this cheat!");
                    }
                },
                {
                    name: "Max Cards",
                    description: "Maxes out all the cards in your deck",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/map") {
                            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            stateNode.props.tower.cards.forEach(card => {
                                card.strength = 20;
                                card.charisma = 20;
                                card.wisdom = 20;
                            });
                        } else alert("You need to be on the map to run this cheat!");
                    }
                },
                {
                    name: "Max Health",
                    description: "Fills the player's health",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/battle") Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ myHealth: 100 });
                        else alert("You need to be in battle to run this cheat!");
                    }
                },
                {
                    name: "Max Card Stats",
                    description: "Maxes out player's current card (Only works on attribute select page)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                        else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                    }
                },
                {
                    name: "Min Enemy Stats",
                    description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                        else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                    }
                },
                {
                    name: "Set Coins",
                    description: "Try's to set amount of tower coins you have",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.prompt.bind(window);
                        i.remove();
                        if (window.location.pathname == "/tower/battle") {
                            let coins = parseInt("0" + alert("How many coins would you like?"));
                            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                            try {
                                stateNode.props.setTowerCoins(coins);
                            } catch { }
                        } else alert("You need to be in battle to run this cheat!");
                    }
                }
            ],
            factory: [
                {
                    name: "Choose Blook",
                    description: "Gives you a blook",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        const blooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }];
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        const blook = blooks.find(function ({ name }) { return name.toLowerCase() == this }, prompt("Enter blook name:").toLowerCase());
                        if (blook) {
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.chooseBlook(blook);
                        }
                        else alert("That is not a valid blook!");
                    }
                },
                {
                    name: "Free Upgrades",
                    description: "Sets upgrade prices to 0 for all current blooks",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState(state => ({ ...state, blooks: state.blooks.map(blook => ({ ...blook, price: [0, 0, 0, 0] })) }));
                    }
                },
                {
                    name: "Max Blooks",
                    description: "Maxes out all your blooks' levels",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.blooks.forEach(blook => blook.level = 4);
                    }
                },
                {
                    name: "Remove Glitches",
                    description: "Removes all enemy glitches",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({
                            bits: 0,
                            ads: [],
                            hazards: [],
                            color: "",
                            lol: false,
                            joke: false,
                            slow: false,
                            dance: false,
                            glitch: "",
                            glitcherName: "",
                            glitcherBlook: ""
                        });
                        clearTimeout(stateNode.adTimeout);
                        clearInterval(stateNode.hazardInterval);
                        clearTimeout(stateNode.nightTimeout);
                        clearTimeout(stateNode.glitchTimeout);
                        clearTimeout(stateNode.lolTimeout);
                        clearTimeout(stateNode.jokeTimeout);
                        clearTimeout(stateNode.slowTimeout);
                        clearTimeout(stateNode.danceTimeout);
                        clearTimeout(stateNode.nameTimeout);
                    }
                },
                {
                    name: "Send Glitch",
                    description: "Sends a glitch to everyone else playing",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let glitches = { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" };
                        let val = Object.keys(glitches)[Math.floor(Math.random() * Object.keys(glitches).length)];
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        alert(`Sent a ${glitches[val]} glitch`);
                    }
                },
                {
                    name: "Set All MegaBot",
                    description: "Sets all your blooks to maxed out Mega Bots",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({
                            blooks: new Array(10).fill({
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "🤖",
                                rarity: "Legendary",
                                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                time: [5, 5, 3, 3, 3],
                                price: [7e6, 12e7, 19e8, 35e9],
                                active: false,
                                level: 4,
                                bonus: 5.5
                            })
                        });
                    }
                },
                {
                    name: "Set Cash",
                    description: "Sets amount of cash you have",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let cash = Number(parseInt(prompt("How much cash would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ cash });
                    }
                }
            ],
            fishing: [
                {
                    name: "Frenzy",
                    description: "Sets everyone to frenzy mode",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: stateNode.state.weight,
                                f: "Frenzy",
                                s: true
                            }
                        })
                    }
                },
                {
                    name: "Remove Distractions",
                    description: "Removes distractions",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ party: "" });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        const f = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)];
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: stateNode.state.weight, f, s: true
                            }
                        });
                        alert(`Sent a ${f} distraction`);
                    }
                },
                {
                    name: "Set Lure",
                    description: "Sets fishing lure (range 1 - 5)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0) });
                    }
                },
                {
                    name: "Set Weight",
                    description: "Sets weight",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let weight = Number(parseInt(prompt("How much weight would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ weight, weight2: weight });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: weight,
                                f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                            }
                        });
                    }
                }
            ],
            flappy: [
                {
                    name: "Toggle Ghost",
                    description: "Lets you go through the pipes",
                    type: "toggle",
                    enabled: false,
                    run: function () {
                        this.enabled = !this.enabled;
                        Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x.gameObject.frame.texture.key.startsWith("blook") && (x.checkCollision.none = this.enabled, x.gameObject.setAlpha(this.enabled ? 0.5 : 1)));
                    }
                },
                {
                    name: "Set Score",
                    description: "Sets flappy blook score",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({ score: parseFloat("0" + prompt("What do you want to set your score to?")) });
                    }
                }
            ],
            gold: [
                {
                    name: "Always Triple",
                    description: "Always get triple gold",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode._choosePrize ||= stateNode.choosePrize;
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                stateNode.choosePrize = function (i) {
                                    stateNode.state.choices[i] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
                                    stateNode._choosePrize(i);
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                            stateNode.choosePrize = stateNode._choosePrize || stateNode.choosePrize;
                        }
                    }
                },
                {
                    name: "Auto Choose",
                    description: "Automatically picks the option that would give you the most gold",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(async () => {
                                try {
                                    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                    if (stateNode.state.stage === "prize") {
                                        const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
                                        let max = 0; index = -1;
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const { type, val } = stateNode.state.choices[i];
                                            let value = stateNode.state.gold;
                                            switch (type) {
                                                case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                                                case "multiply":
                                                case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                                                case "swap": value = players || stateNode.state.gold;
                                                case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                                            }
                                            if ((value || 0) <= max) continue;
                                            max = value, index = i + 1;
                                        }
                                        document.querySelector(`div[class^='styles__choice${index}']`).click();
                                    }
                                } catch { }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Chest ESP",
                    description: "Shows what each chest will give you",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
                                    let chest = document.querySelector(`div[class^='styles__choice${index + 1}']`);
                                    if (!chest || chest.querySelector('div')) return;
                                    let choice = document.createElement('div');
                                    choice.style.color = "white";
                                    choice.style.fontFamily = "Eczar";
                                    choice.style.fontSize = "2em";
                                    choice.style.display = "flex";
                                    choice.style.justifyContent = "center";
                                    choice.style.transform = "translateY(200px)";
                                    choice.innerText = text;
                                    chest.append(choice);
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Reset Players Gold",
                    description: "Sets a player's gold to 0",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let player = prompt("Who's gold would you like to reset?");
                        let { stateNode: { props, state } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            if (players && Object.keys(players).map(x => x.toLowerCase()).includes(player.toLowerCase())) props.liveGameController.setVal({
                                path: "c/".concat(props.client.name),
                                val: {
                                    b: props.client.blook,
                                    g: state.gold,
                                    tat: `${player}:swap:0`
                                }
                            });
                        })
                    }
                },
                {
                    name: "Set Gold",
                    description: "Sets amount of gold",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let gold = Number(parseInt(prompt("How much gold would you like?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ gold, gold2: gold });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                g: gold
                            }
                        });
                    }
                },
                {
                    name: "Swap Gold",
                    description: "Swaps gold with someone",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            stateNode.setState({
                                players: (players ? Object.entries(players).map(([name, { b, g }]) => ({
                                    name, blook: b, gold: g || 0
                                })).filter((e) => e.name != stateNode.props.client.name).sort(({ gold }, { gold: gold2 }) => gold2 - gold) : []),
                                ready: true,
                                phaseTwo: true,
                                stage: "prize",
                                choiceObj: { type: "swap" }
                            });
                        });
                    }
                },
                {
                    name: "Reset All Players' Gold",
                    description: "Set's everyone else's gold to 0",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        let { stateNode: { props, state } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let count = 0;
                        props.liveGameController.getDatabaseVal("c", async (players) => {
                            if (players) for (const player of Object.keys(players)) {
                                props.liveGameController.setVal({
                                    path: "c/".concat(props.client.name),
                                    val: {
                                        b: props.client.blook,
                                        g: state.gold,
                                        tat: `${player}:swap:0`
                                    }
                                });
                                count++;
                                await new Promise(r => setTimeout(r, 4000));
                            }
                            alert(`Reset ${count} players' gold!`);
                        })
                    }
                }
            ],
            kingdom: [
                {
                    name: "Choice ESP",
                    description: "Shows you what will happen if you say Yes or No",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            let stats = ['materials', 'people', 'happiness', 'gold'];
                            let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
                            this.data = setInterval(() => {
                                let { guest: data, phase } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state;
                                if (phase == "choice") {
                                    Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                    Object.entries(data.yes || {}).forEach(x => {
                                        if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                        let element = document.createElement('div');
                                        element.className = 'choiceESP';
                                        element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                        element.innerText = String(x[1])
                                        elements[x[0]].appendChild(element);
                                    })
                                    Object.entries(data.no || {}).forEach(x => {
                                        if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                        let element = document.createElement('div');
                                        element.className = 'choiceESP';
                                        element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                        element.innerText = String(x[1])
                                        elements[x[0]].appendChild(element);
                                    })
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Disable Tax Toucan",
                    description: "Tax evasion",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE;
                    }
                },
                {
                    name: "Max Stats",
                    description: "Sets all resources to the max",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                    }
                },
                {
                    name: "Set Guests",
                    description: "Sets the amount of guests you've seen",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let guestScore = Number(parseInt(prompt("How many guests do you want?")));
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ guestScore });
                    }
                },
                {
                    name: "Skip Guest",
                    description: "Skips the current guest",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.nextGuest();
                    }
                }
            ],
            racing: [
                {
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function () {
                        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ progress: stateNode.state.goalAmount }, () => {
                            const { state: { question } } = stateNode;
                            try {
                                [...document.querySelectorAll(`[class*="answerContainer"]`)][question.answers.map((x, i) => question.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                            } catch { }
                        });
                    }
                },
                {
                    name: "Set Questions",
                    description: "Sets the number of questions left",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let progress = stateNode.props.client.amount - parseInt(prompt("How many questions left do you want?"));
                        if (!isNaN(progress)) {
                            stateNode.setState({ progress });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    pr: progress
                                }
                            });
                        }
                    }
                }
            ],
            royale: [
                {
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                                stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    }
                },
                {
                    name: "Auto Answer",
                    description: "Chooses the correct answer for you",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                    }
                },
            ],
            rush: [
                {
                    name: "Set Blooks",
                    description: "Sets amount of blooks you or your team has",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let numBlooks = Number(parseInt(prompt("How many blooks do you want?")));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ numBlooks });
                        stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                            path: `a/${stateNode.props.client.name}/bs`,
                            val: numBlooks
                        }) : stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/bs`,
                            val: numDefense
                        });
                    }
                },
                {
                    name: "Set Defense",
                    description: "Sets amount of defense you or your team has (Max 4)",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let numDefense = Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))), 4);
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ numDefense });
                        stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                            path: `a/${stateNode.props.client.name}/d`,
                            val: numDefense
                        }) : stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/d`,
                            val: numDefense
                        });
                    }
                }
            ],
            workshop: [
                {
                    name: "Remove Distractions",
                    description: "Removes all enemy distractions",
                    run: function () {
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                    }
                },
                {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone else playing",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        let distractions = { c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" };
                        let val = Object.keys(distractions)[Math.floor(Math.random() * Object.keys(distractions).length)];
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        alert(`Sent a ${distractions[val]} distraction`);
                    }
                },
                {
                    name: "Set Toys",
                    description: "Sets amount of toys",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let toys = parseInt(prompt("How many toys would you like?"));
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.setState({ toys });
                        stateNode.props.liveGameController.setVal({
                            path: "c/".concat(stateNode.props.client.name),
                            val: {
                                b: stateNode.props.client.blook,
                                t: toys
                            }
                        });
                    }
                },
                {
                    name: "Set Toys Per Question",
                    description: "Sets amount of toys per question",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ toysPerQ: parseInt(prompt("How many toys per question would you like?")) });
                    }
                },
                {
                    name: "Swap Toys",
                    description: "Swaps toys with someone",
                    run: function () {
                        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            stateNode.setState({
                                choosingPlayer: false,
                                players: (players ? Object.entries(players).map(([name, { b, t }]) => ({ name, blook: b, toys: t || 0 })).filter((e) => e.name != stateNode.props.client.name).sort(({ toys }, { toys: toys2 }) => toys2 - toys) : []),
                                phaseTwo: true,
                                stage: "prize",
                                choiceObj: { type: "swap" }
                            }, () => setTimeout(() => stateNode.setState({ choosingPlayer: true }), 300));
                        });
                    }
                }
            ]
        })// .map(x => [x[0], x[1].reduce((a, b) => (a[b.name] = b.run, a), {})]).reduce((a, [b, c]) => (a[b] = c, a), {});
        
        let global = document.createElement('details');
        global.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`);
        for (let script of cheats.global) {
            let cheat = createButton(script.name);
            cheat.style.backgroundColor = script.type == "toggle" ? script.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
            cheat.onclick = () => {
                try {
                    script.run();
                } finally {
                    cheat.style.backgroundColor = script.type == "toggle" ? script.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
                }
            };
            global.appendChild(cheat);
        }
        global.open = false;
        global.style.paddingBottom = '10px';
        body.appendChild(global);
        
        let cheatDiv = document.createElement('div');
        body.appendChild(cheatDiv);
        
        console.log(cheats);
        const setCheats = (curPage) => {
            if (!curPage || !cheats[curPage]) return;
            for (let cheat of cheats[curPage]) {
                let button = createButton(cheat.name);
                button.style.backgroundColor = cheat.type == "toggle" ? cheat.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
                button.onclick = () => {
                    try {
                        cheat.run();
                    } finally {
                        button.style.backgroundColor = cheat.type == "toggle" ? cheat.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
                    }
                };
                cheatDiv.appendChild(button);
                cheatDiv.appendChild(document.createElement('br'));
            }
        }
        setTimeout(() => setCheats(getSite()), 50);
        var offLocationChange = onLocationChange(pathname => {
            let curPage = getSite();
            curPageEl.innerText = getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected';
            cheatDiv.innerHTML = "";
            setCheats(curPage);
        });
        
        function onLocationChange(handler) {
            let current = window.location.pathname;
            const interval = setInterval(() => {
                if (window.location.pathname == current) return;
                current = window.location.pathname;
                handler(current);
            }, 50);
            return () => clearInterval(interval);
        }
        
        function createButton(cheat) {
            let button = document.createElement('button');
            button.classList.add('cheat');
            button.innerText = cheat;
            return button
        }
        function getSite(capitalize) {
            switch (window.location.pathname) {
                case "/play/racing":
                    return capitalize ? "Racing" : "racing";
                case "/play/pirate":
                    return capitalize ? "Pirate's Voyage" : "voyage";
                case "/play/factory":
                    return capitalize ? "Factory" : "factory";
                case "/play/classic/get-ready":
                case "/play/classic/question":
                case "/play/classic/answer/sent":
                case "/play/classic/answer/result":
                case "/play/classic/standings":
                    return capitalize ? "Classic" : "classic";
                case "/play/battle-royale/match/preview":
                case "/play/battle-royale/question":
                case "/play/battle-royale/answer/sent":
                case "/play/battle-royale/answer/result":
                case "/play/battle-royale/match/result":
                    return capitalize ? "Battle Royale" : "royale";
                case "/play/toy":
                    return capitalize ? "Santa's Workshop" : "workshop";
                case "/play/gold":
                    return capitalize ? "Gold Quest" : "gold";
                case "/play/brawl":
                    return capitalize ? "Monster Brawl" : "brawl";
                case "/play/hack":
                    return capitalize ? "Crypto Hack" : "hack";
                case "/play/fishing":
                    return capitalize ? "Fishing Frenzy" : "fishing";
                case "/play/rush":
                    return capitalize ? "Blook Rush" : "rush";
                case "/play/dino":
                    return capitalize ? "Deceptive Dinos" : "dinos";
                case "/tower/map":
                case "/tower/battle":
                case "/tower/rest":
                case "/tower/risk":
                case "/tower/shop":
                case "/tower/victory":
                    return capitalize ? "Tower of Doom" : "doom";
                case "/cafe":
                case "/cafe/shop":
                    return capitalize ? "Cafe" : "cafe";
                case "/defense":
                    return capitalize ? "Tower Defense" : "defense";
                case "/play/defense2":
                    return capitalize ? "Tower Defense 2" : "defense2";
                case "/kingdom":
                    return capitalize ? "Crazy Kingdom" : "kingdom";
                default:
                    return false;
            }
        };
        function toggleHidden(e) {
            e.code == 'KeyE' && (GUI.hidden = !GUI.hidden)
        };
        addEventListener('keypress', toggleHidden);
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/swagging-post/Blooket-Cheat-GUI/main/autoupdate/timestamps/mobileGui.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        let _, time = 1710881112558, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1710881112558 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("Loaded Mobile GUI | SC0TT\n\nJoin the Discord server for updates!\nhttps://discord.gg/e2UXEwjcsg")
    }
})();
