import styled from "styled-components";

export const Container = styled.div`
	@media screen and (max-width: 768px) {
		width: 684px;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
	}
`;
export const List = styled.ul`
	& > li:first-child .card:first-child {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	& > li:last-child .card:last-child {
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	
	& > li:last-child .card:last-child.remove {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export const Item = styled.li`
	@media screen and (max-width: 768px) {
		width: 684px;
	}

	@media screen and (max-width: 360px) {
		width: 360px;
	}
`;
