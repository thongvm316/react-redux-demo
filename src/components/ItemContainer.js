import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    console.log(props);
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStatetoProps = (state, props) => {
    console.log(props); // cach dat ten thoi, props hay ownProps deu ok
    const itemState = props.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams
    
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunciton = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    
    return {
        buyItem: dispatchFunciton
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(ItemContainer) 
