export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }
        .hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(20,10,5,0.3) 0%, rgba(20,10,5,0.68) 100%);
        }
        .content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }
        h1 {
          font-family: 'Lora', serif;
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 700;
          color: #FAFAF4;
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin-bottom: 48px;
        }
        .buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn {
          padding: 13px 36px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }
        .btn-primary {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,235,200,0.55);
          color: #FAFAF4;
        }
        .btn-primary:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,235,200,0.85);
        }
        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(255,235,200,0.25);
          color: rgba(255,235,200,0.65);
        }
        .btn-secondary:hover {
          border-color: rgba(255,235,200,0.5);
          color: rgba(255,235,200,0.9);
        }
      `}</style>
      <div className="hero">
        <img src="/hero.png" alt="L'Aubergine" />
        <div className="overlay" />
        <div className="content">
          <h1>L'Aubergine</h1>
          <div className="buttons">
            <a className="btn btn-primary" href="/resilience">Résilience 2060</a>
            <a className="btn btn-secondary" href="https://petroleum.laubergine.org">Petroleum</a>
          </div>
        </div>
      </div>
    </>
  )
}
