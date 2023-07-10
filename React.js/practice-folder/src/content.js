const content = () => {
    const handleNameChange = () =>{
        const name = ['Attack on Titan', 'Dragon Ball','Naruto', 'One Punch man'];
        const int = Math.floor(Math.random() * 3);
        return name[int]
    }

    const handleclick = () => { //if you want to pass parametes then 'const handleClick = (name) =>{}
        console.log('you clicked')
    }

    return (
        <main>
            <p>
                Love this anime {handleNameChange}
            </p>
            <buttom onClick={handleclick}>Click it</buttom>
        </main>
    )
}

export default content