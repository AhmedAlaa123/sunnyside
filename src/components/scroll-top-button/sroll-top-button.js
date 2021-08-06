import React,{Component} from 'react';
import './scroll-top-button.css'
class ScrollTopButton extends Component{

    state={
        display:'none'
    }
    handellClick=(e)=>{
        // scrolling to the top of the page
        window.scrollTo({
            // top that will to be
            top:0,
            // scroll in smooth behavior
            behavior:'smooth'
        })
        this.setState({display:'none'})
    }
    componentDidMount=()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>400)
                this.setState({display:'block'})
            else
            this.setState({display:'none'})

        })
        
    }
    render(){
        // console.log( this.state)
        console.log(this.props)

        return(
            <div className='scroll-top' onClick={this.handellClick} style={{display:this.state.display}}>
                <i className=' fa fa-chevron-up fa-2x'></i>
            </div>
        )
    }
}
export default  ScrollTopButton;