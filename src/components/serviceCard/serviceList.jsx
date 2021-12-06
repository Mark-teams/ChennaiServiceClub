import {withRouter} from 'react-router-dom';
function ServiceList(props){
    window.alert(props)
    return(
        <div><h1> Service List {props.match.params.id}</h1></div>
    )
}

export default withRouter(ServiceList);