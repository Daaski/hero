import { Roboto} from 'next/font/google';

import 'scss/utils.scss';

export const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-roboto',
});
