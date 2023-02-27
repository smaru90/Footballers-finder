import "../search-box/search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
     
      <div>
        <div>
          <input
            className={`search-box ${ className}`}
            type="search"
            placeholder={ placeholder}
            onChange={ onChangeHandler}
          />
        </div>
        <div className="radio-boxes">
          <fieldset className="radio-box">
            <legend>Select Position:</legend>
            <p>
              <input
                type="radio"
                id="goalkeeper"
                name="player-position"
                value="goalkeeper"
                onChange={ onChangeHandler}
              />
              <label for="goalkeeper">Goalkeeper</label>
            </p>
            <p>
              <input
                type="radio"
                id="defender"
                name="player-position"
                value="defender"
                onChange={ onChangeHandler}
              />
              <label for="defender">Defender</label>
            </p>
            <p>
              <input
                type="radio"
                id="midfielder"
                name="player-position"
                value="midfielder"
                onChange={ onChangeHandler}
              />
              <label for="midfielder">Midfielder</label>
            </p>
            <p>
              <input
                type="radio"
                id="striker"
                name="player-position"
                value="striker"
                onChange={ onChangeHandler}
              />
              <label for="striker">Striker</label>
            </p>
          </fieldset>
          <fieldset className="radio-box">
            <legend>Select nationality:</legend>
            <p>
              <input
                type="radio"
                id="spain"
                name="player-nationality"
                value="spain"                
                onChange={ onChangeHandler}

                
              />
              <label for="spain">Spain</label>
            </p>
            <p>
              <input
                type="radio"
                id="portugal"
                name="player-nationality"
                value="portugal"
                
              />
              <label for="portugal">Portugal</label>
            </p>
            <p>
              <input
                type="radio"
                id="argentina"
                name="player-nationality"
                value="argentina"
              />
              <label for="argentina">Argentina</label>
            </p>
            <p>
              <input
                type="radio"
                id="brazil"
                name="player-nationality"
                value="brazil"
              />
              <label for="brazil">Brazil</label>
            </p>
            <p>
              <input
                type="radio"
                id="poland"
                name="player-nationality"
                value="poland"
              />
              <label for="poland">Poland</label>
            </p>
          </fieldset>
          <fieldset className="radio-box">
            <legend>Age:</legend>
            <p>
              <input
                type="radio"
                id="17-21"
                name="player-age"
                value="17-21"                
              />
              <label for="17-21">17-21</label>
            </p>
            <p>
              <input
                type="radio"
                id="22-25"
                name="player-age"
                value="22-25"
              />
              <label for="22-25">22-25</label>
            </p>
            <p>
              <input
                type="radio"
                id="26-30"
                name="player-age"
                value="26-30"
              />
              <label for="26-30">26-30</label>
            </p>
            <p>
              <input
                type="radio"
                id="30+"
                name="player-age"
                value="30+"
              />
              <label for="30+">30+</label>
            </p>
          </fieldset>
          <fieldset className="radio-box">
            <legend>Skill level:</legend>
            <p>
              <input
                type="radio"
                id="61-70"
                name="player-skill"
                value="61-70"                
              />
              <label for="61-70">61-70</label>
            </p>
            <p>
              <input
                type="radio"
                id="71-80"
                name="player-skill"
                value="71-80"
              />
              <label for="71-80">71-80</label>
            </p>
            <p>
              <input
                type="radio"
                id="81-89"
                name="player-skill"
                value="81-89"
              />
              <label for="81-89">81-89</label>
            </p>
            <p>
              <input
                type="radio"
                id="90+"
                name="player-skill"
                value="90+"
              />
              <label for="90+">90+</label>
            </p>
          </fieldset>
        </div>
        <br/>
      </div>
    );
  
export default SearchBox;
