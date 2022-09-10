import React from 'react'

const Meni = [
  {
    id: 1,
    name: 'Kroasan jagoda',
    description: 'Krem od vanile, sveže jagode ili maline, šećer u prahu.',
    price: 200,
    img: 'https://imageproxy.wolt.com/menu/menu-images/627cd5059e99628f26bb1650/9d07caa8-e721-11ec-9a56-72886bebdc65_l_artisan_pekara_19.jpeg?w=300'
  },
  {
    id: 2,
    name: 'Kroasan pistać',
    description: 'Krem od pistaća, mrvljani pistaći.',
    price: 240,
    img: 'https://imageproxy.wolt.com/menu/menu-images/627cd5059e99628f26bb1650/d74f6716-e721-11ec-a4b4-c24d31d95acb_l_artisan_pekara_20.jpeg?w=300'
  },
  {
    id: 3,
    name: 'Croissant tiramisu',
    price: 260,
    img: 'https://imageproxy.wolt.com/menu/menu-images/627cd5059e99628f26bb1650/d45e1dc4-e8be-11ec-bad6-36dbfedde722_l_artisan_pekara_47.jpeg?w=300'
  },

]

const Menu = () => {
  return (
    <section className='menuContainer'>
      <h1 className='menuTitle'>Meni</h1>
      <div className='menu'>
        {Meni.map((item) => {
          const { id, name, description, price, img } = item
          return (
            <article key={id} className='menuItem'>
              <div className='menuDesc'>
              <h3 className='menuItemTitle'>{name}</h3>
              <p className='menuItemDescription'>{description}</p>
              <p className='menuItemPrice'>{price} din</p>
              </div>
              <img src={img} alt={name} className='menuItemImg' />
            </article>
          )
        }
      
        )}
      </div>
    </section>
  )
}

export default Menu