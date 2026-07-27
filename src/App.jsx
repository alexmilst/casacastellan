import { useState, useEffect } from "react";

const C = {
  cream: "#F5F1E7",
  white: "#FCFAF5",
  ink: "#211D17",
  soft: "#5C5344",
  terra: "#A14E2C",
  terraDeep: "#8C4225",
  terraWash: "#F1E1CF",
  line: "#E1D9C6",
  logoBg: "#FBF4EE",
  limestone: "#EDE1CC",
  travertine: "#F5F1E7",
};

const LOGO = "https://i.postimg.cc/nH1D2XK4/Untitled-design-(2).png";
const MAP_FULL = "https://i.postimg.cc/5f3fP4MM/Chat-GPT-Image-Jul-21-2026-03-24-06-PM.png";

const IMAGES = {
  heroLeft: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iOTUwIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9Ijk1MCIgZmlsbD0iI0Q5Q0ZCOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNiIgZmlsbD0iIzRBM0YzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SGVybyBwaG90byDigJQgbGVmdDwvdGV4dD48L3N2Zz4=",
  heroRight: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iMTE1MCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSIxMTUwIiBmaWxsPSIjRDlDRkI4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmaWxsPSIjNEEzRjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5IZXJvIHBob3RvIOKAlCByaWdodDwvdGV4dD48L3N2Zz4=",
  commissions: "https://i.postimg.cc/g0w8QtvN/Chat-GPT-Image-Jul-21-2026-06-59-09-PM.png",
  reclaimed: "https://i.postimg.cc/652K7dLD/Chat-GPT-Image-Jul-21-2026-07-06-15-PM.png",
  art: "https://i.postimg.cc/MGrdNrvB/b289352910bab12739ff5077fedc21b8.webp",
  estate: "https://i.postimg.cc/prwPVZr0/historic-interior-upscaled-4x.png",
  mapSpain: "https://i.postimg.cc/8zXx8VPk/Chat-GPT-Image-Jul-22-2026-01-13-55-AM.png",
  mapPortugal: "https://i.postimg.cc/9X1pgYf3/Chat-GPT-Image-Jul-22-2026-01-05-54-AM.png",
  mapFrance: "https://i.postimg.cc/vHcWqRjQ/exec-1d755c84-c764-46c2-b157-624e4f3dd0aa.png",
  mapItaly: "https://i.postimg.cc/rp8sHxs6/Chat-GPT-Image-Jul-22-2026-01-01-07-AM.png",
  mapGreece: "https://i.postimg.cc/sgz5VBxQ/exec-64eca38a-3b84-4f6b-bcb4-afa5295f9049.png",
};

const MATERIALS_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0UzRDlDMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzIxMUQxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+TWF0ZXJpYWxzIHBob3RvPC90ZXh0Pjwvc3ZnPg==";

const collection = [
  {
    n: "01",
    name: "Private Commissions",
    img: IMAGES.commissions,
    body:
      "Bespoke custom commission work to architectural elements made to your drawings by long-established and family owned European workshops — from hand-forged gates and railings to carved entry doors, painted tile murals, stone fireplaces and fountains. Casa Castellan selects the appropriate workshop, coordinates quotations, material and finish samples. Every commission is engineered to architect's specifications and produced under our supervision at the workshop.",
  },
  {
    n: "02",
    name: "Reclaimed Architectural Materials",
    img: IMAGES.reclaimed,
    body:
      "Antique limestone and terracotta flooring, antique oak beams, carved doors, stone fireplaces and hand-forged ironwork, sourced directly from established reclamation partner houses & yards across Spain, France, Italy, Greece and Portugal. Before the client commits, each proposed lot is inspected in person at source and documented for available quantity, dimensions, visible condition and surface character.",
  },
  {
    n: "03",
    name: "Fine Art",
    img: IMAGES.art,
    body:
      "Casa Castellan exclusively represents a selected group of living European artists in the United States, presenting original paintings and sculpture to architects, interior designers and private collectors. Works are acquired directly from the artist's studio through Casa Castellan, with portraiture, site-specific commissions, custom works and curated selections developed for individual interiors and collections.",
  },
  {
    n: "04",
    name: "Antiques & Estate Pieces",
    img: IMAGES.estate,
    body:
      "Antiques and singular objects sourced from private European estates, specialist dealers and provincial auction houses — including furniture, lighting, mirrors and decorative arts. Each piece is presented with dimensions, visible condition, estimated date or attribution where supportable, and available provenance. Period pieces, later editions and reproductions are clearly identified.",
  },
];

