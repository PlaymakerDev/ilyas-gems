import React from 'react'

interface Props {

}

const ContentSection: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div className='p-10'>
      <section>
        <h3 className='mb-5'>Loose Cubic Zirconia stones, All kinds of lab grown gemstones (like CVD, HPHT, Pulled Czochralski, Hydrothermal, Moissanite, Flame Fusion, Opals, Yag, Nano, Nano Sital, Glass), and Natural Gemstones (Precious and Semi-Precious gemstones) available here</h3>
        <p className='mb-5'>Gems n Gems was established in Bangkok,Thailand in 2009 as a Semi-precious stones supplier. But as we got deeper to know the industry more, we discovered so many more new gemstones in its Natural form. Then along the way we discovered the lab grown gems that were grown to look exactly like its Natural counterparts. It was all so fascinating that we decided to offer all kinds of gemstones to our clients so that they know what all is available and can make the best choice for the gemstones that they need.</p>
        <p className='mb-5'>Due to our ethical and fair practices, we have made great friends with the factories in this industry that they offer us their gemstones at very competitive prices. We are only traders and not manufacturers of gemstones but we do have very skilled experienced gem cutters who can cut custom shapes and sizes if need be.</p>
        <p className='mb-5'>We are only an online store so we don’t have much overhead and operating costs so we are able to offer all kinds of gemstones at very competitove prices.</p>
        <p className='mb-5'>If you want something that is not listed on our website then please send us an e-mail with your requirements. We will try our best to supply you that gemstone. In addition to gemstones for sale, now we can also make jewellery in silver and 14K and 18K gold. For further information or feedback, please feel free to contact us at info@gemsngems.com. We shall respond to your email within 24 hours.</p>
        <p className='mb-5'>We hope that with our website, this is one place where you can shop for all kinds of gemstones. If you have some special requirements, we also offer custom-cut services. So if you need any specific cut/shape, please send us an e-mail with pictures.</p>
      </section>
      <section>
        <h3 className='mb-5'>Now we also offer:</h3>
        <ul className='list-decimal list-inside space-y-2'>
          <li><strong>Custom-cut gem stones</strong> - If you need anything that is not listed on the website, please e-mail us.</li>
          <li><strong>Jewelry</strong> - We can make jewelry in 925 Silver, White Gold, 14K and 18K Gold.</li>
          <li><strong>Wholesale Discounts</strong> - Please email us with your requirements to qualify for discounts.</li>
          <li><strong>Individual pieces</strong> - If you do not want to purchase the whole lot, please e-mail us.</li>
          <li><strong>Quick reply</strong> - Please WhatsApp us for quick replies.</li>
          <li><strong>Worldwide shipping.</strong></li>
        </ul>
      </section>
    </div>
  )
}

export default React.memo<Props>(ContentSection)
