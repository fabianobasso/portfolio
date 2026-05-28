import { createIconsConfig, createVuestic } from 'vuestic-ui'

const vuestic = createVuestic({
    config: {
        colors: {
            variables: {
                primary: '#518167',
                danger: '#ff5555',
                dark: '#282a36',
                gray: '#44475a'
            }
        },
        icons: createIconsConfig({
            aliases: [
                {
                    name: 'deletar',
                    color: '#ff5555',
                    to: 'delete'
                },
                {
                    name: 'editar',
                    color: '#85b7d5',
                    to: 'edit_note'
                },
                {
                    name: 'relatorio',
                    color: '#85b7d5',
                    to: 'print'
                },
                {
                    name: 'visualizar',
                    color: '#85b7d5',
                    to: 'visibility'
                },
                {
                    name: 'enviar-email',
                    color: '#ffb86c',
                    to: 'forward_to_inbox'
                }
            ]
        })
    }
})

export default vuestic
