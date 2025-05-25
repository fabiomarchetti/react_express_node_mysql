import React from "react";

const Home = () => {
  return (
    <>
      <div className="m-5 border-2 border-red-800 grid grid-cols-2">
        <div className="m-10 p-5 border-2 border-sky-800 flex flex-col">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="m-10 border-2 border-sky-800 flex flex-col">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="m-10 border-2 border-sky-800 flex flex-col">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="m-10 border-2 border-sky-800 flex flex-col">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="m-10 border-2 border-sky-800 flex flex-col">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>

      <div className="m-5 p-5 w-[500px] h-[500px] bg-indigo-500 border-sky-400">
        {" "}
        div
        <p className="w-[300px] bg-yellow-600 text-slate-500 m-4 p3 text-2xl break-keep">
          L'opera ebbe subito uno straordinario successo e contribuì in maniera
          determinante al processo di consolidamento del dialetto toscano come
          lingua italiana. Il testo, del quale non si possiede l'autografo, fu
          infatti copiato sin dai primissimi anni della sua diffusione e fino
          all'avvento della stampa in un ampio numero di manoscritti.
          Parallelamente si diffuse la pratica della chiosa e del commento al
          testo (si calcolano circa sessanta commenti e tra le 100 000 e le 200
          000 pagine)
        </p>
      </div>

      <div class="m-5 p-5 bg-linear-to-r/increasing from-indigo-500 to-teal-400"></div>
      <div class="w-[200px] h-[200px] m-5 p-5 rounded-full bg-linear-to-t from-pink-800 via-yellow-500 to-teal-400"></div>
      <div class="w-[200px] h-[200px] m-5 p-5 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>

      {/* SVILUPPO CONTENUTO */}

      {/* <div className='m-4'>

      {post.map(post=>(
        <div className='m-5 flex flex-row justify-between' key={post.id}>
          <div className='border-2 m-5 w-[300px]'>{post.title}</div>
          <img className='rounded-full w-30 h-30 size-2' src={post.img} alt={post.title} />
          <div className='border-2 m-5 w-[300px]'>{post.desc}</div>
        </div>
      )) }

      </div> */}
    </>
  );
};

export default Home;
