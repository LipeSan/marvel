import styled from "styled-components/native";


const Image = styled.Image`
	width: ${(props:any) => props.size ? props.size+'px' : 120+'px'};
	height: ${(props:any) => props.size ? props.size+'px' : 120+'px'};
  background-color: white;
	border-radius: 100px;
  border: ${(props:any) => props.border ? props.border+'px' : 0+'px'} solid #D42026;
`;

const Wrapper = styled.View`
`;

export default {
  Image,
  Wrapper
};