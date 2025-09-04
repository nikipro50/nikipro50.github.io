document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var themeToggle = document.getElementById("themeToggle");
    var html = document.documentElement;
    var icon = themeToggle === null || themeToggle === void 0 ? void 0 : themeToggle.querySelector("i");
    var savedTheme = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        html.classList.add("dark");
        icon === null || icon === void 0 ? void 0 : icon.classList.replace("fa-moon", "fa-sun");
        (_a = document
            .querySelector('meta[name="theme-color"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("content", "#000000");
    }
    themeToggle === null || themeToggle === void 0 ? void 0 : themeToggle.addEventListener("click", function () {
        var _a, _b;
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) {
            icon === null || icon === void 0 ? void 0 : icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
            (_a = document
                .querySelector('meta[name="theme-color"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("content", "#000000");
        }
        else {
            icon === null || icon === void 0 ? void 0 : icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
            (_b = document
                .querySelector('meta[name="theme-color"]')) === null || _b === void 0 ? void 0 : _b.setAttribute("content", "#0070f3");
        }
    });
    var menuToggle = document.getElementById("menuToggle");
    var closeMenu = document.getElementById("closeMenu");
    var mobileMenu = document.getElementById("mobileMenu");
    if (menuToggle && closeMenu && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.remove("translate-x-full");
            document.body.classList.add("overflow-hidden");
        });
        closeMenu.addEventListener("click", function () {
            mobileMenu.classList.add("translate-x-full");
            document.body.classList.remove("overflow-hidden");
        });
        var mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("translate-x-full");
                document.body.classList.remove("overflow-hidden");
            });
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var _a;
            e.preventDefault();
            var targetId = anchor.getAttribute("href");
            if (!targetId)
                return;
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var header_1 = document.querySelector("header");
                var headerHeight = (_a = header_1 === null || header_1 === void 0 ? void 0 : header_1.offsetHeight) !== null && _a !== void 0 ? _a : 0;
                var targetPosition = targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
    /*
    const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = (document.getElementById("name") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const message = (document.getElementById("message") as HTMLTextAreaElement).value;

            console.log("Form Submitted:", { name, email, message });

            const button = contactForm.querySelector<HTMLButtonElement>(
                'button[type="submit"]'
            );
            if (!button) return;

            const originalText = button.textContent ?? "";
            button.textContent = "Message Sent!";

            contactForm.reset();

            setTimeout(() => {
                button.textContent = originalText;
            }, 3000);
        });
    }
    */
    var header = document.querySelector("header");
    var sections = document.querySelectorAll("section");
    function checkScroll() {
        if (header) {
            if (window.scrollY > 0) {
                header.classList.add("shadow-md");
            }
            else {
                header.classList.remove("shadow-md");
            }
        }
        sections.forEach(function (section) {
            var sectionTop = section.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("opacity-100", "translate-y-0");
                section.classList.remove("opacity-0", "translate-y-4");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
    var observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-4");
                obs.unobserve(el);
            }
        });
    }, observerOptions);
    var terminalContainer = document.getElementById("terminal-container");
    var terminalContent = document.querySelector(".terminal-content");
    var commandSpan = document.querySelector(".command-text");
    if (terminalContainer && terminalContent && commandSpan) {
        var commandText_1 = "https://github.com/nikipro50";
        var i_1 = 0;
        var typeCommand_1 = function () {
            if (i_1 < commandText_1.length) {
                commandSpan.textContent += commandText_1.charAt(i_1);
                i_1++;
                setTimeout(typeCommand_1, 50);
            }
            else {
                var cursor = document.createElement("span");
                cursor.className =
                    "inline-block w-2 h-5 bg-gray-900 dark:bg-white ml-1 animate-blink align-middle";
                terminalContent.appendChild(cursor);
            }
        };
        setTimeout(typeCommand_1, 1000);
    }
    else {
        var terminal = document.querySelector(".terminal-body");
        if (terminal) {
            var commandEl_1 = terminal.querySelector(".command");
            if (!commandEl_1)
                return;
            var commandText_2 = (_b = commandEl_1.textContent) !== null && _b !== void 0 ? _b : "";
            commandEl_1.textContent = "";
            var i_2 = 0;
            var typeCommand_2 = function () {
                if (i_2 < commandText_2.length) {
                    commandEl_1.textContent += commandText_2.charAt(i_2);
                    i_2++;
                    setTimeout(typeCommand_2, 50);
                }
                else {
                    commandEl_1.insertAdjacentHTML("afterend", '<span class="animate-blink">_</span>');
                }
            };
            setTimeout(typeCommand_2, 1000);
        }
    }
});