const process = [
  {
    t: "Send a Specification",
    d:
      "Share a material specification, architectural drawing set or concise project brief—whether for a reclaimed floor, fireplace surround, carved doorway, entry gate or commissioned artwork. Include dimensions, quantity, preferred material or finish, intended application, delivery location and required-on-site date where known. Preliminary sketches and reference photos are sufficient to begin.",
    img: "https://i.postimg.cc/1RDRqF6h/Chat-GPT-Image-Jul-22-2026-03-10-50-AM.png",
  },
  {
    t: "Receive a Proposal",
    d:
      "Casa Castellan identifies the best yard, workshop or artist and presents the available material or proposed commission with dimensions, quantity, condition or finish, and lead time. Pricing is issued by the source and includes logistics, insurance, duty, customs broker, Casa Castellan's sourcing, verification and coordination services. Depending on the material and quantity, pricing typically lands 30–40% below the equivalent piece sourced through a US showroom.",
    img: "https://i.postimg.cc/yYvHmy8y/architect-at-desk-upscaled-4x.png",
  },
  {
    t: "Review Samples",
    d:
      "Before any commitment is made, physical material and finish samples are sent to the architect's office or project site for review under the project's own lighting and alongside the design palette. For one-of-a-kind pieces, Casa Castellan provides detailed photography, video, measurements and condition documentation, supported by an in-person inspection at source. No order proceeds without the client's written approval.",
    img: "https://i.postimg.cc/sfm8qDCy/Chat-GPT-Image-Jul-22-2026-04-37-18-AM.png",
  },
  {
    t: "Approve & Place the Order",
    d:
      "Once the source, specification and costs are approved, the yard, workshop or artist issues the order and receives payment directly from the client. Casa Castellan coordinates supplier documentation, approved samples, shop drawings and payment milestones, then supervises fabrication or preparation through final inspection and export packing. For reclaimed materials, \"preparation\" can include cleaning, sorting, calibration, repair or packing. For commissioned work, this stage covers production supervision.",
    img: "https://i.postimg.cc/XvwWf96h/07f0f9e665097685c0094967f9e1ab6f.webp",
  },
  {
    t: "Delivery",
    d:
      "Casa Castellan coordinates the complete journey from the European source to the project address, including export packing, collection, insured international freight, import, customs brokerage and final-mile delivery. Logistics are quoted separately and approved before shipment, with Casa Castellan remaining the client's single point of contact throughout. On tile and flooring orders, we ship 10–15% extra material at no charge to cover cuts and breakage. Delivery windows are coordinated around your construction schedule, and a member of our team stays reachable throughout the shipment — from the workshop floor in Andalucía to the loading dock on project site.",
    img: "https://i.postimg.cc/MT1h08fT/Chat-GPT-Image-Jul-24-2026-01-55-59-AM.png",
  },
];


