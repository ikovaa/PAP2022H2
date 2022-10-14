import React from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../products';


class Products extends React.Component {

  render ()   {
    return (
      <main>
          <div>
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Products</h2>
                  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {ProductsData.map((product) => (
                      <Link
                      className="group"
                      key={product.id}
                      to={{
                        pathname: `productView/${product.id}`,
                        state: { p: product }
                      }}>
                          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                              <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover group-hover:opacity-75"
                              />
                          </div>
                          <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                      </Link>
                  ))}
                  </div>
              </div>
          </div>
      </main>
    )
  }
}


export default Products;