import { createIconsConfig, createVuestic } from 'vuestic-ui'

const vuestic = createVuestic({
    config: {
        colors: {
            variables: {
                primary: '#bd93f9',
                danger: '#ff5555',
                dark: '#282a36',
                gray: '#44475a',
                cvd_white: '#f8f8f2',
                cdv_blue: '#6272a4',
                cdv_orange: '#ffb86c',
                cdv_yellow: '#f1fa8c',
                cdv_green: '#50fa7b',
                cvd_blue_ocean: '#8be9fd',
                cvd_purple: '#bd93f9',
                cvd_pink: '#ff79c6'
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
