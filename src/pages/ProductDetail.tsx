import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../components/Button'
import PageNotFound from '../pages/PageNotFound'
import { products, Product } from '../data/products'

interface Props {}

type ProductId = {
  id: string
}

const ProductDetail: React.FC<Props> = () => {
  const { id } = useParams<ProductId>()
  //const params = useParams() as { productId: string }

  const [product, setProduct] = useState<Product | undefined>()

  useEffect(() => {
    // when cahace changes run this again
    const prod = products.find((item) => item.id === id)
    if (prod) setProduct(prod)
    else setProduct(undefined)
    // cache the id/product
  }, [id])
  console.log(product)

  if (!product) return <PageNotFound />

  return (
    <div className='page--product-detail'>
      <div className='product-detail__section'>
        <img
          src={product.imageUrl}
          alt={product.title}
          className='product-image'
        />
      </div>

      <div className='product-detail__section'>
        <div className='product-detail__sub-section'>
          <h3 className='header'>{product.title}</h3>
          <p className='paragraph'>{product.description}</p>
        </div>
        <div className='product-detail__sub-section'>
          <p className='paragraph'>
            Price:{' '}
            <span className='paragraph--orange'>
              ${product.price.toFixed(2)}
            </span>
          </p>
        </div>
        <div className='product-detail__sub-section product-detail__sub-section--stock'>
          <p className='paragraph'>
            Availability: <span className='paragraph--success'>In stock</span>
          </p>
        </div>
        <div className='product-detail__sub-section quantity-control'>
          <div className='qty-action'>
            <FontAwesomeIcon icon={['fas', 'minus']} size='xs' color='grey' />
          </div>
          <div className='qty-action qty-action--qty'>
            <p className='paragraph'>1</p>
          </div>
          <div className='qty-action'>
            <FontAwesomeIcon icon={['fas', 'plus']} size='xs' color='grey' />
          </div>
        </div>

        <Button>Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductDetail
