import Counter from '../components/Counter';

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <div>
          <h1>Yeimy Belen Huchim Onofre</h1>
        </div>
        <div>
          <h2>TI03SM-22</h2>
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="container mx-auto flex flex-col items-center justify-center h-screen"> 
          <img
            src="https://imgs.search.brave.com/_EOhSSr-IHzoRz_DS0TDbGk389EDXuxAtc2EJ7TI2d0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDgx/NDQzNi5qcGc"
            alt="Killjoy Valorant"
            width="400"
          />
        </div>
        <p className="container mx-auto flex flex-col items-center justify-center h-screen">Agente de Valorant: Killjoy</p>
        <br></br>
        <div className="container mx-auto flex flex-col items-center justify-center h-screen"> 
          <Counter />
        </div>
    </main>
  );
}








