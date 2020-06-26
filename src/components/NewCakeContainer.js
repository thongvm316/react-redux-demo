import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    console.log(number);
    console.log(props);
    const { numOfCakes, dispatch } = props;
    const mapDispatchToProps = (number) => {
        dispatch(buyCake(number))
    };
    return (
        <div>
             <h2>Number of cakes - {numOfCakes}</h2>
             <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
             {/* <button onClick={() => mapDispatchToProps(number)}>Buy {number} Cake</button> */}
             <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default connect(function (state) {
    return { numOfCakes: state.cake.numOfCakes } 
})(NewCakeContainer)
