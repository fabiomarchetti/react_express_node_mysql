import React from "react";

const Home = () => {
  const post = [
    {
      id: 1,
      title:
        "Non c’è nessuno a cui piaccia il dolore in sé, che lo ricerchi e che voglia riceverlo, semplicemente perché è dolore...",
      desc: "Un esempio: un ragazzo ha avuto un mal di testa e vuole essere chiamato al medico. Il medico dice: 'No, non ci sono",
      img: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0dCVDMyVBMCUyMGRpJTIwbm90dGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title:
        "Non c’è nessuno a cui piaccia il dolore in sé, che lo ricerchi e che voglia riceverlo, semplicemente perché è dolore...",
      desc: "Un esempio: un ragazzo ha avuto un mal di testa e vuole essere chiamato al medico. Il medico dice: 'No, non ci sono",
      img: "https://images.unsplash.com/photo-1743020951770-9bc006005c4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0dCVDMyVBMCUyMGRpJTIwbm90dGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title:
        "Non c’è nessuno a cui piaccia il dolore in sé, che lo ricerchi e che voglia riceverlo, semplicemente perché è dolore...",
      desc: "Un esempio: un ragazzo ha avuto un mal di testa e vuole essere chiamato al medico. Il medico dice: 'No, non ci sono",
      img: "https://media.istockphoto.com/id/2177876016/it/foto/donna-gioiosa-che-si-gode-la-natura-in-un-prato-sereno.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mh8qU-XzWi4FE6KYdm2n75orCMHk_j_QNPH6rTWjc5c=",
    },
    {
      id: 4,
      title:
        "Non c’è nessuno a cui piaccia il dolore in sé, che lo ricerchi e che voglia riceverlo, semplicemente perché è dolore...",
      desc: "Un esempio: un ragazzo ha avuto un mal di testa e vuole essere chiamato al medico. Il medico dice: 'No, non ci sono",
      img: "https://media.istockphoto.com/id/2020614514/it/foto/poppy-field-at-sunset-in-tuscany-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=8zHqtkj9iNQFAs4E1zS1w8PtXKucyegkiDaMc227OFk=",
    },
    {
      id: 5,
      title:
        "Non c’è nessuno a cui piaccia il dolore in sé, che lo ricerchi e che voglia riceverlo, semplicemente perché è dolore...",
      desc: "Un esempio: un ragazzo ha avuto un mal di testa e vuole essere chiamato al medico. Il medico dice: 'No, non ci sono",
      img: "https://media.istockphoto.com/id/2152852883/it/foto/alpe-di-siusi-with-sassolungo-langkofel-mountain-group-in-dolomites-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=JguTPPLDaJLMTDp5ugmHP4od7rBoMF74N4dIfO4Fq3Q=",
    },
  ];
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


      <div className="m-5 p-5 w-[500px] h-[500px] bg-indigo-500 border-sky-400"> div
        <p className="w-[300px] bg-yellow-600 text-slate-500 m-4 p3 text-2xl break-keep">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis amet
          asperiores consequatur voluptate expedita. Voluptatem enim in sequi,
          odio quasi recusandae est? Iste perferendis aperiam nam accusantium quod
          earum enim.
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
