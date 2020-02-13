import React, { Component } from 'react';
import Map from '../../components/MapComponent';

import './styles.css';

import logo from '../../assets/tree.png';

export default function Index() {

    return (
        <>
            <div className="work-bar">
                <a href="/">
                    <img src={logo} style={{height: '50px'}} className="logo" alt="B3-SIMULATOR" />
                </a>
                {/* <input placeholder="Busque um endereço" className="search-input"></input> */}
            </div>
            <div className="container">
                <Map />
            </div>
        </>
    )
}