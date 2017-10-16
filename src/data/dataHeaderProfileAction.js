export const arraySettings = (props) => [
    {
        item:'Cambiar contraseña', 
        attr: { 
            onClick: () => {
                props.handleRequestClose();
                props.history.push('/accounts/password/change/');
            }
        }
    },
    {
        item:'Cerrar sesión', 
        attr: {
            onClick: () => {alert("mal")}
        }
    },
    {
        item:'Cancelar', 
        attr: {
            onClick: () => {props.handleRequestClose()}
        }
    }
]

export const arrayUserFollowed = (props) => [
    {
        item:'Reportar usuario', 
        attr: {
            onClick: () => {alert("bn")}
        }
    },
    {
        item:'Bloquear a este usuario', 
        attr: {
            onClick: () => {alert("mal")}
        }
    },
    {
        item:'Cancelar', 
        attr: {
            onClick: () => {props.handleRequestClose()}
        }
    }
]

export const arrayUserIn = (props) => [
    {
        item:'Cambiar foto de perfil', 
        attr: {disabled: true}
    },
    {
        item:'Eliminar foto actual', 
        attr: {
            onClick: () => {alert("mal")}
        }
    },
    {
        item:'Subir foto', attr: {
            onClick: () => {alert("mal")}
        }
    },
    {
        item:'Cancelar', 
        attr: {
            onClick: () => {props.handleRequestClose()}
        }
    }
]