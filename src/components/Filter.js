import React from "react";

class Filter extends React.Component{
  state={
    value:''
  }
  handleFilter= (event)=>{
    this.setState({value:event.target.value})
    this.props.FilterChange(event.target.value)
  }
  render(){
        return(
            <section className="section filter">
            <div className="container">
              <form>
                <label className="movieTypeLabel">{this.props.type}</label>
                <select className="movieTypeSelect" onChange={this.handleFilter} >
                  <option value="">{this.props.optionText}</option>
                  <option value="Action">الأكشن</option>
                  <option value="Thriller">الغموض</option>
                  <option value="Drama">الدراما</option>
                  <option value="Comedy">الكوميدي</option>
                </select>
              </form>
            </div>
          </section>
        )
    }
}

export default Filter;