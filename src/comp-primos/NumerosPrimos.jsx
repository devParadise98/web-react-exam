import { useEffect, useState } from 'react';

const isPrimo = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const siguientePrimo = (desde) => {
  let n = desde + 1;
  while (!isPrimo(n)) n++;
  return n;
};

const NumerosPrimos = ({ autoAvance = false }) => {
  const [primos, setPrimos] = useState([2]);
  const [indice, setIndice] = useState(0);
  const [enPausa, setEnPausa] = useState(false);

  const avanzar = () => {
    setIndice((prev) => {
      const siguiente = prev + 1;
      if (siguiente >= primos.length) {
        setPrimos((actual) => [...actual, siguientePrimo(actual[actual.length - 1])]);
      }
      return siguiente;
    });
  };

  const retroceder = () => {
    setIndice((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    if (!autoAvance || enPausa) return;
    const id = setInterval(() => {
      avanzar();
    }, 1000);
    return () => clearInterval(id);
  }, [autoAvance, enPausa]);

  return (
    <main className="container mt-5">
      <h4 className="mb-3">Números Primos {autoAvance ? '(Avance Automático)' : ''}</h4>
      <div className="card text-center p-4 shadow" style={{ maxWidth: 320 }}>
        <p className="display-3 fw-bold mb-1">{primos[indice]}</p>
        <p className="text-muted mb-0">{primos.length}</p>
      </div>
      <div className="mt-3">
        <button className="btn btn-secondary me-2" onClick={retroceder}>Retroceder</button>
        <button className="btn btn-primary me-2" onClick={avanzar}>Avanzar</button>
        {autoAvance && (
          enPausa
            ? <button className="btn btn-success" onClick={() => setEnPausa(false)}>Continuar</button>
            : <button className="btn btn-warning" onClick={() => setEnPausa(true)}>Pausar</button>
        )}
      </div>
    </main>
  );
};

export default NumerosPrimos;
