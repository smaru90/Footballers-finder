import { Component } from "react";

import '../search-box/search-box.styles.css'

class SearchBox extends Component {

    render() {
        return (  <div>  
        <div>    
        <input
            className={ `search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
        />
        </div>  
        <div className="radio-boxes">
        <fieldset className="radio-box">
            <legend>Select Position:</legend>
            <p>
            <input type="radio" id="goalkeeper" name="drone" value="goalkeeper"
                    checked />
            <label for="goalkeeper">Goalkeeper</label>
            </p>
            <p>
            <input type="radio" id="defender" name="drone" value="defender"/>
            <label for="defender">Defender</label>
            </p>
            <p>
            <input type="radio" id="midfielder" name="drone" value="midfielder"/>
            <label for="midfielder">Midfielder</label>
            </p>
            <p>
            <input type="radio" id="striker" name="drone" value="striker"/>
            <label for="striker">Striker</label>
            </p>
            
        </fieldset>
        <fieldset className="radio-box">
            <legend>Select nationality:</legend>
            <p>
            <input type="radio" id="spain" name="drone" value="spain"
                    checked />
            <label for="spain">Spain</label>
            </p>
            <p>
            <input type="radio" id="portugal" name="drone" value="portugal"/>
            <label for="portugal">Portugal</label>
            </p>
            <p>
            <input type="radio" id="argentina" name="drone" value="argentina"/>
            <label for="argentina">Argentina</label>
            </p>
            <p>
            <input type="radio" id="brazil" name="drone" value="brazil"/>
            <label for="brazil">Brazil</label>
            </p>
            <p>
            <input type="radio" id="poland" name="drone" value="poland"/>
            <label for="poland">Poland</label>
            </p>
        </fieldset>
        <fieldset className="radio-box">
            <legend>Age:</legend>
            <p>
            <input type="radio" id="spain" name="drone" value="spain"
                    checked />
            <label for="spain">18-21</label>
            </p>
            <p>
            <input type="radio" id="portugal" name="drone" value="portugal"/>
            <label for="portugal">22-25</label>
            </p>
            <p>
            <input type="radio" id="argentina" name="drone" value="argentina"/>
            <label for="argentina">26-30</label>
            </p>
            <p>
            <input type="radio" id="brazil" name="drone" value="brazil"/>
            <label for="brazil">30+</label>
            </p>           
        </fieldset>
        <fieldset className="radio-box">
            <legend>Skill level:</legend>
            <p>
            <input type="radio" id="spain" name="drone" value="spain"
                    checked />
            <label for="spain">60-70</label>
            </p>
            <p>
            <input type="radio" id="portugal" name="drone" value="portugal"/>
            <label for="portugal">70-80</label>
            </p>
            <p>
            <input type="radio" id="argentina" name="drone" value="argentina"/>
            <label for="argentina">80-90</label>
            </p>
            <p>
            <input type="radio" id="brazil" name="drone" value="brazil"/>
            <label for="brazil">90+</label>
            </p>
          
        </fieldset>
        </div>
        </div>  
        )

    }
}

export default SearchBox;