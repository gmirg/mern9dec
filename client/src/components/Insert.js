import React, { useState } from "react";

const Insert = (props) => {
    const [film, setFilm] = useState("");

    // insert
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [director, setDirector] = useState("");

    // Insertar pelicula
    const insertar = () => {
        metaInfo("POST", { titulo, genero, director }, "/");
    };

    //! Funcion dinámica [method, datos, fetch]
    const metaInfo = (method, info, endpoint) => {
        let datos = {
            method: method,
            body: JSON.stringify(info),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch(endpoint, datos)
            .then((res) => res.json(res))
            .then((res) => {
                    setFilm(res);
            });
    };

    return (
        <div id="App">
            <div id="insertarFilm">
                <h1>Videoteca</h1>
                <h2>Introduce los datos de la pelicula que quieras añadir</h2>
                <input type="text" placeholder="Título de la película" onChange={(e) => setTitulo(e.target.value)} />
                <input type="text" placeholder="Género" onChange={(e) => setGenero(e.target.value)} />
                <input type="text" placeholder="Director/a" onChange={(e) => setDirector(e.target.value)} />
                <button onClick={() => insertar()}>INSERTAR</button>
            </div>
        </div>
    );
};

export default Insert;