const countries = [
  {
    country: "Spain",
    img: IMAGES.mapSpain,
    materials: [
      "https://i.pinimg.com/736x/13/b9/3f/13b93f089d62882b7ce42a7220ef2278.jpg",
      "https://i.pinimg.com/1200x/e3/ed/98/e3ed9815f61bf504dac433d86b7c76c6.jpg",
      "https://i.pinimg.com/736x/14/90/b1/1490b1fb0bd41d1a0db1338fdad1d3c9.jpg",
      "https://i.pinimg.com/736x/0c/af/87/0caf878953f5285d3d12a3caf4a310e2.jpg",
      "https://i.pinimg.com/vwebp/1200x/90/a0/30/90a03099f95f24c1a51d4b5912a52a8d.webp",
      "https://i.pinimg.com/vwebp/1200x/a1/73/8a/a1738a260ae07b44bf4c619f0e68c5b1.webp",
    ],
    regions: [
      { name: "Andalucía", cities: "Seville · Triana · Córdoba · Granada", mats: "Terracotta roof tiles · Architectural ceramics · Antique doors · Rejería ironwork" },
      { name: "Castilla-La Mancha", cities: "Toledo", mats: "Hand-forged iron · Gates · Window grilles" },
      { name: "Valencian Community", cities: "Manises", mats: "Architectural ceramics · Glazed tiles · Lustreware" },
    ],
  },
  {
    country: "France",
    img: IMAGES.mapFrance,
    materials: [
      "https://i.pinimg.com/736x/96/8e/e1/968ee175b87c7d7443f8f9da1c3d24c5.jpg",
      "https://i.pinimg.com/vwebp/1200x/b7/79/c4/b779c45f2a2ce856e732ed6a5f2baca6.webp",
      "https://i.pinimg.com/vwebp/736x/15/d9/14/15d914fd26db0b1695cc28b5b67e32b6.webp",
      "https://i.pinimg.com/736x/cb/5b/87/cb5b870887cc5443ce177ba937db0981.jpg",
      "https://i.pinimg.com/vwebp/1200x/93/63/91/936391cb361bcfbeb0b5e9d7b5facc1e.webp",
      "https://i.pinimg.com/vwebp/1200x/a7/04/d1/a704d12743d0c7200967d01419e67842.webp",
      "https://i.pinimg.com/vwebp/736x/07/f3/23/07f323c52db2e2e160b4d77b22efff91.webp",
    ],
    regions: [
      { name: "Provence — Antiques", cities: "L'Isle-sur-la-Sorgue", mats: "Architectural antiques · Reclaimed stone · Fireplaces · Fountains" },
      { name: "Provence — Ceramics", cities: "Apt · Salernes", mats: "Faience · Pottery · Terracotta flooring · Tomettes" },
      { name: "Occitanie — Historic Languedoc", cities: "Nîmes · Uzès · Vers-Pont-du-Gard", mats: "Limestone · Antique flooring · Fireplaces · Fountains" },
      { name: "Burgundy", cities: "Beaune · Comblanchien", mats: "Reclaimed oak beams · Burgundy limestone · Antique flooring" },
    ],
  },
  {
    country: "Italy",
    img: IMAGES.mapItaly,
    materials: [
      "https://i.pinimg.com/vwebp/736x/b2/4b/8d/b24b8d85380197b5760832c095f735b5.webp",
      "https://i.pinimg.com/736x/b1/f8/42/b1f842adf6b710e79280f164d7c2e27e.jpg",
      "https://i.pinimg.com/736x/01/89/6b/01896b134905f993d3cf9e44c5a1a399.jpg",
      "https://i.pinimg.com/736x/12/4c/a7/124ca749f2fef9190d1656f1fd0ee070.jpg",
      "https://i.pinimg.com/vwebp/1200x/6c/5b/5a/6c5b5a30106269f8f93b139471762a02.webp",
      "https://i.pinimg.com/vwebp/736x/53/50/f1/5350f1a186322f6c085fcb6bd31d1537.webp",
    ],
    regions: [
      { name: "Tuscany — Marble", cities: "Carrara · Pietrasanta", mats: "Marble · Commissioned carving · Carved architectural stone" },
      { name: "Tuscany — Terracotta", cities: "Impruneta · Rapolano Terme", mats: "Architectural terracotta · Tuscan travertine" },
      { name: "Lazio", cities: "Tivoli · Guidonia", mats: "Roman travertine — flooring, cladding, fountains and columns" },
      { name: "Veneto — Stone", cities: "Vicenza · Verona", mats: "Pietra di Vicenza · Verona ornamental stone · Carved surrounds" },
      { name: "Veneto — Glass", cities: "Venice · Murano", mats: "Hand-blown glass · Decorative and commissioned lighting" },
      { name: "Campania", cities: "Vietri sul Mare", mats: "Hand-painted majolica · Architectural tiles" },
      { name: "Puglia", cities: "Lecce", mats: "Pietra Leccese · Carved limestone" },
      { name: "Sicily", cities: "Caltagirone · Palermo", mats: "Maiolica · Terracotta · Antique doors · Architectural salvage" },
      { name: "Eastern Sicily", cities: "Catania · Etna", mats: "Lava stone · Glazed lava surfaces" },
    ],
  },
  {
    country: "Portugal",
    img: IMAGES.mapPortugal,
    materials: [
      "https://i.pinimg.com/vwebp/1200x/2a/d6/93/2ad6932470ba1451f2a7585b28281821.webp",
      "https://i.pinimg.com/vwebp/1200x/36/67/1f/36671f72fa52fac2a628d97169e67ea6.webp",
      "https://i.pinimg.com/vwebp/1200x/fe/60/97/fe6097c93043aced652270439401aa23.webp",
      "https://i.pinimg.com/vwebp/1200x/e1/5c/93/e15c93469e0a2aea9cfb4cd0bd392647.webp",
    ],
    regions: [
      { name: "Alentejo", cities: "Estremoz · Borba · Vila Viçosa", mats: "White and pink marble · Flooring · Cladding · Carved stone" },
      { name: "Lisbon Region", cities: "Lisbon · Pêro Pinheiro · Montelavar", mats: "Azulejos · Lioz limestone · Carved stone · Architectural salvage" },
      { name: "Central Portugal", cities: "Porto de Mós · Moleanos · Alcobaça", mats: "Limestone flooring · Cladding · Fireplaces · Architectural stonework" },
      { name: "Porto & North", cities: "Porto · Vila Nova de Gaia", mats: "Azulejos · Reclaimed stone · Painted doors · Antique ironwork" },
    ],
  },
  {
    country: "Greece",
    img: IMAGES.mapGreece,
    materials: [
      "https://i.pinimg.com/736x/15/57/7d/15577df493e998774292686253a2dc67.jpg",
      "https://i.pinimg.com/vwebp/736x/81/51/27/81512796df72be2eb7390cb599a0d389.webp",
      "https://i.pinimg.com/1200x/0e/5f/8b/0e5f8b6d46767f512cec8396d817e20f.jpg",
      "https://i.pinimg.com/vwebp/1200x/74/08/1e/74081ee90f0fbafe2772296ff80ba38a.webp",
    ],
    regions: [
      { name: "Attica", cities: "Dionysos · Penteli", mats: "Pentelic marble — the historic stone of the Parthenon and the principal Acropolis monuments" },
      { name: "Northern Greece & Thassos", cities: "Drama · Kavala · Thassos", mats: "Volakas · Kavala · Thassos white marble" },
      { name: "Cyclades — Tinos", cities: "Tinos", mats: "Commissioned marble carving · Traditional stoneworking" },
      { name: "Cyclades — Sifnos", cities: "Sifnos", mats: "Traditional pottery · Ceramic craft" },
    ],
  },
];

