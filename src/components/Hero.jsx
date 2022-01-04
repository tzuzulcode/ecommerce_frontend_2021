import React from 'react'

export default function Hero() {
    return (
        <section className="shadow-md">
            <div className='grid lg:grid-cols-2 py-20 max-w-7xl mx-auto'>
                <div className="hero-content">
                    <h1 className="hero-title">Steve wants reflections, so let's give him reflections. And I will hypnotize that just a little bit.</h1>
                    <p className="hero-description">Follow the lay of the land. It's most important. This is your world, whatever makes you happy you can put in it. Go crazy. You have to allow the paint to break to make it beautiful. And just raise cain. See how easy it is to create a little tree right in your world.</p>
                </div>
                <div className="hero-image-container" >
                    {/* <div className="cropper">
                        <img className="hero-image" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                    </div> */}
                    <img className="hero-image" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                </div>
            </div>
        </section>
    )
}
