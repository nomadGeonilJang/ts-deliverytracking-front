import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

const ModalBackground = styled(BaseModalBackground)`
	z-index: 110000;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
`;

export default ModalBackground;
