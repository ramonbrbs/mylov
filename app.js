const coupleProfile = {
  personA: "Ramon",
  personB: "Suzy",
  anniversaryDate: "2018-02-13",
  introMessage:
    "Uma linha do tempo feita para lembrar nossos melhores momentos, rir das histórias malucas e agradecer por cada dia juntos.",
};

// Troque fotos, mensagens e datas aqui quando quiser personalizar.
const photoMemories = [
  {
    title: "Natal",
    date: "30/11/2016",
    message:
      "Nosso primeiro Natal",
    photoUrl: "media/20161201_001040944_iOS.JPG",
  },
  {
    title: "O Comecinho",
    date: "12/02/2017",
    message:
      "As primeiras vezes que saimos juntos.",
    photoUrl: "media/IMG_1437.JPG",
  },
  {
    title: "Arrumando a minha vida",
    date: "29/04/2017",
    message:
      "Quando eu comecei a sair da caverna.",
    photoUrl: "media/IMG_2149.JPG",
  },
  {
    title: "São João",
    date: "24/06/2019",
    message:
      "Meu primeiro São João de verdade.",
    photoUrl: "media/IMG_2100.JPG",
  },
  {
    title: "Shows",
    date: "03/11/2019",
    message:
      "Primeiras de muitas festas.",
    photoUrl: "media/IMG_2507.JPG",
  },
  {
    title: "Pandemia",
    date: "07/12/2020",
    message:
      "Foi difícil mas a gente passou junto.",
    photoUrl: "media/IMG_0429.jpeg",
  },
  {
    title: "Chegando no Frio",
    date: "03/12/2022",
    message:
      "O começo da gente nessas terras de frio e chuva.",
    photoUrl: "media/IMG_3984.JPG",
  },
  {
    title: "Priemria Viagem na Europa",
    date: "27/01/2023",
    message:
      "A gente descobriu mais uma coisa em comum. A vontade de explorar o mundo.",
    photoUrl: "media/IMG_4246.jpeg",
  },
  {
    title: "St. Patricks",
    date: "17/03/2023",
    message:
      "Descobrimos também que tem coisas que só vamos gostar uma vez.",
    photoUrl: "media/IMG_4475.JPG",
  },
  {
    title: "Pedras, Mar e Sol",
    date: "28/05/2023",
    message:
      "Descobrimos o quanto é bom o calor.",
    photoUrl: "media/IMG_5447.JPG",
  },
  {
    title: "Dublin",
    date: "28/05/2023",
    message:
      "Aprendemos a esquecer a estação oposta do ano. No verão esquecemos o inverno, e no inverno o verão.",
    photoUrl: "media/IMG_4913.jpeg",
  },
  {
    title: "Primavera em Flor",
    date: "13/04/2024",
    message:
      "Com as primaveras agora damos valor a cada momento do ano.",
    photoUrl: "media/IMG_7059.JPG",
  },
  {
    title: "Praia",
    date: "26/06/2024",
    message:
      "E continuamos explorando esse mundão.",
    photoUrl: "media/IMG_7688.JPG",
  },
  {
    title: "Sem esquecer nossas raízes",
    date: "02/02/2025",
    message:
      "Agora que temos dois lugares, também não somos mais de lugar nenhum.",
    photoUrl: "media/IMG_9443.jpeg",
  },
  {
    title: "Viajar e viajar",
    date: "04/05/2025",
    message:
      "Ainda assim vamos explorar tudo.",
    photoUrl: "media/IMG_9869.jpeg",
  },
  {
    title: "Natureza",
    date: "10/05/2025",
    message:
      "Passar cada tempo e encontrar cada lugar novo.",
    photoUrl: "media/IMG_9996.JPG",
  },
  {
    title: "Você",
    date: "19/05/2025",
    message:
      "O importante é ter você do meu lado.",
    photoUrl: "media/IMG_0009.JPG",
  },
];

const videoMemories = [
  {
    title: "Primavera",
    message:
      "13/04/2024",
    videoUrl: "media/IMG_7061.MOV",
    posterUrl: "media/IMG_7059.JPG",
  },
  {
    title: "Verão",
    message:
      "26/06/2024",
    videoUrl: "media/IMG_7701.MOV",
    posterUrl: "media/IMG_7688.JPG",
  },
];

