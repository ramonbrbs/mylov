const coupleProfile = {
  personA: "Seu Nome",
  personB: "Nome do Amor",
  anniversaryDate: "2021-06-12",
  introMessage:
    "Uma linha do tempo feita para lembrar nossos melhores momentos, rir das histórias malucas e agradecer por cada dia juntos.",
};

// Troque fotos, mensagens e datas aqui quando quiser personalizar.
const photoMemories = [
  {
    title: "Luzes de Dezembro",
    date: "30/11/2016",
    message:
      "Selfie espontânea com decoração natalina ao fundo. A foto tem movimento e brilho difuso, mas transmite alegria pura e início de uma memória afetiva.",
    photoUrl: "media/20161201_001040944_iOS.JPG",
  },
  {
    title: "Sorriso em Ambiente Aconchegante",
    date: "12/02/2017",
    message:
      "Retrato íntimo em ambiente interno, com luz quente e proximidade do enquadramento. O foco está no sorriso e na leveza do momento.",
    photoUrl: "media/IMG_1437.JPG",
  },
  {
    title: "Construindo Nosso Espaço",
    date: "29/04/2017",
    message:
      "Cena doméstica de pintura com escada e fita azul de acabamento. A imagem simboliza parceria prática e cuidado com o que vocês constroem juntos.",
    photoUrl: "media/IMG_2149.JPG",
  },
  {
    title: "Noite de Festa Popular",
    date: "24/06/2019",
    message:
      "Registro em meio a multidão, chapéu de palha e iluminação forte de evento. A composição passa energia coletiva e diversão compartilhada.",
    photoUrl: "media/IMG_2100.JPG",
  },
  {
    title: "Praia e Letreiro",
    date: "03/11/2019",
    message:
      "Foto de dia aberto com céu limpo e letreiro de praia ao fundo. A cena destaca o clima de viagem leve e espontânea.",
    photoUrl: "media/IMG_2507.JPG",
  },
  {
    title: "Passeio de Máscara e Luzes",
    date: "07/12/2020",
    message:
      "Selfie noturna com árvores iluminadas e ambos de máscara. O registro mostra cuidado, contexto de época e presença um do outro mesmo nos dias mais incertos.",
    photoUrl: "media/IMG_0429.jpeg",
  },
  {
    title: "Festival ao Entardecer",
    date: "03/12/2022",
    message:
      "Plano aberto de evento com palco, público e luz dourada do fim da tarde. A leitura visual é de celebração e sintonia entre vocês.",
    photoUrl: "media/IMG_3984.JPG",
  },
  {
    title: "Beijo no Jardim",
    date: "27/01/2023",
    message:
      "Composição romântica com perspectiva longa de jardim formal e céu dramático. O beijo no centro reforça intimidade e foco emocional da imagem.",
    photoUrl: "media/IMG_4246.jpeg",
  },
  {
    title: "Dia Verde na Rua",
    date: "17/03/2023",
    message:
      "Cena urbana de celebração com roupas e adereços verdes, trazendo contexto cultural forte. A foto mistura movimento de rua e protagonismo dela.",
    photoUrl: "media/IMG_4475.JPG",
  },
  {
    title: "Pedras, Mar e Sol",
    date: "28/05/2023",
    message:
      "Retrato em costão com mar calmo e montanha ao fundo. O contraste entre rocha e céu azul cria uma estética limpa, de descanso e conexão.",
    photoUrl: "media/IMG_5447.JPG",
  },
  {
    title: "Arquitetura e Nós Dois",
    date: "28/05/2023",
    message:
      "Selfie com fundo arquitetônico histórico e linhas góticas marcantes. A análise visual aponta contraste entre grandiosidade do cenário e proximidade do casal.",
    photoUrl: "media/IMG_4913.jpeg",
  },
  {
    title: "Primavera em Flor",
    date: "13/04/2024",
    message:
      "Enquadramento fechado sob árvore florida rosa. A paleta suave e os sorrisos naturais deixam o momento delicado e muito fotogênico.",
    photoUrl: "media/IMG_7059.JPG",
  },
  {
    title: "Dia de Praia com Flores",
    date: "26/06/2024",
    message:
      "Foto de passeio costeiro com mar, palmeiras e buganvílias vibrantes. A composição comunica verão, viagem e tranquilidade em dupla.",
    photoUrl: "media/IMG_7688.JPG",
  },
  {
    title: "Noite de Festa na Rua",
    date: "02/02/2025",
    message:
      "Selfie em grupo com portal de festa ao fundo e iluminação noturna intensa. A leitura é de celebração comunitária e memória coletiva com amigos.",
    photoUrl: "media/IMG_9443.jpeg",
  },
  {
    title: "Cachoeira e Sorriso",
    date: "04/05/2025",
    message:
      "Composição natural com água em movimento sobre rochas. O cenário transmite frescor e aventura leve, mantendo o casal como centro narrativo.",
    photoUrl: "media/IMG_9869.jpeg",
  },
  {
    title: "Caminho de Pedra e História",
    date: "10/05/2025",
    message:
      "Registro em rua histórica com arquitetura medieval em profundidade. A foto valoriza escala do lugar e reforça a ideia de jornada compartilhada.",
    photoUrl: "media/IMG_9996.JPG",
  },
  {
    title: "Píer ao Sol",
    date: "19/05/2025",
    message:
      "Selfie em passarela litorânea com horizonte aberto e linhas que conduzem o olhar. O resultado é uma imagem clara de parceria e cotidiano feliz.",
    photoUrl: "media/IMG_0009.JPG",
  },
];

const videoMemories = [
  {
    title: "Registro em Movimento - Abril",
    message:
      "Vídeo capturado em 13/04/2024 (metadado interno). Pela proximidade temporal com as fotos floridas do mesmo dia, ele funciona como extensão dinâmica do passeio de primavera.",
    videoUrl: "media/IMG_7061.MOV",
    posterUrl: "media/IMG_7059.JPG",
  },
  {
    title: "Registro em Movimento - Junho",
    message:
      "Vídeo de 26/06/2024 (metadado interno), alinhado ao bloco de fotos de praia do mesmo período. A análise aponta continuidade temática: verão, luz forte e atmosfera de viagem.",
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
