import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title='Model - S'
                des='Order Now'
                bcakgroundImg='model-s.jpg'
                ltBtn='custom order'
                RtBtn='new arrivals'
            />
            <Section
                title='Model - X'
                des='Order Now'
                bcakgroundImg='model-x.jpg'
                ltBtn='custom order'
                RtBtn='Take A look'
            />
            <Section
                title='Model - Y'
                des='Order Now'
                bcakgroundImg='model-y.jpg'
                ltBtn='custom order'
                RtBtn='new arrivals'
            />
            <Section
                title='Model - 3'
                des='Order Now'
                bcakgroundImg='model-3.jpg'
                ltBtn='custom order'
                RtBtn='More Details'
            />
            <Section
                title='Lowest Cost Solar Panel'
                des='Order Now'
                bcakgroundImg='solar-panel.jpg'
                ltBtn='custom order'
                RtBtn='More Details'
            />
            <Section
                title='Solar For New Roof'
                des='Order Now'
                bcakgroundImg='solar-roof.jpg'
                ltBtn='custom order'
                RtBtn='More Details'
            />
            <Section
                title='Accessories'
                des=''
                bcakgroundImg='accessories.jpg'
                ltBtn='shop now'
            />
        </Container>
    )
}
export default Home;

const Container = styled.div`
    height : 100vh;
    
`
