import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    console.log(props);
    const { numOfCakes, dispatch } = props;
    const mapDispatchToProps = () => {
        // return {
        //     buyCake: () => dispatch(buyCake())
        // }
        dispatch(buyCake())
    };
    return (
        <div>
             <h2>Number of cakes - {numOfCakes}</h2>
             <button onClick={mapDispatchToProps}>Buy Cake</button>
        </div>
    )
}

// class CakeContainer extends React.Component {
//     handleButton = () => {
//     //    this.props.dispatch(buyCake())
//         this.props.dispatch({type: 'BUY_CAKE'})
//     }

//     render() {
//         console.log(this.props);
//         const { numOfCakes, dispatch } = this.props;
//         return (
//             <div>
//                  <h2>Number of cakes - {numOfCakes}</h2>
//                  <button onClick={this.handleButton}>Buy Cake</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         numOfCakes: state.numOfCakes
//     }
// }; su dung cach2 o line 48

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// };

export default connect(function (state) {
    return { numOfCakes: state.cake.numOfCakes } // Khi su dung combineReducer phai su dung them state.cake.numOfCakes, normal is state.numOfCakes
})(CakeContainer)
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)