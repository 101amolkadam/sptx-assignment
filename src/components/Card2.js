import React from 'react'
import './Card2.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card2 = () => {
  return (
    <div className='div5'>
        <Row className='ftstyle1 px-3 py-2'>12.5% of fee</Row>
        <Row className='ftstyle2 px-3 py-2'>Your Referral Link for xyz</Row>
        <Row className='p-2'>
            <Col className='middleRectangle px-3 py-2'>https://unityexchange.design</Col>
            <Col className='d-flex align-items-center'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
                <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                </svg>
            </Col>
        </Row>
    </div>
  )
}

export default Card2