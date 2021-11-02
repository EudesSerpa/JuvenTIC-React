import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as Close } from '../../assets/menuClose.svg';

export default function Modal({
    children,
    showModal,
    setShowModal,
    title = 'Información',
    showOverlay = true,
    showHeader = true,
    showFooter = true,
    padding = '40px',
}) {

    const modalRef = useRef(null);

    const handleClose = (e) => {
        if(modalRef.current === e.target)
            setShowModal(false);
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal)
            setShowModal(false);

    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);

        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            { showModal &&
                <Overlay ref={ modalRef } onClick={ handleClose } showOverlay={ showOverlay }>
                    <ModalWrapper padding={ padding }>
                        { showHeader &&
                            <ModalHeader>
                                <h3>{ title }</h3>
                            </ModalHeader>
                        }

                        <CloseButton onClick={() => setShowModal(false)} aria-label="Close modal" >
                            <Close />
                        </CloseButton>

                        <Content>
                            { children }
                        </Content>

                        { showFooter &&
                            <Footer>
                                <Button onClick={() => setShowModal(false)}>Aceptar</Button>
                            </Footer>
                        }
                    </ModalWrapper>
                </Overlay>
            }
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: ${ props => props.showOverlay ? 'rgba(0, 0, 0, .5)' : 'transparent' };
`;

const ModalWrapper = styled.div`
    position: relative;
    width: 500px;
    min-height: 100px;
    padding: ${ props => props.padding };
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    z-index: 100;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        color: var(--vinotinto);
        font-size: 20px;
        font-weight: 500;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all .3s ease;
    border-radius: 6px;

    &:hover {
        background-color: rgba(0, 0, 0, .3);
    }

    svg {
        width: 50%;
        height: 50%;
        fill: var(--orange);
        pointer-events: none;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    padding: 15px 0 0;
    border-top: 1px solid #E8E8E8;
`;

const Button = styled.button`
    min-width: 50px;
    height: 40px;
    padding: 4px 8px;
    color: #fff;
    background-color: var(--orange-dark);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
`;