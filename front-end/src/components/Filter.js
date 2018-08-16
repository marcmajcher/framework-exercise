import React, { Component } from 'react';

class Filter extends Component {

    sortOptionChanged(event) {
        let sortOption = event.target.name;
        this.props.updateSortOption(sortOption);

    }

    searchTermChanged(event) {
        let newSearchTerm = event.target.value;
        this.props.updateSearchTerm(newSearchTerm);
    }

    render() { 
        return ( 
            <div className="flex-container">
                    <input type="text" className="form-control filter" placeholder="Filter" onKeyUp={event => this.searchTermChanged(event)}/>
                    {/* <span className="m-2">Sort By Votes</span> */}

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <button id="filter-btn" className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">filter</button>
                       <div className="dropdown-menu" onClick={event => this.sortOptionChanged(event)}>
                          <a className="dropdown-item" name="author" href="#">Author</a>
                          <a className="dropdown-item" name="title" href="#">Title</a>
                          <a className="dropdown-item" name="votes" href="#">Votes</a>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Filter;