function MaterialsSlideshow({ images, alt, dotColor }) {
  const [i, setI] = useState(0);
  const slides = images && images.length ? images : [MATERIALS_PLACEHOLDER];

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 3800);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      <img
        src={slides[i]}
        alt={alt}
        style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
      />
      {slides.length > 1 && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 10, display: "flex", justifyContent: "center", gap: 6 }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show photo ${idx + 1}`}
              style={{
                width: 5,
                height: 5,
                padding: 0,
                border: "none",
                borderRadius: "50%",
                background: idx === i ? dotColor : "rgba(33,29,23,.3)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function CasaCastellanV2() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNav(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const display = {
    fontFamily: "'Quattrocento', serif",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: C.ink,
  };

  const label = {
    fontFamily: "'Optima', 'Candara', 'Century Gothic', 'Segoe UI', sans-serif",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: C.soft,
  };

  return (
    <div style={{ background: C.cream, color: C.ink, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;700&family=Inter:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        .cc-hamburger { display: none; }
        @media (min-width: 881px) {
          .cc-hero-cta { display: none !important; }
          .cc-hero-heading { font-size: clamp(26px,2.6vw,35px) !important; }
        }
        @media (max-width: 880px) {
          .cc-nav-links { display: none !important; }
          .cc-nav-cta { display: none !important; }
          .cc-hamburger { display: block; }
        }
        @media (max-width: 720px) {
          .cc-footer-grid { grid-template-columns: 1fr !important; }
        }
        html { scroll-behavior: smooth; }
        .cc-grid { display: grid; grid-template-columns: 1.05fr 1.15fr; gap: clamp(32px,6vw,64px); align-items: stretch; }
        @media (max-width: 880px) {
          .cc-grid { grid-template-columns: 1fr; }
          .cc-grid > *:last-child { order: -1; justify-self: center; }
        }
        .cc-collection { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px,1fr)); gap: clamp(24px,3vw,32px); }
        .cc-countries { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 900px) { .cc-countries { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .cc-countries { grid-template-columns: 1fr; } }
        .cc-about { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px,5vw,64px); }
        @media (max-width: 720px) { .cc-about { grid-template-columns: 1fr; } }
        .cc-about-section { position: relative; min-height: clamp(560px,72vw,760px); display: flex; align-items: flex-end; }
        .cc-closing-section { position: relative; }
        .cc-closing-photo { width: 100%; height: auto; aspect-ratio: 2238 / 2508; object-fit: cover; display: block; background: ${C.ink}; }
        .cc-closing-card {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: ${C.limestone};
          padding: clamp(28px,4vw,44px) clamp(28px,5vw,56px);
          width: min(680px, calc(100% - 40px));
        }
        @media (max-width: 640px) {
          .cc-closing-section { display: block; }
          .cc-closing-card { position: static; transform: none; width: 100%; }
        }
        .cc-about-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; display: block; }
        .cc-about-card {
          position: relative;
          z-index: 1;
          background: ${C.limestone};
          margin: clamp(24px,4vw,48px);
          margin-left: auto;
          padding: clamp(36px,5vw,56px);
          width: min(560px, calc(100% - 48px));
        }
        @media (max-width: 780px) {
          .cc-about-section { display: block; min-height: 0; }
          .cc-about-photo { position: static; height: 60vw; }
          .cc-about-card { margin: 0; width: 100%; padding: clamp(28px,6vw,40px); }
        }
        .cc-materials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px 40px; text-align: center; }
        @media (max-width: 640px) { .cc-materials { grid-template-columns: 1fr; } }
        .cc-process { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); gap: clamp(28px,3vw,40px); }
        .cc-step-row { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px,5vw,64px); align-items: center; }
        .cc-step-row.reverse .cc-step-text { order: 2; }
        .cc-step-row.reverse .cc-step-img { order: 1; }
        @media (max-width: 780px) {
          .cc-step-row { grid-template-columns: 1fr; }
          .cc-step-row.reverse .cc-step-text, .cc-step-row.reverse .cc-step-img { order: 0; }
        }
        .cc-btn { font-family: 'Optima','Candara','Century Gothic',sans-serif; font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase; border: 1px solid ${C.ink}; background: transparent; padding: 11px 22px; cursor: pointer; color: ${C.ink}; transition: background .2s ease, color .2s ease; text-decoration: none; display: inline-block; }
        .cc-btn:hover { background: ${C.ink}; color: ${C.cream}; }
        .cc-btn-solid { background: ${C.terra}; border-color: ${C.terra}; color: ${C.white}; }
        .cc-btn-solid:hover { background: ${C.terraDeep}; }
      `}</style>

      {/* ── NAV ─────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px clamp(20px,4vw,56px)",
          background: "#F2EBD9",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ ...display, color: C.ink, fontSize: 22, lineHeight: 1, whiteSpace: "nowrap" }}>Casa Castellan</div>
          <div style={{ ...label, fontWeight: 700, color: C.soft, fontSize: 7.5, letterSpacing: ".12em", marginTop: 5, whiteSpace: "nowrap" }}>European Art &amp; Architectural Heritage</div>
        </div>
        <div style={{ display: "flex", gap: "clamp(18px,3vw,40px)" }} className="cc-nav-links">
          {["About", "Collection", "Sourcing", "Process"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: C.ink,
                fontSize: 12.5,
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="cc-btn cc-nav-cta"
          style={{
            padding: "9px 20px",
            fontFamily: "'Quattrocento', serif",
            fontWeight: 700,
            fontSize: 12.5,
            letterSpacing: "0.04em",
            background: C.ink,
            borderColor: C.ink,
            color: C.cream,
          }}
        >
          Project Inquiry
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="cc-hamburger"
          style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}
        >
          <div style={{ width: 24, height: 2, background: C.ink, marginBottom: 6 }} />
          <div style={{ width: 24, height: 2, background: C.ink, marginBottom: 6 }} />
          <div style={{ width: 24, height: 2, background: C.ink }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="cc-mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 30,
            background: C.cream,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px clamp(20px,4vw,56px)" }}>
            <div style={{ ...display, color: C.ink, fontSize: 20, whiteSpace: "nowrap" }}>Casa Castellan</div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: "none", border: "none", padding: 8, cursor: "pointer", fontSize: 28, color: C.ink, lineHeight: 1 }}
            >
              ×
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 32 }}>
            {["About", "Collection", "Sourcing", "Process"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Quattrocento', serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: C.ink,
                  fontSize: 20,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="cc-btn"
              style={{
                marginTop: 16,
                padding: "12px 28px",
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.04em",
                background: C.ink,
                borderColor: C.ink,
                color: C.cream,
              }}
            >
              Project Inquiry
            </a>
          </div>
        </div>
      )}


      {/* ── HERO ─────────────────────── */}
      <header style={{ background: "#F2EBD9", borderBottom: `1px solid ${C.line}` }}>
        <div
          className="cc-grid"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,8vw,112px) clamp(24px,5vw,80px) clamp(48px,7vw,96px)" }}
        >
          <div>
            <p style={{ ...label, fontSize: 13, margin: "0 0 18px" }}>European Trade House</p>
            <h1
              className="cc-hero-heading"
              style={{
                ...display,
                fontSize: "clamp(28px,2.8vw,37px)",
                lineHeight: 1.55,
                letterSpacing: ".02em",
                margin: 0,
              }}
            >
              European architectural materials, private commissions and fine art —{" "}
              <em
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  textTransform: "none",
                  letterSpacing: "normal",
                  color: C.terraDeep,
                }}
              >
                sourced directly from historic estates, family workshops and yards.
              </em>
            </h1>

            <div aria-hidden="true" style={{ width: 64, height: 2, background: C.terra, margin: "30px 0" }} />

            <p style={{ fontFamily: "'Lora', serif", fontSize: "clamp(17px,1.6vw,19px)", lineHeight: 1.78, color: C.soft, maxWidth: 520, margin: 0, textAlign: "justify" }}>
              Casa Castellan works with reclamation houses, workshops and artists across Spain, Italy, France,
              Portugal and Greece, supplying architects, builders and interior designers throughout the United
              States.
            </p>

            <a
              href="#contact"
              className="cc-btn cc-btn-solid cc-hero-cta"
              style={{
                marginTop: 32,
                width: "fit-content",
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                letterSpacing: "0.04em",
                background: C.ink,
                borderColor: C.ink,
                color: C.cream,
              }}
            >
              Project Inquiry
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: 10 }} aria-hidden="true" />
            <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "flex-end" }}>
              <img
                src={LOGO}
                alt="Casa Castellan"
                className="cc-hero-logo"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "top right", transform: "translateX(40px)" }}
              />
            </div>
            <div style={{ height: 20 }} aria-hidden="true" />
          </div>
        </div>

        {/* full-width sourcing / serving band */}
        <div style={{ background: C.ink }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(40px,6vw,60px) clamp(24px,5vw,80px)", textAlign: "center" }}>
            <p style={{ ...label, fontSize: 11, letterSpacing: ".25em", color: C.limestone, margin: "0 0 16px" }}>
              Sourcing
            </p>
            <p
              style={{
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontSize: "clamp(15px,1.8vw,20px)",
                color: C.terra,
                margin: 0,
              }}
            >
              Spain · France · Italy · Portugal · Greece
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 19,
                color: C.limestone,
                margin: "10px 0 0",
              }}
            >
              Established reclamation yards, stone suppliers, family workshops and artists
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "clamp(28px,4vw,40px) 0" }}>
              <span style={{ width: 44, height: 1, background: "rgba(245,241,231,.18)" }} />
              <span style={{ width: 6, height: 6, transform: "rotate(45deg)", background: C.terra }} />
              <span style={{ width: 44, height: 1, background: "rgba(245,241,231,.18)" }} />
            </div>

            <p style={{ ...label, fontSize: 11, letterSpacing: ".25em", color: C.limestone, margin: "0 0 16px" }}>
              Project Destinations
            </p>
            <p
              style={{
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontSize: "clamp(15px,1.8vw,20px)",
                color: C.terra,
                margin: 0,
              }}
            >
              Laguna Beach · Montecito · Palm Beach · Coral Gables
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 19,
                color: C.limestone,
                margin: "10px 0 0",
              }}
            >
              With project delivery coordinated throughout the United States
            </p>
          </div>
        </div>
      </header>

      {/* ── ABOUT ─────────────────────── */}
      <section id="about" style={{ background: "#F2EBD9", borderTop: `1px solid ${C.line}`, padding: "clamp(56px,8vw,96px) clamp(20px,4vw,56px)" }}>
        <h2 style={{ ...display, fontSize: "clamp(24px,3vw,32px)", margin: "0 0 clamp(32px,5vw,52px)" }}>About</h2>
        <div className="cc-about">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 22 }}>
            <p style={{ fontFamily: "'Lora', serif", margin: 0, fontSize: 16, lineHeight: 1.75, color: C.ink, textAlign: "justify" }}>
              Casa Castellan is an independent sourcing, verification and coordination house for European
              architectural materials, bespoke private commissions, fine art and selected estate pieces. We work
              directly with reclamation yards, stone suppliers, historic family workshops and artists across
              Spain, France, Italy, Portugal and Greece.
            </p>
            <p style={{ fontFamily: "'Lora', serif", margin: 0, fontSize: 16, lineHeight: 1.75, color: C.soft, textAlign: "justify" }}>
              Each lot is inspected and verified in person at the source before purchase. Commissioned work is
              produced under our supervision at the workshop and reviewed against approved drawings, samples and
              agreed milestones.
            </p>
            <p style={{ fontFamily: "'Lora', serif", margin: 0, fontSize: 16, lineHeight: 1.75, color: C.soft, textAlign: "justify" }}>
              Casa Castellan carries no speculative inventory. Every material, object or commission is selected
              for a specific project, ensuring that proposals reflect current availability, documented condition
              and genuine production capacity. Direct contact and relationship with the source allows each
              proposal to reflect current availability, condition, workshop capacity, lead time and the specific
              requirements of the project.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://i.postimg.cc/SK9XCd4c/5e1b0bb652ee9784fb52713e69197549-LE-upscale-prime-x2.jpg"
              alt="Casa Castellan sourced architectural interior"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
      </section>


      {/* ── DOOR TO DOOR ─────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.line}`, background: C.cream, padding: "clamp(56px,8vw,96px) clamp(20px,4vw,56px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...label, fontWeight: 700, fontSize: 15, letterSpacing: ".2em", color: C.terra, margin: "0 0 18px" }}>
            Door to Door
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: 18, lineHeight: 1.75, color: C.ink, margin: "0 auto", maxWidth: 760, textAlign: "justify" }}>
            Wherever a piece originates, Casa Castellan coordinates its complete journey from the workshop,
            artist's studio or reclamation yard to the named project address. Every lot is inspected in person
            at source—from reclamation yards in Andalucía to marble ateliers on Tinos. Casa Castellan then
            coordinates professional export packing, insured freight, customs brokerage and final-mile
            delivery to project sites in Laguna Beach, Montecito, Palm Beach, Coral Gables and throughout the
            United States. Logistics are quoted separately from the material or artwork and presented clearly
            for approval. Casa Castellan remains your single point of contact throughout the shipment.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 700, fontSize: 18.5, lineHeight: 1.55, color: C.terra, margin: "16px auto 0", maxWidth: 760, textAlign: "justify" }}>
            Site unloading, crane service, inside placement and installation are included only when expressly
            stated in the proposal.
          </p>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.line}` }}>
        <img
          src="https://i.postimg.cc/V6gxvLwK/Chat-GPT-Image-Jul-24-2026-01-48-27-AM-LE-upscale-prime-x2.jpg"
          alt="Door to door delivery"
          style={{ width: "100%", height: "auto", objectFit: "contain", background: C.ink, display: "block" }}
        />
      </section>


      {/* ── COLLECTION ─────────────────────── */}
      <section id="collection" style={{ borderTop: `1px solid ${C.line}`, padding: "clamp(56px,8vw,96px) clamp(20px,4vw,56px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <h2 style={{ ...display, fontSize: "clamp(24px,3vw,32px)", margin: 0 }}>What We Source &amp; Commission</h2>
          <span style={{ ...label, fontSize: 11 }}>01 – 04</span>
        </div>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: 16,
            lineHeight: 1.75,
            color: C.soft,
            maxWidth: 780,
            margin: "0 0 clamp(32px,5vw,52px)",
            textAlign: "justify",
          }}
        >
          From reclaimed architectural materials to private commissions, fine art and historic estate pieces,
          every selection is sourced or commissioned for a specific project through Casa Castellan's European
          network and partners.
        </p>
        <div className="cc-collection">
          {collection.map((c) => (
            <div key={c.n}>
              <div style={{ position: "relative", marginBottom: 18 }}>
                <img
                  src={c.img}
                  alt={c.name}
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
                />
              </div>
              <p style={{ ...label, fontSize: 12, color: C.terra, margin: "0 0 6px" }}>{c.n} /</p>
              <h3 style={{ ...display, fontSize: 18, margin: "0 0 10px" }}>{c.name}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: C.soft, textAlign: "justify" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOURCING REGISTER ─────────────────────── */}
      <section id="sourcing" style={{ background: "#F2EBD9", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, padding: "clamp(56px,8vw,96px) clamp(20px,4vw,56px)" }}>
        <h2 style={{ ...display, fontSize: "clamp(24px,3vw,32px)", margin: "0 0 20px" }}>Origins &amp; Materials</h2>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: 16,
            lineHeight: 1.75,
            color: C.soft,
            maxWidth: 780,
            margin: "0 0 clamp(32px,5vw,52px)",
            textAlign: "justify",
          }}
        >
          Casa Castellan sources across five European countries through a personal network of reclamation
          yards, workshops and artists selected for the relevant material or craft. Locations shown represent
          principal sourcing areas; availability is confirmed individually for every project.
        </p>

        <div style={{ background: C.ink, padding: "clamp(32px,5vw,48px) clamp(28px,5vw,52px)", marginBottom: "clamp(40px,6vw,64px)", textAlign: "center" }}>
          <p style={{ ...label, fontSize: 15, letterSpacing: ".25em", color: C.limestone, margin: "0 0 22px" }}>
            Materials Index
          </p>
          <div className="cc-materials" style={{ maxWidth: 760, margin: "0 auto" }}>
            {[
              { m: "Limestone", r: "Provence · Burgundy · Vicenza" },
              { m: "Marble", r: "Carrara · Estremoz–Borba · Thassos" },
              { m: "Travertine", r: "Tivoli–Guidonia · Rapolano Terme" },
              { m: "Terracotta & Tomettes", r: "Impruneta · Salernes · Sicily" },
              { m: "Architectural Ceramics & Glazed Tile", r: "Manises · Vietri sul Mare · Lisbon" },
              { m: "Marble Carving", r: "Pietrasanta · Tinos" },
              { m: "Architectural Ironwork", r: "Andalucía · Toledo" },
              { m: "Reclaimed Oak & Timber", r: "Burgundy · Provence" },
            ].map((item) => (
              <div key={item.m}>
                <p
                  style={{
                    fontFamily: "'Quattrocento', serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    fontSize: 15.5,
                    color: C.terra,
                    margin: "0 0 4px",
                  }}
                >
                  {item.m}
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: C.limestone, margin: 0 }}>
                  {item.r}
                </p>
              </div>
            ))}
          </div>
        </div>

        <img
          src={MAP_FULL}
          alt="Casa Castellan European sourcing map — Spain, Portugal, France, Italy and Greece"
          style={{ width: "100%", height: "auto", display: "block", border: `1px solid ${C.line}`, marginBottom: "clamp(40px,6vw,64px)" }}
        />
        <div className="cc-countries">
          {countries.map((c) => (
            <div key={c.country} style={{ border: `1px solid ${C.line}` }}>
              <img
                src={c.img}
                alt={`${c.country} sourcing map`}
                style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "contain", background: C.limestone, display: "block", borderBottom: `1px solid ${C.line}` }}
              />
              <div style={{ position: "relative", borderBottom: `1px solid ${C.line}` }}>
                <MaterialsSlideshow images={c.materials} alt={`${c.country} materials`} dotColor={C.terra} />
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ ...display, fontSize: 17, margin: "0 0 14px" }}>{c.country}</h3>
                {c.regions.map((r) => (
                  <div key={r.name} style={{ padding: "10px 0", borderTop: `1px solid ${C.line}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13.5, fontWeight: 500 }}>{r.name}</span>
                      <span style={{ ...label, fontSize: 10, color: C.terra }}>{r.cities}</span>
                    </div>
                    <p style={{ margin: "5px 0 0", fontSize: 13, lineHeight: 1.55, color: C.soft, textAlign: "justify" }}>{r.mats}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────── */}
      <section id="process" style={{ background: C.ink, padding: "clamp(56px,8vw,96px) clamp(20px,4vw,56px)" }}>
        <h2 style={{ ...display, color: C.terra, fontSize: "clamp(24px,3vw,32px)", margin: "0 0 clamp(48px,7vw,80px)" }}>How It Works</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px,7vw,88px)" }}>
          {process.map((step, i) => (
            <div key={step.t} className={`cc-step-row${i % 2 === 1 ? " reverse" : ""}`}>
              <div className="cc-step-text">
                <p style={{ ...label, fontSize: 11, color: C.limestone, margin: "0 0 14px" }}>{String(i + 1).padStart(2, "0")} /</p>
                <h3 style={{ ...display, color: C.terra, fontSize: "clamp(20px,2.2vw,26px)", margin: "0 0 16px" }}>{step.t}</h3>
                <p style={{ fontFamily: "'Lora', serif", margin: 0, fontSize: 15.5, lineHeight: 1.8, color: C.limestone, maxWidth: 480, textAlign: "justify" }}>
                  {step.d}
                </p>
              </div>
              <div className="cc-step-img">
                <img
                  src={step.img}
                  alt={step.t}
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block", border: "1px solid rgba(245,241,231,.18)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING STATEMENT ─────────────────────── */}
      <section className="cc-closing-section" style={{ borderTop: `1px solid ${C.line}` }}>
        <img
          src="https://i.postimg.cc/9Xsb2Dn3/Chat-GPT-Image-Jul-25-2026-01-08-27-AM-LE-upscale-prime-x2.jpg"
          alt="Casa Castellan delivery to project site"
          className="cc-closing-photo"
        />
        <div className="cc-closing-card" style={{ textAlign: "center" }}>
          <div style={{ width: 56, height: 1, background: C.terra, margin: "0 auto 30px" }} />
          <p
            style={{
              margin: "0 auto",
              fontFamily: "'Cinzel', serif",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(17px,2vw,22px)",
              lineHeight: 1.65,
              color: C.ink,
              letterSpacing: ".03em",
            }}
          >
            Every lot is verified in person at the source before purchase — pricing typically lands 30–40% below
            US showroom equivalents, with freight and duty already included.
          </p>
          <div style={{ width: 56, height: 1, background: C.terra, margin: "30px auto 0" }} />
        </div>
      </section>

      {/* ── CONTACT ─────────────────────── */}
      <section id="contact" style={{ background: C.ink, color: C.cream, padding: "clamp(64px,9vw,112px) clamp(20px,4vw,56px)" }}>
        <h2 style={{ ...display, color: C.travertine, fontSize: "clamp(26px,3.4vw,36px)", lineHeight: 1.4, maxWidth: 620, margin: "0 0 20px" }}>
          Pricing a project or sourcing a particular material?
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: C.limestone, maxWidth: 480, margin: "0 0 32px", textAlign: "justify" }}>
          Share your specification, material schedule, or drawing set. Our sourcing team will review it and
          respond within one business day.
        </p>
        <a
          href="mailto:trade@casacastellan.com"
          className="cc-btn"
          style={{ background: C.terra, borderColor: C.terra, color: C.ink, fontWeight: 700 }}
        >
          trade@casacastellan.com
        </a>
      </section>


      {/* ── FOOTER ─────────────────────── */}
      <footer style={{ background: C.cream, borderTop: `1px solid ${C.line}` }}>
        <div
          className="cc-footer-grid"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gap: 40,
            padding: "clamp(40px,6vw,64px) clamp(20px,4vw,56px) 28px",
            borderBottom: `1px solid ${C.line}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <img src={LOGO} alt="Casa Castellan crest" style={{ width: 96, height: 96, objectFit: "contain", flexShrink: 0, display: "block" }} />
            <div>
              <div style={{ ...display, fontSize: 20 }}>Casa Castellan LLC</div>
              <div style={{ ...label, fontWeight: 700, fontSize: 10.5, color: C.soft, marginTop: 6 }}>European Art &amp; Architectural Heritage</div>
              <div style={{ marginTop: 18, fontSize: 16, fontStyle: "italic", letterSpacing: ".03em", color: C.soft, lineHeight: 1.9 }}>
                <a href="mailto:trade@casacastellan.com" style={{ color: C.soft, textDecoration: "underline" }}>trade@casacastellan.com</a>
                <br />
                <a href="https://wa.me/19497629937" target="_blank" rel="noopener noreferrer" style={{ color: C.soft, textDecoration: "underline" }}>WhatsApp +1 (949) 762-9937</a>
              </div>
            </div>
          </div>

          <div>
            <p style={{ ...label, fontWeight: 700, fontSize: 11, letterSpacing: ".25em", color: C.soft, margin: "0 0 16px" }}>
              Our Headquarters
            </p>
            <p
              style={{
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontSize: "clamp(14px,1.6vw,17px)",
                color: C.terra,
                margin: "0 0 10px",
              }}
            >
              Laguna Beach · Montecito · Palm Beach · Coral Gables
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: 15, color: C.soft, margin: 0 }}>
              With project delivery coordinated throughout the United States
            </p>
          </div>

          <div>
            <p style={{ ...label, fontWeight: 700, fontSize: 11, letterSpacing: ".25em", color: C.soft, margin: "0 0 16px" }}>
              Sourcing From
            </p>
            <p
              style={{
                fontFamily: "'Quattrocento', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".1em",
                fontSize: "clamp(14px,1.6vw,17px)",
                color: C.terra,
                margin: "0 0 10px",
              }}
            >
              Spain · France · Italy · Portugal · Greece
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: 15, color: C.soft, margin: 0 }}>
              Established reclamation yards, stone suppliers, family workshops and artists
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            padding: "20px clamp(20px,4vw,56px) clamp(24px,4vw,32px)",
            fontSize: 11.5,
            color: C.soft,
          }}
        >
          <span>© 2026 Casa Castellan LLC. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: C.soft, textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: C.soft, textDecoration: "none" }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
