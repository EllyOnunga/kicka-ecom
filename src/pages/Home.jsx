import React from 'react';

const Home = () => {
    return (
        <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
            <h1>Welcome to Kicka</h1>
            <p>
                Kicka is your platform for discovering and sharing amazing projects. Explore trending ideas, connect with creators, and kickstart your next adventure!
            </p>
            <section style={{ marginTop: '2rem' }}>
                <h2>Get Started</h2>
                <ul>
                    <li>Browse featured projects</li>
                    <li>Create your own project</li>
                    <li>Join the Kicka community</li>
                </ul>
            </section>
        </main>
    );
};

export default Home;