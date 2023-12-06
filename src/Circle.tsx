import styled from 'styled-components';

interface CircleProps {
	bgColor: string;
}

const Container = styled.div<CircleProps>`
	width: 200px;
	height: 200px;
	background-color: ${(props) => props.bgColor};
	border-radius: 50%;
`;

function Circle({ bgColor }:CircleProps) {
	return (
		<Container bgColor={bgColor} />
	)
}

interface PlayerShape {
	name: string;
	age: number;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name: 'gil-dong', age: 15});
// sayHello({name: 'gil-dong', age: '12'});	// Type error

export default Circle;