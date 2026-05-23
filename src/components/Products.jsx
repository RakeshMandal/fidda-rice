function Products() {

  const products = [
    {
      id: 1,
      name: "Fidda Premium Rice (IR64)",
      image:
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Long Grain Rice",
        "Clean & Sorted",
        "Premium Quality",
        "26 Kg Packaging",
      ],
    },

    {
      id: 2,
      name: "Fidda Golden Basmati Rice",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Extra Long Grain",
        "Rich Aroma",
        "Premium Export Quality",
        "25 Kg Packaging",
      ],
    },

    {
      id: 3,
      name: "Fidda Daily Choice Rice",
      image:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Daily Use Rice",
        "Soft Texture",
        "Clean Processing",
        "Affordable Premium Quality",
      ],
    },

    {
      id: 4,
      name: "Fidda Supreme Rice",
      image:
        "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Superior Grain Quality",
        "Natural Freshness",
        "Rich Taste & Aroma",
        "Premium Packaging",
      ],
    },
  ]

  return (
    <section id="products" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-800">
            Our Products
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Premium quality rice crafted for excellence.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:scale-105 transition duration-300"
            >

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              {/* Product Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold text-green-800 mb-6">
                  {product.name}
                </h3>

                <ul className="space-y-3 text-lg text-gray-700">

                  {product.features.map((feature, index) => (
                    <li key={index}>
                      • {feature}
                    </li>
                  ))}

                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Products