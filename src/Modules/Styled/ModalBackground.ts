import styled from "styled-components";
import {BaseModalBackground} from "styled-react-modal";

const ModalBackground = styled(BaseModalBackground)`
	z-index: 110000;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 768px;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
	}
`;

export default ModalBackground;
