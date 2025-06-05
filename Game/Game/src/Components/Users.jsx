import { Component } from "react";
import axios from 'axios';

class Users extends Component {
    state = { 
        users : []
     } 
     async componentDidMount(){
        const response = await axios.get('https://reqres.in/api/users');
        this.setState({ users: [response.data.data] });
        

     }
    render() { 
        return (
        <>
        <button className="btn btn-lg btn-primary" onClick={this.handelCreate}>Create</button>
        <div className="row">
            {
                this.state.users.map((user)=>{
                    return(
                        <div className="col-4 text-center p-5">
                            <img src={user.avatar} alt="" style={{borderRadius: '50%', width: '100px'}}/>
                            <h4>{user.first_name} {user.last_name}</h4>
                            <h5>{user.email}</h5>
                            <div className="row">
                                <div className="col-6">
                                    <button className="bt btn-info btn-sm" onClick={()=>this.handelUpdate(user)}>Update</button>
                                </div>
                                <div className="col-6">
                                    <button className="bt btn-danger btn-sm" onClick={()=>this.hadelDelete(user)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>);
    }
    handelCreate = ()=> {
console.log('create')
    }
    handelUpdate = (user)=> {
        console.log(user)
    }
    hadelDelete = (user)=> {
        console.log(user)
    }
}
 
export default Users;