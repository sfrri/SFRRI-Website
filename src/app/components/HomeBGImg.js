import { getImageProps } from 'next/image'

export default function HomeBGImg() {
    const common = { alt: 'Hinge_top_vials_on_a_vial_rack', sizes: '100vw' }
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        width: 1280,
        height: 720,
        quality: 80,
        src: '/static/images/Hinge_top_vials_on_a_vial_rack.webp',
    })
    const {
        props: { srcSet: mobile },
    } = getImageProps({
        ...common,
        width: 750,
        height: 720,
        quality: 0,
        src: '/static/images/Hinge_top_vials_on_a_vial_rack_Mobile.webp',
    })

    return (
        <picture style={{ borderRadius: '3px', }}>
            <source media="(min-width: 1024px)" srcSet={desktop} />
            <source media="(min-width: 300px)" srcSet={mobile} />
            <img 
                priority='true'
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                    borderRadius: '3px',
                }} 
            />
        </picture>
    )
}
