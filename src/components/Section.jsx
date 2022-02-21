import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, des, ltBtn, RtBtn, bcakgroundImg }) {
    return (
        <Warp bgImg={bcakgroundImg} >
            <Fade bottom>
                <IteamText>
                    <h1>{title}</h1>
                    <p>{des}</p>
                </IteamText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <BtnGrp>
                        <LeftBtn>
                            {ltBtn}
                        </LeftBtn>
                        {RtBtn &&
                            <RightBtn>
                                {RtBtn}
                            </RightBtn>
                        }
                    </BtnGrp>
                </Fade>
                <DownArw src='\images\down-arrow.svg' />
            </Buttons>

        </Warp>

    )
}
export default Section;

const Warp = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image : ${props => `url('/images/${props.bgImg}')`};
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-items : center;
`

const IteamText = styled.div`
    padding-top: 15vh ;
    text-align: center;
    & p {
        font-size : 15px ; 
        padding-top : 10px ;
    }
`
const BtnGrp = styled.div`
    display : flex;
    margin-bottom : 20px;
    @media (max-width : 768px){
        flex-direction :column;
    }
`

const LeftBtn = styled.div`
    background-color: orange;
    height : 40px ;
    width : 256px;
    color : white;
    font-weight: 600;
    display : flex;
    justify-content: center;
    align-items: center;
    border-radius : 100px ;
    opacity : .85;
    text-transform : uppercase;
    font-size : 12px;
    cursor : pointer;
    margin : 8px
`
const RightBtn = styled(LeftBtn)`
    background-color: gray;
    color : black;
    opacity : .65;
    font-weight: 600;
`

const DownArw = styled.img`
    height: 40px ;
    margin-top:20px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``