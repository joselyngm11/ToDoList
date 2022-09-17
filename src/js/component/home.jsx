import React, { useState , useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = (props)  => {

	const [inputValue, setInputValue] = useState("")
	const [cards, setCards] = useState([])

	const handleAdd = (e) => {
		let newArray = [...cards]
		//if(inputValue.length > 3){
		if (e.key === 'Enter'){
			newArray.push(inputValue)
			setCards(newArray)
			setInputValue("")
		}
			
		//}else{
			//alert("NO SEAS VAGO ESCRIBE MAS")
		//}
		/*setCards([...cards, inputValue])*/
	}

	// const _handleKeyDown = (e) => {
	// 	if (e.key === 'Enter') {
	// 	  handleAdd
	// 	}
	// }
	
  	return (
		<div className="row d-flex justify-content-center">
			<div className="col">
				<input value={inputValue} 
				onChange={(event) =>setInputValue(event.target.value)} 
				type="text"
				onKeyDown={handleAdd}></input>
				{/* <button onClick={handleAdd}> anadir </button> */}
			</div>
			<ListGroup className="col-12">
				{
					cards.map((card,index)=>{
						return(
							// <Card key={index} style={{ width: '18rem' }}>
							// 	<Card.Img variant="top" src="https://picsum.photos/200/300" />
							// 	<Card.Body>
							// 		<Card.Title>{card}</Card.Title>
							// 		<Card.Text>
							// 		Some quick example text to build on the card title and make up the
							// 		bulk of the card's content.
							// 		</Card.Text>
							// 		<Button variant="primary">Go somewhere</Button>
							// 	</Card.Body>
							// </Card>
							<ListGroup.Item key={index}>{card}</ListGroup.Item>
						)
					})
					
				}
			</ListGroup>
		</div>
  	);
}

export default Home;
