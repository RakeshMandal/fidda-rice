function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-green-950 via-green-800 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div>
          <p className="uppercase tracking-[5px] text-yellow-400 mb-4 font-semibold">
            Premium Quality Rice
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            FIDDA
            <span className="block text-yellow-400">Premium Rice</span>
          </h1>

          <p className="text-2xl italic mt-6 text-gray-200">
            “Har Dana Quality Ka Wada”
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-200 max-w-xl">
            Premium quality rice crafted with purity, consistency, and trust.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop"
            alt="Rice"
            className="rounded-3xl shadow-2xl h-[600px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
