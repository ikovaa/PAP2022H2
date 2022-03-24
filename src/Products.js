import React from 'react';


function Products() {
    return (
    <>
        <main>
            <div>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}


const products = [
    {
        id: 1,
        name: 'Air Jordan 1',
        href: '#',
        price: 'x€',
        imageSrc: 'https://cdn-images.farfetch-contents.com/15/53/12/82/15531282_29624522_600.jpg',
        imageAlt: 'Air Jordan 1 Low, Mid, High',
    },
    {
        id: 2,
        name: 'Air Jordan 4',
        href: '#',
        price: 'x€',
        imageSrc: 'https://www.manelsanchez.pt/uploads/media/images/air-jordan-4-retro-metallic-red-20.jpg',
        imageAlt: 'Air Jordan 4 Low, Mid, High',
    },
    {
        id: 3,
        name: 'Yeezy 350',
        href: '#',
        price: 'x€',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0255/9429/8467/products/adidas-originals-yeezy-boost-350-v2-core-blackred_1_1000x1000.jpg?v=1627983720',
        imageAlt: 'Yeezy 350',
    },
    {
        id: 4,
        name: 'Yeezy V2',
        href: '#',
        price: 'x€',
        imageSrc: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321670',
        imageAlt: 'Yeezy V2',
    },
    {
        id: 5,
        name: 'Yeezy Slides',
        href: '#',
        price: 'x€',
        imageSrc: 'https://images.stockx.com/images/Yeezy-Slide-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1608522495',
        imageAlt: 'Yeezy Slides',
    },
    {
        id: 6,
        name: 'Yeezy Foam',
        href: '#',
        price: 'x€',
        imageSrc: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Ararat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1609432715',
        imageAlt: 'Yeezy Foam',
    },
    {
        id: 7,
        name: 'Air Force 1',
        href: '#',
        price: 'x€',
        imageSrc: 'https://cutewallpaper.org/24/air-force-png/air-force-1-png-nike-air-force-1-png-free-transparent-png-download--pngkey.png',
        imageAlt: 'Air Force 1',
    },
    {
        id: 8,
        name: 'Tech Fleece',
        href: '#',
        price: 'x€',
        imageSrc: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202012/10/00199440826099____8__1200x1200.jpg',
        imageAlt: 'Tech Fleece',
    },
]
  

export default Products;