const heroSubtitle = document.getElementById("heroSubtitle");
const footerCoupleNames = document.getElementById("footerCoupleNames");
const photoGrid = document.getElementById("photoGrid");
const videoGrid = document.getElementById("videoGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const nameGate = document.getElementById("nameGate");
const nameGateForm = document.getElementById("nameGateForm");
const nameGateInput = document.getElementById("nameGateInput");
const nameGateHint = document.getElementById("nameGateHint");
const introOverlay = document.getElementById("introOverlay");
const introLines = Array.from(document.querySelectorAll("[data-intro-line]"));

const metricYears = document.getElementById("metricYears");
const metricMonths = document.getElementById("metricMonths");
const metricDays = document.getElementById("metricDays");
let introHasStarted = false;
let gateHasUnlocked = false;

heroSubtitle.textContent = `${coupleProfile.personA} + ${coupleProfile.personB}. ${coupleProfile.introMessage}`;
footerCoupleNames.textContent = `${coupleProfile.personA} e ${coupleProfile.personB}`;

renderPhotoMemories();
renderVideoMemories();
updateRelationshipMetrics();
setupLightbox();
initAccessFlow();

function renderPhotoMemories() {
  const cards = photoMemories
    .map(
      (memory, index) => `
        <article class="photo-card">
          <button type="button" data-image="${memory.photoUrl}" data-caption="${escapeAttribute(
            memory.message
          )}">
            <figure>
              <img
                src="${memory.photoUrl}"
                alt="Memória ${index + 1}: ${memory.title}"
                loading="lazy"
              />
            </figure>
            <div class="photo-content">
              <div class="photo-topline">
                <h3 class="photo-title">${memory.title}</h3>
                <p class="photo-date">${memory.date}</p>
              </div>
              <p class="photo-message">${memory.message}</p>
            </div>
          </button>
        </article>
      `
    )
    .join("");

  photoGrid.innerHTML = cards;
}

function renderVideoMemories() {
  videoGrid.innerHTML = videoMemories
    .map(
      (video) => `
      <article class="video-card">
        <video controls preload="metadata" poster="${video.posterUrl}">
          <source src="${video.videoUrl}" type="video/mp4" />
          Seu navegador não suporta vídeo em HTML5.
        </video>
        <div class="video-content">
          <h3>${video.title}</h3>
          <p>${video.message}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function updateRelationshipMetrics() {
  const anniversary = new Date(coupleProfile.anniversaryDate);
  const now = new Date();

  const totalDays = Math.max(
    0,
    Math.floor((now.getTime() - anniversary.getTime()) / (1000 * 60 * 60 * 24))
  );
  const years = Math.floor(totalDays / 365.25);
  const months = Math.floor((totalDays - years * 365.25) / 30.44);

  metricYears.textContent = String(years);
  metricMonths.textContent = String(months);
  metricDays.textContent = totalDays.toLocaleString("pt-BR");
}

function setupLightbox() {
  photoGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-image]");
    if (!button) return;

    const image = button.dataset.image;
    const caption = button.dataset.caption;
    if (!image) return;

    lightboxImage.src = image;
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    if (window.gsap) {
      gsap.fromTo(
        "#lightbox img, #lightbox p",
        { opacity: 0, y: 26, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    document.body.style.overflow = "";
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function setupAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".topbar", { opacity: 0, y: -32, duration: 0.7 })
    .from(".hero-copy > *", { opacity: 0, y: 30, stagger: 0.12, duration: 0.7 }, "-=0.2")
    .from(".hero-metrics article", { opacity: 0, y: 28, stagger: 0.12, duration: 0.6 }, "-=0.25")
    .from(".hero-cta", { opacity: 0, y: 16, scale: 0.96, duration: 0.5 }, "-=0.2");

  gsap.utils.toArray(".photo-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 65,
      rotate: index % 2 === 0 ? -1.8 : 1.8,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 84%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".video-card, .impact-message-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 44,
      duration: 0.72,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 86%",
        once: true,
      },
    });
  });

  gsap.to(".orb-a", {
    x: 120,
    y: -40,
    scrollTrigger: {
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
    },
  });

  gsap.to(".orb-b", {
    x: -100,
    y: 60,
    scrollTrigger: {
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
    },
  });

  gsap.to(".orb-c", {
    x: 40,
    y: -100,
    scrollTrigger: {
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
    },
  });

  gsap.to(".pulse-chip", {
    y: -4,
    repeat: -1,
    yoyo: true,
    duration: 1.4,
    stagger: 0.2,
    ease: "sine.inOut",
  });
}

function setupCardHover() {
  if (!window.gsap) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const cards = document.querySelectorAll(".photo-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.45,
        ease: "power2.out",
      });
    });
  });
}

function escapeAttribute(value) {
  return value.replaceAll('"', "&quot;");
}

function initAccessFlow() {
  const hasActiveGate = document.body.classList.contains("gate-active");
  if (!hasActiveGate || !nameGate || !nameGateForm || !nameGateInput) {
    runIntroSequence();
    return;
  }

  nameGateForm.addEventListener("submit", handleNameGateSubmit);
  nameGateInput.addEventListener("input", () => {
    if (!nameGateHint) return;
    nameGateHint.classList.remove("is-error");
    nameGateHint.textContent =
      "Dica: este acesso reconhece quem carrega nosso apelido especial.";
  });

  window.setTimeout(() => {
    nameGateInput.focus();
  }, 80);
}

function handleNameGateSubmit(event) {
  event.preventDefault();
  if (gateHasUnlocked || !nameGateInput) return;

  const rawValue = nameGateInput.value.trim();
  if (isGateAnswerValid(rawValue)) {
    unlockNameGate();
    return;
  }

  if (nameGateHint) {
    nameGateHint.classList.add("is-error");
    nameGateHint.textContent = "Nome não reconhecido. Tente novamente.";
  }

  if (window.gsap && nameGate) {
    gsap.fromTo(
      nameGate.querySelector(".name-gate-frame"),
      { x: -8 },
      { x: 8, duration: 0.08, yoyo: true, repeat: 3, ease: "power1.inOut", clearProps: "x" }
    );
  }
}

function isGateAnswerValid(value) {
  return /(suzy|suzanne)/i.test(value);
}

function unlockNameGate() {
  gateHasUnlocked = true;
  if (nameGateHint) {
    nameGateHint.classList.remove("is-error");
    nameGateHint.textContent = "Perfeito. Preparando sua surpresa...";
  }

  if (window.gsap && nameGate) {
    gsap.to(nameGate, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: hideGateAndStartIntro,
    });
    return;
  }

  hideGateAndStartIntro();
}

function hideGateAndStartIntro() {
  if (nameGate) {
    nameGate.hidden = true;
    nameGate.style.display = "none";
  }

  document.body.classList.remove("gate-active");
  runIntroSequence();
}

function runIntroSequence() {
  if (introHasStarted) return;
  introHasStarted = true;

  if (!introOverlay || introLines.length === 0) {
    revealPageContent();
    return;
  }

  if (!window.gsap) {
    runIntroFallback();
    return;
  }

  const timeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: revealPageContent,
  });

  introLines.forEach((line, index) => {
    timeline.fromTo(
      line,
      { autoAlpha: 0, y: 24, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.62 }
    );
    timeline.to(line, { duration: 0.92 });
    timeline.to(line, { autoAlpha: 0, y: -18, duration: 0.42, ease: "power2.in" });

    if (index < introLines.length - 1) {
      timeline.to({}, { duration: 2 });
    }
  });
}

function runIntroFallback() {
  let currentIndex = 0;
  const visibleTime = 1200;

  const showLine = () => {
    introLines.forEach((line, index) => {
      const isCurrent = index === currentIndex;
      line.style.opacity = isCurrent ? "1" : "0";
      line.style.visibility = isCurrent ? "visible" : "hidden";
    });

    window.setTimeout(() => {
      introLines[currentIndex].style.opacity = "0";
      introLines[currentIndex].style.visibility = "hidden";

      if (currentIndex < introLines.length - 1) {
        currentIndex += 1;
        window.setTimeout(showLine, 2000);
        return;
      }

      revealPageContent();
    }, visibleTime);
  };

  showLine();
}

function revealPageContent() {
  if (!introOverlay) {
    unlockPageContent();
    return;
  }

  if (window.gsap) {
    gsap.to(introOverlay, {
      autoAlpha: 0,
      duration: 0.55,
      ease: "power2.out",
      onComplete: () => {
        hideIntroOverlay();
        unlockPageContent();
      },
    });
    return;
  }

  hideIntroOverlay();
  unlockPageContent();
}

function hideIntroOverlay() {
  if (!introOverlay) return;

  introOverlay.hidden = true;
  introOverlay.style.display = "none";
}

function unlockPageContent() {
  document.body.classList.remove("intro-active");
  setupAnimations();
  setupCardHover();
}
