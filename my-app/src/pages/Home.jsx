import React from 'react'
import { Link } from 'react-router-dom';
import "./HomeStyle/homestyle.css"
function Home() {
    return (
        <main>
            <div className="flex justify-center my-8">
                <Link href="/projects">
                    <button className="btn-primary">View Todo</button>
                </Link>
            </div>

            <h2 className='text-left'>My todo list</h2>
            <div className='flex gap-10'>
                <div className="card w-96">
                    <h3>New member of the web dev team...</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
                        quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
                        pariatur molestiae, modi beatae corrupti.
                    </p>
                </div>
                <div className="card w-96">
                    <h3>New website live!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
                        quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
                        pariatur molestiae, modi beatae corrupti, assumenda distinctio
                        adipisci, cupiditate minima eum vitae? Similique dicta est facilis
                        debitis, autem temporibus quo repellat illum unde id iste veritatis
                        eveniet, aspernatur enim quas.
                    </p>
                </div>
            </div>

        </main>
    )
}

export default Home