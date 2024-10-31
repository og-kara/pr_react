import s from './Accordeon.module.css'
import { AccordeonItem } from './accordeonItem/AccordeonItem'

export function Accordeon() {
    return (
        <div className={s.accordeon}>
            <AccordeonItem title='Title №1' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='Title №2' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='Title №3' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
            <AccordeonItem title='Title №4' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam atque porro reprehenderit repudiandae tempora modi doloremque nesciunt perspiciatis impedit.' />
        </div>
    )

}