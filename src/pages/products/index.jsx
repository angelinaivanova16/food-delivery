import './products.css'
import Card from '../../components/elements/card';

function Products () {
  return (
    <main className="main">
      <div className='container'>
        <header className='header'>
          <h1 className='header-title'>наша продукция</h1>
          <div className="header-bascket">
            <div className='header-bascket-text'>
              <p>3 товара</p>
              <p>на сумму 3 500 ₽</p>
            </div>
            <div className='header-bascket-image'></div>
          </div>
        </header>

        <div className='products-list'>
          <Card title="Устрицы по рокфеллеровски" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" weight="500"/>
          <Card title="Свиные ребрышки на гриле с зеленью" description="Не следует, однако забывать, что реализация намеченных плановых" price="1 600" weight="750"/>
          <Card title="Креветки по-королевски в лимонном соке" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу" price="1 820" weight="350"/>
          <Card title="Устрицы по рокфеллеровски" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" weight="500"/>
          <Card title="Устрицы по рокфеллеровски" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" weight="500"/>
          <Card title="Свиные ребрышки на гриле с зеленью" description="Не следует, однако забывать, что реализация намеченных плановых" price="1 600" weight="750"/>
          <Card title="Креветки по-королевски в лимонном соке" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу" price="1 820" weight="350"/>
          <Card title="Устрицы по рокфеллеровски" description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" weight="500"/>
        </div>
      </div>
    </main>
  )
}

export default Products;