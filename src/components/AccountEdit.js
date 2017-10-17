import React from 'react';

const AccountEditContainer = (props) => (
    <article>
        <div className="divProfileAcc">
            <div>Imagen perfil</div>
            <div>
                <div>Nombre usuario</div>
                <div>enlace editar</div>
            </div>
        </div>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
            </div>
            <div>
                <label>Nombre de usuario</label>
                <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
            </div>
            <div>
                <label>Sitio web</label>
                <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
            </div>
            <div>
                <label>Biografía</label>
                <textarea></textarea>
            </div>
            <div>
                <label>Correo electrónico</label>
                <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
            </div>
            <div>
                <label>Número de teléfono</label>
                <input type="text" name="txtEmail" placeholder="Nombre de usuario" />
            </div>
            <div>
                <label>Sexo</label>
                <select></select>
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    </article>
)

export default AccountEditContainer;