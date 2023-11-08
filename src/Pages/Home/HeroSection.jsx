export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Olá, eu sou a Ivy!</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Product </span> <br />
            Manager
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Iste sapiente repellat possimus alias temporibus.
          </p>
        </div>
        <button className="btn btn-primary">Entre em contato</button>
      </div>
      <div className="hero--section--img">
        <img src="/img/ivy_hero_img.png" alt="personal photo" />
      </div>
    </section>
  );
}
