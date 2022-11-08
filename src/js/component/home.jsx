import React, { useState , useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';


const Home = (props)  => {

	const [inputValue, setInputValue] = useState("")
	const [tasks, setTasks] = useState([])

	const handleAdd = (e) => {
		let newArray = [...tasks]
		if (e.key === 'Enter'){
			newArray.push(inputValue)
			setTasks(newArray)
			setInputValue("")
		}
	}

	const handleDelete = (currentIndex) => {
		let newTasks = tasks.filter((task, index)=> index!=currentIndex)
		setTasks(newTasks)
		
	}

	
  	return (
		<InputGroup className="container justify-content-center">
			<div className="titleBox">
				<h1 className="title" >To Dos</h1>
			</div>
			<div className="col-12 toDo">
				<Form.Control
				className="inputBoxToDo"
				placeholder="What needs to be done?"
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
				value={inputValue} 
				onChange={(event) =>setInputValue(event.target.value)} 
				type="text"
				onKeyDown={handleAdd}/>
			</div>
			<div className="col-12">
				<ListGroup className="">
					{
						tasks.map((task,index)=>{
							return(
								<ListGroup.Item key={index} 
								className="d-flex justify-content-between align-items-start inputBoxToDo">
									<div className="ms-2 me-auto taskElement">
										{task}
        							</div>
									<div onClick={(e) => handleDelete(index)}>
										<i className="far fa-trash-alt deleteButton"></i>
									</div>
								</ListGroup.Item>
							)
						})
						
					}
				</ListGroup>
			</div>
			
      	</InputGroup>
  	);
}

export default Home;
