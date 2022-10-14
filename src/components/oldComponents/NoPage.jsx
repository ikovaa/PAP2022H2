import React from 'react';
import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <>
            <div className="App text-center h-screen">
                <h1>Pagina nao encontrada</h1>
                <Link to='/' >Pagina Inicial</Link>
            </div>
        </>
    )
}