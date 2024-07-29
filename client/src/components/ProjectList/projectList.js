import React from 'react';
import './projectList.css';

export const ProjectList = () => {
    return (
        <section className="projectList dflex  vflexcenter hflexcenter">
            <ul className="dflex fcolumn">
                <li className="dflex spaceb">
                    <a href='#'>Título do Projeto</a>
                    <div className="spaceb">
                        <button>Adicionar</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </div>
                </li>
            </ul>

        </section>

    );

}
