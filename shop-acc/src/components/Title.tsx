import '../styles/Title.css'
const Title: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='box-title'>
            <div className="title">
                {title}
            </div>
            <div className='indicator'>

            </div>
        </div>



    )
}
export default Title;