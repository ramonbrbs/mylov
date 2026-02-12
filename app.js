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
    title: "Nosso Primeiro Encontro",
    date: "12/06/2021",
    message: "A ansiedade batendo forte, mas o sorriso entregou que era começo de algo gigante.",
    photoUrl: "https://picsum.photos/seed/amor-01/1200/900",
  },
  {
    title: "Pôr do Sol na Praia",
    date: "03/07/2021",
    message: "A gente ficou em silêncio vendo o céu mudar de cor e parecia que o tempo tinha parado.",
    photoUrl: "https://picsum.photos/seed/amor-02/1200/900",
  },
  {
    title: "Cinema e Pipoca",
    date: "20/08/2021",
    message: "No fim do filme, a melhor parte ainda era ter você segurando minha mão.",
    photoUrl: "https://picsum.photos/seed/amor-03/1200/900",
  },
  {
    title: "Viagem Relâmpago",
    date: "11/09/2021",
    message: "Mochila pequena, planos grandes e a certeza de que com você tudo vira aventura.",
    photoUrl: "https://picsum.photos/seed/amor-04/1200/900",
  },
  {
    title: "Almoço de Domingo",
    date: "10/10/2021",
    message: "Entre risadas e sobremesa repetida, fomos criando nosso jeito de ser casa.",
    photoUrl: "https://picsum.photos/seed/amor-05/1200/900",
  },
  {
    title: "Noite de Festa",
    date: "31/10/2021",
    message: "Dançamos sem técnica nenhuma e com felicidade de sobra.",
    photoUrl: "https://picsum.photos/seed/amor-06/1200/900",
  },
  {
    title: "Café na Varanda",
    date: "27/11/2021",
    message: "Conversa leve, vento no rosto e aquela paz de quem encontrou o lugar certo.",
    photoUrl: "https://picsum.photos/seed/amor-07/1200/900",
  },
  {
    title: "Trilha e Cachoeira",
    date: "18/12/2021",
    message: "Subida cansativa, paisagem linda e o melhor prêmio: comemorar abraçados.",
    photoUrl: "https://picsum.photos/seed/amor-08/1200/900",
  },
  {
    title: "Ano Novo",
    date: "01/01/2022",
    message: "Viramos o ano prometendo mais coragem, mais cuidado e mais nós dois.",
    photoUrl: "https://picsum.photos/seed/amor-09/1200/900",
  },
  {
    title: "Surpresa de Aniversário",
    date: "14/02/2022",
    message: "Você caprichou nos detalhes e eu fiquei com aquele sorriso bobo o dia inteiro.",
    photoUrl: "https://picsum.photos/seed/amor-10/1200/900",
  },
  {
    title: "Parque no Fim da Tarde",
    date: "20/03/2022",
    message: "Cada passo ao seu lado confirmou que meu caminho preferido é com você.",
    photoUrl: "https://picsum.photos/seed/amor-11/1200/900",
  },
  {
    title: "Jantar Especial",
    date: "08/04/2022",
    message: "A comida estava ótima, mas seu olhar ganhou de qualquer prato.",
    photoUrl: "https://picsum.photos/seed/amor-12/1200/900",
  },
  {
    title: "Viagem dos Sonhos",
    date: "21/05/2022",
    message: "A paisagem era linda, mas meu cenário favorito continuou sendo você.",
    photoUrl: "https://picsum.photos/seed/amor-13/1200/900",
  },
  {
    title: "Dia de Preguiça",
    date: "26/06/2022",
    message: "Série, cobertor e paz. O simples fica perfeito quando estamos juntos.",
    photoUrl: "https://picsum.photos/seed/amor-14/1200/900",
  },
  {
    title: "Nossa Foto Favorita",
    date: "12/07/2022",
    message: "Essa imagem guarda tudo: carinho, parceria e vontade de viver muitos capítulos ainda.",
    photoUrl: "https://picsum.photos/seed/amor-15/1200/900",
  },
];

const videoMemories = [
  {
    title: "Fim de tarde inesquecível",
    message: "Um vídeo para lembrar o dia em que a gente só riu e esqueceu do relógio.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-happy-couple-running-on-the-beach-2716-large.mp4",
    posterUrl: "https://picsum.photos/seed/video-capa-01/1200/720",
  },
  {
    title: "Nossa energia em movimento",
    message: "Aqui está nossa vibe: leve, divertida e sem filtro.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-couple-having-fun-at-the-beach-4267-large.mp4",
    posterUrl: "https://picsum.photos/seed/video-capa-02/1200/720",
  },
];

const heroSubtitle = document.getElementById("heroSubtitle");
const footerCoupleNames = document.getElementById("footerCoupleNames");
const photoGrid = document.getElementById("photoGrid");
const videoGrid = document.getElementById("videoGrid");
const messageWall = document.getElementById("messageWall");
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
renderMessageWall();
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

function renderMessageWall() {
  const snippets = photoMemories.slice(0, 8);

  messageWall.innerHTML = snippets
    .map(
      (memory) => `
      <article class="quote-card">
        <p>"${memory.message}"</p>
        <span>${memory.title}</span>
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

  gsap.utils.toArray(".video-card, .quote-card").forEach((card) => {
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
