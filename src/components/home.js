import ImageHero from '../olena-bohovyk-Ft_Wn-K5YH8-unsplash.jpg'

export default function Home () {
    return (
        <>
            {/* hero section */}
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60">
                    <img src={ImageHero} alt='pic' className='opacity-50' />
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-sans text-white
                        max-sm:text-[40px]">A world that makes an unforgettable astonishment...</h1>
                    </div>
                </div>
            </div>
        </>
    )
}