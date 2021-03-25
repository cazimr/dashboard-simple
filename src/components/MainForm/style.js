import styled from "styled-components";

export const Form = styled.form`
	width: 100%;
	border: 1px solid black;
	margin-top: 2em;
`;

export const TitleContainer = styled.div`
	width: 100%;
	border-bottom: 1px solid black;
	height: fit-content;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;
export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: 1;
	padding: 1em 1em 0 1em;
`;
export const Input = styled.input`
	width: 100%;
	margin-bottom: 1.5em;
	border: 1px solid black;
`;
