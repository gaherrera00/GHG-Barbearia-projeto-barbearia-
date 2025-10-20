'use client';

import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="/logo.png" alt="logo" height="40" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/historia">História</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/agenda">Agenda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
