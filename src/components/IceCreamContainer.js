import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    console.log(props);
    const { numOfIceCreams, dispatch } = props;
    const mapDispatchToProps = () => { 
        dispatch(buyIceCream())
    };
    return (
        <div>
             <h2>Number of icecreams - {numOfIceCreams}</h2>
             <button onClick={mapDispatchToProps}>Buy IceCream</button>
        </div>
    )
}

export default connect(function (state) {
    return { numOfIceCreams: state.iceCream.numOfIceCreams }
})(IceCreamContainer)
