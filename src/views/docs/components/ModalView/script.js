import View from '@components/View';
import { IButton, IModal } from 'inkline';

export default {
    name: 'ModalView',
    extends: View,
    components: {
        IButton,
        IModal,
    },
    data () {
        return {
            showModal: false,
            showModalSm: false,
            showModalMd: false,
            showModalLg: false,
            showModalPrimary: false,
            showModalSecondary: false,
            showModalLight: false,
            showModalDark: false,
            showModalSuccess: false,
            showModalWarning: false,
            showModalDanger: false,
            showModalInfo: false
        };
    }
};
