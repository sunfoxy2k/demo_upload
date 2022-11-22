import FooterStyle from './footer_note.module.css'

const BrandName = 'Twitter Tracker'

const FooterNote = ({ className }) => {
    return (
        <footer className={`${FooterStyle.container} ${className}`} >
            {`Copyright © ${BrandName} ${new Date().getFullYear()}  - Develop by `} 
            <a href="https://www.upwork.com/freelancers/~018e43107921a6a54a" className={FooterStyle.author}>Jason Phan</a> 
            <a href='mailto:sunfoxy@gmail.com'> - sunfoxy2k@gmail.com</a>
        </footer>
    )
}

export default FooterNote