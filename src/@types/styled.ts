import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface Default extends ThemeType {}
}

//No caso de as props do theme não estarem a funcionar no arquivo global cria-se este arquivo acima 