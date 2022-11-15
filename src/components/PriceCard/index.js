import React from 'react'

export default function PriceCard({ plan, index }) {
  const { color, title = 'X meses', price = 'R$99,99', is_per_mouth = true, subtitle = 'ou R$280,00 à vista', list = [] } = plan
  const [colors, setColors] = React.useState({ font: '', bg: '' })

  React.useEffect(() => {
    if (color === 'yellow') {
      setColors({ font: 'text-[#FFC700]', bg: 'bg-yellow_lines hover:shadow-[#FFC700aa] shadow-2xl duration-200' })
    }
    if (color === 'green') {
      setColors({ font: 'text-[#34A853]', bg: 'bg-green_lines hover:shadow-[#34A853aa] shadow-2xl duration-200' })
    }
    if (color === 'blue') {
      setColors({ font: 'text-[#00C0FF]', bg: 'bg-blue_lines hover:shadow-[#00C0FFaa] shadow-2xl duration-200' })
    }
  }, [plan])

  return (
    <div className={`justify-around h-[750px] w-[380px]  ${colors?.bg} border-[#fff] ${index % 2 == 0 && 'border-opacity-40'} border-[2px] rounded-2xl flex flex-col items-center bg-cover`}>
      <div className='flex flex-col items-center leading-tight'>
        <span className={`text-[26px] font-bold uppercase ${colors?.font}`}>
          {title}
        </span>
        <span className='font-bold text-[65px] relative'>
          {price}
          <p className='text-white font-normal absolute -right-[40px] bottom-5 opacity-60 text-[15px]'>{is_per_mouth && '/mês'}</p>
        </span>
        <span className='text-white opacity-60 text-[20px]'>
          {subtitle}
        </span>
      </div>
      <div className='flex flex-col'>
        {list.map(topic =>
          <div className='flex items-center'>

          </div>
        )}
      </div>
    </div>
  )
}
