import './styles.scss'

const InfoCard = ({ icon: Icon, title, value }) => {
  return (
    <div className='in_co_info-card'>
      <Icon size={24} />
      <div>
        <p title={title} className='title'>
          {title}
        </p>
        <p title='value' className='value'>
          {value}
        </p>
      </div>
    </div>
  )
}

export default InfoCard
